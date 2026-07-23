'use client';

import { motion } from 'framer-motion';
import { AlertTriangle, CheckCircle2, XCircle, Zap } from 'lucide-react';

export function PainPointsSection() {
  const comparisons = [
    {
      bad: "Outsourced to junior offshore freelancers with minimal oversight.",
      good: "Dedicated squad of senior engineers (5+ yrs average experience)."
    },
    {
      bad: "Constant missed deadlines, scope creep & unexpected billing surprises.",
      good: "Guaranteed milestone delivery, fixed weekly pricing & zero surprise fees."
    },
    {
      bad: "Messy spaghetti code, high technical debt & security vulnerabilities.",
      good: "Enterprise-grade architecture, automated tests & 100% IP ownership."
    },
    {
      bad: "Radio silence for weeks followed by broken demo releases.",
      good: "Daily async Slack updates, Loom screen walkthroughs & live staging links."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 font-bold text-xs uppercase tracking-wider mb-4"
          >
            <AlertTriangle className="w-4 h-4" /> Why 80% of Software Agency Projects Fail
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Why Businesses Fail Before Hiring Epsilon Technext
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed"
          >
            Most software buyers waste $20k+ and 6 months with traditional agencies before switching to our risk-mitigated engineering framework.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Column 1: The Traditional Agency Pain */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-rose-950/20 border border-rose-900/40 rounded-3xl p-6 md:p-8"
          >
            <div className="flex items-center gap-3 pb-6 border-b border-rose-900/30 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-500/20 text-rose-400 flex items-center justify-center font-bold">
                <XCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-rose-200">Traditional Dev Agencies</h3>
                <p className="text-xs text-rose-400 font-medium">High risk, low accountability</p>
              </div>
            </div>

            <ul className="space-y-4">
              {comparisons.map((item) => (
                <li key={item.bad} className="flex items-start gap-3 text-xs md:text-sm text-slate-300">
                  <XCircle className="w-4 h-4 text-rose-500 shrink-0 mt-0.5" />
                  <span>{item.bad}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Column 2: The Epsilon Solution */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-gradient-to-b from-blue-950/40 to-slate-900 border border-blue-500/40 rounded-3xl p-6 md:p-8 shadow-2xl relative"
          >
            <div className="absolute -top-3 right-6 bg-blue-600 text-white text-[10px] uppercase tracking-wider font-extrabold px-3 py-1 rounded-full shadow-lg flex items-center gap-1">
              <Zap className="w-3 h-3 fill-white" /> The Epsilon Way
            </div>

            <div className="flex items-center gap-3 pb-6 border-b border-blue-900/30 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg font-extrabold text-white">Epsilon Technext Squads</h3>
                <p className="text-xs text-blue-300 font-medium">High velocity, guaranteed execution</p>
              </div>
            </div>

            <ul className="space-y-4">
              {comparisons.map((item) => (
                <li key={item.good} className="flex items-start gap-3 text-xs md:text-sm text-white font-medium">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <span>{item.good}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
