"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
    CheckCircle2,
    Globe,
    Smartphone,
    TrendingUp,
    ShoppingCart,
    ArrowRight,
    Sparkles
} from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/animations/FadeIn";

const packageCategories = [
    {
        id: "website-development",
        title: "Website Development",
        icon: Globe,
        packages: [
            {
                name: "Basic",
                description: "Entry-level business website to establish your online presence.",
                features: [
                    "1-5 Pages Responsive Website",
                    "Basic SEO Setup",
                    "Contact Form Integration",
                    "Domain & Hosting Guidance",
                    "1 Month Technical Support",
                    "Standard UI/UX Design"
                ],
                isPopular: false,
                cta: "Request Quote"
            },
            {
                name: "Standard",
                description: "Professional business website with advanced functionality and fast loading.",
                features: [
                    "Up to 10 Pages",
                    "CMS Integration (WordPress/Next.js)",
                    "Advanced SEO Optimization",
                    "Social Media Integration",
                    "Performance Optimization",
                    "3 Months Technical Support"
                ],
                isPopular: false,
                cta: "Get Proposal"
            },
            {
                name: "Premium",
                description: "High-performance, scalable website optimized for conversions.",
                features: [
                    "Unlimited Pages Design",
                    "Custom Next.js/React Architecture",
                    "Database & API Integration",
                    "Advanced Analytics Setup",
                    "Premium Animations & UI/UX",
                    "6 Months Priority Support"
                ],
                isPopular: true,
                cta: "Talk to Us"
            },
            {
                name: "Custom",
                description: "Fully tailored solution completely built out to your exact specifications.",
                features: [
                    "Enterprise-Grade Architecture",
                    "Microservices & Cloud Infrastructure",
                    "AI/Machine Learning Integration",
                    "High-Level Security Configuration",
                    "Dedicated Account Manager",
                    "24/7 Priority Support"
                ],
                isPopular: false,
                cta: "Talk to Us"
            }
        ]
    },
    {
        id: "mobile-development",
        title: "Mobile App Development",
        icon: Smartphone,
        packages: [
            {
                name: "Basic",
                description: "Single-platform app designed for quick market entry.",
                features: [
                    "Native iOS or Android App",
                    "Basic UI/UX Design",
                    "Standard User Authentication",
                    "Push Notifications Setup",
                    "App Store/Play Store Submission",
                    "1 Month Bug Support"
                ],
                isPopular: false,
                cta: "Request Quote"
            },
            {
                name: "Standard",
                description: "Advanced feature-based app offering seamless experiences.",
                features: [
                    "Cross-Platform App (React Native/Flutter)",
                    "Custom UI/UX Design",
                    "Social Media Login",
                    "Payment Gateway Integration",
                    "In-App Analytics",
                    "3 Months Maintenance"
                ],
                isPopular: false,
                cta: "Get Proposal"
            },
            {
                name: "Premium",
                description: "Full-scale scalable app with a robust custom backend.",
                features: [
                    "High-Performance Cross-Platform App",
                    "Custom Node.js/Python Backend",
                    "Real-Time Chat & Sockets",
                    "Complex Database Architecture",
                    "Offline Mode Capability",
                    "6 Months Priority Support"
                ],
                isPopular: true,
                cta: "Talk to Us"
            },
            {
                name: "Custom",
                description: "Enterprise-level custom solution with unlimited possibilities.",
                features: [
                    "Multi-App Ecosystem",
                    "Advanced AI/AR Integrations",
                    "IoT Device Synchronization",
                    "Microservices Architecture",
                    "Dedicated Development Team",
                    "Comprehensive SLA & Support"
                ],
                isPopular: false,
                cta: "Talk to Us"
            }
        ]
    },
    {
        id: "digital-marketing",
        title: "Digital Marketing",
        icon: TrendingUp,
        packages: [
            {
                name: "Basic",
                description: "Starter growth plan to jumpstart your brand's digital visibility.",
                features: [
                    "Social Media Profile Setup",
                    "8 Social Media Posts/Month",
                    "Basic Keyword Research",
                    "On-Page SEO Basics",
                    "Monthly Performance Report",
                    "Dedicated Account Manager"
                ],
                isPopular: false,
                cta: "Request Quote"
            },
            {
                name: "Standard",
                description: "Growth acceleration plan expanding reach and driving engagement.",
                features: [
                    "15 Social Media Posts/Month",
                    "Targeted Ad Campaigns (Meta/Google)",
                    "Comprehensive On-Page & Off-Page SEO",
                    "Content Marketing (2 Blogs/Month)",
                    "Bi-Weekly Strategy Meetings",
                    "Conversion Rate Optimization Basics"
                ],
                isPopular: false,
                cta: "Get Proposal"
            },
            {
                name: "Premium",
                description: "Performance & scaling plan designed to maximize ROI and leads.",
                features: [
                    "Omnichannel Marketing Strategy",
                    "Advanced Ad Budget Management",
                    "Premium SEO Campaign",
                    "Content Marketing (4 Blogs/Month)",
                    "Email Marketing Automation",
                    "Real-Time Analytics Dashboard"
                ],
                isPopular: true,
                cta: "Talk to Us"
            },
            {
                name: "Custom",
                description: "Strategy-based tailored marketing built around your unique KPIs.",
                features: [
                    "Fractional CMO Services",
                    "Global Localization Strategy",
                    "Viral & PR Campaigns",
                    "Influencer Partnership Management",
                    "Full-Funnel Marketing Automation",
                    "High-Ticket Conversion Strategies"
                ],
                isPopular: false,
                cta: "Talk to Us"
            }
        ]
    },
    {
        id: "ecommerce-development",
        title: "eCommerce Development",
        icon: ShoppingCart,
        packages: [
            {
                name: "Basic",
                description: "Small online store setup perfect for launching your product line.",
                features: [
                    "Basic Shopify/WooCommerce Setup",
                    "Up to 50 Products Upload",
                    "Standard Theme Customization",
                    "Payment Gateway Setup",
                    "Essential Shipping Configuration",
                    "1 Month Technical Support"
                ],
                isPopular: false,
                cta: "Request Quote"
            },
            {
                name: "Standard",
                description: "Advanced store with integrations and higher conversion rates.",
                features: [
                    "Custom Theme Development",
                    "Up to 500 Products Setup",
                    "CRM & ERP Integration Support",
                    "Advanced Inventory Management",
                    "Abandoned Cart Recovery",
                    "3 Months Technical Support"
                ],
                isPopular: false,
                cta: "Get Proposal"
            },
            {
                name: "Premium",
                description: "Scalable multi-feature eCommerce system for massive growth.",
                features: [
                    "Headless Commerce Architecture",
                    "Unlimited Products",
                    "Custom Checkout Flows",
                    "Multivendor/Marketplace Features",
                    "Advanced Subscription Models",
                    "Priority 6 Months SLA"
                ],
                isPopular: true,
                cta: "Talk to Us"
            },
            {
                name: "Custom",
                description: "Custom commerce architecture requiring specialized flows.",
                features: [
                    "Fully Custom Commerce Engine",
                    "Complex B2B/B2C Ordering Systems",
                    "Multi-Warehouse Fulfillment Integration",
                    "AI-Powered Product Recommendations",
                    "Enterprise Security Compliance",
                    "Dedicated DevOps & Support"
                ],
                isPopular: false,
                cta: "Talk to Us"
            }
        ]
    }
];

