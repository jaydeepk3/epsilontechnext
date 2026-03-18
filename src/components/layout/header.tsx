'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Globe, Smartphone, ShoppingCart, MessageSquare, Stethoscope, Layout, Activity } from 'lucide-react';

import { motion, AnimatePresence } from 'framer-motion';

// Pages whose hero sections have a dark/navy background — header needs light text
const DARK_HERO_PATHS = ['/', '/uae/', '/it-services/'];

const services = [
    {
        name: 'IT Services Overview',
        href: '/it-services/',
        icon: Globe,
        desc: 'Comprehensive technology solutions',
    },
    {
        name: 'Web Development',
        href: '/services/web-development/',
        icon: Layout,
        desc: 'Custom websites & landing pages',
    },

    {
        name: 'Mobile App Development',
        href: '/services/mobile-app-development/',
        icon: Smartphone,
        desc: 'iOS & Android apps for your business',
    },
    {
        name: 'eCommerce Development',
        href: '/services/ecommerce-development/',
        icon: ShoppingCart,
        desc: 'Online stores that convert visitors',
    },
    {
        name: 'Digital Marketing',
        href: '/lead-generation',
        icon: Activity,
        desc: 'Social media growth for business',
    },
    {
        name: 'Digital Marketing for Doctors',
        href: '/digital-marketing',
        icon: Stethoscope,
        desc: 'Social media growth for clinics',
    },

];

const products = [
    {
        name: 'WhatsApp Business API',
        href: '/product/whatsapp-business-api/',
        icon: MessageSquare,
        desc: 'Automate conversations at scale',
    },
];

// ─── Dropdown ─────────────────────────────────────────────────────────────────

interface DropdownItem {
    name: string;
    href: string;
    icon: React.ElementType;
    desc: string;
}

