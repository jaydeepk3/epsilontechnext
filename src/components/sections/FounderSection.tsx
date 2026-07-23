'use client';

import { motion } from 'framer-motion';
import { UserCheck, ShieldAlert, Award, Star, CheckCircle, Video } from 'lucide-react';

export function FounderSection() {
  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative overflow-hidden border-b border-slate-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Visual / Founder Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-blue-600/20 to-slate-800 border border-slate-700/60 p-2 shadow-2xl">
              <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-800">
                {/* Embedded Founder Video or Portrait Preview */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
                
                {/* Fallback stylized founder presentation */}
                <div className="w-full h-full bg-slate-800 flex flex-col justify-end p-6 relative z-20">
                  <div className="mb-4 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold w-fit">
                    <Video className="w-3.5 h-3.5" /> Founder & Engineering Director
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Jaydeep K.</h3>
                  <p className="text-sm text-blue-300 font-medium">Founder & Principal Technical Strategist</p>
                  
                  <div className="mt-4 pt-4 border-t border-slate-700/60 flex items-center gap-3 text-xs text-slate-300">
                    <div className="flex -space-x-1">
                      {[1, 2, 3, 4, 5].map((s) => (
                        <Star key={s} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                    <span>10+ Years Building Scale Systems</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Trust Badge */}
            <div className="absolute -bottom-6 -right-4 bg-slate-800 border border-slate-700 rounded-2xl p-4 shadow-xl flex items-center gap-3 max-w-xs z-30">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-400 font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-white">Direct Personal Guarantee</p>
                <p className="text-[11px] text-slate-400 leading-tight">Every project is directly overseen by senior architecture leads.</p>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Founder Copy */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7 flex flex-col justify-center"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-bold text-xs uppercase tracking-wider mb-4 w-fit">
              <UserCheck className="w-4 h-4" /> Message From The Leadership
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
              &quot;Most agencies sell developers. We sell guaranteed business outcomes.&quot;
            </h2>

            <div className="mt-6 space-y-4 text-slate-300 text-base md:text-lg leading-relaxed">
              <p>
                When you are investing <strong className="text-white">$10,000 to $100,000</strong> in custom software, the biggest risk isn&apos;t finding someone who knows how to write code. The real risk is hiring an agency that disappears, misses critical deadlines, delivers buggy code, or hands you off to junior interns.
              </p>
              <p>
                At Epsilon Technext, we eliminated traditional agency bloat. You work directly with a high-velocity, senior engineering team dedicated to your business success, zero micromanagement required.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-800">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Daily Async Updates</h4>
                  <p className="text-xs text-slate-400">Complete transparency with Loom videos & Slack updates.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-white">Senior Engineers Only</h4>
                  <p className="text-xs text-slate-400">No junior developers learning on your budget.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex items-center gap-4">
              <button
                onClick={() => {
                  const booking = document.getElementById('booking') || document.getElementById('final-cta');
                  booking?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/30 active:scale-95"
              >
                Book a Strategy Call With Founder
              </button>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
