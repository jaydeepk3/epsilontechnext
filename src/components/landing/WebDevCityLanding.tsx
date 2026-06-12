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
    Rocket
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { FAQ } from '@/components/sections/FAQ';

interface WebDevCityLandingProps {
    city: string;
    cityDescription: string;
}

export default function WebDevCityLanding({ city, cityDescription }: WebDevCityLandingProps) {
    const citySlug = city.toLowerCase();
    
    const pageKeywords = [
        `website development ${citySlug}`,
        `web design ${citySlug} gujarat`,
        `website design company ${citySlug}`,
        `top web developers in ${city}`
    ];

    const specializedFaqs = [
        {
            question: `How long does it take to build a website for a business in ${city}?`,
            answer: `Typical websites for clinics or restaurants in ${city} take 7–10 days. Larger e-commerce or custom projects can take 3–5 weeks. We prioritize fast delivery without compromising on SEO or design quality.`
        },
        {
            question: "Why should I choose Next.js for my website?",
            answer: "Next.js is the most modern web framework. It allows your website to be lightning-fast (which Google loves) and extremely secure. Unlike traditional sites, Next.js sites at Epsilon Technology are built for performance and better SEO rankings."
        },
        {
            question: "Why should I choose custom development over template site builders like Wix or Squarespace?",
            answer: "Template builders have limited speed optimization, restrictive SEO options, and cannot be custom-optimized for AI engines like ChatGPT. A custom Next.js website from Epsilon Technology gives you full design control, clean semantic HTML5, custom schema structures, and sub-second loading speeds."
        },
        {
            question: "Will my business website be visible on Google Search and conversational AI like ChatGPT?",
            answer: "Yes. Every website we build is optimized for traditional SEO (meta tags, fast loading speeds, local schema markup) and Generative Engine Optimization (GEO). We structure content so AI search tools (like ChatGPT Search, Gemini, and Perplexity) can crawl and cite your business when users ask for local services."
        },
        {
            question: `Is Epsilon Technology really based in ${city}?`,
            answer: `Yes! We are proud to be locally based in Junagadh, Gujarat. You can visit our office or we can meet at your business location. Being local allows us to understand the Junagadh market better than any remote agency.`
        },
        {
            question: "Will my website work on mobile phones?",
            answer: "Absolutely. 80%+ of users in Junagadh browse the web on their phones. All our websites are 'Mobile-First,' meaning they look and work perfectly on every device, from budget smartphones to high-end laptops."
        },
        {
            question: "Do you provide maintenance and hosting?",
            answer: "Yes, we provide end-to-end solutions. This includes ultra-fast hosting, SSL security, professional business emails, and yearly maintenance so you never have to worry about technical issues."
        }
    ];

    const schemaData = {
        "@context": "https://schema.org",
        "@type": "LocalBusiness",
        "name": `Epsilon Technology - Website Development in ${city}`,
        "image": "https://epsilon-technology.com/logo.png",
        "@id": `https://epsilon-technology.com/website-development-in-${citySlug}/#localbusiness`,
        "url": `https://epsilon-technology.com/website-development-in-${citySlug}/`,
        "telephone": "+918160881461",
        "priceRange": "₹15000-₹80000",
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

    const whatsappLink = `https://wa.me/918160881461?text=Hi%20Jaydeep%2C%20I'm%20looking%20for%20a%20website%20for%20my%20business%20in%20${city}.%20Can%20we%20discuss%3F`;



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
                <div className="absolute top-0 right-0 -z-10 w-full h-full bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-50 via-white to-white" />
                <div className="absolute -top-24 -left-20 w-96 h-96 bg-blue-100/50 rounded-full blur-[100px] -z-10 animate-pulse" />
                
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-col items-center text-center max-w-5xl mx-auto">
                        <motion.div
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-sm font-semibold mb-8"
                        >
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-600"></span>
                            </span>
                            Locally Based in {city}, Gujarat
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-7xl font-extrabold tracking-tight text-slate-900 mb-8 leading-tight"
                        >
                            Website Development Company in <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 italic">{city}</span> <span className="hidden md:inline">|</span> Epsilon Technology
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-lg md:text-xl text-slate-600 mb-12 max-w-3xl leading-relaxed"
                        >
                            {cityDescription} Epsilon Technology builds high-performance Next.js and WordPress websites designed to rank on Google and convert visitors into customers for {city} businesses.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center gap-4"
                        >
                                <Link href={whatsappLink} target="_blank">
                                <Button size="xl" className="bg-indigo-600 hover:bg-indigo-700 text-white px-10 py-7 rounded-2xl text-lg font-bold shadow-2xl shadow-indigo-200 group">
                                    Get a Free Quote <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Button>
                            </Link>
                            <p className="text-sm text-slate-500 font-medium">
                                Fast Delivery in 7–10 Days
                            </p>
                        </motion.div>

                        {/* Hero Image Mockup */}
                        <motion.div
                            initial={{ opacity: 0, y: 40 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, delay: 0.8 }}
                            className="mt-16 relative w-full max-w-4xl mx-auto"
                        >
                            <div className="absolute inset-0 bg-indigo-600/10 blur-[100px] -z-10 rounded-full scale-110" />
                            <div className="relative rounded-[32px] overflow-hidden border border-white/20 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.2)]">
                                <img 
                                    src="/landing/junagadh-hero.png" 
                                    alt={`Website development in ${city}`}
                                    className="w-full h-auto object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                            </div>
                            
                            {/* Floating Badge */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                className="absolute -top-6 -right-6 md:-right-12 bg-white p-6 rounded-[24px] shadow-2xl border border-indigo-50 flex items-center gap-4 z-20 hidden sm:flex"
                            >
                                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center">
                                    <Zap className="text-green-600" size={24} />
                                </div>
                                <div>
                                    <div className="text-xs font-bold text-slate-400 uppercase tracking-widest leading-none mb-1">Performance</div>
                                    <div className="text-lg font-extrabold text-slate-900 leading-none">99/100</div>
                                </div>
                            </motion.div>
                        </motion.div>
                        
                        {/* Features Banner */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 1 }}
                            className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8 w-full py-10 px-8 bg-white/40 backdrop-blur-xl border border-indigo-50/50 rounded-[40px] shadow-sm"
                        >
                            {[
                                { icon: Code2, label: "Next.js & React", sub: "Lightning Fast" },
                                { icon: Globe, label: "SEO Optimized", sub: "Ready for Google" },
                                { icon: Smartphone, label: "Mobile First", sub: "Perfect on Phones" },
                                { icon: Clock, label: "Fast Delivery", sub: "Launch in Days" }
                            ].map((feature, i) => (
                                <div key={i} className="flex flex-col items-center text-center">
                                    <div className="w-12 h-12 bg-indigo-50 rounded-2xl flex items-center justify-center mb-4">
                                        <feature.icon className="text-indigo-600" size={24} />
                                    </div>
                                    <div className="text-sm font-bold text-slate-900 uppercase tracking-wide">{feature.label}</div>
                                    <div className="text-xs text-slate-500">{feature.sub}</div>
                                </div>
                            ))}
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* --- Why Junagadh Businesses Need a Website --- */}
            <section className="py-24 bg-slate-50 text-slate-900 relative overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-tight">
                                Why Your <span className="text-indigo-600 italic underline decoration-indigo-200 font-serif">{city} Business</span> <br />
                                Needs a Website in 2026
                            </h2>
                            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                                Junagadh is growing rapidly as a commercial hub. Whether you are running a clinic in Talav Gate area, a restaurant near Girnar, or a school in Zanzarda Road, your customers are searching for you online. If you don't have a professional website, you are losing business to competitors who do.
                            </p>
                            <div className="space-y-6 mb-10">
                                {[
                                    { title: "Local Trust", desc: "A professional website builds instant trust with local residents and tourists." },
                                    { title: "24/7 Availability", desc: "Let your customers find your services and contact you even after your shop is closed." },
                                    { title: "Google Ranking", desc: "Appear in local search results for keywords like 'Best school in Junagadh' or 'Best clinic'." },
                                    { title: "Social Proof", desc: "Showcase testimonials and past work to convince hesitant buyers." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="p-1 bg-indigo-100 rounded-lg h-fit">
                                            <CheckCircle2 className="text-indigo-600" size={20} />
                                        </div>
                                        <div>
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
                                <div className="p-3 bg-indigo-600 rounded-2xl">
                                    <Rocket className="text-white" size={24} />
                                </div>
                                <h3 className="text-2xl font-bold italic">The Epsilon Edge</h3>
                            </div>
                            <div className="space-y-8">
                                {[
                                    { icon: Zap, title: "Global Standards", desc: "We use high-end frameworks like Next.js (used by Netflix & Airbnb) to give your local business a world-class performance edge." },
                                    { icon: MapPin, title: "Proudly Junagadhi", desc: "Based in Moti Baug. We understand the local Saurashtra market and Gujarati business values better than any remote agency." },
                                    { icon: MessageCircle, title: "Conversion First", desc: "Our sites aren't just 'pretty'. They are built to drive calls and WhatsApp inquiries directly to your phone." },
                                    { icon: ShieldCheck, title: "Local Support", desc: "Need a change? Want to meet? We are just a 10-minute drive away in Junagadh. No more waiting for email replies." }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-5">
                                        <div className="p-2 bg-indigo-50 rounded-lg h-fit">
                                            <item.icon className="text-indigo-600" size={24} />
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

            {/* --- Our Web Development Services in Junagadh --- */}
            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="max-w-3xl mx-auto mb-16"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Best Web Design & Development Services in {city}
                        </h2>
                        <p className="text-slate-600 text-lg">
                            We build sub-second loading websites tailored to your platform of choice. Whether you need a simple WordPress site or a complex Next.js web application, Epsilon Technology delivers premium Saurashtra-based engineering.
                        </p>
                    </motion.div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto text-left">
                        {[
                            { 
                                title: "WordPress Web Development", 
                                desc: "Perfect for local clinics, schools, and real estate. We design custom, high-speed WordPress themes optimized for local SEO.", 
                                badge: "Affordable & Easy CMS" 
                            },
                            { 
                                title: "eCommerce Website Development", 
                                desc: "Launch your online store in Junagadh. We build lightning-fast Shopify and WooCommerce stores with secure local payment gateways.", 
                                badge: "Shopify & WooCommerce" 
                            },
                            { 
                                title: "Custom Next.js & React Apps", 
                                desc: "For startups and businesses needing advanced dashboards, portals, or database features. Lightning-fast and AI-search optimized.", 
                                badge: "Enterprise Tech Stack" 
                            },
                            { 
                                title: "Google & ChatGPT SEO (GEO)", 
                                desc: "We optimize your content and code structure so conversational AI and search engines cite your website on top when clients search local services.", 
                                badge: "Leads & Rankings" 
                            }
                        ].map((service, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -5 }}
                                className="p-8 bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between"
                            >
                                <div>
                                    <span className="inline-block px-3 py-1 bg-indigo-50 text-indigo-600 text-xs font-bold rounded-full mb-4">
                                        {service.badge}
                                    </span>
                                    <h3 className="text-xl font-bold text-slate-900 mb-3">{service.title}</h3>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-6">{service.desc}</p>
                                </div>
                                <Link href={whatsappLink} target="_blank" className="text-indigo-600 font-bold text-sm flex items-center gap-1 hover:gap-2 transition-all">
                                    Inquire Pricing <ArrowRight size={16} />
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- Industries We Serve --- */}
            <section className="py-24 bg-white">
                <div className="container mx-auto px-4 md:px-6 text-center">
                    <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-16">
                        Custom Solutions for <br className="hidden md:block" /> Every Industry in {city}
                    </h2>
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 max-w-6xl mx-auto">
                        {[
                            { name: "Medical Clinics", icon: ShieldCheck, sub: "Doctors & Labs" },
                            { name: "Retail Shops", icon: Laptop, sub: "Clothing & Hardware" },
                            { name: "Restaurants", icon: Zap, sub: "Hotels & Cafes" },
                            { name: "Law Firms", icon: Layout, sub: "Legal Services" },
                            { name: "Schools", icon: Star, sub: "Educational Hubs" }
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                whileHover={{ y: -10 }}
                                className="p-10 rounded-[35px] bg-slate-50 border border-slate-100 shadow-sm hover:shadow-xl hover:border-indigo-100 transition-all text-center"
                            >
                                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-sm">
                                    <item.icon className="text-indigo-600" size={28} />
                                </div>
                                <h3 className="font-bold text-lg text-slate-900 mb-1">{item.name}</h3>
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
                            {/* Google Maps Embed for Junagadh */}
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
                                    <MapPin className="text-indigo-600" size={20} />
                                    <h4 className="font-bold text-slate-900">Our Local Base</h4>
                                </div>
                                <p className="text-sm text-slate-600 font-medium">Moti Baug Road, Junagadh, Gujarat 362001</p>
                            </div>
                        </div>
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                                Meet Us Locally in <span className="text-indigo-600">Junagadh</span>
                            </h2>
                            <p className="text-lg text-slate-600 mb-10 leading-relaxed">
                                Don't trust your business to someone who doesn't know your city. We are proudly based in Junagadh and would love to meet over coffee to discuss your vision.
                            </p>
                            <div className="grid sm:grid-cols-2 gap-8">
                                <div className="p-8 bg-indigo-50 rounded-[35px] border border-indigo-100">
                                    <PhoneCall className="text-indigo-600 mb-4" size={32} />
                                    <h4 className="font-bold text-slate-900 text-lg mb-1">Call Us</h4>
                                    <p className="text-indigo-600 font-bold">+91 81608 81461</p>
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
            <section id="contact" className="py-24 bg-indigo-600 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full opacity-[0.1] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/circuit-board.png')]" />
                <div className="container mx-auto px-4 md:px-6 relative z-10">
                    <div className="max-w-5xl mx-auto text-center text-white">
                        <Star className="text-white/40 mx-auto mb-8 fill-white/20" size={48} />
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 leading-tight">
                            Build the Website Your <br className="hidden md:block" />
                            Business Deserves
                        </h2>
                        <p className="text-xl text-indigo-100 mb-12 max-w-2xl mx-auto leading-relaxed">
                            Stop losing customers to slow, outdated websites. Partner with Epsilon Technology and lead the digital wave in Junagadh.
                        </p>
                        <Link href={whatsappLink} target="_blank">
                            <Button size="xl" className="bg-white text-indigo-600 hover:bg-slate-50 px-10 rounded-2xl text-lg font-bold shadow-2xl shadow-indigo-900/40 transform transition hover:scale-105 active:scale-95">
                                Start Your Project Today <ArrowRight className="ml-2" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </section>

            <footer className="py-12 bg-white border-t border-slate-100 italic text-center text-slate-400 text-sm">
                Epsilon Technology, Junagadh. Making Gujarat Digital, one business at a time.
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
