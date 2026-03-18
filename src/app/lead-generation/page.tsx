'use client';

import { useState } from 'react';
import {
  ArrowRight, MessageCircle, CheckCircle, Star, Quote,
  Check, Zap, TrendingUp, Rocket, Building2,
  ChevronDown, ChevronUp, Shield, Clock, Users,
  BarChart3, Eye, Heart, BadgeCheck, Phone, X, Briefcase
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// ─── DATA ────────────────────────────────────────────────────────────────────

const stats = [
  { value: "1.5M+", label: "Targeted Views Generated", icon: Eye },
  { value: "100+", label: "Businesses Scaled", icon: Briefcase },
  { value: "4.9 ★", label: "Google Rating", icon: Star },
  { value: "Global", label: "Serving Clients Worldwide", icon: BadgeCheck },
];

const trustPoints = [
  { icon: Shield, color: "text-blue-600", bg: "bg-blue-50", title: "Brand-Safe Content", desc: "Every post complies with industry best practices. Zero brand risk." },
  { icon: Clock, color: "text-emerald-600", bg: "bg-emerald-50", title: "Results in 45–60 Days", desc: "The same 5-step lead acquisition system used by 100+ businesses — content, ads, funnel, follow-up, and reporting." },
  { icon: BarChart3, color: "text-violet-600", bg: "bg-violet-50", title: "Transparent Reporting", desc: "Bi-weekly reports showing exactly how your investment is performing. No black box." },
  { icon: Users, color: "text-orange-600", bg: "bg-orange-50", title: "Performance Marketing Agency", desc: "We focus on one thing: getting you qualified leads that actually convert into sales." },
];

const beforeAfterCards = [
  { before: "Zero predictable leads from social media", after: "40+ monthly qualified inquiries", timeline: "After 60 Days", name: "B2B Service Provider, Gujarat", color: "from-blue-600 to-indigo-600" },
  { before: "Relying only on referrals & word-of-mouth", after: "Direct WhatsApp inquiries every day", timeline: "After 60 Days", name: "Retail & E-commerce Brand", color: "from-emerald-500 to-teal-500" },
  { before: "500 followers, 0 engagement, no sales", after: "1.1M+ views, 1,400+ shares, Revenue growth", timeline: "After 90 Days", name: "Viral Social Media Campaign", color: "from-orange-500 to-rose-500" },
];

const reels = [
  { title: "Service Showcase", embedUrl: "https://www.instagram.com/reel/DNh44Bissbj/embed", views: "195k+", likes: "512+" },
  { title: "Viral Brand Reel", embedUrl: "https://www.instagram.com/reel/DFX0HANA3e3/embed", views: "1.1M+", likes: "1.4k+" },
  { title: "Educational Content", embedUrl: "https://www.instagram.com/reel/DO_M0fLkrm0/embed", views: "420k+", likes: "15.2k+" },
  { title: "Client Success Story", embedUrl: "https://www.instagram.com/reel/DPlJCV1j69W/embed", views: "280k+", likes: "8.9k+" },
  { title: "Special Offer Announcement", embedUrl: "https://www.instagram.com/reel/DRo6ggqE16-/embed", views: "350k+", likes: "13.4k+" },
];

const testimonials = [
  {
    quote: "Working with Epsilon for 2 years. Verified inquiries went up significantly after they started managing our ads and social media. They understand business growth like no other.",
    author: "Rahul M.", role: "CEO, Tech Solutions", initials: "RM", color: "from-orange-400 to-amber-500",
    photo: "", 
    metric: "40+", metricLabel: "Inquiries/month",
  },
  {
    quote: "Mr Jaydeep helped our company scale sales footfall like never before. Highly recommend for social media & website development. Revenue is 3× what it was.",
    author: "Devam Dave", role: "Director, Shreeji Group", initials: "DD", color: "from-blue-500 to-indigo-500",
    photo: "",
    metric: "3×", metricLabel: "Sales growth in 60d",
  },
  {
    quote: "Within 45 days we started getting direct WhatsApp inquiries from targeted social media ads. Very accurate approach, and the content quality is outstanding.",
    author: "Priya S.", role: "Founder, Retail Brand", initials: "PS", color: "from-emerald-500 to-teal-500",
    photo: "",
    metric: "45", metricLabel: "Days to first solid lead",
  },
  {
    quote: "Epsilon Technology is a one-stop solution for all digital marketing needs. They've helped our agency scale like never before. Highly recommend for any business.",
    author: "Amit V.", role: "Managing Director", initials: "AV", color: "from-purple-500 to-violet-500",
    photo: "",
    metric: "30–50", metricLabel: "Inquiries/month",
  },
  {
    quote: "Expert and very easy to work with. They know exactly what content businesses need to build trust and attract clients. Reels went from 500 to 100k+ views.",
    author: "Siddharth K.", role: "Business Owner", initials: "SK", color: "from-pink-500 to-rose-500",
    photo: "",
    metric: "100k+", metricLabel: "Views in 3mo",
  },
];

const plans = [
  {
    id: 'starter', icon: Zap, iconColor: 'text-sky-500', iconBg: 'bg-sky-50',
    name: 'Business Starter', tagline: 'Build online presence & attract local customers',
    price: '₹14,999', originalPrice: '₹18,000', savings: 'Save ₹3,001', period: '/month',
    highlight: false, badge: null, accentGradient: 'from-sky-400 to-blue-500',
    features: [
      { text: '8 Custom Branded Posts / Carousels', bold: true },
      { text: '3 Professionally Edited Reels', bold: true },
      { text: 'Instagram + Facebook Profile Optimisation' },
      { text: 'Bio, Highlights & Grid Revamp' },
      { text: 'Local Hashtag & Growth Strategy' },
      { text: 'Scheduled Posting (3–4×/week)' },
      { text: 'Monthly Performance Report' },
      { text: 'Dedicated Account Manager' },
    ],
    note: 'Ideal for small businesses & startups',
  },
  {
    id: 'growth', icon: TrendingUp, iconColor: 'text-white', iconBg: 'bg-white/20',
    name: 'Engagement Accelerator', tagline: 'For businesses targeting 30–50 new leads/month',
    price: '₹22,999', originalPrice: '₹28,000', savings: 'Save ₹5,001', period: '/month',
    highlight: true, badge: 'Most Popular', accentGradient: 'from-blue-600 to-indigo-600',
    features: [
      { text: '12 High-Converting Branded Posts', bold: true },
      { text: '5 Viral-Style Educational Reels', bold: true },
      { text: 'Instagram Stories + DM Trigger CTAs' },
      { text: 'Meta Ad Boosting (₹5,000 ad budget incl.)', bold: true },
      { text: 'WhatsApp Inquiry Funnel Setup' },
      { text: 'Bi-Weekly Strategy & Insights Report' },
      { text: 'Google Business Profile Management' },
      { text: 'Competitor Tracking (local area)' },
      { text: 'Priority Account Manager' },
    ],
    note: '🔥 Most chosen by growing enterprises',
  },
  {
    id: 'leadgen', icon: Rocket, iconColor: 'text-orange-500', iconBg: 'bg-orange-50',
    name: 'Lead Gen Machine', tagline: 'Full-stack lead acquisition for maximum sales growth',
    price: '₹34,999', originalPrice: '₹42,000', savings: 'Save ₹7,001', period: '/month',
    highlight: false, badge: 'Best Value', accentGradient: 'from-orange-400 to-rose-500',
    features: [
      { text: '16 Premium Posts + Carousel Infographics', bold: true },
      { text: '8 Offer-Based & Educational Reels', bold: true },
      { text: '2 Video Shoots/month (or guided online)', bold: true },
      { text: 'Full Meta Ads (₹10,000 ad budget incl.)', bold: true },
      { text: 'WhatsApp / DM Automation Funnel' },
      { text: 'B2B / B2C Lead Capture Landing Page' },
      { text: 'Weekly Growth + Lead Tracking Reports' },
      { text: 'Reputation & Review Management' },
      { text: 'Dedicated Sr. Account Manager' },
    ],
    note: 'Best for businesses wanting maximum revenue',
  },
];

const faqs = [
  { q: "How quickly will I see real business inquiries?", a: "Most businesses start seeing WhatsApp inquiries and DMs within 30–45 days of starting. Significant sales pipeline growth happens in 60–90 days with consistent execution." },
  { q: "What makes you different from a generic digital marketing agency?", a: "We don't just focus on likes and vanity metrics. We build performance-driven campaigns designed to attract qualified leads that actually convert into revenue." },
  { q: "Do I need to create any content or provide photos?", a: "Not necessarily. Our Starter and Growth plans work with high-quality stock visuals and your existing brand assets. The Lead Gen Machine plan includes guided video shoots so we can create original, authentic content for your brand." },
  { q: "Is there a long-term contract or lock-in?", a: "No. All plans are month-to-month. We earn your trust every month with results, not paperwork. That said, most clients stay with us for 12+ months because they see consistent ROI." },
  { q: "What is the ad budget included in higher plans?", a: "The Engagement Accelerator includes ₹5,000/month of Meta (Facebook + Instagram) ad spend managed by our team. The Lead Gen Machine includes ₹10,000/month. No extra cost — it's fully included. You can top up for faster results." },
  { q: "Do you work with businesses outside India?", a: "Yes! We serve clients globally. Our strategies are adapted for each market — local language, cultural tone, platform preferences, and industry regulations. Book a free call to discuss your region." },
  { q: "Do you guarantee a certain number of leads?", a: "We don't guarantee specific numbers because results depend on your industry, offer, and competition. What we guarantee: a proven system, transparent bi-weekly reporting, and a strategy that has worked for 100+ businesses." },
  { q: "Can this work for B2B or specialized industries?", a: "Absolutely. We have custom strategies for B2B, real estate, tech, and retail. WhatsApp us and we'll build a tailored strategy for your specific business model." },
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
  const [formData, setFormData] = useState({ name: '', whatsapp: '', businessType: '', city: '' });
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
        body: JSON.stringify({ name: formData.name, mobile: formData.whatsapp, specialty: formData.businessType, city: formData.city, clinic: 'Business Lead' }),
      });
      if (res.ok) { setStatus('success'); setFormData({ name: '', whatsapp: '', businessType: '', city: '' }); setTimeout(() => setStatus('idle'), 6000); }
      else setStatus('error');
    } catch { setStatus('error'); }
  };

  if (status === 'success') return (
    <div className="text-center py-10">
      <div className="w-16 h-16 rounded-full bg-emerald-100 flex items-center justify-center mx-auto mb-4">
        <CheckCircle className="text-emerald-600" size={32} />
      </div>
      <h3 className={`text-xl font-bold mb-2 ${dark ? 'text-white' : 'text-slate-900'}`}>You&apos;re in, {formData.name || 'Friend'}! 🎉</h3>
      <p className={dark ? 'text-slate-400' : 'text-slate-600'}>We&apos;ll reach out to you on WhatsApp within 4 hours with your personalised growth plan!</p>
    </div>
  );

  const inputClass = `w-full border rounded-xl px-4 py-3.5 text-base outline-none transition-all placeholder:text-slate-400 ${dark
    ? 'bg-white/10 border-white/20 text-white placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-400/20'
    : 'bg-white border-slate-200 text-slate-900 focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20'
    }`;

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input type="text" name="name" placeholder="👤 Your Name *" required value={formData.name} onChange={handleChange} className={inputClass} />
      <input type="tel" name="whatsapp" placeholder="📱 WhatsApp Number *" required value={formData.whatsapp} onChange={handleChange} className={inputClass} />
      <input type="text" name="businessType" placeholder="🏢 Business Type / Industry *" required value={formData.businessType} onChange={handleChange} className={inputClass} />
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
        href="https://wa.me/918160881461?text=Hi%20Epsilon%2C%20I%20want%20to%20grow%20my%20business%20through%20digital%20marketing"
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

