import Image from "next/image";
import FinalCTA from "@/components/sections/FinalCTA";
import { Compass, Shield, Heart, Feather } from "lucide-react";

export const metadata = {
  title: "The Journey — MOHINIRAJ",
  description: "Explore Mohiniraj's philosophy, story, mission, and approach to subconscious emotional transformation.",
};

export default function JourneyPage() {
  return (
    <main className="relative w-full bg-brand-bg text-brand-charcoal min-h-screen pt-32">
      {/* Hero Section with Full-Bleed Warm Photography */}
      <section className="relative px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.35em] text-brand-champagne font-semibold block">
              Origin & Mission
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-editorial font-light tracking-tight text-brand-charcoal leading-none">
              THE <span className="text-brand-champagne italic">JOURNEY.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-brand-brown font-light leading-relaxed max-w-xl">
              From inner friction to effortless flow. Understanding the foundational philosophy behind authentic emotional liberation.
            </p>
          </div>

          <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/60">
            <Image
              src="https://images.unsplash.com/photo-1499209974431-9dac3ada00d7?q=80&w=1200&auto=format&fit=crop"
              alt="Quiet Morning Reflection"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Story & Philosophy Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-brand-charcoal/10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 space-y-6">
            <span className="text-xs font-mono text-brand-champagne uppercase tracking-widest font-semibold">
              01 — PHILOSOPHY
            </span>
            <h2 className="text-3xl sm:text-5xl font-editorial font-light text-brand-charcoal leading-tight">
              The Architecture of <br />
              <span className="text-brand-brown italic">Subconscious Memory.</span>
            </h2>
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
            <div className="glass-panel-light p-8 sm:p-12 rounded-3xl border-white/80 space-y-6 relative overflow-hidden shadow-xl">
              <div className="w-16 h-16 rounded-full border border-brand-champagne/40 bg-white/80 flex items-center justify-center text-brand-champagne">
                <Compass className="w-8 h-8" />
              </div>
              <h3 className="text-2xl font-editorial font-normal text-brand-charcoal">
                The Core Premise
              </h3>
              <p className="text-base text-brand-charcoal/80 font-light leading-relaxed font-serif italic">
                &ldquo;You are already whole. You do not need to construct a new identity; you only need to clean the mirror of your subconscious to reveal your original light.&rdquo;
              </p>
              <span className="text-xs text-brand-champagne font-mono block uppercase font-semibold">
                — MOHINIRAJ
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Pillars of Approach */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-brand-charcoal/10 bg-brand-sand/50">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono text-brand-champagne uppercase tracking-widest font-semibold">
            02 — THE METHODOLOGY
          </span>
          <h2 className="text-4xl sm:text-6xl font-editorial font-light text-brand-charcoal">
            FOUR PILLARS OF TRANSFORMATION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
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
          ].map((pillar, idx) => {
            const Icon = pillar.icon;
            return (
              <div key={idx} className="glass-panel-light p-6 rounded-2xl space-y-4 shadow-sm">
                <Icon className="w-6 h-6 text-brand-champagne" />
                <h3 className="text-xl font-editorial font-normal text-brand-charcoal">
                  {pillar.title}
                </h3>
                <p className="text-xs text-brand-brown font-light leading-relaxed">
                  {pillar.desc}
                </p>
              </div>
            );
          })}
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
