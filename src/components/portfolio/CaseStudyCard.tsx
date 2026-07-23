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
      <div className="flex flex-col md:flex-row bg-white/5 border border-white/10 rounded-3xl overflow-hidden hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/20 h-full">
        
        {/* Image Side */}
        <div className="md:w-1/2 relative overflow-hidden bg-slate-100 flex items-center justify-center min-h-[300px]">
          <img 
            src={imageUrl} 
            alt={title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 text-xs font-semibold bg-slate-900/80 backdrop-blur-md rounded-full text-white">
                {country}
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-slate-900/80 backdrop-blur-md rounded-full text-white">
                {industry}
              </span>
              <span className="px-3 py-1 text-xs font-semibold bg-blue-600 backdrop-blur-md rounded-full text-white">
                {type}
              </span>
            </div>
          </div>
        </div>

        {/* Content Side */}
        <div className="md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
          <h3 className="text-3xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-400 mb-6 text-lg">
            {description}
          </p>
          
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-5 mb-8">
            <p className="text-blue-300 font-medium flex items-center gap-3">
              <span className="text-2xl">🏆</span> {headlineResult}
            </p>
          </div>

          <div className="mt-auto flex items-center text-white font-semibold">
            Read Full Case Study 
            <span className="ml-2 w-8 h-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-500 group-hover:translate-x-2 transition-all">
              →
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};
