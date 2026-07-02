'use client';

import React, { useState } from 'react';
import {
  ArrowRight, MessageCircle, CheckCircle, Star, Quote,
  Check, Zap, TrendingUp, Rocket, Building2,
  ChevronDown, ChevronUp, Shield, Clock, Users,
  BarChart3, Eye, Heart, BadgeCheck, Phone, X, Award
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { ScarcityReplacement } from '@/components/ui/ScarcityReplacement';
import { AvailabilityBanner } from '@/components/ui/AvailabilityBanner';
import Link from 'next/link';
import Image from 'next/image';

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "1.1M+", label: "Reel Views Generated", icon: Eye },
  { value: "50+", label: "Doctors Served", icon: Users },
  { value: "4.9 ★", label: "Google Rating", icon: Star },
  { value: "India", label: "Serving Doctors Nationwide", icon: BadgeCheck },
];

const trustPoints = [
  { icon: Shield, color: "text-blue-600", bg: "bg-blue-50", title: "Medically Safe Content", desc: "Every post complies with Indian Medical Council (IMC) guidelines. Zero compliance risk." },
  { icon: Clock, color: "text-emerald-600", bg: "bg-emerald-50", title: "Results in 45–60 Days", desc: "The same 5-step patient acquisition system used by 10+ doctors across India — content, ads, funnel, follow-up, and reporting." },
  { icon: BarChart3, color: "text-violet-600", bg: "bg-violet-50", title: "Transparent Reporting", desc: "Bi-weekly reports showing exactly how your investment is performing. No black box." },
  { icon: Users, color: "text-orange-600", bg: "bg-orange-50", title: "Doctor-Only Agency", desc: "We ONLY work with doctors. Not salons, restaurants, or startups — just healthcare." },
];

const beforeAfterCards = [
  { before: "Zero patient inquiries from Instagram", after: "40+ monthly WhatsApp inquiries", timeline: "After 60 Days", name: "Dr. Vora — Orthopaedic Surgeon, Gujarat", color: "from-blue-600 to-indigo-600" },
  { before: "Relying only on Practo & word-of-mouth", after: "Direct WhatsApp inquiries every day", timeline: "After 60 Days", name: "Rainbow Pedia & Physio, Gujarat", color: "from-emerald-500 to-teal-500" },
  { before: "500 followers, 0 engagement, no calls", after: "1.1M+ reel views, 1,400+ saves, OPD growth", timeline: "After 90 Days", name: "Viral Reel Campaign — Specialist Clinic", color: "from-orange-500 to-rose-500" },
];

const reels = [
  { title: "Rainbow Pediatric - Patient Inquiries", embedUrl: "https://www.instagram.com/p/DZ65VRWxQbZ/embed", views: "150k+", likes: "1.2k+" },
  { title: "Divine Interior - Lead Gen Success", embedUrl: "https://www.instagram.com/p/DZxITQLzYDj/embed", views: "185k+", likes: "980+" },
  { title: "Epsilon 24/7 Client Machine", embedUrl: "https://www.instagram.com/p/DaQbftaoOVC/embed", views: "200k+", likes: "2.4k+" },
  { title: "Viral Medical Reel", embedUrl: "https://www.instagram.com/reel/DFX0HANA3e3/embed", views: "1.1M+", likes: "1.4k+" },
  { title: "Health Awareness", embedUrl: "https://www.instagram.com/reel/DO_M0fLkrm0/embed", views: "420k+", likes: "15.2k+" },
];

