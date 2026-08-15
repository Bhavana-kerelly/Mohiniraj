import Image from "next/image";
import TransformationsSection from "@/components/sections/TransformationsSection";
import FinalCTA from "@/components/sections/FinalCTA";
import { Quote, Star } from "lucide-react";

export const metadata = {
  title: "Transformations — MOHINIRAJ",
  description: "Read real stories and authentic outcomes from individuals who experienced emotional release with Mohiniraj.",
};

const ARCHIVE_TESTIMONIALS = [
  {
    quote:
      "I used to carry insomnia and a knot in my stomach every single night. After practicing the Ho'oponopono methodology guided by Mohiniraj, my body feels relaxed for the first time in ten years.",
    name: "Vikram S.",
    role: "Senior Executive",
    city: "Mumbai, India",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "The clarity I gained during the 1:1 guidance was unexpected. Mohiniraj helped me pinpoint a subconscious memory from childhood that was blocking my business decisions.",
    name: "Priya N.",
    role: "Founder",
    city: "Bengaluru, India",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "Simple, profound, and deeply practical. No jargon, no fluff. Just pure emotional freedom.",
    name: "David M.",
    role: "Architect",
    city: "London, UK",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800&auto=format&fit=crop",
  },
  {
    quote:
      "My relationship with my parents transformed completely after I cleaned the emotional debt I held towards them.",
    name: "Siddharth P.",
    role: "Consultant",
    city: "Dubai, UAE",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=800&auto=format&fit=crop",
  },
];

export default function TransformationsPage() {
  return (
    <main className="relative w-full bg-brand-bg text-brand-charcoal min-h-screen pt-32">
      {/* Hero */}
      <section className="relative px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto py-16">
        <div className="space-y-6 max-w-4xl">
          <span className="text-[10px] uppercase tracking-[0.35em] text-brand-champagne font-semibold block">
            Authentic Outcomes
          </span>
          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-editorial font-light tracking-tight text-brand-charcoal leading-none">
            TRANSFORMATION <br />
            <span className="text-brand-champagne italic">ARCHIVE.</span>
          </h1>
          <p className="text-lg sm:text-2xl text-brand-brown font-light leading-relaxed max-w-2xl">
            Real stories of people returning to Zero State and reclaiming their inherent clarity.
          </p>
        </div>
      </section>

      {/* Featured Section */}
      <TransformationsSection />

      {/* Archive Photo Essay Grid */}
      <section className="py-24 px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto border-t border-brand-charcoal/10">
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-3">
          <span className="text-xs font-mono text-brand-champagne uppercase tracking-widest inline-flex items-center gap-2 font-semibold">
            <Star className="w-3.5 h-3.5" />
            <span>MORE REFLECTIONS</span>
          </span>
          <h2 className="text-3xl sm:text-5xl font-editorial font-light text-brand-charcoal">
            VOICES OF LIBERATION
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ARCHIVE_TESTIMONIALS.map((item, idx) => (
            <div
              key={idx}
              className="glass-panel-light p-8 rounded-3xl space-y-6 hover:border-brand-champagne/30 transition-colors shadow-md flex flex-col justify-between"
            >
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-brand-champagne/40" />
                <p className="text-base sm:text-lg font-editorial font-light italic leading-relaxed text-brand-charcoal">
                  &ldquo;{item.quote}&rdquo;
                </p>
              </div>

              <div className="flex items-center gap-4 border-t border-brand-charcoal/10 pt-4 text-xs">
                <div className="relative w-12 h-12 rounded-full overflow-hidden shrink-0 border border-white">
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex-1 flex items-center justify-between">
                  <div>
                    <h3 className="font-semibold text-brand-charcoal">{item.name}</h3>
                    <p className="text-brand-brown font-light">{item.role}</p>
                  </div>
                  <span className="text-brand-champagne font-mono font-semibold">{item.city}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <FinalCTA />
    </main>
  );
}
