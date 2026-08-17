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
  const heroVideoRef = useRef<HTMLVideoElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroTitleRef = useRef<HTMLHeadingElement>(null);

  useGSAP(
    () => {
      /*
       * HERO
       * Full-screen cinematic video background
       */
      if (
        heroRef.current &&
        heroVideoRef.current &&
        heroContentRef.current &&
        heroTitleRef.current
      ) {
        const heroTitleLines =
          heroTitleRef.current.querySelectorAll(".hero-title-line");

        /*
         * Make sure the generated video starts playing.
         * This is useful because some browsers can delay autoplay.
         */
        const video = heroVideoRef.current;

        video.muted = true;

        const playVideo = async () => {
          try {
            await video.play();
          } catch {
            // Browser may block autoplay until interaction.
          }
        };

        playVideo();

        /*
         * Hero content entrance
         */
        gsap.fromTo(
          heroContentRef.current,
          {
            y: 40,
            opacity: 0,
          },
          {
            y: 0,
            opacity: 1,
            duration: 1.1,
            ease: "power3.out",
            delay: 0.15,
          }
        );

        /*
         * Individual title line reveal
         */
        gsap.fromTo(
          heroTitleLines,
          {
            yPercent: 110,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 1.15,
            stagger: 0.13,
            ease: "power4.out",
            delay: 0.3,
          }
        );

        /*
         * Subtle video entrance
         */
        gsap.fromTo(
          heroVideoRef.current,
          {
            scale: 1.08,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 1.6,
            ease: "power3.out",
            delay: 0,
          }
        );

        /*
         * Cinematic video parallax while scrolling.
         * The video moves slightly slower than the content.
         */
        gsap.to(heroVideoRef.current, {
          yPercent: 8,
          scale: 1.04,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        /*
         * Hero text moves slightly upward while scrolling.
         */
        gsap.to(heroContentRef.current, {
          yPercent: -8,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      }

      /*
       * BACKGROUND WATERMARK
       */
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

      /*
       * HORIZONTAL TESTIMONIAL SCROLL
       */
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
            end: () =>
              `+=${trackRef.current!.scrollWidth - window.innerWidth}`,
            pin: true,
            scrub: 1,
            invalidateOnRefresh: true,
          },
        });

        /*
         * Card entrance scale effects
         */
        const cards = gsap.utils.toArray<HTMLElement>(".apple-card");

        cards.forEach((card) => {
          gsap.fromTo(
            card,
            {
              scale: 0.94,
              opacity: 0.8,
            },
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
    {
      scope: containerRef,
  }
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
      className="
        relative
        min-h-screen
        w-full
        overflow-x-hidden
        bg-brand-bg
        text-brand-charcoal
        pt-20
        antialiased
        selection:bg-brand-champagne
        selection:text-white
        sm:pt-24
      "
    >
      {/* =====================================================
          BACKGROUND KINETIC TYPOGRAPHY
      ====================================================== */}
      <div
        ref={watermarkRef}
        aria-hidden="true"
        className="
          pointer-events-none
          absolute
          left-0
          top-1/4
          z-0
          select-none
          whitespace-nowrap
          font-editorial
          text-[18vw]
          font-semibold
          uppercase
          leading-none
          tracking-tighter
          text-brand-charcoal/[0.02]
        "
      >
        ZERO STATE • LIBERATION • FREEDOM • CLARITY
      </div>

      {/* =====================================================
          CINEMATIC VIDEO HERO
      ====================================================== */}
      <section
        ref={heroRef}
        className="
          relative
          z-10
          min-h-[calc(100svh-5rem)]
          w-full
          overflow-hidden
        "
      >
        {/* ---------------------------------------------------
            FULL HERO BACKGROUND VIDEO
        ---------------------------------------------------- */}
        <div className="absolute inset-0 overflow-hidden">
          <video
            ref={heroVideoRef}
            src="/videos/transformations-hero.mp4"
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-hidden="true"
            className="
              absolute
              inset-0
              h-full
              w-full
              object-cover
              object-center
              will-change-transform
            "
          />

          {/* Base cinematic overlay */}
          <div
            className="
              absolute
              inset-0
              bg-black/35
            "
          />

          {/* Left-side text readability */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-r
              from-black/75
              via-black/45
              via-55%
              to-black/10
            "
          />

          {/* Bottom cinematic fade */}
          <div
            className="
              absolute
              inset-x-0
              bottom-0
              h-1/3
              bg-gradient-to-t
              from-black/50
              to-transparent
            "
          />

          {/* Subtle warm atmospheric layer */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-br
              from-black/10
              via-transparent
              to-brand-champagne/10
            "
          />
        </div>

        {/* ---------------------------------------------------
            HERO CONTENT
        ---------------------------------------------------- */}
        <div
          ref={heroContentRef}
          className="
            relative
            z-10
            mx-auto
            flex
            min-h-[calc(100svh-5rem)]
            w-full
            max-w-[1440px]
            items-center
            px-6
            py-28
            sm:px-10
            sm:py-32
            lg:px-14
            lg:py-36
          "
        >
          <div className="w-full max-w-[780px]">
            {/* Badge */}
            <span
              className="
                mb-7
                inline-flex
                text-[10px]
                font-mono
                font-semibold
                uppercase
                tracking-[0.35em]
                text-brand-champagne
                sm:mb-9
                sm:text-xs
              "
            >
              Authentic Outcomes
            </span>

            {/* Heading */}
            <div className="w-full overflow-hidden">
              <h1
                ref={heroTitleRef}
                className="
                  w-full
                  font-editorial
                  font-light
                  leading-[0.88]
                  tracking-[-0.045em]
                  text-white
                "
              >
                <span
                  className="
                    hero-title-line
                    block
                    whitespace-nowrap
                    text-[clamp(3rem,7vw,7rem)]
                  "
                >
                  TRANSFORMATION
                </span>

                <span
                  className="
                    hero-title-line
                    mt-2
                    block
                    whitespace-nowrap
                    pl-[0.03em]
                    text-[clamp(3rem,6.4vw,6.5rem)]
                    italic
                    text-brand-champagne
                    sm:mt-3
                  "
                >
                  ARCHIVE.
                </span>
              </h1>
            </div>

            {/* Description */}
            <p
              className="
                mt-8
                max-w-[620px]
                text-[1.05rem]
                font-light
                leading-[1.6]
                text-white/80
                sm:mt-11
                sm:text-xl
                lg:text-[1.3rem]
              "
            >
              Real stories of people returning to Zero State and reclaiming
              their inherent clarity.
            </p>

            {/* Small visual divider */}
            <div className="mt-9 flex items-center gap-4 sm:mt-12">
              <div className="h-px w-12 bg-brand-champagne/70" />

              <span
                className="
                  text-[9px]
                  font-mono
                  uppercase
                  tracking-[0.3em]
                  text-white/60
                "
              >
                ZERO STATE
              </span>
            </div>
          </div>
        </div>

        {/* ---------------------------------------------------
            STORIES WATERMARK
        ---------------------------------------------------- */}
        <div
          aria-hidden="true"
          className="
            pointer-events-none
            absolute
            bottom-[4%]
            left-0
            z-[5]
            hidden
            whitespace-nowrap
            font-editorial
            text-[12vw]
            font-semibold
            uppercase
            leading-none
            tracking-[-0.08em]
            text-white/[0.045]
            xl:block
          "
        >
          STORIES
        </div>

        {/* Bottom scroll indicator */}
        <div
          className="
            absolute
            bottom-8
            right-6
            z-20
            hidden
            items-center
            gap-3
            text-[9px]
            font-mono
            uppercase
            tracking-[0.3em]
            text-white/50
            sm:flex
            lg:right-14
          "
        >
          <span>Scroll to explore</span>

          <span className="h-10 w-px bg-white/30" />
        </div>
      </section>

      {/* =====================================================
          FEATURED TRANSFORMATIONS
      ====================================================== */}
      <div className="relative z-10">
        <TransformationsSection />
      </div>

      {/* =====================================================
          HORIZONTAL TESTIMONIAL ARCHIVE
      ====================================================== */}
      <section
        ref={horizontalSectionRef}
        className="
          relative
          z-10
          flex
          h-screen
          w-full
          flex-col
          justify-center
          overflow-hidden
          py-12
        "
      >
        <div
          className="
            mx-auto
            mb-8
            flex
            w-full
            max-w-7xl
            shrink-0
            flex-col
            justify-between
            gap-4
            px-6
            sm:flex-row
            sm:items-end
            sm:px-16
          "
        >
          <div>
            <span
              className="
                mb-3
                inline-flex
                items-center
                gap-2
                text-xs
                font-mono
                font-semibold
                uppercase
                tracking-[0.35em]
                text-brand-champagne
              "
            >
              <Star className="h-3.5 w-3.5" />

              <span>MORE REFLECTIONS</span>
            </span>

            <SplitRevealText
              as="h2"
              className="
                font-editorial
                text-3xl
                font-light
                tracking-tight
                text-brand-charcoal
                sm:text-5xl
                lg:text-6xl
              "
            >
              VOICES OF LIBERATION
            </SplitRevealText>
          </div>

          <div
            className="
              hidden
              items-center
              gap-2
              text-xs
              font-mono
              uppercase
              tracking-widest
              text-brand-brown
              sm:flex
            "
          >
            <span>Scroll to Explore</span>

            <ArrowRight className="h-4 w-4 animate-pulse" />
          </div>
        </div>

        {/* Scroll Track */}
        <div className="flex w-full items-center overflow-hidden">
          <div
            ref={trackRef}
            className="
              flex
              w-max
              items-stretch
              gap-6
              px-6
              will-change-transform
              sm:gap-10
              sm:px-16
            "
          >
            {ARCHIVE_TESTIMONIALS.map((item, idx) => (
              <div
                key={idx}
                onMouseMove={handleMouseMove}
                className="
                  apple-card
                  group
                  relative
                  flex
                  w-[85vw]
                  shrink-0
                  flex-col
                  justify-between
                  overflow-hidden
                  rounded-3xl
                  border
                  border-white/80
                  bg-white/50
                  p-8
                  shadow-[0_20px_50px_rgba(0,0,0,0.03)]
                  backdrop-blur-md
                  transition-all
                  duration-500
                  sm:w-[480px]
                  sm:p-10
                "
                style={
                  {
                    "--mouse-x": "0px",
                    "--mouse-y": "0px",
                  } as React.CSSProperties
                }
              >
                {/* Spotlight Overlay */}
                <div
                  className="
                    pointer-events-none
                    absolute
                    -inset-px
                    rounded-3xl
                    opacity-0
                    transition-opacity
                    duration-500
                    group-hover:opacity-100
                  "
                  style={{
                    background:
                      "radial-gradient(500px circle at var(--mouse-x) var(--mouse-y), rgba(212,175,55,0.1), transparent 40%)",
                  }}
                />

                <div className="relative z-10 space-y-6">
                  <Quote className="h-8 w-8 text-brand-champagne/70 transition-transform duration-500 group-hover:scale-110 group-hover:text-brand-champagne" />

                  <p
                    className="
                      font-editorial
                      text-base
                      font-light
                      italic
                      leading-relaxed
                      text-brand-charcoal
                      sm:text-xl
                    "
                  >
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>

                <div
                  className="
                    relative
                    z-10
                    mt-8
                    flex
                    items-center
                    gap-4
                    border-t
                    border-brand-charcoal/10
                    pt-6
                  "
                >
                  <div
                    className="
                      relative
                      h-12
                      w-12
                      shrink-0
                      overflow-hidden
                      rounded-full
                      border-2
                      border-white
                      shadow-sm
                    "
                  >
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      sizes="48px"
                      className="
                        object-cover
                        transition-transform
                        duration-700
                        ease-out
                        group-hover:scale-105
                      "
                    />
                  </div>

                  <div className="flex min-w-0 flex-1 items-center justify-between">
                    <div className="truncate">
                      <h3
                        className="
                          truncate
                          text-sm
                          font-semibold
                          text-brand-charcoal
                          transition-colors
                          duration-300
                          group-hover:text-brand-champagne
                          sm:text-base
                        "
                      >
                        {item.name}
                      </h3>

                      <p
                        className="
                          truncate
                          text-[11px]
                          font-light
                          uppercase
                          tracking-wider
                          text-brand-brown
                        "
                      >
                        {item.role}
                      </p>
                    </div>

                    <span
                      className="
                        ml-2
                        shrink-0
                        rounded-full
                        bg-brand-champagne/10
                        px-2.5
                        py-1
                        text-[10px]
                        font-mono
                        font-semibold
                        uppercase
                        tracking-widest
                        text-brand-champagne
                      "
                    >
                      {item.city}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================
          FINAL CTA
      ====================================================== */}
      <div className="relative z-10">
        <FinalCTA />
      </div>
    </main>
  );
}