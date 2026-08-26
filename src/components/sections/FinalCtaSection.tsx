'use client';

import { motion } from 'framer-motion';
import { Calendar, MessageSquare, ShieldCheck, Clock, CheckCircle2, ArrowRight, Zap } from 'lucide-react';

export function FinalCtaSection() {
  return (
    <section id="final-cta" className="py-20 md:py-32 bg-gradient-to-b from-slate-900 via-blue-950 to-slate-950 text-white relative overflow-hidden">
      {/* Background glow circle */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-blue-600/15 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-blue-500/40 rounded-3xl p-8 md:p-14 shadow-2xl backdrop-blur-xl text-center">

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-bold text-xs uppercase tracking-wider mb-6"
          >
            <Zap className="w-4 h-4 fill-emerald-400" /> Limited Engineering Capacity — Q3/Q4 Slots Open
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight"
          >
            Ready to Build High-Performance Tech &amp; Scale Customer Growth?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-base md:text-xl text-slate-300 max-w-2xl mx-auto leading-relaxed"
          >
            Book a 15-minute strategy call directly with our team. Whether you need custom software development or data-driven Meta ads &amp; social marketing, we deliver transparent execution and fixed proposals.
          </motion.p>

          {/* Action CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <button
              onClick={() => {
                const booking = document.getElementById('booking');
                if (booking) {
                  booking.scrollIntoView({ behavior: 'smooth' });
                } else {
                  window.location.href = '/contacts/';
                }
              }}
              className="w-full sm:w-auto px-8 py-4 bg-blue-600 hover:bg-blue-500 font-extrabold text-base text-white rounded-2xl transition-all shadow-xl shadow-blue-600/30 flex items-center justify-center gap-2 active:scale-95"
            >
              <Calendar className="w-5 h-5" />
              <span>Book 15-Min Strategy Call</span>
              <ArrowRight className="w-5 h-5" />
            </button>

            <a
              href="https://wa.me/918160881461?text=Hi%20Epsilon%20Team%2C%20I%20want%20to%20discuss%20a%20software%20development%20project."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-emerald-600 hover:bg-emerald-500 font-extrabold text-base text-white rounded-2xl transition-all shadow-xl shadow-emerald-600/20 flex items-center justify-center gap-2 active:scale-95"
            >
              <MessageSquare className="w-5 h-5 fill-white" />
              <span>WhatsApp Direct Fastlane</span>
            </a>
          </motion.div>

          {/* Micro trust badges */}
          <div className="mt-10 pt-8 border-t border-slate-800 flex flex-wrap items-center justify-center gap-6 text-xs md:text-sm text-slate-400 font-semibold">
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-blue-400" /> Mutual NDA Included
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-emerald-400" /> Proposal Delivered in 24 Hours
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-amber-400" /> 100% IP Transfer Guarantee
            </span>
          </div>

        </div>
      </div>
    </section>
  );
}
