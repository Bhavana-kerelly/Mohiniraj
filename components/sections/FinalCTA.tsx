"use client";

import { ArrowUpRight } from "lucide-react";

export default function FinalCTA() {
  return (
    <section className="relative w-full py-16 sm:py-20 bg-brand-charcoal text-brand-sand border-t border-white/10 overflow-hidden flex items-center justify-center">
      {/* Subtle atmospheric ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-brand-champagne/15 rounded-full blur-[140px] pointer-events-none animate-pulse-slow" />

      <div className="max-w-4xl mx-auto px-6 sm:px-8 text-center relative z-10 space-y-4 sm:space-y-5">
        <span className="text-[10px] uppercase tracking-[0.35em] text-brand-champagne font-semibold block">
          06 — Reclaim Your Peace
        </span>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-light tracking-tight text-brand-sand leading-[1.04]">
          READY TO COME <br />
          <span className="text-brand-champagne italic">BACK TO YOURSELF?</span>
        </h2>

        <p className="text-sm sm:text-base text-brand-sand/80 font-light max-w-lg mx-auto leading-relaxed">
          Begin the next part of your journey from emotional noise to deep inner clarity.
        </p>

        <div className="pt-3">
          <a
            href="https://go.mohiniraj.in/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full bg-brand-champagne text-brand-charcoal hover:bg-brand-sand text-xs tracking-[0.2em] font-semibold uppercase transition-all duration-300 shadow-xl shadow-brand-champagne/20 group"
            data-cursor="BEGIN"
          >
            <span>BEGIN YOUR JOURNEY</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
