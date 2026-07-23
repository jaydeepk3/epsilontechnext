'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Cpu, Globe, Server, Database, Smartphone, ShieldCheck, Zap } from 'lucide-react';

export function TechEcosystemSection() {
  const [activeCategory, setActiveCategory] = useState<'frontend' | 'backend' | 'cloud' | 'mobile'>('frontend');

  const techData = {
    frontend: {
      category: "Frontend Engineering",
      icon: Globe,
      description: "Sub-second load times, SSR/SSG dynamic rendering, dynamic animations, and SEO excellence.",
      items: [
        { name: "Next.js App Router", desc: "React 19 Server Components, Streaming SSR & Edge Rendering" },
        { name: "TypeScript", desc: "100% strict type safety & zero runtime reference crashes" },
        { name: "Tailwind CSS v4", desc: "Utility-first design system with minimal CSS bundle sizes" },
        { name: "Framer Motion", desc: "Smooth dynamic micro-animations & scroll interactions" }
      ]
    },
    backend: {
      category: "Backend & Microservices",
      icon: Server,
      description: "High-throughput API endpoints, automated background workers, and resilient data processing.",
      items: [
        { name: "Node.js / Express", desc: "Asynchronous non-blocking event-driven backend architectures" },
        { name: "Python / FastAPI", desc: "High performance AI model integrations & data pipelines" },
        { name: "Prisma & PostgreSQL", desc: "Relational database schema modeling with ACID compliance" },
        { name: "Redis Caching", desc: "Sub-millisecond session caching & pub/sub message queues" }
      ]
    },
    cloud: {
      category: "Cloud, DevOps & AI",
      icon: Cpu,
      description: "Enterprise scale cloud infrastructure, automated CI/CD pipelines, and LLM integrations.",
      items: [
        { name: "AWS & Vercel Enterprise", desc: "Global CDN distribution with 99.99% SLA uptime" },
        { name: "Docker & Kubernetes", desc: "Containerized deployment pipelines with auto-scaling" },
        { name: "OpenAI / Claude API", desc: "Custom AI agents, RAG document search, & automated chat" },
        { name: "WhatsApp Business API", desc: "Scale customer conversations, automated transactional alerts" }
      ]
    },
    mobile: {
      category: "Mobile App Engineering",
      icon: Smartphone,
      description: "Native-quality cross-platform mobile apps published to iOS App Store & Google Play.",
      items: [
        { name: "React Native / Expo", desc: "Single codebase driving native 60fps iOS and Android apps" },
        { name: "Push Notifications", desc: "Real-time user engagement via Firebase FCM & OneSignal" },
        { name: "Offline Sync Engine", desc: "Local SQLite storage with automatic background cloud sync" },
        { name: "Biometric Auth", desc: "Secure FaceID and TouchID hardware authentication" }
      ]
    }
  };

  const current = techData[activeCategory];

  return (
    <section className="py-20 md:py-28 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-bold text-xs uppercase tracking-wider mb-4"
          >
            <Cpu className="w-4 h-4" /> Production-Grade Stack
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Our Modern Technology Ecosystem
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed"
          >
            We build exclusively with industry-standard, future-proof technologies engineered for high performance, maintainability, and security.
          </motion.p>

          {/* Navigation Category Buttons */}
          <div className="flex flex-wrap justify-center gap-2 mt-8">
            {[
              { id: 'frontend', label: 'Frontend' },
              { id: 'backend', label: 'Backend & APIs' },
              { id: 'cloud', label: 'Cloud & AI' },
              { id: 'mobile', label: 'Mobile Apps' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveCategory(tab.id as any)}
                className={`px-5 py-2.5 rounded-xl text-xs md:text-sm font-bold transition-all ${
                  activeCategory === tab.id
                    ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/30'
                    : 'bg-slate-900 border border-slate-800 text-slate-400 hover:text-white'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Category Card */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="max-w-4xl mx-auto bg-slate-900 border border-slate-800 rounded-3xl p-6 md:p-10 shadow-2xl"
          >
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-slate-800">
              <div className="w-12 h-12 rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                <current.icon className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">{current.category}</h3>
                <p className="text-xs md:text-sm text-slate-400">{current.description}</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {current.items.map(tech => (
                <div key={tech.name} className="bg-slate-950/80 border border-slate-800/80 rounded-2xl p-5 hover:border-blue-500/40 transition-colors">
                  <h4 className="text-base font-extrabold text-white mb-1 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-400" /> {tech.name}
                  </h4>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {tech.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
