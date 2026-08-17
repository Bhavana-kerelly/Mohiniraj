"use client";

import { useEffect, useRef, ReactNode } from "react";
import { gsap, ScrollTrigger } from "@/lib/animations/gsapUtils";

interface ScrollRevealSectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  hasBackgroundPattern?: boolean;
}

export default function ScrollRevealSection({
  children,
  className = "",
  id,
  hasBackgroundPattern = false,
}: ScrollRevealSectionProps) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;
    const el = sectionRef.current;

    const ctx = gsap.context(() => {
      // Subtle section entrance effect
      gsap.fromTo(
        el,
        { opacity: 0.9, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: el,
            start: "top 92%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id={id}
      className={`relative py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-brand-charcoal/10 ${className}`}
    >
      {hasBackgroundPattern && (
        <div className="absolute inset-0 -z-10 pointer-events-none opacity-40 bg-[radial-gradient(#B6A47C_1px,transparent_1px)] [background-size:24px_24px]" />
      )}
      {children}
    </section>
  );
}
