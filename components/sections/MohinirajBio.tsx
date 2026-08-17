"use client";

import { useState } from "react";
import Image from "next/image";
import { ShieldCheck, Compass } from "lucide-react";

const CREDENTIALS_TIMELINE = [
  {
    year: "FOUNDATION",
    title: "Ancient Hawaiian Lineage Mastery",
    desc: "Dedicated years to deep study and practical mastery of authentic Ho'oponopono spiritual lineage and subconscious clearing principles.",
  },
  {
    year: "METHODOLOGY",
    title: "Subconscious Memory Transmutation",
    desc: "Developed proprietary frameworks integrating ancient forgiveness tech with modern psychological and neuro-linguistic understanding.",
  },
  {
    year: "IMPACT",
    title: "Global Immersions & Private Mentorship",
    desc: "Facilitated intensive live workshops, 1:1 private guidance, and online immersions for high-achieving seekers across countries.",
  },
];

export default function MohinirajBio() {
  const [imageSrc, setImageSrc] = useState("/images/mohiniraj-portrait.jpg");

  return (
    <section className="relative w-full py-28 bg-brand-bg text-brand-charcoal border-t border-brand-charcoal/10 overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-brand-champagne/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Large Environmental Portrait taking up ~50% viewport width */}
          <div className="lg:col-span-6 relative flex justify-center">
            {/* Main Environmental Portrait Frame */}
            <div className="relative w-full max-w-md sm:max-w-lg h-[500px] sm:h-[620px] rounded-3xl overflow-hidden shadow-2xl border border-white/60 group">
              <Image
                src={imageSrc}
                alt="Mohiniraj Environmental Portrait"
                fill
                onError={() =>
                  setImageSrc(
                    "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1200&auto=format&fit=crop"
                  )
                }
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-charcoal/50 via-transparent to-transparent pointer-events-none" />
            </div>

            {/* Overlapping Light Glass Card Panel */}
            <div className="absolute -bottom-8 -right-2 sm:right-6 lg:-right-6 glass-panel-light p-6 sm:p-8 rounded-2xl border-white/80 max-w-sm shadow-2xl backdrop-blur-2xl z-20 space-y-3">
              <div className="flex items-center gap-3 text-brand-champagne">
                <ShieldCheck className="w-5 h-5" />
                <span className="text-[10px] tracking-widest uppercase font-semibold font-mono">
                  AUTHENTIC CORE
                </span>
              </div>
              <p className="text-xs sm:text-sm text-brand-charcoal font-light leading-relaxed italic font-serif">
                &ldquo;Healing is not about adding anything to yourself. It is the sacred process of stripping away what was never yours.&rdquo;
              </p>
              <span className="text-[10px] text-brand-brown tracking-widest block font-mono">
                — MOHINIRAJ
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Biography & Verified Timeline */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.3em] text-brand-champagne font-semibold block mb-3">
                03 — The Mentor
              </span>
              <h2 className="text-4xl sm:text-6xl font-editorial font-light tracking-tight text-brand-charcoal leading-tight">
                THE PERSON <br />
                <span className="text-brand-brown italic">BEHIND THE METHOD.</span>
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/80 font-light leading-relaxed">
              <p>
                Mohiniraj is a respected practitioner and guide in the realm of emotional release and subconscious transformation. With a dedicated focus on the ancient Hawaiian healing methodology of Ho&apos;oponopono, his work transcends conventional self-help to address the root memories stored within the human psyche.
              </p>
              <p>
                His approach combines gentle presence with rigorous internal alignment, helping individuals dissolve chronic anxiety, relationship patterns, and internal discord without dramatic force.
              </p>
            </div>

            {/* Timeline of Methodology & Experience */}
            <div className="pt-4 space-y-6">
              <h3 className="text-xs uppercase tracking-[0.25em] text-brand-champagne font-semibold border-b border-brand-charcoal/10 pb-3">
                Methodology & Foundation
              </h3>

              <div className="space-y-6">
                {CREDENTIALS_TIMELINE.map((item) => (
                  <div key={item.title} className="flex items-start gap-4 group">
                    <div className="w-2.5 h-2.5 rounded-full bg-brand-champagne mt-1.5 shrink-0 group-hover:scale-150 transition-transform" />
                    <div className="space-y-1">
                      <div className="flex items-center gap-3">
                        <span className="text-[10px] font-mono text-brand-champagne uppercase tracking-widest font-semibold">
                          {item.year}
                        </span>
                        <h4 className="text-sm font-semibold text-brand-charcoal">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-xs text-brand-brown font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
