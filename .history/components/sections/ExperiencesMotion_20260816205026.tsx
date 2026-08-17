"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import FinalCTA from "@/components/sections/FinalCTA";
import SplitRevealText from "@/components/ui/SplitRevealText";
import ImageMaskReveal from "@/components/ui/ImageMaskReveal";
import { ArrowUpRight, Clock, ShieldCheck } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

const DETAILED_EXPERIENCES = [
  {
    title: "HO'OPONOPONO INTENSIVE WORKSHOP",
    type: "LIVE GROUP IMMERSION",
    duration: "2-Day Weekend Immersion",
    image:
      "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    desc: "A powerful group healing portal designed to clear subconscious blocks, dissolve anxiety, and reset your energetic field.",
    features: [
      "Live clearing sessions led directly by Mohiniraj",
      "Comprehensive subconscious memory mapping workbook",
      "Lifetime access to guided Ho'oponopono audio activations",
    ],
    link: "https://go.mohiniraj.in/",
  },
  {
    title: "PRIVATE 1:1 TRANSFORMATION MENTORSHIP",
    type: "BESPOKE PRIVATE GUIDANCE",
    duration: "3-Month Private Mentorship",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    desc: "Direct personal guidance for high-achieving individuals facing pivotal life transitions, relationship debt, or creative blocks.",
    features: [
      "Bi-weekly private 1:1 video consultations",
      "Direct Priority Support access",
      "Tailored subconscious cleaning protocols",
    ],
    link: "https://go.mohiniraj.in/",
  },
  {
    title: "INNER CHILD & MEMORY CLEARING PROGRAM",
    type: "STRUCTURED SELF-PACED PATHWAY",
    duration: "6-Week Digital Program",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834a5fb?q=80&w=1200&auto=format&fit=crop",
    desc: "A systematic step-by-step pathway to reconnect with your inner child, release childhood conditioning, and cultivate unshakeable peace.",
    features: [
      "6 core audio & video modules",
      "Weekly community reflection live calls",
      "Subconscious reset meditation suite",
    ],
    link: "https://go.mohiniraj.in/",
  },
];