const testimonials = [
  {
    quote: "Working with Epsilon for 2 years. Patient inquiries went up significantly after they started managing our reels. Jaydeep bhai understands healthcare marketing like no other.",
    author: "Dr. D.P. Vora", role: "Orthopaedic Surgeon, Gujarat", initials: "DV", color: "from-orange-400 to-amber-500",
    photo: "/images/doctors/dr-dp-vora.webp",
    metric: "40+", metricLabel: "Inquiries/month",
  },
  {
    quote: "Mr Jaydeep helped our hospital scale patient footfall like never before. Highly recommend for social media & website development. OPD is 3× what it was.",
    author: "Devam Dave", role: "Shreeji Multispecialty Hospital, Gujarat", initials: "DD", color: "from-blue-500 to-indigo-500",
    photo: "/images/doctors/dr%20devam%20dave.png",
    metric: "3×", metricLabel: "OPD growth in 60d",
  },
  {
    quote: "Within 45 days we started getting direct WhatsApp inquiries from social media. Very accurate approach, and the content quality is outstanding.",
    author: "Rainbow Pedia & Physio", role: "Physiotherapy Clinic, Gujarat", initials: "RP", color: "from-emerald-500 to-teal-500",
    photo: "/images/doctors/rainbow-pedia.webp",
    metric: "45", metricLabel: "Days to first lead",
  },
  {
    quote: "Epsilon Technology is a one-stop solution for all digital marketing needs. They've helped our clinic scale like never before. Highly recommend for any doctor.",
    author: "Dr. Hiral Vasani", role: "Cosmetologist, Gujarat", initials: "HV", color: "from-purple-500 to-violet-500",
    photo: "/images/doctors/dr%20hiral%20vasani.png",
    metric: "30–50", metricLabel: "Inquiries/month",
  },
  {
    quote: "Expert and very easy to work with. They know exactly what content doctors need to build trust and attract patients. Reels went from 500 to 100k+ views.",
    author: "Dr. Priyank Bagtharia", role: "Medical Professional, Gujarat", initials: "PB", color: "from-pink-500 to-rose-500",
    photo: "/images/doctors/dr-priyank-bagtharia.webp",
    metric: "100k+", metricLabel: "Reel views in 3mo",
  },
];


const faqs = [
  { q: "How quickly will I see real patient inquiries?", a: "Most doctors start seeing WhatsApp inquiries and DMs within 30–45 days of starting. Significant OPD growth happens in 60–90 days with consistent execution. Shreeji Hospital saw 3× OPD growth in 60 days." },
  { q: "What makes you different from a generic digital marketing agency?", a: "Generic agencies don't understand medical ethics, patient psychology, or healthcare regulations. We ONLY work with doctors — not salons, restaurants or startups. Every post is IMC-safe, professionally worded, and designed to attract real patient inquiries, not just likes." },
  { q: "Do I need to create any content or provide photos?", a: "Not necessarily. Our Starter and Growth plans work with stock medical visuals and your existing clinic photos. The Lead Gen Machine plan includes 2 guided video shoots monthly so we can create original, authentic content for your practice." },
  { q: "Is there a long-term contract or lock-in?", a: "No. All plans are month-to-month. We earn your trust every month with results, not paperwork. That said, most doctors stay with us for 12+ months because they see consistent ROI." },
  { q: "What is the ad budget included in higher plans?", a: "The Engagement Accelerator and Lead Gen Machine include a specific Meta (Facebook + Instagram) ad spend managed by our team. No extra cost — it's fully included. You can top up for faster results." },
  { q: "Do you work with doctors outside India?", a: "Yes! We serve doctors in India, UAE, UK, and USA. Our strategies are adapted for each market — local language, cultural tone, platform preferences, and healthcare regulations. Book a free call for your city." },
  { q: "Do you guarantee a certain number of patient leads?", a: "We don't guarantee specific numbers because results depend on your specialty, city, and competition. What we guarantee: a medically-safe proven system, transparent bi-weekly reporting, and a strategy that has worked for 50+ doctors across multiple countries." },
  { q: "Can this work for a hospital or multi-doctor setup?", a: "Absolutely. We have a custom Hospital / Multi-Specialty plan with unlimited content, a dedicated content team, CRM integration, and more. WhatsApp us and we'll build a tailored strategy for your setup." },
];

// ─── FAQ Accordion ────────────────────────────────────────────────────────────

function FaqItem({ faq, index }: { faq: typeof faqs[0]; index: number }) {
  const [open, setOpen] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.04 }}
      className={`rounded-2xl overflow-hidden transition-all duration-300 ${open
        ? 'bg-slate-800 border border-blue-500/40 shadow-lg shadow-blue-500/10'
        : 'bg-slate-800/60 border border-slate-700/60 hover:border-slate-600'
        }`}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-4 px-5 py-4 text-left"
      >
        <span className={`shrink-0 w-7 h-7 rounded-lg text-xs font-bold flex items-center justify-center transition-colors ${open ? 'bg-blue-500 text-white' : 'bg-slate-700 text-slate-400'
          }`}>
          {String(index + 1).padStart(2, '0')}
        </span>
        <h3 className={`flex-1 text-sm md:text-base font-semibold leading-snug transition-colors ${open ? 'text-white' : 'text-slate-200'
          }`}>
          {faq.q}
        </h3>
        <div className={`shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all ${open ? 'bg-blue-500/20 text-blue-400 rotate-180' : 'bg-slate-700 text-slate-400'
          }`}>
          <ChevronDown size={16} />
        </div>
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
          >
            <div className="px-5 pb-5 pt-1 border-t border-slate-700/60 ml-11">
              <p className="text-slate-300 text-sm leading-relaxed">{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}

