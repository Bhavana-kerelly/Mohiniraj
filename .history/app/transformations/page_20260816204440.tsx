"use client";

import React, { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Quote, Star, ArrowRight } from "lucide-react";

import TransformationsSection from "@/components/sections/TransformationsSection";
import FinalCTA from "@/components/sections/FinalCTA";
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
      "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=800&auto=format&fit=crop",
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
    name: "Aarav M.",
    role: "Architect",
    city: "New Delhi, India",
    image:
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "My relationship with my parents transformed completely after I cleaned the emotional debt I held towards them.",
    name: "Siddharth P.",
    role: "Consultant",
    city: "Hyderabad, India",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TransformationsPage() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      // 0. Collision-safe cinematic hero animation
      if (heroRef.current && heroImageRef.current && heroContentRef.current && heroTitleRef.current) {
        const heroTitleLines = heroTitleRef.current.querySelectorAll(".hero-title-line");

        gsap.fromTo(heroContentRef.current, { y: 35, opacity: 0 }, {
          y: 0, opacity: 1, duration: 1, ease: "power3.out", delay: 0.15,
        });

        gsap.fromTo(heroTitleLines, { yPercent: 105, opacity: 0 }, {
          yPercent: 0, opacity: 1, duration: 1.1, stagger: 0.12,
          ease: "power4.out", delay: 0.25,
        });

        gsap.fromTo(heroImageRef.current,
          { y: 35, scale: 1.08, clipPath: "inset(8% 0% 8% 0% round 28px)" },
          { y: 0, scale: 1, clipPath: "inset(0% 0% 0% 0% round 28px)",
            duration: 1.25, ease: "power3.out", delay: 0.15 }
        );

        gsap.to(heroImageRef.current, {
          yPercent: -8, ease: "none",
          scrollTrigger: {
            trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1,
          },
        });

        gsap.to(heroContentRef.current, {
          yPercent: -5, ease: "none",
          scrollTrigger: {
            trigger: heroRef.current, start: "top top", end: "bottom top", scrub: 1,
          },
        });
      }

      // 1. Apple-style Watermark Kinetic Scrub
      if (watermarkRef.current) {
        gsap.to(watermarkRef.current, {
          xPercent: -20,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
          },
        });
      }

      // 2. Horizontal Scroll Track
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

        // Card Entrance Scale Effects
        const cards = gsap.utils.toArray<HTMLElement>(".apple-card");
        cards.forEach((card) => {
          gsap.fromTo(
            card,
            { scale: 0.94, opacity: 0.8 },
            {
              scale: 1,
              opacity: 1,
              ease: "power1.out",
              scrollTrigger: {
                trigger: card,
                containerAnimation: tween,
                start: "left 95%",
                end: "left 45%",
                scrub: true,
              },
            }
          );
        });
      }
    },
    { scope: containerRef }
  );

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
      className="relative w-full bg-brand-bg text-brand-charcoal min-h-screen pt-20 sm:pt-24 overflow-x-hidden antialiased selection:bg-brand-champagne selection:text-white"
    >
      {/* Background Kinetic Typography Layer */}
      <div
        ref={watermarkRef}
        aria-hidden="true"
        className="pointer-events-none absolute top-1/4 left-0 whitespace-nowrap text-[18vw] font-editorial font-semibold uppercase text-brand-charcoal/[0.02] select-none z-0 tracking-tighter"
      >
        ZERO STATE • LIBERATION • FREEDOM • CLARITY
      </div>

      {/* Collision-safe Cinematic Hero */}
      <section
        ref={heroRef}
        className="relative z-10 mx-auto w-full max-w-[1440px] px-6 pb-24 pt-24 sm:px-10 sm:pb-32 sm:pt-28 lg:px-14 lg:pb-40 lg:pt-32"
      >
        <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(420px,0.78fr)] lg:gap-16 xl:grid-cols-[minmax(0,1.08fr)_minmax(500px,0.78fr)] xl:gap-20">
          <div ref={heroContentRef} className="relative min-w-0">
            <div className="relative z-10 max-w-[760px]">
              <span className="mb-7 inline-flex text-[10px] font-mono font-semibold uppercase tracking-[0.35em] text-brand-champagne sm:mb-9 sm:text-xs">
                Authentic Outcomes
              </span>

              <div className="overflow-hidden">
                <h1
                  ref={heroTitleRef}
                  className="font-editorial font-light leading-[0.86] tracking-[-0.045em] text-brand-charcoal"
                >
                  <span className="hero-title-line block text-[clamp(4rem,8.2vw,8.4rem)]">
                    TRANSFORMATION
                  </span>
                  <span className="hero-title-line mt-2 block pl-[0.03em] text-[clamp(3.6rem,7.3vw,7.5rem)] italic text-brand-champagne sm:mt-3">
                    ARCHIVE.
                  </span>
                </h1>
              </div>

              <p className="mt-9 max-w-[620px] text-[1.05rem] font-light leading-[1.55] text-brand-brown sm:mt-12 sm:text-xl lg:text-[1.35rem]">
                Real stories of people returning to Zero State and reclaiming their inherent clarity.
              </p>
            </div>

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -left-10 top-[28%] -z-10 hidden whitespace-nowrap font-editorial text-[12vw] font-semibold uppercase leading-none tracking-[-0.08em] text-brand-charcoal/[0.025] xl:block"
            >
              STORIES
            </div>
          </div>

          <div
            ref={heroImageRef}
            className="relative ml-auto w-full max-w-[620px] overflow-hidden rounded-[28px] bg-brand-charcoal/5 lg:mt-12"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1200&auto=format&fit=crop"
                alt="Transformation reflection portrait"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 46vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Transformations Section */}
      <div className="relative z-10">
        <TransformationsSection />
      </div>

      {/* Horizontal Carousel Section */}
      <section
        ref={horizontalSectionRef}
        className="relative z-10 h-screen w-full flex flex-col justify-center overflow-hidden py-12"
      >
        <div className="px-6 sm:px-16 max-w-7xl w-full mx-auto mb-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4 shrink-0">
          <div>
            <span className="text-xs font-mono text-brand-champagne uppercase tracking-[0.35em] inline-flex items-center gap-2 font-semibold mb-3">
              <Star className="w-3.5 h-3.5" />
              <span>MORE REFLECTIONS</span>
            </span>
            <SplitRevealText
              as="h2"
              className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-light text-brand-charcoal tracking-tight"
            >
              VOICES OF LIBERATION
            </SplitRevealText>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs font-mono text-brand-brown tracking-widest uppercase">
            <span>Scroll to Explore</span>
            <ArrowRight className="w-4 h-4 animate-pulse" />
          </div>
        </div>

        {/* Scroll Track */}
        <div className="w-full overflow-hidden flex items-center">
          <div
            ref={trackRef}
            className="flex gap-6 sm:gap-10 px-6 sm:px-16 w-max will-change-transform items-stretch"
          >
            {ARCHIVE_TESTIMONIALS.map((item, idx) => (
              <div
                key={idx}
                onMouseMove={handleMouseMove}
                className="apple-card group relative w-[85vw] sm:w-[480px] shrink-0 rounded-3xl p-8 sm:p-10 border border-white/80 bg-white/50 backdrop-blur-md shadow-[0_20px_50px_rgba(0,0,0,0.03)] transition-all duration-500 flex flex-col justify-between overflow-hidden"
                style={
                  {
                    "--mouse-x": "0px",
                    "--mouse-y": "0px",
                  } as React.CSSProperties
                }
              >
                {/* Spotlight Overlay */}
                <div
                  className="pointer-events-none absolute -inset-px rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(212,175,55,0.1), transparent 40%)`,
                  }}
                />

                <div className="space-y-6 relative z-10">
                  <Quote className="w-8 h-8 text-brand-champagne/70 transition-transform duration-500 group-hover:scale-110 group-hover:text-brand-champagne" />
                  <p className="text-base sm:text-xl font-editorial font-light italic leading-relaxed text-brand-charcoal">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div className="flex items-center gap-4 border-t border-brand-charcoal/10 pt-6 mt-8 relative z-10">
                  <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border-2 border-white shadow-sm">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                  </div>
                  <div className="flex-1 flex items-center justify-between min-w-0">
                    <div className="truncate">
                      <h3 className="font-semibold text-sm sm:text-base text-brand-charcoal group-hover:text-brand-champagne transition-colors duration-300 truncate">
                        {item.name}
                      </h3>
                      <p className="text-[11px] text-brand-brown font-light uppercase tracking-wider truncate">
                        {item.role}
                      </p>
                    </div>
                    <span className="text-[10px] text-brand-champagne font-mono font-semibold tracking-widest uppercase bg-brand-champagne/10 px-2.5 py-1 rounded-full shrink-0 ml-2">
                      {item.city}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <div className="relative z-10">
        <FinalCTA />
      </div>
    </main>
  );
}
