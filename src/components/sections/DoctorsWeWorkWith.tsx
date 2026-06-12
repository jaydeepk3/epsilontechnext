'use client';

import Image from 'next/image';
import { MapPin, TrendingUp, User } from 'lucide-react';
import { motion } from 'framer-motion';

const doctors = [
    {
        name: "Rainbow Pedia & Physio",
        specialty: "Pediatric & Physiotherapy",
        city: "Junagadh",
        result: "Consistent Patient Flow",
        image: "/images/doctors/rainbow-pedia.webp",
        initials: "RP",
        color: "bg-blue-100 text-blue-600"
    },
    {
        name: "Dr. D.P. Vora",
        specialty: "Orthopeadic Surgeon",
        city: "Junagadh",
        result: "High Patient Retention",
        image: "/images/doctors/dr-dp-vora.webp",
        initials: "DV",
        color: "bg-green-100 text-green-600"
    },
    {
        name: "Trimurti Hospitals",
        specialty: "Multispecialty Care",
        city: "Junagadh",
        result: "Expanded Brand Reach",
        image: "/images/doctors/trimurti-hospital.webp",
        initials: "TH",
        color: "bg-purple-100 text-purple-600"
    },
    {
        name: "Dr. Bhavin Kapadiya",
        specialty: "Orthopedic Surgeon",
        city: "Junagadh",
        result: "Quality Surgical Leads",
        image: "/images/doctors/dr-bhavin-kapadiya.webp",
        initials: "BK",
        color: "bg-orange-100 text-orange-600"
    },
    {
        name: "Dr. Priyank Bagtharia",
        specialty: "Orthopedic Surgeon",
        city: "Junagadh",
        result: "High Engagement Reels",
        image: "/images/doctors/dr-priyank-bagtharia.webp",
        initials: "PB",
        color: "bg-pink-100 text-pink-600"
    },
    {
        name: "Shreeji Multispecialty Hospital",
        specialty: "Multispecialty Care",
        city: "Junagadh",
        result: "Consistent Patient Inquiries",
        image: "/images/doctors/shreeji-hospital.webp",
        initials: "SM",
        color: "bg-teal-100 text-teal-600"
    }
];

export function DoctorsWeWorkWith() {
    return (
        <section className="py-20 bg-slate-50">
            <div className="container mx-auto px-4 md:px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5 }}
                    className="text-3xl font-bold text-center text-slate-900 mb-12"
                >
                    Doctors We Work With
                </motion.h2>

                <motion.p
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                    className="text-center text-slate-500 mb-12 text-base"
                >
                    We&apos;ve helped doctors grow their clinics across India, UAE, and beyond.
                </motion.p>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {doctors.map((doc, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: i * 0.1 }}
                            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 hover:border-primary/30 transition-all text-center group hover:shadow-lg"
                        >
                            <div className="w-24 h-24 mx-auto mb-4 relative">
                                {doc.image ? (
                                    <Image
                                        src={doc.image}
                                        alt={doc.name}
                                        fill
                                        className="object-cover rounded-full border-4 border-slate-50 group-hover:border-primary/10 transition-colors"
                                    />
                                ) : (
                                    <div className={`w-full h-full rounded-full flex items-center justify-center text-2xl font-bold ${doc.color}`}>
                                        {doc.initials}
                                    </div>
                                )}
                            </div>
                            <h3 className="font-bold text-slate-900 text-lg">{doc.name}</h3>
                            <p className="text-primary text-sm font-medium mb-1">{doc.specialty}</p>
                            <div className="flex items-center justify-center gap-1 text-slate-500 text-xs mb-4">
                                <MapPin size={12} />
                                <span className="truncate max-w-[150px]">{doc.city}</span>
                            </div>
                            <div className="bg-green-50 text-green-700 px-3 py-2 rounded-lg text-sm font-bold flex items-center justify-center gap-2">
                                <TrendingUp size={14} />
                                {doc.result}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
