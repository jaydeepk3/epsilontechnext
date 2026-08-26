'use client';

import { motion } from 'framer-motion';
import { Target, Trophy, Clock, Cpu, HeartHandshake, ShieldCheck, ArrowRight, TrendingUp } from 'lucide-react';

export function WhyChooseUsSection() {
  const pillars = [
    {
      icon: Target,
      title: "Business Outcome Focus",
      desc: "We don't just build features; we build software architected to drive conversion rates, reduce churn, and maximize lifetime ROI."
    },
    {
      icon: TrendingUp,
      title: "Performance Digital Marketing",
      desc: "Meta Certified Partner team driving social media growth, viral Instagram reels, local SEO, and low-CPL lead generation funnels."
    },
    {
      icon: Trophy,
      title: "Top 1% Senior Talent",
      desc: "Your project is handled strictly by senior engineers and growth specialists who deliver measurable revenue growth."
    },
    {
      icon: Clock,
      title: "Rapid 2-Week Sprints",
      desc: "Fast, transparent iterations. You see real working code and live campaign analytics delivered consistently every 14 days."
    },
    {
      icon: Cpu,
      title: "Modern Tech Ecosystem",
      desc: "Built with Next.js App Router, React Native, Node.js, and Cloud Native AI infrastructure for ultimate performance and security."
    },
    {
      icon: ShieldCheck,
      title: "Transparent Fixed Pricing",
      desc: "Clear scope, predictable milestone-based pricing, and full ownership of code and campaign assets. No hidden invoice surprises."
    }
  ];

  return (
    <section className="py-20 md:py-28 bg-slate-950 text-white relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-bold text-xs uppercase tracking-wider mb-4"
          >
            The Epsilon Advantage
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Why Growth-Stage Founders & Enterprise Leaders Choose Epsilon
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed"
          >
            Engineered to remove all agency friction and deliver premium software platforms on schedule.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {pillars.map((item, idx) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.08 }}
              className="bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 rounded-3xl p-6 md:p-8 transition-all hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10 group"
            >
              <div className="w-12 h-12 rounded-2xl bg-blue-600/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400 group-hover:bg-blue-600 group-hover:text-white transition-all">
                <item.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <button
            onClick={() => {
              const booking = document.getElementById('booking') || document.getElementById('final-cta');
              booking?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-extrabold text-base rounded-2xl transition-all shadow-xl shadow-blue-600/25 active:scale-95"
          >
            Start Your Tech &amp; Growth Campaign <ArrowRight className="w-5 h-5" />
          </button>
        </motion.div>
      </div>
    </section>
  );
}
