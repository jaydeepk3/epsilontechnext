'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Header() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const pathname = usePathname();
    const isITServices = pathname === '/' || pathname.startsWith('/services');

    // Determine header style based on page
    // For now keeping it consistent with the original logic but defaulting to white/light theme
    const isDarkHero = false;

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const services = [
        { name: 'Web Development', href: '/services/web-development' },
        { name: 'Mobile App Development', href: '/services/mobile-app-development' },
        { name: 'eCommerce Development', href: '/services/ecommerce-development' },
    ];

    const products = [
        { name: 'WhatsApp Business API', href: '/product/whatsapp-business-api' },
    ];

    const displayNavLinks = [
        {
            name: 'Services',
            href: '#',
            isDropdown: true,
            dropdownItems: services
        },
        {
            name: 'Products',
            href: '#',
            isDropdown: true,
            dropdownItems: products
        },
        { name: 'Doctor Marketing', href: '/digital-marketing' },
        { name: 'Portfolio', href: '/portfolio' },

        { name: 'About', href: '/about' },
        { name: 'Contact', href: '/contacts' },
    ];

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
                }`}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2">
                    <div className="flex flex-col">
                        <div className="relative h-10 w-40 md:h-12 md:w-48">
                            <Image
                                src="/logo.png"
                                alt="Epsilon Technology"
                                fill
                                className={`object-contain object-left transition-all ${isDarkHero ? 'brightness-0 invert' : ''}`}
                                priority
                            />
                        </div>
                        <span className={`text-[10px] md:text-[11px] leading-tight mt-1 opacity-70 ${isDarkHero ? 'text-white' : 'text-slate-500'}`}>
                            Serving UAE 🇦🇪 · UK 🇬🇧 · USA 🇺🇸 · India 🇮🇳
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <nav className="hidden lg:flex items-center gap-8">
                    {displayNavLinks.map((link) => (
                        <div key={link.name} className="relative group">
                            {link.isDropdown ? (
                                <button
                                    className={`flex items-center gap-1 font-medium transition-colors ${isDarkHero ? 'text-slate-200 hover:text-white' : 'text-slate-600 hover:text-primary'
                                        }`}
                                >
                                    {link.name}
                                    <ChevronDown size={14} />
                                </button>
                            ) : (
                                <Link
                                    href={link.href}
                                    className={`font-medium transition-colors ${pathname === link.href
                                        ? (isDarkHero ? 'text-blue-400' : 'text-primary font-semibold')
                                        : (isDarkHero ? 'text-slate-200 hover:text-white' : 'text-slate-600 hover:text-primary')
                                        }`}
                                >
                                    {link.name}
                                </Link>
                            )}

                            {/* Dropdown Menu */}
                            {link.isDropdown && (
                                <div
                                    className="absolute top-full left-0 mt-2 w-64 bg-white rounded-xl shadow-xl border border-slate-100 overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top-left"
                                >
                                    <div className="py-2">
                                        {link.dropdownItems?.map((item) => (
                                            <Link
                                                key={item.name}
                                                href={item.href}
                                                className="block px-4 py-3 text-sm text-slate-700 hover:bg-slate-50 hover:text-blue-600 transition-colors"
                                            >
                                                {item.name}
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    ))}
                    <Button
                        size="sm"
                        onClick={() => document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' })}
                        className={isDarkHero ? "bg-white text-slate-900 hover:bg-slate-100" : ""}
                    >
                        {isITServices ? 'Get Free Quote' : 'Book Growth Call'}
                    </Button>
                </nav>

                {/* Mobile Toggle */}
                <button
                    className={`lg:hidden ${isDarkHero ? 'text-white' : 'text-slate-800'}`}
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="lg:hidden bg-white border-t border-slate-100 overflow-hidden max-h-[90vh] overflow-y-auto"
                    >
                        <div className="container mx-auto px-4 py-6 flex flex-col gap-4">
                            {displayNavLinks.map((link) => (
                                <div key={link.name}>
                                    {link.isDropdown ? (
                                        <div className="flex flex-col gap-2">
                                            <div className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50 opacity-70">
                                                {link.name}
                                            </div>
                                            <div className="pl-4 flex flex-col gap-2 border-l-2 border-slate-100 ml-1">
                                                {link.dropdownItems?.map((item) => (
                                                    <Link
                                                        key={item.name}
                                                        href={item.href}
                                                        className="text-base font-medium text-slate-600 py-2"
                                                        onClick={() => setMobileMenuOpen(false)}
                                                    >
                                                        {item.name}
                                                    </Link>
                                                ))}
                                            </div>
                                        </div>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-lg font-medium text-slate-800 py-2 border-b border-slate-50"
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {link.name}
                                        </Link>
                                    )}
                                </div>
                            ))}
                            <Button className="w-full mt-4" onClick={() => {
                                setMobileMenuOpen(false);
                                document.getElementById('booking')?.scrollIntoView({ behavior: 'smooth' });
                            }}>
                                {isITServices ? 'Get Free Quote' : 'Book Free Doctor Growth Consultation'}
                            </Button>
                        </div>
                    </motion.div>
                )
                }
            </AnimatePresence >
        </header >
    );
}
