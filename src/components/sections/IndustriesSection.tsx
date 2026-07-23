'use client';

import { motion } from 'framer-motion';
import { ShoppingCart, Stethoscope, Building2, Layers, HeartPulse, Sparkles } from 'lucide-react';

export function IndustriesSection() {
  const industries = [
    {
      icon: ShoppingCart,
      name: "eCommerce & Retail Brands",
      focus: "Headless Shopify, Next.js Storefronts, High-Volume Checkout",
      desc: "Sub-second product pages, automated cart recovery via WhatsApp API, and custom ERP/inventory integrations that scale to thousands of orders per hour."
    },
    {
      icon: Stethoscope,
      name: "Healthcare & Telemedicine",
      focus: "HIPAA Compliance, Patient Portals, Doctor Scheduling",
      desc: "Secure patient record management, encrypted video consultations, electronic health record (EHR) sync, and automated appointment reminders."
    },
    {
      icon: Building2,
      name: "B2B SaaS & Tech Startups",
      focus: "MVP Launch, Micro-Frontends, AI Integrations, Subscription Engine",
      desc: "Rapid 8-week launch cycles for venture-backed startups looking to convert free trial users into long-term enterprise subscriptions."
    },
    {
      icon: HeartPulse,
      name: "Medical Marketing & Doctors",
      focus: "Lead Generation Engines, WhatsApp Booking, Reputation Automation",
      desc: "Custom high-converting lead generation engines designed specifically for medical clinics, cosmetic surgeons, and healthcare networks."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-bold text-xs uppercase tracking-wider mb-4"
          >
            <Layers className="w-4 h-4" /> Domain Specialization
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Tailored Engineering For High-Growth Industries
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed"
          >
            We bring deep domain expertise, regulatory compliance knowledge, and pre-built modular code patterns to accelerate your time-to-market.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="bg-slate-950 border border-slate-800 hover:border-blue-500/40 rounded-3xl p-6 md:p-8 hover:-translate-y-1 transition-all group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <ind.icon className="w-6 h-6" />
              </div>

              <span className="text-[11px] font-extrabold text-blue-400 uppercase tracking-wider block mb-2">
                {ind.focus}
              </span>

              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-300 transition-colors">
                {ind.name}
              </h3>

              <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
