'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { trackMetaCapiEvent } from '@/lib/meta-capi';
import {
  ShieldCheck,
  CheckCircle2,
  Calendar,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Clock,
  Star,
  ChevronDown,
  Zap,
  Globe,
  Search,
  X,
  Stethoscope,
  Building2,
  Award,
  Play,
  Flame,
  CheckSquare,
  Lock,
  ArrowDown,
  HelpCircle,
  Smartphone,
  TrendingUp,
  FileText,
} from 'lucide-react';

export default function OpdGrowthSystemClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Scarcity Countdown Timer (Target: July 31, 2026 23:59:59)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-07-31T23:59:59').getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        setDays(Math.floor(difference / (1000 * 60 * 60 * 24)));
        setHours(Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        setMinutes(Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)));
        setSeconds(Math.floor((difference % (1000 * 60)) / 1000));
      }
    };

    const setDays = (d: number) => setTimeLeft((prev) => ({ ...prev, days: d }));
    const setHours = (h: number) => setTimeLeft((prev) => ({ ...prev, hours: h }));
    const setMinutes = (m: number) => setTimeLeft((prev) => ({ ...prev, minutes: m }));
    const setSeconds = (s: number) => setTimeLeft((prev) => ({ ...prev, seconds: s }));

    updateTimer();
    const interval = setInterval(updateTimer, 1000);
    return () => clearInterval(interval);
  }, []);

  // Form State for Audit & PDF Access Modal
  const [modalType, setModalType] = useState<'audit' | 'pdf'>('audit');
  const [formData, setFormData] = useState({
    doctorName: '',
    clinicName: '',
    specialty: '',
    phone: '',
    city: '',
    website: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  const PDF_URL = 'https://docs.google.com/document/d/1nflXCYHzzuVMvVkyVLMEOuLZqPXqXhJRN0Z2Z3X0HnA/edit?usp=sharing';

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);

    const isPdf = modalType === 'pdf';
    const eventContentName = isPdf
      ? 'OPD Growth for Doctors PDF Download'
      : 'Online OPD Growth System Audit Lead';

    // Submit lead data to contact API (sends Email + pushes to Wortal CRM)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.doctorName,
          clinic: formData.clinicName,
          specialty: formData.specialty,
          mobile: formData.phone,
          city: formData.city,
          website: formData.website,
          leadType: isPdf ? 'OPD Growth PDF Guide Download' : 'OPD Growth System Audit Request',
        }),
      });
    } catch (err) {
      console.error('Failed to submit contact form data:', err);
    }

    // Send Meta Conversions API (CAPI) & Pixel Lead Event
    trackMetaCapiEvent({
      eventName: 'Lead',
      user: {
        phone: formData.phone,
        firstName: formData.doctorName,
        city: formData.city,
      },
      customData: {
        content_name: eventContentName,
        lead_type: isPdf ? 'PDF Lead Magnet' : 'Growth Audit Lead',
        clinic_name: formData.clinicName,
        specialty: formData.specialty,
        website: formData.website,
        value: isPdf ? 0 : 49999,
        currency: 'INR',
      },
    });

    if (isPdf) {
      setTimeout(() => {
        window.open(PDF_URL, '_blank');
        window.location.href = '/online-opd-growth-system/thank-you?type=pdf';
      }, 1000);
    } else {
      setTimeout(() => {
        window.open('https://calendly.com/jaydeepkataria/30min', '_blank');
        window.location.href = '/online-opd-growth-system/thank-you?type=audit';
      }, 1200);
    }
  };

  // What Doctors Get in ₹49,999 Package Breakdown (Worth ₹1.30 Lakh+)
  const packageDeliverables = [
    {
      title: 'Custom High-Trust Medical Website',
      worth: '₹45,000',
      desc: 'Clean, modern, responsive website custom-built for your clinic branding & specialty.',
    },
    {
      title: 'Doctor Authority & Medical Copywriting',
      worth: '₹25,000',
      desc: 'Professional patient trust copywriting, qualification showcase, and clinical care messaging.',
    },
    {
      title: 'Direct 1-Click WhatsApp & Appointment System',
      worth: '₹15,000',
      desc: 'Seamless patient conversion setup routing inquiries directly to your reception.',
    },
    {
      title: 'Local Healthcare SEO & Schema Optimization',
      worth: '₹20,000',
      desc: 'Medical Schema (Specialty, Address, OPD Hours) for top local Google search ranking.',
    },
    {
      title: 'Sub-Second Speed & Mobile Performance Polish',
      worth: '₹15,000',
      desc: 'Ultra-fast 0.8s mobile loading speed ensuring zero patient drop-off.',
    },
    {
      title: '30 Days Complete Done-For-You Launch Support',
      worth: '₹10,000',
      desc: 'Domain linking, security SSL, Google Analytics setup & hands-free tech management.',
    },
  ];

  // Doctor Reel Videos
  const doctorReels = [
    {
      name: 'Dr. Devam Dave',
      specialty: 'Orthopaedic Surgeon',
      youtubeId: 'GDB0PBFJfW0',
    },
    {
      name: 'Dr. Malhar Madariya',
      specialty: 'Diabetes Specialist',
      youtubeId: '7WOBASECbNU',
    },
    {
      name: 'Dr. Priyank Bagthariya',
      specialty: 'Orthopaedic Surgeon',
      youtubeId: 'ETEAH13GaaE',
    },
    {
      name: 'Dr. Siddhraj Divraniya',
      specialty: 'ICU Head',
      youtubeId: 'WAQ1x0TlfD4',
    },
  ];

  // Essential FAQs for Busy Doctors
  const faqs = [
    {
      q: 'What exactly is included in the ₹49,999 package?',
      a: 'You get a complete done-for-you digital growth system worth over ₹1.30 Lakh: custom high-trust medical website design, healthcare copywriting, direct 1-click WhatsApp & appointment routing, local Google SEO & schema setup, ultra-fast mobile optimization, and 30 days of launch support.',
    },
    {
      q: 'How much time will I need to invest as a busy practicing doctor?',
      a: 'Less than 45 minutes total. We respect your clinical schedule. Simply share basic clinic details or brochures, and our healthcare team handles 98% of the design, copywriting, and technical setup.',
    },
    {
      q: 'Why is this offer valid only till 31st July at ₹49,999?',
      a: 'We only take 5 doctor website projects per month to maintain our high quality and speed of delivery. The current price of ₹49,999 (regular value ₹1,30,000+) will increase after July 31st.',
    },
    {
      q: 'Do I get complete ownership of my website and domain?',
      a: '100% YES. You retain complete legal ownership of your domain, website content, patient leads, and assets with zero hidden lock-ins or recurring mandatory contracts.',
    },
    {
      q: 'How fast will my website be ready?',
      a: 'Your complete system will be live and fully functional in just 15 days from the day we receive your basic clinic details.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0F6FFF] selection:text-white">
      {/* Top Scarcity Bar */}
      <div className="bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white py-2 px-3 text-center text-xs sm:text-sm font-extrabold shadow-md flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap border-b border-blue-500/30">
        <span className="flex items-center gap-1 bg-amber-500 text-slate-950 px-2.5 py-0.5 rounded-full uppercase tracking-wider text-[10px] sm:text-[11px] font-black shadow-xs">
          <Flame className="w-3 h-3 sm:w-3.5 sm:h-3.5 fill-current text-slate-950" /> 1.30 Lakh Value Offer
        </span>
        <span className="text-[11px] sm:text-sm">
          Total Value Stack: <span className="text-amber-300 underline font-black">₹1,30,000 (1.30 Lakh)</span> • Available for <span className="bg-emerald-500/30 text-emerald-300 px-1.5 py-0.5 rounded font-black">₹49,999</span> Till <strong>31st July</strong>
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="bg-slate-800/80 px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-lg border border-slate-700 font-mono text-yellow-300 flex items-center gap-1 text-[11px] sm:text-xs">
          <Clock className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-yellow-300" />
          <span>{timeLeft.days}d</span>:<span>{String(timeLeft.hours).padStart(2, '0')}h</span>:
          <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>:
          <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
        </span>
      </div>


      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-20 bg-gradient-to-b from-white via-slate-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Scarcity Banner Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-amber-500/10 via-amber-400/20 to-amber-500/10 border-2 border-amber-400 text-amber-950 text-xs sm:text-sm font-extrabold shadow-md">
            <Sparkles className="w-4 h-4 text-amber-600 shrink-0 animate-pulse" />
            <span>Free OPD Growth Strategy Guide for Private Doctors & Clinics</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15] max-w-4xl mx-auto">
            Build Immediate Patient Trust Online.{' '}
            <span className="bg-gradient-to-r from-[#0F6FFF] via-blue-600 to-[#00C2A8] bg-clip-text text-transparent">
              Convert Searches Into OPD Patients.
            </span>
          </h1>

          {/* Subheadline Copy */}
          <p className="text-base sm:text-xl text-slate-600 font-normal leading-relaxed max-w-3xl mx-auto">
            A complete, done-for-you website system engineered for busy doctors. We handle{' '}
            <span className="font-semibold text-slate-900 bg-blue-50/80 px-2 py-0.5 rounded-md border border-blue-100 text-blue-600 inline-block">
              98% of the work
            </span>
            —copywriting, design, WhatsApp setup, and local SEO—in just{' '}
            <span className="font-semibold text-slate-900 bg-emerald-50/80 px-2 py-0.5 rounded-md border border-emerald-100 text-emerald-600 inline-block">
              15 days
            </span>
            .
          </p>

          {/* Live Countdown Card */}
          <div className="relative max-w-lg mx-auto my-6">
            {/* Ambient Background Glow */}
            <div className="absolute -inset-1 bg-gradient-to-r from-amber-500/20 via-blue-600/20 to-teal-500/20 rounded-3xl blur-xl opacity-75 pointer-events-none" />

            <div className="relative rounded-3xl bg-white/95 backdrop-blur-md border border-slate-200/90 shadow-2xl p-4 sm:p-5 space-y-3">
              {/* Header Badge & Pulse */}
              <div className="inline-flex items-center justify-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 text-amber-400 text-xs font-extrabold uppercase tracking-wider shadow-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
                </span>
                <span className="flex items-center gap-1">
                  Offer Price Expires On 31st July
                </span>
              </div>

              {/* Grid of Digits */}
              <div className="grid grid-cols-4 gap-2 sm:gap-3 text-center pt-1">
                <div className="relative group bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white p-3 rounded-2xl border border-slate-800 shadow-md">
                  <span className="text-2xl sm:text-3xl font-black block leading-none tracking-tight text-white">
                    {timeLeft.days}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider block mt-1.5">
                    Days
                  </span>
                </div>

                <div className="relative group bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white p-3 rounded-2xl border border-slate-800 shadow-md">
                  <span className="text-2xl sm:text-3xl font-black block leading-none tracking-tight text-white">
                    {String(timeLeft.hours).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider block mt-1.5">
                    Hours
                  </span>
                </div>

                <div className="relative group bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 text-white p-3 rounded-2xl border border-slate-800 shadow-md">
                  <span className="text-2xl sm:text-3xl font-black block leading-none tracking-tight text-white">
                    {String(timeLeft.minutes).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-slate-400 font-bold uppercase tracking-wider block mt-1.5">
                    Mins
                  </span>
                </div>

                <div className="relative group bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 p-3 rounded-2xl border border-[#00C2A8]/30 shadow-md shadow-[#00C2A8]/10">
                  <span className="text-2xl sm:text-3xl font-black block leading-none tracking-tight text-[#00C2A8] drop-shadow-[0_0_10px_rgba(0,194,168,0.5)]">
                    {String(timeLeft.seconds).padStart(2, '0')}
                  </span>
                  <span className="text-[10px] sm:text-xs text-[#00C2A8]/80 font-bold uppercase tracking-wider block mt-1.5">
                    Secs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center gap-3 sm:gap-4 max-w-xl sm:max-w-none mx-auto">
            <button
              onClick={() => {
                setModalType('audit');
                setFormSubmitted(false);
                setIsModalOpen(true);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-3.5 sm:px-8 sm:py-4 text-sm sm:text-lg font-bold text-white bg-gradient-to-r from-[#0F6FFF] via-blue-600 to-[#2563EB] rounded-2xl shadow-xl shadow-[#0F6FFF]/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all group"
            >
              <span>Book Your Free Website Growth Audit</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
            <button
              onClick={() => {
                setModalType('pdf');
                setFormSubmitted(false);
                setIsModalOpen(true);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-4 py-3.5 sm:px-7 sm:py-4 text-xs sm:text-base font-extrabold text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 border border-amber-400/50 rounded-2xl hover:from-amber-400 hover:to-yellow-500 transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 mr-1.5 sm:mr-2 text-amber-900 shrink-0" />
              <span>Download Free OPD Growth Guide (PDF)</span>
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-1.5 sm:ml-2 group-hover:translate-x-1 transition-transform shrink-0" />
            </button>
          </div>

          {/* OPD Growth PDF Lead Banner */}
          <div className="max-w-3xl mx-auto mt-6 sm:mt-8 p-5 sm:p-7 rounded-3xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 shadow-2xl border-2 sm:border-4 border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-5 sm:gap-6 text-left relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />
            <div className="space-y-2 relative z-10 w-full sm:w-auto">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 text-amber-300 text-[10px] sm:text-xs font-black uppercase tracking-wider shadow-md">
                <FileText className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
                FREE DOCTOR GUIDE (PDF) • NO COST
              </div>
              <h4 className="text-base sm:text-xl font-black text-slate-950 leading-tight">
                "OPD Growth Strategy Guide for Private Doctors & Clinics"
              </h4>
              <p className="text-xs sm:text-sm text-slate-900 font-medium leading-relaxed">
                Discover the exact 5-step blueprint top doctors use to 3x OPD appointment bookings through digital reputation and WhatsApp integration.
              </p>
            </div>
            <button
              onClick={() => {
                setModalType('pdf');
                setFormSubmitted(false);
                setIsModalOpen(true);
              }}
              className="w-full sm:w-auto shrink-0 px-6 py-3.5 sm:px-7 sm:py-4 text-xs sm:text-base font-black text-white bg-slate-950 hover:bg-slate-900 rounded-2xl transition-all shadow-2xl flex items-center justify-center gap-2 relative z-10 hover:scale-105"
            >
              <FileText className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
              Get Free PDF Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 text-amber-400" />
            </button>
          </div>

          {/* Minimal Highlights for Doctor */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-6 text-xs sm:text-sm text-slate-600 font-medium">
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00C2A8]" />
              <span>Takes Less Than 45 Mins Of Your Time</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00C2A8]" />
              <span>Delivered In 15 Days</span>
            </div>
            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-[#00C2A8]" />
              <span>100% Complete Ownership</span>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SECTION 1: WHAT YOU GET IN THE ₹49,999 PACKAGE (TOTAL WORTH ₹1.30 LAKH+) */}
      <section id="package" className="py-16 sm:py-20 bg-gradient-to-b from-white via-slate-50 to-white relative border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-extrabold shadow-sm">
              <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
              <span>Full Stack Breakdown • Standalone Market Value: ₹1,30,000 (1.30 Lakh)</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 tracking-tight leading-tight">
              See Exactly Why This System is Worth{' '}
              <span className="bg-gradient-to-r from-[#0F6FFF] to-[#00C2A8] bg-clip-text text-transparent underline decoration-amber-400">
                ₹1,30,000 (1.30 Lakh)
              </span>
            </h2>
            <p className="text-slate-600 text-base sm:text-lg">
              Here is the itemized value breakdown of everything built into your complete Online OPD Growth System. If purchased separately, agency costs total <strong>₹1,30,000</strong>.
            </p>
          </div>

          {/* Value Math Banner */}
          <div className="mb-8 p-4 sm:p-5 rounded-2xl bg-slate-900 text-white border border-slate-800 shadow-lg flex flex-wrap items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 text-xs sm:text-sm font-bold text-slate-300">
              <span className="bg-amber-500 text-slate-950 px-2 py-0.5 rounded text-[11px] font-black uppercase">Itemized Math</span>
              <span>₹45k + ₹25k + ₹20k + ₹15k + ₹15k + ₹10k</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-xs text-slate-400 font-medium">Total Market Price:</span>
              <span className="text-lg sm:text-xl font-black text-amber-300 line-through">₹1,30,000 (1.30 Lakh)</span>
            </div>
          </div>

          {/* Package Deliverables Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {packageDeliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-white p-6 rounded-3xl border-2 border-slate-200/90 shadow-sm hover:border-[#0F6FFF] hover:shadow-md transition-all space-y-3 relative group"
              >
                <div className="flex items-start justify-between gap-3">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-xl bg-blue-50 text-[#0F6FFF] flex items-center justify-center font-bold text-sm shrink-0">
                      #{idx + 1}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#0F6FFF] transition-colors">
                      {item.title}
                    </h3>
                  </div>
                  <div className="text-right shrink-0">
                    <span className="text-xs font-black text-slate-900 bg-amber-100 text-amber-900 px-3 py-1 rounded-full border border-amber-300 block">
                      Worth {item.worth}
                    </span>
                  </div>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-10">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Grand Value Summary & ROI Box */}
          <div className="p-6 sm:p-10 rounded-3xl bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white shadow-2xl space-y-6 border-2 border-blue-500/30 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#0F6FFF]/10 rounded-full blur-3xl pointer-events-none" />

            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 relative z-10">
              <div className="space-y-2 text-center lg:text-left">
                <div className="inline-flex items-center gap-2 text-xs font-extrabold text-amber-300 uppercase tracking-wider">
                  <Flame className="w-4 h-4 text-amber-400 fill-current" />
                  <span>Exclusive Doctor Launch Offer</span>
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-white">
                  Get ₹1,30,000 Total Value Stack
                </h3>
                <div className="flex flex-wrap items-center justify-center lg:justify-start gap-3 pt-1">
                  <span className="text-lg text-slate-400 line-through font-bold">Standalone Price: ₹1,30,000</span>
                  <span className="bg-emerald-500 text-slate-950 font-black text-xs px-2.5 py-1 rounded-md uppercase">
                    Save ₹80,001 (61% OFF)
                  </span>
                </div>
                <p className="text-3xl sm:text-5xl font-black text-emerald-400 pt-2">
                  Only ₹49,999 <span className="text-sm font-medium text-slate-300">+ GST</span>
                </p>
                <p className="text-xs sm:text-sm text-amber-300 font-semibold pt-1">
                  ⚡ Offer rate ₹49,999 valid till 31st July only. Increases to regular price after.
                </p>
              </div>

              <div className="w-full lg:w-auto flex flex-col items-center gap-3 shrink-0 relative z-10">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-5 text-base sm:text-lg font-black text-white bg-gradient-to-r from-[#0F6FFF] via-blue-600 to-[#00C2A8] rounded-2xl shadow-xl shadow-[#0F6FFF]/40 hover:scale-105 transition-transform"
                >
                  <span>Claim Entire 1.30 Lakh System for ₹49,999</span>
                  <ArrowRight className="w-5 h-5 ml-2" />
                </button>
                <span className="text-[11px] text-slate-400 font-medium">100% Done-For-You • Live in 15 Days</span>
              </div>
            </div>

            {/* Micro ROI Calculation Card inside Section */}
            <div className="pt-6 border-t border-slate-800 grid sm:grid-cols-3 gap-4 text-center sm:text-left relative z-10">
              <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
                <span className="text-xs text-blue-300 font-bold block uppercase">How ROI Works</span>
                <p className="text-sm font-bold text-white mt-1">15 Extra Patients = 100% Payback</p>
              </div>
              <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
                <span className="text-xs text-emerald-300 font-bold block uppercase">Time Investment</span>
                <p className="text-sm font-bold text-white mt-1">Under 45 Minutes of Doctor's Time</p>
              </div>
              <div className="bg-slate-800/60 p-4 rounded-2xl border border-slate-700/60">
                <span className="text-xs text-amber-300 font-bold block uppercase">Ownership</span>
                <p className="text-sm font-bold text-white mt-1">100% Full Ownership & Zero Lock-in</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SECTION 2: DOCTOR REELS & REVIEWS */}
      <section id="doctor-reels" className="py-16 sm:py-20 bg-slate-900 text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase">
              <Play className="w-3.5 h-3.5 text-[#00C2A8] fill-current" /> Doctor Video Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trusted by Leading Doctors
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Watch real video reviews from surgeons and clinic owners who grown their OPD with us.
            </p>
          </div>

          {/* 4 Doctor Video Reels (Vertical 9:16 Format) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctorReels.map((reel, idx) => (
              <div
                key={idx}
                className="bg-slate-800 rounded-3xl border border-slate-700 overflow-hidden shadow-xl hover:border-[#0F6FFF] transition-all flex flex-col group"
              >
                <div className="relative w-full aspect-[9/16] bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${reel.youtubeId}`}
                    title={`${reel.name} - ${reel.specialty}`}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="p-4 bg-slate-900 border-t border-slate-800">
                  <h3 className="font-bold text-white text-sm group-hover:text-[#00C2A8] transition-colors">
                    {reel.name}
                  </h3>
                  <p className="text-xs text-blue-400 font-semibold">{reel.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE SECTION 3: 15-DAY HANDS-FREE PROCESS FOR BUSY DOCTORS */}
      <section className="py-16 sm:py-20 bg-white relative border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Zero Tech Time Needed
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Designed for Busy Doctor Schedules
            </h2>
            <p className="text-slate-600 text-base">
              You focus on treating patients. We handle 98% of the heavy lifting.
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-blue-100 text-[#0F6FFF] font-extrabold flex items-center justify-center text-base">
                1
              </div>
              <h3 className="font-bold text-slate-900 text-lg">45-Min Discovery</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Share basic clinic details, degrees & photos. We take care of content & structure.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 font-extrabold flex items-center justify-center text-base">
                2
              </div>
              <h3 className="font-bold text-slate-900 text-lg">We Build & Polish</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Healthcare copywriting, WhatsApp setup, speed polish & local SEO schemas.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 text-center sm:text-left">
              <div className="w-10 h-10 rounded-xl bg-purple-100 text-purple-700 font-extrabold flex items-center justify-center text-base">
                3
              </div>
              <h3 className="font-bold text-slate-900 text-lg">Live in 15 Days</h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Your clinic website goes live ready to convert online searches into OPD consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SECTION 4: FREQUENTLY ASKED QUESTIONS */}
      <section id="faq" className="py-16 sm:py-20 bg-slate-50 relative border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0F6FFF] text-xs font-bold uppercase tracking-wider">
              Doctor FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                  >
                    <span className="font-bold text-slate-900 text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0F6FFF] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-6 pb-6 text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* FINAL CTA SECTION WITH SCARCITY */}
      <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">
          <div className="w-14 h-14 rounded-2xl bg-[#0F6FFF]/20 text-[#00C2A8] flex items-center justify-center mx-auto border border-[#0F6FFF]/30">
            <Stethoscope className="w-7 h-7" />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Claim Your Online OPD Growth System Today
            </h2>
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Get the entire package worth <strong>₹1,30,000+</strong> for just <strong>₹49,999</strong> before the price increases on <strong>31st July</strong>.
            </p>
          </div>

          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-[#0F6FFF] via-blue-600 to-[#00C2A8] rounded-2xl shadow-2xl shadow-[#0F6FFF]/40 hover:scale-105 transition-all"
            >
              Book Your Free Website Growth Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          <p className="text-xs text-amber-300 font-medium">
            ⚡ Offer ends 31st July 2026 • 20 min strategy call • Zero obligation
          </p>
        </div>
      </section>

      {/* WhatsApp Floating Button */}
      <a
        href="https://wa.me/919904222000?text=Hi%20Epsilon%20Team,%20I%20am%20a%20doctor%20interested%20in%20The%20Online%20OPD%20Growth%20System."
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-40 w-14 h-14 bg-[#00C2A8] text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-transform group"
        aria-label="Direct WhatsApp Consultation"
      >
        <MessageSquare className="w-7 h-7" />
        <span className="absolute right-16 bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity shadow-lg">
          Ask Doctor Specialist
        </span>
      </a>

      {/* Audit Booking Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-slate-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full"
            >
              <X className="w-6 h-6" />
            </button>

            {!formSubmitted ? (
              <div className="space-y-6">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0F6FFF] text-xs font-bold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>
                      {modalType === 'pdf'
                        ? 'Instant PDF Access'
                        : 'Special ₹49,999 Rate Valid Till 31st July'}
                    </span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    {modalType === 'pdf'
                      ? 'Download OPD Growth Guide for Doctors'
                      : 'Book Your Website Growth Audit'}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    {modalType === 'pdf'
                      ? 'Please enter your details below to instantly access and read the OPD Growth PDF guide.'
                      : 'Fill in your details below to schedule your 20-minute consultation.'}
                  </p>
                </div>

                <form onSubmit={handleFormSubmit} className="space-y-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Doctor / Owner Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Dr. Ramesh Patel"
                      value={formData.doctorName}
                      onChange={(e) => setFormData({ ...formData, doctorName: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0F6FFF] focus:ring-2 focus:ring-[#0F6FFF]/20"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Clinic / Hospital Name *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Care Eye Hospital"
                        value={formData.clinicName}
                        onChange={(e) => setFormData({ ...formData, clinicName: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0F6FFF] focus:ring-2 focus:ring-[#0F6FFF]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        City *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="e.g. Ahmedabad"
                        value={formData.city}
                        onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0F6FFF] focus:ring-2 focus:ring-[#0F6FFF]/20"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="e.g. 9876543210"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0F6FFF] focus:ring-2 focus:ring-[#0F6FFF]/20"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                        Specialty
                      </label>
                      <input
                        type="text"
                        placeholder="e.g. Orthopedics"
                        value={formData.specialty}
                        onChange={(e) => setFormData({ ...formData, specialty: e.target.value })}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0F6FFF] focus:ring-2 focus:ring-[#0F6FFF]/20"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      Current Website (If Any)
                    </label>
                    <input
                      type="url"
                      placeholder="https://yourclinic.com"
                      value={formData.website}
                      onChange={(e) => setFormData({ ...formData, website: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0F6FFF] focus:ring-2 focus:ring-[#0F6FFF]/20"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-4 text-base font-bold text-white bg-gradient-to-r from-[#0F6FFF] to-[#2563EB] rounded-xl shadow-lg shadow-[#0F6FFF]/30 hover:shadow-xl transition-all mt-2"
                  >
                    {modalType === 'pdf'
                      ? 'Submit & Open OPD Growth PDF'
                      : 'Confirm & Select Audit Time Slot'}
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  {modalType === 'pdf' ? 'Access Granted!' : 'Request Confirmed!'}
                </h3>
                <p className="text-sm text-slate-600">
                  {modalType === 'pdf'
                    ? 'Opening your OPD Growth Strategy PDF guide in a new tab...'
                    : 'Redirecting you to our live calendar to choose your preferred 20-minute time slot...'}
                </p>
                {modalType === 'pdf' && (
                  <div className="pt-2">
                    <a
                      href={PDF_URL}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-sm font-bold text-[#0F6FFF] hover:underline"
                    >
                      Click here if the PDF did not open automatically →
                    </a>
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}

