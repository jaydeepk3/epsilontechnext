import React from 'react';
import Link from 'next/link';
import { Metadata } from 'next';
import {
  CheckCircle2,
  Download,
  ArrowRight,
  ShieldCheck,
  MessageSquare,
  BookOpen,
  Sparkles,
  Brain,
  Clock,
  Star,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'Your AI Growth Kit is Ready | Epsilon Technology',
  description:
    'Thank you for your purchase! Your AI Growth Kit for Doctors is ready to download. Access your 120+ page AI book, 100+ prompts, and templates.',
  robots: {
    index: false,
    follow: false,
  },
};

const included = [
  'How to Use AI to Grow Your Medical Practice (Full Book)',
  '7 Chapters — Future of Healthcare Marketing to AI Growth System',
  'AI Prompts for Patient Education Content',
  'Gemini Prompt Library for Doctors',
  'Claude Strategy Templates',
  'Google Flow Video Scripts Guide',
  'Canva AI Design Guide for Clinics',
  'Google Business Profile AI Templates',
  'WhatsApp Message Templates',
  '30-Day AI Marketing Plan',
  'Lifetime Access',
];

const AI_KIT_PDF_URL =
  process.env.AI_KIT_PDF_URL || 'https://drive.google.com/REPLACE_WITH_REAL_PDF_LINK';

export default function AiKitThankYouPage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-[#0F6FFF] selection:text-white pt-16 pb-20 relative overflow-hidden">
      {/* Background glows */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-gradient-to-b from-[#0F6FFF]/10 via-[#00C2A8]/8 to-transparent blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#00C2A8]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 relative z-10 space-y-8">

        {/* Success Header */}
        <div className="text-center space-y-5 pt-6">
          <div className="w-20 h-20 rounded-full bg-emerald-500/10 border-2 border-emerald-500/30 flex items-center justify-center mx-auto">
            <CheckCircle2 className="w-10 h-10 text-emerald-400" />
          </div>

          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-sm font-bold">
            <Star className="w-4 h-4 fill-amber-400" />
            <span>Founder&apos;s Launch — Payment Confirmed</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Your{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F6FFF] to-[#00C2A8]">
              AI Growth Kit
            </span>{' '}
            is Ready!
          </h1>

          <p className="text-slate-400 text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Congratulations on taking this step! A confirmation email with your download link has been sent to you. You can also download directly below.
          </p>
        </div>

        {/* Primary Download Card */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-900/80 border border-[#0F6FFF]/25 rounded-3xl p-7 sm:p-10 shadow-2xl">
          <div className="flex items-start gap-4 mb-7">
            <div className="w-12 h-12 rounded-2xl bg-[#0F6FFF]/10 border border-[#0F6FFF]/20 flex items-center justify-center shrink-0">
              <Brain className="w-6 h-6 text-[#0F6FFF]" />
            </div>
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-[#0F6FFF] mb-1">Your Purchase</p>
              <h2 className="text-xl sm:text-2xl font-black text-white leading-snug">
                AI Growth Kit for Doctors
              </h2>
              <p className="text-slate-400 text-sm mt-1">
                Paid ₹99 &nbsp;•&nbsp; Lifetime Access &nbsp;•&nbsp; Instant Download
              </p>
            </div>
          </div>

          {/* What's included */}
          <div className="bg-slate-800/50 border border-slate-700/50 rounded-2xl p-5 mb-7">
            <p className="text-sm font-bold text-white mb-4 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-[#00C2A8]" />
              Everything included in your kit:
            </p>
            <ul className="space-y-2.5">
              {included.map((item, i) => (
                <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Download Button */}
          <a
            href={AI_KIT_PDF_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-3 w-full py-5 px-6 rounded-2xl bg-gradient-to-r from-[#0F6FFF] to-[#00C2A8] hover:from-blue-500 hover:to-teal-400 text-white font-black text-lg shadow-2xl shadow-blue-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
          >
            <Download className="w-6 h-6" />
            <span>Download Your AI Growth Kit</span>
            <ArrowRight className="w-5 h-5" />
          </a>

          <p className="text-center text-xs text-slate-500 mt-3">
            Link also sent to your email &nbsp;•&nbsp; Lifetime access — no expiry
          </p>
        </div>

        {/* Next Steps Card */}
        <div className="bg-gradient-to-br from-slate-900 to-slate-900/80 border border-[#00C2A8]/20 rounded-3xl p-7 sm:p-10 shadow-2xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-[#00C2A8]/10 border border-[#00C2A8]/20 flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-[#00C2A8]" />
            </div>
            <h3 className="text-lg font-black text-white">Recommended Next Steps</h3>
          </div>
          <ol className="space-y-4">
            {[
              {
                step: '1',
                title: 'Start with the 30-Day AI Marketing Plan',
                desc: 'This is your roadmap. Begin here to understand the full system before diving into individual tools.',
              },
              {
                step: '2',
                title: 'Set up Google Gemini & Claude',
                desc: 'Use the Gemini Prompt Library and Claude Strategy Templates to start creating patient education content immediately.',
              },
              {
                step: '3',
                title: 'Update Your Google Business Profile with AI',
                desc: 'Follow the Google Business AI Templates to improve your local SEO and appear higher in local patient searches.',
              },
            ].map((item) => (
              <li key={item.step} className="flex gap-4">
                <div className="w-8 h-8 rounded-full bg-[#0F6FFF]/10 border border-[#0F6FFF]/20 flex items-center justify-center shrink-0 text-[#0F6FFF] font-black text-sm">
                  {item.step}
                </div>
                <div>
                  <p className="font-bold text-white text-sm">{item.title}</p>
                  <p className="text-slate-400 text-xs mt-0.5 leading-relaxed">{item.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Trust Strip */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl px-6 py-5 grid grid-cols-2 sm:grid-cols-4 gap-4 text-center">
          <div className="space-y-1.5">
            <ShieldCheck className="w-5 h-5 text-emerald-400 mx-auto" />
            <p className="text-xs font-semibold text-slate-300">Secure Payment</p>
          </div>
          <div className="space-y-1.5">
            <Clock className="w-5 h-5 text-blue-400 mx-auto" />
            <p className="text-xs font-semibold text-slate-300">Lifetime Access</p>
          </div>
          <div className="space-y-1.5">
            <Download className="w-5 h-5 text-[#00C2A8] mx-auto" />
            <p className="text-xs font-semibold text-slate-300">Instant PDF</p>
          </div>
          <div className="space-y-1.5">
            <MessageSquare className="w-5 h-5 text-amber-400 mx-auto" />
            <p className="text-xs font-semibold text-slate-300">WhatsApp Support</p>
          </div>
        </div>

        {/* WhatsApp Support */}
        <div className="text-center space-y-3">
          <p className="text-sm text-slate-400">
            Need help? Our team is available on WhatsApp.
          </p>
          <a
            href="https://wa.me/917359315576?text=Hi%20Epsilon%20Team,%20I%20purchased%20the%20AI%20Growth%20Kit%20and%20need%20help."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-[#00C2A8]/10 border border-[#00C2A8]/30 text-[#00C2A8] font-bold text-sm hover:bg-[#00C2A8]/20 transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            WhatsApp +91 73593 15576
          </a>
        </div>

        {/* Back Link */}
        <div className="text-center pt-2 pb-4">
          <Link
            href="/online-opd-growth-system"
            className="text-xs text-slate-600 hover:text-slate-400 transition-colors underline underline-offset-4"
          >
            ← Back to Online OPD Growth System
          </Link>
        </div>

      </div>
    </main>
  );
}
