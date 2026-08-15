"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-charcoal border-t border-white/10 pt-20 pb-12 text-brand-sand relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-champagne/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 pb-16 border-b border-white/10">
          {/* Brand Col */}
          <div className="md:col-span-5 space-y-6">
            <h2 className="text-3xl sm:text-4xl font-editorial tracking-[0.2em] font-light text-brand-sand">
              MOHINIRAJ
            </h2>
            <p className="text-sm text-brand-sand/70 leading-relaxed max-w-md font-light">
              An international personal transformation brand dedicated to guiding high-achieving individuals from emotional noise to deep inner clarity through authentic Ho&apos;oponopono and subconscious alignment.
            </p>
            <div className="pt-2">
              <a
                href="https://go.mohiniraj.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-brand-champagne text-brand-charcoal text-xs tracking-[0.2em] uppercase font-semibold hover:bg-brand-sand transition-all duration-300 shadow-lg"
              >
                <span>Reserve Experience</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-4 grid grid-cols-2 gap-8">
            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-brand-champagne font-semibold mb-6">
                Navigation
              </h3>
              <ul className="space-y-4 text-xs tracking-widest text-brand-sand/70">
                <li>
                  <Link href="/journey" className="hover:text-brand-sand transition-colors">
                    THE JOURNEY
                  </Link>
                </li>
                <li>
                  <Link href="/hooponopono" className="hover:text-brand-sand transition-colors">
                    THE METHOD
                  </Link>
                </li>
                <li>
                  <Link href="/experiences" className="hover:text-brand-sand transition-colors">
                    EXPERIENCES
                  </Link>
                </li>
                <li>
                  <Link href="/transformations" className="hover:text-brand-sand transition-colors">
                    TRANSFORMATIONS
                  </Link>
                </li>
                <li>
                  <Link href="/connect" className="hover:text-brand-sand transition-colors">
                    CONNECT
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xs uppercase tracking-[0.25em] text-brand-champagne font-semibold mb-6">
                Pillars
              </h3>
              <ul className="space-y-4 text-xs tracking-widest text-brand-sand/70">
                <li>HO&apos;OPONOPONO</li>
                <li>EMOTIONAL FREEDOM</li>
                <li>SUBCONSCIOUS RESET</li>
                <li>1:1 MENTORSHIP</li>
              </ul>
            </div>
          </div>

          {/* Contact / Portal info */}
          <div className="md:col-span-3 space-y-6">
            <h3 className="text-xs uppercase tracking-[0.25em] text-brand-champagne font-semibold">
              Official Portal
            </h3>
            <p className="text-xs text-brand-sand/70 leading-relaxed">
              Explore authentic sessions, upcoming live immersion workshops, and mentorship inquiries.
            </p>
            <div className="glass-panel-dark p-4 rounded-xl text-xs space-y-2 border-white/10">
              <span className="text-[10px] uppercase tracking-widest text-brand-champagne font-semibold block">
                Primary Portal
              </span>
              <a
                href="https://go.mohiniraj.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-brand-sand hover:text-brand-champagne transition-colors flex items-center gap-1.5 font-mono"
              >
                <span>go.mohiniraj.in</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] tracking-widest text-brand-sand/60">
          <p>© {new Date().getFullYear()} MOHINIRAJ. All rights reserved.</p>
          <p className="mt-4 sm:mt-0 font-light">
            Luxury Editorial & Transformation Experience
          </p>
        </div>
      </div>
    </footer>
  );
}