export default function ExperiencesMotion() {
  const rootRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLElement>(null);
  const heroImageRef = useRef<HTMLDivElement>(null);
  const heroContentRef = useRef<HTMLDivElement>(null);
  const heroWatermarkRef = useRef<HTMLDivElement>(null);
  const experienceRefs = useRef<HTMLElement[]>([]);
  const imageRefs = useRef<HTMLElement[]>([]);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      // HERO — cinematic entrance
      if (heroRef.current && heroContentRef.current && heroImageRef.current) {
        const heroLines = heroContentRef.current.querySelectorAll(
          "[data-hero-line]"
        );

        const intro = gsap.timeline({
          defaults: { ease: "power4.out" },
        });

        intro
          .fromTo(
            heroContentRef.current,
            { y: 45, opacity: 0 },
            { y: 0, opacity: 1, duration: 1.05 }
          )
          .fromTo(
            heroLines,
            { yPercent: 110, opacity: 0 },
            {
              yPercent: 0,
              opacity: 1,
              duration: 1.15,
              stagger: 0.1,
            },
            "-=0.72"
          )
          .fromTo(
            heroImageRef.current,
            {
              y: 70,
              scale: 1.1,
              clipPath: "inset(9% 0% 9% 0% round 30px)",
            },
            {
              y: 0,
              scale: 1,
              clipPath: "inset(0% 0% 0% 0% round 30px)",
              duration: 1.35,
            },
            "-=1"
          );

        gsap.to(heroImageRef.current, {
          yPercent: -10,
          scale: 1.035,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });

        if (heroWatermarkRef.current) {
          gsap.to(heroWatermarkRef.current, {
            xPercent: -12,
            yPercent: -18,
            ease: "none",
            scrollTrigger: {
              trigger: heroRef.current,
              start: "top top",
              end: "bottom top",
              scrub: 1.5,
            },
          });
        }

        gsap.to(heroContentRef.current, {
          yPercent: -7,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1.1,
          },
        });
      }

      // SECTION INTRO — horizontal editorial reveal
      gsap.utils.toArray<HTMLElement>("[data-section-intro]").forEach(
        (section) => {
          const eyebrow = section.querySelector("[data-eyebrow]");
          const heading = section.querySelector("[data-section-heading]");
          const rule = section.querySelector("[data-section-rule]");

          gsap.fromTo(
            eyebrow,
            { x: -30, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 0.8,
              scrollTrigger: {
                trigger: section,
                start: "top 82%",
                once: true,
              },
            }
          );

          gsap.fromTo(
            heading,
            { x: 60, opacity: 0 },
            {
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 78%",
                once: true,
              },
            }
          );

          gsap.fromTo(
            rule,
            { scaleX: 0, transformOrigin: "left center" },
            {
              scaleX: 1,
              duration: 1.1,
              ease: "power3.inOut",
              scrollTrigger: {
                trigger: section,
                start: "top 78%",
                once: true,
              },
            }
          );
        }
      );

      // EXPERIENCE MODULES — alternating reveal + image parallax
      experienceRefs.current.forEach((card, index) => {
        if (!card) return;

        const content = card.querySelector("[data-card-content]");
        const image = imageRefs.current[index];

        gsap.fromTo(
          card,
          {
            y: 90,
            opacity: 0,
            rotateX: 4,
          },
          {
            y: 0,
            opacity: 1,
            rotateX: 0,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 84%",
              once: true,
            },
          }
        );

        if (content) {
          gsap.fromTo(
            content.children,
            { y: 28, opacity: 0 },
            {
              y: 0,
              opacity: 1,
              duration: 0.75,
              stagger: 0.07,
              ease: "power3.out",
              scrollTrigger: {
                trigger: card,
                start: "top 76%",
                once: true,
              },
            }
          );
        }

        if (image) {
          gsap.fromTo(
            image,
            {
              yPercent: 9,
              scale: 1.12,
            },
            {
              yPercent: -7,
              scale: 1.02,
              ease: "none",
              scrollTrigger: {
                trigger: card,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.25,
              },
            }
          );
        }
      });

      // Subtle horizontal drift on large editorial labels.
      gsap.utils.toArray<HTMLElement>("[data-drift]").forEach((item, index) => {
        gsap.to(item, {
          xPercent: index % 2 === 0 ? 5 : -5,
          ease: "none",
          scrollTrigger: {
            trigger: item,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.5,
          },
        });
      });

      // Refresh after all image/layout measurements settle.
      const refresh = () => ScrollTrigger.refresh();
      window.addEventListener("load", refresh);

      return () => window.removeEventListener("load", refresh);
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <main
      ref={rootRef}
      className="relative min-h-screen w-full overflow-x-clip bg-brand-bg text-brand-charcoal"
    >
      {/* Cinematic Hero */}
      <section
        ref={heroRef}
        className="relative min-h-[92svh] overflow-hidden px-6 pb-20 pt-28 sm:px-10 sm:pb-28 sm:pt-36 lg:px-14 lg:pt-40"
      >
        <div className="mx-auto grid min-h-[72svh] w-full max-w-[1440px] items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(390px,0.72fr)] lg:gap-16 xl:grid-cols-[minmax(0,1fr)_minmax(500px,0.72fr)] xl:gap-24">
          <div ref={heroContentRef} className="relative z-10 min-w-0">
            <div className="mb-7 overflow-hidden sm:mb-9">
              <span
                data-hero-line
                className="block text-[10px] font-mono font-semibold uppercase tracking-[0.35em] text-brand-champagne sm:text-xs"
              >
                Curated Pathways
              </span>
            </div>

            <div className="overflow-hidden">
              <h1 className="font-editorial font-light leading-[0.88] tracking-[-0.045em] text-brand-charcoal">
                <span
                  data-hero-line
                  className="block whitespace-nowrap text-[clamp(3.25rem,5.7vw,6.7rem)]"
                >
                  TRANSFORMATION
                </span>
                <span
                  data-hero-line
                  className="mt-2 block whitespace-nowrap pl-[0.03em] text-[clamp(3rem,5.25vw,6.2rem)] italic text-brand-champagne sm:mt-3"
                >
                  EXPERIENCES.
                </span>
              </h1>
            </div>

            <p
              data-hero-line
              className="mt-9 max-w-[620px] text-base font-light leading-[1.55] text-brand-brown sm:mt-12 sm:text-xl lg:text-[1.25rem]"
            >
              Choose the depth of engagement designed to align with your
              personal evolution.
            </p>
          </div>

          <div
            ref={heroImageRef}
            className="relative ml-auto w-full max-w-[610px] overflow-hidden rounded-[30px] bg-brand-charcoal/5"
          >
            <div className="relative aspect-[4/5] w-full">
              <Image
                src={DETAILED_EXPERIENCES[0].image}
                alt="Group immersion community reflection"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 44vw"
                className="object-cover object-center"
              />
            </div>
          </div>
        </div>

        <div
          ref={heroWatermarkRef}
          aria-hidden="true"
          data-drift
          className="pointer-events-none absolute -bottom-10 left-0 hidden whitespace-nowrap font-editorial text-[15vw] font-semibold uppercase leading-none tracking-[-0.08em] text-brand-charcoal/[0.035] xl:block"
        >
          PATHWAYS
        </div>
      </section>

      {/* Editorial section intro */}
      <section
        data-section-intro
        className="mx-auto w-full max-w-[1440px] px-6 py-20 sm:px-10 sm:py-28 lg:px-14 lg:py-36"
      >
        <div className="grid items-end gap-8 lg:grid-cols-[0.7fr_1.3fr]">
          <span
            data-eyebrow
            className="text-[10px] font-mono font-semibold uppercase tracking-[0.35em] text-brand-champagne"
          >
            The Pathways
          </span>

          <div>
            <div
              data-section-rule
              className="mb-7 h-px w-full bg-brand-charcoal/15"
            />
            <h2
              data-section-heading
              className="max-w-[900px] font-editorial text-4xl font-light leading-[0.98] tracking-[-0.035em] text-brand-charcoal sm:text-6xl lg:text-7xl"
            >
              Designed for different depths of transformation.
            </h2>
          </div>
        </div>
      </section>

      {/* Detailed Modules Showcase */}
      <section className="relative px-6 pb-24 sm:px-10 sm:pb-36 lg:px-14 lg:pb-48">
        <div className="mx-auto max-w-[1440px] space-y-16 sm:space-y-24 lg:space-y-32">
          {DETAILED_EXPERIENCES.map((exp, idx) => {
            const isEven = idx % 2 === 0;

            return (
              <article
                key={exp.title}
                ref={(node) => {
                  if (node) experienceRefs.current[idx] = node;
                }}
                className="group relative overflow-hidden rounded-[32px] border border-brand-charcoal/10 bg-white/35 p-6 shadow-[0_24px_80px_rgba(43,37,31,0.06)] sm:p-10 lg:p-12"
                style={{ perspective: "1200px" }}
              >
                <div
                  className={`grid items-center gap-10 lg:grid-cols-12 lg:gap-16 ${
                    isEven ? "" : "lg:[&>div:first-child]:order-2"
                  }`}
                >
                  <div
                    data-card-content
                    className="relative z-10 space-y-6 lg:col-span-7"
                  >
                    <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-brand-champagne">
                      <span className="rounded-full border border-brand-champagne/30 bg-white/70 px-3 py-1 font-semibold uppercase tracking-widest">
                        {exp.type}
                      </span>

                      <span className="flex items-center gap-1.5 text-brand-brown">
                        <Clock className="h-3.5 w-3.5" />
                        {exp.duration}
                      </span>
                    </div>

                    <SplitRevealText
                      as="h2"
                      className="max-w-[760px] text-3xl font-editorial font-normal leading-[0.98] text-brand-charcoal transition-colors duration-500 group-hover:text-brand-champagne sm:text-5xl lg:text-6xl"
                    >
                      {exp.title}
                    </SplitRevealText>

                    <p className="max-w-[650px] text-sm font-light leading-relaxed text-brand-brown sm:text-base">
                      {exp.desc}
                    </p>

                    <div className="space-y-2.5 border-t border-brand-charcoal/10 pt-5">
                      {exp.features.map((feat, fIdx) => (
                        <div
                          key={fIdx}
                          className="flex items-center gap-3 text-xs font-light text-brand-charcoal/90 sm:text-sm"
                        >
                          <ShieldCheck className="h-4 w-4 shrink-0 text-brand-champagne" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="pt-4">
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group/btn inline-flex items-center gap-3 rounded-full bg-brand-charcoal px-8 py-4 text-xs font-semibold uppercase tracking-[0.25em] text-brand-bg shadow-md transition-all duration-300 hover:bg-brand-champagne hover:text-brand-charcoal"
                        data-cursor="BEGIN"
                      >
                        <span>REGISTER NOW</span>
                        <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:-translate-y-0.5 group-hover/btn:translate-x-0.5" />
                      </a>
                    </div>
                  </div>

                  <div className="relative h-[360px] overflow-hidden rounded-[26px] sm:h-[460px] lg:col-span-5 lg:h-[600px]">
                    <div
                      ref={(node) => {
                        if (node) imageRefs.current[idx] = node;
                      }}
                      className="absolute inset-[-8%] will-change-transform"
                    >
                      <ImageMaskReveal
                        src={exp.image}
                        alt={exp.title}
                        className="h-full w-full"
                        sizes="(max-width: 1024px) 100vw, 40vw"
                        cursorText="EXPLORE"
                      />
                    </div>

                    <div
                      aria-hidden="true"
                      className="pointer-events-none absolute inset-0 bg-brand-charcoal/[0.035] transition-opacity duration-700 group-hover:opacity-0"
                    />
                  </div>
                </div>

                <span
                  aria-hidden="true"
                  data-drift
                  className="pointer-events-none absolute -bottom-10 right-4 font-editorial text-[13rem] font-semibold leading-none tracking-[-0.08em] text-brand-charcoal/[0.025]"
                >
                  0{idx + 1}
                </span>
              </article>
            );
          })}
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
