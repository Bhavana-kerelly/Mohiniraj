"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import { X, ArrowUpRight } from "lucide-react";
import { gsap } from "@/lib/animations/gsapUtils";

interface NavItem {
  name: string;
  href: string;
  sub: string;
}

interface MobileOverlayMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navLinks: NavItem[];
}

export default function MobileOverlayMenu({
  isOpen,
  onClose,
  navLinks,
}: MobileOverlayMenuProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);

  useEffect(() => {
    if (!containerRef.current) return;

    if (isOpen) {
      document.body.style.overflow = "hidden";

      const tl = gsap.timeline();
      tl.to(containerRef.current, {
        opacity: 1,
        visibility: "visible",
        duration: 0.4,
        ease: "power3.out",
      }).fromTo(
        linksRef.current,
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.5,
          stagger: 0.08,
          ease: "power3.out",
        },
        "-=0.2"
      );
    } else {
      document.body.style.overflow = "";

      gsap.to(containerRef.current, {
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
        onComplete: () => {
          if (containerRef.current) {
            containerRef.current.style.visibility = "hidden";
          }
        },
      });
    }
  }, [isOpen]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] bg-brand-charcoal/98 backdrop-blur-2xl opacity-0 invisible transition-all duration-300 flex flex-col justify-between p-8 sm:p-16 border border-white/10 text-brand-bg"
    >
      {/* Top Header */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-editorial tracking-[0.2em] text-brand-sand font-light">
          MOHINIRAJ
        </span>
        <button
          onClick={onClose}
          className="p-3 rounded-full border border-white/20 bg-white/5 hover:bg-white/15 hover:border-brand-champagne transition-all duration-300 text-brand-sand group"
          aria-label="Close menu"
        >
          <X className="w-6 h-6 text-brand-champagne group-hover:rotate-90 transition-transform duration-300" />
        </button>
      </div>

      {/* Main Staggered Nav Links */}
      <div className="my-auto max-w-4xl">
        <p className="text-[10px] uppercase tracking-[0.3em] text-brand-champagne mb-8 font-semibold">
          Navigation
        </p>
        <div className="space-y-6 sm:space-y-8">
          {navLinks.map((link, index) => (
            <div key={link.name} className="overflow-hidden">
              <Link
                href={link.href}
                onClick={onClose}
                ref={(el) => { linksRef.current[index] = el; }}
                className="group flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-white/10 pb-4 text-brand-sand hover:text-brand-champagne transition-colors duration-300"
              >
                <span className="text-3xl sm:text-5xl lg:text-6xl font-editorial font-light tracking-wide group-hover:translate-x-3 transition-transform duration-300">
                  {link.name}
                </span>
                <span className="text-xs sm:text-sm tracking-widest text-brand-sage mt-1 sm:mt-0 font-sans">
                  {link.sub}
                </span>
              </Link>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Info */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-t border-white/10 pt-6 text-xs text-brand-beige/80">
        <p>A journey from emotional noise to inner clarity.</p>
        <a
          href="https://go.mohiniraj.in/"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-4 sm:mt-0 flex items-center gap-2 text-brand-champagne hover:underline text-xs uppercase tracking-widest font-semibold"
        >
          <span>Official Portal</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
