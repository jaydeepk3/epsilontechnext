"use client";


import React, { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, useScroll, useTransform, useSpring, useInView, Variants } from "framer-motion";
import {
    MessageSquare,
    Zap,
    Users,
    BarChart,
    Settings,
    ShieldCheck,
    CheckCircle2,
    ArrowRight,
    Clock,
    Database,
    Smartphone,
    Send,
    LayoutDashboard,
    Bot
} from "lucide-react";

// Animation variants for reveal effects
const fadeIn: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: "easeOut" }
    }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

const Section = ({ children, className = "" }: { children: React.ReactNode; className?: string }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    return (
        <motion.section
            ref={ref}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            variants={fadeIn}
            className={`py-20 ${className}`}
        >
            {children}
        </motion.section>
    );
};


export default function WhatsAppWebPage() {
    const dashboardRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: dashboardRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
    const scale = useSpring(useTransform(scrollYProgress, [0, 0.5], [0.9, 1]), { stiffness: 100, damping: 20 });

    return (
        <div className="min-h-screen bg-slate-50 font-sans selection:bg-[#25D366] selection:text-white overflow-hidden">
            {/* Navbar Placeholder - assuming app has a global nav, but adding padding for it */}
            <div className="h-24"></div>

            {/* --- HERO SECTION --- */}
            <section className="relative pt-10 pb-32 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-green-50/50 to-transparent -z-10" />
                <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-green-200/20 blur-[100px] rounded-full" />

                <div className="container mx-auto px-6  max-w-7xl">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        className="text-center max-w-4xl mx-auto mb-16"
                    >
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.2 }}
                            className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-1.5 rounded-full text-sm font-semibold mb-8 border border-green-200 shadow-sm"
                        >
                            <ShieldCheck className="w-4 h-4" />
                            Official Meta Tech Provider
                        </motion.div>

                        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 tracking-tight mb-6 leading-tight">
                            Turn WhatsApp into Your <br className="hidden md:block" />
                            <span className="text-[#25D366]">Smart Sales Engine</span>
                        </h1>

                        <p className="text-xl text-slate-600 mb-10 max-w-2xl mx-auto leading-relaxed">
                            Automate conversations, manage leads, and scale your business communication through a single powerful dashboard.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                            <Link
                                href="/contact"
                                className="px-8 py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-green-500/30 flex items-center gap-2 group"
                            >
                                Start WhatsApp Automation
                                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link
                                href="/demo"
                                className="px-8 py-4 bg-white text-slate-700 hover:text-[#25D366] border border-slate-200 hover:border-green-200 rounded-full font-bold text-lg transition-all shadow-sm hover:shadow-md"
                            >
                                Book a Demo
                            </Link>
                        </div>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        ref={dashboardRef}
                        style={{ scale }}
                        className="relative mx-auto max-w-6xl rounded-2xl overflow-hidden shadow-2xl border-8 border-white/50 bg-white"
                    >
                        <div className="absolute inset-0 bg-gradient-to-tr from-green-500/10 to-transparent mix-blend-overlay pointer-events-none" />
                        <Image
                            src="/services/whatsapp/dashboard.png"
                            alt="Epsilon WhatsApp Business API Dashboard"
                            width={1600}
                            height={900}
                            priority
                            className="w-full h-auto object-cover"
                        />
                    </motion.div>
                </div>
            </section>

            {/* --- PAIN POINTS SECTION --- */}
            <Section className="bg-white relative">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                            Stop losing leads to <span className="text-red-500">communication chaos</span>
                        </h2>
                        <p className="text-lg text-slate-500 max-w-2xl mx-auto">
                            Manual messaging is slow, unorganized, and unscalable.
                        </p>
                    </div>

                    <motion.div
                        variants={staggerContainer}
                        initial="hidden"
                        whileInView="visible"
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                    >
                        {[
                            { icon: Clock, color: "text-orange-500", title: "Slow Response Time", desc: "Leads go cold because replies are delayed by hours." },
                            { icon: MessageSquare, color: "text-red-500", title: "Missed Conversations", desc: "Chats get buried in personal apps with zero visibility." },
                            { icon: Users, color: "text-purple-500", title: "Manual Chaos", desc: "Sales teams wasting hours on copy-paste responses." },
                            { icon: Database, color: "text-blue-500", title: "No Data Centralization", desc: "Customer details scattered across devices." },
                            { icon: Send, color: "text-pink-500", title: "Inefficient Bulk Sending", desc: "Risk of getting blocked for unprofessional broadcasting." },
                            { icon: Bot, color: "text-yellow-500", title: "Zero Automation", desc: "Repetitive queries eating up valuable staff time." }
                        ].map((point, index) => (
                            <motion.div
                                key={index}
                                variants={fadeIn}
                                whileHover={{ y: -5 }}
                                className="p-8 rounded-2xl bg-slate-50 border border-slate-100 hover:border-green-100 hover:shadow-xl hover:shadow-green-900/5 transition-all duration-300"
                            >
                                <div className={`p-3 rounded-xl bg-white w-fit shadow-sm mb-6 ${point.color}`}>
                                    <point.icon className="w-8 h-8" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3">{point.title}</h3>
                                <p className="text-slate-600 leading-relaxed">{point.desc}</p>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </Section>

            {/* --- SOLUTION SECTION --- */}
            <Section className="bg-slate-900 text-white overflow-hidden">
                <div className="container mx-auto px-6 max-w-7xl relative z-10">
                    <div className="text-center mb-20">
                        <span className="text-[#25D366] font-semibold tracking-wider uppercase text-sm">The Solution</span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-3 mb-6">Built for Growth</h2>
                        <p className="text-slate-400 max-w-2xl mx-auto text-lg">
                            Everything you need to automate, manage, and scale your WhatsApp communication.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" className="space-y-8">
                            {[
                                { title: "Smart Dashboard", desc: "Manage all conversations in one place. Track leads instantly and collaborate with your team without confusion.", icon: LayoutDashboard },
                                { title: "Live Chat System", desc: "Assign chats to agents, tag conversations, and never miss an inquiry again.", icon: MessageSquare },
                                { title: "Bot Builder & Automation", desc: "Set up auto-replies, qualification flows, and 24/7 engagement without extra staff.", icon: Bot },
                                { title: "Campaigns via Sheets", desc: "Upload contacts directly from Excel/Sheets and launch bulk campaigns in minutes.", icon: Send },
                            ].map((feature, idx) => (
                                <motion.div key={idx} variants={fadeIn} className="flex gap-5">
                                    <div className="flex-shrink-0 mt-1">
                                        <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center text-[#25D366]">
                                            <feature.icon className="w-6 h-6" />
                                        </div>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                                        <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
                                    </div>
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8 }}
                            className="relative"
                        >
                            <div className="absolute inset-0 bg-[#25D366] blur-[100px] opacity-20 rounded-full" />
                            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl bg-slate-800">
                                <Image
                                    src="/services/whatsapp/campaign_builder.png"
                                    alt="Campaign Builder Interface"
                                    width={800}
                                    height={600}
                                    className="w-full h-auto"
                                />
                            </div>
                        </motion.div>
                    </div>
                </div>
            </Section>

            {/* --- CASE STUDIES --- */}
            <Section className="bg-green-50/50">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Real Results from Real Businesses</h2>
                        <div className="w-20 h-1 bg-[#25D366] mx-auto rounded-full" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                name: "Junagadh Police",
                                result: "Instant bulk communication for department updates.",
                                desc: "Needed a reliable way to send critical updates. Now delivers messages instantly."
                            },
                            {
                                name: "Shri Yogeshwar Sahakari",
                                result: "100% lead tracking visibility.",
                                desc: "Centralized all WhatsApp inquiries into a single dashboard to stop lead leakage."
                            },
                            {
                                name: "Dharti Agro Engineering",
                                result: "Scalable outreach for new prospects.",
                                desc: "Automated campaigns improved outreach speed and follow-up consistency."
                            },
                            {
                                name: "Sarveswary Pharma",
                                result: "Automated PDF delivery & reduced manual work.",
                                desc: "Streamlined document sharing directly through WhatsApp automation."
                            }
                        ].map((study, idx) => (
                            <motion.div
                                key={idx}
                                whileHover={{ y: -5 }}
                                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex flex-col h-full"
                            >
                                <div className="mb-4">
                                    <div className="h-10 w-10 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                                        <span className="font-bold text-lg">{study.name[0]}</span>
                                    </div>
                                    <h3 className="font-bold text-lg text-slate-900 mb-1">{study.name}</h3>
                                    <p className="text-[#25D366] font-medium text-sm mb-4">{study.result}</p>
                                </div>
                                <p className="text-slate-600 text-sm leading-relaxed mt-auto border-t pt-4 border-slate-100">
                                    {study.desc}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* --- BENEFITS & WHY US --- */}
            <Section className="bg-white">
                <div className="container mx-auto px-6 max-w-7xl">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                        <div>
                            <h2 className="text-3xl font-bold text-slate-900 mb-8">Why Choose Epsilon Technology?</h2>
                            <div className="space-y-6">
                                {[
                                    "Official Meta Tech Provider",
                                    "Custom setup tailored to your workflow",
                                    "Reliable support and onboarding",
                                    "Trusted by government and enterprise clients"
                                ].map((item, idx) => (
                                    <div key={idx} className="flex items-center gap-4 p-4 rounded-xl bg-slate-50 border border-slate-100">
                                        <div className="bg-[#25D366] rounded-full p-1 text-white">
                                            <CheckCircle2 className="w-5 h-5" />
                                        </div>
                                        <span className="font-semibold text-slate-800">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="bg-slate-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#25D366] blur-[80px] opacity-20 rounded-full -translate-y-1/2 translate-x-1/2" />

                            <h3 className="text-2xl font-bold mb-8 relative z-10">Business Outcomes</h3>
                            <ul className="space-y-5 relative z-10">
                                {[
                                    "Increase lead response speed by 3x",
                                    "Automate 60% of repetitive queries",
                                    "Improve customer trust with instant replies",
                                    "Manage thousands of conversations effortlessly",
                                    "Scale marketing with zero staff increase"
                                ].map((benefit, idx) => (
                                    <li key={idx} className="flex items-start gap-3">
                                        <Zap className="w-5 h-5 text-[#25D366] mt-1 shrink-0" />
                                        <span className="text-slate-200 text-lg">{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </Section>

            {/* --- CTA SECTION --- */}
            <section className="py-24 bg-gradient-to-br from-green-600 to-green-700 relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-10" />
                <div className="container mx-auto px-6 max-w-4xl text-center relative z-10">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                        Ready to Make WhatsApp Work for Your Business?
                    </h2>
                    <p className="text-xl text-green-50 mb-10 max-w-2xl mx-auto">
                        Let our team help you automate sales, support, and communication — all from one smart platform.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-5 justify-center">
                        <Link
                            href="/demo"
                            className="px-8 py-4 bg-white text-green-700 hover:bg-green-50 rounded-full font-bold text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                        >
                            Book Free Demo
                        </Link>
                        <Link
                            href="/contact"
                            className="px-8 py-4 bg-transparent border-2 border-white text-white hover:bg-white/10 rounded-full font-bold text-lg transition-all"
                        >
                            Talk to WhatsApp Expert
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
}
