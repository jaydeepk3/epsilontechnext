import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  Calendar,
  FileText,
  ArrowRight,
  ShieldCheck,
  Building2,
  Clock,
  BookOpen,
  Stethoscope,
  TrendingUp,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Your Free OPD Growth Guide is Ready | Online OPD Growth System',
  description:
    'Access your free OPD Growth Guide and book a 1-on-1 strategy call with our healthcare growth specialist.',
  robots: {
    index: false,
    follow: false,
  },
};

const PDF_URL =
  'https://docs.google.com/document/d/1nflXCYHzzuVMvVkyVLMEOuLZqPXqXhJRN0Z2Z3X0HnA/edit?usp=sharing';

const guidePoints = [
  'How to get 30–80 new OPD patients every month using Meta Ads',
  'Why most doctor websites fail to convert visitors into patients',
  'The exact WhatsApp follow-up system that books appointments on autopilot',
  'Real case studies from clinics already using this system',
];

export default function ThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-[#0F6FFF] selection:text-white pt-20 pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#0F6FFF]/15 to-[#00C2A8]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0F6FFF]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10 space-y-6">

        {/* Empathy Header */}
        <div className="text-center space-y-4 pb-2">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/30 text-teal-400 text-sm font-semibold">
            <Stethoscope className="w-4 h-4" />
            <span>We understand your challenge, Doctor</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Growing a clinic isn&apos;t easy.<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F6FFF] to-[#00C2A8]">
              We&apos;ve prepared resources to help.
            </span>
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We know you&apos;re putting in long hours and still not seeing the patient growth you deserve.
            That&apos;s exactly why we created the <span className="text-white font-semibold">OPD Growth Guide</span> — so you can start seeing results even before our call.
          </p>
        </div>

        {/* Guide Preview Card */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-900/80 border border-teal-500/20 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="flex items-start gap-4 mb-6">
            <div className="w-12 h-12 rounded-2xl bg-teal-500/10 border border-teal-500/20 flex items-center justify-center shrink-0">
              <BookOpen className="w-6 h-6 text-teal-400" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-teal-400 mb-1">Your Free Resource</p>
              <h2 className="text-xl sm:text-2xl font-black text-white leading-snug">
                The Complete OPD Growth System Guide
              </h2>
              <p className="text-slate-400 text-sm mt-1">A practical blueprint built specifically for independent doctors &amp; clinics in India</p>
            </div>
          </div>

          <ul className="space-y-3 mb-8">
            {guidePoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-sm sm:text-base">
                <CheckCircle2 className="w-5 h-5 text-teal-400 shrink-0 mt-0.5" />
                <span>{point}</span>
              </li>
            ))}
          </ul>

          <a
            href={PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-[#00C2A8] to-teal-500 hover:from-teal-500 hover:to-[#00C2A8] text-white font-black text-base shadow-xl shadow-teal-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <FileText className="w-5 h-5" />
            <span>Open My Free OPD Growth Guide</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Strategy Call Card */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-900/80 border border-[#0F6FFF]/20 rounded-3xl p-6 sm:p-10 shadow-2xl backdrop-blur-xl">
          <div className="flex items-start gap-4 mb-5">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0">
              <Calendar className="w-6 h-6 text-[#0F6FFF]" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#0F6FFF] mb-1">Next Step</p>
              <h2 className="text-xl sm:text-2xl font-black text-white leading-snug">
                Book Your Free 1-on-1 Strategy Call
              </h2>
              <p className="text-slate-400 text-sm mt-1">20 minutes · No sales pressure · 100% focused on your clinic&apos;s growth</p>
            </div>
          </div>

          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-4 mb-6 space-y-2">
            <p className="text-sm font-semibold text-white">On this call, we will:</p>
            <ul className="space-y-1.5 text-sm text-slate-400">
              <li className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-[#0F6FFF] shrink-0" /> Audit your current patient acquisition process</li>
              <li className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-[#0F6FFF] shrink-0" /> Identify the biggest gaps costing you patients right now</li>
              <li className="flex items-center gap-2"><TrendingUp className="w-4 h-4 text-[#0F6FFF] shrink-0" /> Give you a clear, actionable growth plan — for free</li>
            </ul>
          </div>

          <a
            href="https://calendly.com/jaydeepkataria/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl bg-[#0F6FFF] hover:bg-blue-600 text-white font-black text-base shadow-xl shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Calendar className="w-5 h-5" />
            <span>Pick a Time That Works for You</span>
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>

        {/* Trust Strip */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl px-6 py-5 grid grid-cols-3 gap-3 text-center">
          <div className="space-y-1.5">
            <ShieldCheck className="w-5 h-5 text-blue-400 mx-auto" />
            <p className="text-xs font-semibold text-slate-300">100% Medical Privacy</p>
          </div>
          <div className="space-y-1.5">
            <Building2 className="w-5 h-5 text-blue-400 mx-auto" />
            <p className="text-xs font-semibold text-slate-300">Done-For-You System</p>
          </div>
          <div className="space-y-1.5">
            <Clock className="w-5 h-5 text-blue-400 mx-auto" />
            <p className="text-xs font-semibold text-slate-300">Live in 15 Days</p>
          </div>
        </div>

        {/* Back link */}
        <div className="text-center pt-2">
          <Link
            href="/online-opd-growth-system"
            className="text-xs text-slate-500 hover:text-slate-300 transition-colors underline underline-offset-4"
          >
            ← Back to Online OPD Growth System
          </Link>
        </div>

      </div>
    </main>
  );
}
