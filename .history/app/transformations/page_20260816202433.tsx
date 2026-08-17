"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Quote, Star, ArrowRight } from "lucide-react";

import TransformationsSection from "@/components/sections/TransformationsSection";
import FinalCTA from "@/components/sections/FinalCTA";
import InnerPageHero from "@/components/ui/InnerPageHero";
import ScrollRevealSection from "@/components/ui/ScrollRevealSection";
import SplitRevealText from "@/components/ui/SplitRevealText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, useGSAP);
}

const ARCHIVE_TESTIMONIALS = [
  {
    quote:
      "I used to carry insomnia and a knot in my stomach every single night. After practicing the Ho'oponopono methodology guided by Mohiniraj, my body feels relaxed for the first time in ten years.",
    name: "Vikram S.",
    role: "Senior Executive",
    city: "Mumbai, India",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "The clarity I gained during the 1:1 guidance was unexpected. Mohiniraj helped me pinpoint a subconscious memory from childhood that was blocking my business decisions.",
    name: "Priya N.",
    role: "Founder",
    city: "Bengaluru, India",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "Simple, profound, and deeply practical. No jargon, no fluff. Just pure emotional freedom.",
    name: "David M.",
    role: "Architect",
    city: "London, UK",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "My relationship with my parents transformed completely after I cleaned the emotional debt I held towards them.",
    name: "Siddharth P.",
    role: "Consultant",
    city: "Dubai, UAE",
    image:
      "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TransformationsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // 1. Apple-style Watermark Kinetic Scrub
      if (watermarkRef.current) {
        gsap.to(watermarkRef.current, {
          xPercent: -30,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
          },
        });
      }

      // 2. Tesla/Apple Pinned Horizontal Reel Animation
      if (trackRef.current && horizontalSectionRef.current) {
        const getScrollAmount = () => {
          return -(trackRef.current!.scrollWidth - window.innerWidth + 120);
        };

        const tween = gsap.to(trackRef.current, {
          x: getScrollAmount,
          ease: "none",
          scrollTrigger: {
            trigger: horizontalSectionRef.current,
            start: "top top",
            end: () => `+=${trackRef.current!.scrollWidth - window.innerWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        // Scale & Depth effects on cards during horizontal pan
        const cards = gsap.utils.toArray<HTMLElement>(".apple-card");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { scale: 0.92, opacity: 0.75 },
            {
              scale: 1,
              opacity: 1,
              ease: "power1.out",
              scrollTrigger: {
                trigger: card,
                containerAnimation: tween,
                start: "left 90%",
                end: "left 40%",
                scrub: true,
              },
            }
          );
        });
      }
    },
    { scope: containerRef }
  );

  // Tesla Spotlight Dynamic Pointer Handler
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    card.style.setProperty("--mouse-x", `${x}px`);
    card.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <main
      ref={containerRef}
      className="relative w-full bg-brand-bg text-brand-charcoal min-h-screen pt-28 sm:pt-36 overflow-x-clip antialiased selection:bg-brand-champagne selection:text-white"
    >
      {/* Background Kinetic Typography Layer */}
      <div
        ref={watermarkRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-0 whitespace-nowrap text-[22vw] font-editorial font-semibold uppercase text-brand-charcoal/[0.025] select-none z-0 tracking-tighter"
      >
        ZERO STATE • LIBERATION • FREEDOM • CLARITY
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <InnerPageHero
          badge="Authentic Outcomes"
          titlePrefix="TRANSFORMATION"
          titleItalic="ARCHIVE."
          subtitle="Real stories of people returning to Zero State and reclaiming their inherent clarity."
          imageSrc="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop"
          imageAlt="Transformation reflection portrait"
          watermark="STORIES"
        />
      </div>

      {/* Featured Section */}
      <div className="relative z-10">
        <TransformationsSection />
      </div>

      {/* Apple/Tesla Style Pinned Horizontal Showcase */}
      <section
        ref={horizontalSectionRef}
        className="relative z-10 h-screen w-full flex flex-col justify-center overflow-hidden py-12"
      >
        {/* Section Header */}
        <div className="px-6 sm:px-16 max-w-7xl w-full mx-auto mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs font-mono text-brand-champagne uppercase tracking-[0.35em] inline-flex items-center gap-2 font-semibold mb-3">
              <Star className="w-3.5 h-3.5" />
              <span>MORE REFLECTIONS</span>
            </span>
            <SplitRevealText
              as="h2"
              className="text-4xl sm:text-6xl font-editorial font-light text-brand-charcoal tracking-tight"
            >
              VOICES OF LIBERATION
            </SplitRevealText>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-brand-brown tracking-widest uppercase">
            <span>Scroll to Explore</span>
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div className="w-full overflow-hidden flex items-center">
          <div
            ref={trackRef}
            className="flex gap-8 sm:gap-12 px-6 sm:px-16 w-max will-change-transform items-stretch"
          >
            {ARCHIVE_TESTIMONIALS.map((item, idx) => (
              <div
                key={idx}
                onMouseMove={handleMouseMove}
                className="apple-card group relative w-[85vw] sm:w-[540px] shrink-0 rounded-3xl p-8 sm:p-12 border border-white/80 bg-white/40 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.04)] transition-all duration-500 flex flex-col justify-between overflow-hidden"
                style={
                  {
                    "--mouse-x": "0px",
                    "--mouse-y": "0px",
                  } as React.CSSProperties
                }
              >
                {/* Tesla Dynamic Lighting Spotlight Overlay */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(212,175,55,0.08), transparent 40%)`,
                  }}
                />

                <div className="space-y-6 relative z-10">
                  <Quote className="w-10 h-10 text-brand-champagne/60 transition-transform duration-500 group-hover:scale-110 group-hover:text-brand-champagne" />
                  <p className="text-lg sm:text-2xl font-editorial font-light italic leading-relaxed text-brand-charcoal">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-5 border-t border-brand-charcoal/10 pt-8 mt-12 relative z-10">
                  <div className="relative w-14 h-14 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-md">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-base text-brand-charcoal group-hover:text-brand-champagne transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-xs text-brand-brown font-light uppercase tracking-wider">
                        {item.role}
                      </p>
                    </div>
                    <span className="text-xs text-brand-champagne font-mono font-semibold tracking-widest uppercase bg-brand-champagne/10 px-3 py-1 rounded-full">
                      {item.city}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call To Action */}
      <div className="relative z-10">
        <FinalCTA />
      </div>
    </main>
  );
}