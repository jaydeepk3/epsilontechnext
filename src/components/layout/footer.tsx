'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Mail, Phone, MapPin, Instagram, Linkedin, Dribbble, ArrowRight, Cpu, Stethoscope, Building2, BookOpen, ChevronRight, Clock, MessageCircle } from 'lucide-react';

const footerLinks = [
    {
        icon: Cpu,
        title: 'IT Services',
        links: [
            { label: 'Web Development', href: '/services/web-development' },
            { label: 'Mobile App Development', href: '/services/mobile-app-development' },
            { label: 'eCommerce Development', href: '/services/ecommerce-development' },
            { label: 'IT Services Overview', href: '/it-services' },
            { label: 'WhatsApp Business API', href: '/product/whatsapp-business-api' },
        ],
    },
    {
        icon: Stethoscope,
        title: 'Doctor Marketing',
        hideOnUAE: true,
        links: [
            { label: 'Doctor Marketing Hub', href: '/digital-marketing' },
            { label: 'Spine Specialists', href: '/digital-marketing-for-spine-specialists' },
            { label: 'Pediatric Doctors', href: '/digital-marketing-for-pediatric-doctors' },
            { label: 'Surgeon Doctors', href: '/digital-marketing-for-surgeon-doctors' },
            { label: 'Orthopedic Doctors', href: '/digital-marketing-for-orthopedic-doctors' },
            { label: 'Digital Marketing Junagadh', href: '/digital-marketing-in-junagadh' },
            { label: 'Doctor Marketing Rajkot', href: '/doctor-marketing-in-rajkot' },
            { label: 'Doctor Marketing Morbi', href: '/doctor-marketing-in-morbi' },
        ],
    },
    {
        icon: Building2,
        title: 'Company',
        links: [
            { label: 'About Us', href: '/about-us' },
            { label: 'UAE', href: '/uae' },
            { label: 'Portfolio', href: '/#portfolio' },
            { label: 'Meta Certified Partner', href: '/meta-certified-partner' },
            { label: 'FAQs', href: '/faqs' },
            { label: 'Contact Us', href: '/contacts' },
        ],
        extra: {
            icon: BookOpen,
            title: 'Blog & Resources',
            links: [
                { label: 'All Articles', href: '/blog' },
                { label: 'Mobile App Guide 2026', href: '/blog/mobile-app-development-guide-2026' },
                { label: 'Cost of App Development', href: '/blog/the-real-cost-of-custom-application-development-2026' },
                { label: '5 Signs You Need a Pro Website', href: '/blog/5-signs-you-need-professional-website-development-services' },
                { label: 'Digital Transformation Guide', href: '/blog/digital-transformation-guide' },
                { label: 'Doctor Marketing Ideas', href: '/blog/doctor-marketing-ideas-junagadh', hideOnUAE: true },
                { label: 'Why Next.js for eCommerce', href: '/blog/why-nextjs-is-best-for-ecommerce-website-development' },
            ],
        },
    },
];

const socials = [
    {
        href: 'https://www.instagram.com/epsilontechnology/',
        label: 'Instagram',
        icon: Instagram,
        hoverColor: 'hover:bg-gradient-to-br hover:from-purple-600 hover:to-pink-500 hover:border-pink-500',
    },
    {
        href: 'https://www.linkedin.com/company/epsilon-technology8',
        label: 'LinkedIn',
        icon: Linkedin,
        hoverColor: 'hover:bg-blue-600 hover:border-blue-500',
    },
    {
        href: 'https://dribbble.com/epsilontech',
        label: 'Dribbble',
        icon: Dribbble,
        hoverColor: 'hover:bg-[#ea4c89] hover:border-[#ea4c89]',
    },
];

