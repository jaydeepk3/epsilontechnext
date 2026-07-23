'use client';

import { Button } from '@/components/ui/button';
import { ShieldCheck, ArrowRight, MessageSquare, Star, CheckCircle2, Lock, Zap } from 'lucide-react';
import { motion } from 'framer-motion';

export function Hero() {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative pt-20 pb-24 lg:pt-36 lg:pb-32 overflow-hidden bg-slate-50 text-slate-900">
      {/* Background Ambient Glow */}
      <div className="absolute top-0 right-1/4 -z-10 w-[500px] h-[500px] bg-blue-400/10 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 -z-10 w-[400px] h-[400px] bg-emerald-400/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 text-center max-w-5xl relative z-10">
        
        {/* Scarcity & Trust Tag */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-slate-200 text-blue-700 font-bold text-xs md:text-sm mb-8 shadow-sm"
        >
          <Zap className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span>Q3/Q4 Dedicated Squad Openings · $10k–$100k Fixed Scope Projects</span>
        </motion.div>

        {/* Outcome-Driven Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-slate-900 mb-6 leading-[1.1]"
        >
          We Build &amp; Scale High-Yield Software For Growth Companies That <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-emerald-600">Refuse to Fail</span>
        </motion.h1>

        {/* Customer-First Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-base md:text-xl text-slate-600 mb-10 max-w-3xl mx-auto leading-relaxed"
        >
          Replace agency delays, spaghetti code, and micromanagement with a dedicated squad of senior engineers. Guaranteed 2-week sprint releases, 100% code ownership, and enterprise NDA security.
        </motion.p>

        {/* High-Intent CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button
            onClick={() => scrollToSection('booking')}
            className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 font-extrabold text-base text-white rounded-2xl transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 active:scale-95"
          >
            <span>Book a 15-Min Strategy Call</span>
            <ArrowRight className="w-5 h-5" />
          </button>

          <a
            href="https://wa.me/919904269904?text=Hi%20Epsilon%20Team%2C%20I%20would%20like%20to%20discuss%20a%20software%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-slate-700 hover:border-emerald-500/50 hover:bg-slate-800 font-extrabold text-base text-white rounded-2xl transition-all flex items-center justify-center gap-2 active:scale-95"
          >
            <MessageSquare className="w-5 h-5 text-emerald-400 fill-emerald-400/20" />
            <span>WhatsApp Us Now</span>
          </a>
        </motion.div>

        {/* Social Proof Marquee & Statistics */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto text-center"
        >
          <div>
            <span className="text-3xl md:text-4xl font-extrabold text-white block">$50M+</span>
            <span className="text-xs text-slate-400 font-semibold mt-1 block">Client Revenue Scaled</span>
          </div>
          <div>
            <span className="text-3xl md:text-4xl font-extrabold text-blue-400 block">99.4%</span>
            <span className="text-xs text-slate-400 font-semibold mt-1 block">On-Time Sprint Delivery</span>
          </div>
          <div>
            <span className="text-3xl md:text-4xl font-extrabold text-emerald-400 block">100%</span>
            <span className="text-xs text-slate-400 font-semibold mt-1 block">IP &amp; Code Ownership</span>
          </div>
          <div>
            <span className="text-3xl md:text-4xl font-extrabold text-amber-400 block">4.9 ★</span>
            <span className="text-xs text-slate-400 font-semibold mt-1 block">Verified Client Rating</span>
          </div>
        </motion.div>

        {/* Trust Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs font-semibold text-slate-400">
          <span className="flex items-center gap-1.5"><Lock className="w-3.5 h-3.5 text-blue-400" /> Mutual NDA Before Call</span>
          <span className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> ISO / SOC2 Compliant</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Senior Engineers Only</span>
        </div>

      </div>
    </section>
  );
}
