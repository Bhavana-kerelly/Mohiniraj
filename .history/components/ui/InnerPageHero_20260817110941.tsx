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
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!heroRef.current) return;

    const ctx = gsap.context(() => {
      /* =====================================================
         WATERMARK PARALLAX
      ===================================================== */

      if (watermarkRef.current) {
        gsap.fromTo(
          watermarkRef.current,
          {
            xPercent: -8,
          },
          {
            xPercent: 8,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.2,
            },
          }
        );
      }

      /* =====================================================
         HERO CONTENT REVEAL
      ===================================================== */

      if (contentRef.current) {
        gsap.fromTo(
          contentRef.current,
          {
            opacity: 0,
            y: 35,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: "power3.out",
            delay: 0.05,
          }
        );
      }

      /* =====================================================
         BADGE
      ===================================================== */

      if (badgeRef.current) {
        gsap.fromTo(
          badgeRef.current,
          {
            opacity: 0,
            letterSpacing: "0.12em",
            y: 12,
          },
          {
            opacity: 1,
            letterSpacing: "0.32em",
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.2,
          }
        );
      }

      /* =====================================================
         SUBTITLE
      ===================================================== */

      if (subtitleRef.current) {
        gsap.fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            delay: 0.65,
          }
        );
      }

      /* =====================================================
         VIDEO INITIAL REVEAL
      ===================================================== */

      if (videoRef.current) {
        gsap.fromTo(
          videoRef.current,
          {
            scale: 1.1,
          },
          {
            scale: 1.03,
            duration: 2.2,
            ease: "power3.out",
          }
        );

        /* Scroll parallax */
        gsap.to(videoRef.current, {
          yPercent: 6,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
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
      x: x * 14,
      y: y * 9,
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
      duration: 1.4,
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
        pt-4
        sm:pt-6
        lg:pt-8
        pb-8
        overflow-hidden
      "
    >
      {/* =====================================================
          HERO FRAME
      ===================================================== */}

      <div
        className="
          relative
          w-full
          min-h-[680px]
          sm:min-h-[720px]
          lg:min-h-[760px]
          xl:min-h-[790px]
          overflow-hidden
          rounded-[1.75rem]
          sm:rounded-[2.25rem]
          lg:rounded-[2.75rem]
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
            VIDEO OVERLAY
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
            from-black/80
            via-black/30
            to-black/15
          "
        />

        {/* ===================================================
            LEFT TEXT GRADIENT
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
            SOFT VIGNETTE
        =================================================== */}

        <div
          className="
            absolute
            inset-0
            z-[3]
            pointer-events-none
            shadow-[inset_0_0_180px_rgba(0,0,0,0.30)]
          "
        />

        {/* ===================================================
            BACKGROUND WATERMARK
        =================================================== */}

        <div
          ref={watermarkRef}
          className="
            absolute
            right-[-2%]
            bottom-[-1%]
            z-[4]
            pointer-events-none
            select-none
            whitespace-nowrap
            overflow-hidden
          "
        >
          <span
            className="
              block
              font-editorial
              font-light
              uppercase
              leading-none
              tracking-[-0.055em]
              text-[18vw]
              lg:text-[15vw]
              text-white/[0.055]
            "
          >
            {watermark}
          </span>
        </div>

        {/* ===================================================
            HERO CONTENT
        =================================================== */}

        <div
          ref={contentRef}
          className="
            relative
            z-[10]
            flex
            min-h-[680px]
            sm:min-h-[720px]
            lg:min-h-[760px]
            xl:min-h-[790px]
            items-center
          "
        >
          <div
            className="
              w-full
              px-7
              sm:px-10
              lg:px-16
              xl:px-20
              py-20
              sm:py-24
              lg:py-28
            "
          >
            <div
              className="
                max-w-6xl
                xl:max-w-7xl
              "
            >
              {/* =============================================
                  BADGE
              ============================================= */}

              <span
                ref={badgeRef}
                className="
                  inline-flex
                  items-center
                  gap-3
                  text-[9px]
                  sm:text-[10px]
                  lg:text-[11px]
                  uppercase
                  tracking-[0.32em]
                  text-white/80
                  font-semibold
                  font-mono
                "
              >
                <span className="w-7 sm:w-9 h-px bg-brand-champagne/80" />

                {badge}
              </span>

              {/* =============================================
                  TITLE
              ============================================= */}

              <h1
                className="
                  mt-7
                  sm:mt-8
                  lg:mt-9
                  font-editorial
                  font-light
                  tracking-[-0.035em]
                  leading-[0.88]
                  text-white
                "
              >
                {/* First line */}

                <span
                  className="
                    block
                    text-[clamp(3.4rem,7vw,7.8rem)]
                  "
                >
                  <SplitRevealText
                    triggerOnScroll={false}
                    delay={0.15}
                  >
                    {titlePrefix}
                  </SplitRevealText>
                </span>

                {/* Second line */}

                <span
                  className="
                    block
                    mt-2
                    sm:mt-3
                    lg:mt-4
                    text-brand-champagne
                    italic
                    text-[clamp(3.6rem,7.2vw,8rem)]
                  "
                >
                  <SplitRevealText
                    triggerOnScroll={false}
                    delay={0.35}
                  >
                    {titleItalic}
                  </SplitRevealText>
                </span>
              </h1>

              {/* =============================================
                  SUBTITLE
              ============================================= */}

              <p
                ref={subtitleRef}
                className="
                  mt-7
                  sm:mt-8
                  lg:mt-9
                  max-w-xl
                  lg:max-w-2xl
                  text-sm
                  sm:text-base
                  lg:text-lg
                  xl:text-xl
                  text-white/75
                  font-light
                  leading-[1.7]
                "
              >
                {subtitle}
              </p>

              {/* =============================================
                  SMALL DECORATIVE LINE
              ============================================= */}

              <div
                className="
                  mt-8
                  sm:mt-10
                  flex
                  items-center
                  gap-4
                  text-white/50
                "
              >
                <div className="h-px w-12 bg-brand-champagne/60" />

                <span
                  className="
                    text-[9px]
                    sm:text-[10px]
                    font-mono
                    uppercase
                    tracking-[0.28em]
                  "
                >
                  Return to Zero State
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ===================================================
            BOTTOM ACCENT
        =================================================== */}

        <div
          className="
            absolute
            bottom-0
            left-0
            right-0
            z-[20]
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