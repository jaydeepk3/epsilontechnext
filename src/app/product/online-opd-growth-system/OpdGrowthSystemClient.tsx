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
} from 'lucide-react';

export default function OpdGrowthSystemClient() {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'all' | 'trust' | 'conversion' | 'tech'>('all');

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

  const specialties = [
    { label: 'Doctors & Specialists', icon: Stethoscope },
    { label: 'Clinics & PolyClinics', icon: Building2 },
    { label: 'Dental Clinics', icon: Sparkles },
    { label: 'Skin & Cosmetic Clinics', icon: UserCheck },
    { label: 'IVF & Maternity Centers', icon: Users },
    { label: 'Eye Hospitals', icon: Target },
    { label: 'Orthopedic & Joint Care', icon: ShieldCheck },
    { label: 'Physiotherapy Clinics', icon: TrendingUp },
    { label: 'Multispecialty Hospitals', icon: Building2 },
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
      desc: 'We handle everything from domain setup, cloud server hosting, SSL security, content layout to final launch in 7-10 days.',
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
      time: 'Day 1 - 2',
    },
    {
      step: '02',
      title: 'High-Trust Content & Architecture',
      desc: 'Our direct-response healthcare copywriters build patient-centered text that resolves doubts and builds immediate authority.',
      time: 'Day 3 - 4',
    },
    {
      step: '03',
      title: 'Bespoke Modern Design & UI',
      desc: 'Crafting award-winning, clean SaaS-inspired UI customized with your clinic branding, color scheme, and doctor profiles.',
      time: 'Day 5 - 7',
    },
    {
      step: '04',
      title: 'Engineered Development & Speed Polish',
      desc: 'Building high-performance React/Next code with sub-second page loads, SEO schemas, and mobile responsiveness.',
      time: 'Day 8 - 9',
    },
    {
      step: '05',
      title: 'Launch & OPD Growth Engine Activation',
      desc: 'Final security audits, domain linking, WhatsApp & Analytics setup, and handing over a fully operational OPD pipeline.',
      time: 'Day 10',
    },
  ];

  const bonuses = [
    {
      title: 'Google Business Profile OPD Optimization Framework',
      value: '₹15,000 Value',
      desc: 'Complete optimization of your Google Maps listing to boost local map pack rankings and drive organic walk-in calls.',
      icon: Search,
    },
    {
      title: 'WhatsApp OPD Automated Greeting & Patient Flow Kit',
      value: '₹10,000 Value',
      desc: 'Pre-written scripts and automated WhatsApp message flows for fast patient response and appointment confirmation.',
      icon: MessageSquare,
    },
    {
      title: 'Print-Ready Patient Review QR Code Kit',
      value: '₹7,500 Value',
      desc: 'Custom designed high-resolution QR stands for your clinic reception to easily collect 5-star Google patient reviews.',
      icon: Star,
    },
    {
      title: '30-Day VIP Priority Technical Support & Maintenance',
      value: '₹12,500 Value',
      desc: 'Direct dedicated access to our engineering team for any content updates, tweaks, or technical assistance post-launch.',
      icon: ShieldCheck,
    },
  ];

  const faqs = [
    {
      q: 'Why is this priced at ₹49,999 when generic agencies offer websites for ₹10,000?',
      a: 'A ₹10,000 website is a digital business card that sits idle on the web and fails to convert visitors into patients. The Online OPD Growth System™ is a specialized healthcare appointment acquisition engine. It includes professional medical copywriting, psychological trust architecture, direct WhatsApp flows, 95+ speed performance, local SEO schemas, and done-for-you launch. A single additional surgery or 5 extra OPD patients a month completely pays back your investment.',
    },
    {
      q: 'How much time will I need to invest as a busy practicing doctor?',
      a: 'Less than 45 minutes total. We respect your medical schedule. You simply fill out our 10-minute practice intake form or share existing brochures/photos. Our healthcare content and engineering team handles 98% of the heavy lifting, presentation, copywriting, and technical setup.',
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
      q: 'What happens after the initial 30 days of VIP Support?',
      a: 'You can host with us on our fast ultra-secure healthcare cloud server (optional ₹4,999/year including SSL and backups) or host it on your own server. You are never forced into recurring contracts.',
    },
    {
      q: 'How fast can my new OPD System be live?',
      a: 'Our standard turnaround is 7 to 10 working days from the day we receive your basic clinic details.',
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
            <a href="#problem" className="hover:text-[#0F6FFF] transition-colors">
              Why Websites Fail
            </a>
            <a href="#solution" className="hover:text-[#0F6FFF] transition-colors">
              The System
            </a>
            <a href="#whats-included" className="hover:text-[#0F6FFF] transition-colors">
              What&apos;s Included
            </a>
            <a href="#comparison" className="hover:text-[#0F6FFF] transition-colors">
              Comparison
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
                <span className="text-slate-500 font-normal">₹49,999 All-Inclusive</span>
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
                A premium, high-converting healthcare website engine engineered to build instant patient trust, showcase doctor authority, and convert digital traffic into booked OPD appointments.
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
                  <span>Done-For-You in 7-10 Days</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C2A8]" />
                  <span>Zero Tech Skills Required</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C2A8]" />
                  <span>Trusted by 50+ Doctors</span>
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
                      <p className="text-xs text-slate-500">Senior Cardiology Specialist</p>
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
                      <span className="text-[11px] font-semibold text-slate-500">OPD Conversion Rate</span>
                      <TrendingUp className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-xl font-extrabold text-slate-900">+240%</p>
                    <p className="text-[10px] text-emerald-600 font-medium">vs Standard Websites</p>
                  </div>
                  <div className="p-3 bg-slate-50 rounded-2xl border border-slate-200/70">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-semibold text-slate-500">Page Load Time</span>
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
                  <span className="text-slate-500">50+ Clinics Transformed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Healthcare Categories */}
      <section className="py-10 bg-white border-y border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-xs font-bold uppercase tracking-widest text-slate-400 mb-6">
            Engineered Specifically For Busy Healthcare Professionals & Practice Owners
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
            {specialties.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="flex flex-col items-center justify-center p-3 rounded-2xl bg-slate-50 border border-slate-200/60 text-center hover:border-[#0F6FFF]/40 hover:bg-blue-50/30 transition-all group"
                >
                  <Icon className="w-5 h-5 text-slate-500 group-hover:text-[#0F6FFF] mb-2 transition-colors" />
                  <span className="text-xs font-semibold text-slate-700 leading-tight">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Problem Section: Why Most Clinic Websites Fail */}
      <section id="problem" className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-red-100 text-red-700 text-xs font-bold uppercase tracking-wide">
              The Reality Check
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why 90% of Clinic Websites Lose OPD Patients Every Single Day
            </h2>
            <p className="text-base sm:text-lg text-slate-600">
              Patients today judge your clinical expertise and medical authority within 3 seconds of visiting your website. If your site looks outdated, slow, or generic, they hit back and book with your competitor.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-red-50 text-red-600 flex items-center justify-center font-bold">
                <XCircle className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Zero Patient Trust Signals</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Generic stock images, hidden doctor qualifications, missing patient reviews, and static brochures fail to reassure anxious patients looking for an expert doctor.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-600 flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Slow & Broken Mobile Experience</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Over 85% of local patient searches happen on mobile phones. Clunky layouts, tiny text, and slow loading force patients to abandon your clinic website immediately.
              </p>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center font-bold">
                <SlidersHorizontal className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900">Frictionful OPD Booking Flow</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                No direct WhatsApp routing, hidden clinic phone numbers, and complicated multi-step forms create high friction, killing your online appointment conversion rate.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pain Amplification Section */}
      <section className="py-16 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <span className="px-3.5 py-1 bg-red-500/20 text-red-300 text-xs font-bold uppercase rounded-full border border-red-500/30">
                Hidden Cost of Inaction
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                An Outdated Website Costs You Lakhs in Lost OPD Consultations Every Month
              </h2>
              <p className="text-slate-300 text-base leading-relaxed">
                While you are busy caring for patients in your clinic, local patients are actively searching Google for specialists in your city. If your digital front door isn’t performing, those high-value patients are quietly walking into rival practices.
              </p>
              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs mt-0.5">
                    ✕
                  </div>
                  <span className="text-slate-300 text-sm">
                    <strong>Empty OPD Slots:</strong> High overhead costs with unfilled consultation hours.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs mt-0.5">
                    ✕
                  </div>
                  <span className="text-slate-300 text-sm">
                    <strong>Competitor Dominance:</strong> Competitors ranking higher on Google Maps and Google Search.
                  </span>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center font-bold text-xs mt-0.5">
                    ✕
                  </div>
                  <span className="text-slate-300 text-sm">
                    <strong>Over-reliance on Referrals:</strong> Vulnerable practice revenue depending only on word-of-mouth.
                  </span>
                </div>
              </div>
            </div>

            {/* High Impact Visual Card */}
            <div className="bg-slate-800/80 p-8 rounded-3xl border border-slate-700/80 backdrop-blur-xl space-y-6">
              <div className="flex items-center justify-between border-b border-slate-700 pb-4">
                <span className="text-sm font-bold text-slate-400 uppercase tracking-wider">
                  The Revenue Opportunity Gap
                </span>
                <span className="text-xs px-2.5 py-1 bg-red-500/20 text-red-400 font-semibold rounded-full">
                  Leaking Revenue
                </span>
              </div>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-300">Generic Agency Website</span>
                    <span className="text-red-400">12% OPD Enquiry Conversion</span>
                  </div>
                  <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
                    <div className="bg-red-500 h-full w-[12%]" />
                  </div>
                </div>

                <div>
                  <div className="flex justify-between text-xs font-semibold mb-1">
                    <span className="text-slate-300">Online OPD Growth System™</span>
                    <span className="text-[#00C2A8]">48% OPD Enquiry Conversion</span>
                  </div>
                  <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
                    <div className="bg-gradient-to-r from-[#0F6FFF] to-[#00C2A8] h-full w-[48%]" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-900/80 rounded-2xl border border-slate-700 text-center">
                <p className="text-xs text-slate-400 mb-1">Estimated Net Return on System Investment</p>
                <p className="text-2xl font-extrabold text-white">4x to 10x ROI in 90 Days</p>
              </div>
            </div>
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
              Everything Included in The ₹49,999 Package
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
                  <td className="p-5 font-semibold text-slate-900">Doctor Time Commitment</td>
                  <td className="p-5 text-slate-500 bg-slate-50/30">Hours of endless meetings, content writing & back-and-forth</td>
                  <td className="p-5 text-slate-900 font-bold bg-blue-50/20 text-[#0F6FFF]">
                    Done-For-You (Less than 45 mins total doctor time)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Process Section Timeline */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold uppercase rounded-full border border-blue-500/30">
              5-Step Done-For-You Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Discovery to Live OPD Appointments in 10 Days
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

      {/* Bonus Stack Section */}
      <section className="py-20 bg-gradient-to-b from-blue-50/50 to-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wide">
              Included Fast-Action Bonuses
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Get ₹45,000 Worth of OPD Growth Assets Included Free
            </h2>
            <p className="text-slate-600">
              When you order your Online OPD Growth System™ today, you get our complete medical practice acceleration stack.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {bonuses.map((b, idx) => {
              const Icon = b.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-slate-200 shadow-md space-y-4 relative flex flex-col justify-between hover:shadow-xl transition-all"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-xs font-extrabold text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-200">
                        {b.value}
                      </span>
                    </div>
                    <h3 className="text-base font-bold text-slate-900 mb-2">{b.title}</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">{b.desc}</p>
                  </div>
                  <div className="pt-2 text-[11px] font-bold text-emerald-600 flex items-center gap-1">
                    <CheckCircle2 className="w-3.5 h-3.5" /> Included Free in ₹49,999 Stack
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Doctor Testimonials / Case Studies */}
      <section className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0F6FFF] text-xs font-bold uppercase tracking-wider">
              Doctor Case Studies
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Trusted by Leading Doctors & Practice Owners
            </h2>
            <p className="text-slate-600">
              Here is what practicing doctors experience after upgrading to The Online OPD Growth System™.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;Before Epsilon built our OPD System, we relied completely on word-of-mouth. Within 30 days of launch, our online WhatsApp enquiries jumped 3x. Highly recommended for busy doctors.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-blue-100 text-[#0F6FFF] font-bold flex items-center justify-center text-sm">
                  Dr
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Dr. Amit Patel</h4>
                  <p className="text-xs text-slate-500">Orthopedic Surgeon, Gujarat</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;The mobile speed and WhatsApp direct booking flow are game changers. Patients continuously compliment our clinic&apos;s clean online presentation.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-teal-100 text-[#00C2A8] font-bold flex items-center justify-center text-sm">
                  Dr
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Dr. Neha Shah</h4>
                  <p className="text-xs text-slate-500">Dermatologist & Laser Specialist</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
              <div className="space-y-3">
                <div className="flex text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 text-sm leading-relaxed italic">
                  &ldquo;They handled everything from copywriting to local Google Maps optimization. I only spent 30 minutes in total. Outstanding ROI for our hospital.&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                <div className="w-10 h-10 rounded-full bg-indigo-100 text-indigo-600 font-bold flex items-center justify-center text-sm">
                  Dr
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Dr. K. Mehta</h4>
                  <p className="text-xs text-slate-500">Director, IVF & Women Care Center</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing & Offer Section */}
      <section id="pricing" className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 text-white p-8 sm:p-12 shadow-2xl border border-slate-800 relative overflow-hidden">
            {/* Background Glow */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#0F6FFF]/20 blur-3xl rounded-full pointer-events-none" />

            <div className="grid lg:grid-cols-12 gap-8 items-center">
              {/* Offer Info */}
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase border border-blue-500/30">
                  <Sparkles className="w-3.5 h-3.5 text-[#00C2A8]" />
                  <span>Transparent Complete Package</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                  The Online OPD Growth System™
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                  Everything you need to turn digital search traffic into predictable, high-value OPD patient appointments. Zero hidden charges.
                </p>

                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#00C2A8]" />
                    <span>Complete Done-For-You Medical Website Engine</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#00C2A8]" />
                    <span>Direct-Response Healthcare Copywriting</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#00C2A8]" />
                    <span>1-Tap WhatsApp & Phone Booking System</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-slate-200">
                    <CheckCircle2 className="w-5 h-5 text-[#00C2A8]" />
                    <span>All 4 Bonuses Included Free (₹45,000 Value)</span>
                  </div>
                </div>
              </div>

              {/* Price Action Box */}
              <div className="lg:col-span-5 bg-slate-800/90 p-8 rounded-3xl border border-slate-700 text-center space-y-6 backdrop-blur-xl">
                <div>
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block mb-1">
                    One-Time Investment
                  </span>
                  <div className="flex items-center justify-center gap-2">
                    <span className="text-4xl sm:text-5xl font-black text-white">₹49,999</span>
                    <span className="text-xs text-slate-400 font-semibold align-bottom">
                      INR + GST
                    </span>
                  </div>
                  <p className="text-[11px] text-emerald-400 font-medium mt-1">
                    No Monthly Software Subscription Fees
                  </p>
                </div>

                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full py-4 px-6 text-base font-bold text-white bg-gradient-to-r from-[#0F6FFF] via-blue-600 to-[#00C2A8] rounded-2xl shadow-xl shadow-[#0F6FFF]/30 hover:shadow-2xl hover:scale-[1.02] transition-all"
                >
                  Book Free Growth Audit
                </button>

                <div className="pt-2 text-slate-400 text-xs flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-400" />
                  <span>100% Satisfaction & Speed Guarantee</span>
                </div>
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

      {/* Emotional Final CTA Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="w-16 h-16 rounded-3xl bg-[#0F6FFF]/20 text-[#00C2A8] flex items-center justify-center mx-auto border border-[#0F6FFF]/30">
            <Stethoscope className="w-8 h-8" />
          </div>

          <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Ready to Build Immediate Patient Trust & Fill Your OPD Schedule?
          </h2>

          <p className="text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Schedule a free 20-minute Website Growth Audit with our senior healthcare team. We will show you exact layout fixes to turn your online presence into a high-converting patient acquisition engine.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={() => setIsModalOpen(true)}
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-lg font-bold text-white bg-gradient-to-r from-[#0F6FFF] via-blue-600 to-[#00C2A8] rounded-2xl shadow-2xl shadow-[#0F6FFF]/40 hover:scale-105 transition-all"
            >
              Book Your Free Website Growth Audit Now
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
