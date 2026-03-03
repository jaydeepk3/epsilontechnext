
import { Metadata } from "next";
import { getButtonClasses } from "@/components/ui/button";
import { CheckCircle2, Shield, MapPin, Bell, Users } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';


// Metadata
export const metadata: Metadata = {
    title: "Technology Serving Those Who Serve Us: Junagadh Police App Case Study",
    description: "Epsilon Technology developed a dedicated Mobile Application for the Junagadh Police Department to simplify coordination during Maha Shivratri Mela.",
    keywords: ["Junagadh Police", "Maha Shivratri Mela", "Mobile App Development", "Police App", "Public Safety Technology", "GovTech", "Epsilon Technology"],
    openGraph: {
        title: "Junagadh Police Bandobast App Case Study | Epsilon Technology",
        description: "How we built a mobile app to manage thousands of officers during Maha Shivratri Mela.",
        type: "article",
        publishedTime: "2026-02-16T12:00:00.000Z",
        authors: ["Epsilon Technology Team"],
        images: ["/blog_mobile_app_dev.png"], // Placeholder
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/blog/junagadh-police-bandobast-app-case-study/',
    }
};

const features = [
    {
        title: "Live Attendance & Tracking",
        description: "Attendance with live location, time, and selfie verification.",
        icon: MapPin
    },
    {
        title: "Clear Duty Allocation",
        description: "Exact instructions on where to report, where to stand, and where to stay.",
        icon: Users
    },
    {
        title: "Real-time Notifications",
        description: "Instant important updates via notifications for rapid communication.",
        icon: Bell
    },
    {
        title: "Easy Complaint Submission",
        description: "Officers can submit complaints directly from the field.",
        icon: Shield
    }
];

const adminFeatures = [
    {
        title: "Real-time Reports",
        description: "Attendance reports with timing insights for better oversight."
    },
    {
        title: "Shift Management",
        description: "Comprehensive shift planning and zone-wise assignment visibility."
    },
    {
        title: "Broadcasting",
        description: "Broadcast instructions instantly to all or specific groups of officers."
    },
    {
        title: "Complaint Tracking",
        description: "A robust system to track and respond to complaints from the field."
    }
];

export default function BlogJunagadhPoliceApp() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-blue-100 rounded-full blur-[100px] opacity-50" />
                </div>
                <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        Case Study
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        Technology Serving Those <span className="text-blue-600">Who Serve Us</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                        Empowering the Junagadh Police with a custom mobile solution for the Maha Shivratri Mela.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="https://play.google.com/store/apps/details?id=com.jnd.police.bandobast"
                            target="_blank"
                            className={getButtonClasses({ variant: 'primary', size: 'lg', className: 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-200' })}
                        >
                            View on Play Store
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Content Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg prose-blue mx-auto text-slate-600">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">The Challenge</h2>
                        <p className="mb-8">
                            During large public events like the <strong>Maha Shivratri Mela</strong> in Junagadh, managing thousands of officers across multiple zones, shifts, and locations is a massive responsibility. Traditional methods of coordination can be slow and prone to miscommunication, especially in high-pressure situations.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">The Solution</h2>
                        <p className="mb-12">
                            To support this mission, <strong>Epsilon Technology</strong> developed a dedicated Mobile Application for the Junagadh Police Department. This app was built to simplify coordination, improve communication, and strengthen on-ground efficiency during bandobast operations.
                        </p>

                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Key Features for Personnel</h3>
                        <div className="grid md:grid-cols-2 gap-6 mb-12 not-prose">
                            {features.map((feature, index) => (
                                <div key={index} className="p-6 rounded-xl bg-slate-50 border border-slate-100">
                                    <div className="mb-4 text-blue-600">
                                        <feature.icon size={24} />
                                    </div>
                                    <h4 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h4>
                                    <p className="text-slate-600">{feature.description}</p>
                                </div>
                            ))}
                        </div>

                        <h3 className="text-2xl font-bold text-slate-900 mb-6">Powerful Admin Control</h3>
                        <ul className="space-y-4 mb-12 list-none pl-0">
                            {adminFeatures.map((item, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <CheckCircle2 className="w-6 h-6 text-green-500 flex-shrink-0 mt-1" />
                                    <span><strong>{item.title}:</strong> {item.description}</span>
                                </li>
                            ))}
                        </ul>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Impact</h2>
                        <p className="mb-6">
                            This project is more than just an app — it’s about using technology to support real people working in high-pressure situations to keep society safe. We provided better operational visibility for decision-makers and a streamlined experience for the officers on the ground.
                        </p>
                        <p className="mb-8">
                            We are grateful for the opportunity to contribute to a smarter, more connected policing system and to support the dedicated efforts of the Junagadh Police team during one of the region’s largest events.
                        </p>

                        <p className="text-xl font-medium text-slate-900 italic">
                            Respect to all officers working tirelessly on the ground. 🙏
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. CTA Section */}
            <section className="py-24 bg-slate-900 relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Need a Custom GovTech Solution?</h2>
                    <p className="text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
                        We build secure, scalable, and efficient technology solutions for public sector and enterprise needs.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacts"
                            className={getButtonClasses({ variant: 'primary', size: 'lg', className: 'bg-white text-slate-900 hover:bg-slate-100' })}
                        >
                            Contact Us
                        </Link>
                    </div>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "Technology Serving Those Who Serve Us: Junagadh Police App Case Study",
                        "description": "Epsilon Technology developed a dedicated Mobile Application for the Junagadh Police Department to simplify coordination during Maha Shivratri Mela.",
                        "image": "https://epsilon-technology.com/blog_mobile_app_dev.png", // Update if we get a real image
                        "author": {
                            "@type": "Organization",
                            "name": "Epsilon Technology",
                            "url": "https://epsilon-technology.com"
                        },
                        "publisher": {
                            "@type": "Organization",
                            "name": "Epsilon Technology",
                            "logo": {
                                "@type": "ImageObject",
                                "url": "https://epsilon-technology.com/logo.png"
                            }
                        },
                        "datePublished": "2026-02-16",
                        "dateModified": "2026-02-16",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://epsilon-technology.com/blog/junagadh-police-bandobast-app-case-study"
                        }
                    })
                }}
            />
        </main>
    );
}
