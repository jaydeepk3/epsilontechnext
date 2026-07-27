'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { UserCheck, ShieldAlert, Award, Star, CheckCircle, Video, Play } from 'lucide-react';

export function FounderSection() {
  const [isVideoOpen, setIsVideoOpen] = useState(false);

  return (
    <section className="py-20 md:py-28 bg-slate-50 text-slate-900 relative overflow-hidden border-b border-slate-200">
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
            <div className="relative rounded-3xl overflow-hidden bg-gradient-to-b from-blue-100 to-slate-100 border border-slate-200 p-2 shadow-xl group">
              <div 
                className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-slate-900 cursor-pointer"
                onClick={() => setIsVideoOpen(true)}
              >
                {/* Real Founder Portrait Photo */}
                <img
                  src="/images/jayde.webp"
                  alt="Jaydeep Kataria - Founder & Principal Technical Strategist"
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-slate-950/30 group-hover:bg-slate-950/20 transition-colors flex items-center justify-center z-10">
                  <div className="w-16 h-16 rounded-full bg-blue-600/90 group-hover:bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-600/50 group-hover:scale-110 transition-all duration-300 border border-white/20">
                    <Play className="w-7 h-7 fill-white ml-1" />
                  </div>
                </div>
                
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent z-10" />
                
                {/* Founder details overlay */}
                <div className="w-full h-full bg-transparent flex flex-col justify-end p-6 absolute inset-0 z-20">
                  <div className="mb-3 inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/30 backdrop-blur-md border border-blue-400/40 text-blue-200 text-xs font-bold w-fit shadow-md">
                    <UserCheck className="w-3.5 h-3.5" /> Founder & Engineering Director
                  </div>
                  <h3 className="text-2xl font-extrabold text-white">Jaydeep Kataria</h3>
                  <p className="text-sm text-blue-200 font-medium">Founder & Principal Technical Strategist</p>
                  
                  <div className="mt-4 pt-4 border-t border-white/20 flex items-center gap-3 text-xs text-slate-200">
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
            <div className="absolute -bottom-6 -right-4 bg-white border border-slate-200 rounded-2xl p-4 shadow-xl flex items-center gap-3 max-w-xs z-30">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-200 flex items-center justify-center shrink-0 text-emerald-600 font-bold">
                <Award className="w-5 h-5" />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold text-slate-900">Direct Personal Guarantee</p>
                <p className="text-[11px] text-slate-500 leading-tight">Every project is directly overseen by senior architecture leads.</p>
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
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 font-bold text-xs uppercase tracking-wider mb-4 w-fit">
              <UserCheck className="w-4 h-4" /> Message From The Leadership
            </div>

            <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
              &quot;Most agencies sell developers. We sell guaranteed business outcomes.&quot;
            </h2>

            <div className="mt-6 space-y-4 text-slate-600 text-base md:text-lg leading-relaxed">
              <p>
                When you are investing <strong className="text-slate-900">$10,000 to $100,000</strong> in custom software, the biggest risk isn&apos;t finding someone who knows how to write code. The real risk is hiring an agency that disappears, misses critical deadlines, delivers buggy code, or hands you off to junior interns.
              </p>
              <p>
                At Epsilon Technext, we eliminated traditional agency bloat. You work directly with a high-velocity, senior engineering team dedicated to your business success, zero micromanagement required.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Daily Async Updates</h4>
                  <p className="text-xs text-slate-500">Complete transparency with Loom videos & Slack updates.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Senior Engineers Only</h4>
                  <p className="text-xs text-slate-500">No junior developers learning on your budget.</p>
                </div>
              </div>
            </div>

            <div className="mt-8 flex flex-wrap items-center gap-4">
              <button
                onClick={() => {
                  const booking = document.getElementById('booking') || document.getElementById('final-cta');
                  booking?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="px-6 py-3.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm rounded-xl transition-all shadow-lg shadow-blue-600/30 active:scale-95"
              >
                Book a Strategy Call With Founder
              </button>

              <button
                onClick={() => setIsVideoOpen(true)}
                className="px-6 py-3.5 bg-white hover:bg-slate-100 border border-slate-300 text-slate-800 font-bold text-sm rounded-xl transition-all shadow-sm flex items-center gap-2 active:scale-95"
              >
                <Video className="w-4 h-4 text-blue-600 fill-blue-600/20" /> Watch Video Intro
              </button>
            </div>

            {/* Video Modal Overlay */}
            {isVideoOpen && (
              <div 
                className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-in fade-in duration-200"
                onClick={() => setIsVideoOpen(false)}
              >
                <div 
                  className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden shadow-2xl border border-slate-800 aspect-video"
                  onClick={(e) => e.stopPropagation()}
                >
                  <button
                    onClick={() => setIsVideoOpen(false)}
                    className="absolute top-3 right-3 z-10 p-2 bg-slate-900/80 hover:bg-slate-800 text-white rounded-full transition-colors border border-white/10"
                    aria-label="Close modal"
                  >
                    ✕
                  </button>
                  <iframe
                    className="w-full h-full"
                    src="https://www.youtube.com/embed/QXlDya4Iu30?autoplay=1"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </motion.div>

        </div>
      </div>
    </section>
  );
}
