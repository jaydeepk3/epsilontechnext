'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { HelpCircle, ChevronDown, CheckCircle2 } from 'lucide-react';

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: "Do you offer Digital Marketing alongside custom software development?",
      a: "Yes! Epsilon is both a software engineering agency and an official Meta Certified Partner. We handle end-to-end digital marketing including Facebook & Instagram Meta Ads, viral Reels scriptwriting/editing, local & technical SEO, and lead funnel automation to drive customer inquiries for your business."
    },
    {
      q: "What is your typical project scope and budget requirement?",
      a: "Our core engineering and growth engagements range between $5,000 and $100,000 depending on platform complexity, marketing budget, and scope. We specialize in fixed-scope milestone deliverables so you know your exact investment upfront with zero billing surprises."
    },
    {
      q: "Do we get full intellectual property (IP) and source code ownership?",
      a: "Yes, 100%. Under our legal agreement, all code, Git repositories, architectural designs, ad creatives, dynamic assets, and database schemas are completely owned by your company upon payment. We sign strict mutual NDAs before work begins."
    },
    {
      q: "How fast can you deliver software or launch marketing campaigns?",
      a: "Digital marketing campaigns and Meta ads can be launched in as little as 5 to 7 days. Software MVP builds or full web platform re-architectures take 4 to 12 weeks with live demo releases every 2 weeks."
    },
    {
      q: "What happens if we already have an existing legacy code base or active ad account?",
      a: "We perform a thorough technical and marketing audit. We can optimize your existing ad setups, integrate Meta Server-Side Conversion API (CAPI), and refactor your legacy stack without downtime."
    },
    {
      q: "Who actually handles our account? Are tasks offshore outsourced?",
      a: "No unverified freelancers. Your project is managed directly by senior software architects and Meta-certified performance marketers with dedicated transparent reporting."
    },
    {
      q: "What support and performance reporting do you offer after go-live?",
      a: "Every tech engagement includes a 30-day bug-free warranty and full technical documentation handoff. Marketing clients receive bi-weekly transparent reporting showing exact lead acquisition, cost per lead (CPL), and ROI."
    }
  ];

  return (
    <section id="faq" className="py-20 md:py-28 bg-slate-950 text-white relative border-b border-slate-800">
      <div className="container mx-auto px-4 md:px-8 lg:px-12">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-400/20 text-blue-400 font-bold text-xs uppercase tracking-wider mb-4"
          >
            <HelpCircle className="w-4 h-4" /> Answering Buying Objections
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-extrabold tracking-tight text-white"
          >
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 text-base md:text-lg text-slate-400 leading-relaxed"
          >
            Everything you need to know about our engineering standards, legal guarantees, and pricing structure.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden transition-colors"
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : idx)}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 font-bold text-base md:text-lg text-white hover:text-blue-400 transition-colors"
                >
                  <span className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-blue-400 shrink-0" />
                    {faq.q}
                  </span>
                  <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 shrink-0 ${isOpen ? 'rotate-180 text-blue-400' : ''}`} />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-6 pb-6 pt-0 text-sm md:text-base text-slate-300 leading-relaxed border-t border-slate-800/60 mt-2"
                    >
                      <p className="pt-4">{faq.a}</p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
