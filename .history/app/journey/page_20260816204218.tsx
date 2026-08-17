"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Compass, Shield, Heart, Feather } from "lucide-react";
import FinalCTA from "@/components/sections/FinalCTA";
import InnerPageHero from "@/components/ui/InnerPageHero";
import SplitRevealText from "@/components/ui/SplitRevealText";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PILLARS = [
  {
    icon: Shield,
    title: "Subconscious Ownership",
    desc: "Accepting 100% responsibility for internal projections without guilt or blame.",
    number: "01",
  },
  {
    icon: Heart,
    title: "Forgiveness Release",
    desc: "Dissolving old emotional debt and generational memories with divine love.",
    number: "02",
  },
  {
    icon: Feather,
    title: "Zero State Neutrality",
    desc: "Reaching the unconditioned state of mind free from anxiety and future projection.",
    number: "03",
  },
  {
    icon: Compass,
    title: "Inspired Action",
    desc: "Operating from intuition and clarity rather than fear and reactive patterns.",
    number: "04",
  },
];

export default function JourneyClient() {
  const containerRef = useRef<HTMLDivElement>(null);
  const horizontalSectionRef = useRef<HTMLDivElement>(null);
  const horizontalTrackRef = useRef<HTMLDivElement>(null);
  const quoteCardRef = useRef<HTMLDivElement>(null);
  const philosophyTextRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Parallax for Philosophy Section Text & Image
      gsap.fromTo(
        philosophyTextRef.current,
        { y: 60, opacity: 0, filter: "blur(8px)" },
        {
          y: 0,
          opacity: 1,
          filter: "blur(0px)",
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: philosophyTextRef.current,
            start: "top 80%",
            end: "bottom 60%",
            scrub: 1,
          },
        }
      );

      // 2. Parallax 3D Tilt & Lift for Quote Card
      gsap.fromTo(
        quoteCardRef.current,
        { y: 100, rotateX: 6, scale: 0.96, opacity: 0 },
        {
          y: 0,
          rotateX: 0,
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: quoteCardRef.current,
            start: "top 85%",
            end: "top 40%",
            scrub: 1,
          },
        }
      );

      // 3. Apple/Tesla Style Pinned Horizontal Scroll for Pillars
      if (horizontalSectionRef.current && horizontalTrackRef.current) {
        const track = horizontalTrackRef.current;
        const totalScroll = track.scrollWidth - window.innerWidth + 120;

        gsap.to(track, {
          x: -totalScroll,
          ease: "none",
          scrollTrigger: {
            trigger: horizontalSectionRef.current,
            pin: true,
            scrub: 1,
            start: "top top",
            end: () => `+=${totalScroll}`,
            invalidateOnRefresh: true,
          },
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={containerRef}
      className="relative w-full bg-brand-bg text-brand-charcoal min-h-screen pt-28 sm:pt-36 overflow-x-hidden selection:bg-brand-champagne/20"
    >
      {/* Background Lighting Ambient Mesh */}
      <div className="pointer-events-none fixed inset-0 z-0 opacity-40">
        <div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] rounded-full bg-brand-champagne/15 blur-[140px]" />
        <div className="absolute top-[40%] right-[-5%] w-[600px] h-[600px] rounded-full bg-brand-sand/30 blur-[160px]" />
      </div>

      {/* Hero Section */}
      <div className="relative z-10">
        <InnerPageHero
          badge="Origin & Mission"
          titlePrefix="THE"
          titleItalic="JOURNEY."
          subtitle="From inner friction to effortless flow. Understanding the foundational philosophy behind authentic emotional liberation."
          imageSrc="/mohiniraj-journey-hero.jpg"
          imageAlt="Quiet Morning Reflection"
          watermark="JOURNEY"
        />
      </div>

      {/* Story & Philosophy Section */}
      <section className="relative z-10 py-24 sm:py-36 max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div ref={philosophyTextRef} className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-3">
              <span className="w-2 h-2 rounded-full bg-brand-champagne animate-pulse" />
              <span className="text-xs font-mono text-brand-champagne uppercase tracking-[0.35em] font-medium">
                01 — PHILOSOPHY
              </span>
            </div>

            <SplitRevealText
              as="h2"
              className="text-4xl sm:text-6xl font-editorial font-light text-brand-charcoal leading-[1.1] tracking-tight"
            >
              The Architecture of Subconscious Memory.
            </SplitRevealText>

            <div className="space-y-6 text-base sm:text-lg text-brand-charcoal/75 font-light leading-relaxed tracking-normal">
              <p className="border-l border-brand-champagne/40 pl-6 backdrop-blur-sm">
                Every human reaction, fear, or emotional barrier is not a flaw in character; it is stored data residing in the subconscious mind. We do not attract what we consciously want; we project what we subconsciously carry.
              </p>
              <p className="pl-6">
                Mohiniraj&apos;s journey began with a simple revelation: true healing does not require years of cognitive analysis. It requires direct, compassionate communion with the subconscious data using the timeless technology of forgiveness.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6" ref={quoteCardRef}>
            <div className="group relative p-8 sm:p-14 rounded-3xl bg-white/40 backdrop-blur-2xl border border-white/80 shadow-[0_20px_50px_rgba(0,0,0,0.04)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-700 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out pointer-events-none" />

              <div className="w-16 h-16 rounded-2xl border border-brand-champagne/30 bg-white/90 flex items-center justify-center text-brand-champagne shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 mb-8">
                <Compass className="w-7 h-7 stroke-[1.5]" />
              </div>

              <span className="text-xs text-brand-champagne/80 font-mono block uppercase font-medium tracking-[0.25em] mb-3">
                The Core Premise
              </span>

              <h3 className="text-2xl sm:text-3xl font-editorial font-normal text-brand-charcoal mb-6">
                The Core Premise
              </h3>

              <p className="text-lg sm:text-xl text-brand-charcoal/85 font-serif italic leading-relaxed font-light mb-8">
                &ldquo;You are already whole. You do not need to construct a new identity; you only need to clean the mirror of your subconscious to reveal your original light.&rdquo;
              </p>

              <div className="pt-6 border-t border-brand-charcoal/5 flex items-center justify-between">
                <span className="text-xs text-brand-champagne font-mono uppercase font-semibold tracking-widest">
                  — MOHINIRAJ
                </span>
                <span className="text-[10px] font-mono text-brand-charcoal/40 uppercase tracking-widest">
                  EST. PERSPECTIVE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Approach: Horizontal Pinned Section */}
      <section
        ref={horizontalSectionRef}
        className="relative z-10 min-h-screen bg-brand-sand/20 border-y border-brand-charcoal/5 flex flex-col justify-center overflow-hidden py-20"
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-12 w-full mb-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="space-y-4">
            <span className="text-xs font-mono text-brand-champagne uppercase tracking-[0.35em] font-semibold block">
              02 — THE METHODOLOGY
            </span>
            <SplitRevealText
              as="h2"
              className="text-4xl sm:text-6xl font-editorial font-light text-brand-charcoal tracking-tight"
            >
              FOUR PILLARS OF TRANSFORMATION
            </SplitRevealText>
          </div>
          <p className="text-xs font-mono text-brand-charcoal/50 uppercase tracking-widest">
            [ Scroll to Explore ]
          </p>
        </div>

        <div className="w-full overflow-hidden pl-6 lg:pl-12">
          <div ref={horizontalTrackRef} className="flex gap-8 w-max pr-24">
            {PILLARS.map((pillar, idx) => {
              const Icon = pillar.icon;
              return (
                <div
                  key={idx}
                  className="w-[320px] sm:w-[420px] h-[480px] p-8 sm:p-10 rounded-3xl bg-white/60 backdrop-blur-xl border border-white/90 shadow-[0_15px_35px_rgba(0,0,0,0.03)] hover:border-brand-champagne/40 flex flex-col justify-between group transition-all duration-500 relative overflow-hidden"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-14 h-14 rounded-2xl bg-white border border-brand-champagne/20 flex items-center justify-center text-brand-champagne shadow-sm group-hover:scale-105 transition-transform duration-500">
                      <Icon className="w-6 h-6 stroke-[1.5]" />
                    </div>
                    <span className="text-3xl font-mono font-extralight text-brand-champagne/40 group-hover:text-brand-champagne transition-colors duration-500">
                      {pillar.number}
                    </span>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-2xl font-editorial font-normal text-brand-charcoal group-hover:translate-x-1 transition-transform duration-300">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-brand-charcoal/70 font-light leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="w-full h-[2px] bg-brand-charcoal/5 group-hover:bg-brand-champagne/40 transition-colors duration-500" />
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="relative z-10">
        <FinalCTA />
      </div>
    </main>
  );
}