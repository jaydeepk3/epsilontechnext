'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { trackMetaCapiEvent } from '@/lib/meta-capi';
import {
  Calendar,
  FileText,
  ArrowRight,
  ShieldCheck,
  Clock,
  BookOpen,
  Stethoscope,
  TrendingUp,
  CheckCircle2,
  Sparkles,
  Star,
  BadgeCheck,
  Brain,
  IndianRupee,
  Bot,
  Download,
  ChevronDown,
  Lock,
  Award,
  Video,
  Globe,
  Palette,
  CalendarCheck,
  Users,
  MessageSquare,
} from 'lucide-react';

declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    Razorpay: any;
  }
}

const PDF_URL =
  'https://docs.google.com/document/d/1nflXCYHzzuVMvVkyVLMEOuLZqPXqXhJRN0Z2Z3X0HnA/edit?usp=sharing';

const aiKitIncludes = [
  'How to Use AI to Grow Your Medical Practice (Full 50+ Page Book)',
  '150+ Copy-Paste AI Prompts (50 Gemini + 100 Bonus Prompts)',
  'Complete 9-Tool AI Stack (Gemini, Claude, Google Flow, Canva AI)',
  'Google Flow Video Script Prompts (Reels & Waiting-Room Loops)',
  'Canva AI Design System (Clinic Posters & Festival Creatives)',
  'The RGCAOTR Prompting Blueprint (Sounds like a doctor, not a robot)',
  '13 Claude Strategic Workflows (SWOT, Personas, 90-Day Plan)',
  'Google Business Profile & Review Automation Prompts',
  'WhatsApp Follow-up & Patient Communication Scripts',
  '30-Minute Weekly AI Content Batching System',
  'Medical Compliance, HIPAA & Privacy Safety Rules',
  'Lifetime Access + Free Future Updates',
];

const guidePoints = [
  'How to get 30–80 new OPD patients every month using Meta Ads',
  'Why most doctor websites fail to convert visitors into patients',
  'The exact WhatsApp follow-up system that books appointments on autopilot',
  'Real case studies from clinics already using this system',
];

const aiFaqs = [
  {
    q: 'Who is this book for?',
    a: 'The AI Growth Kit is designed for practicing doctors, surgeons, clinic owners, and hospital administrators in India who want to use AI tools to grow their practice. No technical background needed.',
  },
  {
    q: 'Do I need AI knowledge to use this?',
    a: 'Not at all. The kit is 100% beginner-friendly. Every guide and template comes with step-by-step instructions so you can start using AI tools even if you have never used them before.',
  },
  {
    q: 'How do I receive the PDF after payment?',
    a: 'Immediately after your payment is successful, you will be redirected to a download page. The PDF link will also be sent directly to your email address.',
  },
  {
    q: 'Can hospitals and multi-doctor clinics also use this?',
    a: 'Yes. The strategies, templates, and prompts work equally well for individual doctors, group practices, and multispecialty hospitals.',
  },
  {
    q: 'Will I receive future updates?',
    a: 'Yes. Your purchase includes lifetime access. Whenever the AI Growth Kit is updated with new tools, prompts, or strategies, you will receive the updated version at no extra cost.',
  },
];

