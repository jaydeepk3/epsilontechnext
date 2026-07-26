'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  ShieldCheck,
  CheckCircle2,
  XCircle,
  Calendar,
  PhoneCall,
  MessageSquare,
  Sparkles,
  ArrowRight,
  TrendingUp,
  Award,
  Users,
  Clock,
  Star,
  ChevronDown,
  Zap,
  Lock,
  Globe,
  Smartphone,
  Search,
  Check,
  X,
  Stethoscope,
  Building2,
  UserCheck,
  Gift,
  HelpCircle,
  Target,
  BarChart3,
  BadgeCheck,
  ChevronRight,
  Send,
  SlidersHorizontal,
  ArrowDown,
  UserPlus,
  ThumbsUp,
  User,
} from 'lucide-react';

export default function OpdGrowthSystemClient() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Form State for Audit Modal
  const [formData, setFormData] = useState({
    doctorName: '',
    clinicName: '',
    specialty: '',
    phone: '',
    city: '',
    website: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = (window.scrollY / totalHeight) * 100;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      // Redirect to Calendly after submission
      window.open('https://calendly.com/jaydeepkataria/30min', '_blank');
    }, 1500);
  };

  const healthcareCategories = [
    { label: 'Dental Clinics', desc: 'Patient trust & cosmetic treatment showcase', icon: Sparkles },
    { label: 'Skin Clinics', desc: 'Dermatology & procedure trust frameworks', icon: UserCheck },
    { label: 'Eye Hospitals', desc: 'Surgical authority & cataract/LASIK flows', icon: Target },
    { label: 'IVF Clinics', desc: 'Empathy-driven maternity & fertility positioning', icon: Users },
    { label: 'Orthopedic Clinics', desc: 'Joint care & surgical expertise showcase', icon: ShieldCheck },
    { label: 'Physiotherapy Clinics', desc: 'Recovery programs & rehab booking', icon: TrendingUp },
    { label: 'Multispecialty Hospitals', desc: 'Departmental hierarchy & specialist profiles', icon: Building2 },
    { label: 'Healthcare Clinics', desc: 'General OPD & diagnostic appointment flows', icon: Stethoscope },
  ];

  const patientJourneySteps = [
    {
      step: '1',
      title: 'Google Search',
      desc: 'Patient searches for top specialists or clinics in your city.',
      icon: Search,
      color: 'bg-blue-50 text-[#0F6FFF]',
    },
    {
      step: '2',
      title: 'Visit Your Website',
      desc: 'First impression formed within 3 seconds of opening the page.',
      icon: Globe,
      color: 'bg-[#00C2A8]/10 text-[#00C2A8]',
    },
    {
      step: '3',
      title: 'Build Trust',
      desc: 'Patient reviews credentials, awards, & verified success stories.',
      icon: ShieldCheck,
      color: 'bg-indigo-50 text-indigo-600',
    },
    {
      step: '4',
      title: 'View Doctor Profile',
      desc: 'Understands your clinical experience and treatment approach.',
      icon: User,
      color: 'bg-amber-50 text-amber-600',
    },
    {
      step: '5',
      title: 'Click WhatsApp / Book',
      desc: 'Frictionless 1-click inquiry sent directly to reception.',
      icon: MessageSquare,
      color: 'bg-emerald-50 text-emerald-600',
    },
    {
      step: '6',
      title: 'Visit Clinic',
      desc: 'Patient arrives confident and reassured for consultation.',
      icon: Building2,
      color: 'bg-cyan-50 text-cyan-600',
    },
  ];

  const whyDoctorsChoose = [
    { title: 'Healthcare-Focused', desc: '100% built around doctor-patient relationship dynamics.', icon: Stethoscope },
    { title: 'Conversion-Focused', desc: 'Engineered specifically to convert visitors into OPD appointments.', icon: TrendingUp },
    { title: 'Mobile Optimized', desc: 'Sub-second loading on smartphones for 85%+ of visitors.', icon: Smartphone },
    { title: 'Appointment Focused', desc: 'Zero distractions—direct path to booking & WhatsApp.', icon: Calendar },
    { title: 'Transparent Pricing', desc: '₹49,999 + GST flat one-time rate with no hidden lock-ins.', icon: ShieldCheck },
    { title: 'Fast Delivery', desc: 'Complete done-for-you system delivered in 15 days.', icon: Zap },
    { title: 'Professional Branding', desc: 'Award-winning SaaS aesthetics adapted for medical practice.', icon: Award },
  ];

  const whoIsPerfectFor = [
    'Doctors opening a new clinic',
    'Clinics with outdated websites',
    'Healthcare brands wanting premium positioning',
    'Doctors relying mainly on referrals',
    'Clinics wanting more appointment enquiries',
  ];

  const whoIsNotFor = [
    'Businesses looking for the cheapest website',
    'Companies needing custom ERP/Hospital Software',
    'Projects requiring unlimited revisions',
    'Businesses wanting a generic website',
  ];

  const investmentValueStack = [
    'Strategy Session',
    'Patient Trust Framework',
    'Premium Healthcare Website',
    'Appointment Booking System',
    'WhatsApp Integration',
    'Google Business Profile Integration',
    'Google Analytics + Meta Pixel Setup',
    'Basic SEO Foundation',
    'Speed Optimization',
    'Security Setup',
    '30-Day Launch Support',
  ];

  const benefits = [
    {
      title: 'Immediate Patient Trust',
      desc: 'Position your qualifications, expertise, awards, and patient success stories with ultra-high medical credibility standards.',
      icon: ShieldCheck,
      color: 'bg-blue-500/10 text-[#0F6FFF]',
    },
    {
      title: '3x OPD Enquiry Conversion',
      desc: 'Seamless direct-booking flows designed specifically to remove friction and convert anxious patients into scheduled visits.',
      icon: TrendingUp,
      color: 'bg-emerald-500/10 text-[#00C2A8]',
    },
    {
      title: '1-Tap WhatsApp Integration',
      desc: 'Direct smart floating routing allowing patients to inquire, share reports, or confirm clinic timing instantly in one tap.',
      icon: MessageSquare,
      color: 'bg-[#00C2A8]/15 text-[#00C2A8]',
    },
    {
      title: 'Mobile-First Medical UI',
      desc: 'Over 85% of your patients visit on smartphones. Engineered for lightning-fast sub-second loading on 4G/5G mobile networks.',
      icon: Smartphone,
      color: 'bg-indigo-500/10 text-indigo-600',
    },
    {
      title: 'Local SEO & Google Visibility',
      desc: 'Structured medical schema, geographic targeting, and Google Business setup so local patients find your clinic first.',
      icon: Search,
      color: 'bg-blue-500/10 text-blue-600',
    },
    {
      title: 'Premium Doctor Authority Branding',
      desc: 'Differentiate your clinic from standard local competitors with bespoke typography, subtle animations, and modern luxury design.',
      icon: Award,
      color: 'bg-amber-500/10 text-amber-600',
    },
    {
      title: 'Click-to-Call Emergency Routing',
      desc: 'Instant prominent phone triggers for urgent consultations, ambulance requests, or immediate appointment confirmations.',
      icon: PhoneCall,
      color: 'bg-cyan-500/10 text-cyan-600',
    },
    {
      title: 'Zero Tech Headaches (Done-For-You)',
      desc: 'We handle everything from domain setup, cloud server hosting, SSL security, content layout to final launch in 15 days.',
      icon: Zap,
      color: 'bg-purple-500/10 text-purple-600',
    },
  ];

  const featureCategories = [
    {
      category: 'trust',
      name: '1. Trust & Credibility Architecture',
      items: [
        'Custom Doctor Profile with Qualifications, Degrees & Bio',
        'Clinic Legacy & Core Philosophy Highlight',
        'Verified Patient Video & Text Testimonials Showcase',
        'Before & After Clinical Treatment Gallery Grid',
        'Accreditations, Awards, & Media Feature Badges',
        'Interactive Medical Services & Specialization Breakdown',
      ],
    },
    {
      category: 'conversion',
      name: '2. High-Converting OPD Funnel Engine',
      items: [
        'Frictionless 1-Click OPD Appointment Booking Form',
        'Smart Direct-to-WhatsApp Patient Inquiry System',
        'Instant Click-to-Call Sticky Navigation Triggers',
        'Google Maps & Location Guidance with Live Directions',
        'Clinic OPD Timing & Weekly Schedule Display',
        'Custom Lead Notification Alerts direct to Doctor/Reception',
      ],
    },
    {
      category: 'tech',
      name: '3. Next-Gen Tech, SEO & Analytics Stack',
      items: [
        'Lightning 95+ Google PageSpeed Optimization Engine',
        'Local Healthcare Schema & Rich Snippets Integration',
        'Google Analytics 4 & Conversion Event Tracking',
        'Meta Pixel Integration for Retargeting Campaigns',
        'Enterprise SSL Encryption & HIPPA-Compliant Security Standards',
        '100% Responsive Design Across iPhone, Android, Tablet & Desktop',
      ],
    },
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Practice Audit',
      desc: 'We map your target patient persona, clinic specialties, unique strengths, and competitive advantage in your locality.',
      time: 'Day 1 - 3',
    },
    {
      step: '02',
      title: 'High-Trust Content & Architecture',
      desc: 'Our direct-response healthcare copywriters build patient-centered text that resolves doubts and builds immediate authority.',
      time: 'Day 4 - 6',
    },
    {
      step: '03',
      title: 'Bespoke Modern Design & UI',
      desc: 'Crafting award-winning, clean SaaS-inspired UI customized with your clinic branding, color scheme, and doctor profiles.',
      time: 'Day 7 - 10',
    },
    {
      step: '04',
      title: 'Engineered Development & Speed Polish',
      desc: 'Building high-performance React/Next code with sub-second page loads, SEO schemas, and mobile responsiveness.',
      time: 'Day 11 - 13',
    },
    {
      step: '05',
      title: 'Launch & OPD Growth Engine Activation',
      desc: 'Final security audits, domain linking, WhatsApp & Analytics setup, and handing over a fully operational OPD pipeline.',
      time: 'Day 14 - 15',
    },
  ];

  const faqs = [
    {
      q: 'Why is this priced at ₹49,999 when generic agencies offer websites for ₹10,000?',
      a: 'A ₹10,000 website is a digital business card that sits idle on the web and fails to convert visitors into patients. The Online OPD Growth System™ is a specialized healthcare appointment acquisition engine. It includes professional medical copywriting, psychological trust architecture, direct WhatsApp flows, 95+ speed performance, local SEO schemas, and done-for-you launch. A single additional surgery or 5 extra OPD patients a month completely pays back your investment.',
    },
    {
      q: 'How much time will I need to invest as a busy practicing doctor?',
      a: 'Less than 45 minutes total. We respect your medical schedule. You simply fill out our intake form or share existing brochures/photos. Our healthcare content and engineering team handles 98% of the heavy lifting, presentation, copywriting, and technical setup.',
    },
    {
      q: 'Is this system suitable for my specific medical specialty?',
      a: 'Yes! We have specialized layout systems for Dental, Dermatology, IVF/Gynecologists, Orthopedics, Eye Hospitals, Physiotherapy, General Surgeons, and Multispecialty Centers. The copywriting and patient trust modules are customized to your exact clinical scope.',
    },
    {
      q: 'Do I get ownership of the domain and website assets?',
      a: '100% YES. You retain complete, legal ownership of your domain, content, patient leads, and code base. There are zero hidden lock-ins or surprise hostage fees.',
    },
    {
      q: 'How does the WhatsApp & OPD Appointment Integration work?',
      a: 'When a patient clicks "Book OPD Appointment" or "Ask on WhatsApp", their message auto-populates with their name, preferred date/time, and clinical inquiry, sending it directly to your receptionist or clinic phone for instant 1-click confirmation.',
    },
    {
      q: 'Can my staff update patient photos, timings, or services later?',
      a: 'Yes. We build everything with a clean, intuitive management system. We also provide concise video tutorials so your clinic manager can update services or photos in 2 minutes.',
    },
    {
      q: 'Will my website rank on Google in my local city?',
      a: 'Yes. We bake in core local SEO foundations, medical Schema markup (Specialty, Address, Doctor Credentials, OPD Hours), geotargeted H1/H2 structures, and fast page loading which are key ranking signals for Google Local Search.',
    },
    {
      q: 'What happens after the initial 30 days of Launch Support?',
      a: 'You can host with us on our fast ultra-secure healthcare cloud server or host it on your own server. You are never forced into recurring contracts.',
    },
    {
      q: 'How fast can my new OPD System be live?',
      a: 'Our standard delivery is 15 days from the day we receive your basic clinic details.',
    },
    {
      q: 'What is the "Free Website Growth Audit"?',
      a: 'It is a 20-minute private 1-on-1 strategy call with our Senior Healthcare Strategist. We review your current web presence, identify where you are losing patients to competitors, and show you exact step-by-step layout fixes to double your OPD enquiries.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0F6FFF] selection:text-white">
      {/* Scroll Progress Bar */}
      <div
        className="fixed top-0 left-0 h-1 bg-gradient-to-r from-[#0F6FFF] via-[#00C2A8] to-[#2563EB] z-50 transition-all duration-150"
        style={{ width: `${scrollProgress}%` }}
      />

      {/* Sticky Header Navigation */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-xl border-b border-slate-200/80 transition-all">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
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

          {/* Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
            <a href="#why-fail" className="hover:text-[#0F6FFF] transition-colors">
              Why Websites Fail
            </a>
            <a href="#patient-journey" className="hover:text-[#0F6FFF] transition-colors">
              Patient Journey
            </a>
            <a href="#healthcare-specialties" className="hover:text-[#0F6FFF] transition-colors">
              Specialties
            </a>
            <a href="#solution" className="hover:text-[#0F6FFF] transition-colors">
              The System
            </a>
            <a href="#pricing" className="hover:text-[#0F6FFF] transition-colors">
              Investment
            </a>
            <a href="#faq" className="hover:text-[#0F6FFF] transition-colors">
              FAQ
            </a>
          </nav>

          {/* Header CTA */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="relative inline-flex items-center justify-center px-6 py-2.5 text-sm font-bold text-white transition-all bg-gradient-to-r from-[#0F6FFF] to-[#2563EB] rounded-full shadow-lg shadow-[#0F6FFF]/25 hover:shadow-xl hover:shadow-[#0F6FFF]/40 hover:-translate-y-0.5 active:translate-y-0"
            >
              <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
              Book Free Audit
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-20 md:pt-20 md:pb-28 bg-gradient-to-b from-white via-slate-50 to-blue-50/40">
        {/* Soft Background Accents */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-gradient-to-tr from-blue-200/40 to-teal-200/30 blur-3xl rounded-full pointer-events-none -z-10" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            {/* Left Content Column */}
            <div className="lg:col-span-7 text-center lg:text-left space-y-6">
              {/* Product Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200/80 text-[#0F6FFF] text-xs sm:text-sm font-bold shadow-xs">
                <BadgeCheck className="w-4 h-4 text-[#00C2A8]" />
                <span>The Online OPD Growth System™</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#00C2A8]" />
                <span className="text-slate-500 font-normal">₹49,999 + GST</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Stop Losing Patients to Competitors with Outdated Websites.{' '}
                <span className="bg-gradient-to-r from-[#0F6FFF] via-blue-600 to-[#00C2A8] bg-clip-text text-transparent">
                  Get More Online OPD Appointments.
                </span>
              </h1>

              {/* Subheadline Copy */}
              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A premium, high-converting healthcare website engine engineered to help doctors build trust and get more online OPD appointments.
              </p>

              {/* Dual Action CTAs */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-bold text-white bg-gradient-to-r from-[#0F6FFF] via-blue-600 to-[#2563EB] rounded-2xl shadow-xl shadow-[#0F6FFF]/30 hover:shadow-2xl hover:shadow-[#0F6FFF]/40 hover:-translate-y-1 transition-all duration-200 group"
                >
                  Book Your Free Website Growth Audit
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </button>
                <a
                  href="#solution"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-300 rounded-2xl hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs"
                >
                  Explore How System Works
                </a>
              </div>

              {/* Micro Trust Signals */}
              <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs sm:text-sm text-slate-500 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C2A8]" />
                  <span>Delivered in 15 Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C2A8]" />
                  <span>Zero Tech Skills Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C2A8]" />
                  <span>Trusted by Leading Clinics</span>
                </div>
              </div>
            </div>

            {/* Right Product Demo Mockup */}
            <div className="lg:col-span-5 relative">
              {/* Decorative Glass Card */}
              <div className="relative mx-auto max-w-md lg:max-w-none rounded-3xl bg-white p-4 sm:p-6 shadow-2xl border border-slate-200/80 backdrop-blur-xl">
                {/* Top Clinic Header Mock */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-full bg-blue-100 border-2 border-[#0F6FFF]/30 flex items-center justify-center text-[#0F6FFF] font-bold">
                      Dr
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm sm:text-base">Dr. Rajesh Varma, MD</h4>
                      <p className="text-xs text-slate-500">Senior Specialist</p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-bold rounded-full border border-emerald-200 flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
                    Accepting OPD
                  </span>
                </div>

                {/* Mock UI Banner */}
                <div className="rounded-2xl bg-gradient-to-tr from-slate-900 via-blue-950 to-slate-900 p-5 text-white space-y-3 mb-4 shadow-lg">
                  <div className="flex items-center justify-between text-xs text-blue-300">
                    <span>OPD Consultation Hours</span>
                    <span className="text-emerald-400 font-semibold">Today: 10 AM - 7 PM</span>
                  </div>
                  <p className="text-base sm:text-lg font-bold leading-snug">
                    Instant Online OPD Booking & WhatsApp Report Review
                  </p>
                  <div className="flex gap-2 pt-1">
                    <div className="flex-1 py-2 bg-[#0F6FFF] rounded-xl text-center text-xs font-bold shadow-md">
                      Book Slot (1-Click)
                    </div>
                    <div className="flex-1 py-2 bg-[#00C2A8] rounded-xl text-center text-xs font-bold shadow-md flex items-center justify-center gap-1">
                      <MessageSquare className="w-3.5 h-3.5" />
                      WhatsApp Direct
                    </div>
                  </div>
                </div>

                {/* Floating Metric Badges */}
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-semibold text-slate-500">OPD Conversion</span>
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-xl font-extrabold text-slate-900">+240%</p>
                    <p className="text-[10px] text-emerald-600 font-medium">vs Standard Websites</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-semibold text-slate-500">Page Load Speed</span>
                      <Zap className="w-4 h-4 text-[#0F6FFF]" />
                    </div>
                    <p className="text-xl font-extrabold text-slate-900">0.8 Sec</p>
                    <p className="text-[10px] text-blue-600 font-medium">Ultra Fast Mobile</p>
                  </div>
                </div>

                {/* Patient Social Proof Pill */}
                <div className="mt-4 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600">
                  <div className="flex items-center gap-1 text-amber-500 font-bold">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                    <span className="text-slate-800 ml-1">4.9/5 Trust Rating</span>
                  </div>
                  <span className="text-slate-500">Healthcare Specialized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW SECTION 2: Why Most Clinic Websites Don't Generate Appointments */}
      <section id="why-fail" className="py-20 bg-slate-50 relative border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wide">
              Patient Decision Psychology
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Most Clinic Websites Don&apos;t Generate Appointments
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Patients judge a doctor&apos;s credibility online before ever visiting the clinic. If your website fails to build immediate confidence, they walk away to competitors.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6 mb-12">
            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-all text-center">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold mx-auto">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Look Outdated</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Old design layouts project poor care quality and unmaintained facilities.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-all text-center">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold mx-auto">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Build Little Trust</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Missing doctor qualifications, clear treatment photos, and patient reviews.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-all text-center">
              <div className="w-12 h-12 rounded-2xl bg-orange-50 text-orange-600 flex items-center justify-center font-bold mx-auto">
                <Smartphone className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Are Slow on Mobile</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Sluggish load times frustrate mobile users, forcing 80%+ to press back.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-all text-center">
              <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center font-bold mx-auto">
                <SlidersHorizontal className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Make Booking Difficult</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Hidden contact details and multi-step forms create high booking friction.
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3 hover:shadow-md transition-all text-center">
              <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-600 flex items-center justify-center font-bold mx-auto">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-base font-bold text-slate-900">Miss OPD Conversions</h3>
              <p className="text-slate-600 text-xs leading-relaxed">
                Fails to turn digital visitors into verified patient consultation enquiries.
              </p>
            </div>
          </div>

          <div className="max-w-3xl mx-auto p-6 rounded-2xl bg-blue-50 border border-blue-200/80 text-center">
            <p className="text-base sm:text-lg font-extrabold text-[#0F6FFF]">
              &ldquo;Your website shouldn&apos;t just look good—it should help patients choose your clinic.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* NEW SECTION 3: How Patients Choose a Doctor Today */}
      <section id="patient-journey" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0F6FFF] text-xs font-bold uppercase tracking-wider">
              The Digital Patient Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How Patients Choose a Doctor Today
            </h2>
            <p className="text-slate-600 text-base">
              Every single step in this journey directly influences a patient&apos;s final decision to visit your clinic.
            </p>
          </div>

          {/* Visual Journey Steps */}
          <div className="grid grid-cols-1 md:grid-cols-6 gap-4 relative">
            {patientJourneySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div key={idx} className="flex flex-col items-center text-center relative group">
                  <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center font-bold mb-4 shadow-sm border border-slate-200/60 group-hover:scale-105 transition-transform`}>
                    <Icon className="w-7 h-7" />
                  </div>
                  <span className="text-[10px] font-black uppercase text-slate-400 bg-slate-100 px-2 py-0.5 rounded-full mb-1">
                    Step 0{step.step}
                  </span>
                  <h3 className="text-sm font-extrabold text-slate-900 mb-1">{step.title}</h3>
                  <p className="text-xs text-slate-500 leading-snug">{step.desc}</p>

                  {idx < patientJourneySteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 -right-3 text-slate-300 z-10">
                      <ChevronRight className="w-5 h-5 text-slate-400" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <div className="mt-12 text-center text-sm text-slate-600 font-medium">
            <p>Our system is engineered to eliminate drop-off at every stage of this decision process.</p>
          </div>
        </div>
      </section>

      {/* NEW SECTION 4: Built Specifically for Healthcare */}
      <section id="healthcare-specialties" className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Tailored Medical Architectures
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Built Specifically for Healthcare
            </h2>
            <p className="text-slate-600 text-base">
              The Online OPD Growth System™ is designed around healthcare patient psychology, doctor-patient empathy, and medical trust principles.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {healthcareCategories.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-lg hover:border-[#0F6FFF]/40 transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0F6FFF] flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.label}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-4 py-1.5 rounded-full bg-blue-50 text-[#0F6FFF] text-xs font-bold uppercase tracking-wider border border-blue-200">
              The Complete Healthcare Foundation
            </span>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
              Introducing The Online OPD Growth System™
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              We don&apos;t sell basic websites. We install a modern, high-converting digital acquisition foundation built exclusively for doctors, clinics, and healthcare centers.
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 hover:border-[#0F6FFF]/40 hover:bg-white hover:shadow-xl hover:-translate-y-1 transition-all group"
                >
                  <div className={`w-12 h-12 rounded-2xl ${b.color} flex items-center justify-center mb-5 font-bold transition-transform group-hover:scale-110`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{b.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{b.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* What's Included Comprehensive Feature Breakdown */}
      <section id="whats-included" className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0F6FFF] text-xs font-bold uppercase tracking-wide">
              Complete Deliverable Stack
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Everything Included in The OPD System Package
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Organized into three core pillars: Trust Architecture, Conversion Funnel, and Tech/SEO Infrastructure.
            </p>
          </div>

          <div className="space-y-8">
            {featureCategories.map((cat, idx) => (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6"
              >
                <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                  <div className="w-3 h-3 rounded-full bg-[#0F6FFF]" />
                  <h3 className="text-xl font-extrabold text-slate-900">{cat.name}</h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {cat.items.map((item, i) => (
                    <div
                      key={i}
                      className="flex items-start gap-3 p-3.5 bg-slate-50 rounded-2xl border border-slate-100 hover:bg-blue-50/40 transition-colors"
                    >
                      <CheckCircle2 className="w-5 h-5 text-[#00C2A8] shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Section */}
      <section id="comparison" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
              Side-By-Side Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Generic Web Agency vs. The Online OPD Growth System™
            </h2>
            <p className="text-slate-600">
              See why leading doctors choose our specialized system over generalist marketing agencies.
            </p>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-5 text-sm font-extrabold text-slate-900 w-1/3">Feature & Strategy</th>
                  <th className="p-5 text-sm font-bold text-slate-400 w-1/3 bg-slate-100/50">
                    Generic Agency Website (₹15k - ₹25k)
                  </th>
                  <th className="p-5 text-sm font-extrabold text-[#0F6FFF] w-1/3 bg-blue-50/50">
                    The OPD Growth System™ (₹49,999)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                <tr>
                  <td className="p-5 font-semibold text-slate-900">Industry Positioning</td>
                  <td className="p-5 text-slate-500 bg-slate-50/30">Generic template used for plumbers, cafes & doctors</td>
                  <td className="p-5 text-slate-900 font-bold bg-blue-50/20 text-[#0F6FFF]">
                    100% Medical & Healthcare Specific Positioning
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-slate-900">Copywriting Style</td>
                  <td className="p-5 text-slate-500 bg-slate-50/30">Boring technical jargon copy copy-pasted from Wikipedia</td>
                  <td className="p-5 text-slate-900 font-bold bg-blue-50/20 text-[#0F6FFF]">
                    Direct-Response Patient Psychology Copywriting
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-slate-900">Patient Conversion Engine</td>
                  <td className="p-5 text-slate-500 bg-slate-50/30">Static email form that sends leads to spam folders</td>
                  <td className="p-5 text-slate-900 font-bold bg-blue-50/20 text-[#0F6FFF]">
                    1-Tap WhatsApp & Direct OPD Booking System
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-slate-900">Page Speed Performance</td>
                  <td className="p-5 text-slate-500 bg-slate-50/30">Slow (4-8 seconds loading on mobile)</td>
                  <td className="p-5 text-slate-900 font-bold bg-blue-50/20 text-[#0F6FFF]">
                    Ultra Fast (Sub-second loading on 4G/5G)
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-slate-900">Local SEO & Schema</td>
                  <td className="p-5 text-slate-500 bg-slate-50/30">No Schema, missing local healthcare tags</td>
                  <td className="p-5 text-slate-900 font-bold bg-blue-50/20 text-[#0F6FFF]">
                    Structured Medical Schema & Local Google Maps Setup
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-slate-900">Delivery Speed & Time</td>
                  <td className="p-5 text-slate-500 bg-slate-50/30">Endless back-and-forth lasting 2-3 months</td>
                  <td className="p-5 text-slate-900 font-bold bg-blue-50/20 text-[#0F6FFF]">
                    Done-For-You Delivery in 15 Days
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* NEW SECTIONS 6 & 7: Who This Is Perfect For / NOT For */}
      <section className="py-20 bg-slate-50 relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0F6FFF] text-xs font-bold uppercase tracking-wider">
              Ideal Practice Fit
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Is The OPD Growth System™ Right For Your Practice?
            </h2>
            <p className="text-slate-600">
              We work exclusively with healthcare practice owners committed to building long-term digital authority and patient trust.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Who This Is Perfect For */}
            <div className="bg-white p-8 rounded-3xl border border-emerald-200/80 shadow-md space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Who This Is Perfect For</h3>
                  <p className="text-xs text-slate-500">Ideal healthcare practices</p>
                </div>
              </div>

              <ul className="space-y-4">
                {whoIsPerfectFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-800 font-semibold">
                    <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who This Is NOT For */}
            <div className="bg-white p-8 rounded-3xl border border-red-200/80 shadow-md space-y-6 relative overflow-hidden">
              <div className="flex items-center gap-3 border-b border-slate-100 pb-4">
                <div className="w-10 h-10 rounded-full bg-red-100 text-red-600 flex items-center justify-center font-bold">
                  <XCircle className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-xl font-extrabold text-slate-900">Who This Is NOT For</h3>
                  <p className="text-xs text-slate-500">Unsuitable projects</p>
                </div>
              </div>

              <ul className="space-y-4">
                {whoIsNotFor.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-slate-800 font-semibold">
                    <XCircle className="w-5 h-5 text-red-500 shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Real Verified Client Reviews Section */}
      <section className="py-20 bg-white relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              5.0 ★ Verified Doctor Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Doctors & Multispecialty Hospitals
            </h2>
            <p className="text-slate-600">
              Read direct feedback from healthcare professionals and hospital directors working with Jaydeep Kataria & the Epsilon team.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Devam Dave - Shreeji Multispecialty hospital */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-emerald-500 font-bold text-sm items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-emerald-500" />
                      ))}
                    </div>
                    <span className="ml-1 text-slate-900 font-extrabold">5.0</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">Verified Google Review</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;Mr Jaydeep is well experienced in Digital marketing. Shreeji Multispecialty hospital tie up with Epsilon for last couple of years. He help us in patient&apos;s foot fall. Highly recommend for social media & Website development 👍&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80">
                <div className="w-10 h-10 rounded-full bg-blue-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                  DD
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Devam Dave</h4>
                  <p className="text-xs text-[#0F6FFF] font-semibold">Shreeji Multispecialty Hospital</p>
                </div>
              </div>
            </div>

            {/* dr. hiral */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-emerald-500 font-bold text-sm items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-emerald-500" />
                      ))}
                    </div>
                    <span className="ml-1 text-slate-900 font-extrabold">5.0</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">Verified Google Review</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;Epsilon Technology is a one-stop solution for all digital marketing needs. From managing our social media to providing bulk WhatsApp and email tools, they&apos;ve helped our business scale like never before. Their attention to detail and results-oriented approach set them apart!&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80">
                <div className="w-10 h-10 rounded-full bg-emerald-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                  DH
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">dr. hiral</h4>
                  <p className="text-xs text-slate-500 font-medium">Doctor & Practice Owner</p>
                </div>
              </div>
            </div>

            {/* healthcare physiotherapy clinic */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-emerald-500 font-bold text-sm items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-emerald-500" />
                      ))}
                    </div>
                    <span className="ml-1 text-slate-900 font-extrabold">5.0</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">Verified Google Review</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;I went forward with online marketing for my clinic. I received a very great experience with the services provided by epsilon&apos;s team. They provided very accurate approach and also gave good ideas and guidance for how to go forward. Thank you so much jaydeepbhai and team.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80">
                <div className="w-10 h-10 rounded-full bg-teal-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                  HP
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Healthcare Physiotherapy Clinic</h4>
                  <p className="text-xs text-slate-500 font-medium">Physiotherapy Specialist</p>
                </div>
              </div>
            </div>

            {/* Dr VORA */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-emerald-500 font-bold text-sm items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-emerald-500" />
                      ))}
                    </div>
                    <span className="ml-1 text-slate-900 font-extrabold">5.0</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">2+ Years Client</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;Excellent work. Working with this guys for 2 years.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80">
                <div className="w-10 h-10 rounded-full bg-indigo-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                  DV
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Dr. Vora</h4>
                  <p className="text-xs text-slate-500 font-medium">Long-term Client</p>
                </div>
              </div>
            </div>

            {/* Dr Dharmesh */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="flex text-emerald-500 font-bold text-sm items-center gap-1">
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current text-emerald-500" />
                      ))}
                    </div>
                    <span className="ml-1 text-slate-900 font-extrabold">5.0</span>
                  </div>
                  <span className="text-[11px] text-slate-400 font-medium">Verified Review</span>
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;Expert and easy to work with. Thoroughly enjoyed working with Mr Jaydeep and team.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-200/80">
                <div className="w-10 h-10 rounded-full bg-amber-600 text-white font-bold flex items-center justify-center text-sm shadow-sm">
                  DD
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Dr. Dharmesh</h4>
                  <p className="text-xs text-slate-500 font-medium">Doctor & Practice Owner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section Timeline */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold uppercase rounded-full border border-blue-500/30">
              15-Day Done-For-You Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Discovery to Live OPD Appointments in 15 Days
            </h2>
            <p className="text-slate-400">
              A frictionless execution methodology designed specifically around your busy clinical schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 space-y-4 relative flex flex-col justify-between hover:border-[#0F6FFF] transition-colors"
              >
                <div>
                  <span className="text-3xl font-black text-[#0F6FFF] block mb-2">{step.step}</span>
                  <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 px-2 py-0.5 bg-slate-700 rounded-md">
                    {step.time}
                  </span>
                  <h3 className="text-lg font-bold text-white mt-3 mb-2">{step.title}</h3>
                  <p className="text-slate-300 text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RENAMED SECTION 1: Pricing -> Your Investment in Practice Growth */}
      <section id="pricing" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 text-white p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F6FFF]/20 blur-3xl rounded-full pointer-events-none" />

            <div className="text-center max-w-2xl mx-auto mb-10 space-y-3">
              <span className="px-3.5 py-1.5 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase border border-blue-500/30">
                Transparent All-Inclusive
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Your Investment in Practice Growth
              </h2>
              <div className="pt-2">
                <span className="text-4xl sm:text-5xl font-black text-white">₹49,999</span>
                <span className="text-base text-slate-400 font-semibold ml-2">+ GST</span>
              </div>
              <p className="text-sm text-[#00C2A8] font-extrabold flex items-center justify-center gap-1">
                <Clock className="w-4 h-4" /> Delivered in 15 Days
              </p>
            </div>

            {/* Premium Value Stack */}
            <div className="bg-slate-800/80 p-6 sm:p-8 rounded-3xl border border-slate-700 space-y-6 mb-8 backdrop-blur-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 text-center">
                Included Premium Value Stack
              </h3>

              <div className="grid sm:grid-cols-2 gap-3.5">
                {investmentValueStack.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-700/60">
                    <CheckCircle2 className="w-5 h-5 text-[#00C2A8] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 text-center border-t border-slate-700/80">
                <p className="text-sm sm:text-base font-bold text-slate-200">
                  &ldquo;Everything your clinic needs to build trust online and make it easier for patients to book appointments.&rdquo;
                </p>
              </div>
            </div>

            {/* CTA Trigger */}
            <div className="text-center space-y-4">
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-4 text-lg font-bold text-white bg-gradient-to-r from-[#0F6FFF] via-blue-600 to-[#00C2A8] rounded-2xl shadow-xl shadow-[#0F6FFF]/30 hover:shadow-2xl hover:scale-105 transition-all"
              >
                Book Your Free Website Growth Audit
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
              <div className="flex items-center justify-center gap-2 text-xs text-slate-400">
                <ShieldCheck className="w-4 h-4 text-emerald-400" />
                <span>Zero Risk • Done-For-You Execution</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Accordion Section */}
      <section id="faq" className="py-20 bg-slate-50 relative">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0F6FFF] text-xs font-bold uppercase tracking-wider">
              Got Questions?
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions by Doctors
            </h2>
            <p className="text-slate-600">
              Clear, transparent answers to help you make an informed decision for your medical practice.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs transition-all"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : idx)}
                    className="w-full p-6 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                  >
                    <span className="font-bold text-slate-900 text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0F6FFF] shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180' : ''
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

      {/* SECTION 8: Strengthened Final CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="w-16 h-16 rounded-3xl bg-[#0F6FFF]/20 text-[#00C2A8] flex items-center justify-center mx-auto border border-[#0F6FFF]/30">
            <Stethoscope className="w-8 h-8" />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-relaxed">
              &ldquo;Your next patient will search online before they visit your clinic.&rdquo;
            </h2>
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Make sure they find a website that builds confidence, answers their questions, and makes booking an appointment effortless.
            </p>
          </div>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-[#0F6FFF] via-blue-600 to-[#00C2A8] rounded-2xl shadow-2xl shadow-[#0F6FFF]/40 hover:scale-105 transition-all"
            >
              Book Your Free Website Growth Audit
              <ArrowRight className="w-5 h-5 ml-2" />
            </button>
          </div>

          <p className="text-xs text-slate-400 font-medium">
            Zero pressure • 100% actionable medical marketing insight • 20 mins total
          </p>
        </div>
      </section>

      {/* Floating Action Buttons */}
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
                    <span>Free 1-on-1 Strategy Session</span>
                  </div>
                  <h3 className="text-2xl font-extrabold text-slate-900">
                    Book Your Website Growth Audit
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Fill in your details below to schedule your 20-minute consultation.
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
                      placeholder="e.g. Dr. Rajesh Patel"
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
                    Confirm & Select Audit Time Slot
                  </button>
                </form>
              </div>
            ) : (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">Request Confirmed!</h3>
                <p className="text-sm text-slate-600">
                  Redirecting you to our live calendar to choose your preferred 20-minute time slot...
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
