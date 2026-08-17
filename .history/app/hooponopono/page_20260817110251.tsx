"use client";

import { useState } from "react";
import FourWords from "@/components/sections/FourWords";
import FinalCTA from "@/components/sections/FinalCTA";
import InnerPageHero from "@/components/ui/InnerPageHero";
import ScrollRevealSection from "@/components/ui/ScrollRevealSection";
import SplitRevealText from "@/components/ui/SplitRevealText";
import InteractiveCard from "@/components/ui/InteractiveCard";
import { HelpCircle, CheckCircle2, ChevronDown } from "lucide-react";

const FAQS = [
  {
    q: "What does Ho'oponopono mean?",
    a: "Ho'oponopono is a Hawaiian word meaning 'to make right' or 'to correct an error'. It is a sacred practice of subconscious memory cleansing.",
  },
  {
    q: "Do I need prior meditation or spiritual experience?",
    a: "No prior experience is required. The four phrases are simple, universally resonant, and work directly on subconscious memory data.",
  },
  {
    q: "How often should I practice the four phrases?",
    a: "The practice can be integrated into your daily life anytime you feel emotional friction, anxiety, resentment, or stress.",
  },
  {
    q: "How does this differ from standard positive affirmations?",
    a: "Affirmations try to superimpose positive thoughts onto negative subconscious data. Ho'oponopono cleanses the negative data itself.",
  },
];

const STEPS = [
  {
    step: "01",
    title: "Notice the Emotion",
    desc: "Become aware of tension, anxiety, or judgment without suppressing it.",
  },
  {
    step: "02",
    title: "Direct Responsibility",
    desc: "Acknowledge that this feeling stems from a stored subconscious memory.",
  },
  {
    step: "03",
    title: "Repeat the Phrases",
    desc: "Silently recite: I'm sorry. Please forgive me. Thank you. I love you.",
  },
];

export default function HooponoponoPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const toggleFaq = (idx: number) => {
    setOpenFaq(openFaq === idx ? null : idx);
  };

  return (
    <main className="relative w-full bg-brand-bg text-brand-charcoal min-h-screen pt-28 sm:pt-36">

      {/* =========================================================
          HERO — CINEMATIC VIDEO
      ========================================================= */}
      <div className="relative z-10">
        <InnerPageHero
          badge="Ancient Healing Technology"
          titlePrefix="THE METHOD OF"
          titleItalic="LETTING GO."
          subtitle="Ho'oponopono is the sacred art of cleaning subconscious data and returning your heart to Zero State."
          imageAlt="A quiet moment of reflection and emotional release"
          watermark="METHOD"
        />
      </div>

      {/* =========================================================
          FOUR WORDS
      ========================================================= */}
      <FourWords />

      {/* =========================================================
          PRACTICAL GUIDE
      ========================================================= */}
      <ScrollRevealSection className="py-24 sm:py-32">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono text-brand-champagne uppercase tracking-[0.3em] font-semibold block">
            PRACTICAL APPLICATION
          </span>

          <SplitRevealText
            as="h2"
            className="text-4xl sm:text-6xl font-editorial font-light text-brand-charcoal"
          >
            HOW TO PRACTICE DAILY
          </SplitRevealText>

          <p className="text-sm sm:text-base text-brand-brown font-light">
            Simple steps to integrate Ho&apos;oponopono into your morning
            routine, stressful work moments, or bedtime reflection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {STEPS.map((item, idx) => (
            <InteractiveCard
              key={item.step}
              delay={idx * 0.15}
              cursorText="STEP"
              className="p-8 rounded-3xl space-y-6 relative overflow-hidden flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-editorial font-normal text-brand-champagne">
                    {item.step}
                  </span>

                  <div className="w-2 h-2 rounded-full bg-brand-champagne/40" />
                </div>

                <h3 className="text-2xl font-editorial text-brand-charcoal">
                  {item.title}
                </h3>

                <p className="text-xs text-brand-brown font-light leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </InteractiveCard>
          ))}
        </div>
      </ScrollRevealSection>

      {/* =========================================================
          FAQ
      ========================================================= */}
      <ScrollRevealSection className="py-24 sm:py-32 max-w-5xl mx-auto">
        <div className="text-center mb-16 space-y-4">
          <span className="text-xs font-mono text-brand-champagne uppercase tracking-[0.3em] inline-flex items-center gap-2 font-semibold">
            <HelpCircle className="w-4 h-4 text-brand-champagne" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </span>

          <SplitRevealText
            as="h2"
            className="text-4xl sm:text-5xl font-editorial font-light text-brand-charcoal"
          >
            CLARITY & UNDERSTANDING
          </SplitRevealText>
        </div>

        <div className="space-y-4">
          {FAQS.map((faq, idx) => {
            const isOpen = openFaq === idx;

            return (
              <div
                key={idx}
                onClick={() => toggleFaq(idx)}
                className={`glass-panel-light p-6 sm:p-8 rounded-2xl transition-all duration-500 cursor-pointer shadow-xs border ${
                  isOpen
                    ? "border-brand-champagne/60 bg-white/80 shadow-md"
                    : "border-brand-charcoal/10 hover:border-brand-champagne/40 hover:bg-white/60"
                }`}
                data-cursor="FAQ"
              >
                <div className="flex items-center justify-between gap-4">
                  <h3 className="text-base sm:text-lg font-semibold text-brand-charcoal flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-brand-champagne shrink-0" />

                    <span>{faq.q}</span>
                  </h3>

                  <ChevronDown
                    className={`w-5 h-5 text-brand-champagne shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {isOpen && (
                  <div className="mt-4 pt-4 border-t border-brand-charcoal/10 text-sm text-brand-brown font-light pl-8 leading-relaxed animate-in fade-in duration-300">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </ScrollRevealSection>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}
      <FinalCTA />
    </main>
  );
}