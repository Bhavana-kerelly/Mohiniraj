"use client";

import { useEffect, useRef } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations/gsapUtils";

interface SplitRevealTextProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span" | "div";
  className?: string;
  stagger?: number;
  duration?: number;
  delay?: number;
  triggerOnScroll?: boolean;
}

export default function SplitRevealText({
  children,
  as: Component = "h2",
  className = "",
  stagger = 0.04,
  duration = 1.1,
  delay = 0,
  triggerOnScroll = true,
}: SplitRevealTextProps) {
  const containerRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const words = containerRef.current.querySelectorAll(".split-word-inner");
    if (!words || words.length === 0) return;

    gsap.set(words, {
      y: "110%",
      rotateX: -15,
      opacity: 0,
      transformOrigin: "0% 100%",
    });

    if (triggerOnScroll) {
      const ctx = gsap.context(() => {
        ScrollTrigger.create({
          trigger: containerRef.current,
          start: "top 88%",
          once: true,
          onEnter: () => {
            gsap.to(words, {
              y: "0%",
              rotateX: 0,
              opacity: 1,
              duration,
              delay,
              stagger,
              ease: "power4.out",
            });
          },
        });
      }, containerRef);

      return () => ctx.revert();
    } else {
      const anim = gsap.to(words, {
        y: "0%",
        rotateX: 0,
        opacity: 1,
        duration,
        delay,
        stagger,
        ease: "power4.out",
      });

      return () => {
        anim.kill();
      };
    }
  }, [children, duration, stagger, delay, triggerOnScroll]);

  // Split string into words wrapped in overflow-hidden spans
  const wordsArray = children.split(" ");

  return (
    <Component
      ref={containerRef as any}
      className={`perspective-1000 ${className}`}
    >
      {wordsArray.map((word, i) => (
        <span
          key={i}
          className="inline-block overflow-hidden align-top mr-[0.24em] last:mr-0 py-[0.05em]"
        >
          <span className="split-word-inner inline-block transform-gpu will-change-transform">
            {word}
          </span>
        </span>
      ))}
    </Component>
  );
}
