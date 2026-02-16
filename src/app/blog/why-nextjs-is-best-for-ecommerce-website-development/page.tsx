import { Metadata } from "next";
import { getButtonClasses } from "@/components/ui/button";
import { Zap, Search, Globe, Lock, Code2, ShoppingCart } from "lucide-react";
import Link from 'next/link';

import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion";

export const metadata: Metadata = {
    title: "Why Next.js is Best for Ecommerce Website Development in 2026",
    description: "Looking for the best ecommerce website development stack? Discover why Next.js outperforms Shopify and WooCommerce for speed, SEO, and scalability.",
    keywords: ["ecommerce website development", "next.js ecommerce", "next.js vs shopify", "headless commerce", "custom ecommerce development"],
    openGraph: {
        title: "Next.js: The Future of High-Performance Ecommerce",
        description: "Stop losing sales to slow loading times. Switch to Next.js.",
        type: "article",
        publishedTime: "2026-02-20T10:00:00.000Z",
        authors: ["Epsilon Technology Team"],
    }
};

const benefits = [
    {
        title: "Blazing Fast Speed",
        description: "Next.js uses Server-Side Rendering (SSR) and Static Site Generation (SSG) to load pages instantly. Faster sites = higher conversion rates.",
        icon: Zap
    },
    {
        title: "Superior SEO",
        description: "Unlike React SPAs or some Shopify themes, Next.js renders HTML on the server, making it perfectly readable for Google bots.",
        icon: Search
    },
    {
        title: "Unlimited Customization",
        description: "Don't be stuck with a template. Build unique shopping experiences, custom checkout flows, and 3D product previews.",
        icon: Code2
    },
    {
        title: "Global Scalability",
        description: "Deploy to the edge with Vercel. Your store loads just as fast in Tokyo as it does in New York.",
        icon: Globe
    },
    {
        title: "Enhanced Security",
        description: "With a headless architecture, your frontend is decoupled from your backend database, reducing the attack surface.",
        icon: Lock
    }
];

const faqs = [
    {
        question: "Is Next.js harder to manage than Shopify?",
        answer: "It requires developer setup, but we connect it to a headless CMS (like Shopify or Strapi) so you can manage products easily without touching code."
    },
    {
        question: "Can I migrate from WooCommerce to Next.js?",
        answer: "Yes! We can migrate your products and data to a modern Next.js storefront while keeping your backend data secure."
    },
    {
        question: "How does speed affect sales?",
        answer: "Amazon found that every 100ms of latency cost them 1% in sales. Next.js ensures you don't lose revenue to loading spinners."
    }
];

export default function BlogNextJsEcommerce() {
    return (
        <main className="bg-white">
            {/* 1. Hero Section */}
            <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-emerald-100 rounded-full blur-[100px] opacity-50" />
                </div>
                <div className="container mx-auto px-4 relative z-10 max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 text-white text-sm font-medium mb-6">
                        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                        Tech Deep Dive
                    </div>
                    <h1 className="text-4xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6 leading-tight">
                        Why Next.js is Best for <span className="text-emerald-600">Ecommerce Website Development</span>
                    </h1>
                    <p className="text-xl text-slate-600 mb-8 leading-relaxed max-w-2xl mx-auto">
                        In the race for online sales, speed is everything. Discover why modern brands are switching to Headless Commerce with Next.js.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="#benefits"
                            className={getButtonClasses({ variant: 'primary', size: 'lg', className: 'bg-emerald-600 hover:bg-emerald-700 hover:shadow-emerald-200' })}
                        >
                            Read Benefits
                        </Link>
                        <Link
                            href="/services/ecommerce-development"
                            className={getButtonClasses({ variant: 'outline', size: 'lg' })}
                        >
                            Build Your Store
                        </Link>
                    </div>
                </div>
            </section>

            {/* 2. Content Section */}
            <section id="benefits" className="py-24 bg-white">
                <div className="container mx-auto px-4 max-w-4xl">
                    <div className="prose prose-lg prose-emerald mx-auto text-slate-600">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6">The Need for Speed</h2>
                        <p className="mb-8">
                            Traditional platforms like WooCommerce were great in 2015. But in 2026, <strong>ecommerce website development</strong> demands instant load times.
                            Next.js, the framework utilized by giants like Nike and TikTok, offers performance that templates simply cannot match.
                        </p>

                        <div className="grid gap-8 not-prose mb-12">
                            {benefits.map((benefit, index) => (
                                <div key={index} className="flex gap-6 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-lg hover:border-emerald-100 transition-all group">
                                    <div className="shrink-0 w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <benefit.icon size={24} />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">{benefit.title}</h3>
                                        <p className="text-slate-600 leading-relaxed">{benefit.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mb-6">Next.js vs. Shopify: What's the Difference?</h2>
                        <p className="mb-4">
                            Shopify is a "all-in-one" solution. It's easy, but you're locked into their ecosystem and limitations.
                        </p>
                        <p className="mb-8">
                            Next.js is a "Headless" solution. You can still use Shopify for your backend (products, inventory, payments), but your
                            <strong>frontend</strong> is built with custom Next.js code. This gives you the <strong>ease of Shopify management</strong> combined with the
                            <strong>unlimited rendering power of React</strong>.
                        </p>
                    </div>
                </div>
            </section>

            {/* 3. CTA */}
            <section className="py-24 bg-emerald-600 relative overflow-hidden">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Upgrade to Headless Commerce</h2>
                    <p className="text-emerald-100 text-lg mb-10 max-w-2xl mx-auto">
                        Get a store that loads in milliseconds and ranks #1 on Google.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacts"
                            className={getButtonClasses({ variant: 'secondary', size: 'lg', className: 'bg-white text-emerald-600 hover:bg-slate-100 hover:shadow-none' })}
                        >
                            Get a Migration Quote
                        </Link>
                    </div>
                </div>
            </section>

            {/* 4. FAQ */}
            <section className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 max-w-3xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                            Headless FAQ
                        </h2>
                    </div>

                    <Accordion type="single" collapsible className="w-full space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white px-6 rounded-xl border border-slate-200 data-[state=open]:border-emerald-200 transition-all">
                                <AccordionTrigger className="text-left font-semibold text-slate-900 hover:text-emerald-600 hover:no-underline py-6 text-lg">
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
                        "headline": "Why Next.js is Best for Ecommerce Website Development in 2026",
                        "description": "Discover the SEO and performance benefits of using Next.js for your online store. Compare Headless Commerce vs traditional platforms.",
                        "image": "https://epsilon-technology.com/blog_ecommerce_growth.png",
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
                        "datePublished": "2026-02-20",
                        "dateModified": "2026-02-20",
                        "mainEntityOfPage": {
                            "@type": "WebPage",
                            "@id": "https://epsilon-technology.com/blog/why-nextjs-is-best-for-ecommerce-website-development"
                        }
                    })
                }}
            />
        </main>
    );
}