export function Footer() {
    const pathname = usePathname();
    const isUAE = pathname?.startsWith('/uae');

    return (
        <footer className="relative bg-slate-950 text-white overflow-hidden">

            {/* Top glow accent */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[2px] bg-gradient-to-r from-transparent via-sky-500/70 to-transparent" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-40 bg-sky-500/5 blur-3xl rounded-full pointer-events-none" />

            {/* CTA Strip */}
            <div className="relative border-b border-slate-800/60">
                <div className="container mx-auto px-4 md:px-6 py-10">
                    <div className="relative rounded-2xl bg-gradient-to-r from-sky-600/20 via-blue-600/10 to-slate-900 border border-sky-500/20 px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6 overflow-hidden">
                        {/* Subtle inner glow */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-500/10 via-transparent to-transparent pointer-events-none" />
                        <div className="absolute -top-10 -left-10 w-40 h-40 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

                        <div className="relative z-10">
                            <p className="text-xs font-semibold uppercase tracking-widest text-sky-400 mb-1">Let's Build Something Great</p>
                            <h3 className="text-xl md:text-2xl font-bold text-white leading-snug">
                                Ready to grow your business with us?
                            </h3>
                            <p className="text-slate-400 text-sm mt-1">
                                From custom software to doctor marketing — we deliver results.
                            </p>
                        </div>
                        <Link
                            href="/contacts"
                            className="relative z-10 flex-shrink-0 inline-flex items-center gap-2 bg-sky-500 hover:bg-sky-400 text-white font-semibold text-sm px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-sky-500/20 hover:shadow-sky-400/30 hover:scale-105 group"
                        >
                            Get a Free Quote
                            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform duration-200" />
                        </Link>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 md:px-6 pt-16 pb-10">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">

                    {/* Brand Column */}
                    <div className="lg:col-span-2">
                        <div className="relative h-12 w-48 mb-6">
                            <Image
                                src="/logo.webp"
                                alt="Epsilon Technology"
                                fill
                                className="object-contain object-left brightness-0 invert"
                            />
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-7 max-w-sm">
                            A global digital agency delivering websites, mobile apps, eCommerce stores, and WhatsApp automation for businesses in UAE, UK, USA and India. Founded by Jaydeep Kataria — 7 years, 100+ projects, 4 countries.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-3 mb-8">
                            {socials.map(({ href, label, icon: Icon, hoverColor }) => (
                                <Link
                                    key={label}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={label}
                                    title={label}
                                    className={`w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white transition-all duration-300 hover:scale-110 hover:-translate-y-0.5 hover:shadow-lg ${hoverColor}`}
                                >
                                    <Icon size={16} />
                                </Link>
                            ))}
                        </div>

                        {/* Meta Partner Badge */}
                        <div className="mb-8">
                            <Link 
                                href="/meta-certified-partner/" 
                                className="inline-flex items-center gap-3 px-4 py-2.5 rounded-2xl bg-gradient-to-r from-blue-950/50 to-indigo-950/40 border border-blue-500/25 hover:border-blue-500/50 hover:from-blue-950/70 hover:to-indigo-950/60 transition-all group"
                            >
                                <svg className="w-5 h-5 text-blue-400 shrink-0 transition-transform group-hover:scale-110" viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M16.92 5c-1.4 0-2.67.6-3.6 1.6C12.38 5.6 11.11 5 9.7 5c-3.13 0-5.69 2.5-5.69 5.6 0 3.1 2.56 5.6 5.69 5.6 1.4 0 2.67-.6 3.6-1.6.93 1 2.2 1.6 3.61 1.6 3.14 0 5.7-2.5 5.7-5.6 0-3.1-2.56-5.6-5.7-5.6zm.01 9.2c-1.99 0-3.6-1.6-3.6-3.6 0-2 1.61-3.6 3.6-3.6 1.98 0 3.59 1.6 3.59 3.6 0 2-1.61 3.6-3.59 3.6zM9.7 14.2c-1.99 0-3.6-1.6-3.6-3.6 0-2 1.61-3.6 3.6-3.6 1.98 0 3.6 1.6 3.6 3.6 0 2-1.61 3.6-3.6 3.6z"/>
                                </svg>
                                <div className="flex flex-col text-left">
                                    <span className="text-[11px] font-extrabold text-blue-400 tracking-wider uppercase leading-none">Meta Ads Partner</span>
                                    <span className="text-[9px] text-slate-400 leading-none mt-0.5 font-medium">Excellence Impact Leader</span>
                                </div>
                            </Link>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-3 text-sm">
                            <a
                                href="https://maps.google.com/?q=Junagadh,Gujarat,India"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-start gap-3 text-slate-400 hover:text-white transition-colors group"
                            >
                                <span className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-sky-500/50 transition-colors">
                                    <MapPin size={13} className="text-sky-500" />
                                </span>
                                <span>Junagadh, Gujarat, India – 362001</span>
                            </a>
                            <a
                                href="mailto:contact@epsilon-technology.com"
                                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                            >
                                <span className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-sky-500/50 transition-colors">
                                    <Mail size={13} className="text-sky-500" />
                                </span>
                                contact@epsilon-technology.com
                            </a>
                            <a
                                href="tel:+918160881461"
                                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                            >
                                <span className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-sky-500/50 transition-colors">
                                    <Phone size={13} className="text-sky-500" />
                                </span>
                                +91 81608 81461
                            </a>
                            <a
                                href="https://wa.me/918160881461"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors group"
                            >
                                <span className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0 group-hover:border-sky-500/50 transition-colors">
                                    <MessageCircle size={13} className="text-sky-500" />
                                </span>
                                +91 81608 81461 (WhatsApp)
                            </a>
                            <div className="flex items-center gap-3 text-slate-400 pt-1">
                                <span className="w-7 h-7 rounded-lg bg-slate-900 border border-slate-800 flex items-center justify-center flex-shrink-0">
                                    <Clock size={13} className="text-sky-500" />
                                </span>
                                9AM–7PM IST · Reply within 4 hrs
                            </div>
                        </div>
                    </div>

                    {/* Link Columns */}
                    {footerLinks.filter((col: any) => !(isUAE && col.hideOnUAE)).map(({ icon: ColIcon, title, links, extra }) => (
                        <div key={title}>
                            {/* Section Header */}
                            <div className="flex items-center gap-2 mb-5">
                                <ColIcon size={14} className="text-sky-500 flex-shrink-0" />
                                <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">{title}</h4>
                            </div>
                            <ul className="space-y-2.5">
                                {links.filter((l: any) => !(isUAE && l.hideOnUAE)).map(({ label, href }) => (
                                    <li key={href}>
                                        <Link
                                            href={href}
                                            className="flex items-center gap-1.5 text-slate-400 text-sm hover:text-sky-400 transition-colors group"
                                        >
                                            <ChevronRight
                                                size={12}
                                                className="text-slate-700 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0"
                                            />
                                            {label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>

                            {/* Extra sub-section (Blog) */}
                            {extra && (
                                <div className="mt-8">
                                    <div className="flex items-center gap-2 mb-5">
                                        <extra.icon size={14} className="text-sky-500 flex-shrink-0" />
                                        <h4 className="text-xs font-bold uppercase tracking-widest text-slate-200">{extra.title}</h4>
                                    </div>
                                    <ul className="space-y-2.5">
                                        {extra.links.filter((l: any) => !(isUAE && l.hideOnUAE)).map(({ label, href }) => (
                                            <li key={href}>
                                                <Link
                                                    href={href}
                                                    className="flex items-center gap-1.5 text-slate-400 text-sm hover:text-sky-400 transition-colors group"
                                                >
                                                    <ChevronRight
                                                        size={12}
                                                        className="text-slate-700 group-hover:text-sky-500 group-hover:translate-x-0.5 transition-all duration-200 flex-shrink-0"
                                                    />
                                                    {label}
                                                </Link>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent mb-8" />

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
                    <p className="flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 inline-block animate-pulse" />
                        © {new Date().getFullYear()} Epsilon Technology. All rights reserved.
                    </p>
                    <div className="flex flex-wrap gap-5 justify-center items-center">
                        <Link href="/about-us" className="hover:text-sky-400 transition-colors">The Founder</Link>
                        <span className="text-slate-800">|</span>
                        <Link href="/blog" className="hover:text-sky-400 transition-colors">Resources</Link>
                        <span className="text-slate-800">|</span>
                        <Link href="/faqs" className="hover:text-sky-400 transition-colors">FAQs</Link>
                        <span className="text-slate-800">|</span>
                        <Link href="/contacts" className="hover:text-sky-400 transition-colors">Contact</Link>
                        <span className="text-slate-800">|</span>
                        <Link href="/sitemap.xml" className="hover:text-sky-400 transition-colors">Sitemap</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
