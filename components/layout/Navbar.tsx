"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, ArrowUpRight } from "lucide-react";
import MobileOverlayMenu from "./MobileOverlayMenu";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const isHomepage = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "THE JOURNEY", href: "/journey" },
    { name: "THE METHOD", href: "/hooponopono" },
    { name: "EXPERIENCES", href: "/experiences" },
    { name: "TRANSFORMATIONS", href: "/transformations" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          isScrolled
            ? "py-4 bg-[#F6F2EA]/80 backdrop-blur-xl border-b border-[#292925]/10 shadow-sm text-brand-charcoal"
            : isHomepage
            ? "py-6 bg-transparent text-brand-sand"
            : "py-6 bg-transparent text-brand-charcoal"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="text-xl sm:text-2xl font-editorial tracking-[0.2em] font-light hover:text-brand-champagne transition-colors duration-300"
          >
            MOHINIRAJ
          </Link>

          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center space-x-10 text-[11px] tracking-[0.25em] font-medium opacity-90">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`transition-colors duration-300 relative py-1 hover:text-brand-champagne ${
                  pathname === link.href ? "text-brand-champagne font-semibold" : ""
                }`}
              >
                {link.name}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-brand-champagne" />
                )}
              </Link>
            ))}
          </nav>

          {/* Right Actions */}
          <div className="flex items-center space-x-6">
            <a
              href="https://go.mohiniraj.in/"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden sm:inline-flex items-center gap-2 px-5 py-2 rounded-full border transition-all duration-300 text-[10px] tracking-[0.25em] font-semibold uppercase group ${
                isScrolled || !isHomepage
                  ? "border-brand-charcoal/20 bg-white/60 hover:bg-brand-charcoal hover:text-brand-bg text-brand-charcoal"
                  : "border-brand-champagne/40 bg-white/10 hover:bg-brand-champagne hover:text-brand-charcoal text-brand-sand"
              }`}
              data-cursor="BEGIN"
            >
              <span>BEGIN</span>
              <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>

            {/* Menu Toggle (Mobile & Tablet only, hidden on desktop) */}
            <button
              onClick={() => setIsMenuOpen(true)}
              className={`lg:hidden p-2.5 rounded-full border transition-all duration-300 ${
                isScrolled || !isHomepage
                  ? "border-brand-charcoal/15 bg-white/60 hover:bg-white text-brand-charcoal"
                  : "border-white/20 bg-white/10 hover:bg-white/20 text-brand-sand"
              }`}
              aria-label="Open Navigation Menu"
              data-cursor="MENU"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Fullscreen Overlay */}
      <MobileOverlayMenu
        isOpen={isMenuOpen}
        onClose={() => setIsMenuOpen(false)}
        navLinks={[
          { name: "THE JOURNEY", href: "/journey", sub: "Story & Philosophy" },
          { name: "THE METHOD", href: "/hooponopono", sub: "Ho'oponopono Healing" },
          { name: "EXPERIENCES", href: "/experiences", sub: "Workshops & Mentorship" },
          { name: "TRANSFORMATIONS", href: "/transformations", sub: "Real Stories & Outcomes" },
          { name: "CONNECT", href: "/connect", sub: "Begin Your Path" },
        ]}
      />
    </>
  );
}
