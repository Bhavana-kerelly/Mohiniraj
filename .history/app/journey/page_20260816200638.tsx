import FinalCTA from "@/components/sections/FinalCTA";
import InnerPageHero from "@/components/ui/InnerPageHero";
import ScrollRevealSection from "@/components/ui/ScrollRevealSection";
import SplitRevealText from "@/components/ui/SplitRevealText";
import InteractiveCard from "@/components/ui/InteractiveCard";
import { Compass, Shield, Heart, Feather } from "lucide-react";

export const metadata = {
  title: "The Journey — MOHINIRAJ",
  description: "Explore Mohiniraj's philosophy, story, mission, and approach to subconscious emotional transformation.",
};

const PILLARS = [
  {
    icon: Shield,
    title: "Subconscious Ownership",
    desc: "Accepting 100% responsibility for internal projections without guilt or blame.",
  },
  {
    icon: Heart,
    title: "Forgiveness Release",
    desc: "Dissolving old emotional debt and generational memories with divine love.",
  },
  {
    icon: Feather,
    title: "Zero State Neutrality",
    desc: "Reaching the unconditioned state of mind free from anxiety and future projection.",
  },
  {
    icon: Compass,
    title: "Inspired Action",
    desc: "Operating from intuition and clarity rather than fear and reactive patterns.",
  },
];

export default function JourneyPage() {
  return (
    <main className="relative w-full bg-brand-bg text-brand-charcoal min-h-screen pt-28 sm:pt-36">
      {/* Hero Section */}
      <InnerPageHero
        badge="Origin & Mission"
        titlePrefix="THE"
        titleItalic="JOURNEY."
        subtitle="From inner friction to effortless flow. Understanding the foundational philosophy behind authentic emotional liberation."
        imageSrc="https://images.unsplash.com/photo-1499209974431-9dac3ada00d7?q=80&w=1200&auto=format&fit=crop"
        imageAlt="Quiet Morning Reflection"
        watermark="JOURNEY"
      />

      {/* Story & Philosophy Section */}
      <ScrollRevealSection className="py-24 sm:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-brand-champagne uppercase tracking-[0.3em] font-semibold block">
              01 — PHILOSOPHY
            </span>

            <SplitRevealText
              as="h2"
              className="text-3xl sm:text-5xl font-editorial font-light text-brand-charcoal leading-tight"
            >
              The Architecture of Subconscious Memory.
            </SplitRevealText>

            <div className="space-y-4 text-sm sm:text-base text-brand-charcoal/80 font-light leading-relaxed">
              <p>
                Every human reaction, fear, or emotional barrier is not a flaw in character; it is stored data residing in the subconscious mind. We do not attract what we consciously want; we project what we subconsciously carry.
              </p>
              <p>
                Mohiniraj&apos;s journey began with a simple revelation: true healing does not require years of cognitive analysis. It requires direct, compassionate communion with the subconscious data using the timeless technology of forgiveness.
              </p>
            </div>
          </div>

          <div className="lg:col-span-6">
            <InteractiveCard
              cursorText="QUOTE"
              className="p-8 sm:p-12 space-y-6 relative overflow-hidden border-white/80"
            >
              <div className="w-16 h-16 rounded-full border border-brand-champagne/40 bg-white/80 flex items-center justify-center text-brand-champagne shadow-sm group-hover:scale-110 transition-transform duration-500">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-editorial font-normal text-brand-charcoal">
                The Core Premise
              </h3>
              <p className="text-base text-brand-charcoal/80 font-light leading-relaxed font-serif italic">
                &ldquo;You are already whole. You do not need to construct a new identity; you only need to clean the mirror of your subconscious to reveal your original light.&rdquo;
              </p>
              <span className="text-xs text-brand-champagne font-mono block uppercase font-semibold tracking-widest">
                — MOHINIRAJ
              </span>
            </InteractiveCard>
          </div>
        </div>
      </ScrollRevealSection>

      {/* 4 Pillars of Approach */}
      <ScrollRevealSection hasBackgroundPattern className="py-24 sm:py-32 bg-brand-sand/30">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-mono text-brand-champagne uppercase tracking-[0.3em] font-semibold block">
            02 — THE METHODOLOGY
          </span>
          <SplitRevealText
            as="h2"
            className="text-4xl sm:text-6xl font-editorial font-light text-brand-charcoal"
          >
            FOUR PILLARS OF TRANSFORMATION
          </SplitRevealText>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {PILLARS.map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <InteractiveCard
                key={idx}
                delay={idx * 0.12}
                cursorText="PILLAR"
                className="p-8 space-y-4 border-white/70 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-white/60 border border-brand-champagne/30 flex items-center justify-center text-brand-champagne">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-editorial font-normal text-brand-charcoal">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-brand-brown font-light leading-relaxed">
                    {pillar.desc}
                  </p>
                </div>
              </InteractiveCard>
            );
          })}
        </div>
      </ScrollRevealSection>

      <FinalCTA />
    </main>
  );
}
