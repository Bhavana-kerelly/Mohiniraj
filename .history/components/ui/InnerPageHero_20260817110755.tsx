"use client";

import { useEffect, useRef } from "react";
import SplitRevealText from "./SplitRevealText";
import { gsap, ScrollTrigger } from "@/lib/animations/gsapUtils";

interface InnerPageHeroProps {
  badge: string;
  titlePrefix: string;
  titleItalic: string;
  subtitle: string;
  imageSrc?: string;
  imageAlt?: string;
  videoSrc?: string;
  watermark: string;
}

export default function InnerPageHero({
  badge,
  titlePrefix,
  titleItalic,
  subtitle,
  imageSrc,
  imageAlt = "",
  videoSrc,
  watermark,
}: InnerPageHeroProps) {
  const heroRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const watermarkRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const videoContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      /* =====================================================
         WATERMARK — HORIZONTAL GLIDING MOTION
      ===================================================== */

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

      /* =====================================================
         BADGE — FADE + LETTER SPACING
      ===================================================== */

      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          {
            opacity: 0,
            letterSpacing: "0.1em",
            y: 15,
          },
          {
            opacity: 1,
            letterSpacing: "0.35em",
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.1,
          }
        );
      }

      /* =====================================================
         SUBTITLE — FADE UP
      ===================================================== */

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 25,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.2,
            ease: "power3.out",
            delay: 0.4,
          }
        );
      }

      /* =====================================================
         VIDEO — INITIAL SCALE
      ===================================================== */

      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          {
            scale: 1.12,
          },
          {
            scale: 1.03,
            duration: 2,
            ease: "power3.out",
          }
        );

        /* Subtle parallax while scrolling */
        gsap.to(videoRef.current, {
          yPercent: 8,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      }

      /* =====================================================
         VIDEO CONTAINER — REVEAL
      ===================================================== */

      if (videoContainerRef.current) {
        gsap.fromTo(
          videoContainerRef.current,
          {
            clipPath: "inset(8% 4% 8% 4% round 32px)",
            opacity: 0,
          },
          {
            clipPath: "inset(0% 0% 0% 0% round 32px)",
            opacity: 1,
            duration: 1.5,
            ease: "power4.out",
            delay: 0.05,
          }
        );
      }
    }, heroRef);

    return () => ctx.revert();
  }, []);

  /* =====================================================
     MOUSE PARALLAX
  ===================================================== */

  const handleMouseMove = (
    event: React.MouseEvent<HTMLElement>
  ) => {
    if (!heroRef.current || !videoRef.current) return;

    const rect = heroRef.current.getBoundingClientRect();

    const x =
      (event.clientX - rect.left) / rect.width - 0.5;

    const y =
      (event.clientY - rect.top) / rect.height - 0.5;

    gsap.to(videoRef.current, {
      x: x * 18,
      y: y * 12,
      duration: 1.2,
      ease: "power3.out",
      overwrite: "auto",
    });
  };

  const handleMouseLeave = () => {
    if (!videoRef.current) return;

    gsap.to(videoRef.current, {
      x: 0,
      y: 0,
      duration: 1.5,
      ease: "power3.out",
    });
  };

  return (
    <section
      ref={heroRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="
        relative
        w-full
        px-4
        sm:px-6
        lg:px-8
        py-8
        sm:py-12
        lg:py-16
        overflow-hidden
      "
    >
      {/* =====================================================
          BACKGROUND WATERMARK
      ===================================================== */}

      <div
        ref={watermarkRef}
        className="
          absolute
          top-1/2
          -translate-y-1/2
          left-0
          pointer-events-none
          select-none
          z-0
          text-[18vw]
          font-editorial
          leading-none
          text-brand-charcoal/[0.035]
          whitespace-nowrap
          uppercase
          tracking-tighter
        "
      >
        {watermark}
      </div>

      {/* =====================================================
          HERO VIDEO CONTAINER
      ===================================================== */}

      <div
        ref={videoContainerRef}
        className="
          relative
          w-full
          min-h-[680px]
          sm:min-h-[720px]
          lg:min-h-[780px]
          overflow-hidden
          rounded-[2rem]
          sm:rounded-[2.5rem]
          lg:rounded-[3rem]
          bg-brand-charcoal
          isolate
        "
      >
        {/* ===================================================
            VIDEO BACKGROUND
        =================================================== */}

        {videoSrc ? (
          <video
            ref={videoRef}
            src={videoSrc}
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            aria-label={imageAlt}
            className="
              absolute
              inset-[-3%]
              w-[106%]
              h-[106%]
              object-cover
              will-change-transform
            "
          />
        ) : imageSrc ? (
          <img
            src={imageSrc}
            alt={imageAlt}
            className="
              absolute
              inset-[-3%]
              w-[106%]
              h-[106%]
              object-cover
            "
          />
        ) : (
          <div className="absolute inset-0 bg-brand-charcoal" />
        )}

        {/* ===================================================
            CINEMATIC DARK OVERLAY
        =================================================== */}

        <div
          className="
            absolute
            inset-0
            z-[1]
            bg-black/25
          "
        />

        {/* ===================================================
            BOTTOM GRADIENT
        =================================================== */}

        <div
          className="
            absolute
            inset-0
            z-[2]
            bg-gradient-to-t
            from-black/75
            via-black/25
            to-black/10
          "
        />

        {/* ===================================================
            LEFT GRADIENT FOR TEXT READABILITY
        =================================================== */}

        <div
          className="
            absolute
            inset-0
            z-[2]
            bg-gradient-to-r
            from-black/55
            via-black/20
            to-transparent
          "
        />

        {/* ===================================================
            SUBTLE VIGNETTE
        =================================================== */}

        <div
          className="
            absolute
            inset-0
            z-[3]
            pointer-events-none
            shadow-[inset_0_0_180px_rgba(0,0,0,0.28)]
          "
        />

        {/* ===================================================
            HERO CONTENT
        =================================================== */}

        <div
          className="
            relative
            z-[10]
            flex
            min-h-[680px]
            sm:min-h-[720px]
            lg:min-h-[780px]
            flex-col
            justify-end
            px-6
            py-12
            sm:px-10
            sm:py-16
            lg:px-16
            lg:py-20
          "
        >
          {/* =================================================
              BADGE
          ================================================= */}

          <span
            ref={badgeRef}
            className="
              text-[10px]
              sm:text-xs
              uppercase
              tracking-[0.35em]
              text-white/80
              font-semibold
              block
              font-mono
              mb-6
            "
          >
            {badge}
          </span>

          {/* =================================================
              TITLE
          ================================================= */}

          <div className="space-y-2">
            <h1
              className="
                text-5xl
                sm:text-7xl
                lg:text-8xl
                xl:text-[7.5rem]
                font-editorial
                font-light
                tracking-tight
                text-white
                leading-[0.88]
                max-w-6xl
              "
            >
              <SplitRevealText
                triggerOnScroll={false}
                delay={0.15}
              >
                {titlePrefix}
              </SplitRevealText>

              <br />

              <span className="text-brand-champagne italic inline-block mt-2">
                <SplitRevealText
                  triggerOnScroll={false}
                  delay={0.35}
                >
                  {titleItalic}
                </SplitRevealText>
              </span>
            </h1>
          </div>

          {/* =================================================
              SUBTITLE
          ================================================= */}

          <p
            ref={subtitleRef}
            className="
              mt-7
              sm:mt-8
              text-sm
              sm:text-lg
              lg:text-xl
              text-white/75
              font-light
              leading-relaxed
              max-w-xl
            "
          >
            {subtitle}
          </p>
        </div>

        {/* ===================================================
            WATERMARK INSIDE VIDEO
        =================================================== */}

        <div
          className="
            absolute
            right-6
            sm:right-10
            lg:right-16
            bottom-6
            sm:bottom-10
            lg:bottom-12
            z-[5]
            pointer-events-none
            select-none
          "
        >
          <span
            className="
              font-editorial
              text-[clamp(4rem,10vw,9rem)]
              font-light
              leading-none
              tracking-[-0.06em]
              text-white/[0.07]
              uppercase
            "
          >
            {watermark}
          </span>
        </div>

        {/* ===================================================
            CINEMATIC BOTTOM LINE
        =================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-[10]
            h-px
            bg-gradient-to-r
            from-transparent
            via-brand-champagne/50
            to-transparent
          "
        />
      </div>
    </section>
  );
}