import { Metadata } from "next";
import { getButtonClasses } from "@/components/ui/button";
import { XCircle, CheckCircle, Smartphone, Lock, Rocket, Search } from "lucide-react";
import Link from 'next/link';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "5 Signs You Need Professional Website Development Services vs. DIY",
    description: "Are you outgrowing your Wix or Squarespace site? Here are 5 critical signs that it's time to hire professional website development services.",
    keywords: ["website development services", "custom website vs diy", "professional web design", "web development agency", "business website scaling"],
    openGraph: {
        title: "DIY Websites vs. Professional Development: When to Upgrade",
        description: "Your business is growing. Is your website holding you back?",
        url: "https://epsilon-technology.com/blog/5-signs-you-need-professional-website-development-services/",
        type: "article",
        publishedTime: "2026-02-18T10:00:00.000Z",
        authors: ["Epsilon Technology Team"],
    },
    alternates: {
        canonical: '/blog/5-signs-you-need-professional-website-development-services/',
    }
};

const signs = [
    {
        title: "1. Your Site is Slow",
        description: "Template builders add bloated code. Professional developers write clean code (like Next.js) that loads instantly, boosting conversions.",
        icon: Rocket
    },
    {
        title: "2. SEO Rankings Are Stuck",
        description: "You've optimized keywords but can't rank. Custom sites allow deep technical SEO changes that builders restrict.",
        icon: Search
    },
    {
        title: "3. Mobile Experience is Poor",
        description: "50%+ of traffic is mobile. If your site doesn't adapt perfectly to every screen size, you're losing customers.",
        icon: Smartphone
    },
    {
        title: "4. You Need Custom Features",
        description: "Need a specific booking system, a client portal, or a complex calculator? Templates can't handle unique business logic.",
        icon: SettingsIcon
    },
    {
        title: "5. Security Concerns",
        description: "As you grow, you become a target. Professional services include advanced security headers, firewalls, and secure databases.",
        icon: Lock
    }
];

// Re-using Settings icon properly
function SettingsIcon(props: any) {
    return (
        <svg
            {...props}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.09a2 2 0 0 1-1-1.74v-.47a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z" />
            <circle cx="12" cy="12" r="3" />
        </svg>
    )
}

const faqs = [
    {
        question: "Is professional development expensive?",
        answer: "Initial costs are higher than DIY ($3k+ vs $20/mo), but the ROI from increased speed, SEO, and conversions often pays for itself within months."
    },
    {
        question: "How long does professional website development take?",
        answer: "A standard corporate website takes 4-6 weeks. Complex web apps take 3-6 months. We verify every pixel."
    },
    {
        question: "Can I edit the site myself after development?",
        answer: "Yes! We build on CMS platforms (like Strapi or Sanity) or easy-to-use frameworks so your team can update content without coding."
    }
];

export default function BlogProfessionalVsDIY() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute bottom-[20%] left-[10%] w-[30%] h-[30%] bg-blue-100 rounded-full blur-[100px] opacity-50" />
                </div>
                <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-blue-600"></span>
                        Is It Time to Upgrade?
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        5 Signs You Need Professional <span className="text-blue-600">Website Development Services</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                        Starting with a DIY builder is fine, but growing businesses eventually hit a wall. Here is how to know when you've reached that limit.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#signs"
                            className={getButtonClasses({ variant: 'primary', size: 'lg', className: 'bg-blue-600 hover:bg-blue-700 hover:shadow-blue-200' })}
                        >
                            Read the Signs
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Content Section */}
            <section id="signs" className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg prose-blue mx-auto text-slate-600">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">The "Good Enough" Trap</h2>
                        <p className="mb-8">
                            Website builders like Wix or Squarespace are excellent for getting started. They are cheap, easy, and "good enough."
                            But as your business scales, "good enough" stops being enough. Slow load times lose customers. Restricted SEO loses traffic.
                        </p>

                        <div className="my-12 grid gap-8 not-prose">
                            {signs.map((sign, index) => (
                                <div key={index} className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md transition-all">
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
                                        <sign.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{sign.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{sign.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">The ROI of Going Professional</h2>
                        <p className="mb-6">
                            Investing in <strong>website development services</strong> isn't just an expense; it's a growth lever.
                            Custom sites typically see a <strong>20-50% increase in conversion rates</strong> due to better UX and speed.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. CTA */}
            <section className="py-24 bg-blue-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Scale?</h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                        Stop fighting with templates. Get a website that works as hard as you do.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacts"
                            className={getButtonClasses({ variant: 'secondary', size: 'lg', className: 'bg-white text-blue-600 hover:bg-slate-100 hover:shadow-none' })}
                        >
                            Get a Free Audit
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. FAQ Section */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                            Common Questions
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200 data-[state=open]:border-blue-200 transition-all">
                                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-blue-600 hover:no-underline py-6 text-lg">
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

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "BlogPosting",
                        "headline": "5 Signs You Need Professional Website Development Services vs. DIY",
                        "description": "5 critical signs that it's time to upgrade from DIY builders to professional website development services for better speed, SEO, and security.",
                        "image": "https://epsilon-technology.com/blog_web_development.png",
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
                        "datePublished": "2026-02-18",
                        "dateModified": "2026-02-18",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://epsilon-technology.com/blog/5-signs-you-need-professional-website-development-services"
                        }
                    })
                }}
            />
        </main>
    );
}
