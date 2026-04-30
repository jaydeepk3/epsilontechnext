import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, ArrowRight, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

/**
 * Update this manually each month to reflect the next available slot.
 */
const NEXT_INTAKE = "June 2026";

interface AvailabilityBannerProps {
  variant?: "full" | "compact" | "inline";
  ctaHref?: string;
}

export const AvailabilityBanner: React.FC<AvailabilityBannerProps> = ({ 
  variant = "full",
  ctaHref = "/#services" 
}) => {
  // Option C: Recommended for credibility and direct logic
  const subheadline = "Our team works on a small number of projects at once. If your timeline is fixed, applying early guarantees your start date.";

  if (variant === "inline") {
    return (
      <div className="flex flex-col items-center justify-center text-center py-4 px-6">
        <p className="text-slate-500 text-sm font-medium flex flex-wrap items-center justify-center gap-2">
          <span>Next project intake: <span className="text-slate-900 font-bold">{NEXT_INTAKE}</span></span>
          <span className="hidden sm:inline text-slate-300">·</span>
          <Link 
            href={ctaHref}
            className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1 transition-colors"
          >
            Apply now to hold your start date <ArrowRight size={14} />
          </Link>
        </p>
      </div>
    );
  }

  const isCompact = variant === "compact";

  return (
    <div className={`w-full ${isCompact ? 'max-w-4xl mx-auto' : ''} p-1`}>
      <div className={`
        relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm
        flex flex-col md:flex-row items-stretch
        ${isCompact ? 'p-6 gap-8' : 'p-8 md:p-12 gap-10'}
      `}>
        {/* Left Side: Project Board Snippet */}
        <div className="flex-1 flex flex-col justify-center">
          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 font-mono text-xs md:text-sm shadow-inner">
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-2 w-2">
                    <motion.span 
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                    ></motion.span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                  <span className="text-slate-500 uppercase tracking-wider">In Progress</span>
                </div>
                <span className="text-slate-400">FieldR v2.0 (USA)</span>
              </div>
              
              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <div className="flex items-center gap-3">
                  <div className="relative flex h-2 w-2">
                    <motion.span 
                      animate={{ scale: [1, 1.5, 1], opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                      className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"
                    ></motion.span>
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                  </div>
                  <span className="text-slate-500 uppercase tracking-wider">In Progress</span>
                </div>
                <span className="text-slate-400">Client Project (UAE)</span>
              </div>

              <div className="flex items-center justify-between border-t border-slate-100 pt-3">
                <div className="flex items-center gap-3">
                  <span className="h-2 w-2 rounded-full bg-slate-300"></span>
                  <span className="text-slate-500 uppercase tracking-wider">Starting Soon</span>
                </div>
                <span className="text-blue-600 font-bold animate-pulse">[Your project?]</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side: Copy & Action */}
        <div className="flex-[1.2] flex flex-col justify-center text-center md:text-left">
          <div className="inline-flex items-center gap-2 text-blue-600 font-bold text-xs uppercase tracking-widest mb-3 justify-center md:justify-start">
            <Calendar size={14} />
            Availability Update
          </div>
          <h3 className={`font-bold text-slate-900 leading-tight mb-4 ${isCompact ? 'text-xl md:text-2xl' : 'text-2xl md:text-4xl'}`}>
            Our next project start is <span className="text-blue-600">{NEXT_INTAKE}</span>
          </h3>
          <p className="text-slate-500 text-sm md:text-base leading-relaxed mb-8">
            {subheadline}
          </p>
          
          <div className="flex flex-col gap-4 items-center md:items-start">
            <Link 
              href={ctaHref}
              className={`
                inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white font-bold rounded-2xl transition-all hover:-translate-y-0.5 shadow-lg
                ${isCompact ? 'px-6 py-3 text-sm' : 'px-8 py-4 text-base'}
              `}
            >
              Apply for the Next Available Slot <ArrowRight size={isCompact ? 16 : 18} />
            </Link>
            <p className="text-slate-400 text-xs flex items-center gap-1.5">
              <CheckCircle2 size={12} className="text-emerald-500" />
              We&apos;ll confirm availability on your free discovery call. No commitment required.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
