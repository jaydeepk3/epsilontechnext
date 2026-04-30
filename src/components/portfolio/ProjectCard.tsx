import React from 'react';
import Link from 'next/link';

interface ProjectCardProps {
  title: string;
  description: string;
  country: string;
  industry: string;
  techStack: string[];
  result?: string;
  delivered?: string;
  status: 'live' | 'concept';
  liveUrl?: string;
  imageUrl?: string;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({
  title,
  description,
  country,
  industry,
  techStack,
  result,
  delivered,
  status,
  liveUrl,
  imageUrl = '/placeholder-project.jpg', // Replace with real image paths
}) => {
  const isLive = status === 'live';

  return (
    <div className="group relative flex flex-col rounded-2xl bg-white/5 border border-white/10 overflow-hidden hover:bg-white/10 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10 hover:-translate-y-1">
      {/* Image Area */}
      <div className="aspect-video w-full overflow-hidden bg-gray-800 relative">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 flex gap-2">
          <span className="px-3 py-1 text-xs font-semibold bg-black/60 backdrop-blur-md rounded-full text-white flex items-center gap-2">
            {country} {industry}
          </span>
        </div>
        
        {/* Status Badge */}
        <div className="absolute top-4 right-4 group/badge">
          <span className={`px-3 py-1 text-xs font-semibold backdrop-blur-md rounded-full flex items-center gap-2 ${isLive ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30' : 'bg-gray-500/20 text-gray-300 border border-gray-500/30'} cursor-default`}>
            {isLive ? (
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
            ) : (
              <span className="h-2 w-2 rounded-full bg-gray-400"></span>
            )}
            {isLive ? 'Live' : 'Concept'}
          </span>
          {/* Tooltip for Concept */}
          {!isLive && (
            <div className="absolute top-full mt-2 right-0 w-48 p-2 bg-gray-900 border border-gray-700 text-xs text-gray-300 rounded-lg opacity-0 invisible group-hover/badge:opacity-100 group-hover/badge:visible transition-all z-10 shadow-xl">
              This is a design concept. Ask us to build something similar.
            </div>
          )}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">{title}</h3>
        <p className="text-sm text-gray-400 mb-4 line-clamp-2">{description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {techStack.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="px-2 py-1 text-[11px] font-medium bg-white/5 border border-white/10 rounded-md text-gray-300">
              {tech}
            </span>
          ))}
          {techStack.length > 3 && (
            <span className="px-2 py-1 text-[11px] font-medium bg-transparent text-gray-500">
              +{techStack.length - 3}
            </span>
          )}
        </div>

        <div className="mt-auto pt-4 border-t border-white/10">
          <p className="text-sm font-medium text-gray-200 mb-4">
            {result ? (
              <span className="flex items-start gap-2"><span className="text-blue-400">Result:</span> {result}</span>
            ) : (
              <span className="flex items-start gap-2"><span className="text-gray-400">Delivered:</span> {delivered}</span>
            )}
          </p>
          
          {isLive && liveUrl ? (
            <a href={liveUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center text-sm font-semibold text-blue-400 hover:text-blue-300 transition-colors">
              View Live <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </a>
          ) : (
            <Link href="/custom-quote" className="inline-flex items-center text-sm font-semibold text-white hover:text-gray-300 transition-colors">
              Start a Similar Project <span className="ml-1 group-hover:translate-x-1 transition-transform">→</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