function NavDropdown({ label, items, textColor, scrolled }: { label: string; items: DropdownItem[]; textColor: string; scrolled: boolean }) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className="relative"
            onMouseEnter={() => setIsOpen(true)}
            onMouseLeave={() => setIsOpen(false)}
        >
            <button className={`flex items-center gap-1.5 font-semibold text-[13px] tracking-wide transition-all duration-300 ${textColor} ${isOpen ? 'opacity-100' : 'opacity-80 hover:opacity-100'}`}>
                {label}
                <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Invisible bridge to prevent gap between button and panel */}
                        <div className="absolute top-full left-0 h-4 w-full" />

                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 8, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
                            className="absolute top-[calc(100%+0.8rem)] -left-4 w-80 bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] border border-slate-100 overflow-hidden z-50 p-2"
                        >
                            <div className="flex flex-col">
                                {items.map((item) => (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className="flex items-center gap-4 p-3 rounded-2xl hover:bg-slate-50 transition-all group/item"
                                    >
                                        <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center shrink-0 group-hover/item:bg-blue-600 group-hover/item:text-white transition-all duration-300">
                                            <item.icon size={20} className="text-blue-600 group-hover/item:text-white transition-colors" />
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="font-bold text-slate-900 text-[14px] leading-tight group-hover/item:text-blue-600 transition-colors">{item.name}</span>
                                            <span className="text-slate-500 text-[11px] mt-0.5 leading-tight">{item.desc}</span>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}


// ─── Header ───────────────────────────────────────────────────────────────────

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
    const [mobileProductsOpen, setMobileProductsOpen] = useState(false);
    const pathname = usePathname();

    const isDarkHero = DARK_HERO_PATHS.some(p =>
        p === pathname || (p !== '/' && pathname.startsWith(p))
    );

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setMobileMenuOpen(false);
    }, [pathname]);

    const textColor = (!isScrolled && isDarkHero) ? 'text-white' : 'text-slate-700 hover:text-blue-600';
    const logoFilter = (!isScrolled && isDarkHero) ? 'brightness-0 invert' : '';

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${isScrolled
                ? 'bg-white/90 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] py-3 border-b border-slate-200/50'
                : isDarkHero
                    ? 'bg-transparent py-6'
                    : 'bg-white/80 backdrop-blur-md py-5 border-b border-slate-100/60'
                }`}
        >
            <div className="container mx-auto px-4 md:px-8 lg:px-12 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center group">
                    <div className="relative h-9 w-36 md:h-11 md:w-48 transition-transform duration-300 group-hover:scale-105 active:scale-95">
                        <Image
                            src="/logo.png"
                            alt="Epsilon Technology"
                            fill
                            className={`object-contain object-left transition-all duration-500 ${logoFilter}`}
                            priority
                        />
                    </div>
                </Link>


                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    <NavDropdown label="Services" items={services} textColor={textColor} scrolled={isScrolled} />
                    <NavDropdown label="Products" items={products} textColor={textColor} scrolled={isScrolled} />

                    <Link
                        href="/uae/"
                        className={`font-semibold text-[13px] tracking-wide transition-all duration-300 flex items-center gap-2 ${textColor} opacity-80 hover:opacity-100`}
                    >
                        <span className="text-base leading-none">🇦🇪</span> UAE
                    </Link>

                    <Link
                        href="/portfolio/"
                        className={`font-semibold text-[13px] tracking-wide transition-all duration-300 relative group/nav ${pathname === '/portfolio' || pathname === '/portfolio/' ? 'text-blue-600 opacity-100' : `${textColor} opacity-80 hover:opacity-100`}`}
                    >
                        Portfolio
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${pathname.startsWith('/portfolio') ? 'w-full' : 'w-0 group-hover/nav:w-full'}`} />
                    </Link>

                    <Link
                        href="/blog/"
                        className={`font-semibold text-[13px] tracking-wide transition-all duration-300 relative group/nav ${pathname === '/blog' || pathname === '/blog/' ? 'text-blue-600 opacity-100' : `${textColor} opacity-80 hover:opacity-100`}`}
                    >
                        Blog
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${pathname.startsWith('/blog') ? 'w-full' : 'w-0 group-hover/nav:w-full'}`} />
                    </Link>

                    <Link
                        href="/about/"
                        className={`font-semibold text-[13px] tracking-wide transition-all duration-300 relative group/nav ${pathname === '/about' || pathname === '/about/' ? 'text-blue-600 opacity-100' : `${textColor} opacity-80 hover:opacity-100`}`}
                    >
                        About
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${pathname.startsWith('/about') ? 'w-full' : 'w-0 group-hover/nav:w-full'}`} />
                    </Link>

                    <Link
                        href="/contacts/"
                        className={`font-semibold text-[13px] tracking-wide transition-all duration-300 relative group/nav ${pathname === '/contacts' || pathname === '/contacts/' ? 'text-blue-600 opacity-100' : `${textColor} opacity-80 hover:opacity-100`}`}
                    >
                        Contact
                        <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-600 transition-all duration-300 ${pathname.startsWith('/contacts') ? 'w-full' : 'w-0 group-hover/nav:w-full'}`} />
                    </Link>

                    <Button
                        size="sm"
                        className={`ml-2 px-6 py-5 rounded-2xl font-bold text-sm transition-all duration-300 shadow-lg hover:shadow-blue-500/20 hover:-translate-y-0.5 active:translate-y-0 ${!isScrolled && isDarkHero
                            ? 'bg-white text-blue-600 hover:bg-blue-50'
                            : 'bg-blue-600 text-white hover:bg-blue-700'
                            }`}
                        onClick={() => {
                            const booking = document.getElementById('booking') || document.getElementById('contact');
                            booking?.scrollIntoView({ behavior: 'smooth' });
                        }}
                    >
                        Get Free Quote
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={`lg:hidden p-2 rounded-2xl transition-all duration-300 ${!isScrolled && isDarkHero
                        ? 'bg-white/10 text-white hover:bg-white/20'
                        : 'bg-slate-100 text-slate-800 hover:bg-slate-200'
                        }`}
                    aria-label="Toggle menu"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={22} strokeWidth={2.5} /> : <Menu size={22} strokeWidth={2.5} />}
                </button>
            </div>


            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: -20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: -20 }}
                        transition={{ duration: 0.3, ease: [0.23, 1, 0.32, 1] }}
                        className="lg:hidden absolute top-[calc(100%+0.8rem)] left-4 right-4 bg-white/95 backdrop-blur-2xl rounded-[2.5rem] shadow-[0_25px_60px_rgba(0,0,0,0.2)] border border-slate-100 overflow-hidden z-50 max-h-[80vh] overflow-y-auto"
                    >
                        <div className="p-6 flex flex-col gap-2">

                            {/* Services accordion */}
                            <div className="bg-slate-50/50 rounded-3xl overflow-hidden border border-slate-100/50">
                                <button
                                    className="flex items-center justify-between w-full text-left text-[15px] font-bold text-slate-900 py-4 px-5 transition-colors"
                                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                                >
                                    Services
                                    <ChevronDown size={18} className={`transition-transform duration-300 ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {mobileServicesOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden px-3 pb-3"
                                        >
                                            <div className="grid grid-cols-1 gap-1">
                                                {services.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="flex items-center gap-4 py-3 px-4 rounded-2xl text-slate-700 hover:bg-blue-600 hover:text-white transition-all group"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors">
                                                            <item.icon size={18} className="text-blue-600 group-hover:text-white transition-colors" />
                                                        </div>
                                                        <span className="font-semibold text-sm">{item.name}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Products accordion */}
                            <div className="bg-slate-50/50 rounded-3xl overflow-hidden border border-slate-100/50">
                                <button
                                    className="flex items-center justify-between w-full text-left text-[15px] font-bold text-slate-900 py-4 px-5 transition-colors"
                                    onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                                >
                                    Products
                                    <ChevronDown size={18} className={`transition-transform duration-300 ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                                </button>
                                <AnimatePresence>
                                    {mobileProductsOpen && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: 'auto', opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden px-3 pb-3"
                                        >
                                            <div className="grid grid-cols-1 gap-1">
                                                {products.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="flex items-center gap-4 py-3 px-4 rounded-2xl text-slate-700 hover:bg-blue-600 hover:text-white transition-all group"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        <div className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 group-hover:bg-blue-500 transition-colors">
                                                            <item.icon size={18} className="text-blue-600 group-hover:text-white transition-colors" />
                                                        </div>
                                                        <span className="font-semibold text-sm">{item.name}</span>
                                                    </Link>
                                                ))}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Flat links */}
                            <div className="grid grid-cols-2 gap-2 mt-2">
                                {[
                                    { name: '🇦🇪 UAE', href: '/uae/' },
                                    { name: 'Portfolio', href: '/portfolio/' },
                                    { name: 'Blog', href: '/blog/' },
                                    { name: 'About', href: '/about/' },
                                    { name: 'Contact', href: '/contacts/' },
                                ].map((link) => (
                                    <Link
                                        key={link.name}
                                        href={link.href}
                                        className="text-sm font-bold text-slate-800 py-4 px-5 rounded-3xl bg-slate-50 border border-slate-100/50 hover:bg-blue-600 hover:text-white transition-all text-center"
                                        onClick={() => setMobileMenuOpen(false)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>

                            <Button
                                className="w-full mt-4 h-14 rounded-3xl font-bold text-base shadow-lg shadow-blue-500/25 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] transition-all"
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    setTimeout(() => {
                                        const el = document.getElementById('booking') || document.getElementById('contact');
                                        el?.scrollIntoView({ behavior: 'smooth' });
                                    }, 150);
                                }}
                            >
                                Get Free Quote
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </header>
    );
}
