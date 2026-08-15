"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowUpRight, CheckCircle2, Mail, MapPin, Send } from "lucide-react";

export default function ConnectPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "", goal: "WORKSHOP" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="relative w-full bg-brand-bg text-brand-charcoal min-h-screen pt-32 pb-24">
      {/* Subtle background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[650px] h-[650px] bg-brand-champagne/10 rounded-full blur-[180px] pointer-events-none" />

      <section className="relative px-6 sm:px-8 lg:px-12 max-w-7xl mx-auto py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Left Column: Heading & Official Details */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] uppercase tracking-[0.35em] text-brand-champagne font-semibold block mb-3">
                06 — Connect
              </span>
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-editorial font-light tracking-tight text-brand-charcoal leading-none">
                LET&apos;S <br />
                <span className="text-brand-champagne italic">BEGIN.</span>
              </h1>
            </div>

            <p className="text-sm sm:text-base text-brand-brown font-light leading-relaxed">
              Whether you wish to join an upcoming live Ho&apos;oponopono workshop, inquire about 1:1 private guidance, or explore partnership opportunities, reach out below.
            </p>

            {/* Atmospheric Image */}
            <div className="relative h-[260px] rounded-2xl overflow-hidden shadow-lg border border-white/60">
              <Image
                src="https://images.unsplash.com/photo-1518241353330-0f7941c2d9b5?q=80&w=1000&auto=format&fit=crop"
                alt="Human Connection & Light"
                fill
                className="object-cover"
              />
            </div>

            {/* Official Registration Card */}
            <div className="glass-panel-light p-6 rounded-2xl border-brand-champagne/30 space-y-3 shadow-md">
              <span className="text-[10px] font-mono uppercase tracking-widest text-brand-champagne block font-semibold">
                Direct Portal Registration
              </span>
              <p className="text-xs text-brand-charcoal/80 font-light">
                To view upcoming live session dates and secure your seat immediately:
              </p>
              <a
                href="https://go.mohiniraj.in/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs tracking-widest uppercase font-semibold text-brand-champagne hover:underline"
              >
                <span>Visit go.mohiniraj.in</span>
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>

            <div className="space-y-3 text-xs text-brand-brown font-light pt-2 border-t border-brand-charcoal/10">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-champagne" />
                <span>Mentorship & Inquiries: connect@mohiniraj.in</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-brand-champagne" />
                <span>Global Digital Immersions & Live Workshops</span>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="glass-panel-light p-8 sm:p-12 rounded-3xl shadow-2xl relative">
              {submitted ? (
                <div className="text-center py-16 space-y-4 animate-in fade-in duration-500">
                  <CheckCircle2 className="w-16 h-16 text-brand-champagne mx-auto" />
                  <h3 className="text-3xl font-editorial text-brand-charcoal">Message Received</h3>
                  <p className="text-sm text-brand-brown font-light max-w-md mx-auto">
                    Thank you for taking the first step. Our team will get back to you shortly regarding your inquiry.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-4 px-6 py-2 rounded-full border border-brand-champagne/40 text-xs tracking-widest uppercase text-brand-champagne font-semibold"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <h3 className="text-2xl font-editorial font-normal text-brand-charcoal mb-6">
                    INQUIRY FORM
                  </h3>

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
                      className="w-full px-4 py-3 rounded-xl bg-white/70 border border-brand-charcoal/15 text-brand-charcoal text-sm focus:outline-none focus:border-brand-champagne transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl bg-white/70 border border-brand-charcoal/15 text-brand-charcoal text-sm focus:outline-none focus:border-brand-champagne transition-colors"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-brand-champagne font-mono font-semibold block">
                      Interest Area
                    </label>
                    <select
                      value={formData.goal}
                      onChange={(e) => setFormData({ ...formData, goal: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-white/70 border border-brand-charcoal/15 text-brand-charcoal text-sm focus:outline-none focus:border-brand-champagne transition-colors"
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
                      className="w-full px-4 py-3 rounded-xl bg-white/70 border border-brand-charcoal/15 text-brand-charcoal text-sm focus:outline-none focus:border-brand-champagne transition-colors"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 rounded-full bg-brand-charcoal text-brand-bg hover:bg-brand-champagne hover:text-brand-charcoal text-xs tracking-[0.25em] font-semibold uppercase transition-all duration-300 flex items-center justify-center gap-3 shadow-xl"
                  >
                    <span>SUBMIT INQUIRY</span>
                    <Send className="w-4 h-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
