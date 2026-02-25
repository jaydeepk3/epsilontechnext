import Link from 'next/link';
import Image from 'next/image';
import { Mail, Phone, MapPin, Instagram, Linkedin, Dribbble } from 'lucide-react';

export function Footer() {
    return (
        <footer className="bg-slate-950 text-white pt-20 pb-10 border-t border-slate-900">
            <div className="container mx-auto px-4 md:px-6">

                {/* Main Grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-10 mb-16">

                    {/* Brand */}
                    <div className="col-span-2 md:col-span-3 lg:col-span-2">
                        <div className="relative h-12 w-48 mb-6">
                            <Image
                                src="/logo.png"
                                alt="Epsilon Technology"
                                fill
                                className="object-contain object-left brightness-0 invert"
                            />
                        </div>
                        <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
                            Leading IT services company providing scalable digital products and specialized marketing for healthcare professionals.
                        </p>
                        <div className="flex gap-3 mb-6">
                            <Link href="https://www.instagram.com/epsilontechnology/" target="_blank" aria-label="Instagram" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                                <Instagram size={16} />
                            </Link>
                            <Link href="https://www.linkedin.com/company/epsilon-technology8" target="_blank" aria-label="LinkedIn" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all">
                                <Linkedin size={16} />
                            </Link>
                            <Link href="https://dribbble.com/epsilontech" target="_blank" aria-label="Dribbble" className="w-9 h-9 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#ea4c89] hover:text-white hover:border-[#ea4c89] transition-all">
                                <Dribbble size={16} />
                            </Link>
                        </div>
                        <div className="space-y-3 text-slate-400 text-sm">
                            <div className="flex items-start gap-2">
                                <MapPin size={15} className="text-blue-500 shrink-0 mt-0.5" />
                                <p>Junagadh, Gujarat, India – 362001</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <Mail size={15} className="text-blue-500 shrink-0" />
                                <a href="mailto:contact@epsilon-technology.com" className="hover:text-white transition-colors">contact@epsilon-technology.com</a>
                            </div>
                            <div className="flex items-center gap-2">
                                <Phone size={15} className="text-blue-500 shrink-0" />
                                <a href="tel:+918160881461" className="hover:text-white transition-colors">+91 81608 81461</a>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-slate-200">IT Services</h4>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            <li><Link href="/services/web-development" className="hover:text-sky-400 transition-colors">Web Development</Link></li>
                            <li><Link href="/services/mobile-app-development" className="hover:text-sky-400 transition-colors">Mobile App Development</Link></li>
                            <li><Link href="/services/ecommerce-development" className="hover:text-sky-400 transition-colors">eCommerce Development</Link></li>
                            <li><Link href="/services/custom-software" className="hover:text-sky-400 transition-colors">Custom Software</Link></li>
                            <li><Link href="/services/ui-ux-design" className="hover:text-sky-400 transition-colors">UI/UX Design</Link></li>
                            <li><Link href="/services/maintenance-support" className="hover:text-sky-400 transition-colors">Maintenance &amp; Support</Link></li>
                            <li><Link href="/it-services" className="hover:text-sky-400 transition-colors">IT Services Overview</Link></li>
                            <li><Link href="/product/whatsapp-business-api" className="hover:text-sky-400 transition-colors">WhatsApp Business API</Link></li>
                        </ul>
                    </div>

                    {/* Doctor Marketing */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-slate-200">Doctor Marketing</h4>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            <li><Link href="/digital-marketing" className="hover:text-sky-400 transition-colors">Doctor Marketing Hub</Link></li>
                            <li><Link href="/digital-marketing-for-spine-specialists" className="hover:text-sky-400 transition-colors">Spine Specialists</Link></li>
                            <li><Link href="/digital-marketing-for-pediatric-doctors" className="hover:text-sky-400 transition-colors">Pediatric Doctors</Link></li>
                            <li><Link href="/digital-marketing-for-surgeon-doctors" className="hover:text-sky-400 transition-colors">Surgeon Doctors</Link></li>
                            <li><Link href="/digital-marketing-for-orthopedic-doctors" className="hover:text-sky-400 transition-colors">Orthopedic Doctors</Link></li>
                            <li><Link href="/digital-marketing-in-junagadh" className="hover:text-sky-400 transition-colors">Digital Marketing Junagadh</Link></li>
                            <li><Link href="/doctor-marketing-in-junagadh" className="hover:text-sky-400 transition-colors">Doctor Marketing Junagadh</Link></li>
                            <li><Link href="/doctor-marketing-in-rajkot" className="hover:text-sky-400 transition-colors">Doctor Marketing Rajkot</Link></li>
                            <li><Link href="/doctor-marketing-in-morbi" className="hover:text-sky-400 transition-colors">Doctor Marketing Morbi</Link></li>
                        </ul>
                    </div>

                    {/* Company + Blog */}
                    <div>
                        <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-slate-200">Company</h4>
                        <ul className="space-y-3 text-slate-400 text-sm mb-8">
                            <li><Link href="/about" className="hover:text-sky-400 transition-colors">About Us</Link></li>
                            <li><Link href="/#portfolio" className="hover:text-sky-400 transition-colors">Portfolio</Link></li>
                            <li><Link href="/faqs" className="hover:text-sky-400 transition-colors">FAQs</Link></li>
                            <li><Link href="/contacts" className="hover:text-sky-400 transition-colors">Contact Us</Link></li>
                        </ul>

                        <h4 className="text-xs font-bold uppercase tracking-widest mb-5 text-slate-200">Blog &amp; Resources</h4>
                        <ul className="space-y-3 text-slate-400 text-sm">
                            <li><Link href="/blog" className="hover:text-sky-400 transition-colors">All Articles</Link></li>
                            <li><Link href="/blog/mobile-app-development-guide-2026" className="hover:text-sky-400 transition-colors">Mobile App Guide 2026</Link></li>
                            <li><Link href="/blog/the-real-cost-of-custom-application-development-2026" className="hover:text-sky-400 transition-colors">Cost of App Development</Link></li>
                            <li><Link href="/blog/5-signs-you-need-professional-website-development-services" className="hover:text-sky-400 transition-colors">5 Signs You Need a Pro Website</Link></li>
                            <li><Link href="/blog/business-solutions-through-technology" className="hover:text-sky-400 transition-colors">Business Solutions via Tech</Link></li>
                            <li><Link href="/blog/digital-transformation-guide" className="hover:text-sky-400 transition-colors">Digital Transformation Guide</Link></li>
                            <li><Link href="/blog/doctor-marketing-ideas-junagadh" className="hover:text-sky-400 transition-colors">Doctor Marketing Ideas</Link></li>
                            <li><Link href="/blog/why-nextjs-is-best-for-ecommerce-website-development" className="hover:text-sky-400 transition-colors">Why Next.js for eCommerce</Link></li>
                        </ul>
                    </div>

                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-xs">
                    <p>© {new Date().getFullYear()} Epsilon Technology. All rights reserved.</p>
                    <div className="flex flex-wrap gap-6 justify-center">
                        <Link href="/about" className="hover:text-white transition-colors">The Founder</Link>
                        <Link href="/blog" className="hover:text-white transition-colors">Resources</Link>
                        <Link href="/faqs" className="hover:text-white transition-colors">FAQs</Link>
                        <Link href="/contacts" className="hover:text-white transition-colors">Contact</Link>
                        <Link href="/sitemap.xml" className="hover:text-white transition-colors">Sitemap</Link>
                    </div>
                </div>

            </div>
        </footer>
    );
}
