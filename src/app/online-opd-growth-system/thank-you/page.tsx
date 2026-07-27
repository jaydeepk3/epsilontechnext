import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  CheckCircle2,
  Calendar,
  FileText,
  MessageSquare,
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Thank You | Online OPD Growth System for Doctors',
  description:
    'Thank you for submitting your details for the Online OPD Growth System. Book your consultation time slot or access the growth guide.',
  robots: {
    index: false,
    follow: false,
  },
};

const PDF_URL =
  'https://docs.google.com/document/d/1nflXCYHzzuVMvVkyVLMEOuLZqPXqXhJRN0Z2Z3X0HnA/edit?usp=sharing';

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-[#0F6FFF] selection:text-white pt-24 pb-20 relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#0F6FFF]/20 to-[#00C2A8]/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Main Card */}
        <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-12 shadow-2xl backdrop-blur-xl text-center space-y-8">
          
          {/* Header Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-sm font-semibold">
            <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            <span>Details Received Successfully!</span>
          </div>

          {/* Title */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
              Thank You for Connecting With Us
            </h1>
            <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto">
              We have received your details for <span className="text-white font-semibold">The Online OPD Growth System</span>. Our doctor specialist team will review your clinic information and contact you shortly.
            </p>
          </div>

          {/* Action Boxes */}
          <div className="grid sm:grid-cols-2 gap-4 text-left pt-4">
            {/* Box 1: Calendly Booking */}
            <div className="bg-slate-800/60 border border-slate-700/60 hover:border-[#0F6FFF]/60 transition-all rounded-2xl p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[#0F6FFF] flex items-center justify-center">
                  <Calendar className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Book 1-on-1 Strategy Call</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Choose a convenient 20-minute time slot with our Lead Healthcare Growth Strategist for your custom OPD Audit.
                </p>
              </div>
              <a
                href="https://calendly.com/jaydeepkataria/30min"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-[#0F6FFF] hover:bg-blue-600 text-white font-bold text-sm shadow-lg shadow-blue-500/20 transition-all"
              >
                <span>Select Calendar Time Slot</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

            {/* Box 2: Direct OPD PDF Guide */}
            <div className="bg-slate-800/60 border border-slate-700/60 hover:border-[#00C2A8]/60 transition-all rounded-2xl p-6 flex flex-col justify-between space-y-4">
              <div className="space-y-3">
                <div className="w-12 h-12 rounded-xl bg-teal-500/10 border border-teal-500/20 text-[#00C2A8] flex items-center justify-center">
                  <FileText className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-bold text-white">Download Doctor Growth PDF</h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Access the complete Online OPD Growth System PDF blueprint guide right away.
                </p>
              </div>
              <a
                href={PDF_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-5 rounded-xl bg-[#00C2A8] hover:bg-teal-600 text-white font-bold text-sm shadow-lg shadow-teal-500/20 transition-all"
              >
                <span>Open OPD Growth Guide</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Fast Track / Direct Contact Box */}
          <div className="bg-gradient-to-r from-blue-950/40 to-slate-900 border border-blue-900/40 rounded-2xl p-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 text-emerald-400 flex items-center justify-center shrink-0">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div>
                <h4 className="text-base font-bold text-white">Need Urgent OPD Assistance?</h4>
                <p className="text-xs text-slate-400">
                  Connect directly with our Healthcare Growth Specialist via WhatsApp.
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/919904222000?text=Hi%20Epsilon%20Team,%20I%20just%20submitted%20my%20details%20on%20The%20Online%20OPD%20Growth%20System."
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-sm rounded-xl transition-all whitespace-nowrap text-center"
            >
              Chat on WhatsApp Now
            </a>
          </div>

          {/* Value Badges */}
          <div className="pt-4 border-t border-slate-800 grid grid-cols-3 gap-2 sm:gap-4 text-center">
            <div className="space-y-1">
              <ShieldCheck className="w-5 h-5 text-blue-400 mx-auto" />
              <p className="text-xs font-semibold text-slate-300">100% Medical Privacy</p>
            </div>
            <div className="space-y-1">
              <Building2 className="w-5 h-5 text-blue-400 mx-auto" />
              <p className="text-xs font-semibold text-slate-300">Done-For-You Tech</p>
            </div>
            <div className="space-y-1">
              <Clock className="w-5 h-5 text-blue-400 mx-auto" />
              <p className="text-xs font-semibold text-slate-300">Fast 15-Day Delivery</p>
            </div>
          </div>

          {/* Return Home Link */}
          <div className="pt-2">
            <Link
              href="/online-opd-growth-system"
              className="text-xs text-slate-400 hover:text-white transition-colors underline underline-offset-4"
            >
              ← Back to Online OPD Growth System Landing Page
            </Link>
          </div>

        </div>
      </div>
    </main>
  );
}
