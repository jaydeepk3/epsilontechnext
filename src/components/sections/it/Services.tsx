"use client";

import { LayoutGrid, Smartphone, Globe, ShoppingCart, Cpu, Code2, ArrowRight, MessageCircle } from "lucide-react";
import { FadeIn } from "@/components/animations/FadeIn";
import Link from "next/link";

const services = [
    {
        title: "Mobile App Development",
        description: "Turn your idea into a high-performance iOS & Android app. We build scalable, secure, and user-friendly mobile experiences using React Native.",
        icon: Smartphone,
        color: "bg-sky-50 text-sky-600",
        gradient: "from-sky-50 to-blue-50",
        border: "group-hover:border-sky-200",
        href: "/services/mobile-app-development"
    },
    {
        title: "Ecommerce Stores",
        description: "Launch a custom online store that sells. From Shopify to custom solutions, we build secure shopping experiences that convert visitors into customers.",
        icon: ShoppingCart,
        color: "bg-emerald-50 text-emerald-600",
        gradient: "from-emerald-50 to-green-50",
        border: "group-hover:border-emerald-200",
        href: "/services/ecommerce-development"
    },
    {
        title: "Web Development",
        description: "Establish trust with a modern, professional website. Fast loading, SEO-optimized, and designed to generate leads for your business.",
        icon: Globe,
        color: "bg-indigo-50 text-indigo-600",
        gradient: "from-indigo-50 to-violet-50",
        border: "group-hover:border-indigo-200",
        href: "/services/web-development"
    },
];

export function Services() {
    return (
        <section id="services" className="py-24 bg-white relative overflow-hidden">
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-blue-50 rounded-full blur-[120px] opacity-40" />
                <div className="absolute top-[20%] -right-[10%] w-[30%] h-[30%] bg-indigo-50 rounded-full blur-[120px] opacity-40" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Our Expertise</p>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                            Comprehensive IT Solutions
                        </h2>
                        <p className="text-lg text-slate-600">
                            From concept to deployment, we deliver cutting-edge technology solutions tailored to your business needs.
                        </p>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <Link href={service.href} className="block h-full">
                                <div
                                    className={`group relative h-full bg-white/60 backdrop-blur-lg rounded-2xl p-8 hover:shadow-2xl transition-all duration-300 border border-slate-100/50 hover:border-slate-200 ${service.border}`}
                                >
                                    {/* Icon Container with Gradient */}
                                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-sm ring-1 ring-white`}>
                                        <service.icon className={`w-8 h-8 ${service.color.split(" ")[1]}`} />
                                    </div>

                                    <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-slate-600 leading-relaxed mb-6">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors mt-auto cursor-pointer">
                                        Learn more <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>
            </div>
        </section>
    );
}