export default function ThankYouClient() {
  const [aiKitForm, setAiKitForm] = useState({
    name: '',
    email: '',
    mobile: '',
    clinicName: '',
    specialty: '',
  });
  const [aiKitSubmitting, setAiKitSubmitting] = useState(false);
  const [aiKitError, setAiKitError] = useState('');
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const handleAiKitPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    setAiKitError('');
    setAiKitSubmitting(true);

    try {
      if (!window.Razorpay) {
        await new Promise<void>((resolve, reject) => {
          const script = document.createElement('script');
          script.src = 'https://checkout.razorpay.com/v1/checkout.js';
          script.onload = () => resolve();
          script.onerror = () => reject(new Error('Failed to load Razorpay'));
          document.head.appendChild(script);
        });
      }

      const orderRes = await fetch('/api/razorpay-order', { method: 'POST' });
      if (!orderRes.ok) throw new Error('Could not create payment order.');
      const { orderId, amount, currency, keyId } = await orderRes.json();

      const rzp = new window.Razorpay({
        key: keyId,
        amount,
        currency,
        order_id: orderId,
        name: 'Epsilon Technology',
        description: 'AI Growth Kit for Doctors',
        image: '/logo.webp',
        prefill: {
          name: aiKitForm.name,
          email: aiKitForm.email,
          contact: aiKitForm.mobile,
        },
        notes: {
          clinic: aiKitForm.clinicName,
          specialty: aiKitForm.specialty,
        },
        theme: { color: '#0F6FFF' },
        handler: async (response: {
          razorpay_order_id: string;
          razorpay_payment_id: string;
          razorpay_signature: string;
        }) => {
          // Track Paid Purchase Event for Meta Ads & Google Analytics
          try {
            trackMetaCapiEvent({
              eventName: 'Purchase',
              user: {
                phone: aiKitForm.mobile,
                firstName: aiKitForm.name,
                email: aiKitForm.email,
              },
              customData: {
                content_name: 'AI Growth Kit for Doctors (₹99)',
                value: 99,
                currency: 'INR',
                transaction_id: response.razorpay_payment_id || `pay_${Date.now()}`,
                clinic_name: aiKitForm.clinicName,
                specialty: aiKitForm.specialty,
              },
            });
          } catch (trackErr) {
            console.error('Tracking Purchase event error:', trackErr);
          }

          try {
            const verifyRes = await fetch('/api/ai-kit-payment-success', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                ...response,
                name: aiKitForm.name,
                email: aiKitForm.email,
                mobile: aiKitForm.mobile,
                clinicName: aiKitForm.clinicName,
                specialty: aiKitForm.specialty,
              }),
            });

            if (verifyRes.ok) {
              window.location.href = '/online-opd-growth-system/ai-kit/thank-you';
            } else {
              setAiKitError('Payment received but verification failed. Please contact support on WhatsApp.');
              setAiKitSubmitting(false);
            }
          } catch {
            setAiKitError('Payment received but an error occurred. Please WhatsApp us.');
            setAiKitSubmitting(false);
          }
        },
        modal: {
          ondismiss: () => {
            setAiKitSubmitting(false);
          },
        },
      });

      rzp.open();
    } catch (err) {
      setAiKitError((err as Error).message || 'Something went wrong. Please try again.');
      setAiKitSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 font-sans selection:bg-[#0F6FFF] selection:text-white pb-20 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#0F6FFF]/15 to-[#00C2A8]/15 blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#0F6FFF]/5 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">

        {/* ── Free Guide Confirmation ── */}
        <div className="pt-16 pb-10 space-y-6">
          <div className="text-center space-y-4">
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

          {/* Free Guide Card */}
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

          {/* Strategy Call */}
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
        </div>

        {/* ══════════════════════════════════════════════════════
             ONE-TIME UPGRADE OFFER — AI Growth Kit for Doctors
             Shown exclusively after someone gets the free guide
        ══════════════════════════════════════════════════════ */}
        <div className="py-14 sm:py-20 border-t border-slate-800 space-y-12">

          {/* Upgrade header */}
          <div className="text-center space-y-5">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black uppercase tracking-wider">
              <Sparkles className="w-4 h-4" />
              One-Time Upgrade Offer — Only for Free Guide Readers
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15] max-w-4xl mx-auto">
              Master AI to Grow Your Medical Practice{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0F6FFF] to-[#00C2A8]">
                Without Hiring a Marketing Team
              </span>
            </h2>
            <p className="text-slate-300 text-sm sm:text-lg max-w-2xl mx-auto leading-relaxed">
              Learn how to use Google Gemini, Claude, Google Flow, Canva AI, ChatGPT, and other AI tools to save time, build authority, educate patients, and increase OPD.{' '}
              <span className="text-white font-semibold">Designed specifically for doctors and clinic owners in India.</span>
            </p>
          </div>

          {/* Comparison Box */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div className="bg-slate-800/60 border border-slate-700 rounded-3xl p-7 space-y-5">
              <div className="space-y-1">
                <span className="text-xs font-black uppercase text-slate-400 tracking-wider">What You Just Got</span>
                <h3 className="text-lg font-extrabold text-white">Free OPD Growth Guide</h3>
              </div>
              <ul className="space-y-3">
                {['OPD growth fundamentals', 'Marketing basics', 'Beginner strategies'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-400 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-slate-500 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gradient-to-br from-[#0F6FFF]/10 to-[#00C2A8]/10 border-2 border-[#0F6FFF]/40 rounded-3xl p-7 space-y-5 relative overflow-hidden">
              <div className="absolute top-4 right-4">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500 text-slate-900 text-[10px] font-black uppercase">
                  <Star className="w-3 h-3 fill-slate-900" /> Best Value
                </span>
              </div>
              <div className="space-y-1">
                <span className="text-xs font-black uppercase text-[#0F6FFF] tracking-wider">Upgrade To</span>
                <h3 className="text-lg font-extrabold text-white">AI Growth Kit <span className="text-[#00C2A8]">₹99</span></h3>
              </div>
              <ul className="space-y-2.5">
                {aiKitIncludes.map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-white text-sm">
                    <BadgeCheck className="w-4 h-4 text-[#00C2A8] shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Pricing */}
          <div className="text-center">
            <div className="inline-block bg-slate-800/80 border border-slate-700 rounded-3xl px-10 py-8 space-y-3">
              <div className="flex items-center justify-center gap-6">
                <div className="text-center">
                  <p className="text-xs font-bold uppercase text-slate-500 tracking-wider mb-1">Regular Price</p>
                  <p className="text-2xl font-black text-slate-500 line-through decoration-red-400">₹999</p>
                </div>
                <div className="w-px h-12 bg-slate-700" />
                <div className="text-center">
                  <p className="text-xs font-bold uppercase text-amber-400 tracking-wider mb-1">Launch Price</p>
                  <p className="text-5xl font-black text-white">₹99</p>
                </div>
              </div>
              <div className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-400 text-xs font-black">
                  <Sparkles className="w-3.5 h-3.5" />
                  Founder&apos;s Launch Offer
                </span>
              </div>
            </div>
          </div>

          {/* Benefits */}
          <div className="space-y-6">
            <div className="text-center">
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">What You Can Do After the AI Kit</h3>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {([
                { icon: Clock, label: 'Save 10+ hours every week', color: 'text-blue-400 bg-blue-500/10 border-blue-500/20' },
                { icon: FileText, label: 'Create patient education content in minutes', color: 'text-teal-400 bg-teal-500/10 border-teal-500/20' },
                { icon: Palette, label: 'Generate professional medical visuals using AI', color: 'text-purple-400 bg-purple-500/10 border-purple-500/20' },
                { icon: CalendarCheck, label: 'Plan an entire month of content instantly', color: 'text-amber-400 bg-amber-500/10 border-amber-500/20' },
                { icon: Video, label: 'Create videos without a video editor', color: 'text-rose-400 bg-rose-500/10 border-rose-500/20' },
                { icon: Award, label: 'Build authority before patients visit your clinic', color: 'text-indigo-400 bg-indigo-500/10 border-indigo-500/20' },
                { icon: Globe, label: 'Improve Google Business Profile', color: 'text-emerald-400 bg-emerald-500/10 border-emerald-500/20' },
                { icon: Users, label: 'Increase patient trust online', color: 'text-cyan-400 bg-cyan-500/10 border-cyan-500/20' },
              ] as { icon: React.ComponentType<{ className?: string }>; label: string; color: string }[]).map((benefit, i) => {
                const IconComp = benefit.icon;
                return (
                  <div key={i} className="bg-slate-800/60 border border-slate-700/80 rounded-2xl p-5 flex items-start gap-3 hover:border-[#0F6FFF]/40 transition-all group">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 ${benefit.color} group-hover:scale-110 transition-transform`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <p className="text-sm text-slate-300 font-semibold leading-snug pt-1 group-hover:text-white transition-colors">{benefit.label}</p>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Order Form */}
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-3xl p-7 sm:p-9 border-2 border-[#0F6FFF]/30 shadow-2xl space-y-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#0F6FFF] via-[#00C2A8] to-[#0F6FFF]" />
              <div className="text-center space-y-1.5">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0F6FFF] text-xs font-black">
                  <Bot className="w-3.5 h-3.5" />
                  Get Instant Access
                </span>
                <h3 className="text-2xl font-black text-slate-900">Order AI Growth Kit — ₹99</h3>
                <p className="text-xs text-slate-500 font-medium">Secure checkout via Razorpay. Instant PDF delivery after payment.</p>
              </div>

              <form onSubmit={handleAiKitPayment} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Name *</label>
                    <input type="text" required placeholder="e.g. Dr. Ramesh Patel" value={aiKitForm.name} onChange={(e) => setAiKitForm({ ...aiKitForm, name: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0F6FFF] focus:ring-2 focus:ring-[#0F6FFF]/20 font-medium transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address *</label>
                    <input type="email" required placeholder="e.g. doctor@clinic.com" value={aiKitForm.email} onChange={(e) => setAiKitForm({ ...aiKitForm, email: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0F6FFF] focus:ring-2 focus:ring-[#0F6FFF]/20 font-medium transition-all" />
                  </div>
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mobile Number *</label>
                    <input type="tel" required pattern="[0-9]{10,12}" placeholder="e.g. 9876543210" value={aiKitForm.mobile} onChange={(e) => setAiKitForm({ ...aiKitForm, mobile: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0F6FFF] focus:ring-2 focus:ring-[#0F6FFF]/20 font-medium transition-all" />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Hospital / Clinic Name</label>
                    <input type="text" placeholder="e.g. Patel Multispecialty Clinic" value={aiKitForm.clinicName} onChange={(e) => setAiKitForm({ ...aiKitForm, clinicName: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0F6FFF] focus:ring-2 focus:ring-[#0F6FFF]/20 font-medium transition-all" />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Speciality / Business Type</label>
                  <select value={aiKitForm.specialty} onChange={(e) => setAiKitForm({ ...aiKitForm, specialty: e.target.value })} className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-none focus:border-[#0F6FFF] focus:ring-2 focus:ring-[#0F6FFF]/20 font-medium transition-all bg-white appearance-none">
                    <option value="">Select your specialty...</option>
                    <option>General Physician</option>
                    <option>Pediatrician</option>
                    <option>Gynecologist</option>
                    <option>Orthopedic</option>
                    <option>Dentist</option>
                    <option>Dermatologist</option>
                    <option>Physiotherapist</option>
                    <option>Ayurvedic Doctor</option>
                    <option>Homeopathy</option>
                    <option>Hospital</option>
                    <option>Clinic Owner</option>
                    <option>Other</option>
                  </select>
                </div>

                <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <IndianRupee className="w-5 h-5 text-slate-500" />
                    <span className="text-sm font-bold text-slate-700">Payment Amount</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-slate-400 line-through text-sm font-semibold">₹999</span>
                    <span className="text-2xl font-black text-slate-900">₹99</span>
                    <span className="text-[10px] font-black text-amber-700 bg-amber-100 px-2 py-0.5 rounded-full">LAUNCH</span>
                  </div>
                </div>

                {aiKitError && (
                  <div className="bg-red-50 border border-red-200 rounded-xl p-3 text-xs text-red-700 font-semibold">{aiKitError}</div>
                )}

                <button type="submit" disabled={aiKitSubmitting} className="w-full py-4 text-base font-black text-white bg-gradient-to-r from-[#0F6FFF] via-blue-600 to-[#00C2A8] rounded-xl shadow-xl shadow-[#0F6FFF]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group disabled:opacity-70 disabled:cursor-not-allowed">
                  <Download className="w-5 h-5 text-amber-300" />
                  <span>{aiKitSubmitting ? 'Opening Payment...' : 'Pay ₹99 & Get Instant Access'}</span>
                  <ArrowRight className="w-5 h-5 text-amber-300 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>

                <p className="text-center text-[11px] text-slate-400 flex items-center justify-center gap-1.5">
                  <Lock className="w-3 h-3 text-emerald-600" />
                  Secured by Razorpay &nbsp;•&nbsp; UPI / Card / NetBanking accepted
                </p>
              </form>
            </div>
          </div>

          {/* Trust Strip */}
          <div className="bg-slate-800/50 border border-slate-700/60 rounded-2xl px-6 py-6 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 text-center">
            {['Instant PDF Access', 'Secure Payment', 'Created by Epsilon Technology', 'Made for Indian Doctors', 'Beginner Friendly', 'Practical Examples'].map((item, i) => (
              <div key={i} className="space-y-1.5 flex flex-col items-center">
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <p className="text-xs font-semibold text-slate-300 leading-snug">{item}</p>
              </div>
            ))}
          </div>

          {/* FAQs */}
          <div className="max-w-3xl mx-auto space-y-6">
            <div className="text-center space-y-2">
              <span className="px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-400 text-xs font-bold uppercase tracking-wider">AI Kit FAQs</span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">Frequently Asked Questions</h3>
            </div>
            <div className="space-y-3">
              {aiFaqs.map((faq, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <div key={idx} className="bg-slate-800/60 rounded-2xl border border-slate-700/80 overflow-hidden">
                    <button onClick={() => setOpenFaq(isOpen ? null : idx)} className="w-full p-5 text-left flex items-center justify-between gap-4 focus:outline-none">
                      <span className="font-bold text-white text-sm sm:text-base">{faq.q}</span>
                      <ChevronDown className={`w-5 h-5 text-[#0F6FFF] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-slate-400 leading-relaxed border-t border-slate-700/60 pt-4">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

        {/* Bottom trust */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl px-6 py-5 grid grid-cols-3 gap-3 text-center mb-8">
          <div className="space-y-1.5">
            <ShieldCheck className="w-5 h-5 text-blue-400 mx-auto" />
            <p className="text-xs font-semibold text-slate-300">100% Medical Privacy</p>
          </div>
          <div className="space-y-1.5">
            <Brain className="w-5 h-5 text-blue-400 mx-auto" />
            <p className="text-xs font-semibold text-slate-300">AI-Powered Growth</p>
          </div>
          <div className="space-y-1.5">
            <MessageSquare className="w-5 h-5 text-blue-400 mx-auto" />
            <p className="text-xs font-semibold text-slate-300">WhatsApp Support</p>
          </div>
        </div>

        <div className="text-center pb-6">
          <Link href="/online-opd-growth-system" className="text-xs text-slate-500 hover:text-slate-300 transition-colors underline underline-offset-4">
            ← Back to Online OPD Growth System
          </Link>
        </div>

      </div>
    </main>
  );
}
