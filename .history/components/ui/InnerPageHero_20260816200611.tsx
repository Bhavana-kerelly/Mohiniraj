"use client";

import { useEffect, useRef } from "react";
import SplitRevealText from "./SplitRevealText";
import ImageMaskReveal from "./ImageMaskReveal";
import { gsap, ScrollTrigger } from "@/lib/animations/gsapUtils";

interface InnerPageHeroProps {
  badge: string;
  titlePrefix: string;
  titleItalic: string;
  subtitle: string;
  imageSrc: string;
  imageAlt: string;
  watermark: string;
}

export default function InnerPageHero({
  badge,
  titlePrefix,
  titleItalic,
  subtitle,
  imageSrc,
  imageAlt,
  watermark,
}: InnerPageHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      // Watermark horizontal gliding motion on scroll
      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          { xPercent: -10 },
          {
            xPercent: 12,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1,
            },
          }
        );
      }

      // Badge letter-spacing & opacity animation
      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          { opacity: 0, tracking: "0.1em", y: 15 },
          { opacity: 1, tracking: "0.35em", y: 0, duration: 1.0, ease: "power3.out", delay: 0.1 }
        );
      }

      // Subtitle fade-up reveal
      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          { opacity: 0, y: 25 },
          { opacity: 1, y: 0, duration: 1.2, ease: "power3.out", delay: 0.4 }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto py-12 lg:py-20 overflow-hidden"
    >
      {/* Background Watermark Typography */}
      <div
        ref={watermarkRef}
        className="absolute top-1/2 -translate-y-1/2 left-0 -z-10 pointer-events-none select-none text-[18vw] font-editorial leading-none text-brand-charcoal/[0.035] whitespace-nowrap uppercase tracking-tighter"
      >
        {watermark}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        {/* Left Column: Heading & Subtitle */}
        <div className="lg:col-span-7 space-y-6 lg:space-y-8 relative z-10">
          <span
            ref={badgeRef}
            className="text-[10px] uppercase tracking-[0.35em] text-brand-champagne font-semibold block font-mono"
          >
            {badge}
          </span>

          <div className="space-y-2">
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-editorial font-light tracking-tight text-brand-charcoal leading-none">
              <SplitRevealText triggerOnScroll={false} delay={0.15}>
                {titlePrefix}
              </SplitRevealText>
              <br />
              <span className="text-brand-champagne italic inline-block mt-1">
                <SplitRevealText triggerOnScroll={false} delay={0.35}>
                  {titleItalic}
                </SplitRevealText>
              </span>
            </h1>
          </div>

          <p
            ref={subtitleRef}
            className="text-lg sm:text-2xl text-brand-brown font-light leading-relaxed max-w-xl"
          >
            {subtitle}
          </p>
        </div>

        {/* Right Column: Hero Image Mask */}
        <div className="lg:col-span-5 relative z-10">
          <ImageMaskReveal
            src={imageSrc}
            alt={imageAlt}
            priority
            className="h-[400px] sm:h-[500px] w-full"
            cursorText="VIEW"
          />
        </div>
      </div>
    </section>
  );
}