export default function LeadGenerationPage() {
  return (
    <div className="font-sans bg-white">

      {/* ── Urgency Banner ────────────────────────────────────── */}
      <div className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 text-black text-center py-2.5 px-4 text-sm font-bold shadow-sm">
        ⚡ Only limited new clients accepted this month —{' '}
        <a href="#contact" className="underline underline-offset-2">Check availability for your industry →</a>
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
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-100 text-blue-600 font-semibold text-sm mb-6"
              >
                <BadgeCheck size={15} /> Transforming Brands &amp; Driving Revenue
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-5 leading-[1.12]"
              >
                Get{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-500">
                  30–50 Qualified Leads
                </span>
                <br />Every Month
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }}
                className="text-lg text-slate-600 mb-8 max-w-xl leading-relaxed"
              >
                Done-for-you digital marketing for your business — <strong>no matter your industry.</strong> No long-term contracts. Proven system. High-quality inquiries start within 30 days.
              </motion.p>

              {/* Mini trust row */}
              <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }}
                className="flex flex-wrap gap-3 mb-8"
              >
                {["100+ Businesses Scaled", "Targeted Ad Campaigns", "High ROI Strategies", "No Lock-in Contract", "End-to-End Solutions"].map((t, i) => (
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
              <p className="text-red-500 text-xs font-semibold mt-3">⏳ Free strategy call · Limited slots this month</p>
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

      {/* ── 3. Why Trust Us ───────────────────────────────────── */}
      <section className="py-14 px-4 bg-white border-b border-slate-100">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">Why Businesses Choose Epsilon</h2>
            <p className="text-slate-500 text-sm">We're not a generic agency — we're a <strong>growth-focused</strong> performance marketing team</p>
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
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">From Zero → Revenue Growth</h2>
            <p className="text-slate-500">Real results from growing businesses worldwide</p>
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
            Results vary by industry, offer, and ad budget.{' '}
            <a href="#contact" className="text-blue-600 font-semibold hover:underline">Book a free call to see what's possible for your business →</a>
          </p>
        </div>
      </section>

      {/* ── 5. Portfolio ─────────────────────────── */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">Campaigns That Convert</h2>
            <p className="text-slate-500">Engaging social media content designed for ROI and lead generation.</p>
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
              Transform My Brand's Social Media <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      {/* ── 6. Testimonials ───────────────────────────────────── */}
      <section className="py-16 px-4 bg-slate-50">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-10">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-2">
              Trusted by <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">100+ Businesses</span>
            </h2>
            <p className="text-slate-500">Don't take our word for it. Here's what business owners say after scaling with us.</p>
          </motion.div>

          <div className="flex items-center justify-center gap-3 mb-10">
            <div className="flex gap-1">{[...Array(5)].map((_, i) => <Star key={i} size={20} className="fill-amber-400 text-amber-400" />)}</div>
            <span className="font-bold text-slate-900 text-lg">4.9</span>
            <span className="text-slate-500 text-sm">· Based on verified client reviews</span>
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
                  <div className={`w-10 h-10 rounded-full bg-gradient-to-br ${t.color} text-white flex items-center justify-center font-bold text-xs shrink-0`}>{t.initials.slice(0, 2)}</div>
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

      {/* ── 7. Pricing ────────────────────────────────────────── */}
      <section id="pricing" className="py-20 px-4 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[400px] bg-blue-50/40 rounded-full blur-3xl pointer-events-none" />
        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-4">
            <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-3">Simple, Transparent Pricing</h2>
            <p className="text-slate-500 mb-2">Growth plans engineered for ROI. Cancel anytime.</p>
            <p className="text-slate-400 text-xs mb-4">All prices shown are exclusive of 18% GST.</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
            {plans.map((plan, i) => {
              const Icon = plan.icon;
              return (
                <motion.div key={plan.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                  className={`relative rounded-3xl flex flex-col transition-all duration-300 ${plan.highlight
                    ? 'bg-gradient-to-b from-[#1a2244] to-[#0f1729] text-white shadow-2xl shadow-blue-900/40 ring-2 ring-blue-500 scale-[1.03] z-10'
                    : 'bg-white text-slate-900 shadow-md border border-slate-200 hover:shadow-xl hover:-translate-y-1'
                    }`}
                >
                  {plan.badge && (
                    <div className={`absolute -top-3.5 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs font-bold px-4 py-1.5 rounded-full shadow-md ${plan.highlight ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white' : 'bg-gradient-to-r from-orange-400 to-rose-400 text-white'}`}>
                      {plan.badge}
                    </div>
                  )}
                  <div className={`h-1.5 rounded-t-3xl bg-gradient-to-r ${plan.accentGradient}`} />
                  <div className="p-7 flex flex-col flex-1">
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${plan.iconBg}`}>
                        <Icon size={20} className={plan.iconColor} />
                      </div>
                      <div>
                        <h3 className={`font-bold text-base leading-snug ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.name}</h3>
                        <p className="text-xs text-emerald-400 font-medium mt-0.5">{plan.note}</p>
                      </div>
                    </div>
                    <p className={`text-xs mb-4 leading-relaxed ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.tagline}</p>
                    <div className="mb-5">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span className={`text-sm line-through ${plan.highlight ? 'text-slate-500' : 'text-slate-400'}`}>{plan.originalPrice}</span>
                        <span className="text-xs bg-emerald-100 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">{plan.savings}</span>
                      </div>
                      <div className="flex items-end gap-1">
                        <span className={`text-3xl font-extrabold ${plan.highlight ? 'text-white' : 'text-slate-900'}`}>{plan.price}</span>
                        <span className={`text-sm mb-1 ${plan.highlight ? 'text-slate-400' : 'text-slate-500'}`}>{plan.period}</span>
                      </div>
                    </div>
                    <div className={`h-px w-full mb-5 ${plan.highlight ? 'bg-white/10' : 'bg-slate-100'}`} />
                    <ul className="space-y-2.5 flex-1 mb-6">
                      {plan.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2.5 text-sm">
                          <div className={`mt-0.5 w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${plan.highlight ? 'bg-blue-500' : 'bg-emerald-100'}`}>
                            <Check size={10} className={plan.highlight ? 'text-white' : 'text-emerald-600'} strokeWidth={3} />
                          </div>
                          <span className={`${f.bold ? 'font-semibold' : ''} ${plan.highlight ? (f.bold ? 'text-white' : 'text-slate-300') : (f.bold ? 'text-slate-900' : 'text-slate-600')}`}>{f.text}</span>
                        </li>
                      ))}
                    </ul>
                    <a href="#contact"
                      className={`w-full py-3.5 px-4 rounded-2xl font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 ${plan.highlight
                        ? 'bg-gradient-to-r from-blue-500 to-indigo-500 text-white hover:from-blue-600 hover:to-indigo-600 shadow-lg shadow-blue-600/30'
                        : 'border-2 border-slate-200 bg-slate-50 text-slate-900 hover:bg-white hover:border-slate-300 hover:shadow-md'
                        }`}
                    >
                      Get Started <ArrowRight size={15} />
                    </a>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
            className="mt-8 bg-gradient-to-r from-violet-50 to-purple-50 border border-violet-200 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-4"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-violet-100 flex items-center justify-center shrink-0">
                <Building2 size={24} className="text-violet-600" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-base">Corporate / Large Enterprise?</h3>
                <p className="text-slate-500 text-sm mt-0.5">Custom ad spend, dedicated teams, advanced CRM integration, and bespoke multi-platform strategy for established brands.</p>
              </div>
            </div>
            <a href="https://wa.me/918160881461?text=Hi%20Epsilon%2C%20I%20need%20a%20custom%20enterprise%20marketing%20plan" target="_blank" rel="noopener noreferrer"
              className="shrink-0 inline-flex items-center gap-2 bg-violet-600 text-white font-bold text-sm px-5 py-3 rounded-xl hover:bg-violet-700 transition-all whitespace-nowrap"
            >
              <MessageCircle size={16} /> Request Custom Plan
            </a>
          </motion.div>
        </div>
      </section>

      {/* ── 8. FAQ ────────────────────────────────────────────── */}
      <section className="py-20 px-4 bg-slate-900 relative overflow-hidden">
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
                Ready to Drive Actual Sales &<br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-400">Qualified leads?</span>
              </motion.h2>
              <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
                className="text-slate-400 text-base mb-8"
              >
                Book a free strategy call. We&apos;ll analyze your industry, audience, and competition — then show you exactly how we&apos;d grow your revenue.
              </motion.p>
              <div className="space-y-4">
                {[
                  { icon: CheckCircle, color: "text-emerald-400", text: "Free analysis of your Digital Presence" },
                  { icon: CheckCircle, color: "text-emerald-400", text: "Competitor map for your market" },
                  { icon: CheckCircle, color: "text-emerald-400", text: "Lead acquisition plan customized for your brand" },
                  { icon: CheckCircle, color: "text-emerald-400", text: "No obligation — just actionable insights" },
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Floating WhatsApp ──────────────────────────────────── */}
      <FloatingWhatsApp />
    </div>
  );
}
