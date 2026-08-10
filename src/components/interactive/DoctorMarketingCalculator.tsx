'use client';

import React, { useState } from 'react';
import { Calculator, Users, TrendingUp, Star, Award, ArrowRight, CheckCircle, Sparkles, PhoneCall } from 'lucide-react';
import Link from 'next/link';

interface SpecialtyData {
    name: string;
    avgTicket: string;
    estGrowthMultiplier: number;
    gmbTargetReviews: number;
    topSearchKeyword: string;
}

const specialties: Record<string, SpecialtyData> = {
    orthopedic: {
        name: 'Orthopedic Surgeon',
        avgTicket: '₹15,000 - ₹45,000',
        estGrowthMultiplier: 1.45,
        gmbTargetReviews: 85,
        topSearchKeyword: 'Best Orthopedic Doctor in Junagadh',
    },
    gynecologist: {
        name: 'Gynecologist & IVF',
        avgTicket: '₹20,000 - ₹60,000',
        estGrowthMultiplier: 1.5,
        gmbTargetReviews: 120,
        topSearchKeyword: 'Best Gynecologist in Junagadh',
    },
    dermatologist: {
        name: 'Dermatologist & Cosmetologist',
        avgTicket: '₹3,000 - ₹12,000',
        estGrowthMultiplier: 1.6,
        gmbTargetReviews: 150,
        topSearchKeyword: 'Skin Specialist Near Me Junagadh',
    },
    pediatrician: {
        name: 'Pediatrician / Child Specialist',
        avgTicket: '₹1,500 - ₹5,000',
        estGrowthMultiplier: 1.4,
        gmbTargetReviews: 90,
        topSearchKeyword: 'Child Doctor Zanzarda Road Junagadh',
    },
    dental: {
        name: 'Dentist / Dental Surgeon',
        avgTicket: '₹4,000 - ₹25,000',
        estGrowthMultiplier: 1.55,
        gmbTargetReviews: 110,
        topSearchKeyword: 'Best Dental Clinic Moti Baug Junagadh',
    },
    general: {
        name: 'General / Physician / Surgeon',
        avgTicket: '₹2,000 - ₹10,000',
        estGrowthMultiplier: 1.35,
        gmbTargetReviews: 75,
        topSearchKeyword: 'Clinic Near Kalwa Chowk Junagadh',
    },
};

