"use client";

import { useState } from "react";
import InnerPageHero from "@/components/ui/InnerPageHero";
import ScrollRevealSection from "@/components/ui/ScrollRevealSection";
import SplitRevealText from "@/components/ui/SplitRevealText";
import ImageMaskReveal from "@/components/ui/ImageMaskReveal";
import InteractiveCard from "@/components/ui/InteractiveCard";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Send } from "lucide-react";

export default function ConnectPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", goal: "WORKSHOP" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative w-full bg-brand-bg text-brand-charcoal min-h-screen pt-28 sm:pt-36 pb-24">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-brand-champagne/10 rounded-full blur-[180px] pointer-events-none" />

      {/* Hero Section */}
      <InnerPageHero
        badge="06 — Connect"
        titlePrefix="LET'S"
        titleItalic="BEGIN."
        subtitle="Whether you wish to join an upcoming live Ho'oponopono workshop, inquire about 1:1 private guidance, or explore partnership opportunities, reach out below."
        imageSrc="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1000&auto=format&fit=crop"
        imageAlt="Human Connection & Light"
        watermark="CONNECT"
      />

      {/* Main Connect Grid Section */}
      <ScrollRevealSection className="py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Left Column: Direct Info & Details */}
          <div className="lg:col-span-5 space-y-8">
            <InteractiveCard cursorText="PORTAL" className="p-8 space-y-4 border-brand-champagne/30">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-champagne block font-semibold">
                Direct Portal Registration
              </span>
              <p className="text-xs text-brand-charcoal/80 font-light leading-relaxed">
                To view upcoming live session dates and secure your seat immediately:
              </p>
              <a
                href="https://go.mohiniraj.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-brand-champagne hover:underline pt-1"
                data-cursor="GO"
              >
                <span>Visit go.mohiniraj.in</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </InteractiveCard>

            <div className="space-y-4 text-xs text-brand-brown font-light pt-4 border-t border-brand-charcoal/10">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/70 border border-brand-champagne/30 flex items-center justify-center text-brand-champagne">
                  <Mail className="w-4 h-4" />
                </div>
                <span>Mentorship & Inquiries: connect@mohiniraj.in</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-white/70 border border-brand-champagne/30 flex items-center justify-center text-brand-champagne">
                  <MapPin className="w-4 h-4" />
                </div>
                <span>Global Digital Immersions & Live Workshops</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <InteractiveCard cursorText="WRITE" className="p-8 sm:p-12 shadow-2xl relative border-white/80">
              {submitted ? (
                <div className="text-center py-16 space-y-4 animate-in fade-in duration-500">
                  <CheckCircle2 className="w-16 h-16 text-brand-champagne mx-auto" />
                  <h3 className="text-3xl font-editorial text-brand-charcoal">Message Received</h3>
                  <p className="text-sm text-brand-brown font-light max-w-md mx-auto">
                    Thank you for taking the first step. Our team will get back to you shortly regarding your inquiry.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full border border-brand-champagne/40 text-xs tracking-widest uppercase text-brand-champagne font-semibold hover:bg-brand-champagne hover:text-brand-bg transition-colors"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <SplitRevealText
                    as="h3"
                    className="text-2xl font-editorial font-normal text-brand-charcoal mb-6"
                  >
                    INQUIRY FORM
                  </SplitRevealText>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-brand-champagne font-mono font-semibold block">
                      Your Name
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ananya Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/80 border border-brand-charcoal/15 text-brand-charcoal text-sm focus:outline-none focus:border-brand-champagne transition-colors shadow-xs"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-brand-champagne font-mono font-semibold block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      required
                      placeholder="ananya@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/80 border border-brand-charcoal/15 text-brand-charcoal text-sm focus:outline-none focus:border-brand-champagne transition-colors shadow-xs"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-brand-champagne font-mono font-semibold block">
                      Interest Area
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/80 border border-brand-charcoal/15 text-brand-charcoal text-sm focus:outline-none focus:border-brand-champagne transition-colors shadow-xs"
                    >
                      <option value="WORKSHOP">Live Ho&apos;oponopono Workshop</option>
                      <option value="MENTORSHIP">1:1 Private Guidance</option>
                      <option value="PROGRAM">Subconscious Reset Program</option>
                      <option value="GENERAL">General Inquiry</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-brand-champagne font-mono font-semibold block">
                      Your Message or Intention
                    </label>
                    <textarea
                      rows={4}
                      required
                      placeholder="Share what emotional area or pattern you wish to release..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-4 py-3.5 rounded-xl bg-white/80 border border-brand-charcoal/15 text-brand-charcoal text-sm focus:outline-none focus:border-brand-champagne transition-colors shadow-xs"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-brand-charcoal text-brand-bg hover:bg-brand-champagne hover:text-brand-charcoal text-xs tracking-[0.25em] font-semibold uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-xl group"
                    data-cursor="SUBMIT"
                  >
                    <span>SUBMIT INQUIRY</span>
                    <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </button>
                </form>
              )}
            </InteractiveCard>
          </div>
        </div>
      </ScrollRevealSection>
    </main>
  );
}
