import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Instagram, Linkedin } from 'lucide-react';

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "About Jaydeep Kataria | Full-Stack Developer & Tech Founder",
    description: "Meet Jaydeep Kataria, Founder of Epsilon Technology. Expert in Full-Stack Development (Next.js, Node.js), Mobile Apps, and Scalable Digital Solutions.",
    openGraph: {
        title: "About Jaydeep Kataria | Lead Technologist & Founder",
        description: "Building scalable digital products and IT solutions for global businesses.",
        images: ["/images/jayde.webp"],
        type: 'profile',
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/about-us/',
    }
};

export default function AboutPage() {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20">
            {/* Hero Profile Section */}
            <section className="container mx-auto px-4 md:px-6">
                <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                    <div className="flex-1 order-2 md:order-1">
                        <div className="inline-block bg-blue-50 text-blue-700 px-4 py-2 rounded-full text-sm font-bold mb-6">
                            Founder & Lead Technologist
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                            Hi, I'm <span className="text-blue-600">Jaydeep Kataria.</span>
                        </h1>
                        <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                            I don't just "build websites". I engineer <span className="text-slate-900 font-semibold">Scalable Digital Products</span> and growth systems for businesses globally.
                        </p>
                        <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                            With a core background in <strong>Full-Stack Development (Next.js, React Native)</strong>, I bridge the gap between complex technology and real business results. Whether it's a doctor's clinic or an e-commerce giant, I build software that works.
                        </p>

                        <div className="flex gap-4 mb-8">
                            <Link href="https://www.instagram.com/jaydeepkataria/" target="_blank" className="p-3 bg-slate-100 rounded-full hover:bg-pink-100 hover:text-pink-600 transition-colors">
                                <Instagram size={24} />
                            </Link>
                            <Link href="https://www.linkedin.com/in/jaydeepkataria/" target="_blank" className="p-3 bg-slate-100 rounded-full hover:bg-blue-100 hover:text-blue-600 transition-colors">
                                <Linkedin size={24} />
                            </Link>
                            <Link href="https://www.upwork.com/freelancers/~01ac2d5143e46e07de?mp_source=share" target="_blank" className="p-3 bg-slate-100 rounded-full hover:bg-green-100 hover:text-green-600 transition-colors">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-code-2"><path d="m18 16 4-4-4-4" /><path d="m6 8-4 4 4 4" /><path d="m14.5 4-5 16" /></svg>
                            </Link>
                        </div>

                        <Link
                            href="/#contact"
                            className="inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 bg-primary text-white hover:bg-sky-700 hover:shadow-lg hover:shadow-sky-200 h-16 px-10 text-xl font-bold active:scale-95"
                        >
                            Work With Me
                        </Link>
                    </div>
                    <div className="flex-1 order-1 md:order-2 flex justify-center">
                        <div className="relative w-[350px] h-[350px] md:w-[450px] md:h-[450px] bg-slate-100 rounded-full overflow-hidden border-8 border-white shadow-2xl">
                            <Image
                                src="/images/jayde.webp"
                                alt="Jaydeep Kataria"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 bg-slate-50 mt-24">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">My Journey</h2>
                    <div className="prose prose-lg prose-slate text-slate-600">
                        <p>
                            It started with a love for code. From building my first application to deploying complex enterprise systems, I realized that <strong>Technology</strong> is the biggest leverage a business can have.
                        </p>
                        <p>
                            But code without purpose is useless. I saw businesses struggling with slow websites, buggy apps, and disjointed marketing. They didn't need just a "developer"—they needed a <em>Technical Partner</em> who understood their growth goals.
                        </p>
                        <p>
                            That's why <strong>Epsilon Technology</strong> exists. We combine elite-level engineering (React, Node.js, AWS) with strategic marketing execution. I personally oversee the architecture of every project to ensure it's not just "delivered", but <strong>engineered for success</strong>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Expertise Section */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl">
                    <h2 className="text-3xl font-bold text-slate-900 mb-12 text-center">Why I'm Different</h2>
                    <div className="grid md:grid-cols-2 gap-8">
                        {[
                            "Full-Stack Architecture Expert",
                            "Data-Driven Growth Strategies",
                            "Performance-First Coding",
                            "Mobile & Web Specialist",
                            "Direct Access to Founder",
                            "Global Delivery Standards"
                        ].map((item, i) => (
                            <div key={i} className="flex items-center gap-4 p-4 border rounded-xl bg-slate-50">
                                <CheckCircle2 className="text-green-500 shrink-0" />
                                <span className="font-semibold text-slate-900">{item}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "Person",
                        "name": "Jaydeep Kataria",
                        "jobTitle": "Founder",
                        "worksFor": {
                            "@type": "Organization",
                            "name": "Epsilon Technology",
                            "url": "https://epsilon-technology.com"
                        },
                        "url": "https://epsilon-technology.com/about-us",
                        "image": "https://epsilon-technology.com/images/jayde.webp",
                        "description": "Jaydeep Kataria is a specialized doctor marketing expert and founder of Epsilon Technology, helping clinics in Gujarat grow.",
                        "address": {
                            "@type": "PostalAddress",
                            "addressLocality": "Junagadh",
                            "addressRegion": "Gujarat",
                            "addressCountry": "India"
                        },
                        "sameAs": [
                            "https://www.instagram.com/jaydeepkataria/",
                            "https://www.linkedin.com/in/jaydeepkataria",
                            "https://dribbble.com/epsilontech",
                        ]
                    })
                }}
            />
        </main>
    );
}
