'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { RefreshCw, Zap, Shield, Sparkles, CheckCircle2, AlertCircle } from 'lucide-react';

export function BeforeAfterSection() {
  const [activeTab, setActiveTab] = useState<'speed' | 'ux' | 'architecture'>('speed');

  const scenarios = {
    speed: {
      title: "Page Speed & Conversion Performance",
      before: {
        score: "28 / 100",
        label: "Slow Legacy App",
        loadTime: "4.8 seconds LCP",
        bounceRate: "68% Bounce Rate",
        conversion: "1.2% Sales Conversion",
        status: "Losing 60%+ of Paid Ad Visitors"
      },
      after: {
        score: "98 / 100",
        label: "Epsilon Next.js App",
        loadTime: "0.5 seconds LCP",
        bounceRate: "24% Bounce Rate",
        conversion: "4.6% Sales Conversion",
        status: "Sub-Second Speed & 4x Conversions"
      }
    },
    ux: {
      title: "User Experience & Checkout Friction",
      before: {
        score: "High Friction",
        label: "Confusing Desktop & Mobile Layout",
        loadTime: "7-step Checkout Flow",
        bounceRate: "Complex Nav & Hard-to-find CTAs",
        conversion: "High Mobile Cart Abandonment",
        status: "Frustrated Visitors Leave for Competitors"
      },
      after: {
        score: "Seamless UX",
        label: "Optimized High-Converting UI",
        loadTime: "1-Click Accelerated Checkout",
        bounceRate: "Sticky Conversions & Dynamic Micro-Interactions",
        conversion: "+180% Mobile Conversion",
        status: "Delightful UX That Drives Immediate Purchases"
      }
    },
    architecture: {
      title: "Code Quality & Scaling Security",
      before: {
        score: "High Technical Debt",
        label: "Monolithic Spaghetti Code",
        loadTime: "Crashes Under Traffic Spikes",
        bounceRate: "Frequent Uncaught Bugs",
        conversion: "Zero Automated Test Coverage",
        status: "Vulnerable to Security & Downtime Risks"
      },
      after: {
        score: "Enterprise Architecture",
        label: "Modular TypeScript & Microservices",
        loadTime: "99.99% Guaranteed Uptime",
        bounceRate: "SOC2 & HIPAA Compliant",
        conversion: "100% IP Transfer & Auto-Testing",
        status: "Scalable Foundation Built for $100M+ Scale"
      }
    }
  };

  const current = scenarios[activeTab];

  return (
    <section className="py-20 md:py-28 bg-slate-950 text-white relative border-b border-slate-800 overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-bold text-xs uppercase tracking-wider mb-4"
          >
            <RefreshCw className="w-4 h-4 animate-spin-slow" /> Transformation Comparison
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            The Epsilon Technical Transformation
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed"
          >
            See how upgrading your legacy web app or software stack directly impacts speed, user conversion, and system security.
          </motion.p>

          {/* Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'speed', label: 'Speed & Conversion' },
              { id: 'ux', label: 'UI & User Experience' },
              { id: 'architecture', label: 'Security & Architecture' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Comparison Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
          >
            {/* BEFORE CARD */}
            <div className="bg-slate-900/60 border border-rose-900/40 rounded-3xl p-6 md:p-8 relative">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-bold uppercase tracking-wider mb-6">
                <AlertCircle className="w-3.5 h-3.5" /> BEFORE (Typical Legacy Stack)
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-rose-400 block mb-1">
                  {current.before.score}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {current.before.label}
                </h3>
              </div>

              <div className="space-y-3 border-t border-slate-800/80 pt-6 text-sm text-slate-300">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>{current.before.loadTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>{current.before.bounceRate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-rose-500" />
                  <span>{current.before.conversion}</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-rose-950/30 border border-rose-900/30 rounded-xl text-xs text-rose-300 font-semibold">
                ⚠️ Outcome: {current.before.status}
              </div>
            </div>

            {/* AFTER CARD */}
            <div className="bg-gradient-to-b from-blue-950/50 to-slate-900 border border-blue-500/50 rounded-3xl p-6 md:p-8 relative shadow-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 text-xs font-bold uppercase tracking-wider mb-6">
                <Sparkles className="w-3.5 h-3.5" /> AFTER (Epsilon Engineering)
              </div>

              <div className="mb-6">
                <span className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 block mb-1">
                  {current.after.score}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {current.after.label}
                </h3>
              </div>

              <div className="space-y-3 border-t border-blue-900/40 pt-6 text-sm text-white font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{current.after.loadTime}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{current.after.bounceRate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>{current.after.conversion}</span>
                </div>
              </div>

              <div className="mt-8 p-4 bg-blue-900/40 border border-blue-500/30 rounded-xl text-xs text-blue-200 font-bold">
                🚀 Outcome: {current.after.status}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
