'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, TrendingUp, CheckCircle, Clock, ExternalLink } from 'lucide-react';

export function CaseStudiesSection() {
  const [activeCategory, setActiveCategory] = useState<'all' | 'ecommerce' | 'saas' | 'healthcare'>('all');

  const caseStudies = [
    {
      id: 'ontapp',
      category: 'ecommerce',
      client: 'Ontapp (Canada)',
      title: 'Scaling an On-Demand Commerce Engine to Handle High-Volume Local Fulfillment',
      problem: 'Legacy Shopify stack caused checkout delays, poor mobile performance, and failed real-time order routing during peak hours.',
      solution: 'Re-engineered platform into a high-performance headless Next.js frontend with automated micro-fulfillment APIs and WhatsApp instant notification pipelines.',
      technologies: ['Next.js App Router', 'TypeScript', 'Node.js', 'PostgreSQL', 'Tailwind CSS', 'WhatsApp Business API'],
      timeline: '8 Weeks Sprint',
      metrics: [
        { label: 'Conversion Increase', value: '+340%' },
        { label: 'Checkout Speed', value: '0.4s LCP' },
        { label: 'Monthly GMV Processed', value: '$1.2M+' }
      ],
      testimonial: {
        quote: "Epsilon Technext completely transformed our digital store architecture. Their team delivered ahead of schedule and our conversion rate quadrupled within the first 30 days.",
        author: "Client Project Director",
        company: "Ontapp eCommerce"
      }
    },
    {
      id: 'medicare-saas',
      category: 'healthcare',
      title: 'HIPAA-Compliant Doctor Consultation & Patient Portal Engine',
      problem: 'Healthcare provider struggled with patient drop-offs, inefficient manual scheduling, and stringent data security requirements across 15+ clinic locations.',
      solution: 'Architected custom HIPAA-compliant web app featuring instant appointment booking, encrypted tele-consultation channels, and automated WhatsApp patient reminders.',
      technologies: ['React', 'Node.js', 'AWS HealthLake', 'Twilio', 'PostgreSQL', 'Docker'],
      timeline: '12 Weeks Sprint',
      metrics: [
        { label: 'Patient Bookings', value: '+210%' },
        { label: 'No-Show Reduction', value: '68%' },
        { label: 'HIPAA Rating', value: '100% Passed' }
      ],
      testimonial: {
        quote: "The patient experience is night and day. Epsilon's deep understanding of regulatory compliance saved us months of auditing and thousands in custom security work.",
        author: "Chief Technology Officer",
        company: "Regional Health Network"
      }
    },
    {
      id: 'b2b-saas',
      category: 'saas',
      title: 'AI-Powered Workflow Automation & Analytics Platform',
      problem: 'Enterprise SaaS product suffered from slow dashboard loads (>6 seconds) and high churn among enterprise users during trial onboarding.',
      solution: 'Refactored backend data aggregation pipelines and built a sleek sub-second React micro-frontend analytics dashboard with custom AI insights generation.',
      technologies: ['Next.js', 'Python', 'FastAPI', 'Redis', 'Tailwind CSS', 'OpenAI API'],
      timeline: '10 Weeks Sprint',
      metrics: [
        { label: 'Trial to Paid Conversion', value: '+85%' },
        { label: 'Dashboard Latency', value: '120ms' },
        { label: 'User Retention', value: '+45%' }
      ],
      testimonial: {
        quote: "Epsilon delivered a modern SaaS application that impressed our VC investors and immediately increased our MRR conversion rates.",
        author: "Founder & CEO",
        company: "Automation Tech SaaS"
      }
    }
  ];

  const filteredStudies = activeCategory === 'all'
    ? caseStudies
    : caseStudies.filter(c => c.category === activeCategory);

  return (
    <section id="portfolio-stories" className="py-20 md:py-28 bg-slate-900 text-white relative border-b border-slate-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-400/20 text-emerald-400 font-bold text-xs uppercase tracking-wider mb-4"
          >
            <TrendingUp className="w-4 h-4" /> Proven Business Results
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Real Client ROI Case Stories
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed"
          >
            How we help startups and enterprise brands turn complex software challenges into measurable revenue growth.
          </motion.p>

          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {[
              { id: 'all', label: 'All Success Stories' },
              { id: 'ecommerce', label: 'eCommerce Brands' },
              { id: 'saas', label: 'SaaS Platforms' },
              { id: 'healthcare', label: 'Healthcare & Medical' },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-800 text-slate-400 hover:text-white hover:bg-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Case Study Cards */}
        <div className="space-y-12 max-w-5xl mx-auto">
          <AnimatePresence mode="wait">
            {filteredStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-slate-950 border border-slate-800 hover:border-slate-700 rounded-3xl p-6 md:p-10 shadow-2xl relative overflow-hidden"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Story details */}
                  <div className="lg:col-span-7 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center gap-3 text-xs font-bold text-blue-400 mb-3">
                        <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-400/20 uppercase tracking-wider">
                          {study.client}
                        </span>
                        <span className="flex items-center gap-1 text-slate-400">
                          <Clock className="w-3.5 h-3.5" /> {study.timeline}
                        </span>
                      </div>

                      <h3 className="text-2xl md:text-3xl font-extrabold text-white leading-tight mb-4">
                        {study.title}
                      </h3>

                      {/* Problem vs Solution */}
                      <div className="space-y-4 text-sm text-slate-300 mb-6">
                        <div className="bg-slate-900/80 border border-slate-800 rounded-xl p-4">
                          <strong className="text-rose-400 block mb-1 font-bold">The Challenge:</strong>
                          <p>{study.problem}</p>
                        </div>
                        <div className="bg-blue-950/30 border border-blue-900/40 rounded-xl p-4">
                          <strong className="text-blue-400 block mb-1 font-bold">The Solution:</strong>
                          <p>{study.solution}</p>
                        </div>
                      </div>

                      {/* Tech Stack Pills */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.technologies.map(tech => (
                          <span key={tech} className="text-[11px] font-semibold text-slate-400 bg-slate-900 border border-slate-800 px-2.5 py-1 rounded-lg">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Testimonial */}
                    <div className="pt-4 border-t border-slate-800/80">
                      <p className="text-xs md:text-sm text-slate-300 italic mb-2">
                        &quot;{study.testimonial.quote}&quot;
                      </p>
                      <p className="text-xs font-bold text-white">
                        — {study.testimonial.author}, <span className="text-slate-400">{study.testimonial.company}</span>
                      </p>
                    </div>
                  </div>

                  {/* Right ROI Metrics Card */}
                  <div className="lg:col-span-5 flex flex-col justify-between bg-slate-900/90 border border-slate-800 rounded-2xl p-6 md:p-8">
                    <div>
                      <h4 className="text-xs uppercase tracking-wider font-extrabold text-slate-400 mb-6 flex items-center justify-between">
                        <span>Measurable Business Results</span>
                        <TrendingUp className="w-4 h-4 text-emerald-400" />
                      </h4>

                      <div className="space-y-6">
                        {study.metrics.map(metric => (
                          <div key={metric.label} className="border-b border-slate-800 pb-4 last:border-0 last:pb-0">
                            <span className="text-3xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 block">
                              {metric.value}
                            </span>
                            <span className="text-xs font-semibold text-slate-400 mt-1 block">
                              {metric.label}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <button
                      onClick={() => {
                        const booking = document.getElementById('booking') || document.getElementById('final-cta');
                        booking?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="mt-8 w-full py-3.5 bg-blue-600 hover:bg-blue-500 font-bold text-sm text-white rounded-xl transition-all flex items-center justify-center gap-2 shadow-lg shadow-blue-600/20 active:scale-95"
                    >
                      <span>Build Similar Platform</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
