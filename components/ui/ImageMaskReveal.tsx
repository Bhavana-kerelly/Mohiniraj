"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap, ScrollTrigger } from "@/lib/animations/gsapUtils";

interface ImageMaskRevealProps {
  src: string;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  priority?: boolean;
  aspectRatio?: string;
  parallaxSpeed?: number;
  cursorText?: string;
}

export default function ImageMaskReveal({
  src,
  alt,
  className = "",
  imageClassName = "",
  sizes = "(max-width: 1024px) 100vw, 50vw",
  priority = false,
  parallaxSpeed = 0.15,
  cursorText = "EXPLORE",
}: ImageMaskRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !imageRef.current) return;

    const container = containerRef.current;
    const imgEl = imageRef.current;

    const ctx = gsap.context(() => {
      // 1. Clip-path reveal timeline
      gsap.fromTo(
        container,
        {
          clipPath: "inset(16% 16% 16% 16% round 28px)",
          opacity: 0,
        },
        {
          clipPath: "inset(0% 0% 0% 0% round 24px)",
          opacity: 1,
          duration: 1.3,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: container,
            start: "top 88%",
            once: true,
          },
        }
      );

      // 2. Parallax move & scale on inner image
      gsap.fromTo(
        imgEl,
        {
          scale: 1.25,
          yPercent: -10 * parallaxSpeed * 10,
        },
        {
          scale: 1.05,
          yPercent: 10 * parallaxSpeed * 10,
          ease: "none",
          scrollTrigger: {
            trigger: container,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [parallaxSpeed]);

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden rounded-3xl shadow-2xl border border-white/60 group cursor-pointer ${className}`}
      data-cursor={cursorText}
    >
      <div
        ref={imageRef}
        className={`relative w-full h-full transform-gpu will-change-transform ${imageClassName}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/20 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-500 pointer-events-none" />
      </div>
    </div>
  );
}
