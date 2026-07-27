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

  // Scarcity Countdown Timer (Target: Aug 31, 2026 23:59:59)
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date('2026-08-31T23:59:59').getTime();

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
      }, 1000);
    } else {
      setTimeout(() => {
        window.open('https://calendly.com/jaydeepkataria/30min', '_blank');
      }, 1500);
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
      q: 'Why is this offer valid only till 31st August at ₹49,999?',
      a: 'We only take 5 doctor website projects per month to maintain our high quality and speed of delivery. The current price of ₹49,999 (regular value ₹1,30,000+) will increase after August 31st.',
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
      <div className="bg-gradient-to-r from-red-600 via-amber-600 to-red-600 text-white py-2.5 px-4 text-center text-xs sm:text-sm font-extrabold shadow-md flex items-center justify-center gap-2 flex-wrap">
        <span className="flex items-center gap-1 bg-white/20 px-2.5 py-0.5 rounded-full uppercase tracking-wider text-[11px]">
          <Flame className="w-3.5 h-3.5 text-yellow-300 animate-pulse fill-current" /> Limited Offer
        </span>
        <span>
          Special Rate ₹49,999 (Total Worth ₹1,30,000+) Valid Till <strong>31st August</strong>
        </span>
        <span className="hidden sm:inline">•</span>
        <span className="bg-slate-900/40 px-3 py-1 rounded-lg border border-white/20 font-mono text-yellow-300 flex items-center gap-1 text-xs">
          <Clock className="w-3.5 h-3.5 text-yellow-300" />
          <span>{timeLeft.days}d</span>:<span>{String(timeLeft.hours).padStart(2, '0')}h</span>:
          <span>{String(timeLeft.minutes).padStart(2, '0')}m</span>:
          <span>{String(timeLeft.seconds).padStart(2, '0')}s</span>
        </span>
      </div>

      {/* Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/90 backdrop-blur-xl border-b border-slate-200 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#0F6FFF] to-[#00C2A8] flex items-center justify-center text-white shadow-md shadow-[#0F6FFF]/20 group-hover:scale-105 transition-transform">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-xl tracking-tight text-slate-900">Epsilon</span>
                <span className="text-[#0F6FFF] font-semibold text-xs px-2 py-0.5 rounded-full bg-blue-50 border border-blue-200">
                  HEALTHCARE
                </span>
              </div>
              <p className="text-[10px] tracking-wider uppercase text-slate-500 font-medium">
                Technology for Practice Growth
              </p>
            </div>
          </Link>

          {/* Essential Quick Links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-semibold text-slate-600">
            <a href="#package" className="hover:text-[#0F6FFF] transition-colors">
              What You Get
            </a>
            <a href="#doctor-reels" className="hover:text-[#0F6FFF] transition-colors">
              Doctor Reviews
            </a>
            <a href="#faq" className="hover:text-[#0F6FFF] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Header CTA */}
          <button
            onClick={() => setIsModalOpen(true)}
            className="inline-flex items-center justify-center px-5 py-2.5 text-xs sm:text-sm font-bold text-white transition-all bg-gradient-to-r from-[#0F6FFF] to-[#2563EB] rounded-full shadow-lg shadow-[#0F6FFF]/25 hover:shadow-xl hover:shadow-[#0F6FFF]/40 hover:-translate-y-0.5 active:translate-y-0"
          >
            <Sparkles className="w-4 h-4 mr-1.5 animate-pulse" />
            Book Free Audit
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-10 pb-16 md:pt-16 md:pb-20 bg-gradient-to-b from-white via-slate-50 to-blue-50/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Scarcity Banner Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-50 border border-amber-200 text-amber-900 text-xs sm:text-sm font-bold shadow-xs">
            <Flame className="w-4 h-4 text-amber-600 fill-current" />
            <span>Total Worth ₹1,30,000+ • Only ₹49,999 Till 31st August</span>
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
                  ⚡ Offer Price Expires On 31st August
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
          <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => {
                setModalType('audit');
                setFormSubmitted(false);
                setIsModalOpen(true);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#0F6FFF] via-blue-600 to-[#2563EB] rounded-2xl shadow-xl shadow-[#0F6FFF]/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all group"
            >
              Book Your Free Website Growth Audit
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => {
                setModalType('pdf');
                setFormSubmitted(false);
                setIsModalOpen(true);
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-extrabold text-amber-950 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 border-2 border-amber-400 rounded-2xl hover:from-amber-400 hover:to-yellow-500 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 group animate-pulse"
            >
              <FileText className="w-5 h-5 mr-2 text-amber-900" />
              Download Free OPD Growth Guide (PDF)
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* OPD Growth PDF Lead Banner */}
          <div className="max-w-3xl mx-auto mt-8 p-6 sm:p-7 rounded-3xl bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-slate-950 shadow-2xl border-4 border-amber-300 flex flex-col sm:flex-row items-center justify-between gap-6 text-left relative overflow-hidden group">
            <div className="absolute -right-10 -bottom-10 w-40 h-40 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform pointer-events-none" />
            <div className="space-y-2 relative z-10">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-950 text-amber-300 text-xs font-black uppercase tracking-wider shadow-md">
                <FileText className="w-3.5 h-3.5" />
                FREE DOCTOR GUIDE (PDF) • NO COST
              </div>
              <h4 className="text-lg sm:text-xl font-black text-slate-950 leading-tight">
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
              className="w-full sm:w-auto shrink-0 px-7 py-4 text-sm sm:text-base font-black text-white bg-slate-950 hover:bg-slate-900 rounded-2xl transition-all shadow-2xl flex items-center justify-center gap-2 relative z-10 hover:scale-105"
            >
              <FileText className="w-5 h-5 text-amber-400" />
              Get Free PDF Now
              <ArrowRight className="w-5 h-5 text-amber-400" />
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
      <section id="package" className="py-16 sm:py-20 bg-white relative border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0F6FFF] text-xs font-bold uppercase tracking-wider">
              Complete Package Breakdown
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              What You Get in the ₹49,999 Package
            </h2>
            <p className="text-slate-600 text-base">
              Total standalone value is <strong>₹1,30,000+</strong>, available at an all-inclusive price of <strong>₹49,999</strong> till <strong>31st August</strong>.
            </p>
          </div>

          {/* Package Deliverables Grid */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            {packageDeliverables.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-3xl border border-slate-200/90 hover:border-[#0F6FFF]/40 hover:bg-blue-50/20 transition-all space-y-2 relative"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-5 h-5 text-[#00C2A8] shrink-0" />
                    <h3 className="text-base font-bold text-slate-900">{item.title}</h3>
                  </div>
                  <span className="text-xs font-extrabold text-slate-500 bg-white px-2.5 py-1 rounded-full border border-slate-200 line-through">
                    {item.worth}
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed pl-7">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Value Summary Card */}
          <div className="p-6 sm:p-8 rounded-3xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border border-slate-800">
            <div className="space-y-1 text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-2 text-xs font-bold text-blue-300">
                <span className="line-through text-slate-400">Total Value: ₹1,30,000+</span>
                <span className="bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded-full text-[10px] uppercase">
                  Save 60%+
                </span>
              </div>
              <p className="text-2xl sm:text-3xl font-black text-white">
                Only ₹49,999 <span className="text-xs font-normal text-slate-300">+ GST</span>
              </p>
              <p className="text-xs text-amber-300 font-semibold">
                ⚠️ Price increases after 31st August. Only 5 slots per month.
              </p>
            </div>

            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#0F6FFF] to-[#00C2A8] rounded-2xl shadow-lg hover:scale-105 transition-transform shrink-0"
            >
              Lock In ₹49,999 Rate Now
              <ArrowRight className="w-4 h-4 ml-2" />
            </button>
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
              Get the entire package worth <strong>₹1,30,000+</strong> for just <strong>₹49,999</strong> before the price increases on <strong>31st August</strong>.
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
            ⚡ Offer ends 31st August 2026 • 20 min strategy call • Zero obligation
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
                        : 'Special ₹49,999 Rate Valid Till 31st August'}
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

