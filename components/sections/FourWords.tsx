"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { X, ArrowRight, Sparkles } from "lucide-react";
import { gsap } from "@/lib/animations/gsapUtils";

const WORDS_DETAILS = [
  {
    id: "sorry",
    num: "01",
    title: "I'M SORRY",
    subtitle: "Taking 100% Subconscious Responsibility",
    deepExplanation:
      "This phrase is not about self-blame or guilt. It is an acknowledgment that whatever pattern, conflict, or emotional weight you are experiencing in your reality is stored inside your subconscious memories. By declaring 'I'm Sorry', you take ownership of releasing the data.",
    keyBenefit: "Dissolves victim consciousness and restores personal sovereignty.",
    image: "/images/four-words/sorry.jpg",
    fallback: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Self-reflection woman in warm natural sunlight",
  },
  {
    id: "forgive",
    num: "02",
    title: "PLEASE FORGIVE ME",
    subtitle: "Releasing Resistance & Subconscious Debt",
    deepExplanation:
      "A deep plea to the Divine / Higher Consciousness within to transmute stored painful memories and generational programming into light. You are asking for forgiveness for carrying the subconscious debt that created the disharmony.",
    keyBenefit: "Unblocks chronic resentment, physical tension, and relational barriers.",
    image: "/images/four-words/forgive.jpg",
    fallback: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Serene mist lake and mountains at sunrise",
  },
  {
    id: "thank-you",
    num: "03",
    title: "THANK YOU",
    subtitle: "The Frequency of Transmutation & Gratitude",
    deepExplanation:
      "Expressing gratitude before the physical transformation is visible. You thank the universe and your inner self for releasing the old energy, acknowledging that every challenge came to be healed and cleaned.",
    keyBenefit: "Elevates energetic vibration and locks in subconscious realignment.",
    image: "/images/four-words/thank-you.jpg",
    fallback: "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Hands receiving warm sunlight in nature",
  },
  {
    id: "love",
    num: "04",
    title: "I LOVE YOU",
    subtitle: "Returning to Divine Zero & Pure Source Energy",
    deepExplanation:
      "The ultimate phrase of restoration. Love cleanses memories, returning your mind to 'Zero State'—a state of pure potentiality, clarity, and unconditioned peace free from past conditioning.",
    keyBenefit: "Establishes unconditional inner peace, emotional equilibrium, and clarity.",
    image: "/images/four-words/love.jpg",
    fallback: "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?q=80&w=800&auto=format&fit=crop",
    imageAlt: "Heart-shaped illuminated botanical leaf",
  },
];

