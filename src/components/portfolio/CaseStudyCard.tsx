import React from 'react';
import Link from 'next/link';

interface CaseStudyCardProps {
  title: string;
  description: string;
  country: string;
  industry: string;
  type: string;
  headlineResult: string;
  slug: string;
  imageUrl?: string;
}

export const CaseStudyCard: React.FC<CaseStudyCardProps> = ({
  title,
  description,
  country,
  industry,
  type,
  headlineResult,
  slug,
  imageUrl = '/placeholder-case-study.jpg',
}) => {
  return (
    <Link href={`/portfolio/${slug}`} className="group block h-full">
      <div className="flex flex-col bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden hover:border-slate-700 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 h-full">
        
        {/* Top Image Banner / Preview */}
        <div className="relative w-full h-64 sm:h-72 overflow-hidden bg-slate-950 p-4 flex items-center justify-center">
          <div className="w-full h-full relative rounded-xl overflow-hidden border border-slate-800 shadow-inner">
            <img 
              src={imageUrl} 
              alt={title} 
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
          </div>
          
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-2 z-10">
            <span className="px-3 py-1 text-xs font-semibold bg-slate-900/90 backdrop-blur-md rounded-full text-white border border-slate-700">
              {country}
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-slate-900/90 backdrop-blur-md rounded-full text-white border border-slate-700">
              {industry}
            </span>
            <span className="px-3 py-1 text-xs font-semibold bg-blue-600 backdrop-blur-md rounded-full text-white">
              {type}
            </span>
          </div>
        </div>

        {/* Content Section Below */}
        <div className="p-6 md:p-8 flex flex-col justify-between flex-grow bg-slate-900">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
              {title}
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              {description}
            </p>
          </div>
          
          <div>
            <div className="bg-blue-950/40 border border-blue-800/40 rounded-xl p-4 mb-6">
              <p className="text-blue-300 text-xs md:text-sm font-semibold flex items-center gap-2">
                <span className="text-lg">🏆</span> {headlineResult}
              </p>
            </div>

            <div className="flex items-center justify-between text-xs md:text-sm text-white font-bold pt-2 border-t border-slate-800">
              <span>Read Case Story</span> 
              <span className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center group-hover:bg-blue-600 group-hover:translate-x-1 transition-all">
                →
              </span>
            </div>
          </div>
        </div>

      </div>
    </Link>
  );
};
