import FinalCTA from "@/components/sections/FinalCTA";
import InnerPageHero from "@/components/ui/InnerPageHero";
import ScrollRevealSection from "@/components/ui/ScrollRevealSection";
import SplitRevealText from "@/components/ui/SplitRevealText";
import ImageMaskReveal from "@/components/ui/ImageMaskReveal";
import InteractiveCard from "@/components/ui/InteractiveCard";
import { ArrowUpRight, Clock, ShieldCheck } from "lucide-react";

export const metadata = {
  title: "Experiences — MOHINIRAJ",
  description: "Explore curated transformation experiences, live workshops, 1:1 guidance, and structured programs with Mohiniraj.",
};

const DETAILED_EXPERIENCES = [
  {
    title: "HO'OPONOPONO INTENSIVE WORKSHOP",
    type: "LIVE GROUP IMMERSION",
    duration: "2-Day Weekend Immersion",
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1200&auto=format&fit=crop",
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
    image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=1200&auto=format&fit=crop",
    desc: "A systematic step-by-step pathway to reconnect with your inner child, release childhood conditioning, and cultivate unshakeable peace.",
    features: [
      "6 core audio & video modules",
      "Weekly community reflection live calls",
      "Subconscious reset meditation suite",
    ],
    link: "https://go.mohiniraj.in/",
  },
];

export default function ExperiencesPage() {
  return (
    <main className="relative w-full bg-brand-bg text-brand-charcoal min-h-screen pt-28 sm:pt-36">
      {/* Hero */}
      <InnerPageHero
        badge="Curated Pathways"
        titlePrefix="TRANSFORMATION"
        titleItalic="EXPERIENCES."
        subtitle="Choose the depth of engagement designed to align with your personal evolution."
        imageSrc="https://images.unsplash.com/photo-1529156069898-49953e39b3ac?q=80&w=1200&auto=format&fit=crop"
        imageAlt="Group immersion community reflection"
        watermark="PATHWAYS"
      />

      {/* Detailed Modules Showcase */}
      <ScrollRevealSection className="py-16 space-y-16">
        {DETAILED_EXPERIENCES.map((exp, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <InteractiveCard
              key={exp.title}
              delay={idx * 0.1}
              cursorText="PATHWAY"
              className="p-8 sm:p-12 rounded-3xl grid grid-cols-1 lg:grid-cols-12 gap-10 items-center relative overflow-hidden group hover:border-brand-champagne/40 transition-all duration-500 shadow-xl border-white/80"
            >
              <div className={`space-y-6 ${isEven ? "lg:col-span-7" : "lg:col-span-7 lg:order-2"}`}>
                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-brand-champagne">
                  <span className="px-3 py-1 rounded-full border border-brand-champagne/30 bg-white/70 uppercase tracking-widest font-semibold">
                    {exp.type}
                  </span>
                  <span className="flex items-center gap-1.5 text-brand-brown">
                    <Clock className="w-3.5 h-3.5" />
                    {exp.duration}
                  </span>
                </div>

                <SplitRevealText
                  as="h2"
                  className="text-3xl sm:text-5xl font-editorial font-normal text-brand-charcoal group-hover:text-brand-champagne transition-colors"
                >
                  {exp.title}
                </SplitRevealText>

                <p className="text-sm sm:text-base text-brand-brown font-light leading-relaxed">
                  {exp.desc}
                </p>

                <div className="space-y-2.5 pt-4 border-t border-brand-charcoal/10">
                  {exp.features.map((feat, fIdx) => (
                    <div
                      key={fIdx}
                      className="flex items-center gap-3 text-xs sm:text-sm text-brand-charcoal/90 font-light"
                    >
                      <ShieldCheck className="w-4 h-4 text-brand-champagne shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-6">
                  <a
                    href={exp.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-brand-charcoal text-brand-bg hover:bg-brand-champagne hover:text-brand-charcoal text-xs tracking-[0.25em] font-semibold uppercase transition-all duration-300 shadow-md group/btn"
                    data-cursor="BEGIN"
                  >
                    <span>REGISTER NOW</span>
                    <ArrowUpRight className="w-4 h-4 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                  </a>
                </div>
              </div>

              <div className={`relative h-[320px] sm:h-[420px] ${isEven ? "lg:col-span-5" : "lg:col-span-5 lg:order-1"}`}>
                <ImageMaskReveal
                  src={exp.image}
                  alt={exp.title}
                  className="w-full h-full"
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  cursorText="EXPLORE"
                />
              </div>
            </InteractiveCard>
          );
        })}
      </ScrollRevealSection>

      <FinalCTA />
    </main>
  );
}
