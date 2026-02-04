"use client";

import { Mail, Phone, MapPin, Globe } from 'lucide-react';
import { motion } from 'framer-motion';

const offices = [
    {
        city: "Junagadh",
        country: "India (HQ)",
        address: "Epsilon Technology, Junagadh, Gujarat, India - 362001",
        phone: "+91 91066 98776",
        email: "contact@epsilon-technology.com",
        type: "Headquarters"
    },
    {
        city: "Ahmedabad",
        country: "India",
        address: "Sindhu Bhavan Road, Bodakdev, Ahmedabad, Gujarat - 380054",
        phone: "",
        email: "ahmedabad@epsilon-technology.com",
        type: "Development Center"
    },
    {
        city: "Amsterdam",
        country: "Netherlands",
        address: "Strawinskylaan 3051, 1077 ZX Amsterdam, Netherlands",
        phone: "",
        email: "europe@epsilon-technology.com",
        type: "European Sales Office"
    }
];

export function ContactDetails() {
    return (
        <section className="py-24 bg-white" id="contact-details">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                        Our Global Presence
                    </h2>
                    <p className="text-lg text-slate-600 max-w-2xl mx-auto">
                        We are strategically located to serve our clients across different time zones and regions.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {offices.map((office, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:shadow-xl hover:bg-white transition-all group"
                        >
                            <div className="mb-6 inline-flex items-center justify-center p-3 rounded-2xl bg-sky-100 text-sky-600 group-hover:bg-sky-600 group-hover:text-white transition-colors">
                                <MapPin size={24} />
                            </div>

                            <div className="mb-4">
                                <span className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-1 block">
                                    {office.type}
                                </span>
                                <h3 className="text-2xl font-bold text-slate-900">
                                    {office.city}, <span className="text-slate-500 font-medium">{office.country}</span>
                                </h3>
                            </div>

                            <div className="space-y-4 text-slate-600">
                                <p className="flex items-start gap-3">
                                    <MapPin size={18} className="shrink-0 mt-1 text-slate-400" />
                                    <span>{office.address}</span>
                                </p>

                                <p className="flex items-center gap-3">
                                    <Mail size={18} className="shrink-0 text-slate-400" />
                                    <a href={`mailto:${office.email}`} className="hover:text-sky-600 transition-colors lowercase">
                                        {office.email}
                                    </a>
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
