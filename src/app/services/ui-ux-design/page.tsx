import { Metadata } from "next";
import { getButtonClasses } from "@/components/ui/button";
import { Palette, PenTool, Layout, Smartphone, Search, Eye } from "lucide-react";
import Image from "next/image";
import Link from 'next/link';

// Components
import { Process } from "@/components/sections/it/Process";
import { WhyChooseUs } from "@/components/sections/it/WhyChooseUs";
import { TechStack } from "@/components/sections/it/TechStack"; // Might be less relevant for Design, but shows we know the tech we design for
import { Testimonials } from "@/components/sections/it/Testimonials";
import { Portfolio } from "@/components/sections/it/Portfolio";

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "UI/UX Design Services | Modern Web & Mobile App Design Agency",
    description: "Create engaging user experiences with our UI/UX design services. We design intuitive, accessible, and beautiful interfaces for web and mobile. Top-rated design agency.",
    keywords: ["UI/UX design agency", "web design services", "mobile app design", "user interface design", "accessible web design", "product design company"],
    openGraph: {
        title: "UI/UX Design Services | Epsilon Technology",
        description: "We merge aesthetics with functionality to create products users love. Expert UI/UX design for startups and enterprises.",
    },
    alternates: {
        canonical: 'https://www.epsilon-technology.com/services/ui-ux-design/',
    }
};

const serviceHighlights = [
    {
        title: "User Research",
        description: "Understanding your users' needs, behaviors, and pain points to inform design decisions.",
        icon: Search
    },
    {
        title: "Wireframing & Prototyping",
        description: "Creating low and high-fidelity prototypes to visualize the flow and functionality.",
        icon: Layout
    },
    {
        title: "Visual Design (UI)",
        description: "Crafting beautiful, pixel-perfect interfaces that align with your brand identity.",
        icon: Palette
    },
    {
        title: "Mobile-First Design",
        description: "Ensuring your product looks and works flawlessly on small screens.",
        icon: Smartphone
    },
    {
        title: "Design Systems",
        description: "Building scalable design libraries to ensure consistency across your product suite.",
        icon: PenTool
    },
    {
        title: "Usability Testing",
        description: "Validating designs with real users to identify friction points before launch.",
        icon: Eye
    }
];

const faqs = [
    {
        question: "What is the difference between UI and UX?",
        answer: "UX (User Experience) focuses on how a product feels and functions, ensuring it solves the user's problem. UI (User Interface) focuses on how it looks—colors, typography, and layout. We do both."
    },
    {
        question: "What tools do you use?",
        answer: "We primarily use Figma for designing, prototyping, and collaboration. We also use Adobe Creative Cloud (Photoshop, Illustrator) for asset creation."
    },
    {
        question: "Do you provide the design files?",
        answer: "Yes, you will receive full access to the Figma source files, assets, and style guides upon project completion."
    },
    {
        question: "Can you redesign an existing app?",
        answer: "Absolutely. We specialize in UI/UX audits and redesigns to improve engagement and conversion rates on existing products."
    }
];

export default function UIUXDesign() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[10%] right-[10%] w-[35%] h-[35%] bg-purple-100 rounded-full blur-[100px] opacity-40" />
                </div>
                <div className="container mx-auto px-4 relative z-10">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="lg:w-1/2">
                            <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 mb-6">
                                UI/UX Design Services
                                <span className="block text-purple-600">That Delight Users</span>
                            </h1>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                We combine data-driven research with pixel-perfect design to create digital products that are not just beautiful, but intuitive and highly converting.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link
                                    href="#contact"
                                    className={getButtonClasses({ variant: 'primary', size: 'lg', className: 'bg-purple-600 hover:bg-purple-700 hover:shadow-purple-200' })}
                                >
                                    Start Designing
                                </Link>
                                <Link
                                    href="#portfolio"
                                    className={getButtonClasses({ variant: 'outline', size: 'lg' })}
                                >
                                    View Designs
                                </Link>
                            </div>
                        </div>
                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-slate-200 bg-white p-2">
                                <Image
                                    src="/blog_mobile_app_dev.png" // Placeholder
                                    alt="UI/UX Design Services"
                                    width={600}
                                    height={400}
                                    className="rounded-xl w-full h-auto"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Pain Point + Solution */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
                            <h3 className="text-2xl font-bold text-red-900 mb-6">Bad Design Costs Money</h3>
                            <ul className="space-y-4">
                                {[
                                    "High bounce rates due to confusing navigation",
                                    "Users abandoning carts because of friction",
                                    "Outdated visuals damaging brand trust",
                                    "Development delays due to poor handoffs"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-red-700">
                                        <div className="mt-1 w-5 h-5 rounded-full bg-red-200 flex items-center justify-center shrink-0">
                                            <span className="block w-2 h-2 rounded-full bg-red-600" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="bg-purple-50 p-8 rounded-3xl border border-purple-100">
                            <h3 className="text-2xl font-bold text-purple-900 mb-6">Our Design Approach</h3>
                            <ul className="space-y-4">
                                {[
                                    "Intuitive user flows that guide action",
                                    "Design systems that speed up development",
                                    "Modern aesthetics that build authority",
                                    "Seamless handoff to engineering teams"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3 text-purple-700">
                                        <Palette className="w-5 h-5 text-purple-600 shrink-0 mt-1" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Service Overview */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Design That Works</h2>
                        <p className="text-slate-600">From concept to high-fidelity prototype, we handle it all.</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {serviceHighlights.map((feature, index) => (
                            <div key={index} className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1">
                                <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center text-purple-600 mb-6">
                                    <feature.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{feature.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Tech Stack (Tools) */}
            <div className="bg-white">
                <TechStack />
            </div>

            {/* 5. Process */}
            <Process />

            {/* 6. Why Choose Us */}
            <WhyChooseUs />

            {/* 7. Portfolio */}
            <div id="portfolio">
                <Portfolio />
            </div>

            {/* 8. Testimonials */}
            <Testimonials />

            {/* 9. FAQ */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                            Design FAQ
                        </h2>
                        <p className="text-lg text-slate-600">
                            Common questions about our design process.
                        </p>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200 data-[state=open]:border-purple-200 transition-all">
                                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-purple-600 hover:no-underline py-6 text-lg">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-slate-600 leading-relaxed pb-6 text-base">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* 10. CTA */}
            <section id="contact" className="py-24 bg-purple-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to WoW Your Users?</h2>
                    <p className="text-purple-100 text-lg mb-10 max-w-2xl mx-auto">
                        Good design is good business. Let's create an experience that converts.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#contact"
                            className={getButtonClasses({ variant: 'secondary', size: 'lg', className: 'bg-white text-purple-600 hover:bg-slate-100 hover:shadow-none' })}
                        >
                            Book Design Strategy
                        </Link>
                        <Link
                            href="#portfolio"
                            className={getButtonClasses({ variant: 'outline', size: 'lg', className: 'border-purple-400 text-white hover:bg-purple-700' })}
                        >
                            Request Portfolio
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
