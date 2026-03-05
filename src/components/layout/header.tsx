'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown, Globe, Smartphone, ShoppingCart, MessageSquare, Stethoscope } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// Pages whose hero sections have a dark/navy background — header needs light text
const DARK_HERO_PATHS = ['/', '/uae', '/it-services'];

const services = [
    {
        name: 'Web Development',
        href: '/services/web-development',
        icon: Globe,
        desc: 'Custom websites & landing pages',
    },
    {
        name: 'Mobile App Development',
        href: '/services/mobile-app-development',
        icon: Smartphone,
        desc: 'iOS & Android apps for your business',
    },
    {
        name: 'eCommerce Development',
        href: '/services/ecommerce-development',
        icon: ShoppingCart,
        desc: 'Online stores that convert visitors',
    },
    {
        name: 'Doctor Marketing',
        href: '/digital-marketing',
        icon: Stethoscope,
        desc: 'Social media growth for clinics',
    },
];

const products = [
    {
        name: 'WhatsApp Business API',
        href: '/product/whatsapp-business-api',
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

function NavDropdown({ label, items }: { label: string; items: DropdownItem[] }) {
    return (
        <div className="relative group">
            <button className="flex items-center gap-1 font-medium text-sm transition-colors text-slate-700 hover:text-blue-600 group-hover:text-blue-600">
                {label}
                <ChevronDown size={14} className="transition-transform duration-200 group-hover:rotate-180" />
            </button>

            {/* Invisible bridge to prevent gap between button and panel */}
            <div className="absolute top-full left-0 h-3 w-full" />

            <div className="absolute top-[calc(100%+0.75rem)] left-0 w-72 bg-white rounded-2xl shadow-xl border border-slate-100 overflow-hidden
                            opacity-0 invisible translate-y-2 group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                            transition-all duration-200 ease-out z-50">
                <div className="p-2">
                    {items.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className="flex items-start gap-3 px-3 py-3 rounded-xl text-sm hover:bg-blue-50 transition-colors group/item"
                        >
                            <div className="w-9 h-9 rounded-lg bg-blue-100 flex items-center justify-center shrink-0 group-hover/item:bg-blue-200 transition-colors mt-0.5">
                                <item.icon size={17} className="text-blue-600" />
                            </div>
                            <div>
                                <div className="font-semibold text-slate-800 group-hover/item:text-blue-600 transition-colors">{item.name}</div>
                                <div className="text-slate-500 text-xs mt-0.5">{item.desc}</div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
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

    const textColor = (!isScrolled && isDarkHero) ? 'text-white/90 hover:text-white' : 'text-slate-700 hover:text-blue-600';
    const logoFilter = (!isScrolled && isDarkHero) ? 'brightness-0 invert' : '';

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
                    ? 'bg-white/95 backdrop-blur-md shadow-sm py-3 border-b border-slate-100'
                    : isDarkHero
                        ? 'bg-transparent py-5'
                        : 'bg-white/80 backdrop-blur-sm py-4 border-b border-slate-100/60'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center">
                    <div className="relative h-9 w-36 md:h-10 md:w-44">
                        <Image
                            src="/logo.png"
                            alt="Epsilon Technology"
                            fill
                            className={`object-contain object-left transition-all duration-300 ${logoFilter}`}
                            priority
                        />
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-6">

                    <NavDropdown label="Services" items={services} />
                    <NavDropdown label="Products" items={products} />

                    <Link
                        href="/uae"
                        className={`font-medium text-sm transition-colors flex items-center gap-1.5 ${textColor}`}
                    >
                        🇦🇪 UAE
                    </Link>

                    <Link
                        href="/portfolio"
                        className={`font-medium text-sm transition-colors ${pathname === '/portfolio'
                                ? 'text-blue-600 font-semibold'
                                : textColor
                            }`}
                    >
                        Portfolio
                    </Link>

                    <Link
                        href="/about"
                        className={`font-medium text-sm transition-colors ${pathname === '/about'
                                ? 'text-blue-600 font-semibold'
                                : textColor
                            }`}
                    >
                        About
                    </Link>

                    <Link
                        href="/contacts"
                        className={`font-medium text-sm transition-colors ${pathname === '/contacts'
                                ? 'text-blue-600 font-semibold'
                                : textColor
                            }`}
                    >
                        Contact
                    </Link>

                    <Button
                        size="sm"
                        className={`ml-2 font-semibold ${!isScrolled && isDarkHero
                                ? 'bg-white text-slate-900 hover:bg-slate-100 shadow-lg'
                                : ''
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
                    className={`lg:hidden p-1 rounded-lg transition-colors ${!isScrolled && isDarkHero ? 'text-white' : 'text-slate-800'
                        }`}
                    aria-label="Toggle menu"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2, ease: 'easeOut' }}
                        className="lg:hidden bg-white border-t border-slate-100 overflow-hidden max-h-[85vh] overflow-y-auto"
                    >
                        <div className="container mx-auto px-4 py-5 flex flex-col gap-1">

                            {/* Services accordion */}
                            <button
                                className="flex items-center justify-between w-full text-left text-base font-semibold text-slate-800 py-3 px-2 rounded-xl hover:bg-slate-50 transition-colors"
                                onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                            >
                                Services
                                <ChevronDown size={16} className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {mobileServicesOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden pl-2"
                                    >
                                        {services.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-slate-700 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <item.icon size={16} className="text-blue-500 shrink-0" />
                                                {item.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Products accordion */}
                            <button
                                className="flex items-center justify-between w-full text-left text-base font-semibold text-slate-800 py-3 px-2 rounded-xl hover:bg-slate-50 transition-colors"
                                onClick={() => setMobileProductsOpen(!mobileProductsOpen)}
                            >
                                Products
                                <ChevronDown size={16} className={`transition-transform ${mobileProductsOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <AnimatePresence>
                                {mobileProductsOpen && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: 'auto', opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        className="overflow-hidden pl-2"
                                    >
                                        {products.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="flex items-center gap-3 py-2.5 px-3 rounded-xl text-slate-700 hover:bg-blue-50 hover:text-blue-600 text-sm font-medium transition-colors"
                                                onClick={() => setMobileMenuOpen(false)}
                                            >
                                                <item.icon size={16} className="text-blue-500 shrink-0" />
                                                {item.name}
                                            </Link>
                                        ))}
                                    </motion.div>
                                )}
                            </AnimatePresence>

                            {/* Flat links */}
                            {[
                                { name: '🇦🇪 UAE', href: '/uae' },
                                { name: 'Portfolio', href: '/portfolio' },
                                { name: 'About', href: '/about' },
                                { name: 'Contact', href: '/contacts' },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className="text-base font-semibold text-slate-800 py-3 px-2 rounded-xl hover:bg-slate-50 hover:text-blue-600 transition-colors"
                                    onClick={() => setMobileMenuOpen(false)}
                                >
                                    {link.name}
                                </Link>
                            ))}

                            <Button
                                className="w-full mt-3"
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
