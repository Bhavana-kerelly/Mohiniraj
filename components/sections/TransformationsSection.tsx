"use client";

import { Sparkles } from "lucide-react";

// Custom Emblem SVG components matching reference design
function LeafIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B59A63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22C12 22 20 18 20 10C20 6 16 2 12 2C8 2 4 6 4 10C4 18 12 22 12 22Z" />
      <path d="M12 22V7" />
      <path d="M12 11C14.5 9 16.5 10 16.5 10" />
      <path d="M12 15C9.5 13 7.5 14 7.5 14" />
    </svg>
  );
}

function WavesIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B59A63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M2 9c2 0 3 1.5 5 1.5s3-1.5 5-1.5 3 1.5 5 1.5 3-1.5 5-1.5" />
      <path d="M2 14c2 0 3 1.5 5 1.5s3-1.5 5-1.5 3 1.5 5 1.5 3-1.5 5-1.5" />
      <path d="M2 19c2 0 3 1.5 5 1.5s3-1.5 5-1.5 3 1.5 5 1.5 3-1.5 5-1.5" />
    </svg>
  );
}

function SunburstIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#B59A63" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="16" r="6" />
      <path d="M12 4v3" />
      <path d="M4.93 8.93l2.12 2.12" />
      <path d="M19.07 8.93l-2.12 2.12" />
      <path d="M2 16h3" />
      <path d="M19 16h3" />
    </svg>
  );
}

const STORIES = [
  {
    id: "01.",
    icon: LeafIcon,
    quote:
      "For years I carried heavy anxiety around my career and relationship. The four simple words taught me a completely different way of seeing myself.",
    author: "ANANYA R.",
    role: "CORPORATE DIRECTOR",
    transformation: "CHRONIC ANXIETY → INNER PEACE",
  },
  {
    id: "02.",
    icon: WavesIcon,
    quote:
      "I was skeptical at first. During the live workshop, something shifted — the emotional weight I carried simply began to dissolve.",
    author: "RAJESH V.",
    role: "ENTREPRENEUR",
    transformation: "SELF-DOUBT → FAMILY HARMONY",
  },
  {
    id: "03.",
    icon: SunburstIcon,
    quote:
      "The practice helped me release resentment I had carried for years and reconnect with a sense of creative flow.",
    author: "MEERA K.",
    role: "DESIGN PRACTITIONER",
    transformation: "RESENTMENT → CREATIVE FLOW",
  },
];

export default function TransformationsSection() {
  return (
    <section className="relative w-full py-28 bg-white text-[#22211F] border-t border-[#B59A63]/15 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 sm:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center space-y-4 mb-20">
          <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.3em] text-[#B59A63] font-semibold">
            <Sparkles className="w-3.5 h-3.5 text-[#B59A63]" />
            <span>05 — REAL JOURNEYS</span>
          </div>

          <h2 className="text-4xl sm:text-6xl font-editorial font-light tracking-tight text-[#22211F] leading-tight">
            TRANSFORMATION <span className="text-[#B59A63] italic font-normal">STORIES.</span>
          </h2>

          {/* Central Ornament Line */}
          <div className="flex items-center justify-center gap-3 py-1">
            <span className="w-12 h-[1px] bg-gradient-to-r from-transparent to-[#B59A63]/40" />
            <span className="text-[#B59A63] text-xs">✦</span>
            <span className="w-12 h-[1px] bg-gradient-to-l from-transparent to-[#B59A63]/40" />
          </div>

          <p className="text-sm sm:text-base text-[#68645D] font-normal tracking-wide">
            Real shifts. Quiet breakthroughs. Lasting change.
          </p>
        </div>

        {/* Stories Rows */}
        <div className="space-y-12">
          {STORIES.map((story, idx) => {
            const Icon = story.icon;

            return (
              <div key={story.id} className="space-y-12">
                {/* Horizontal Divider for subsequent items */}
                {idx > 0 && (
                  <div className="relative flex items-center justify-between py-2">
                    <span className="w-2 h-2 rounded-full bg-[#B59A63]/40" />
                    <div className="flex-1 h-[1px] bg-[#B59A63]/20 mx-2" />
                    <span className="w-2 h-2 rounded-full bg-[#B59A63]/40" />
                  </div>
                )}

                {/* Single Story Row */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-10 py-4">
                  {/* Left Column: Number & Emblem Icon */}
                  <div className="flex flex-col items-center justify-center shrink-0 w-24 sm:w-32 space-y-3">
                    <span className="text-4xl sm:text-5xl font-editorial font-light text-[#B59A63]">
                      {story.id}
                    </span>
                    <div className="w-14 h-14 rounded-full bg-[#F8F5EE] border border-[#B59A63]/20 flex items-center justify-center shadow-sm">
                      <Icon />
                    </div>
                  </div>

                  {/* Vertical Divider */}
                  <div className="hidden sm:block w-[1px] h-36 bg-[#B59A63]/25 shrink-0" />

                  {/* Right Content Column */}
                  <div className="space-y-5 flex-1">
                    {/* Double Quote */}
                    <div className="text-3xl text-[#B59A63]/60 font-editorial leading-none">
                      &ldquo;&ldquo;
                    </div>

                    {/* Quote Text */}
                    <p className="text-xl sm:text-2xl font-editorial font-normal italic leading-relaxed text-[#22211F]">
                      {story.quote}&rdquo;
                    </p>

                    {/* Author & Role Row */}
                    <div className="flex flex-wrap items-center gap-2 text-xs font-semibold tracking-[0.2em] text-[#22211F] uppercase pt-1">
                      <span>{story.author}</span>
                      <span className="text-[#B59A63]/50">|</span>
                      <span className="text-[#68645D] font-normal">{story.role}</span>
                    </div>

                    {/* Transformation Tag */}
                    <div className="text-xs font-semibold tracking-[0.2em] uppercase text-[#B59A63]">
                      <span>TRANSFORMATION: </span>
                      <span className="font-normal text-[#22211F]">{story.transformation}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom Ornament */}
        <div className="mt-16 flex items-center justify-center gap-3">
          <span className="w-16 h-[1px] bg-gradient-to-r from-transparent to-[#B59A63]/40" />
          <span className="text-[#B59A63] text-xs">✦</span>
          <span className="w-16 h-[1px] bg-gradient-to-l from-transparent to-[#B59A63]/40" />
        </div>
      </div>
    </section>
  );
}
