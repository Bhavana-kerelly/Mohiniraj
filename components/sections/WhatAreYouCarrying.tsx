"use client";

import { useState, useEffect, useRef } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import { ScrollTrigger } from "@/lib/animations/gsapUtils";
import { ArrowDown, Sparkles } from "lucide-react";

const AbstractSilhouetteCanvas = dynamic(
  () => import("@/components/3d/AbstractSilhouetteCanvas"),
  { ssr: false, loading: () => <div className="w-full h-full opacity-30 bg-brand-sand/30 rounded-2xl animate-pulse" /> }
);

const CARRYING_THEMES = [
  {
    title: "STRESS",
    subtitle: "Chronic physiological tension & persistent internal alarm.",
    description: "Accumulated unreleased pressure from daily obligations creating subconscious resistance and physical exhaustion.",
    image: "/images/carrying/stress.jpg",
    fallback: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "OVERTHINKING",
    subtitle: "Endless cognitive loops dissecting past actions and future fears.",
    description: "An overactive mental buffer that drowns out intuition and prevents full presence in the current moment.",
    image: "/images/carrying/overthinking.jpg",
    fallback: "https://images.unsplash.com/photo-1517841905240-472988babdf9?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "REGRET",
    subtitle: "Lingering emotional debt attached to past decisions.",
    description: "Self-imposed grief over what was or could have been, trapping vital energy in non-existent timelines.",
    image: "/images/carrying/regret.jpg",
    fallback: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "SELF-DOUBT",
    subtitle: "Conditional self-worth and hidden imposter syndromes.",
    description: "Deeply entrenched subconscious beliefs that question your inherent capability, wisdom, and right to succeed.",
    image: "/images/carrying/self-doubt.jpg",
    fallback: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop",
  },
  {
    title: "FEAR OF THE FUTURE",
    subtitle: "Anxiety projecting uncertainty into catastrophic scenarios.",
    description: "The impulse to control every variable, resulting in chronic hypervigilance and loss of inner peace.",
    image: "/images/carrying/fear-of-the-future.jpg",
    fallback: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200&auto=format&fit=crop",
  },
];

export default function WhatAreYouCarrying() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [imageError, setImageError] = useState<{ [key: number]: boolean }>({});

  useEffect(() => {
    if (!sectionRef.current) return;

    const totalThemes = CARRYING_THEMES.length;

    const trigger = ScrollTrigger.create({
      trigger: sectionRef.current,
      start: "top top",
      end: `+=${totalThemes * 85}%`,
      pin: true,
      scrub: 0.5,
      onUpdate: (self) => {
        const index = Math.min(
          Math.floor(self.progress * totalThemes),
          totalThemes - 1
        );
        setActiveIndex(index);
      },
    });

    return () => trigger.kill();
  }, []);

  const currentTheme = CARRYING_THEMES[activeIndex];

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-brand-bg text-brand-charcoal flex items-center py-20 px-6 sm:px-8 lg:px-12 border-t border-brand-charcoal/10 overflow-hidden"
    >
      {/* Background Subtle 3D Ambient Layer behind photography */}
      <div className="absolute inset-0 z-0 opacity-20 pointer-events-none flex items-center justify-center">
        <AbstractSilhouetteCanvas activeIndex={activeIndex} />
      </div>

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Column — Large Editorial Text & Active Theme Display */}
        <div className="lg:col-span-6 space-y-6">
          <div>
            <span className="text-[9px] uppercase tracking-[0.3em] text-brand-champagne font-semibold flex items-center gap-2 mb-2">
              <Sparkles className="w-3 h-3" />
              <span>01 — Emotional Inventory</span>
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-editorial font-light tracking-tight text-brand-charcoal leading-[1.05]">
              WHAT ARE YOU <br />
              <span className="text-brand-brown italic">CARRYING?</span>
            </h2>
          </div>

          {/* Active Theme Display Container */}
          <div className="glass-panel-light p-6 rounded-2xl space-y-4 relative overflow-hidden transition-all duration-500 shadow-lg">
            <div className="flex items-center justify-between text-[11px] text-brand-brown font-mono tracking-widest border-b border-brand-charcoal/10 pb-3">
              <span>THEME 0{activeIndex + 1} / 0{CARRYING_THEMES.length}</span>
              <span className="uppercase font-semibold tracking-widest">{currentTheme.title}</span>
            </div>

            <div className="space-y-2">
              <h3 className="text-2xl sm:text-3xl font-editorial font-normal text-brand-charcoal">
                {currentTheme.title}
              </h3>
              <p className="text-xs text-brand-brown font-medium tracking-wide">
                {currentTheme.subtitle}
              </p>
              <p className="text-xs text-brand-charcoal/80 font-light leading-relaxed pt-1">
                {currentTheme.description}
              </p>
            </div>

            {/* Pagination dots */}
            <div className="flex items-center space-x-2 pt-2">
              {CARRYING_THEMES.map((_, idx) => (
                <div
                  key={idx}
                  className={`h-1.5 rounded-full transition-all duration-500 ${
                    idx === activeIndex
                      ? "w-6 bg-brand-champagne"
                      : "w-2 bg-brand-charcoal/20"
                  }`}
                />
              ))}
            </div>
          </div>

          <div className="flex items-center gap-2.5 text-[10px] text-brand-brown tracking-[0.25em] pt-1">
            <ArrowDown className="w-3.5 h-3.5 text-brand-champagne animate-bounce" />
            <span>SCROLL TO UNPACK EMOTIONAL WEIGHT</span>
          </div>
        </div>

        {/* Right Column — Large Human Editorial Portrait occupying 45-50% area with Overlapping Glass */}
        <div className="lg:col-span-6 relative flex justify-center">
          <div className="relative w-full max-w-md sm:max-w-lg h-[420px] sm:h-[520px] rounded-3xl overflow-hidden shadow-2xl border border-white/60 group">
            {/* Real Editorial Human Portrait Image */}
            <Image
              key={currentTheme.title}
              src={imageError[activeIndex] ? currentTheme.fallback : currentTheme.image}
              alt={`Emotional Inventory - ${currentTheme.title}`}
              fill
              onError={() => setImageError((prev) => ({ ...prev, [activeIndex]: true }))}
              className="object-cover transition-all duration-700 group-hover:scale-105"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 via-transparent to-transparent pointer-events-none" />

            {/* Overlapping Glass Caption Panel */}
            <div className="absolute bottom-5 left-5 right-5 glass-panel-light p-4 rounded-xl border-white/40 space-y-1.5 backdrop-blur-2xl">
              <span className="text-[9px] font-mono uppercase tracking-widest text-brand-brown block font-semibold">
                ACTIVE EMOTIONAL PATTERN
              </span>
              <div className="flex items-center justify-between text-brand-charcoal">
                <h4 className="text-lg font-editorial font-normal">
                  {currentTheme.title}
                </h4>
                <span className="text-[11px] font-mono text-brand-champagne">
                  0{activeIndex + 1}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
