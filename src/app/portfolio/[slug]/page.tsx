import React from 'react';
import { notFound } from 'next/navigation';
import { CaseStudyPage, CaseStudyPageProps } from '@/components/portfolio/CaseStudyPage';

const CASE_STUDIES: Record<string, CaseStudyPageProps> = {
  'dearpet': {
    title: "DearPet.in",
    description: "India's premier pet grooming booking platform connecting pet parents with professional groomers through a seamless digital experience.",
    country: "🇮🇳 India",
    industry: "Pet Care",
    type: "Web App",
    timeline: "6 weeks",
    challenge: (
      <>
        <p>Before coming to us, DearPet was managing all grooming appointments via WhatsApp and phone calls. Their admin team was spending over 5 hours a day just coordinating schedules, confirming availability, and handling cancellations.</p>
        <p>As their customer base grew rapidly across multiple cities, this manual process became a massive bottleneck. They were losing potential bookings due to delayed responses and double-booked slots, and had no centralized way to track revenue or groomer performance.</p>
      </>
    ),
    solution: (
      <>
        <p>We built a centralized digital booking ecosystem. For the customers, we created an intuitive web app where they can select services, view real-time groomer availability, and book instantly.</p>
        <p>For the internal team, we developed a robust admin dashboard that automates scheduling, dispatches automated WhatsApp reminders, and provides clear analytics on daily operations.</p>
      </>
    ),
    technicalDecision: "Chose Next.js over a standard CMS to ensure instant page loads for the booking flow and to build a completely custom, scalable calendar architecture.",
    results: [
      { metric: "50+", explanation: "Bookings handled automatically every day" },
      { metric: "3+ hrs", explanation: "Saved per day by admin staff vs manual work" },
      { metric: "Zero", explanation: "Double bookings since platform launch" },
      { metric: "40%", explanation: "Increase in repeat customer bookings" }
    ],
    techStack: ["Next.js", "Tailwind CSS", "Node.js", "PostgreSQL", "Stripe API"],
    quote: "Epsilon completely transformed how we operate. What used to take our team hours every morning is now completely automated. Our customers love the new booking experience, and our groomers are far more organized.",
    clientName: "Rahul S.",
    clientRole: "Operations Head",
    clientCompany: "DearPet.in",
    liveUrl: "https://dearpet.in",
    heroImage: "/portfolio/dearpet.webp"
  },
  'ontapp': {
    title: "Ontapp.ca",
    description: "On-demand liquor delivery eCommerce platform serving multiple Canadian provinces with strict compliance.",
    country: "🇨🇦 Canada",
    industry: "Retail",
    type: "eCommerce",
    timeline: "8 weeks",
    challenge: (
      <>
        <p>The Canadian liquor delivery market is highly regulated. Ontapp needed a platform that could handle complex age verification, zone-based delivery restrictions, and a premium shopping experience that felt high-end rather than a generic store.</p>
        <p>They faced challenges with real-time inventory sync across multiple fulfillment locations and needed a secure, reliable way to process payments while adhering to provincial alcohol laws.</p>
      </>
    ),
    solution: (
      <>
        <p>We engineered a bespoke eCommerce engine with a "dark mode" aesthetic to reflect the premium nature of the brand. We integrated a multi-step age verification gate and a location-aware delivery validation system.</p>
        <p>The backend was built to handle high-concurrency weekend traffic, with a custom fulfillment dashboard for delivery drivers to track and update orders in real-time.</p>
      </>
    ),
    technicalDecision: "Implemented a serverless architecture with Next.js to handle sudden spikes in weekend traffic without any performance degradation.",
    results: [
      { metric: "200%", explanation: "Increase in weekend order volume" },
      { metric: "100%", explanation: "Regulatory compliance achieved" },
      { metric: "<1s", explanation: "Average page load time across Canada" },
      { metric: "25%", explanation: "Reduction in customer support queries" }
    ],
    techStack: ["Next.js", "Stripe", "Shopify API", "AWS Lambda", "Tailwind CSS"],
    quote: "The technical precision Epsilon brought to the table was exactly what we needed for a regulated market like Canada. The platform is rock solid and our customers love the speed.",
    clientName: "David M.",
    clientRole: "Founder",
    clientCompany: "Ontapp Canada",
    liveUrl: "https://ontapp.ca",
    heroImage: "/portfolio/ontapp.webp"
  },
  'junagadh-police': {
    title: "Junagadh Police App",
    description: "A secure, mission-critical government Android application for managing officer deployments during major public events.",
    country: "🇮🇳 India",
    industry: "Government",
    type: "Mobile App",
    timeline: "4 weeks",
    challenge: (
      <>
        <p>Managing the deployment of over 1,000 police officers across multiple zones during the Maha Shivratri Mela was a logistical nightmare involving paper registers and fragmented WhatsApp messages.</p>
        <p>The department needed a secure way to track attendance in real-time, broadcast emergency instructions, and manage shift changes without manual errors or communication delays.</p>
      </>
    ),
    solution: (
      <>
        <p>We developed a robust Android app with selfie-based attendance verification and live GPS geofencing. This ensured officers were at their assigned stations.</p>
        <p>A centralized command dashboard gave senior officials a real-time 'heat map' of officer distribution and an instant broadcast system for emergency alerts.</p>
      </>
    ),
    technicalDecision: "Used React Native for rapid development while implementing native Android modules for high-accuracy GPS tracking and camera verification.",
    results: [
      { metric: "1000+", explanation: "Officers managed daily via the platform" },
      { metric: "Zero", explanation: "Attendance disputes during the event" },
      { metric: "10min", explanation: "Deployment updates vs 2 hours manually" },
      { metric: "100%", explanation: "Data security and uptime during peak load" }
    ],
    techStack: ["React Native", "Node.js", "Firebase", "MongoDB", "Google Maps API"],
    quote: "This app transformed our deployment strategy. We had more visibility and better coordination than ever before during one of our busiest events of the year.",
    clientName: "Ravi K.",
    clientRole: "SP Office Coordinator",
    clientCompany: "Junagadh Police",
    heroImage: "/portfolio/junagadh-police.webp"
  },
  'prabhav-lagnam': {
    title: "Prabhav Lagnam",
    description: "A trusted, community-focused matrimonial application with advanced matching and verified profiles.",
    country: "🇮🇳 India",
    industry: "Social",
    type: "Mobile App",
    timeline: "10 weeks",
    challenge: (
      <>
        <p>Generic matrimonial apps often lack the trust and specific community filters required by local families. Prabhav Lagnam needed a platform where safety, verification, and community values came first.</p>
        <p>The challenge was to build a secure environment where users felt comfortable sharing personal details while ensuring that every profile was manually verified by community admins.</p>
      </>
    ),
    solution: (
      <>
        <p>We built a mobile-first experience with deep profile verification workflows. We implemented granular privacy controls allowing users to choose who can see their photos or contact them.</p>
        <p>The matching algorithm was customized to prioritize community-specific filters while maintaining a modern, user-friendly interface that appealed to both parents and candidates.</p>
      </>
    ),
    technicalDecision: "Implemented a multi-tier manual verification system on top of Firebase Auth to maintain the highest level of profile authenticity.",
    results: [
      { metric: "10k+", explanation: "Active profiles within the community" },
      { metric: "500+", explanation: "Verified matches made in the first year" },
      { metric: "98%", explanation: "Positive user satisfaction rating" },
      { metric: "High", explanation: "Engagement rate on profile discovery" }
    ],
    techStack: ["React Native", "Firebase", "Node.js", "Cloud Firestore", "Tailwind CSS"],
    quote: "Building trust in a community app is hard, but Epsilon's focus on verification and privacy made it possible. Our community now has a modern platform they can actually rely on.",
    clientName: "Amit P.",
    clientRole: "Community Head",
    clientCompany: "Prabhav Lagnam",
    heroImage: "/portfolio/prabhav-lagnam.webp"
  }
};

type PageProps = {
  params: Promise<{ slug: string }>;
};

export default async function CaseStudyDetail({ params }: PageProps) {
  const { slug } = await params;
  const data = CASE_STUDIES[slug];
  
  if (!data) {
    notFound();
  }

  return <CaseStudyPage {...data} />;
}

export async function generateStaticParams() {
  return Object.keys(CASE_STUDIES).map((slug) => ({
    slug,
  }));
}
