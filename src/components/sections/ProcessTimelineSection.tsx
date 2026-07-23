'use client';

import { motion } from 'framer-motion';
import { GitCommit, Layers, Code, Rocket, CheckCircle2, ShieldCheck } from 'lucide-react';

export function ProcessTimelineSection() {
  const steps = [
    {
      number: "01",
      icon: Layers,
      title: "Discovery & Architecture Blueprint",
      duration: "Days 1 - 5",
      desc: "We analyze your business goals, target user personas, technical constraints, and data models to produce a bulletproof software specification and interactive wireframes.",
      deliverable: "Technical Blueprint & Fixed Scope Contract"
    },
    {
      number: "02",
      icon: Code,
      title: "UI/UX Design & Prototype",
      duration: "Week 2",
      desc: "Our UI designers craft high-converting Figma prototypes with custom design systems, responsive micro-interactions, and WCAG AA contrast compliance.",
      deliverable: "Interactive Figma Prototype & Design System"
    },
    {
      number: "03",
      icon: GitCommit,
      title: "High-Velocity Sprint Engineering",
      duration: "Weeks 3 - 8",
      desc: "Senior Next.js & Fullstack engineers write clean, typed code in 2-week agile sprints. Daily async Loom updates and continuous integration staging deployments.",
      deliverable: "Live Staging Environment & 100% IP Code"
    },
    {
      number: "04",
      icon: ShieldCheck,
      title: "QA, Security Audit & Load Testing",
      duration: "Week 9",
      desc: "Comprehensive automated unit testing, end-to-end Cypress flows, penetration security scanning, and stress testing under high traffic spikes.",
      deliverable: "Security Audit Certificate & QA Sign-off"
    },
    {
      number: "05",
      icon: Rocket,
      title: "Production Launch & Go-Live",
      duration: "Week 10",
      desc: "Seamless zero-downtime deployment to Vercel / AWS cloud infrastructure with DNS configuration, SSL, analytics, and speed optimization.",
      deliverable: "Live Production System & Core Web Vitals Pass"
    },
    {
      number: "06",
      icon: CheckCircle2,
      title: "Warranty & Post-Launch Support",
      duration: "Ongoing",
      desc: "30-day bug-free warranty guarantee, team handoff, technical documentation, and optional monthly SLA maintenance squad.",
      deliverable: "Complete Codebase Transfer & Handoff Kit"
    }
  ];

  return (
    <section id="process" className="py-20 md:py-28 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-bold text-xs uppercase tracking-wider mb-4"
          >
            Transparent Engineering Framework
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Our 6-Step Software Execution Process
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed"
          >
            Zero guesswork. Predictable timelines, milestone reviews, and production-grade code at every phase.
          </motion.p>
        </div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {steps.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-slate-950 border border-slate-800 hover:border-blue-500/50 rounded-3xl p-6 md:p-8 flex flex-col justify-between relative group hover:-translate-y-1 transition-all"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-3xl font-black text-slate-700 group-hover:text-blue-500 transition-colors">
                    {step.number}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-300 text-xs font-bold">
                    {step.duration}
                  </span>
                </div>

                <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-blue-400 mb-4 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <step.icon className="w-5 h-5" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-xs md:text-sm text-slate-400 leading-relaxed mb-6">
                  {step.desc}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-800/80">
                <span className="text-[11px] uppercase tracking-wider font-extrabold text-slate-500 block mb-1">
                  Deliverable:
                </span>
                <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" /> {step.deliverable}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
