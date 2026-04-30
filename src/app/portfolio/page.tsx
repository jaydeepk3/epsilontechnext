"use client";
import React, { useState } from 'react';
import { ProjectCard } from '@/components/portfolio/ProjectCard';
import { CaseStudyCard } from '@/components/portfolio/CaseStudyCard';
import Link from 'next/link';

const TABS = ['All', 'Web Apps', 'Mobile Apps', 'eCommerce', 'Government', 'Live Projects', 'Concepts'];

export default function PortfolioPage() {
  const [activeTab, setActiveTab] = useState('All');

  // Hardcoded Case Studies for demonstration
  const caseStudies = [
    {
      title: "DearPet.in",
      description: "India's premier pet grooming booking platform connecting pet parents with professional groomers.",
      country: "🇮🇳 India",
      industry: "Pet Care",
      type: "Web App",
      headlineResult: "50+ bookings handled daily · Admin saves 3+ hours/day",
      slug: "dearpet",
      imageUrl: "/portfolio/dearpet.png"
    },
    {
      title: "Ontapp.ca",
      description: "On-demand liquor delivery eCommerce platform serving multiple Canadian provinces.",
      country: "🇨🇦 Canada",
      industry: "Retail",
      type: "eCommerce",
      headlineResult: "200% increase in weekend orders · Fully compliant age-verification",
      slug: "ontapp",
      imageUrl: "/portfolio/ontapp.png"
    },
    {
      title: "Junagadh Police App",
      description: "Secure government Android app for managing police bandobast (deployment).",
      country: "🇮🇳 India",
      industry: "Government",
      type: "Mobile App",
      headlineResult: "1,000+ officers managed · Delivered strictly on time",
      slug: "junagadh-police",
      imageUrl: "/portfolio/junagadh-police.png"
    },
    {
      title: "Prabhav Lagnam",
      description: "Community-focused matrimonial application with advanced matching algorithms.",
      country: "🇮🇳 India",
      industry: "Social",
      type: "Mobile App",
      headlineResult: "10,000+ active profiles · Highly engaged user base",
      slug: "prabhav-lagnam",
      imageUrl: "/portfolio/prabhav-lagnam.png"
    }
  ];

  // Hardcoded Projects for demonstration
  const projects = [
    { title: "Feilder Cricket App", description: "Comprehensive cricket scoring and management app.", country: "🇮🇳", industry: "Sports", techStack: ["Flutter", "Firebase", "Node.js"], result: "1M+ matches scored globally", status: "live" as const, liveUrl: "https://play.google.com/store/apps/details?id=com.jnd.police.bandobast", type: "Mobile Apps", imageUrl: "/portfolio/feilder-app.jpeg" },
    { title: "eBike Rental App", description: "Seamless urban mobility booking experience.", country: "🇺🇸", industry: "Mobility", techStack: ["React Native", "Tailwind", "Stripe"], delivered: "3 weeks · iOS & Android", status: "concept" as const, type: "Mobile Apps", imageUrl: "/portfolio/ebike-app.webp" },
    { title: "Travel Planning App", description: "AI-assisted itinerary builder for global travelers.", country: "🇬🇧", industry: "Travel", techStack: ["React Native", "OpenAI", "Maps API"], delivered: "4 weeks · UI/UX", status: "concept" as const, type: "Mobile Apps", imageUrl: "/portfolio/travel-app.jpg" },
    { title: "Jewellery eCommerce", description: "High-end luxury jewelry shopping experience.", country: "🇦🇪", industry: "Retail", techStack: ["Next.js", "Shopify", "Framer Motion"], result: "Premium aesthetic achieved with sub-second page loads", status: "concept" as const, type: "eCommerce", imageUrl: "/portfolio/jewellery-website.webp" },
    { title: "Yoga Studio Website", description: "Class booking and studio management portal.", country: "🇺🇸", industry: "Health", techStack: ["Next.js", "TailwindCSS"], delivered: "2 weeks · Web", status: "concept" as const, type: "Web Apps", imageUrl: "/portfolio/yoga-website.webp" },
    { title: "Speevo Industries", description: "B2B catalog for a leading ceiling fan manufacturer.", country: "🇮🇳", industry: "Manufacturing", techStack: ["Next.js", "Tailwind", "PostgreSQL"], result: "40% increase in wholesale inquiries", status: "live" as const, liveUrl: "https://speevo.com", type: "Web Apps", imageUrl: "/portfolio/speevo.png" },
    { title: "Tisnix Logistics", description: "Real-time freight tracking and client portal.", country: "🇺🇸", industry: "Logistics", techStack: ["React", "Node.js", "AWS"], result: "Streamlined operations for 50+ fleet vehicles", status: "live" as const, liveUrl: "https://tisnix.com", type: "Web Apps", imageUrl: "/portfolio/tisnix-website.webp" },
    { title: "Rhodium Master", description: "Corporate presence for precious metals refiner.", country: "🇮🇳", industry: "Industrial", techStack: ["Next.js", "Sanity CMS"], result: "Modernized 20-year-old brand identity", status: "live" as const, liveUrl: "https://rhodiummaster.com", type: "Web Apps", imageUrl: "/portfolio/rhodium-website.webp" },
    { title: "Shreeram Clinic", description: "Patient appointment and marketing portal.", country: "🇮🇳", industry: "Healthcare", techStack: ["WordPress", "Custom Theme"], result: "Ranked #1 locally for top 5 medical keywords", status: "live" as const, liveUrl: "https://shreeramclinic.com", type: "Web Apps", imageUrl: "/portfolio/shreeram-clinic.png" },
  ];

  // Filtering Logic
  const filteredCaseStudies = caseStudies.filter(cs => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Live Projects') return true; // Assuming all case studies are live
    if (activeTab === 'Concepts') return false; 
    return cs.type === activeTab || cs.industry === activeTab;
  });

  const filteredProjects = projects.filter(p => {
    if (activeTab === 'All') return true;
    if (activeTab === 'Live Projects') return p.status === 'live';
    if (activeTab === 'Concepts') return p.status === 'concept';
    return p.type === activeTab;
  });

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white selection:bg-blue-500/30">
      
      {/* 1. Page Hero */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto text-center">
        <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight bg-gradient-to-r from-white via-gray-200 to-gray-500 bg-clip-text text-transparent">
          Our Work
        </h1>
        <p className="text-xl text-gray-400 max-w-2xl mx-auto">
          We engineer digital products that drive growth, efficiency, and scale. Explore our featured case studies and recent project deliveries.
        </p>
      </section>

      {/* 2. Honest 100+ Projects Block */}
      <section className="px-6 mb-20">
        <div className="max-w-4xl mx-auto bg-white/[0.03] border border-white/10 rounded-3xl p-8 md:p-10 backdrop-blur-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-emerald-500"></div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <span className="text-blue-400">Real Work.</span> Honest Results. 100+ Projects Delivered.
          </h2>
          <ul className="space-y-4 text-gray-300 mb-8">
            <li className="flex gap-3">
              <span className="text-blue-500 mt-1">✓</span>
              <span>We've successfully delivered over 100 projects since 2017—the portfolio below highlights select work where clients have explicitly given us permission to share their stories publicly.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 mt-1">✓</span>
              <span>A significant portion of our most complex engineering is protected by strict NDAs, or built as white-label solutions that power other leading digital agencies.</span>
            </li>
            <li className="flex gap-3">
              <span className="text-blue-500 mt-1">✓</span>
              <span>We maintain a deep, private archive of past projects across diverse sectors. We’re always happy to showcase highly relevant work tailored to your exact industry during our initial consultation.</span>
            </li>
          </ul>
          <div className="flex flex-col sm:flex-row items-center justify-between bg-black/40 p-5 rounded-2xl border border-white/5">
            <p className="font-medium text-gray-200 mb-4 sm:mb-0">Want to see work relevant to your industry?</p>
            <Link href="/custom-quote" className="px-6 py-2.5 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition-colors">
              Ask us on the discovery call
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Filter Tabs */}
      <section className="max-w-7xl mx-auto px-6 mb-12">
        <div className="flex flex-wrap items-center justify-center gap-2 md:gap-4 p-2 bg-white/5 rounded-full border border-white/10 w-fit mx-auto">
          {TABS.map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${activeTab === tab ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' : 'text-gray-400 hover:text-white hover:bg-white/10'}`}
            >
              {tab}
            </button>
          ))}
        </div>
      </section>

      {/* 4. Full Case Studies Grid */}
      {filteredCaseStudies.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
            <span className="w-8 h-[1px] bg-blue-500 inline-block"></span> Featured Case Studies
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {filteredCaseStudies.map((cs, idx) => (
              <CaseStudyCard key={idx} {...cs} />
            ))}
          </div>
        </section>
      )}

      {/* 5. More Projects Grid */}
      {filteredProjects.length > 0 && (
        <section className="max-w-7xl mx-auto px-6 mb-24">
          <h2 className="text-2xl font-bold mb-8 text-white flex items-center gap-3">
            <span className="w-8 h-[1px] bg-emerald-500 inline-block"></span> More Recent Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((p, idx) => (
              <ProjectCard key={idx} {...p} />
            ))}
          </div>
        </section>
      )}

      {/* 6. Final CTA */}
      <section className="max-w-5xl mx-auto px-6 pb-32 text-center">
        <div className="bg-gradient-to-br from-blue-900/40 to-emerald-900/40 border border-white/10 p-12 md:p-20 rounded-[3rem] relative overflow-hidden">
          <div className="absolute -top-24 -right-24 w-64 h-64 bg-blue-500/30 rounded-full blur-[100px]"></div>
          <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-emerald-500/30 rounded-full blur-[100px]"></div>
          
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 relative z-10">Ready to build something extraordinary?</h2>
          <p className="text-xl text-gray-300 mb-10 max-w-2xl mx-auto relative z-10">
            Tell us about your project requirements and we'll provide a comprehensive technical roadmap and fixed-price quote.
          </p>
          <Link href="/custom-quote" className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform shadow-xl shadow-white/10 relative z-10">
            Start Your Project →
          </Link>
        </div>
      </section>
    </div>
  );
}