export function DoctorMarketingCalculator() {
    const [selectedSpecialty, setSelectedSpecialty] = useState<string>('orthopedic');
    const [currentPatients, setCurrentPatients] = useState<number>(120);

    const activeSpecialty = specialties[selectedSpecialty] || specialties.orthopedic;
    const estimatedNewPatients = Math.round(currentPatients * activeSpecialty.estGrowthMultiplier);
    const growthDelta = estimatedNewPatients - currentPatients;

    return (
        <div className="w-full bg-gradient-to-br from-slate-900 via-slate-950 to-sky-950 text-white rounded-[40px] p-6 sm:p-10 md:p-12 shadow-2xl border border-sky-500/20 relative overflow-hidden my-12">
            {/* Background Glow Accents */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-500/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />

            <div className="relative z-10">
                {/* Header */}
                <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mb-10 pb-8 border-b border-slate-800">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-500/10 border border-sky-400/30 text-sky-400 font-bold text-xs uppercase tracking-widest mb-3">
                            <Calculator size={14} /> Interactive OPD Growth Calculator
                        </div>
                        <h3 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight">
                            Estimate Your Clinic&apos;s Digital Potential in Junagadh
                        </h3>
                    </div>
                    <div className="hidden lg:flex items-center gap-2 bg-slate-900/80 px-4 py-2 rounded-2xl border border-slate-800 text-xs font-semibold text-slate-300">
                        <Sparkles className="text-amber-400" size={16} /> 2026 Junagadh Market Data
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                    {/* Controls Column */}
                    <div className="lg:col-span-6 space-y-6">
                        {/* Select Specialty */}
                        <div>
                            <label className="block text-xs font-black text-slate-400 uppercase tracking-widest mb-3">
                                Select Your Medical Specialty
                            </label>
                            <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                                {Object.entries(specialties).map(([key, data]) => {
                                    const isSelected = selectedSpecialty === key;
                                    return (
                                        <button
                                            key={key}
                                            type="button"
                                            onClick={() => setSelectedSpecialty(key)}
                                            className={`p-3 rounded-2xl text-xs font-bold text-left transition-all duration-300 border ${
                                                isSelected
                                                    ? 'bg-sky-600 border-sky-400 text-white shadow-lg shadow-sky-600/30 scale-[1.02]'
                                                    : 'bg-slate-900/70 border-slate-800 text-slate-300 hover:bg-slate-800 hover:border-slate-700'
                                            }`}
                                        >
                                            <span className="block truncate">{data.name.split('/')[0]}</span>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Patients Slider */}
                        <div className="bg-slate-900/60 p-6 rounded-3xl border border-slate-800 space-y-4">
                            <div className="flex justify-between items-center">
                                <label className="text-xs font-black text-slate-400 uppercase tracking-widest">
                                    Current Monthly OPD Walk-ins
                                </label>
                                <span className="text-2xl font-black text-sky-400 bg-sky-950/80 px-4 py-1 rounded-xl border border-sky-800/50">
                                    {currentPatients}
                                </span>
                            </div>
                            <input
                                type="range"
                                min={30}
                                max={500}
                                step={10}
                                value={currentPatients}
                                onChange={(e) => setCurrentPatients(Number(e.target.value))}
                                className="w-full h-2.5 bg-slate-800 rounded-lg appearance-none cursor-pointer accent-sky-500"
                            />
                            <div className="flex justify-between text-[11px] font-bold text-slate-500">
                                <span>30 patients/mo</span>
                                <span>250 patients/mo</span>
                                <span>500+ patients/mo</span>
                            </div>
                        </div>

                        {/* Top Searched Keyword Insight */}
                        <div className="p-5 rounded-3xl bg-slate-900/40 border border-slate-800/80 flex items-start gap-4">
                            <div className="p-3 bg-sky-500/10 text-sky-400 rounded-2xl shrink-0">
                                <Users size={20} />
                            </div>
                            <div>
                                <span className="text-[10px] font-black uppercase text-slate-400 tracking-wider">Top Search Intent in Junagadh</span>
                                <p className="text-sm font-bold text-white mt-0.5">&quot;{activeSpecialty.topSearchKeyword}&quot;</p>
                            </div>
                        </div>
                    </div>

                    {/* Results Column */}
                    <div className="lg:col-span-6 bg-gradient-to-b from-slate-900 to-slate-950 p-6 sm:p-8 rounded-3xl border border-sky-500/30 flex flex-col justify-between relative shadow-xl">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <span className="text-xs font-black uppercase tracking-widest text-slate-400">Projected 90-Day Outcome</span>
                                <span className="px-3 py-1 bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 rounded-full text-xs font-extrabold flex items-center gap-1.5">
                                    <TrendingUp size={14} /> +{Math.round((activeSpecialty.estGrowthMultiplier - 1) * 100)}% Growth Rate
                                </span>
                            </div>

                            {/* Stat Card */}
                            <div className="grid grid-cols-2 gap-4">
                                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide block mb-1">Estimated OPD/Month</span>
                                    <div className="text-3xl sm:text-4xl font-black text-white flex items-baseline gap-2">
                                        {estimatedNewPatients}
                                        <span className="text-xs font-bold text-emerald-400">+{growthDelta} new</span>
                                    </div>
                                </div>

                                <div className="p-5 rounded-2xl bg-slate-900 border border-slate-800">
                                    <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wide block mb-1">Target Google Reviews</span>
                                    <div className="text-3xl sm:text-4xl font-black text-amber-400 flex items-center gap-1">
                                        {activeSpecialty.gmbTargetReviews}+ <Star size={20} className="fill-amber-400 text-amber-400" />
                                    </div>
                                </div>
                            </div>

                            {/* Key Takeaways */}
                            <div className="space-y-2.5 pt-2">
                                {[
                                    `Rank top 3 on Google Maps for ${activeSpecialty.name} in Junagadh`,
                                    `Automate 24/7 OPD appointment bookings via WhatsApp API`,
                                    `Build patient trust with high-converting Gujarati Reels`
                                ].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 text-xs font-semibold text-slate-300">
                                        <CheckCircle size={16} className="text-sky-400 shrink-0" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA button inside calculator */}
                        <div className="mt-8 pt-6 border-t border-slate-800">
                            <Link
                                href="/contacts"
                                className="w-full py-4 px-6 bg-gradient-to-r from-sky-500 to-indigo-600 hover:from-sky-400 hover:to-indigo-500 text-white rounded-2xl font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 shadow-lg shadow-sky-600/30 group"
                            >
                                <PhoneCall size={18} />
                                <span>Get Custom Growth Plan for Your Clinic</span>
                                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
