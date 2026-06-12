'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    CheckCircle2,
    Globe,
    Zap,
    Smartphone,
    Search,
    Clock,
    ArrowRight,
    MessageCircle,
    MapPin,
    PhoneCall,
    Star,
    ShieldCheck,
    BarChart3,
    Code2,
    Layout,
    Laptop,
    Rocket,
    Tablet,
    Layers,
    Gauge
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FAQ } from '@/components/sections/FAQ';

interface MobileAppCityLandingProps {
    city: string;
    cityDescription: string;
}

export default function MobileAppCityLanding({ city, cityDescription }: MobileAppCityLandingProps) {
    const citySlug = city.toLowerCase();

    const pageKeywords = [
        `best mobile application development company in ${citySlug}`,
        `best mobile app development agency in ${citySlug}`,
        `mobile app developers in ${citySlug}`,
        `android app development company ${citySlug}`,
        `ios app development company ${citySlug}`,
        `react native app development ${citySlug}`,
        `flutter app developers ${citySlug}`
    ];

    const specializedFaqs = [
        {
            question: `How much does it cost to build a mobile app in ${city}?`,
            answer: `The cost of mobile app development depends on complexity. A basic MVP app starts around ₹40,000 to ₹90,000. Larger custom applications with database sync and custom admin panels typically range from ₹1.2 Lakhs to ₹3.5 Lakhs+. We offer flexible quotes based on your exact feature needs.`
        },
        {
            question: "Why should we choose React Native or Flutter for our app?",
            answer: "React Native and Flutter are modern cross-platform technologies. They allow us to write code once and deploy it to both iOS (Apple) and Android (Google Play Store) simultaneously. This saves you up to 40% in development costs and makes future updates much faster."
        },
        {
            question: "How do you protect my custom mobile app startup or product idea during development?",
            answer: "We protect all startup and enterprise app product ideas under a strict Non-Disclosure Agreement (NDA). From codebase ownership to intellectual property (IP) and database credentials, everything is legally transferred to you upon completion."
        },
        {
            question: "Will my mobile app be optimized to appear in Google search and AI tools like ChatGPT?",
            answer: "Yes. We design search-optimized web landing pages for your mobile app, implement app indexing (deep linking) to let users launch the app directly from search results, and integrate Schema.org structured metadata so search engines and conversational AI engines (like ChatGPT, Gemini, and Perplexity) can crawl, index, and recommend your application."
        },
        {
            question: `Where is Epsilon Technology located in ${city}?`,
            answer: `We are located on Zanzerda Cross Road, Junagadh, Gujarat. Being local means we can sit down together, sketch out your app designs in person, and provide real-time updates without remote communication delays.`
        },
        {
            question: "Will you help us upload the app to the Play Store and App Store?",
            answer: "Absolutely. We handle the entire deployment process, including setting up developer accounts, preparing screenshots, writing search-optimized app descriptions, and submitting the app to Google Play and the Apple App Store."
        },
        {
            question: "Do you build the backend and database for the apps too?",
            answer: "Yes, we build secure, fully-integrated backends using technologies like Node.js, Prisma, and PostgreSQL. We also provide admin dashboards so you can easily manage your app users, content, and send push notifications."
        }
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Epsilon Technology - Mobile App Development in ${city}`,
        "image": "https://epsilon-technology.com/logo.webp",
        "@id": `https://epsilon-technology.com/mobile-app-development-company-in-${citySlug}/#localbusiness`,
        "url": `https://epsilon-technology.com/mobile-app-development-company-in-${citySlug}/`,
        "telephone": "+918160881461",
        "priceRange": "₹40000-₹350000",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Moti Baug Road",
            "addressLocality": city,
            "addressRegion": "Gujarat",
            "postalCode": "362001",
            "addressCountry": "IN"
        },
        "geo": {
            "@type": "GeoCoordinates",
            "latitude": 21.5222,
            "longitude": 70.4579
        },
        "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday"
            ],
            "opens": "09:00",
            "closes": "19:00"
        },
        "sameAs": [
            "https://www.facebook.com/epsilontechnology.in",
            "https://www.instagram.com/epsilontechnology.in"
        ]
    };

    const faqSchemaData = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": specializedFaqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };

    const whatsappLink = `https://wa.me/918160881461?text=Hi%20Jaydeep%2C%20I'm%20looking%20for%20a%20mobile%20app%20for%20my%20business%20in%20${city}.%20Can%20we%20discuss%3F`;

    return (
        <div className="bg-white overflow-x-hidden">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaData) }}
            />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchemaData) }}
            />

            {/* --- Hero Section --- */}
            <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
                <div className="absolute top-0 right-0 -z-10 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-blue-50 via-white to-white" />
                <div className="absolute -top-24 -left-20 w-96 h-96 bg-indigo-100/50 rounded-full blur-[100px] -z-10 animate-pulse" />

                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-semibold mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-600"></span>
                            </span>
                            Local App Agency in {city}, Gujarat
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight"
                        >
                            Best Mobile Application Development Company in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-sky-600 italic">{city}</span>
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl leading-relaxed"
                        >
                            {cityDescription} Epsilon Technology builds high-performance Android & iOS mobile applications designed to optimize workflows, boost client engagement, and implement secure database systems directly in your business.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center gap-4"
                        >
                            <Link href={whatsappLink} target="_blank">
                                <Button size="xl" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-7 rounded-2xl text-lg font-bold shadow-2xl shadow-blue-200 group">
                                    Discuss Your App Idea <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <p className="text-sm text-slate-500 font-medium">
                                Cross-Platform Android + iOS Solutions
                            </p>
                        </motion.div>

                        {/* Hero Image Mockup */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="mt-16 relative w-full max-w-md mx-auto"
                        >
                            <div className="absolute inset-0 bg-blue-600/10 blur-[100px] -z-10 rounded-full scale-110" />
                            <div className="relative rounded-[40px] overflow-hidden border-8 border-slate-900 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.3)] aspect-[9/19] bg-slate-950">
                                <img
                                    src="/blog_mobile_app_dev.webp"
                                    alt={`Mobile app development in ${city}`}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/40 to-transparent p-6 text-white text-left">
                                    <div className="text-xs uppercase tracking-wider text-blue-300 font-bold mb-1">Epsilon Mobile App</div>
                                    <h4 className="font-extrabold text-lg leading-tight">Scale Your Junagadh Business</h4>
                                </div>
                            </div>

                            {/* Floating Badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute top-1/4 -right-16 bg-white p-5 rounded-[20px] shadow-2xl border border-blue-50 flex items-center gap-3 z-20 hidden sm:flex"
                            >
                                <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                                    <Gauge className="text-blue-600" size={20} />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">App Speed</div>
                                    <div className="text-sm font-extrabold text-slate-900 leading-none">60 FPS Native</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-1/4 -left-20 bg-white p-5 rounded-[20px] shadow-2xl border border-blue-50 flex items-center gap-3 z-20 hidden sm:flex"
                            >
                                <div className="w-10 h-10 bg-green-50 rounded-lg flex items-center justify-center">
                                    <Layers className="text-green-600" size={20} />
                                </div>
                                <div className="text-left">
                                    <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Multiplatform</div>
                                    <div className="text-sm font-extrabold text-slate-900 leading-none">Android + iOS</div>
                                </div>
                            </motion.div>
                        </motion.div>

                        {/* Features Banner */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 w-full py-10 px-8 bg-white/40 backdrop-blur-xl border border-blue-50/50 rounded-[40px] shadow-sm"
                        >
                            {[
                                { icon: Smartphone, label: "iOS & Android", sub: "Universal Stores" },
                                { icon: Code2, label: "React Native / Flutter", sub: "Efficient Codebase" },
                                { icon: Layers, label: "Secure Database", sub: "Prisma & PostgreSQL" },
                                { icon: Clock, label: "Ongoing Support", sub: "We Maintain & Update" }
                            ].map((feature, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center mb-4">
                                        <feature.icon className="text-blue-600" size={24} />
                                    </div>
                                    <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">{feature.label}</div>
                                    <div className="text-xs text-slate-500">{feature.sub}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Why Junagadh Businesses Need an App --- */}
            <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Transform Your Business Operations with a <span className="text-blue-600 italic underline decoration-blue-200 font-serif">Custom Mobile App</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                A mobile application is not just a marketing tool. For Junagadh's growing industries—manufacturing, wholesale distribution, hospitals, hospitality, and educational institutions—a custom app can automate internal tracking, manage field staff, or offer direct ordering systems to customers.
                            </p>
                            <div className="space-y-6 mb-10">
                                {[
                                    { title: "Direct Push Notifications", desc: "Reach your clients instantly on their home screens with no SMS fees." },
                                    { title: "Offline Capabilities", desc: "Let your staff log orders, reports, or check inventory offline without internet issues." },
                                    { title: "Complete System Automation", desc: "Integrate ERP/CRM tracking to capture real-time business progress directly via mobile." },
                                    { title: "App Store Credibility", desc: "Appear on Apple App Store & Google Play Store, giving your brand maximum prestige." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="p-1 bg-blue-100 rounded-lg h-fit">
                                            <CheckCircle2 className="text-blue-600" size={20} />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-slate-900">{item.title}</h4>
                                            <p className="text-slate-500 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            className="bg-white p-10 rounded-[40px] border border-slate-100 shadow-xl"
                        >
                            <div className="flex items-center gap-4 mb-8">
                                <div className="p-3 bg-blue-600 rounded-2xl">
                                    <Rocket className="text-white" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold italic">The Epsilon App Standards</h3>
                            </div>
                            <div className="space-y-8">
                                {[
                                    { icon: Tablet, title: "Universal Development", desc: "We develop dual-platform apps using React Native and Flutter so your app works seamlessly on iPads, iPhones, and Android tablets." },
                                    { icon: MapPin, title: "Local Collaboration", desc: "Located on Moti Baug Road, Junagadh. We work directly with your team to review designs, prototype feedback, and train your staff." },
                                    { icon: MessageCircle, title: "WhatsApp API Ready", desc: "We can connect your mobile app database to WhatsApp API, enabling auto-notifications on order placements, alerts, or payment receipts." },
                                    { icon: ShieldCheck, title: "High-Grade Security", desc: "We implement advanced encryption, user authentication (JWT/OAuth), and secure APIs to safeguard your business database." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5 text-left">
                                        <div className="p-2 bg-blue-50 rounded-lg h-fit">
                                            <item.icon className="text-blue-600" size={24} />
                                        </div>
                                        <div>
                                            <h4 className="font-bold text-lg mb-1">{item.title}</h4>
                                            <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Our Mobile App Development Services in Junagadh --- */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Best Mobile Application Development Services in {city}
                        </h2>
                        <p className="text-slate-600 text-lg">
                            We build native-performance iOS & Android mobile apps that scale. Whether you need a cross-platform solution to reduce development costs or a complex enterprise app, Epsilon Technology delivers.
                        </p>
                    </motion.div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-left">
                        {[
                            { 
                                title: "React Native Development", 
                                desc: "Build once and deploy to both iOS and Android simultaneously. Save 40% in costs with sub-second performance matching pure native code.", 
                                badge: "Cross-Platform Efficiency" 
                            },
                            { 
                                title: "Flutter App Development", 
                                desc: "Design-rich, high-performance applications with gorgeous animations. Best for customized UI/UX and rich graphical interfaces.", 
                                badge: "High-Fidelity Custom UI" 
                            },
                            { 
                                title: "Secure Backend & APIs", 
                                desc: "We build high-grade database backends using Node.js, Prisma, and PostgreSQL. Securely manage users, push alerts, and CRM integrations.", 
                                badge: "Node.js & PostgreSQL" 
                            },
                            { 
                                title: "ASO & Search Indexing", 
                                desc: "We optimize descriptions for Play Store/App Store and configure web deep linking so users can find and launch your app from Google & ChatGPT.", 
                                badge: "App Store Optimization" 
                            }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <span className="inline-block px-3 py-1 bg-blue-50 text-blue-600 text-xs font-bold rounded-full mb-4">
                                        {service.badge}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                                </div>
                                <Link href={whatsappLink} target="_blank" className="text-blue-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                    Discuss App Cost <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- App Solutions by Industry --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16">
                        Custom App Solutions We Provide <br className="hidden md:block" /> for Junagadh Businesses
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                        {[
                            { name: "Staff Management Apps", icon: ShieldCheck, sub: "Logistics & Fields" },
                            { name: "Online Store Apps", icon: Laptop, sub: "Retail & Orders" },
                            { name: "Hospital/Clinic Apps", icon: Zap, sub: "Booking & Patients" },
                            { name: "School/Institute Apps", icon: Star, sub: "E-Learning & Fees" },
                            { name: "Custom ERP Mobile Sync", icon: Layout, sub: "Inventory & CRM" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="p-10 rounded-[35px] bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all text-center"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <item.icon className="text-blue-600" size={28} />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-1 leading-snug">{item.name}</h3>
                                <p className="text-xs text-slate-500 font-bold uppercase tracking-wider">{item.sub}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- FAQ Section --- */}
            <FAQ customFaqs={specializedFaqs} />

            {/* --- Google Maps & Location --- */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="bg-slate-100 rounded-[50px] overflow-hidden h-[450px] shadow-inner relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d118335.84594185244!2d70.38096185820312!3d21.527443899999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3958019e07297e2d%3A0xff3c99df3d21799!2sJunagadh%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1712745000000!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="grayscale hover:grayscale-0 transition-all duration-700"
                            ></iframe>
                            <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-6 rounded-3xl shadow-xl border border-white/20">
                                <div className="flex items-center gap-3 mb-2">
                                    <MapPin className="text-blue-600" size={20} />
                                    <h4 className="font-bold text-slate-900">Our Local Base</h4>
                                </div>
                                <p className="text-sm text-slate-600 font-medium text-left">Moti Baug Road, Junagadh, Gujarat 362001</p>
                            </div>
                        </div>
                        <div className="text-left">
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                Let's Discuss Your App in <span className="text-blue-600">Junagadh</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                                Don't trust your app's code to remote developers who can't meet to iterate on layout designs. We are proudly based in Junagadh and look forward to discussing your mobile vision over coffee.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="p-8 bg-blue-50/50 rounded-[35px] border border-blue-100">
                                    <PhoneCall className="text-blue-600 mb-4" size={32} />
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Call Us</h4>
                                    <p className="text-blue-600 font-bold">+91 81608 81461</p>
                                </div>
                                <div className="p-8 bg-slate-50 rounded-[35px] border border-slate-100">
                                    <MessageCircle className="text-green-600 mb-4" size={32} />
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">WhatsApp</h4>
                                    <Link href={whatsappLink} className="text-green-600 font-bold hover:underline">Chat Now</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* --- Global CTA --- */}
            <section id="contact" className="py-24 bg-blue-600 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.1] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center text-white">
                        <Star className="text-white/40 mx-auto mb-8 fill-white/20" size={48} />
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            Build a Mobile App That <br className="hidden md:block" />
                            Grows Your Business
                        </h2>
                        <p className="text-xl text-blue-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Bring speed, ease, and automatic backend sync directly to your users. Launch on App Store and Google Play.
                        </p>
                        <Link href={whatsappLink} target="_blank">
                            <Button size="xl" className="bg-white text-blue-600 hover:bg-slate-50 px-10 rounded-2xl text-lg font-bold shadow-2xl shadow-blue-900/40 transform transition hover:scale-105 active:scale-95">
                                Start App Project Today <ArrowRight className="ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="py-12 bg-white border-t border-slate-100 italic text-center text-slate-400 text-sm">
                Epsilon Technology, Junagadh. Bringing universal app standards to Saurashtra.
            </footer>

            {/* Floating WhatsApp CTA */}
            <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                className="fixed bottom-6 right-6 z-50"
            >
                <Link href={whatsappLink} target="_blank">
                    <Button className="bg-green-500 hover:bg-green-600 text-white rounded-full w-16 h-16 shadow-2xl flex items-center justify-center p-0 group overflow-hidden">
                        <MessageCircle size={32} className="group-hover:scale-110 transition-transform" />
                        <span className="absolute right-full mr-4 bg-white text-slate-900 px-4 py-2 rounded-xl text-sm font-bold shadow-xl border border-slate-100 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                            Chat with us
                        </span>
                    </Button>
                </Link>
            </motion.div>
        </div>
    );
}
