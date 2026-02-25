import {
    Code2, Smartphone, Globe, Cloud, Database, Layout,
    CheckCircle, ArrowRight, Zap, Shield, Rocket, MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import Image from 'next/image';

export const metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "IT Services - React Native & Full-Stack Development | Epsilon Technology",
    description: "Expert React Native, mobile app, and web development for global startups and businesses. Production-ready code, scalable architecture, and reliable delivery.",
    keywords: ["React Native", "Mobile App Development", "Full Stack Development", "SaaS Development", "Next.js Developers", "E-commerce Solutions"],
    openGraph: {
        title: "IT Services - React Native & Full-Stack Development",
        description: "Expert React Native, mobile app, and web development for global startups and businesses.",
    },
    alternates: {
        canonical: '/it-services/',
    }
};

const services = [
    {
        icon: Smartphone,
        title: "React Native App Development",
        description: "Cross-platform mobile apps with clean architecture and smooth performance. We build strictly typed, maintainable codebases that scale.",
        tech: ["React Native", "Expo", "TypeScript", "Reanimated"]
    },
    {
        icon: Layout,
        title: "Mobile Application Development",
        description: "End-to-end development from idea to App Store / Play Store deployment. Native modules, deep linking, and push notifications.",
        tech: ["iOS", "Android", "Firebase", "CI/CD"]
    },
    {
        icon: Globe,
        title: "Web Application Development",
        description: "Scalable, secure, and SEO-friendly web platforms using modern frameworks. SSR, ISR, and edge computing for maximum speed.",
        tech: ["Next.js", "React", "Tailwind CSS", "Vercel"]
    },
    {
        icon: Cloud,
        title: "E-commerce Development",
        description: "Custom online stores with complex logic, payment integration, and performance optimisation. Conversion-focused UX/UI.",
        tech: ["Shopify Headless", "Stripe", "PostgreSQL", "Redis"]
    },
    {
        icon: Database,
        title: "Custom Software Solutions",
        description: "Tailored internal tools and SaaS systems built around your specific business workflows and data requirements.",
        tech: ["Node.js", "Supabase", "Prisma", "Docker"]
    }
];

const processSteps = [
    { title: "Requirement Discussion", desc: "Understanding your vision, business goals, and technical constraints." },
    { title: "Technical Planning", desc: "Architecture design, database schema, and technology selection." },
    { title: "Design & Development", desc: "Iterative coding with regular updates and feedback loops." },
    { title: "Testing & Optimisation", desc: "Rigorous QA, performance tuning, and security audits." },
    { title: "Deployment & Support", desc: "Smooth launch to production and ongoing maintenance." }
];

const portfolio = [
    {
        title: "FinTech Dashboard",
        category: "Web Application",
        description: "A real-time financial analytics dashboard for a US-based startup. Handles millions of data points with sub-second latency.",
        tags: ["Next.js", "D3.js", "Supabase"]
    },
    {
        title: "Health & Fitness App",
        category: "Mobile App",
        description: "Social fitness tracking app with live video streaming and wearable device integration. 50k+ active users.",
        tags: ["React Native", "WebRTC", "HealthKit"]
    },
    {
        title: "B2B Marketplace",
        category: "E-commerce",
        description: "Multi-vendor marketplace for industrial equipment with automated invoicing and logistics tracking.",
        tags: ["Node.js", "PostgreSQL", "Stripe Connect"]
    }
];

