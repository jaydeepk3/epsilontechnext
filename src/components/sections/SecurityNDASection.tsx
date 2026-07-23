'use client';

import { motion } from 'framer-motion';
import { ShieldCheck, Lock, FileCheck, CheckCircle2, UserCheck, Key, Code2 } from 'lucide-react';

export function SecurityNDASection() {
  const securityGuarantees = [
    {
      icon: Lock,
      title: "100% IP & Source Code Ownership",
      desc: "You retain total legal ownership of every line of code, git commit, design asset, and database schema from day one under our bulletproof transfer contracts."
    },
    {
      icon: FileCheck,
      title: "Mutual NDA Signed Before Day 1",
      desc: "Your proprietary ideas, internal workflows, data pipelines, and business logic are fully protected by non-disclosure agreements before we touch any code."
    },
    {
      icon: ShieldCheck,
      title: "HIPAA, SOC2 & PCI-DSS Compliance",
      desc: "We build enterprise-grade architectures with AES-256 encryption at rest, TLS 1.3 in transit, and continuous security vulnerability scanning."
    },
    {
      icon: UserCheck,
      title: "Vetted Senior In-House Engineers",
      desc: "No unverified freelancers or sub-contractors. Every team member undergoes background checks and strict security training."
    },
    {
      icon: Key,
      title: "Zero Vendor Lock-In",
      desc: "Clean modular code built on industry standards (Next.js, Node, Postgres, AWS). Any senior engineering team can maintain or scale it instantly."
    },
    {
      icon: Code2,
      title: "Production CI/CD & Automated Testing",
      desc: "Automated unit tests, integration suites, and branch protections ensure zero breaking changes reach your live production environment."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden border-t border-b border-slate-800/80">
      {/* Glow Effects */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-bold text-xs uppercase tracking-wider mb-4"
          >
            <ShieldCheck className="w-4 h-4" /> Enterprise Security & Risk Mitigation
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Your Intellectual Property Is 100% Protected. Period.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed"
          >
            We operate with the legal compliance, security standards, and operational transparency required by US, EU, and UAE enterprises spending $10k–$100k+.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {securityGuarantees.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-slate-900/60 border border-slate-800 hover:border-blue-500/40 rounded-2xl p-6 md:p-8 transition-all hover:shadow-xl hover:shadow-blue-500/5 group"
            >
              <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-400/20 flex items-center justify-center mb-6 text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 flex items-center gap-2">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* NDA & Protection Banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-gradient-to-r from-blue-900/40 via-indigo-900/30 to-slate-900 border border-blue-500/30 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-400/30 flex items-center justify-center shrink-0 text-emerald-400">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Need a customized NDA signed before sharing specs?</h4>
              <p className="text-xs md:text-sm text-slate-300">We execute standard or custom mutual NDAs within 2 business hours.</p>
            </div>
          </div>
          <a
            href="mailto:contact@epsilon-technology.com?subject=Request%20Custom%20NDA"
            className="px-6 py-3 bg-white text-slate-900 hover:bg-slate-100 font-extrabold text-sm rounded-xl transition-all shadow-md active:scale-95 shrink-0"
          >
            Request Instant NDA
          </a>
        </motion.div>
      </div>
    </section>
  );
}
