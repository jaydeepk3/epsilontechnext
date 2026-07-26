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
  Bot,
  Cpu,
  FileText,
  Layout,
  Image as ImageIcon,
  CheckSquare,
  Sparkle,
  Layers,
  Activity,
  Play,
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
      const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
      setScrollProgress(progress);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => {
      window.open('https://calendly.com/jaydeepkataria/30min', '_blank');
    }, 1500);
  };

  // Step 2: Patient Journey Steps
  const patientJourneySteps = [
    { step: '1', title: 'Patient searches Google', desc: 'Looks for trusted doctors or specialists nearby', icon: Search, color: 'bg-blue-50 text-[#0F6FFF]' },
    { step: '2', title: 'Finds your clinic', desc: 'Discovers your online presence in local results', icon: Building2, color: 'bg-indigo-50 text-indigo-600' },
    { step: '3', title: 'Visits your website', desc: 'Forms a critical first impression within seconds', icon: Globe, color: 'bg-[#00C2A8]/10 text-[#00C2A8]' },
    { step: '4', title: 'Learns about your expertise', desc: 'Reviews qualifications, background & clinical focus', icon: User, color: 'bg-amber-50 text-amber-600' },
    { step: '5', title: 'Builds trust', desc: 'Sees verified credentials, patient stories & awards', icon: ShieldCheck, color: 'bg-emerald-50 text-emerald-600' },
    { step: '6', title: 'Views treatments', desc: 'Understands procedures & care facilities offered', icon: Activity, color: 'bg-cyan-50 text-cyan-600' },
    { step: '7', title: 'Clicks WhatsApp or Appointment', desc: 'Takes direct 1-click action without friction', icon: MessageSquare, color: 'bg-purple-50 text-purple-600' },
    { step: '8', title: 'Visits your clinic', desc: 'Arrives confident for their in-person consultation', icon: UserCheck, color: 'bg-blue-50 text-blue-600' },
    { step: '9', title: 'Becomes a loyal patient', desc: 'Recommends your practice to family & friends', icon: Star, color: 'bg-amber-50 text-amber-600' },
  ];

  // Step 3: Digital Reputation Cards
  const reputationCards = [
    { title: 'Qualifications', desc: 'Present your degrees, fellowships & medical training with clear authority.', icon: Award, color: 'bg-blue-500/10 text-[#0F6FFF]' },
    { title: 'Experience', desc: 'Highlight years of clinical practice, surgical milestones & expertise.', icon: Clock, color: 'bg-emerald-500/10 text-[#00C2A8]' },
    { title: 'Awards', desc: 'Showcase medical recognitions, honors & professional accreditations.', icon: BadgeCheck, color: 'bg-amber-500/10 text-amber-600' },
    { title: 'Media', desc: 'Feature newspaper articles, health talks, TV segments & published research.', icon: FileText, color: 'bg-purple-500/10 text-purple-600' },
    { title: 'Testimonials', desc: 'Build confidence through authentic patient experiences and reviews.', icon: ThumbsUp, color: 'bg-teal-500/10 text-teal-600' },
    { title: 'Clinic Gallery', desc: 'Help patients feel familiar with your clinic environment before they arrive.', icon: ImageIcon, color: 'bg-indigo-500/10 text-indigo-600' },
    { title: 'Treatment Expertise', desc: 'Communicate specialized procedures and care approaches in reassuring detail.', icon: Stethoscope, color: 'bg-cyan-500/10 text-cyan-600' },
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

  // Step 4: Perfect For Categories
  const perfectForCategories = [
    { label: 'Solo Doctors', desc: 'Establish an independent digital identity & practice authority', icon: User },
    { label: 'New Clinics', desc: 'Build immediate trust in your local community from day one', icon: Sparkles },
    { label: 'Growing Clinics', desc: 'Upgrade your web presence to match your expanding practice', icon: TrendingUp },
    { label: 'Dental Clinics', desc: 'Showcase smile transformations & comfortable appointment flows', icon: Sparkle },
    { label: 'Skin Clinics', desc: 'Present dermatology procedures, safety standards & patient trust', icon: UserCheck },
    { label: 'Eye Clinics', desc: 'Highlight surgical precision, cataract/LASIK care & technology', icon: Target },
    { label: 'IVF Centres', desc: 'Build an empathetic, high-trust environment for fertility journeys', icon: Users },
    { label: 'Hospitals', desc: 'Clear departmental hierarchy, doctor profiles & emergency contact', icon: Building2 },
    { label: 'Physiotherapy Clinics', desc: 'Present rehabilitation programs, recovery stories & direct booking', icon: ShieldCheck },
  ];

  // Step 5: AI Features
  const aiFeatures = [
    { title: 'AI FAQ Assistant', desc: 'Instantly answers common patient questions about timings, prep, & location.', icon: Bot },
    { title: 'AI Chat Support', desc: 'Provides 24/7 intelligent patient query assistance for clinic services.', icon: MessageSquare },
    { title: 'AI-Assisted Appointment Routing', desc: 'Guides patients to the right specialty or contact channel seamlessly.', icon: Cpu },
    { title: 'AI-Ready Content Structure', desc: 'Organized data layout optimized for modern AI voice & search assistants.', icon: Layers },
    { title: 'AI-Friendly SEO', desc: 'Structured medical schema prepared for next-generation search engines.', icon: Search },
  ];

  // Step 9: Why Doctors Choose Us
  const whyDoctorsChooseUs = [
    { title: 'We understand healthcare.', desc: 'We know how patients think when searching for medical care.', icon: Stethoscope },
    { title: 'We understand patient trust.', desc: 'Every element is crafted to reassure anxious patients.', icon: ShieldCheck },
    { title: 'We understand clinic branding.', desc: 'We reflect your professional clinical reputation online.', icon: Award },
    { title: 'We understand doctor discovery.', desc: 'We align with how modern patients search & choose doctors online.', icon: Search },
    { title: 'We design around these principles.', desc: 'No generic templates—only purpose-built healthcare frameworks.', icon: Layout },
  ];

  // Step 11: Feature to Doctor Benefit Translations
  const doctorBenefits = [
    { feature: 'Doctor Profile', benefit: 'Showcase your expertise before the first consultation.', icon: User },
    { feature: 'WhatsApp Integration', benefit: 'Make it effortless for patients to contact your clinic.', icon: MessageSquare },
    { feature: 'Appointment Form', benefit: 'Reduce friction for patients who are ready to book.', icon: Calendar },
    { feature: 'Clinic Gallery', benefit: 'Help patients feel familiar with your clinic before they arrive.', icon: ImageIcon },
    { feature: 'Patient Testimonials', benefit: 'Build confidence through real patient experiences.', icon: ThumbsUp },
    { feature: 'SEO Foundation', benefit: 'Make it easier for potential patients to discover your clinic online.', icon: Search },
  ];

  // Step 7: Investment Outcomes Stack
  const investmentOutcomes = [
    'Professional Digital Identity',
    'Premium Clinic Branding',
    'Patient Trust Framework',
    'Appointment Booking Experience',
    'WhatsApp Integration',
    'Google Visibility Foundation',
    'Analytics Setup',
    'Technical Optimisation',
    'Launch Support',
  ];

  // FAQs including Step 6 (AI Objection FAQ)
  const faqs = [
    {
      q: 'AI can build websites. Why should I invest ₹49,999?',
      a: 'AI can generate pages. It cannot understand healthcare positioning, patient trust psychology, clinic branding, conversion strategy, technical implementation, accessibility, performance optimisation, analytics setup, or launch support. Our system combines AI efficiency with healthcare expertise and human implementation to create a professional website designed around patient trust and appointment conversion.',
    },
    {
      q: 'Why is this priced at ₹49,999 when generic agencies offer websites for ₹10,000?',
      a: 'A generic ₹10,000 website is usually a template that fails to build patient trust or guide visitors to book appointments. The Online OPD Growth System™ is engineered specifically for healthcare. It includes professional medical copywriting, patient trust architecture, direct WhatsApp routing, sub-second mobile performance, local SEO schemas, and complete done-for-you implementation.',
    },
    {
      q: 'How much time will I need to invest as a busy practicing doctor?',
      a: 'Less than 45 minutes total. We respect your clinical schedule. You simply share basic clinic details or brochures. Our healthcare content and engineering team handles 98% of the heavy lifting, presentation, copywriting, and technical setup.',
    },
    {
      q: 'Is this system suitable for my specific medical specialty?',
      a: 'Yes! We have specialized layout structures for Dental, Dermatology, IVF & Maternity, Orthopedics, Eye Hospitals, Physiotherapy, General Surgery, and Multispecialty Centers. The content and trust modules are tailored to your exact clinical scope.',
    },
    {
      q: 'Do I get complete ownership of my website and domain?',
      a: '100% YES. You retain complete, legal ownership of your domain, website content, patient leads, and assets. There are zero hidden lock-ins.',
    },
    {
      q: 'How does the WhatsApp & Appointment Integration work?',
      a: 'When a patient clicks "Book Appointment" or "Ask on WhatsApp", their message auto-populates with their query and preferred time, sending it directly to your reception or clinic staff for easy confirmation.',
    },
    {
      q: 'Will my website rank on Google in my local city?',
      a: 'Yes. We include local SEO foundations, medical Schema markup (Specialty, Address, Credentials, OPD Hours), geotargeted structures, and fast page loading which support local Google visibility.',
    },
    {
      q: 'What happens after the initial 30 days of Launch Support?',
      a: 'You can host with us on our fast, secure healthcare cloud server or host it on your own server. You are never tied to recurring contracts.',
    },
    {
      q: 'How fast can my new website be live?',
      a: 'Our standard delivery is 15 days from the day we receive your basic clinic details.',
    },
    {
      q: 'What is the "Free Website Growth Audit"?',
      a: 'It is a 20-minute private 1-on-1 strategy call with our Senior Healthcare Strategist. We review your current online presence, identify where potential patients might drop off, and share clear recommendations to strengthen patient trust and appointment inquiries.',
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
            <a href="#patient-journey" className="hover:text-[#0F6FFF] transition-colors">
              Patient Journey
            </a>
            <a href="#reputation" className="hover:text-[#0F6FFF] transition-colors">
              Digital Reputation
            </a>
            <a href="#doctor-reels" className="hover:text-[#0F6FFF] transition-colors">
              Doctor Reels
            </a>
            <a href="#perfect-for" className="hover:text-[#0F6FFF] transition-colors">
              Perfect For
            </a>
            <a href="#ai-section" className="hover:text-[#0F6FFF] transition-colors">
              AI Features
            </a>
            <a href="#why-choose-us" className="hover:text-[#0F6FFF] transition-colors">
              Why Choose Us
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
      <section className="relative overflow-hidden pt-12 pb-16 md:pt-20 md:pb-24 bg-gradient-to-b from-white via-slate-50 to-blue-50/40">
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
                Build Immediate Patient Trust Online.{' '}
                <span className="bg-gradient-to-r from-[#0F6FFF] via-blue-600 to-[#00C2A8] bg-clip-text text-transparent">
                  Make Appointment Booking Effortless.
                </span>
              </h1>

              {/* Subheadline Copy */}
              <p className="text-lg sm:text-xl text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto lg:mx-0">
                A professional healthcare website system engineered to showcase your clinical expertise, strengthen digital reputation, and help patients confidently contact your practice.
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
                  href="#patient-journey"
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-slate-700 bg-white border border-slate-300 rounded-2xl hover:bg-slate-50 hover:border-slate-400 transition-all shadow-xs"
                >
                  See How It Works
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
                  <span>Zero Tech Headaches</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#00C2A8]" />
                  <span>Designed Exclusively for Doctors</span>
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
                    Frictionless Appointment Booking & Direct WhatsApp Consultation
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
                      <span className="text-[11px] font-semibold text-slate-500">Patient Trust</span>
                      <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    </div>
                    <p className="text-xl font-extrabold text-slate-900">Verified</p>
                    <p className="text-[10px] text-emerald-600 font-medium">Clear Qualifications & Media</p>
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
                    <span className="text-slate-800 ml-1">5.0 Star Doctor Rating</span>
                  </div>
                  <span className="text-slate-500">Healthcare Specialized</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ITEM 1: REMOVE THE BIGGEST CONFUSION - Immediately Below Hero */}
      <section className="py-8 bg-blue-600 text-white relative shadow-inner">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-blue-100 text-xs font-bold uppercase tracking-wider backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5 text-teal-300" />
            <span>Understanding The Online OPD Growth System™</span>
          </div>
          <p className="text-base sm:text-lg md:text-xl font-semibold leading-relaxed text-blue-50">
            &ldquo;Today&apos;s patients search online before they visit your clinic. The Online OPD Growth System™ helps doctors build trust online so patients confidently book both offline and online appointments.&rdquo;
          </p>
        </div>
      </section>

      {/* ITEM 2: Visual Patient Journey Section */}
      <section id="patient-journey" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0F6FFF] text-xs font-bold uppercase tracking-wider">
              The Digital Patient Journey
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How Your Next Patient Finds You
            </h2>
            <p className="text-slate-600 text-base leading-relaxed">
              Our website system supports this step-by-step journey by making it easier for patients to trust your expertise and contact your clinic.
            </p>
          </div>

          {/* Visual Journey Steps Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative">
            {patientJourneySteps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 hover:bg-white hover:shadow-lg hover:border-[#0F6FFF]/40 transition-all space-y-3 group"
                >
                  <div className="flex items-center justify-between">
                    <div className={`w-12 h-12 rounded-2xl ${step.color} flex items-center justify-center font-bold shadow-xs group-hover:scale-110 transition-transform`}>
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-extrabold text-slate-400 bg-white px-3 py-1 rounded-full border border-slate-200">
                      Step {step.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 pt-1">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{step.desc}</p>
                </div>
              );
            })}
          </div>

          {/* Explanatory note */}
          <div className="mt-12 max-w-3xl mx-auto p-5 rounded-2xl bg-blue-50/80 border border-blue-200 text-center">
            <p className="text-sm sm:text-base text-slate-700 font-medium">
              <span className="font-bold text-[#0F6FFF]">Note:</span> This system supports every step of the patient decision journey by making it seamless for patients to discover, trust, and contact your clinic.
            </p>
          </div>
        </div>
      </section>

      {/* ITEM 3: Your Website Is Your Digital Reputation */}
      <section id="reputation" className="py-20 bg-slate-50 relative border-t border-slate-200/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Personal Branding & Authority
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Your Website Is Your Digital Reputation
            </h2>
            <p className="text-base sm:text-lg text-slate-600 leading-relaxed">
              Doctors spend years earning degrees, experience and expertise. But patients cannot see those achievements unless they are presented professionally online. Your website should communicate your expertise before the first consultation.
            </p>
          </div>

          {/* 7 Cards for Qualifications, Experience, Awards, Media, Testimonials, Clinic Gallery, Treatment Expertise */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reputationCards.map((card, idx) => {
              const Icon = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-slate-200/80 shadow-xs hover:shadow-xl hover:border-[#0F6FFF]/40 transition-all space-y-3 group"
                >
                  <div className={`w-12 h-12 rounded-2xl ${card.color} flex items-center justify-center font-bold group-hover:scale-105 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{card.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ITEM 4: Perfect For Section */}
      <section id="perfect-for" className="py-20 bg-white relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0F6FFF] text-xs font-bold uppercase tracking-wider">
              Designed For All Practice Types
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Perfect For
            </h2>
            <p className="text-slate-600 text-base">
              Every healthcare business needs a professional online presence regardless of size.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perfectForCategories.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 rounded-3xl border border-slate-200/80 hover:bg-white hover:shadow-lg hover:border-[#0F6FFF]/30 transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0F6FFF] flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900">{item.label}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ITEM 5: Built for the Future with AI Section */}
      <section id="ai-section" className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold uppercase rounded-full border border-blue-500/30">
              Future-Ready Healthcare Tech
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Built for the Future with AI
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              AI is changing healthcare marketing. Our system includes optional AI-powered features designed to assist patient communication and clinic administration.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {aiFeatures.map((feature, idx) => {
              const Icon = feature.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-800/80 p-6 rounded-3xl border border-slate-700/80 hover:border-[#0F6FFF] transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-white">{feature.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{feature.desc}</p>
                </div>
              );
            })}
          </div>

          {/* AI Disclaimer */}
          <div className="max-w-3xl mx-auto p-4 rounded-2xl bg-slate-800/90 border border-slate-700 text-center">
            <p className="text-xs sm:text-sm text-slate-300 font-medium">
              <span className="text-[#00C2A8] font-bold">Important Notice:</span> AI features strictly assist patient communication, inquiry routing, and administration—never medical advice or diagnosis.
            </p>
          </div>
        </div>
      </section>

      {/* ITEM 9: Why Doctors Choose Us */}
      <section id="why-choose-us" className="py-20 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0F6FFF] text-xs font-bold uppercase tracking-wider">
              Healthcare Specialization
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Why Doctors Choose Us
            </h2>
            <p className="text-slate-600 text-base">
              Instead of talking about generic web technologies, we focus on what matters to your medical practice.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {whyDoctorsChooseUs.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200/80 hover:bg-blue-50/30 hover:border-blue-200 transition-all space-y-3"
                >
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-[#0F6FFF] flex items-center justify-center font-bold">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-extrabold text-slate-900">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ITEM 11: Feature to Doctor Benefit Section */}
      <section className="py-20 bg-slate-50 relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold uppercase tracking-wider">
              Doctor-Centric Benefits
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Every Feature Translated into Practice Value
            </h2>
            <p className="text-slate-600">
              We don&apos;t just sell website features—we deliver outcomes that support your digital reputation and patient growth.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {doctorBenefits.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-white p-6 rounded-3xl border border-slate-200 shadow-xs space-y-3 hover:shadow-md transition-all"
                >
                  <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                    <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">{item.feature}</span>
                    <Icon className="w-5 h-5 text-[#0F6FFF]" />
                  </div>
                  <p className="text-sm font-bold text-slate-900 leading-relaxed pt-1">
                    → {item.benefit}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ITEM 8: Social Proof & Transformations Placeholders */}
      <section className="py-20 bg-white relative border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
              Social Proof & Credentials
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Healthcare Website Transformations & Doctor Success Stories
            </h2>
            <p className="text-slate-600">
              See real reviews and social proof from doctors and healthcare centers working with Epsilon Technology.
            </p>
          </div>

          {/* Showcase Tabs / Cards Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {/* Devam Dave - Shreeji Multispecialty hospital */}
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
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
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
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
            <div className="bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-xs space-y-4 flex flex-col justify-between hover:shadow-md transition-shadow">
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
          </div>

          {/* Social Proof Badges & Placeholders */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <BadgeCheck className="w-8 h-8 text-[#0F6FFF] mx-auto mb-2" />
              <h4 className="font-bold text-slate-900 text-sm">Before / After Website Examples</h4>
              <p className="text-xs text-slate-500 mt-1">Available during Audit consultation</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <Award className="w-8 h-8 text-amber-500 mx-auto mb-2" />
              <h4 className="font-bold text-slate-900 text-sm">Awards & Accreditations</h4>
              <p className="text-xs text-slate-500 mt-1">Healthcare Web Design Excellence</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <Star className="w-8 h-8 text-emerald-500 mx-auto mb-2" />
              <h4 className="font-bold text-slate-900 text-sm">Google Reviews</h4>
              <p className="text-xs text-slate-500 mt-1">5.0 Star Rating across clients</p>
            </div>

            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 text-center">
              <ShieldCheck className="w-8 h-8 text-purple-500 mx-auto mb-2" />
              <h4 className="font-bold text-slate-900 text-sm">Certifications</h4>
              <p className="text-xs text-slate-500 mt-1">Google & Meta Certified Partner</p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctor Video Reels (Reel Format Testimonials) */}
      <section id="doctor-reels" className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Soft Background Blur */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-blue-600/20 via-teal-500/10 to-purple-600/20 blur-3xl rounded-full pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-4">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-xs font-bold uppercase tracking-wider">
              <Play className="w-3.5 h-3.5 text-[#00C2A8] fill-current" />
              Doctor Video Reels & Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight">
              Hear From Doctor Practice Owners
            </h2>
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
              Watch real reel video testimonials from doctors, surgeons, and department heads partnering with us for digital growth.
            </p>
          </div>

          {/* 4 Doctor Video Reels Grid (9:16 Vertical Reel Format) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {doctorReels.map((reel, idx) => (
              <div
                key={idx}
                className="bg-slate-800/90 rounded-3xl border border-slate-700/80 overflow-hidden shadow-2xl hover:border-[#0F6FFF] hover:shadow-blue-500/20 transition-all duration-300 flex flex-col group"
              >
                {/* Reel Frame Container (9:16 aspect ratio vertical reel) */}
                <div className="relative w-full aspect-[9/16] bg-black">
                  <iframe
                    src={`https://www.youtube.com/embed/${reel.youtubeId}`}
                    title={`${reel.name} - ${reel.specialty}`}
                    className="w-full h-full border-0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>

                {/* Doctor Meta Footer */}
                <div className="p-4 bg-slate-900 border-t border-slate-800 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="font-bold text-white text-base group-hover:text-[#00C2A8] transition-colors">
                      {reel.name}
                    </h3>
                    <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-bold uppercase">
                      Reel
                    </span>
                  </div>
                  <p className="text-xs text-blue-400 font-semibold">{reel.specialty}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Side-by-Side Comparison Section */}
      <section id="comparison" className="py-20 bg-slate-50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-bold uppercase tracking-wider">
              Side-By-Side Comparison
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Generic Web Agency vs. The Online OPD Growth System™
            </h2>
            <p className="text-slate-600">
              See why healthcare practice owners choose our specialized system over generalist web design agencies.
            </p>
          </div>

          {/* Table Container */}
          <div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl bg-white">
            <table className="w-full text-left border-collapse min-w-[650px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50">
                  <th className="p-5 text-sm font-extrabold text-slate-900 w-1/3">Feature & Strategy</th>
                  <th className="p-5 text-sm font-bold text-slate-400 w-1/3 bg-slate-100/50">
                    Generic Agency Website
                  </th>
                  <th className="p-5 text-sm font-extrabold text-[#0F6FFF] w-1/3 bg-blue-50/50">
                    The OPD Growth System™ (₹49,999)
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                <tr>
                  <td className="p-5 font-semibold text-slate-900">Industry Positioning</td>
                  <td className="p-5 text-slate-500 bg-slate-50/30">Generic template used for cafes, shops & doctors</td>
                  <td className="p-5 text-slate-900 font-bold bg-blue-50/20 text-[#0F6FFF]">
                    100% Medical & Healthcare Specific Positioning
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-slate-900">Copywriting Focus</td>
                  <td className="p-5 text-slate-500 bg-slate-50/30">Generic technical jargon copy</td>
                  <td className="p-5 text-slate-900 font-bold bg-blue-50/20 text-[#0F6FFF]">
                    Doctor Authority & Patient Trust Psychology
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-slate-900">Patient Conversion Flow</td>
                  <td className="p-5 text-slate-500 bg-slate-50/30">Static email form that leads to drop-offs</td>
                  <td className="p-5 text-slate-900 font-bold bg-blue-50/20 text-[#0F6FFF]">
                    1-Tap WhatsApp & Direct Appointment Booking
                  </td>
                </tr>
                <tr>
                  <td className="p-5 font-semibold text-slate-900">Page Speed Performance</td>
                  <td className="p-5 text-slate-500 bg-slate-50/30">Slow (4-8 seconds loading on mobile)</td>
                  <td className="p-5 text-slate-900 font-bold bg-blue-50/20 text-[#0F6FFF]">
                    Ultra Fast (Sub-second loading on mobile)
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

      {/* Process Section Timeline */}
      <section className="py-20 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
            <span className="px-3.5 py-1 bg-blue-500/20 text-blue-300 text-xs font-bold uppercase rounded-full border border-blue-500/30">
              15-Day Done-For-You Process
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              From Discovery to Live Website in 15 Days
            </h2>
            <p className="text-slate-400">
              A smooth execution methodology designed specifically around your busy clinical schedule.
            </p>
          </div>

          <div className="grid md:grid-cols-5 gap-6">
            {[
              { step: '01', title: 'Discovery & Practice Audit', time: 'Day 1 - 3', desc: 'We map your clinic specialties, unique qualifications, and local patient positioning.' },
              { step: '02', title: 'High-Trust Content & Architecture', time: 'Day 4 - 6', desc: 'Our healthcare copywriters structure patient-centered copy that communicates authority.' },
              { step: '03', title: 'Bespoke Modern Design & UI', time: 'Day 7 - 10', desc: 'Crafting clean, premium UI customized with your clinic branding and doctor profile.' },
              { step: '04', title: 'Engineered Development & Speed Polish', time: 'Day 11 - 13', desc: 'Building high-performance code with sub-second page loads, SEO schemas, and mobile optimization.' },
              { step: '05', title: 'Launch & System Handover', time: 'Day 14 - 15', desc: 'Final security checks, domain linking, WhatsApp & Analytics setup, and system handover.' },
            ].map((step, idx) => (
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

      {/* ITEM 7: RENAMED PRICING SECTION - Your Investment in Practice Growth */}
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

            {/* Premium Investment Stack Focused on Outcomes */}
            <div className="bg-slate-800/80 p-6 sm:p-8 rounded-3xl border border-slate-700 space-y-6 mb-8 backdrop-blur-xl">
              <h3 className="text-sm font-bold uppercase tracking-wider text-slate-400 text-center">
                What You Are Investing In
              </h3>

              <div className="grid sm:grid-cols-2 gap-3.5">
                {investmentOutcomes.map((item, idx) => (
                  <div key={idx} className="flex items-center gap-3 p-3 bg-slate-900/60 rounded-xl border border-slate-700/60">
                    <CheckCircle2 className="w-5 h-5 text-[#00C2A8] shrink-0" />
                    <span className="text-xs sm:text-sm font-semibold text-slate-200">{item}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 text-center border-t border-slate-700/80">
                <p className="text-sm sm:text-base font-bold text-slate-200 italic">
                  &ldquo;This is more than a website. It is the foundation of your clinic&apos;s digital presence.&rdquo;
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
                <span>Zero Pressure • 100% Done-For-You Implementation</span>
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

      {/* ITEM 10: IMPROVE THE FINAL CTA */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-8 relative z-10">
          <div className="w-16 h-16 rounded-3xl bg-[#0F6FFF]/20 text-[#00C2A8] flex items-center justify-center mx-auto border border-[#0F6FFF]/30">
            <Stethoscope className="w-8 h-8" />
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-relaxed">
              Your patients will search online before they choose a doctor.
            </h2>
            <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              Make sure your website reflects the expertise you spent years building. Build a professional digital identity that inspires trust and makes it easy for patients to contact your clinic.
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
