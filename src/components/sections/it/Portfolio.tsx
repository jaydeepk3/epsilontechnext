"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FadeIn } from "@/components/animations/FadeIn";

const portfolioItems = [
    {
        title: "FieldR",
        category: "Sports Tech • React Native",
        image: "/portfolio/feilder-app.jpeg",
        description: "Athlete performance tracking and management platform for sports tech startups.",
        link: "https://play.google.com/store/apps/details?id=com.fieldr"
    },
    {
        title: "Dearpet",
        category: "Pet Services • React Native",
        image: "/portfolio/dearpet-app.webp",
        description: "Comprehensive pet services booking platform and community for pet owners.",
        link: "https://dearpet.in/"
    },
    {
        title: "Prabhav Lagnam",
        category: "Matrimonial • React Native",
        image: "/portfolio/prabhav-lagnam-app.webp",
        description: "Secure and user-friendly matrimonial matchmaking application.",
        link: "https://play.google.com/store/apps/details?id=com.prabhavlagnam"
    },
    {
        title: "Antara Health",
        category: "HealthTech • Capacitor",
        image: "/portfolio/antara-app.png",
        description: "Mental health and physiological wellness monitoring application.",
        link: "https://play.google.com/store/apps/details?id=com.antara.health"
    },
    {
        title: "Rhodium Master",
        category: "Manufacturing • Web",
        image: "/portfolio/rhodium-website.webp",
        description: "Corporate industrial website showcasing manufacturing capabilities and products.",
        link: "https://rhodiummaster.com/"
    },
    {
        title: "Yoga with Aditi",
        category: "Health & Wellness • Web",
        image: "/portfolio/yoga-website.webp",
        description: "Serene wellness platform for yoga classes, workshops, and holistic health.",
        link: "https://yogawellnessbyaditi.com/"
    },
    {
        title: "Junagadh Police App",
        category: "Public Sector • Mobile App",
        image: "/portfolio/junagadhpolice.png",
        description: "Official mobile application for Junagadh Police, designed to facilitate citizen services and improve community safety.",
        link: "https://play.google.com/store/apps/details?id=com.jnd.police.bandobast"
    },
];

export function Portfolio() {
    return (
        <section id="portfolio" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decoration */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-[20%] right-0 w-[500px] h-[500px] bg-purple-100/50 rounded-full blur-[100px]" />
                <div className="absolute bottom-[10%] left-0 w-[400px] h-[400px] bg-sky-100/50 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                        <div className="max-w-xl">
                            <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                                Featured Projects
                            </h2>
                            <p className="text-lg text-slate-600">
                                A glimpse into our diverse portfolio of mobile apps, web platforms, and digital solutions.
                            </p>
                        </div>
                        <Button variant="outline" className="hidden md:flex bg-white/50 backdrop-blur-sm border-slate-200 hover:bg-white hover:text-sky-600 transition-all">
                            View All Projects
                        </Button>
                    </div>
                </FadeIn>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {portfolioItems.map((item, index) => (
                        <FadeIn key={index} delay={index * 0.1}>
                            <Link
                                href={item.link}
                                target="_blank"
                                className="group relative bg-white/80 backdrop-blur-md rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 block border border-slate-200/60"
                            >
                                <div className="h-64 sm:h-72 w-full relative overflow-hidden bg-slate-100">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                    {/* Overlay */}
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-slate-900/40 transition-colors duration-300" />

                                    <div className="absolute bottom-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                                        <div className="bg-white/90 backdrop-blur-md p-3 rounded-full shadow-lg text-slate-900 hover:scale-110 transition-transform">
                                            <ExternalLink className="w-5 h-5" />
                                        </div>
                                    </div>
                                </div>
                                <div className="p-6">
                                    <div className="text-xs font-bold uppercase tracking-wider text-sky-600 mb-2">{item.category}</div>
                                    <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-sky-700 transition-colors">{item.title}</h3>
                                    <p className="text-slate-600 text-sm mb-4 line-clamp-2">{item.description}</p>
                                    <div className="flex items-center text-sm font-bold text-slate-900 group-hover:text-sky-600 transition-colors">
                                        View Case Study <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </div>
                                </div>
                            </Link>
                        </FadeIn>
                    ))}
                </div>

                <div className="mt-12 text-center md:hidden">
                    <Button variant="outline" className="w-full">
                        View All Projects
                    </Button>
                </div>
            </div>
        </section>
    );
}
