import Image from "next/image";
import FourWords from "@/components/sections/FourWords";
import FinalCTA from "@/components/sections/FinalCTA";
import { HelpCircle, CheckCircle2 } from "lucide-react";

export const metadata = {
  title: "The Method — Ho'oponopono — MOHINIRAJ",
  description: "Master the ancient Hawaiian method of Ho'oponopono for subconscious clearing and emotional freedom.",
};

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

export default function HooponoponoPage() {
  return (
    <main className="relative w-full bg-brand-bg text-brand-charcoal min-h-screen pt-32">
      {/* Hero */}
      <section className="relative px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[10px] uppercase tracking-[0.35em] text-brand-champagne font-semibold block">
              Ancient Healing Technology
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-editorial font-light tracking-tight text-brand-charcoal leading-none">
              THE METHOD OF <br />
              <span className="text-brand-champagne italic">LETTING GO.</span>
            </h1>
            <p className="text-lg sm:text-2xl text-brand-brown font-light leading-relaxed max-w-xl">
              Ho&apos;oponopono is the sacred art of cleaning subconscious data and returning your heart to Zero State.
            </p>
          </div>

          <div className="lg:col-span-5 relative h-[380px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-white/60">
            <Image
              src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1200&auto=format&fit=crop"
              alt="Gentle Human Hands in Sunlight"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 40vw"
              priority
            />
          </div>
        </div>
      </section>

      {/* Interactive Four Words centerpiece */}
      <FourWords />

      {/* Practical Guide & How to Practice */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-brand-charcoal/10">
        <div className="max-w-3xl mb-16 space-y-4">
          <span className="text-xs font-mono text-brand-champagne uppercase tracking-widest font-semibold">
            PRACTICAL APPLICATION
          </span>
          <h2 className="text-4xl sm:text-6xl font-editorial font-light text-brand-charcoal">
            HOW TO PRACTICE DAILY
          </h2>
          <p className="text-sm sm:text-base text-brand-brown font-light">
            Simple steps to integrate Ho&apos;oponopono into your morning routine, stressful work moments, or bedtime reflection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
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
          ].map((item) => (
            <div key={item.step} className="glass-panel-light p-8 rounded-3xl space-y-4 shadow-sm">
              <span className="text-2xl font-editorial font-normal text-brand-champagne">
                {item.step}
              </span>
              <h3 className="text-xl font-editorial text-brand-charcoal">{item.title}</h3>
              <p className="text-xs text-brand-brown font-light leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-5xl mx-auto border-t border-brand-charcoal/10">
        <div className="text-center mb-16 space-y-3">
          <span className="text-xs font-mono text-brand-champagne uppercase tracking-widest inline-flex items-center gap-2 font-semibold">
            <HelpCircle className="w-4 h-4" />
            <span>FREQUENTLY ASKED QUESTIONS</span>
          </span>
          <h2 className="text-4xl sm:text-5xl font-editorial font-light text-brand-charcoal">
            CLARITY & UNDERSTANDING
          </h2>
        </div>

        <div className="space-y-6">
          {FAQS.map((faq, idx) => (
            <div key={idx} className="glass-panel-light p-6 sm:p-8 rounded-2xl space-y-3 shadow-xs">
              <h3 className="text-lg font-semibold text-brand-charcoal flex items-center gap-3">
                <CheckCircle2 className="w-5 h-5 text-brand-champagne shrink-0" />
                <span>{faq.q}</span>
              </h3>
              <p className="text-sm text-brand-brown font-light pl-8 leading-relaxed">
                {faq.a}
              </p>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