export default function FourWords() {
  const [selectedWordIndex, setSelectedWordIndex] = useState<number | null>(null);
  const [imageError, setImageError] = useState<{ [key: string]: boolean }>({});
  const sectionRef = useRef<HTMLDivElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      if (headerRef.current) {
        gsap.fromTo(
          headerRef.current.children,
          { opacity: 0, y: 25 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 75%",
            },
          }
        );
      }

      if (cardsRef.current) {
        const cardElements = Array.from(cardsRef.current.children);

        // Entrance animation
        gsap.fromTo(
          cardElements,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
            },
            onComplete: () => {
              // Floating organic levitation animation loop for cards
              cardElements.forEach((el, index) => {
                gsap.to(el, {
                  y: index % 2 === 0 ? -14 : 14,
                  rotation: index % 2 === 0 ? -1.2 : 1.2,
                  duration: 3.2 + index * 0.4,
                  repeat: -1,
                  yoyo: true,
                  ease: "sine.easeInOut",
                  delay: index * 0.2,
                });
              });
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const selectedWord = selectedWordIndex !== null ? WORDS_DETAILS[selectedWordIndex] : null;

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-24 sm:py-32 bg-white text-[#22211F] border-t border-[#B59A63]/15 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        {/* Section Header */}
        <div ref={headerRef} className="text-center max-w-2xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#B59A63]/30 bg-white/60 text-[#B59A63] text-[10px] uppercase tracking-[0.3em] font-semibold">
            <Sparkles className="w-3 h-3 text-[#B59A63]" />
            <span>02 — THE SIGNATURE METHOD</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-editorial font-light tracking-tight text-[#22211F] leading-tight">
            THE FOUR <span className="text-[#B59A63] italic font-normal">WORDS.</span>
          </h2>

          <p className="font-editorial text-lg sm:text-xl italic text-[#B59A63] font-normal tracking-wide">
            &ldquo;A frequency that transforms everything.&rdquo;
          </p>

          <p className="text-sm sm:text-base text-[#3F3D38] font-normal max-w-xl mx-auto leading-relaxed pt-2">
            An ancient Hawaiian wisdom of Ho&apos;oponopono, reimagined for modern emotional mastery. Explore each phrase below to unlock its transformative frequency.
          </p>
        </div>

        {/* Four Words Cards Grid Container */}
        <div className="relative">
          {/* Subtle Decorative Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-[140px] left-12 right-12 h-[1px] bg-gradient-to-r from-transparent via-[#B59A63]/30 to-transparent pointer-events-none z-0">
            <div className="flex justify-between max-w-5xl mx-auto px-16 -mt-1">
              <span className="w-2.5 h-2.5 rounded-full bg-[#B59A63]/40 border-2 border-white" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#B59A63]/40 border-2 border-white" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#B59A63]/40 border-2 border-white" />
              <span className="w-2.5 h-2.5 rounded-full bg-[#B59A63]/40 border-2 border-white" />
            </div>
          </div>

          {/* Cards Grid */}
          <div
            ref={cardsRef}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 relative z-10"
          >
            {WORDS_DETAILS.map((word, idx) => (
              <div
                key={word.title}
                onClick={() => setSelectedWordIndex(idx)}
                className="group relative flex flex-col bg-white rounded-[28px] border border-[#B59A63]/20 shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer overflow-hidden transform hover:-translate-y-3"
              >
                {/* Number Badge Overlapping Top Left */}
                <div className="absolute top-4 left-4 z-20 w-10 h-10 rounded-full bg-white/95 backdrop-blur-md border border-[#B59A63]/20 flex items-center justify-center shadow-md group-hover:border-[#B59A63]/60 transition-colors">
                  <span className="text-xs font-mono font-bold text-[#B59A63]">
                    {word.num}
                  </span>
                </div>

                {/* Photographic Image Area (Full Uncropped Graphic Display) */}
                <div className="relative w-full h-[210px] sm:h-[235px] overflow-hidden bg-[#F9F7F2] flex items-center justify-center p-3">
                  <Image
                    key={word.id}
                    src={imageError[word.id] ? word.fallback : word.image}
                    alt={word.imageAlt}
                    fill
                    onError={() => setImageError((prev) => ({ ...prev, [word.id]: true }))}
                    className="object-contain p-2 transition-transform duration-700 ease-out group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                </div>

                {/* Full Lower Translucent Content Panel */}
                <div className="p-6 pt-4 bg-white rounded-b-[28px] flex flex-col justify-between flex-1 space-y-4">
                  <div className="space-y-2">
                    <h3 className="text-2xl sm:text-3xl font-editorial font-light text-[#252421] leading-tight group-hover:text-[#B59A63] transition-colors">
                      {word.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#68645D] font-normal leading-relaxed line-clamp-2">
                      {word.subtitle}
                    </p>
                  </div>

                  {/* Bottom Explore Button */}
                  <div className="pt-2 flex items-center justify-between border-t border-[#B59A63]/10">
                    <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-[#B59A63]">
                      EXPLORE
                    </span>
                    <span className="w-8 h-8 rounded-full border border-[#B59A63]/40 bg-[#FEFDF9] flex items-center justify-center text-[#B59A63] group-hover:bg-[#B59A63] group-hover:text-white group-hover:border-[#B59A63] transition-all duration-300 shadow-sm">
                      <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Expanded Refined Editorial Modal Story Overlay */}
      {selectedWord && (
        <div className="fixed inset-0 z-[200] bg-[#22211F]/70 backdrop-blur-md flex items-center justify-center p-4 sm:p-8 transition-all duration-300">
          <div className="bg-[#FEFDF9] max-w-2xl w-full p-6 sm:p-10 rounded-[30px] border border-[#B59A63]/30 space-y-6 relative shadow-2xl animate-in fade-in zoom-in-95 duration-300 text-[#22211F] overflow-hidden">
            <button
              onClick={() => setSelectedWordIndex(null)}
              className="absolute top-5 right-5 z-10 p-2.5 rounded-full border border-[#B59A63]/30 bg-white text-[#22211F] hover:bg-[#B59A63] hover:text-white transition-all shadow-md"
            >
              <X className="w-4 h-4" />
            </button>

            {/* Modal Image Header */}
            <div className="relative w-full h-48 sm:h-56 rounded-2xl overflow-hidden shadow-inner">
              <Image
                src={selectedWord.image}
                alt={selectedWord.imageAlt}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              <div className="absolute bottom-4 left-5 right-5 flex items-end justify-between text-white">
                <span className="text-xs font-mono tracking-widest uppercase text-[#B59A63] font-semibold bg-white/90 px-3 py-1 rounded-full shadow-sm">
                  PHRASE {selectedWord.num} OF 04
                </span>
                <h3 className="text-3xl sm:text-4xl font-editorial font-light text-white">
                  {selectedWord.title}
                </h3>
              </div>
            </div>

            <div className="space-y-3">
              <p className="text-sm font-semibold text-[#B59A63] tracking-wide">
                {selectedWord.subtitle}
              </p>

              <p className="text-xs sm:text-sm text-[#3F3D38] font-normal leading-relaxed">
                {selectedWord.deepExplanation}
              </p>
            </div>

            <div className="bg-white p-4 rounded-xl text-xs text-[#22211F] space-y-1.5 border border-[#B59A63]/25 shadow-sm">
              <span className="text-[#B59A63] font-bold uppercase tracking-widest block font-mono text-[10px]">
                PRIMARY TRANSFORMATION:
              </span>
              <p className="font-medium text-[#3F3D38]">{selectedWord.keyBenefit}</p>
            </div>

            <div className="pt-2">
              <button
                onClick={() => setSelectedWordIndex(null)}
                className="w-full py-3.5 rounded-full bg-[#22211F] hover:bg-[#B59A63] text-white text-xs tracking-[0.2em] font-semibold uppercase transition-all duration-300 shadow-md"
              >
                CLOSE EXPERIENCE
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
