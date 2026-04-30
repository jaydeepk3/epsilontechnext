import React from 'react';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

/**
 * Update this manually each month to reflect the next available slot.
 */
const NEXT_INTAKE = "June 2026"; // Update this manually each month

interface ScarcityReplacementProps {
  ctaHref?: string;
  className?: string;
  centered?: boolean;
}

export const ScarcityReplacement: React.FC<ScarcityReplacementProps> = ({ 
  ctaHref = "/#services",
  className = "py-6",
  centered = true
}) => {
  return (
    <div className={`flex flex-col ${centered ? 'items-center justify-center text-center' : 'items-start text-left'} ${className}`}>
      <p className="text-slate-500 text-xs md:text-sm font-medium flex flex-wrap items-center gap-2">
        <span>Next project intake: <span className="text-slate-900 font-bold">{NEXT_INTAKE}</span></span>
        <span className="text-slate-300">·</span>
        <Link 
          href={ctaHref}
          className="text-blue-600 hover:text-blue-700 font-bold flex items-center gap-1 transition-colors group"
        >
          Apply now to hold your start date 
          <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </p>
    </div>
  );
};
