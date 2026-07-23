'use client';

import { useState } from 'react';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { StickyConversionBar } from '@/components/ui/StickyConversionBar';
import { LeadMagnetModal } from '@/components/sections/LeadMagnetModal';
import { FounderSection } from '@/components/sections/FounderSection';
import { PainPointsSection } from '@/components/sections/PainPointsSection';
import { WhyChooseUsSection } from '@/components/sections/WhyChooseUsSection';
import { CaseStudiesSection } from '@/components/sections/CaseStudiesSection';
import { BeforeAfterSection } from '@/components/sections/BeforeAfterSection';
import { ProcessTimelineSection } from '@/components/sections/ProcessTimelineSection';
import { SecurityNDASection } from '@/components/sections/SecurityNDASection';
import { TechEcosystemSection } from '@/components/sections/TechEcosystemSection';
import { IndustriesSection } from '@/components/sections/IndustriesSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { FinalCtaSection } from '@/components/sections/FinalCtaSection';
import { Hero } from '@/components/sections/Hero';
import { Booking } from '@/components/sections/Booking';
import { Testimonials } from '@/components/sections/Testimonials';

export default function HomeLandingClient() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-600 selection:text-white overflow-x-hidden">
      {/* Dynamic Header */}
      <Header />

      <main className="pt-16">
        {/* Outcome-Focused Hero */}
        <Hero />

        {/* Founder Personal Guarantee & Video */}
        <FounderSection />

        {/* Why Businesses Fail Before Hiring Us */}
        <PainPointsSection />

        {/* Why Clients Choose Epsilon (Core Pillars) */}
        <WhyChooseUsSection />

        {/* ROI Case Studies with Measurable Results */}
        <CaseStudiesSection />

        {/* Before vs After Interactive Comparison */}
        <BeforeAfterSection />

        {/* 6-Step Software Development Process */}
        <ProcessTimelineSection />

        {/* Security, IP Transfer & NDA Guarantee */}
        <SecurityNDASection />

        {/* Technology Ecosystem */}
        <TechEcosystemSection />

        {/* Industries Served */}
        <IndustriesSection />

        {/* Social Proof & Video Testimonials */}
        <Testimonials />

        {/* FAQ Answering Buying Objections */}
        <FaqSection />

        {/* Interactive Discovery Booking Form */}
        <div id="booking">
          <Booking />
        </div>

        {/* High-Urgency Final CTA Section */}
        <FinalCtaSection />
      </main>

      {/* Trust Footer */}
      <Footer />

      {/* Desktop & Mobile Sticky Conversion Bar */}
      <StickyConversionBar onOpenAuditModal={() => setIsAuditModalOpen(true)} />

      {/* Free 48-Hour Technical Audit Lead Magnet Modal */}
      <LeadMagnetModal
        isOpen={isAuditModalOpen}
        onClose={() => setIsAuditModalOpen(false)}
      />
    </div>
  );
}