export default function ITServices() {
    return (
        <div className="bg-white min-h-screen font-sans">
            {/* 1. Hero Section */}
            {/* 1. Hero Section */}
            <section className="bg-[#0B1120] text-white py-32 md:py-40 relative overflow-hidden">
                {/* Background Patterns */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-500/20 blur-[100px] rounded-full translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[100px] rounded-full -translate-x-1/2 translate-y-1/2"></div>

                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800/50 border border-slate-700/50 text-blue-300 text-xs font-semibold uppercase tracking-wider mb-8 backdrop-blur-sm">
                            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse md:mx-0"></span>
                            Available for Global Projects & Upwork Contracts
                        </div>

                        <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-[1.1] tracking-tight">
                            Scalable Mobile & <br className="hidden md:block" />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400">Web Solutions.</span>
                        </h1>

                        <p className="text-lg md:text-xl text-slate-400 mb-10 max-w-2xl leading-relaxed md:mx-0 mx-auto">
                            We design and develop high-performance mobile apps, web platforms, and custom software using modern technologies.
                            <span className="text-slate-300 block mt-2">Built for startups, scale-ups, and forward-thinking businesses.</span>
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 md:justify-start justify-center">
                            <Button size="lg" className="bg-white text-slate-900 hover:bg-slate-100 min-w-[180px] h-14 text-lg font-semibold shadow-lg shadow-white/5">
                                Discuss Your Project
                            </Button>
                            <Button size="lg" variant="outline" className="border-slate-700 text-slate-300 hover:text-white hover:bg-slate-800/50 min-w-[180px] h-14 text-lg backdrop-blur-sm">
                                View Portfolio
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. Services Overview */}
            <section id="services" className="py-24 bg-slate-50">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Core Technologies & Services</h2>
                        <p className="text-slate-600 text-lg">
                            Focused expertise in modern JavaScript ecosystems for results-driven development.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {services.map((service, i) => (
                            <div key={i} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                                <div className="w-14 h-14 bg-blue-50 text-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <service.icon size={28} />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                <p className="text-slate-600 mb-6 leading-relaxed">{service.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {service.tech.map((t, j) => (
                                        <span key={j} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-md border border-slate-100">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Why Work With Us */}
            <section id="about" className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-6">Your Reliable Tech Partner</h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                With a strong track record on platforms like Upwork, we understand the nuances of working with international clients. We don't just write code; we build assets for your business.
                            </p>

                            <div className="space-y-6">
                                {[
                                    { icon: Globe, title: "Global Experience", text: "Proven history of working with startups and enterprises across US, UK, and Europe." },
                                    { icon: MessageSquare, title: "Clear Communication", text: "Daily updates, transparent reporting, and proactive problem solving." },
                                    { icon: Code2, title: "Production-Ready Code", text: "Clean, documented, and testable code that is easy to maintain and scale." },
                                    { icon: Rocket, title: "Long-Term Mindset", text: "We build relationships. Available for ongoing support and feature updates." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-12 h-12 shrink-0 bg-slate-50 text-slate-700 rounded-full flex items-center justify-center">
                                            <item.icon size={20} />
                                        </div>
                                        <div>
                                            <h4 className="text-lg font-bold text-slate-900 mb-1">{item.title}</h4>
                                            <p className="text-slate-600">{item.text}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="bg-slate-50 rounded-3xl p-8 border border-slate-100 relative">
                            {/* Abstract Code Window Visual */}
                            <div className="bg-slate-900 rounded-xl p-6 shadow-2xl overflow-hidden relative">
                                <div className="flex gap-2 mb-4">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="space-y-2 font-mono text-sm">
                                    <div className="text-green-400">import <span className="text-white">React</span> from <span className="text-orange-300">'react'</span>;</div>
                                    <div className="text-purple-400">const <span className="text-blue-400">App</span> = <span className="text-yellow-300">()</span> <span className="text-purple-400">=&gt;</span> {'{'}</div>
                                    <div className="pl-4 text-slate-400">// Scalable architecture by default</div>
                                    <div className="pl-4 text-purple-400">return <span className="text-yellow-300">(</span></div>
                                    <div className="pl-8 text-blue-300">&lt;Provider store={'{store}'}&gt;</div>
                                    <div className="pl-12 text-blue-300">&lt;Navigation /&gt;</div>
                                    <div className="pl-8 text-blue-300">&lt;/Provider&gt;</div>
                                    <div className="pl-4 text-yellow-300">)</div>
                                    <div className="text-white">{'}'};</div>
                                </div>
                                <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 blur-2xl rounded-full"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 4. Tech Stack */}
            <section className="py-20 bg-slate-900 text-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-2xl font-bold mb-12 opacity-90">Powered by Modern Technology</h2>
                    <div className="flex flex-wrap justify-center gap-x-12 gap-y-8">
                        {['React Native', 'React.js', 'Next.js', 'Typescript', 'Node.js', 'Supabase', 'Firebase', 'PostgreSQL', 'Stripe', 'Tailwind'].map((tech) => (
                            <span key={tech} className="text-xl md:text-2xl font-bold text-slate-400 hover:text-white transition-colors cursor-default">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <p className="mt-12 text-slate-500 text-sm">
                        We prioritize clean architecture, strict typing, and best practices in every commit.
                    </p>
                </div>
            </section>

            {/* 5. Project Experience */}
            <section id="portfolio" className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">Selected Work</h2>
                        <p className="text-slate-600 text-lg">A selection of projects delivered for startups and businesses across domains.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {portfolio.map((project, i) => (
                            <div key={i} className="group cursor-pointer">
                                <div className="h-48 bg-slate-100 rounded-2xl mb-6 relative overflow-hidden">
                                    {/* Placeholder for project image - gradients for now */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${i === 0 ? 'from-blue-100 to-indigo-50' :
                                        i === 1 ? 'from-green-50 to-emerald-100' :
                                            'from-orange-50 to-amber-50'
                                        }`}></div>
                                    <div className="absolute bottom-4 right-4 bg-white px-3 py-1 rounded-full text-xs font-bold text-slate-900 shadow-sm">
                                        {project.category}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                                    {project.title} <ArrowRight size={16} className="-ml-1 opacity-0 group-hover:opacity-100 group-hover:ml-0 transition-all" />
                                </h3>
                                <p className="text-slate-600 text-sm mb-4 leading-relaxed line-clamp-2">
                                    {project.description}
                                </p>
                                <div className="flex gap-2">
                                    {project.tags.map((tag, j) => (
                                        <span key={j} className="text-xs font-medium text-slate-400">#{tag}</span>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 6. Process */}
            <section className="py-24 bg-slate-50 border-y border-slate-200">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-slate-900 mb-4">How We Work</h2>
                        <p className="text-slate-600">A transparent, agile process designed to keep you in the loop.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-5 gap-4 relative">
                        {/* Connecting Line (Desktop) */}
                        <div className="hidden md:block absolute top-6 left-0 w-full h-0.5 bg-slate-200 z-0"></div>

                        {processSteps.map((step, i) => (
                            <div key={i} className="relative z-10 flex flex-col items-center text-center">
                                <div className="w-12 h-12 bg-white border-2 border-blue-500 text-blue-600 rounded-full flex items-center justify-center font-bold text-lg shadow-sm mb-6">
                                    {i + 1}
                                </div>
                                <h4 className="font-bold text-slate-900 mb-2">{step.title}</h4>
                                <p className="text-slate-500 text-sm">{step.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 7. Client CTA */}
            <section id="contact" className="py-24 bg-white bg-grid-slate-50">
                <div id="booking" className="container mx-auto px-4 md:px-6 text-center">
                    <div className="max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Have a Project in Mind?</h2>
                        <p className="text-xl text-slate-600 mb-10">
                            Whether you're building an MVP from scratch, scaling an app, or need a technical partner, let's discuss how we can help.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4">
                            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 min-w-[200px] h-12">
                                Contact Us
                            </Button>
                            <Button size="lg" variant="outline" className="min-w-[200px] h-12">
                                Schedule a Discussion
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer Trust Line */}
            <div className="bg-slate-50 py-8 border-t border-slate-100">
                <div className="container mx-auto px-4 text-center">
                    <p className="text-slate-500 text-sm">
                        Epsilon Technology delivers global IT solutions and specialises in mobile app and web development for startups and businesses.
                    </p>
                </div>
            </div>
        </div>
    );
}
