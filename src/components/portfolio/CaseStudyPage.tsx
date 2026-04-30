import React from 'react';
import Link from 'next/link';

export interface CaseStudyPageProps {
  title: string;
  description: string;
  country: string;
  industry: string;
  type: string;
  timeline: string;
  challenge: React.ReactNode;
  solution: React.ReactNode;
  technicalDecision: string;
  results: { metric: string; explanation: string }[];
  techStack: string[];
  quote: string;
  clientName: string;
  clientRole: string;
  clientCompany: string;
  isVerified?: boolean;
  liveUrl?: string;
  heroImage?: string;
}

export const CaseStudyPage: React.FC<CaseStudyPageProps> = ({
  title,
  description,
  country,
  industry,
  type,
  timeline,
  challenge,
  solution,
  technicalDecision,
  results,
  techStack,
  quote,
  clientName,
  clientRole,
  clientCompany,
  isVerified = true,
  liveUrl,
  heroImage = '/placeholder-hero.jpg',
}) => {
  return (
    <article className="min-h-screen bg-[#0a0a0a] text-white">
      {/* A. HERO BLOCK */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={heroImage} alt={title} className="w-full h-full object-cover opacity-20" />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a]/50 via-[#0a0a0a]/80 to-[#0a0a0a]"></div>
        </div>
        
        <div className="max-w-5xl mx-auto relative z-10">
          <Link href="/portfolio" className="inline-flex items-center text-sm text-gray-400 hover:text-white mb-8 transition-colors">
            ← Back to Portfolio
          </Link>
          
          <div className="flex flex-wrap gap-3 mb-6">
            <span className="px-4 py-1.5 text-sm font-semibold bg-white/10 backdrop-blur-md rounded-full border border-white/10">{country}</span>
            <span className="px-4 py-1.5 text-sm font-semibold bg-white/10 backdrop-blur-md rounded-full border border-white/10">{industry}</span>
            <span className="px-4 py-1.5 text-sm font-semibold bg-blue-500/20 text-blue-300 backdrop-blur-md rounded-full border border-blue-500/30">{type}</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">{title}</h1>
          <p className="text-2xl text-gray-300 mb-10 max-w-3xl">{description}</p>
          
          <div className="flex flex-wrap gap-4">
            {liveUrl && (
              <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-full transition-all hover:shadow-lg hover:shadow-blue-500/25">
                Visit Live Project →
              </a>
            )}
            <Link href="/custom-quote" className="px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-full transition-all backdrop-blur-md border border-white/10">
              Start a Similar Project →
            </Link>
          </div>
        </div>
      </section>

      {/* B. OVERVIEW STRIP */}
      <section className="px-6 -mt-8 relative z-20">
        <div className="max-w-5xl mx-auto bg-[#141414] border border-white/10 rounded-2xl p-6 shadow-2xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 divide-x divide-white/10">
            <div className="px-4">
              <p className="text-sm text-gray-500 mb-1">Industry</p>
              <p className="font-semibold text-lg">{industry}</p>
            </div>
            <div className="px-4">
              <p className="text-sm text-gray-500 mb-1">Project Type</p>
              <p className="font-semibold text-lg">{type}</p>
            </div>
            <div className="px-4">
              <p className="text-sm text-gray-500 mb-1">Timeline</p>
              <p className="font-semibold text-lg">{timeline}</p>
            </div>
            <div className="px-4">
              <p className="text-sm text-gray-500 mb-1">Market</p>
              <p className="font-semibold text-lg">{country}</p>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-5xl mx-auto px-6 py-24">
        <div className="grid md:grid-cols-2 gap-16">
          {/* C. THE CHALLENGE */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="w-8 h-[1px] bg-red-500 inline-block"></span> The Challenge
            </h2>
            <div className="text-gray-300 space-y-6 text-lg leading-relaxed">
              {challenge}
            </div>
          </div>

          {/* D. OUR SOLUTION */}
          <div>
            <h2 className="text-3xl font-bold mb-6 text-white flex items-center gap-3">
              <span className="w-8 h-[1px] bg-blue-500 inline-block"></span> Our Solution
            </h2>
            <div className="text-gray-300 space-y-6 text-lg leading-relaxed mb-8">
              {solution}
            </div>
            
            <div className="bg-gradient-to-r from-blue-900/30 to-transparent border-l-4 border-blue-500 p-6 rounded-r-xl">
              <p className="text-sm text-blue-400 font-bold uppercase tracking-wider mb-2">Key Technical Decision</p>
              <p className="text-gray-200">{technicalDecision}</p>
            </div>
          </div>
        </div>
      </div>

      {/* E. RESULTS DELIVERED */}
      <section className="bg-[#141414] py-24 border-y border-white/5">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-12 text-center">Impact & Results</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {results.map((result, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
                <p className="text-4xl font-extrabold text-blue-400 mb-4">{result.metric}</p>
                <p className="text-gray-300 font-medium">{result.explanation}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* F. TECH STACK STRIP */}
      <section className="max-w-5xl mx-auto px-6 py-16 text-center border-b border-white/5">
        <p className="text-sm text-gray-500 font-bold uppercase tracking-widest mb-8">Technologies Used</p>
        <div className="flex flex-wrap justify-center gap-3">
          {techStack.map((tech, idx) => (
            <span key={idx} className="px-5 py-2.5 bg-[#1a1a1a] border border-white/10 rounded-xl text-gray-300 font-medium hover:border-white/30 transition-colors">
              {tech}
            </span>
          ))}
        </div>
      </section>

      {/* G. CLIENT QUOTE BLOCK */}
      <section className="max-w-4xl mx-auto px-6 py-24">
        <div className="relative">
          <span className="absolute -top-12 -left-8 text-9xl text-white/5 font-serif">"</span>
          <blockquote className="text-2xl md:text-4xl font-medium leading-tight text-white mb-10 relative z-10">
            {quote}
          </blockquote>
          <div className="flex items-center gap-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 to-emerald-500 flex items-center justify-center text-xl font-bold text-white shadow-lg">
              {clientName.split(' ').map(n => n[0]).join('')}
            </div>
            <div>
              <p className="font-bold text-lg text-white">{clientName}</p>
              <p className="text-gray-400">{clientRole}, {clientCompany}</p>
              {isVerified && (
                <p className="text-emerald-400 text-sm mt-1 flex items-center gap-1 font-medium">
                  ✓ Verified on Google
                </p>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* H. NEXT PROJECT CTA */}
      <section className="bg-gradient-to-b from-transparent to-blue-900/20 pt-16 pb-32">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Want results like this for your business?</h2>
          <p className="text-xl text-gray-400 mb-10">Tell us about your project — free consultation, no commitment.</p>
          
          <Link href="/custom-quote" className="inline-flex items-center gap-2 px-10 py-5 bg-white text-black text-lg font-bold rounded-full hover:scale-105 transition-transform shadow-2xl shadow-white/10 mb-10">
            Get a Free Custom Quote →
          </Link>
          
          <div className="flex flex-wrap justify-center gap-6 md:gap-12 text-gray-300 font-medium">
            <span className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Response in 4 hrs</span>
            <span className="flex items-center gap-2"><span className="text-emerald-500">✓</span> No upfront payment</span>
            <span className="flex items-center gap-2"><span className="text-emerald-500">✓</span> Fixed-price quote</span>
          </div>
        </div>
      </section>
    </article>
  );
};
