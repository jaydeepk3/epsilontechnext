'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calendar, MessageSquare, ShieldCheck, ArrowRight } from 'lucide-react';

interface StickyConversionBarProps {
  onOpenAuditModal: () => void;
}

export function StickyConversionBar({ onOpenAuditModal }: StickyConversionBarProps) {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show bar after scrolling down 400px
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = () => {
    const el = document.getElementById('booking') || document.getElementById('final-cta');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: 'spring', stiffness: 260, damping: 25 }}
          className="fixed bottom-4 left-4 right-4 md:left-1/2 md:-translate-x-1/2 md:w-auto z-40 max-w-4xl"
        >
          <div className="bg-slate-900/90 backdrop-blur-xl border border-slate-700/60 shadow-[0_20px_50px_rgba(0,0,0,0.4)] rounded-2xl p-3 md:px-6 md:py-3.5 flex items-center justify-between gap-4 text-white">
            <div className="hidden lg:flex items-center gap-3">
              <div className="w-9 h-9 rounded-full bg-blue-500/20 border border-blue-400/30 flex items-center justify-center shrink-0">
                <ShieldCheck className="w-5 h-5 text-blue-400" />
              </div>
              <div className="text-left">
                <p className="text-xs font-semibold text-slate-300">Ready to scale your software?</p>
                <p className="text-sm font-bold text-white flex items-center gap-1.5">
                  Guaranteed Senior Devs & ISO/NDA Safe
                </p>
              </div>
            </div>

            <div className="flex items-center gap-2.5 w-full md:w-auto justify-between md:justify-end">
              <button
                onClick={onOpenAuditModal}
                className="hidden sm:flex items-center gap-1.5 text-xs font-semibold text-blue-300 hover:text-white px-3 py-2 rounded-xl hover:bg-white/10 transition-colors"
              >
                <span>Free Audit</span>
              </button>

              <a
                href="https://wa.me/919904269904?text=Hi%20Epsilon%20Team%2C%20I%20would%20like%20to%20discuss%20a%20software%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-3.5 py-2.5 rounded-xl bg-emerald-600/90 hover:bg-emerald-500 text-white font-bold text-xs md:text-sm transition-all shadow-md active:scale-95 shrink-0"
              >
                <MessageSquare className="w-4 h-4 fill-white" />
                <span className="hidden xs:inline">WhatsApp Us</span>
                <span className="xs:hidden">WhatsApp</span>
              </a>

              <button
                onClick={scrollToBooking}
                className="flex-1 md:flex-initial flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs md:text-sm transition-all shadow-md hover:shadow-blue-500/30 active:scale-95 shrink-0"
              >
                <Calendar className="w-4 h-4" />
                <span>Book Discovery Call</span>
                <ArrowRight className="w-3.5 h-3.5 hidden sm:inline" />
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