// ─── Lead Form ────────────────────────────────────────────────────────────────

function LeadForm({ dark = false }: { dark?: boolean }) {
  const [formData, setFormData] = useState({ name: '', whatsapp: '', specialty: '', city: '' });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name: formData.name, mobile: formData.whatsapp, specialty: formData.specialty, city: formData.city, clinic: '' }),
      });
      if (res.ok) { setStatus('success'); setFormData({ name: '', whatsapp: '', specialty: '', city: '' }); setTimeout(() => setStatus('idle'), 6000); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  if (status === 'success') return (
    <div className="text-center py-10">
      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="text-emerald-600" size={32} />
      </div>
      <h3 className={`text-xl font-bold mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>You&apos;re in, {formData.name || 'Doctor'}! 🎉</h3>
      <p className={dark ? 'text-slate-400' : 'text-slate-600'}>We&apos;ll reach out to you on WhatsApp within 4 hours with your personalised growth plan!</p>
    </div>
  );

  const inputClass = `w-full border rounded-xl px-4 py-3.5 text-base outline-none transition-all placeholder:text-slate-400 ${dark
    ? 'bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
    : 'bg-white border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="text" name="name" placeholder="👨‍⚕️ Your Name (Dr. ___) *" required value={formData.name} onChange={handleChange} className={inputClass} />
      <input type="tel" name="whatsapp" placeholder="📱 WhatsApp Number *" required value={formData.whatsapp} onChange={handleChange} className={inputClass} />
      <input type="text" name="specialty" placeholder="🩺 Specialty (e.g. Orthopedics, Dermatology) *" required value={formData.specialty} onChange={handleChange} className={inputClass} />
      <input type="text" name="city" placeholder="📍 Your City *" required value={formData.city} onChange={handleChange} className={inputClass} />
      <button
        type="submit"
        disabled={status === 'loading'}
        className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-base font-bold py-4 rounded-xl hover:from-blue-700 hover:to-indigo-700 active:scale-95 transition-all disabled:opacity-70 shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2"
      >
        {status === 'loading'
          ? <><span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" /> Sending...</>
          : <>Book My Free Growth Call <ArrowRight size={18} /></>}
      </button>
      {status === 'error' && <p className="text-center text-sm text-red-400">Something went wrong. Please WhatsApp us directly.</p>}
      <p className={`text-center text-xs pt-1 ${dark ? 'text-slate-500' : 'text-slate-400'}`}>
        🔒 No spam. We reply on WhatsApp within 4 hours. Free, no obligation.
      </p>
    </form>
  );
}

// ─── Floating WhatsApp Button ─────────────────────────────────────────────────

function FloatingWhatsApp() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;
  return (
    <div className="fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2">
      <button onClick={() => setVisible(false)} className="text-slate-500 bg-white rounded-full p-1 shadow-md border border-slate-200 hover:text-slate-700 transition-colors" aria-label="Close">
        <X size={12} />
      </button>
      <a
        href="https://wa.me/918160881461?text=Hi%20Epsilon%2C%20I%20want%20to%20grow%20my%20clinic%20patients%20through%20social%20media"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center gap-2.5 bg-emerald-500 text-white font-bold text-sm px-4 py-3 rounded-2xl shadow-xl shadow-emerald-500/30 hover:bg-emerald-600 transition-all hover:-translate-y-0.5"
      >
        <MessageCircle size={20} />
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function DoctorDigitalMarketingPage() {
  return (
    <div className="font-sans bg-white pt-[76px] lg:pt-[88px]">

      {/* ── Availability Banner ────────────────────────────────────── */}
      <div className="bg-slate-50 border-b border-slate-100">
        <ScarcityReplacement className="py-2.5 px-4" ctaHref="#contact" />
      </div>

      {/* ── 1. Hero ───────────────────────────────────────────── */}
      <section className="relative pt-14 pb-16 lg:pt-20 lg:pb-24 overflow-hidden px-4 bg-gradient-to-b from-slate-50 to-white">
        <div className="absolute top-0 right-0 -z-10 w-2/3 h-full bg-blue-50/80 blur-3xl rounded-full translate-x-1/3 pointer-events-none" />
        <div className="absolute bottom-0 left-0 -z-10 w-1/2 h-full bg-indigo-50/60 blur-3xl rounded-full -translate-x-1/3 pointer-events-none" />

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Copy */}
            <div>
              <motion.div initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
                className="flex flex-wrap items-center gap-2.5 mb-6 animate-fade-in"
              >
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm">
                  <BadgeCheck size={15} /> Exclusively for Doctors &amp; Healthcare
                </span>
                <Link href="/meta-certified-partner/" className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-indigo-50 border border-indigo-100 hover:border-indigo-200 text-indigo-600 hover:text-indigo-700 transition-all font-semibold text-sm group">
                  <svg className="w-4 h-4 text-blue-500 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.92 5c-1.4 0-2.67.6-3.6 1.6C12.38 5.6 11.11 5 9.7 5c-3.13 0-5.69 2.5-5.69 5.6 0 3.1 2.56 5.6 5.69 5.6 1.4 0 2.67-.6 3.6-1.6.93 1 2.2 1.6 3.61 1.6 3.14 0 5.7-2.5 5.7-5.6 0-3.1-2.56-5.6-5.7-5.6zm.01 9.2c-1.99 0-3.6-1.6-3.6-3.6 0-2 1.61-3.6 3.6-3.6 1.98 0 3.59 1.6 3.59 3.6 0 2-1.61 3.6-3.59 3.6zM9.7 14.2c-1.99 0-3.6-1.6-3.6-3.6 0-2 1.61-3.6 3.6-3.6 1.98 0 3.6 1.6 3.6 3.6 0 2-1.61 3.6-3.6 3.6z"/>
                  </svg>
                  <span>Meta Ads Partner &rarr;</span>
                </Link>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-5 leading-[1.12]"
              >
                Get{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  30–50 New<br />Patient Inquiries
                </span>
                <br />Every Month
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed"
              >
                Done-for-you Instagram & Facebook marketing for doctors — <strong>wherever your clinic is located.</strong> No contracts. Proven system. Patient inquiries start within 30 days.
              </motion.p>

              {/* Mini trust row */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {["50+ Doctors Served", "1.1M+ Reel Views", "4.9★ Google Rating", "No Lock-in Contract", "Only India Doctors"].map((t, i) => (
                  <span key={i} className="inline-flex items-center gap-1.5 text-xs font-semibold bg-white border border-slate-200 rounded-full px-3 py-1.5 shadow-sm">
                    <Check size={12} className="text-emerald-500" /> {t}
                  </span>
                ))}
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row gap-3"
              >
                <a href="#contact" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-base px-7 py-4 rounded-2xl hover:from-blue-700 hover:to-indigo-700 transition-all active:scale-95 shadow-xl shadow-blue-600/25">
                  Book Free Strategy Call <ArrowRight size={18} />
                </a>
                <a href="https://wa.me/918160881461" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-emerald-500 text-white font-bold text-base px-7 py-4 rounded-2xl hover:bg-emerald-600 transition-all active:scale-95 shadow-xl shadow-emerald-500/20"
                >
                  <MessageCircle size={18} /> WhatsApp Us Now
                </a>
              </motion.div>
              <ScarcityReplacement className="mt-4" centered={false} ctaHref="#contact" />
            </div>

            {/* Right: Mini Lead Form in hero */}
            <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white rounded-3xl shadow-2xl border border-slate-100 p-8"
            >
              <div className="mb-6">
                <div className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                  <CheckCircle size={12} /> Free · No Obligation · Reply in 4 Hours
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-1">Get Your Free Growth Strategy</h2>
                <p className="text-slate-500 text-sm">Takes 30 seconds. We'll call you back on WhatsApp.</p>
              </div>
              <LeadForm />
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Stats Bar ──────────────────────────────────────── */}
      <section className="py-10 bg-slate-900">
        <div className="max-w-4xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-slate-700 md:divide-x">
            {stats.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="text-center py-5 px-4"
                >
                  <Icon size={18} className="text-blue-400 mx-auto mb-2" />
                  <div className="text-2xl md:text-3xl font-extrabold text-white">{item.value}</div>
                  <div className="text-slate-400 text-xs mt-1">{item.label}</div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── Meta Partner Trust Section ────────────────────────── */}
      <section className="py-14 px-4 bg-slate-50 border-b border-slate-100">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8 bg-white border border-slate-150 rounded-[2.5rem] p-8 md:p-10 shadow-sm relative overflow-hidden">
          {/* Subtle Glow background */}
          <div className="absolute top-0 right-0 w-48 h-48 bg-blue-500/5 blur-2xl rounded-full pointer-events-none" />
          
          <div className="flex-1 space-y-4">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-bold text-xs">
              <Award size={13} /> Official Meta Recognition
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 leading-tight">
              Meta Ads Partner Excellence Impact Leader
            </h3>
            <p className="text-slate-600 text-sm leading-relaxed">
              Epsilon Technology has successfully achieved the <strong>Ads Partner Excellence Impact Leader</strong> status in the Meta ads partner excellence program. For our medical clients, this guarantees compliance-friendly Instagram and Facebook campaigns, expert pixel tracking, and superior ROI on your daily marketing budgets.
            </p>
            <div className="pt-2">
              <Link 
                href="/meta-certified-partner/"
                className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm hover:text-blue-700 transition-colors group"
              >
                Verify Our Official Meta Recognition <ArrowRight size={15} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          
          <div className="shrink-0 w-full md:w-[260px] aspect-[1.8/1] relative rounded-2xl overflow-hidden border border-slate-200 shadow-md bg-slate-50 group cursor-pointer">
            <Link href="/meta-certified-partner/">
              <Image 
                src="/meta-partner-certificate.png"
                alt="Meta Certificate of Recognition"
                fill
                className="object-cover group-hover:scale-102 transition-transform duration-300"
              />
            </Link>
          </div>
        </div>
      </section>

      {/* ── 3. Why Trust Us ───────────────────────────────────── */}
      <section className="py-14 px-4 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Why Doctors Choose Epsilon</h2>
            <p className="text-slate-500 text-sm">We're not a generic agency — we're a <strong>doctor-only</strong> patient acquisition team</p>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5">
            {trustPoints.map((tp, i) => {
              const Icon = tp.icon;
              return (
                <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className="bg-slate-50 border border-slate-100 rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:shadow-md transition-all"
                >
                  <div className={`w-12 h-12 rounded-xl ${tp.bg} flex items-center justify-center`}>
                    <Icon size={22} className={tp.color} />
                  </div>
                  <h3 className="font-bold text-slate-900 text-sm">{tp.title}</h3>
                  <p className="text-slate-500 text-xs leading-relaxed">{tp.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── 4. Before / After Results ─────────────────────────── */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">From Zero → Fully Booked Clinic</h2>
            <p className="text-slate-500">Real results from real doctors across India</p>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {beforeAfterCards.map((card, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              >
                <div className={`h-1.5 bg-gradient-to-r ${card.color}`} />
                <div className="p-6">
                  <div className="mb-5">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 block">Before Epsilon</span>
                    <p className="text-base font-bold text-red-500">{card.before}</p>
                  </div>
                  <div className="flex items-center gap-2 my-3 text-xs text-slate-400 font-medium">
                    <div className="flex-1 h-px bg-slate-100" />
                    ↓ Started with Epsilon ↓
                    <div className="flex-1 h-px bg-slate-100" />
                  </div>
                  <div className="mt-4">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-1 block">{card.timeline}</span>
                    <p className="text-base font-bold text-emerald-600">{card.after}</p>
                  </div>
                  <div className="mt-5 pt-4 border-t border-slate-50 text-xs text-slate-500 font-medium">{card.name}</div>
                </div>
              </motion.div>
            ))}
          </div>
          <p className="text-center text-slate-400 text-xs mt-8">
            Results vary by specialty, city, and ad budget.{' '}
            <a href="#contact" className="text-blue-600 font-semibold hover:underline">Book a free call to see what's possible for your clinic →</a>
          </p>
        </div>
      </section>

      {/* ── 5. Real Reels / Portfolio ─────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">Real Reels We've Made for Doctors</h2>
            <p className="text-slate-500">These aren't stock content. These are actual reels that drove patient calls &amp; OPD visits.</p>
          </motion.div>
          <div className="flex flex-wrap justify-center gap-8">
            {reels.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="flex flex-col w-full sm:w-[300px] rounded-2xl overflow-hidden bg-white shadow-xl border border-slate-100"
              >
                <div className="relative h-[500px] bg-slate-100">
                  <iframe src={item.embedUrl} className="w-full h-full" frameBorder="0" scrolling="no" allowTransparency={true} allow="encrypted-media" />
                  <div className="absolute bottom-0 left-0 right-0 h-16 bg-white z-20 px-4 flex flex-col justify-center border-t border-slate-50">
                    <div className="flex items-center gap-3 text-xs font-semibold">
                      <span className="flex items-center gap-1 text-blue-600 bg-blue-50 px-2 py-1 rounded-full"><Eye size={11} /> {item.views} Views</span>
                      <span className="flex items-center gap-1 text-pink-600 bg-pink-50 px-2 py-1 rounded-full"><Heart size={11} /> {item.likes}</span>
                    </div>
                  </div>
                </div>
                <div className="bg-slate-50 px-4 py-2.5 text-xs font-semibold text-slate-600">{item.title}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold px-7 py-3.5 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg shadow-blue-600/20">
              Get Reels Like These for My Clinic <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. Testimonials ───────────────────────────────────── */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">50+ Doctors</span> Across India
            </h2>
            <p className="text-slate-500">Don't take our word for it. Here's what doctors say after growing with us.</p>
          </motion.div>

          {/* Stars trust bar */}
          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-amber-400 text-amber-400" />)}</div>
            <span className="font-bold text-slate-900 text-lg">4.9</span>
            <a
              href="https://wap.justdial.com/analytics/reviews?el=0&nh=1&rootvc=0&docid=9999PX285.X285.230128100734.H9V1&hide_header=1&m=1&old=1&source=77&tab=reviews&wap=77&jdbusiness=1&ep=quick_links&ln=en"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-500 text-sm hover:text-blue-600 underline underline-offset-2 transition-colors"
            >· 50+ verified doctor reviews on JustDial →</a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {testimonials.map((t, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 flex flex-col hover:shadow-md transition-all"
              >
                <div className="flex items-center gap-1 mb-3">{[...Array(5)].map((_, si) => <Star key={si} size={12} className="fill-amber-400 text-amber-400" />)}</div>
                <div className="relative mb-4 flex-1">
                  <Quote className="absolute -top-1 -left-1 text-slate-100 w-8 h-8 -scale-x-100" />
                  <p className="text-slate-700 text-sm leading-relaxed italic relative z-10">&quot;{t.quote}&quot;</p>
                </div>
                <div className="bg-gradient-to-r from-emerald-50 to-teal-50 border border-emerald-100 rounded-xl px-3 py-2.5 mb-4 flex items-center gap-3">
                  <div className="text-center shrink-0">
                    <div className="text-lg font-extrabold text-emerald-600">{t.metric}</div>
                    <div className="text-[10px] text-emerald-700 font-medium leading-tight">{t.metricLabel}</div>
                  </div>
                  <div className="w-px h-8 bg-emerald-200" />
                  <p className="text-emerald-800 text-xs font-semibold leading-snug">📈 Real result achieved</p>
                </div>
                <div className="flex items-center gap-3 pt-4 border-t border-slate-50">
                  {t.photo ? (
                    <img src={t.photo} alt={t.author} className="w-10 h-10 rounded-full object-cover shrink-0 border-2 border-slate-100" />
                  ) : (
                    <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} text-white flex items-center justify-center font-bold text-xs shrink-0`}>{t.initials.slice(0, 2)}</div>
                  )}
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm leading-tight">{t.author}</h4>
                    <p className="text-slate-400 text-xs">{t.role}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>



      {/* ── 8. FAQ — Resolve objections BEFORE asking for commitment ── */}
      <section className="py-20 px-4 bg-slate-900 relative overflow-hidden">
        {/* Background accents */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-indigo-600/8 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-3xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 font-semibold text-xs uppercase tracking-widest mb-5">
              <Shield size={13} /> Common Questions
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-3 leading-tight">
              Everything You Want to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Know Before Starting</span>
            </h2>
            <p className="text-slate-400 text-sm max-w-xl mx-auto">
              50+ doctors asked these exact questions. Here are honest answers — no fluff.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => <FaqItem key={i} faq={faq} index={i} />)}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-10 p-6 bg-slate-800/60 border border-slate-700/60 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-5"
          >
            <div>
              <p className="text-white font-semibold text-sm">Still have a question not listed here?</p>
              <p className="text-slate-400 text-xs mt-0.5">We reply on WhatsApp within 4 hours — guaranteed.</p>
            </div>
            <div className="flex gap-3 shrink-0">
              <a href="#contact" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold text-sm px-5 py-3 rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all shadow-lg">
                Book Free Call <ArrowRight size={15} />
              </a>
              <a href="https://wa.me/918160881461" target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-emerald-500 text-white font-bold text-sm px-5 py-3 rounded-xl hover:bg-emerald-600 transition-all"
              >
                <MessageCircle size={15} /> WhatsApp
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ── 9. Lead Form (Main CTA) ───────────────────────────── */}
      <section id="contact" className="py-20 px-4 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Value Proposition */}
            <div>
              <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                className="text-3xl md:text-4xl font-bold text-white mb-5 leading-snug"
              >
                Ready to Fill Your OPD with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Real Patient Inquiries?</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="text-slate-400 text-base mb-8"
              >
                Book a free 20-minute strategy call. We&apos;ll analyze your specialty, city, and competition — then show you exactly how we&apos;d grow your clinic.
              </motion.p>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, color: "text-emerald-400", text: "Free analysis of your Instagram & Google presence" },
                  { icon: CheckCircle, color: "text-emerald-400", text: "Competitor map for your specialty in your city" },
                  { icon: CheckCircle, color: "text-emerald-400", text: "Patient acquisition plan tailored to your clinic" },
                  { icon: CheckCircle, color: "text-emerald-400", text: "No obligation — just real, actionable insights" },
                ].map((b, i) => (
                  <motion.div key={i} initial={{ opacity: 0, x: -16 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }}
                    className="flex items-start gap-3"
                  >
                    <b.icon size={18} className={`${b.color} mt-0.5 shrink-0`} />
                    <span className="text-slate-300 text-sm">{b.text}</span>
                  </motion.div>
                ))}
              </div>

              {/* Alternative CTA */}
              <div className="mt-8 pt-8 border-t border-slate-800">
                <p className="text-slate-500 text-xs mb-3">Prefer to talk directly?</p>
                <a href="https://wa.me/918160881461" target="_blank" rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-emerald-500 text-white font-bold text-sm px-5 py-3 rounded-xl hover:bg-emerald-600 transition-all"
                >
                  <MessageCircle size={16} /> WhatsApp Us Now
                </a>
              </div>
            </div>

            {/* Right: Form */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              className="bg-white rounded-3xl p-8 shadow-2xl"
            >
              <div className="mb-6">
                <h3 className="text-xl font-bold text-slate-900 mb-1">Claim My Free Growth Strategy</h3>
                <p className="text-slate-500 text-sm">Takes 30 seconds. We reply on WhatsApp within 4 hours.</p>
              </div>
              <LeadForm />
              {/* Social proof below form */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <div className="flex items-center gap-2 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={13} className="fill-amber-400 text-amber-400" />)}
                  <span className="text-slate-700 text-sm font-bold">4.9 · 50+ doctor reviews</span>
                </div>
                <p className="text-slate-500 text-xs italic">&quot;Best decision for my practice. Patient inquiries went up within 30 days.&quot; — Dr. D.P. Vora</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Bottom Availability ────────────────────────────────── */}
      <section className="py-12 bg-white">
        <div className="max-w-5xl mx-auto px-4">
          <AvailabilityBanner variant="full" ctaHref="#contact" />
        </div>
      </section>

      {/* ── Floating WhatsApp ──────────────────────────────────── */}
      <FloatingWhatsApp />
    </div>
  );
}
