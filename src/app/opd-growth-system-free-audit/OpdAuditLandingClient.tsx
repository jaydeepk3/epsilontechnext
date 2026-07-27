'use client';

import React, { useState, useEffect } from 'react';
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
  Stethoscope,
  Building2,
  Award,
  Flame,
  Lock,
  ArrowDown,
  HelpCircle,
  Smartphone,
  TrendingUp,
  FileText,
  Check,
  PhoneCall
} from 'lucide-react';

export default function OpdAuditLandingClient() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  // Lead Form State
  const [formData, setFormData] = useState({
    doctorName: '',
    clinicName: '',
    specialty: 'Dermatology / Skin',
    phone: '',
    city: '',
    website: '',
  });

  // Countdown timer for urgency
  const [timeLeft, setTimeLeft] = useState({
    hours: 4,
    minutes: 32,
    seconds: 15,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev.seconds > 0) return { ...prev, seconds: prev.seconds - 1 };
        if (prev.minutes > 0) return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        if (prev.hours > 0) return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        return prev;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.phone) return;
    setFormStatus('loading');

    try {
      // Send to contact API
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: formData.doctorName,
          clinic: formData.clinicName,
          specialty: formData.specialty,
          mobile: formData.phone,
          city: formData.city,
        }),
      });

      if (res.ok) {
        setFormStatus('success');

        // Track Meta CAPI & Pixel Lead Event
        trackMetaCapiEvent({
          eventName: 'Lead',
          user: {
            phone: formData.phone,
            firstName: formData.doctorName,
            city: formData.city,
          },
          customData: {
            content_name: 'OPD Growth System Free Audit Lead',
            specialty: formData.specialty,
            clinic_name: formData.clinicName,
            page_path: '/opd-growth-system-free-audit',
          },
        });
      } else {
        setFormStatus('error');
      }
    } catch (err) {
      console.error('Error submitting audit lead:', err);
      setFormStatus('error');
    }
  };

  const scrollToForm = () => {
    const formEl = document.getElementById('audit-form');
    formEl?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="bg-slate-50 text-slate-900 min-h-screen pt-20 md:pt-24 font-sans selection:bg-blue-600 selection:text-white">
      
      {/* ─── URGENCY BANNER ─── */}
      <div className="bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 text-white text-xs md:text-sm py-2 px-4 text-center font-medium shadow-inner border-b border-blue-800/40">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 flex-wrap">
          <span className="bg-rose-500 text-white text-[10px] uppercase font-black tracking-wider px-2 py-0.5 rounded-full flex items-center gap-1 animate-pulse">
            <Flame size={12} /> High Demand
          </span>
          <span>Free OPD Audit Slots Remaining This Week: <strong className="text-yellow-300 font-extrabold underline">3 Seats Left</strong></span>
          <span className="hidden md:inline-block text-blue-300">|</span>
          <span className="hidden md:inline-flex items-center gap-1 text-slate-300">
            <Clock size={14} className="text-yellow-400" /> Offer expires in {String(timeLeft.hours).padStart(2, '0')}h {String(timeLeft.minutes).padStart(2, '0')}m {String(timeLeft.seconds).padStart(2, '0')}s
          </span>
        </div>
      </div>

      {/* ─── ABOVE THE FOLD HERO SECTION WITH INTEGRATED LEAD FORM ─── */}
      <section className="relative overflow-hidden pt-8 pb-14 md:pt-12 md:pb-20 bg-white border-b border-slate-200/80">
        {/* Soft Background Orbs */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 rounded-full bg-blue-100/60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 rounded-full bg-indigo-100/60 blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Value Proposition & Proof */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs md:text-sm font-semibold shadow-xs">
                <Sparkles size={16} className="text-blue-600 shrink-0" />
                <span>Engineered Exclusively for Doctors & Healthcare Clinics</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.15]">
                Double Your Clinic&apos;s OPD Enquiries With A <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-sky-600 bg-clip-text text-transparent">Done-For-You Digital Engine</span>
              </h1>

              {/* Subheadline */}
              <p className="text-slate-600 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                Stop relying on word-of-mouth alone. Claim your <strong className="text-slate-900 font-semibold">Free 1-on-1 OPD Digital Growth Audit</strong> to discover exactly how to attract verified, high-paying patient appointments directly to your clinic.
              </p>

              {/* Trust Value Points */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {[
                  'Custom Medical Website System',
                  'Direct WhatsApp Patient Booking',
                  'Google Local SEO & Map Ranking',
                  'Done-in-7-Days DFY Launch',
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center gap-2.5 text-slate-700 font-medium text-sm sm:text-base">
                    <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center shrink-0">
                      <Check size={13} strokeWidth={3} />
                    </div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              {/* Social Proof Stats Bar */}
              <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center gap-6 text-slate-600 text-xs sm:text-sm">
                <div className="flex items-center gap-2">
                  <div className="flex -space-x-2">
                    <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-xs border-2 border-white">Dr</div>
                    <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center font-bold text-xs border-2 border-white">Dr</div>
                    <div className="w-8 h-8 rounded-full bg-teal-600 text-white flex items-center justify-center font-bold text-xs border-2 border-white">Dr</div>
                  </div>
                  <div>
                    <div className="flex text-amber-400">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} size={14} fill="currentColor" />
                      ))}
                    </div>
                    <span className="font-semibold text-slate-800">50+ Doctors Partnered</span>
                  </div>
                </div>
                <div className="h-8 w-px bg-slate-200 hidden sm:block" />
                <div>
                  <span className="block font-bold text-slate-900 text-base">₹1.30 Lakh Value</span>
                  <span className="text-slate-500 text-xs">Complete Healthcare Package</span>
                </div>
              </div>

            </div>

            {/* Right Column: Lead Form Prominently Above The Fold */}
            <div className="lg:col-span-5">
              <div id="audit-form" className="bg-white rounded-3xl p-6 sm:p-8 shadow-2xl border-2 border-blue-500/20 relative overflow-hidden">
                <div className="absolute top-0 right-0 bg-gradient-to-l from-blue-600 to-indigo-600 text-white text-[11px] font-bold uppercase tracking-wider px-4 py-1.5 rounded-bl-2xl shadow-sm">
                  Free 1-on-1 Audit
                </div>

                <div className="mb-6 space-y-1">
                  <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                    <Stethoscope size={18} />
                    <span>Get Your Custom Audit Report</span>
                  </div>
                  <h3 className="text-xl sm:text-2xl font-black text-slate-900">Claim Free OPD Audit</h3>
                  <p className="text-slate-500 text-xs sm:text-sm">
                    Enter your details below. Our senior healthcare strategist will review your online footprint & call you within 24 hours.
                  </p>
                </div>

                {formStatus === 'success' ? (
                  <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                    <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                      <CheckCircle2 size={32} />
                    </div>
                    <h4 className="text-xl font-bold text-slate-900">Audit Request Received!</h4>
                    <p className="text-slate-600 text-sm">
                      Thank you, <strong className="text-slate-900">{formData.doctorName || 'Doctor'}</strong>. Our healthcare team will analyze your practice footprint and reach out via WhatsApp/Phone shortly.
                    </p>
                    <button
                      onClick={() => setFormStatus('idle')}
                      className="text-xs text-blue-600 font-semibold underline hover:text-blue-800"
                    >
                      Submit Another Request
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Doctor / Contact Name *
                      </label>
                      <input
                        type="text"
                        name="doctorName"
                        required
                        placeholder="Dr. Rajesh Sharma"
                        value={formData.doctorName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-900 outline-none transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        Clinic / Hospital Name
                      </label>
                      <input
                        type="text"
                        name="clinicName"
                        placeholder="Apex Skin & Laser Clinic"
                        value={formData.clinicName}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-900 outline-none transition-all"
                      />
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          Specialty *
                        </label>
                        <select
                          name="specialty"
                          value={formData.specialty}
                          onChange={handleChange}
                          className="w-full px-3 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-900 outline-none transition-all bg-white"
                        >
                          <option value="Dermatology / Skin">Dermatology / Skin</option>
                          <option value="Orthopedic">Orthopedic</option>
                          <option value="Gynecologist / IVF">Gynecologist / IVF</option>
                          <option value="Dental Clinic">Dental Clinic</option>
                          <option value="Eye / Ophthalmology">Eye / Ophthalmology</option>
                          <option value="General Surgery">General Surgery</option>
                          <option value="Multispecialty Hospital">Multispecialty Hospital</option>
                          <option value="Other Medical Specialty">Other Specialty</option>
                        </select>
                      </div>

                      <div>
                        <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                          City / Location *
                        </label>
                        <input
                          type="text"
                          name="city"
                          required
                          placeholder="Mumbai / Delhi / Surat"
                          value={formData.city}
                          onChange={handleChange}
                          className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm text-slate-900 outline-none transition-all"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-1">
                        WhatsApp / Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 98765 43210"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:ring-2 focus:ring-blue-600 focus:border-transparent text-sm font-semibold text-slate-900 outline-none transition-all"
                      />
                    </div>

                    {formStatus === 'error' && (
                      <p className="text-xs text-rose-600 font-semibold">
                        Something went wrong. Please check your number or try again.
                      </p>
                    )}

                    {/* Single Dominant CTA */}
                    <button
                      type="submit"
                      disabled={formStatus === 'loading'}
                      className="w-full py-4 px-6 rounded-2xl bg-gradient-to-r from-blue-600 via-indigo-600 to-blue-700 hover:from-blue-700 hover:to-indigo-800 text-white font-extrabold text-base shadow-xl shadow-blue-600/30 hover:shadow-blue-600/50 transition-all duration-300 flex items-center justify-center gap-2 group cursor-pointer"
                    >
                      {formStatus === 'loading' ? (
                        <span>Processing Request...</span>
                      ) : (
                        <>
                          <span>Claim Free OPD Audit & System Breakdown</span>
                          <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>

                    <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                      <Lock size={12} className="text-emerald-600" />
                      <span>100% Confidential • Zero Obligation Strategy Call</span>
                    </div>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ─── VALUE PROPOSITION / SYSTEM BREAKDOWN (₹1.30 LAKH VALUE) ─── */}
      <section className="py-16 md:py-24 bg-slate-900 text-white relative">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-blue-400 text-xs font-black uppercase tracking-widest bg-blue-900/50 px-3 py-1 rounded-full border border-blue-700/50">
              The OPD Digital Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white">
              What You Get In The Online OPD Growth System™
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              A complete done-for-you healthcare growth stack valued at <strong className="text-amber-400">₹1,30,000</strong> engineered to convert online traffic into booked OPD appointments.
            </p>
          </div>

          {/* Value Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Globe,
                title: '1. Medical Website Engine',
                value: '₹45,000 Value',
                desc: 'Ultra-fast, mobile-optimized custom website built specifically for doctor positioning, treatments, and patient trust.',
              },
              {
                icon: Calendar,
                title: '2. OPD Booking Funnel',
                value: '₹30,000 Value',
                desc: 'Frictionless patient scheduling workflow that guides visitors from awareness to confirmed appointment slot.',
              },
              {
                icon: MessageSquare,
                title: '3. WhatsApp Integration',
                value: '₹25,000 Value',
                desc: 'Direct click-to-WhatsApp messaging triggers instantly so your clinic desk receives lead alerts immediately.',
              },
              {
                icon: Search,
                title: '4. Local SEO & Maps Stack',
                value: '₹30,000 Value',
                desc: 'Google Business Profile optimization, local citation structure, and review acquisition blueprint for your city.',
              },
            ].map((item, index) => (
              <div key={index} className="bg-slate-800/80 rounded-2xl p-6 border border-slate-700/70 hover:border-blue-500/50 transition-all flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-600/20 text-blue-400 flex items-center justify-center border border-blue-500/30">
                    <item.icon size={24} />
                  </div>
                  <div>
                    <span className="text-amber-400 text-xs font-bold uppercase tracking-wider">{item.value}</span>
                    <h3 className="text-lg font-bold text-white mt-1">{item.title}</h3>
                  </div>
                  <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Offer Callout with Single Focus CTA */}
          <div className="mt-12 bg-gradient-to-r from-blue-900/60 to-indigo-900/60 rounded-3xl p-6 sm:p-10 border border-blue-500/30 text-center space-y-6 max-w-4xl mx-auto">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
              Total Package Value: <span className="line-through text-slate-400">₹1,30,000</span> &rarr; Special Offer Available
            </h3>
            <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto">
              Our audit reveals exact ROI projections for your clinic before you make any commitment.
            </p>
            <div>
              <button
                onClick={scrollToForm}
                className="py-4 px-8 rounded-2xl bg-amber-400 hover:bg-amber-300 text-slate-950 font-black text-base shadow-lg transition-all inline-flex items-center gap-2 cursor-pointer"
              >
                <span>Request Free Clinic Audit Now</span>
                <ArrowRight size={18} />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* ─── SOCIAL PROOF & DOCTOR RESULTS ─── */}
      <section className="py-16 md:py-24 bg-white border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <span className="text-blue-600 text-xs font-extrabold uppercase tracking-widest bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Verified Case Studies & Reviews
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Trusted By Leading Doctors & Specialists
            </h2>
            <p className="text-slate-600 text-sm sm:text-base">
              See real feedback from doctors who scaled their OPD patient volume using our dedicated growth system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                quote: "Within 3 weeks of launching our OPD Growth System, patient inquiries jumped by over 140%. The direct WhatsApp booking streamlined our front-desk workload immensely.",
                name: "Dr. A. Mehta",
                specialty: "Orthopedic & Spine Surgeon",
                location: "Surat, Gujarat",
                rating: 5,
              },
              {
                quote: "Unlike regular web agencies that just design a standard site, Epsilon actually understands patient acquisition psychology for medical practitioners.",
                name: "Dr. P. Kulkarni",
                specialty: "Dermatologist & Cosmetologist",
                location: "Mumbai, Maharashtra",
                rating: 5,
              },
              {
                quote: "The free audit opened my eyes to how many potential patients we were losing every day. The done-for-you execution took less than an hour of my personal time.",
                name: "Dr. S. Patel",
                specialty: "Consultant Gynecologist",
                location: "Ahmedabad, Gujarat",
                rating: 5,
              },
            ].map((card, idx) => (
              <div key={idx} className="bg-slate-50 rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="flex text-amber-400">
                    {[...Array(card.rating)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <p className="text-slate-700 text-sm italic leading-relaxed">&ldquo;{card.quote}&rdquo;</p>
                </div>
                <div className="pt-4 border-t border-slate-200 flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                    {card.name.charAt(4)}
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 text-sm">{card.name}</h4>
                    <p className="text-xs text-slate-500">{card.specialty} • {card.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── FAQ SECTION ─── */}
      <section className="py-16 md:py-24 bg-slate-50">
        <div className="max-w-4xl mx-auto px-4 md:px-8">
          
          <div className="text-center mb-12 space-y-3">
            <span className="text-blue-600 text-xs font-extrabold uppercase tracking-widest bg-blue-100/70 px-3 py-1 rounded-full">
              Frequently Asked Questions
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900">
              Clear Answers For Busy Doctors
            </h2>
          </div>

          <div className="space-y-4">
            {[
              {
                q: "What is included in the Free OPD Growth Audit?",
                a: "Our team conducts a thorough evaluation of your online medical footprint, Google search visibility, competitors in your city, and front-desk conversion speed. We deliver a personalized strategy report highlighting exact steps to double your OPD enquiries.",
              },
              {
                q: "How much of my time will this require?",
                a: "Less than 45 minutes total. We respect your clinical schedule. We handle copywriting, design, development, domain setup, WhatsApp integration, and local SEO end-to-end.",
              },
              {
                q: "Is this suitable for my specific medical specialty?",
                a: "Yes! We have tailored frameworks for Dermatology, Orthopedics, Gynecology & IVF, Dental Clinics, Ophthalmology, General Surgery, and Multispecialty Hospitals.",
              },
              {
                q: "How fast can our clinic system go live?",
                a: "Our done-for-you launch timeline is 7 to 10 working days after our discovery call.",
              },
            ].map((faq, idx) => (
              <div key={idx} className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-xs">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full text-left p-5 flex items-center justify-between font-bold text-slate-900 text-base sm:text-lg hover:bg-slate-50 transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown size={20} className={`text-slate-400 transition-transform duration-200 ${openFaq === idx ? 'rotate-180 text-blue-600' : ''}`} />
                </button>
                {openFaq === idx && (
                  <div className="px-5 pb-5 text-slate-600 text-sm leading-relaxed border-t border-slate-100 pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ─── FINAL STICKY SINGLE CTA SECTION ─── */}
      <section className="py-12 bg-gradient-to-r from-blue-700 via-indigo-800 to-blue-900 text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h3 className="text-2xl sm:text-3xl font-extrabold">Ready To Scale Your OPD Patient Volume?</h3>
          <p className="text-blue-100 text-sm sm:text-base max-w-xl mx-auto">
            Claim your free audit today before this week&apos;s available consulting slots fill up.
          </p>
          <div>
            <button
              onClick={scrollToForm}
              className="py-4 px-8 rounded-2xl bg-white text-blue-700 hover:bg-blue-50 font-black text-base shadow-2xl transition-all inline-flex items-center gap-2 cursor-pointer"
            >
              <span>Jump To Free Audit Form</span>
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
