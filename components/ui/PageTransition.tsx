"use client";

import { useEffect, useRef } from "react";
import { usePathname } from "next/navigation";
import { gsap } from "@/lib/animations/gsapUtils";

export default function PageTransition({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const overlayRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!overlayRef.current || !lineRef.current) return;

    const tl = gsap.timeline();

    tl.set(overlayRef.current, { opacity: 1, pointerEvents: "all" })
      .set(lineRef.current, { scaleX: 0, opacity: 1 })
      .to(lineRef.current, {
        scaleX: 1,
        duration: 0.35,
        ease: "power3.inOut",
      })
      .to(overlayRef.current, {
        opacity: 0,
        duration: 0.35,
        ease: "power2.out",
        onComplete: () => {
          if (overlayRef.current) {
            overlayRef.current.style.pointerEvents = "none";
          }
        },
      })
      .to(
        lineRef.current,
        {
          opacity: 0,
          duration: 0.2,
        },
        "-=0.2"
      );
  }, [pathname]);

  return (
    <>
      <div
        ref={overlayRef}
        className="fixed inset-0 z-[9990] pointer-events-none bg-brand-bg opacity-0 transition-opacity flex items-center justify-center"
      >
        <div
          ref={lineRef}
          className="h-[1px] w-full bg-gradient-to-r from-transparent via-brand-champagne to-transparent origin-left transform scale-x-0"
        />
      </div>
      {children}
    </>
  );
}
