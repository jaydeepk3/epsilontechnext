import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Linkedin, Dribbble } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-950 text-white pt-24 pb-12 border-t border-slate-900">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                    {/* Brand Section */}
                    <div className="lg:col-span-4">
                        <div className="relative h-12 w-48 mb-8">
                            <Image
                                src="/logo.png"
                                alt="Epsilon Technology"
                                fill
                                className="object-contain object-left brightness-0 invert"
                            />
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-sm">
                            Leading IT services company providing scalable digital products and specialized marketing for healthcare professionals.
                        </p>
                        <div className="flex gap-4">
                            <Link href="https://www.instagram.com/epsilontechnology/" target="_blank" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                                <Instagram size={18} />
                            </Link>
                            <Link href="https://www.linkedin.com/company/epsilon-technology8" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                                <Linkedin size={18} />
                            </Link>
                            <Link href="https://dribbble.com/epsilontech" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#ea4c89] hover:text-white hover:border-[#ea4c89] transition-all">
                                <Dribbble size={18} />
                            </Link>
                        </div>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-2">
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-slate-200">Services</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><Link href="/services/mobile-app-development" className="hover:text-sky-400 transition-colors">Mobile Apps</Link></li>
                            <li><Link href="/services/web-development" className="hover:text-sky-400 transition-colors">Web Development</Link></li>
                            <li><Link href="/services/ecommerce-development" className="hover:text-sky-400 transition-colors">eCommerce</Link></li>
                            <li><Link href="/services/custom-software" className="hover:text-sky-400 transition-colors">Custom Software</Link></li>
                            <li><Link href="/digital-marketing" className="hover:text-sky-400 transition-colors">Digital Marketing</Link></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="lg:col-span-3">
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-slate-200">Company</h4>
                        <ul className="space-y-4 text-slate-400 text-sm">
                            <li><Link href="/about" className="hover:text-sky-400 transition-colors">About Us</Link></li>
                            <li><Link href="/#portfolio" className="hover:text-sky-400 transition-colors">Portfolio</Link></li>
                            <li><Link href="/faqs" className="hover:text-sky-400 transition-colors">FAQs</Link></li>
                            <li><Link href="/contacts" className="hover:text-sky-400 transition-colors">Contact Us</Link></li>
                            <li><Link href="/blog" className="hover:text-sky-400 transition-colors">Blog & Insights</Link></li>
                        </ul>
                    </div>

                    {/* Contact - Updated Title */}
                    <div className="lg:col-span-3">
                        <h4 className="text-sm font-bold uppercase tracking-widest mb-8 text-slate-200">Global Presence</h4>
                        <div className="space-y-6 text-slate-400 text-sm">
                            <div className="flex items-start gap-3">
                                <MapPin size={18} className="text-blue-500 shrink-0 mt-0.5" />
                                <p>Junagadh, Gujarat, India - 362001</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-blue-500 shrink-0" />
                                <a href="mailto:contact@epsilon-technology.com" className="hover:text-white transition-colors">contact@epsilon-technology.com</a>
                            </div>
                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-blue-500 shrink-0" />
                                <a href="tel:+919106698776" className="hover:text-white transition-colors">+91 91066 98776</a>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
                    <p>© {new Date().getFullYear()} Epsilon Technology. All rights reserved.</p>
                    <div className="flex gap-8">
                        <Link href="/about" className="hover:text-white transition-colors">The Founder</Link>
                        <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
                        <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
