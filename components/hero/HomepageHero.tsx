"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Play, Sun, CircleDot, Sparkles } from "lucide-react";
import { gsap } from "@/lib/animations/gsapUtils";

export default function HomepageHero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const title1Ref = useRef<HTMLHeadingElement>(null);
  const title2Ref = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);

  const [hasVideo, setHasVideo] = useState(true);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

      // 1. Initial Title Reveal Timeline
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.fromTo(
        title1Ref.current,
        { opacity: 0, y: 35 },
        { opacity: 1, y: 0, duration: 1.1, delay: 0.2 }
      )
        .fromTo(
          title2Ref.current,
          { opacity: 0, y: 35 },
          { opacity: 1, y: 0, duration: 1.1 },
          "-=0.9"
        )
        .fromTo(
          subtitleRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1.0 },
          "-=0.7"
        )
        .fromTo(
          ctaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 1.0 },
          "-=0.8"
        )
        .fromTo(
          cardRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 1.2 },
          "-=0.6"
        );

      // 2. Mouse Parallax
      if (!prefersReducedMotion && containerRef.current) {
        const handleMouseMove = (e: MouseEvent) => {
          const { clientX, clientY } = e;
          const { innerWidth, innerHeight } = window;

          const moveX = (clientX / innerWidth - 0.5) * 2;
          const moveY = (clientY / innerHeight - 0.5) * 2;

          if (videoRef.current) {
            gsap.to(videoRef.current, {
              x: moveX * 4,
              y: moveY * 4,
              duration: 1.2,
              ease: "power1.out",
            });
          }

          const textContainer = containerRef.current?.querySelector(".hero-text-content");
          if (textContainer) {
            gsap.to(textContainer, {
              x: moveX * 2.5,
              y: moveY * 2.5,
              duration: 1,
              ease: "power1.out",
            });
          }
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-[100svh] min-h-[720px] overflow-hidden bg-[#EAE6DF] flex items-center text-[#23201D]"
    >
      {/* Background Video Layer - Framed & Bright on Mobile */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {hasVideo ? (
          <video
            ref={videoRef}
            autoPlay
            muted
            playsInline
            loop
            onError={() => setHasVideo(false)}
            className="w-full h-full object-cover object-[70%_center] md:object-center scale-105 transition-transform duration-1000 brightness-[0.95] md:brightness-[0.75] contrast-[1.05]"
          >
            <source src="/videos/mohiniraj-hero.mp4" type="video/mp4" />
          </video>
        ) : (
          <div className="w-full h-full bg-gradient-to-tr from-[#C5BDAC] via-[#D8D1C3] to-[#EAE4D7] relative" />
        )}

        {/* Soft vignette overlay tuned for crisp text on mobile & desktop */}
        <div className="absolute inset-0 bg-black/10 md:bg-black/15 z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#F5F1E8]/70 via-[#F5F1E8]/20 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-black/30 z-10 pointer-events-none" />
      </div>

      {/* Hero Main Content */}
      <div className="relative z-20 max-w-7xl mx-auto px-5 sm:px-8 lg:px-12 w-full pt-10 sm:pt-16 pb-36 sm:pb-24">
        <div className="hero-text-content max-w-xl space-y-6 pl-0 sm:pl-4 lg:pl-14">

          {/* Main Headline (Scaled Up for Mobile Impact) */}
          <div className="space-y-1 font-editorial text-6xl sm:text-6xl md:text-6xl lg:text-7xl tracking-tight leading-[0.96]">
            <h1 ref={title1Ref} className="block text-[#1F1C18] font-normal">
              COME<br />BACK
            </h1>
            <h2 ref={title2Ref} className="block text-[#B08D57] font-normal italic mt-1.5">
              TO YOURSELF.
            </h2>
          </div>

          {/* Horizontal Accent Separator Line */}
          <div className="w-12 sm:w-8 h-[2.5px] bg-[#B08D57]/80 my-3" />

          {/* Subtitle Description (Scaled Up on Mobile) */}
          <p
            ref={subtitleRef}
            className="text-base sm:text-base text-[#2E2A25] font-normal max-w-sm leading-relaxed"
          >
            A journey from emotional noise to inner clarity.<br className="hidden sm:inline" />
            Master subconscious release and experience authentic peace.
          </p>

          {/* CTA Buttons */}
          <div ref={ctaRef} className="pt-2 sm:pt-3 flex flex-wrap items-center gap-3.5 sm:gap-4">
            <a
              href="https://go.mohiniraj.in/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 sm:py-3 rounded-full bg-[#B3925F] hover:bg-[#9E7F4F] text-white text-xs tracking-[0.2em] font-semibold uppercase shadow-md shadow-[#B3925F]/20 transition-all duration-300 transform hover:-translate-y-0.5"
              data-cursor="BEGIN"
            >
              <span>BEGIN YOUR JOURNEY</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={() => {
                const el = document.getElementById("video-modal");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }}
              className="inline-flex items-center gap-2.5 text-xs tracking-[0.2em] font-semibold uppercase text-[#2E2A25] hover:text-[#B08D57] transition-colors py-1.5 group"
            >
              <span className="w-9 h-9 rounded-full bg-white/70 backdrop-blur-md border border-white/80 flex items-center justify-center shadow-sm group-hover:bg-[#B3925F] group-hover:text-white transition-all duration-300">
                <Play className="w-3 h-3 fill-current ml-0.5" />
              </span>
              <span>WATCH INTRO</span>
            </button>
          </div>
        </div>
      </div>

      {/* Floating 3-Column Glassmorphic Feature Cards (Moved UP & Scaled UP on Mobile) */}
      <div
        ref={cardRef}
        className="absolute bottom-10 sm:bottom-10 lg:bottom-14 left-4 right-4 sm:left-auto sm:right-8 lg:right-12 z-20 max-w-lg lg:max-w-xl w-auto sm:w-full"
      >
        <div className="rounded-2xl border border-white/90 bg-white/90 backdrop-blur-2xl p-4 sm:p-4 shadow-2xl shadow-black/15 text-[#2E2A25]">
          <div className="grid grid-cols-3 gap-2.5 sm:gap-3 divide-x divide-[#B59A63]/25">
            {/* Column 1 */}
            <div className="px-1.5 sm:px-3 space-y-1.5 flex flex-col justify-between">
              <div className="flex items-center gap-1.5">
                <div className="p-1.5 rounded-full bg-[#B59A63]/15 text-[#B59A63] shrink-0">
                  <Sparkles className="w-4 h-4" />
                </div>
                <h4 className="text-[11px] sm:text-[11px] tracking-[0.1em] sm:tracking-[0.15em] font-bold uppercase text-[#1F1C18]">
                  INNER CLARITY
                </h4>
              </div>
              <p className="text-[11px] sm:text-[11px] text-[#4A433A] leading-snug font-medium">
                Let go of what no longer serves you.
              </p>
            </div>

            {/* Column 2 */}
            <div className="pl-2.5 sm:pl-3 px-1.5 sm:px-3 space-y-1.5 flex flex-col justify-between">
              <div className="flex items-center gap-1.5">
                <div className="p-1.5 rounded-full bg-[#B59A63]/15 text-[#B59A63] shrink-0">
                  <Sun className="w-4 h-4" />
                </div>
                <h4 className="text-[11px] sm:text-[11px] tracking-[0.1em] sm:tracking-[0.15em] font-bold uppercase text-[#1F1C18]">
                  EMOTIONAL FREEDOM
                </h4>
              </div>
              <p className="text-[11px] sm:text-[11px] text-[#4A433A] leading-snug font-medium">
                Release the past and create peace within.
              </p>
            </div>

            {/* Column 3 */}
            <div className="pl-2.5 sm:pl-3 px-1.5 sm:px-3 space-y-1.5 flex flex-col justify-between">
              <div className="flex items-center gap-1.5">
                <div className="p-1.5 rounded-full bg-[#B59A63]/15 text-[#B59A63] shrink-0">
                  <CircleDot className="w-4 h-4" />
                </div>
                <h4 className="text-[11px] sm:text-[11px] tracking-[0.1em] sm:tracking-[0.15em] font-bold uppercase text-[#1F1C18]">
                  AUTHENTIC LIVING
                </h4>
              </div>
              <p className="text-[11px] sm:text-[11px] text-[#4A433A] leading-snug font-medium">
                Reconnect with yourself and live with purpose.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
