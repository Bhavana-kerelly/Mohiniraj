"use client";

import { useRef, useEffect, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Float, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import { WebGLFallbackWrapper, isWebGLAvailable } from "./WebGLFallbackWrapper";

interface SilhouetteMeshProps {
  activeIndex: number;
}

function SilhouetteMesh({ activeIndex }: SilhouetteMeshProps) {
  const meshRef = useRef<THREE.Mesh>(null);
  const fragmentsGroupRef = useRef<THREE.Group>(null);

  const colors = ["#B6A47C", "#6E6255", "#A8B0A0", "#D8CDBD", "#4D554A"];
  const targetColor = new THREE.Color(colors[activeIndex % colors.length]);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += delta * 0.3;
      meshRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.15;
    }

    if (fragmentsGroupRef.current) {
      fragmentsGroupRef.current.rotation.y -= delta * 0.15;
    }
  });

  return (
    <group>
      <Float speed={2} rotationIntensity={0.8} floatIntensity={1.2}>
        <mesh ref={meshRef} scale={1.4}>
          <icosahedronGeometry args={[1.5, 4]} />
          <MeshDistortMaterial
            color={targetColor}
            envMapIntensity={0.8}
            clearcoat={0.6}
            clearcoatRoughness={0.2}
            metalness={0.2}
            roughness={0.3}
            distort={0.35 + activeIndex * 0.05}
            speed={2}
            wireframe={activeIndex % 2 === 1}
          />
        </mesh>
      </Float>

      <group ref={fragmentsGroupRef}>
        {Array.from({ length: 16 }).map((_, i) => {
          const angle = (i / 16) * Math.PI * 2;
          const radius = 2.8 + (i % 3) * 0.4;
          const x = Math.cos(angle) * radius;
          const y = (i % 4 - 1.5) * 0.8;
          const z = Math.sin(angle) * radius;

          return (
            <mesh key={i} position={[x, y, z]} scale={0.22 + (i % 3) * 0.08}>
              <octahedronGeometry args={[0.5, 0]} />
              <meshPhysicalMaterial
                color="#B6A47C"
                transmission={0.85}
                opacity={0.7}
                transparent
                roughness={0.1}
                ior={1.4}
                thickness={0.5}
              />
            </mesh>
          );
        })}
      </group>

      <ambientLight intensity={1.0} />
      <directionalLight position={[5, 5, 5]} intensity={1.5} color="#F6F2EA" />
      <pointLight position={[-5, -5, -5]} intensity={0.8} color="#B6A47C" />
    </group>
  );
}

function FallbackVisual({ activeIndex }: { activeIndex: number }) {
  const titles = ["STRESS", "OVERTHINKING", "REGRET", "SELF-DOUBT", "FEAR OF THE FUTURE"];
  return (
    <div className="w-full h-full glass-panel-light rounded-3xl p-8 flex flex-col items-center justify-center space-y-4 text-center border-brand-champagne/30">
      <div className="w-24 h-24 rounded-full border border-brand-champagne/40 bg-white/80 flex items-center justify-center text-brand-champagne shadow-lg animate-pulse-slow">
        <span className="font-editorial text-3xl font-light">0{activeIndex + 1}</span>
      </div>
      <h4 className="text-xl font-editorial font-normal text-brand-charcoal">
        {titles[activeIndex % titles.length]}
      </h4>
      <p className="text-xs text-brand-brown font-light">
        Subconscious Emotional Energy Pattern
      </p>
    </div>
  );
}

export default function AbstractSilhouetteCanvas({ activeIndex }: { activeIndex: number }) {
  const [canRenderWebGL, setCanRenderWebGL] = useState(false);

  useEffect(() => {
    setCanRenderWebGL(isWebGLAvailable());
  }, []);

  const fallback = <FallbackVisual activeIndex={activeIndex} />;

  if (!canRenderWebGL) {
    return (
      <div className="w-full h-[350px] sm:h-[450px] relative">
        {fallback}
      </div>
    );
  }

  return (
    <div className="w-full h-[350px] sm:h-[450px] relative">
      <WebGLFallbackWrapper fallback={fallback}>
        <Canvas
          camera={{ position: [0, 0, 6], fov: 45 }}
          gl={{ antialias: true, alpha: true, failIfMajorPerformanceCaveat: false }}
          className="w-full h-full"
        >
          <SilhouetteMesh activeIndex={activeIndex} />
        </Canvas>
      </WebGLFallbackWrapper>
    </div>
  );
}
