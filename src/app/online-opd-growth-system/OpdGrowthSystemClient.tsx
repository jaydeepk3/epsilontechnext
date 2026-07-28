'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { trackMetaCapiEvent } from '@/lib/meta-capi';
import {
  ShieldCheck,
  CheckCircle2,
  FileText,
  MessageSquare,
  Sparkles,
  ArrowRight,
  Star,
  ChevronDown,
  Lock,
  Play,
  Users,
  MapPin,
  TrendingUp,
  UserCheck,
  CalendarCheck,
  Award,
  BookOpen,
  CheckSquare,
  Zap,
} from 'lucide-react';

export default function OpdGrowthSystemClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Essential Form State: Doctor Name + WhatsApp Number Only (Zero Friction)
  const [formData, setFormData] = useState({
    doctorName: '',
    whatsappNumber: '',
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const PDF_URL =
    'https://docs.google.com/document/d/1nflXCYHzzuVMvVkyVLMEOuLZqPXqXhJRN0Z2Z3X0HnA/edit?usp=sharing';

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.whatsappNumber || isSubmitting) return;

    setIsSubmitting(true);
    setFormSubmitted(true);

    const eventContentName = 'OPD Growth Strategy Blueprint PDF Download';

    // Submit lead data to API (Sends Email notification + pushes to Wortal CRM & WhatsApp CRM)
    try {
      await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.doctorName || 'Doctor Lead',
          mobile: formData.whatsappNumber,
          leadType: 'OPD Growth Blueprint PDF Download (Lead Magnet)',
        }),
      });
    } catch (err) {
      console.error('Failed to log lead data to CRM:', err);
    }

    // Trigger Meta Conversions API & Pixel Lead Event
    try {
      trackMetaCapiEvent({
        eventName: 'Lead',
        user: {
          phone: formData.whatsappNumber,
          firstName: formData.doctorName,
        },
        customData: {
          content_name: eventContentName,
          lead_type: 'PDF Lead Magnet',
          value: 0,
          currency: 'INR',
        },
      });
    } catch (err) {
      console.error('Meta CAPI event error:', err);
    }

    setIsSubmitting(false);

    // Redirect to Thank You Page and open PDF in new tab
    setTimeout(() => {
      window.open(PDF_URL, '_blank');
      window.location.href = '/online-opd-growth-system/thank-you?type=pdf';
    }, 800);
  };

  const openFormModal = () => {
    setFormSubmitted(false);
    setIsModalOpen(true);
  };

  // Client Logos (Doctor & Hospital Logos Only)
  const clientLogos = [
    { name: 'Sangani Hospital', src: '/clientlogo/Sangani-Hospital-Logo-Gujarati 2 copy.webp' },
    { name: 'Trimurti Hospital', src: '/images/doctors/trimurti-hospital.webp' },
    { name: 'Shreeji Multispecialty Hospital', src: '/images/doctors/shreeji-hospital.webp' },
    { name: 'Rainbow Pedia & Physio', src: '/images/doctors/rainbow-pedia.webp' },
    { name: 'Medicos Foundation', src: '/clientlogo/medicos_foundation.webp' },
    { name: 'Healthcare Partner', src: '/clientlogo/healthcare.webp' },
  ];

  // Doctor Reviews from Digital Marketing Page
  const doctorReviews = [
    {
      quote:
        '“Working with Epsilon for 2 years. Patient inquiries went up significantly after they started managing our reels. Jaydeep bhai understands healthcare marketing like no other.”',
      author: 'Dr. D.P. Vora',
      role: 'Orthopaedic Surgeon, Gujarat',
      metric: '40+',
      metricLabel: 'Inquiries/month',
      avatar: '/images/doctors/dr-dp-vora.webp',
    },
    {
      quote:
        '“Mr Jaydeep helped our hospital scale patient footfall like never before. Highly recommend for social media & website development. OPD is 3x what it was.”',
      author: 'Devam Dave',
      role: 'Shreeji Multispecialty Hospital, Gujarat',
      metric: '3x',
      metricLabel: 'OPD growth in 60d',
      avatar: '/images/doctors/dr devam dave.webp',
    },
    {
      quote:
        '“Within 45 days we started getting direct WhatsApp inquiries from social media. Very accurate approach, and the content quality is outstanding.”',
      author: 'Rainbow Pedia & Physio',
      role: 'Physiotherapy Clinic, Gujarat',
      metric: '45',
      metricLabel: 'Days to first lead',
      avatar: '/images/doctors/rainbow-pedia.webp',
    },
    {
      quote:
        '“Epsilon Technology is a one-stop solution for all digital marketing needs. They\'ve helped our clinic scale like never before. Highly recommend for any doctor.”',
      author: 'Dr. Hiral Vasani',
      role: 'Cosmetologist, Gujarat',
      metric: '30–50',
      metricLabel: 'Inquiries/month',
      avatar: '/images/doctors/dr hiral vasani.webp',
    },
    {
      quote:
        '“Expert and very easy to work with. They know exactly what content doctors need to build trust and attract patients. Reels went from 500 to 100k+ views.”',
      author: 'Dr. Priyank Bagtharia',
      role: 'Medical Professional, Gujarat',
      metric: '100k+',
      metricLabel: 'Reel views in 3mo',
      avatar: '/images/doctors/dr-priyank-bagtharia.webp',
    },
  ];


  // What's Inside the Guide (4-6 Page Previews with Icons)
  const guideInsideItems = [
    {
      page: 'Page 03',
      title: 'Google Maps 3-Pack Ranking Checklist',
      desc: 'The exact step-by-step checklist top doctors use to rank #1 locally for high-intent search terms.',
      icon: MapPin,
      tag: 'Local SEO Checklist',
    },
    {
      page: 'Page 07',
      title: 'Patient Trust Blueprint',
      desc: 'How to structure your online profiles so patients choose your clinic over established competitors.',
      icon: UserCheck,
      tag: 'Trust Template',
    },
    {
      page: 'Page 11',
      title: 'WhatsApp Appointment Automation Setup',
      desc: 'Zero-cost template to auto-reply to patient enquiries 24/7 and convert messages into booked OPD visits.',
      icon: MessageSquare,
      tag: 'WhatsApp Workflow',
    },
    {
      page: 'Page 15',
      title: 'OPD Enquiry Multiplication Matrix',
      desc: 'Practical framework to turn 1-time visitors into loyal repeat patients and Google review advocates.',
      icon: TrendingUp,
      tag: 'Growth System',
    },
  ];

  // Benefits Section (Outcome-Focused as requested)
  const outcomeBenefits = [
    {
      title: 'Get More Patient Appointments',
      desc: 'Turn everyday online searches into confirmed OPD appointments without depending on expensive ads.',
      icon: CalendarCheck,
      color: 'bg-emerald-500/10 text-emerald-600 border-emerald-200',
    },
    {
      title: 'Rank Higher on Google Maps',
      desc: 'Appear at the top of local Google search results when nearby patients search for your specialty.',
      icon: MapPin,
      color: 'bg-blue-500/10 text-blue-600 border-blue-200',
    },
    {
      title: 'Build Patient Trust',
      desc: 'Position your experience, qualifications, and patient success stories so patients trust you instantly.',
      icon: ShieldCheck,
      color: 'bg-purple-500/10 text-purple-600 border-purple-200',
    },
    {
      title: 'Increase Repeat Visits',
      desc: 'Set up systematic follow-up reminders and patient engagement workflows that keep patients returning.',
      icon: Users,
      color: 'bg-amber-500/10 text-amber-600 border-amber-200',
    },
    {
      title: 'Automate Appointment Enquiries',
      desc: 'Let WhatsApp handle patient queries, consultation timings, and address directions automatically 24/7.',
      icon: Zap,
      color: 'bg-teal-500/10 text-teal-600 border-teal-200',
    },
    {
      title: 'Create a Strong Personal Brand',
      desc: 'Establish yourself as the premier, trusted authority in your specialty across your city.',
      icon: Award,
      color: 'bg-indigo-500/10 text-indigo-600 border-indigo-200',
    },
  ];

  // Video Reels from Doctors
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

  // Essential FAQs for Doctors (Exact 5 required questions)
  const faqs = [
    {
      q: 'Is the guide really 100% free?',
      a: 'Yes, 100% free. There are zero hidden costs, mandatory credit cards, or catch. We created this blueprint to help practicing doctors understand modern digital patient acquisition.',
    },
    {
      q: 'How will I receive the guide?',
      a: 'Instantly! As soon as you enter your name and WhatsApp number, the PDF opens immediately in your browser, and a direct access link is delivered to your WhatsApp.',
    },
    {
      q: 'Is it useful for my medical specialty?',
      a: 'Yes. The framework applies to Orthopedics, Gynecology & IVF, Dermatology, Dental Clinics, Ophthalmology, Pediatrics, General Surgery, General Medicine, and Multispecialty Clinics.',
    },
    {
      q: 'How long does it take to read?',
      a: 'The blueprint is quick and practical. It takes under 12 minutes to read and contains actionable checklists and templates you can implement right away.',
    },
    {
      q: 'Will someone contact me after downloading?',
      a: 'We respect your time. We will send your PDF access link directly to you. No aggressive sales calls.',
    },
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-[#0F6FFF] selection:text-white">

      {/* Streamlined Clean Header (Zero Distractions) */}
      <header className="bg-white border-b border-slate-200 sticky top-0 z-40 shadow-xs">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 sm:h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.webp"
              alt="Epsilon Technology Logo"
              width={140}
              height={40}
              priority
              className="h-8 sm:h-10 w-auto object-contain"
            />
          </Link>
          <button
            onClick={openFormModal}
            className="inline-flex items-center justify-center px-4 py-2 sm:px-5 sm:py-2.5 text-xs sm:text-sm font-extrabold text-white bg-[#0F6FFF] hover:bg-blue-600 rounded-xl shadow-md hover:shadow-lg transition-all"
          >
            <FileText className="w-4 h-4 mr-1.5" />
            <span>Download Free PDF</span>
          </button>
        </div>
      </header>

      {/* HERO SECTION (Strictly Optimized Above The Fold for CRO) */}
      <section className="pt-6 pb-12 sm:pt-10 sm:pb-16 bg-gradient-to-b from-white via-slate-50 to-blue-50/20 border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid lg:grid-cols-12 gap-8 items-center">

            {/* Hero Left Content */}
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">

              {/* Target Audience Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-300 text-amber-950 text-xs font-black shadow-xs">
                <Sparkles className="w-4 h-4 text-amber-600 shrink-0" />
                <span>Free OPD Growth Blueprint for Doctors & Clinic Owners</span>
              </div>

              {/* Doctor Pain & Desired Outcome Headline */}
              <h1 className="text-2xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight leading-[1.18]">
                Stop Losing Patients to Competitor Clinics —{' '}
                <span className="bg-gradient-to-r from-[#0F6FFF] via-blue-600 to-[#00C2A8] bg-clip-text text-transparent">
                  Get 3x OPD Appointments
                </span>{' '}
                with Predictable Digital Trust.
              </h1>

              {/* Subheadline Copy */}
              <p className="text-sm sm:text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mx-auto lg:mx-0">
                Discover the exact 5-step blueprint top doctors use to rank higher on Google Maps, build instant patient trust, and automate WhatsApp appointment enquiries.
              </p>

              {/* 5 Benefit Bullets with Check Icons */}
              <div className="space-y-2.5 pt-1 text-left max-w-xl mx-auto lg:mx-0">
                <div className="flex items-start gap-2.5 text-xs sm:text-base font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#00C2A8] shrink-0 mt-0.5" />
                  <span>Rank #1 on Google Maps when patients search for your specialty.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-base font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#00C2A8] shrink-0 mt-0.5" />
                  <span>Convert 24/7 patient enquiries into confirmed OPD visits via WhatsApp.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-base font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#00C2A8] shrink-0 mt-0.5" />
                  <span>Build high-trust digital profiles that position you as the top specialist.</span>
                </div>
                <div className="flex items-start gap-2.5 text-xs sm:text-base font-semibold text-slate-800">
                  <CheckCircle2 className="w-5 h-5 text-[#00C2A8] shrink-0 mt-0.5" />
                  <span>Includes practical templates, checklists, and 15-minute implementation steps.</span>
                </div>
              </div>

              {/* Desktop CTA Button Trigger for Modal (if not using inline form) */}
              <div className="pt-2 hidden lg:block">
                <button
                  onClick={openFormModal}
                  className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-base sm:text-lg font-black text-white bg-gradient-to-r from-[#0F6FFF] via-blue-600 to-[#2563EB] rounded-2xl shadow-xl shadow-[#0F6FFF]/30 hover:shadow-2xl hover:-translate-y-0.5 transition-all group"
                >
                  <FileText className="w-5 h-5 mr-2" />
                  <span>Download Free Blueprint (PDF)</span>
                  <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform shrink-0" />
                </button>
                <p className="text-xs text-slate-500 font-bold mt-2">
                  Instant PDF Delivery • 100% Free • No Credit Card Required
                </p>
              </div>

            </div>

            {/* Hero Right: High-Converting Lead Form (Visible Above Fold on Mobile & Desktop) */}
            <div className="lg:col-span-5">
              <div className="bg-white rounded-3xl p-6 sm:p-7 border-2 border-blue-500/30 shadow-2xl space-y-4 relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-[#0F6FFF] via-[#00C2A8] to-[#0F6FFF]" />

                <div className="text-center space-y-1">
                  <span className="inline-flex items-center gap-1 text-[11px] font-black uppercase text-amber-700 bg-amber-100 px-2.5 py-0.5 rounded-full">
                    <FileText className="w-3 h-3 text-amber-600" /> Free Doctor Guide
                  </span>
                  <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                    Get Instant Blueprint Access
                  </h2>
                  <p className="text-xs text-slate-500 font-medium">
                    Enter your details to open and download the guide immediately.
                  </p>
                </div>

                {/* Lead Form: 2 Essential Fields Only (Name + WhatsApp Number) */}
                <form onSubmit={handleFormSubmit} className="space-y-3.5">
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
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0F6FFF] focus:ring-2 focus:ring-[#0F6FFF]/20 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10,12}"
                      placeholder="e.g. 9876543210"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0F6FFF] focus:ring-2 focus:ring-[#0F6FFF]/20 font-medium"
                    />
                  </div>

                  {/* High Contrast Action CTA Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-base font-black text-white bg-gradient-to-r from-[#0F6FFF] via-blue-600 to-[#00C2A8] rounded-xl shadow-xl shadow-[#0F6FFF]/30 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-2 group"
                  >
                    <FileText className="w-5 h-5 text-amber-300" />
                    <span>{isSubmitting ? 'Opening Blueprint...' : 'Download Free Blueprint (PDF)'}</span>
                    <ArrowRight className="w-5 h-5 text-amber-300 group-hover:translate-x-1 transition-transform" />
                  </button>
                </form>

                {/* Privacy & Reassurance Text */}
                <div className="pt-2 text-center space-y-1">
                  <div className="inline-flex items-center gap-1.5 text-xs text-slate-600 font-semibold">
                    <Lock className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Your information is 100% secure. No spam.</span>
                  </div>
                  <p className="text-[11px] text-slate-400 font-medium">
                    Instant PDF Delivery • 100% Free • No Credit Card Required
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* TRUST SECTION (Immediately Below Hero) */}
      <section className="py-10 sm:py-14 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          {/* Key Metrics Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 shadow-xs">
              <span className="text-2xl sm:text-4xl font-black text-slate-900 block">50+</span>
              <span className="text-xs sm:text-sm text-slate-600 font-bold">Doctors & Clinics Served</span>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 shadow-xs">
              <span className="text-2xl sm:text-4xl font-black text-[#0F6FFF] block">8+</span>
              <span className="text-xs sm:text-sm text-slate-600 font-bold">Years Healthcare Marketing</span>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 shadow-xs">
              <span className="text-2xl sm:text-4xl font-black text-[#00C2A8] block">100+</span>
              <span className="text-xs sm:text-sm text-slate-600 font-bold">Healthcare Projects Done</span>
            </div>
            <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-1 shadow-xs">
              <div className="flex items-center justify-center gap-1 text-amber-500">
                <Star className="w-5 h-5 fill-current" />
                <span className="text-2xl sm:text-4xl font-black text-slate-900">4.9/5</span>
              </div>
              <span className="text-xs sm:text-sm text-slate-600 font-bold">58+ Google Reviews</span>
            </div>
          </div>

          {/* Client Logos Carousel/Grid */}
          <div className="space-y-4 pt-4 text-center">
            <span className="text-xs font-black uppercase text-slate-500 tracking-wider">
              Trusted by Hospitals & Healthcare Professionals
            </span>
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 pt-2">
              {clientLogos.map((client, idx) => (
                <div
                  key={idx}
                  className="relative h-16 sm:h-20 w-36 sm:w-48 px-4 py-2 bg-slate-50/90 border border-slate-200 rounded-2xl flex items-center justify-center shadow-xs hover:shadow-md hover:border-[#0F6FFF]/40 transition-all group"
                >
                  <Image
                    src={client.src}
                    alt={client.name}
                    width={220}
                    height={90}
                    className="max-h-full max-w-full object-contain group-hover:scale-105 transition-transform"
                  />
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* GUIDE PREVIEW SECTION ("What's Inside") */}
      <section className="py-14 sm:py-20 bg-slate-900 text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500/20 text-amber-300 text-xs font-bold uppercase">
              <BookOpen className="w-4 h-4 text-amber-400" /> Exclusive Guide Preview
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              What's Inside The OPD Growth Blueprint?
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Here is a preview of the practical templates, checklists, and implementation steps you get inside.
            </p>
          </div>

          {/* Preview Cards Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {guideInsideItems.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={idx}
                  className="bg-slate-800/80 border border-slate-700/80 rounded-3xl p-6 space-y-4 hover:border-[#0F6FFF] transition-all flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-[11px] font-black uppercase text-amber-400 bg-amber-500/10 px-2.5 py-1 rounded-lg border border-amber-500/20">
                        {item.page}
                      </span>
                      <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">
                        {item.tag}
                      </span>
                    </div>

                    <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-[#00C2A8] flex items-center justify-center border border-teal-500/20 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>

                    <h3 className="text-lg font-bold text-white group-hover:text-[#00C2A8] transition-colors leading-snug">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-300 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="pt-2 border-t border-slate-700/60 flex items-center text-xs font-bold text-[#0F6FFF] group-hover:text-amber-300">
                    <CheckSquare className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
                    <span>Includes Ready Template</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Guide CTA Repeat */}
          <div className="text-center pt-4">
            <button
              onClick={openFormModal}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-black text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 rounded-2xl shadow-xl hover:scale-105 transition-all group"
            >
              <FileText className="w-5 h-5 mr-2 text-slate-950" />
              <span>Send Me The Free Blueprint Guide</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>


      {/* BENEFITS SECTION (Outcome-Focused as requested) */}
      <section className="py-14 sm:py-20 bg-white border-b border-slate-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0F6FFF] text-xs font-bold uppercase tracking-wider">
              Proven Patient Acquisition Outcomes
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              How This Blueprint Helps Your Clinic Grow
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              Shift from passive word-of-mouth to a predictable, hands-free OPD patient acquisition system.
            </p>
          </div>

          {/* 6 Outcome Benefit Cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {outcomeBenefits.map((benefit, idx) => {
              const IconComp = benefit.icon;
              return (
                <div
                  key={idx}
                  className="p-6 sm:p-7 rounded-3xl bg-slate-50 border border-slate-200 space-y-3 hover:border-[#0F6FFF] hover:shadow-md transition-all group"
                >
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center border ${benefit.color}`}>
                    <IconComp className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 group-hover:text-[#0F6FFF] transition-colors">
                    {benefit.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {benefit.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* Benefit Section CTA Repeat */}
          <div className="text-center pt-2">
            <button
              onClick={openFormModal}
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-white bg-gradient-to-r from-[#0F6FFF] to-[#2563EB] rounded-2xl shadow-xl shadow-[#0F6FFF]/30 hover:scale-105 transition-all group"
            >
              <FileText className="w-5 h-5 mr-2" />
              <span>Get Instant Access To The Blueprint</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>
      </section>


      {/* SOCIAL PROOF & DOCTOR VIDEO REELS */}
      <section className="py-14 sm:py-20 bg-slate-900 text-white relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">

          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/20 text-blue-300 text-xs font-bold uppercase">
              <Play className="w-3.5 h-3.5 text-[#00C2A8] fill-current" /> Doctor Success Stories
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Trusted by Practicing Doctors
            </h2>
            <p className="text-slate-300 text-sm sm:text-base">
              Watch real video reviews from surgeons and clinic owners who grown their OPD consultations.
            </p>
          </div>

          {/* 4 Doctor Video Reels */}
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
                    loading="lazy"
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

          {/* 5 Doctor Reviews from Digital Marketing Page */}
          <div className="pt-8 space-y-6">
            <div className="text-center space-y-2">
              <h3 className="text-2xl font-bold text-white">
                What Doctors Say About Working With Us
              </h3>
              <p className="text-xs sm:text-sm text-slate-300">
                Verified results and feedback from orthopaedists, surgeons, gynecologists, and multispecialty clinics.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {doctorReviews.map((rev, idx) => (
                <div
                  key={idx}
                  className="bg-white text-slate-900 rounded-3xl p-6 border border-slate-200 shadow-xl flex flex-col justify-between space-y-4 hover:border-[#0F6FFF] transition-all"
                >
                  <div className="space-y-3">
                    {/* 5 Gold Stars */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>

                    {/* Quote Text */}
                    <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed italic">
                      {rev.quote}
                    </p>
                  </div>

                  <div className="space-y-3 pt-2">
                    {/* Result Metric Pill */}
                    <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-3 flex items-center justify-between gap-2">
                      <div>
                        <span className="text-lg font-black text-emerald-800 leading-none block">
                          {rev.metric}
                        </span>
                        <span className="text-[10px] text-emerald-700 font-semibold block mt-0.5">
                          {rev.metricLabel}
                        </span>
                      </div>
                      <span className="inline-flex items-center text-[10px] font-black text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded-md">
                        📈 Real result achieved
                      </span>
                    </div>

                    {/* Doctor Info */}
                    <div className="flex items-center gap-3 pt-1 border-t border-slate-100">
                      {rev.avatar && (
                        <div className="relative w-10 h-10 rounded-full overflow-hidden shrink-0 border border-slate-200 bg-slate-100">
                          <Image
                            src={rev.avatar}
                            alt={rev.author}
                            fill
                            className="object-cover"
                          />
                        </div>
                      )}
                      <div>
                        <h4 className="text-sm font-bold text-slate-900 leading-tight">
                          {rev.author}
                        </h4>
                        <p className="text-[11px] text-slate-500 font-medium">
                          {rev.role}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>


      {/* FREQUENTLY ASKED QUESTIONS (Exact 5 required doctor questions) */}
      <section className="py-14 sm:py-20 bg-slate-50 border-b border-slate-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="text-center space-y-3">
            <span className="px-3.5 py-1.5 rounded-full bg-blue-100 text-[#0F6FFF] text-xs font-bold uppercase tracking-wider">
              Doctor FAQs
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Frequently Asked Questions
            </h2>
          </div>

          {/* FAQ Accordion List */}
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
                    className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 focus:outline-hidden"
                  >
                    <span className="font-bold text-slate-900 text-base sm:text-lg">{faq.q}</span>
                    <ChevronDown
                      className={`w-5 h-5 text-[#0F6FFF] shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''
                        }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 sm:px-6 sm:pb-6 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>
      </section>


      {/* FINAL HIGH-CONVERTING CTA SECTION */}
      <section className="py-16 sm:py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 text-white relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 relative z-10">

          <div className="w-14 h-14 rounded-2xl bg-[#0F6FFF]/20 text-[#00C2A8] flex items-center justify-center mx-auto border border-[#0F6FFF]/30">
            <FileText className="w-7 h-7" />
          </div>

          <div className="space-y-3">
            <h2 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
              Get Your Free OPD Growth Blueprint Today
            </h2>
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
              Join 500+ practicing doctors who use this 5-step framework to attract predictable patient OPD appointments online.
            </p>
          </div>

          <div className="pt-2 flex justify-center">
            <button
              onClick={openFormModal}
              className="w-full sm:w-auto inline-flex items-center justify-center px-10 py-5 text-base sm:text-lg font-black text-slate-950 bg-gradient-to-r from-amber-300 via-amber-400 to-yellow-400 rounded-2xl shadow-2xl hover:scale-105 transition-all group"
            >
              <FileText className="w-5 h-5 mr-2 text-slate-950" />
              <span>Download Free Blueprint Now</span>
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <p className="text-xs text-amber-300 font-medium">
            Instant PDF Access • 100% Free • No Spam Guarantee
          </p>

        </div>
      </section>


      {/* Floating WhatsApp Quick Consultation Button */}
      <a
        href="https://wa.me/917359315576?text=Hi%20Epsilon%20Team,%20I%20am%20a%20doctor%20interested%20in%20The%20Online%20OPD%20Growth%20Blueprint."
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


      {/* Modal Lead Capture Form */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm animate-fade-in">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 sm:p-8 relative shadow-2xl border border-slate-200">
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-5 right-5 text-slate-400 hover:text-slate-700 p-1 rounded-full"
            >
              ✕
            </button>

            {!formSubmitted ? (
              <div className="space-y-5">
                <div>
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0F6FFF] text-xs font-bold mb-2">
                    <Sparkles className="w-3.5 h-3.5" />
                    <span>Instant Free PDF Access</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900">
                    Download Doctor OPD Blueprint
                  </h3>
                  <p className="text-xs text-slate-500 mt-1">
                    Enter your details below to instantly open the OPD Growth PDF guide.
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
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0F6FFF] focus:ring-2 focus:ring-[#0F6FFF]/20 font-medium"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">
                      WhatsApp Number *
                    </label>
                    <input
                      type="tel"
                      required
                      pattern="[0-9]{10,12}"
                      placeholder="e.g. 9876543210"
                      value={formData.whatsappNumber}
                      onChange={(e) => setFormData({ ...formData, whatsappNumber: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 text-sm focus:outline-hidden focus:border-[#0F6FFF] focus:ring-2 focus:ring-[#0F6FFF]/20 font-medium"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 text-base font-black text-white bg-gradient-to-r from-[#0F6FFF] via-blue-600 to-[#00C2A8] rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    {isSubmitting ? 'Opening PDF...' : 'Download Free Blueprint (PDF)'}
                  </button>
                </form>

                <div className="pt-1 text-center">
                  <span className="text-[11px] text-slate-500 font-semibold flex items-center justify-center gap-1">
                    <Lock className="w-3 h-3 text-emerald-600" />
                    Your information is 100% secure. No spam.
                  </span>
                </div>
              </div>
            ) : (
              <div className="text-center py-6 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Access Granted!
                </h3>
                <p className="text-sm text-slate-600">
                  Opening your OPD Growth Strategy PDF guide in a new tab...
                </p>
                <div className="pt-2">
                  <a
                    href={PDF_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center text-sm font-bold text-[#0F6FFF] hover:underline"
                  >
                    Click here if PDF did not open automatically →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
