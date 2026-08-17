"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations/gsapUtils";

interface InteractiveCardProps {
  children: ReactNode;
  className?: string;
  cursorText?: string;
  delay?: number;
  enableTilt?: boolean;
}

export default function InteractiveCard({
  children,
  className = "",
  cursorText = "EXPLORE",
  delay = 0,
  enableTilt = true,
}: InteractiveCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!cardRef.current) return;
    const el = cardRef.current;

    // Scroll trigger entrance
    const ctx = gsap.context(() => {
      gsap.fromTo(
        el,
        {
          y: 50,
          opacity: 0,
          scale: 0.96,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 1.0,
          delay,
          ease: "power3.out",
          scrollTrigger: {
            trigger: el,
            start: "top 90%",
            once: true,
          },
        }
      );
    }, cardRef);

    // Mouse tilt effect (desktop only)
    let handleMouseMove: ((e: MouseEvent) => void) | null = null;
    let handleMouseLeave: (() => void) | null = null;

    if (enableTilt && typeof window !== "undefined" && !("ontouchstart" in window)) {
      handleMouseMove = (e: MouseEvent) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;

        const tiltX = (y / (rect.height / 2)) * -6; // max -6 to +6 deg
        const tiltY = (x / (rect.width / 2)) * 6;

        gsap.to(el, {
          rotateX: tiltX,
          rotateY: tiltY,
          transformPerspective: 1000,
          ease: "power2.out",
          duration: 0.4,
        });
      };

      handleMouseLeave = () => {
        gsap.to(el, {
          rotateX: 0,
          rotateY: 0,
          ease: "power3.out",
          duration: 0.6,
        });
      };

      el.addEventListener("mousemove", handleMouseMove);
      el.addEventListener("mouseleave", handleMouseLeave);
    }

    return () => {
      ctx.revert();
      if (handleMouseMove) el.removeEventListener("mousemove", handleMouseMove);
      if (handleMouseLeave) el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [delay, enableTilt]);

  return (
    <div
      ref={cardRef}
      className={`glass-panel-light p-8 rounded-3xl transition-all duration-500 shadow-md hover:shadow-2xl hover:border-brand-champagne/40 transform-gpu ${className}`}
      data-cursor={cursorText}
    >
      {children}
    </div>
  );
}
