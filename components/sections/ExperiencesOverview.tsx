"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, Users, User, Layers } from "lucide-react";

const EXPERIENCES_DATA = [
  {
    id: "workshops",
    icon: Users,
    tag: "GROUP IMMERSION",
    title: "LIVE WORKSHOPS",
    image: "/images/experiences/workshops.jpg",
    fallback: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
    desc: "Intensive collective healing spaces designed to initiate subconscious clearing through group Ho'oponopono field dynamics.",
    details: ["2-Day Immersive Sessions", "Guided Cleansing Audios", "Q&A & Direct Clearing"],
    link: "https://go.mohiniraj.in/",
  },
  {
    id: "guidance",
    icon: User,
    tag: "PRIVATE MENTORSHIP",
    title: "1:1 GUIDANCE",
    image: "/images/experiences/guidance.jpg",
    fallback: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
    desc: "High-touch, bespoke transformation mentorship tailored to dissecting specific life patterns, financial blocks, or relational debt.",
    details: ["Personalized Memory Mapping", "Direct Priority Access", "Tailored Practice Protocols"],
    link: "https://go.mohiniraj.in/",
  },
  {
    id: "programs",
    icon: Layers,
    tag: "STRUCTURED PATHWAY",
    title: "TRANSFORMATION PROGRAMS",
    image: "/images/experiences/programs.jpg",
    fallback: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    desc: "Comprehensive multi-week journeys for systematic integration, daily subconscious reset, and permanent emotional equilibrium.",
    details: ["Step-by-Step Curriculum", "Lifetime Audio Library", "Community Reflection Space"],
    link: "https://go.mohiniraj.in/",
  },
];

export default function ExperiencesOverview() {
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});

  return (
    <section className="relative w-full py-28 bg-brand-sand text-brand-charcoal border-t border-brand-charcoal/10 overflow-hidden">
      {/* Ambient background lighting */}
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-champagne/10 rounded-full blur-[160px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="space-y-3">
            <span className="text-[10px] uppercase tracking-[0.3em] text-brand-champagne font-semibold block">
              04 — Pathways
            </span>
            <h2 className="text-4xl sm:text-6xl font-editorial font-light tracking-tight text-brand-charcoal leading-tight">
              CURATED <span className="text-brand-champagne italic">EXPERIENCES.</span>
            </h2>
          </div>
          <p className="text-sm text-brand-brown font-light max-w-md">
            Choose the depth of immersion aligned with your current transformation journey.
          </p>
        </div>

        {/* Large Editorial Visual Modules */}
        <div className="space-y-12">
          {EXPERIENCES_DATA.map((exp, idx) => {
            const Icon = exp.icon;
            const isReverse = idx % 2 === 1;

            return (
              <div
                key={exp.id}
                className="glass-panel-light p-6 sm:p-10 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative overflow-hidden group shadow-lg hover:border-brand-champagne/40 transition-all duration-500"
              >
                {/* Image Component */}
                <div className={`lg:col-span-6 relative h-[320px] sm:h-[400px] rounded-2xl overflow-hidden shadow-xl ${isReverse ? "lg:order-2" : "lg:order-1"}`}>
                  <Image
                    src={imageError[exp.id] ? exp.fallback : exp.image}
                    alt={exp.title}
                    fill
                    onError={() => setImageError((prev) => ({ ...prev, [exp.id]: true }))}
                    className="object-cover transition-transform duration-1000 group-hover:scale-105"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/40 via-transparent to-transparent pointer-events-none" />
                </div>

                {/* Text Content Component */}
                <div className={`lg:col-span-6 space-y-6 ${isReverse ? "lg:order-1" : "lg:order-2"}`}>
                  <div className="flex items-center justify-between">
                    <div className="p-3 rounded-full border border-brand-charcoal/15 bg-white/60 text-brand-champagne">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-mono text-brand-champagne uppercase tracking-widest font-semibold">
                      {exp.tag}
                    </span>
                  </div>

                  <div className="space-y-2">
                    <h3 className="text-3xl sm:text-4xl font-editorial font-normal text-brand-charcoal group-hover:text-brand-champagne transition-colors">
                      {exp.title}
                    </h3>
                    <p className="text-sm sm:text-base text-brand-brown font-light leading-relaxed">
                      {exp.desc}
                    </p>
                  </div>

                  {/* Bullet Points */}
                  <div className="space-y-2 pt-2 border-t border-brand-charcoal/10 text-xs sm:text-sm text-brand-charcoal/80 font-light">
                    {exp.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-champagne" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4">
                    <a
                      href={exp.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-brand-charcoal text-brand-bg hover:bg-brand-champagne hover:text-brand-charcoal text-xs tracking-widest uppercase font-semibold transition-all duration-300 shadow-md group/btn"
                    >
                      <span>EXPLORE PATHWAY</span>
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