export function Packages() {
    const [activeTab, setActiveTab] = useState(packageCategories[0].id);

    const activeCategory = packageCategories.find(c => c.id === activeTab) || packageCategories[0];

    return (
        <section id="packages" className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background Decor */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] -right-[10%] w-[40%] h-[40%] bg-blue-100 rounded-full blur-[120px] opacity-60" />
                <div className="absolute bottom-[20%] -left-[10%] w-[40%] h-[40%] bg-indigo-100 rounded-full blur-[120px] opacity-60" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <FadeIn>
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <p className="text-sm font-bold text-blue-600 uppercase tracking-widest mb-3">Our Packages</p>
                        <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl mb-4">
                            Transparent & Tailored Solutions
                        </h2>
                        <p className="text-lg text-slate-600">
                            Select a service category below to view our specialized packages designed for businesses of all sizes.
                        </p>
                    </div>
                </FadeIn>

                {/* Category Tabs */}
                <FadeIn delay={0.1}>
                    <div className="flex flex-wrap justify-center gap-2 mb-16">
                        {packageCategories.map((category) => {
                            const Icon = category.icon;
                            const isActive = activeTab === category.id;

                            return (
                                <button
                                    key={category.id}
                                    onClick={() => setActiveTab(category.id)}
                                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${isActive
                                            ? "bg-blue-600 text-white shadow-lg shadow-blue-200 scale-105"
                                            : "bg-white text-slate-600 hover:bg-white hover:text-blue-600 hover:shadow-md border border-slate-200"
                                        }`}
                                >
                                    <Icon className="w-4 h-4" />
                                    {category.title}
                                </button>
                            );
                        })}
                    </div>
                </FadeIn>

                {/* Pricing Cards Grid */}
                <FadeIn delay={0.2}>
                    <div className="min-h-[500px]">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeCategory.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.4, ease: "easeOut" }}
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto"
                            >
                                {activeCategory.packages.map((pkg, idx) => (
                                    <div
                                        key={pkg.name}
                                        className={`relative flex flex-col bg-white rounded-3xl p-8 border ${pkg.isPopular
                                                ? "border-blue-500 shadow-xl shadow-blue-100/50 lg:scale-105 z-10"
                                                : "border-slate-100 shadow-lg shadow-slate-200/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                                            }`}
                                    >
                                        {pkg.isPopular && (
                                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-xs font-bold px-4 py-1.5 rounded-full flex items-center gap-1 shadow-sm whitespace-nowrap">
                                                <Sparkles className="w-3 h-3" /> Most Popular
                                            </div>
                                        )}

                                        <div className="mb-6">
                                            <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                                            <p className="text-sm text-slate-500 h-10 leading-relaxed">{pkg.description}</p>
                                        </div>

                                        <div className="flex-grow space-y-4 mb-8">
                                            {pkg.features.map((feature, i) => (
                                                <div key={i} className="flex items-start gap-3">
                                                    <CheckCircle2 className={`w-5 h-5 shrink-0 ${pkg.isPopular ? "text-blue-600" : "text-blue-500"}`} />
                                                    <span className="text-sm text-slate-600 leading-tight pt-0.5">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        <Link href="/contacts" className="mt-auto block">
                                            <button className={`w-full py-3.5 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all duration-300 ${pkg.isPopular
                                                    ? "bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg"
                                                    : "bg-slate-50 text-slate-900 hover:bg-blue-50 hover:text-blue-600 border border-slate-200 hover:border-blue-200"
                                                }`}>
                                                {pkg.cta}
                                                <ArrowRight className="w-4 h-4" />
                                            </button>
                                        </Link>
                                    </div>
                                ))}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
