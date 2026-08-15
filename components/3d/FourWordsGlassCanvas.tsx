"use client";

import { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Text, Float, RoundedBox } from "@react-three/drei";
import * as THREE from "three";
import { WebGLFallbackWrapper, isWebGLAvailable } from "./WebGLFallbackWrapper";

interface FourWordsGlassCanvasProps {
  onSelectWord: (index: number) => void;
}

const PHRASES = [
  { title: "I'M SORRY", sub: "Acknowledging Responsibility", pos: [-2.2, 1.1, 0] },
  { title: "PLEASE FORGIVE ME", sub: "Releasing Resistance", pos: [2.2, 1.1, 0] },
  { title: "THANK YOU", sub: "Gratitude & Transmutation", pos: [-2.2, -1.1, 0] },
  { title: "I LOVE YOU", sub: "Unconditional Harmony", pos: [2.2, -1.1, 0] },
];

function GlassCardMesh({
  title,
  sub,
  position,
  index,
  onSelect,
}: {
  title: string;
  sub: string;
  position: [number, number, number];
  index: number;
  onSelect: (index: number) => void;
}) {
  const meshRef = useRef<THREE.Group>(null);
  const [hovered, setHovered] = useState(false);

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.y = THREE.MathUtils.lerp(
        meshRef.current.rotation.y,
        hovered ? 0.25 : (state.mouse.x * 0.12 + (index % 2 === 0 ? 0.04 : -0.04)),
        0.1
      );
      meshRef.current.rotation.x = THREE.MathUtils.lerp(
        meshRef.current.rotation.x,
        hovered ? -0.1 : (-state.mouse.y * 0.12),
        0.1
      );
    }
  });

  return (
    <Float speed={1.6 + index * 0.2} rotationIntensity={0.3} floatIntensity={0.5}>
      <group
        ref={meshRef}
        position={position}
        onPointerOver={() => setHovered(true)}
        onPointerOut={() => setHovered(false)}
        onClick={() => onSelect(index)}
        scale={hovered ? 1.08 : 1.0}
      >
        <RoundedBox args={[3.8, 1.8, 0.2]} radius={0.15} smoothness={4}>
          <meshPhysicalMaterial
            color={hovered ? "#F6F2EA" : "#E9E0D2"}
            transmission={0.88}
            opacity={0.9}
            transparent
            roughness={hovered ? 0.08 : 0.2}
            ior={1.45}
            metalness={0.1}
            clearcoat={0.9}
            clearcoatRoughness={0.1}
          />
        </RoundedBox>

        <Text
          position={[0, 0.2, 0.15]}
          fontSize={0.28}
          color={hovered ? "#B6A47C" : "#292925"}
          font="https://fonts.gstatic.com/s/cormorantgaramond/v16/0toCsdLLwAWA582PtBo1abMZe58.woff"
          anchorX="center"
          anchorY="middle"
        >
          {title}
        </Text>

        <Text
          position={[0, -0.3, 0.15]}
          fontSize={0.12}
          color="#6E6255"
          anchorX="center"
          anchorY="middle"
        >
          {sub.toUpperCase()}
        </Text>
      </group>
    </Float>
  );
}

function FourWordsFallbackHTML({ onSelectWord }: FourWordsGlassCanvasProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 p-4">
      {PHRASES.map((item, idx) => (
        <div
          key={item.title}
          onClick={() => onSelectWord(idx)}
          className="glass-panel-light p-8 rounded-3xl cursor-pointer space-y-3 hover:border-brand-champagne/40 transition-all duration-300 shadow-md group"
        >
          <span className="text-xs font-mono text-brand-champagne font-semibold block uppercase">
            0{idx + 1} — {item.sub}
          </span>
          <h3 className="text-3xl font-editorial text-brand-charcoal group-hover:text-brand-champagne transition-colors">
            {item.title}
          </h3>
          <p className="text-xs text-brand-brown font-light">
            Click to explore deep phrase wisdom
          </p>
        </div>
      ))}
    </div>
  );
}

export default function FourWordsGlassCanvas({ onSelectWord }: FourWordsGlassCanvasProps) {
  const [canRenderWebGL, setCanRenderWebGL] = useState(false);

  useEffect(() => {
    setCanRenderWebGL(isWebGLAvailable());
  }, []);

  const fallback = <FourWordsFallbackHTML onSelectWord={onSelectWord} />;

  if (!canRenderWebGL) {
    return (
      <div className="w-full min-h-[400px] relative">
        {fallback}
      </div>
    );
  }

  return (
    <div className="w-full h-[480px] sm:h-[580px] relative">
      <WebGLFallbackWrapper fallback={fallback}>
        <Canvas
          camera={{ position: [0, 0, 5.5], fov: 50 }}
          gl={{ alpha: true, antialias: true, failIfMajorPerformanceCaveat: false }}
        >
          <ambientLight intensity={1.2} />
          <directionalLight position={[10, 10, 10]} intensity={1.8} color="#F6F2EA" />
          <pointLight position={[-10, -10, -5]} intensity={1.0} color="#B6A47C" />

          {PHRASES.map((item, idx) => (
            <GlassCardMesh
              key={item.title}
              title={item.title}
              sub={item.sub}
              position={item.pos as [number, number, number]}
              index={idx}
              onSelect={onSelectWord}
            />
          ))}
        </Canvas>
      </WebGLFallbackWrapper>
    </div>
  );
}
