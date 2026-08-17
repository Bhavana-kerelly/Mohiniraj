"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Quote, Star } from "lucide-react";

import TransformationsSection from "@/components/sections/TransformationsSection";
import FinalCTA from "@/components/sections/FinalCTA";
import InnerPageHero from "@/components/ui/InnerPageHero";
import ScrollRevealSection from "@/components/ui/ScrollRevealSection";
import SplitRevealText from "@/components/ui/SplitRevealText";
import InteractiveCard from "@/components/ui/InteractiveCard";

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

function TransformationsClientContent() {
  const containerRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLDivElement | null)[]>([]);

  useGSAP(
    () => {
      // 1. Horizontal Parallax Watermark Scrub
      if (watermarkRef.current) {
        gsap.to(watermarkRef.current, {
          xPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 1.2,
          },
        });
      }

      // 2. Asymmetric Column Parallax on Cards
      cardsRef.current.forEach((card, idx) => {
        if (!card) return;

        const isEven = idx % 2 === 0;
        const yOffset = isEven ? -40 : 40;

        gsap.fromTo(
          card,
          { y: isEven ? 30 : 60, opacity: 0 },
          {
            y: yOffset,
            opacity: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 88%",
              end: "bottom 20%",
              scrub: 1,
            },
          }
        );

        // Zoom image slightly on scroll pass
        const img = card.querySelector(".testimonial-img");
        if (img) {
          gsap.to(img, {
            scale: 1.15,
            ease: "none",
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          });
        }
      });
    },
    { scope: containerRef }
  );

  return (
    <main
      ref={containerRef}
      className="relative w-full bg-brand-bg text-brand-charcoal min-h-screen pt-28 sm:pt-36 overflow-hidden"
    >
      {/* Dynamic Parallax Background Watermark */}
      <div
        ref={watermarkRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/3 left-0 whitespace-nowrap text-[18vw] font-editorial font-bold uppercase text-brand-charcoal/[0.02] select-none z-0"
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

      {/* Archive Photo Essay Grid with Differential Parallax */}
      <ScrollRevealSection className="relative z-10 py-24 sm:py-32">
        <div className="text-center max-w-2xl mx-auto mb-20 space-y-4">
          <span className="text-xs font-mono text-brand-champagne uppercase tracking-[0.3em] inline-flex items-center gap-2 font-semibold">
            <Star className="w-3.5 h-3.5 animate-spin-slow" />
            <span>MORE REFLECTIONS</span>
          </span>
          <SplitRevealText
            as="h2"
            className="text-3xl sm:text-5xl font-editorial font-light text-brand-charcoal"
          >
            VOICES OF LIBERATION
          </SplitRevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 px-4 sm:px-8 max-w-7xl mx-auto">
          {ARCHIVE_TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              ref={(el) => {
                cardsRef.current[idx] = el;
              }}
              className="will-change-transform"
            >
              <InteractiveCard
                delay={idx * 0.12}
                cursorText="STORY"
                className="group relative p-8 sm:p-10 h-full flex flex-col justify-between border-white/70 backdrop-blur-xs transition-shadow duration-500 hover:shadow-2xl hover:border-brand-champagne/40"
              >
                <div className="space-y-6">
                  <Quote className="w-8 h-8 text-brand-champagne/50 transition-transform duration-500 group-hover:scale-110 group-hover:text-brand-champagne" />
                  <p className="text-base sm:text-lg font-editorial font-light italic leading-relaxed text-brand-charcoal">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-brand-charcoal/10 pt-6 mt-8 text-xs">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white/80 shadow-xs">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="testimonial-img object-cover transition-transform duration-700 ease-out"
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-between">
                    <div>
                      <h3 className="font-semibold text-brand-charcoal group-hover:text-brand-champagne transition-colors duration-300">
                        {item.name}
                      </h3>
                      <p className="text-brand-brown font-light">{item.role}</p>
                    </div>
                    <span className="text-brand-champagne font-mono font-semibold tracking-wider">
                      {item.city}
                    </span>
                  </div>
                </div>
              </InteractiveCard>
            </div>
          ))}
        </div>
      </ScrollRevealSection>

      {/* Final Call To Action */}
      <div className="relative z-10">
        <FinalCTA />
      </div>
    </main>
  );
}

export default TransformationsClientContent;