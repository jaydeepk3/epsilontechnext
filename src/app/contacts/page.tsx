import { Metadata } from 'next';
import { ContactDetails } from '@/components/sections/ContactDetails';
import { Button } from "@/components/ui/button";
import { MessageSquare, Mail, Phone, Clock } from "lucide-react";

export const metadata: Metadata = {
    metadataBase: new URL('https://www.epsilon-technology.com'),
    title: "Contact Us | Epsilon Technology",
    description: "Get in touch with Epsilon Technology. We have offices in Junagadh, Ahmedabad, and the Netherlands to serve your global IT needs.",
    keywords: ["Contact Epsilon Technology", "IT company contact Junagadh", "hire web developer India", "digital marketing agency contact"],
    openGraph: {
        title: "Contact Us | Epsilon Technology",
        description: "Get in touch with our expert team for web development, mobile apps, and digital marketing.",
        url: "https://www.epsilon-technology.com/contacts/",
    },
    alternates: {
        canonical: 'https://www.epsilon-technology.com/contacts/',
    }
};

export default function ContactPage() {
    return (
        <main className="pt-20">
            {/* Hero Section */}
            <section className="bg-slate-900 py-24 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[50vw] h-[50vw] bg-sky-900/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-3xl">
                        <h1 className="text-4xl md:text-6xl font-bold mb-6">Let's Build Something <span className="text-sky-400">Great Together</span></h1>
                        <p className="text-xl text-slate-400 mb-8 leading-relaxed">
                            Have a project in mind? Looking to scale your existing digital product? Our global team is ready to help you navigate the technical landscape.
                        </p>
                        <div className="flex flex-wrap gap-6">
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-sky-400">
                                    <Clock size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Response Time</p>
                                    <p className="font-semibold text-white">Under 24 Hours</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-emerald-400">
                                    <MessageSquare size={20} />
                                </div>
                                <div>
                                    <p className="text-sm text-slate-400">Direct Chat</p>
                                    <p className="font-semibold text-white">Available on WhatsApp</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Office Locations */}
            <ContactDetails />

            {/* Quick Contact Form Section */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4">
                    <div className="max-w-5xl mx-auto bg-white rounded-[2rem] shadow-xl overflow-hidden flex flex-col md:flex-row">
                        <div className="md:w-1/3 bg-sky-600 p-8 md:p-12 text-white">
                            <h3 className="text-2xl font-bold mb-6">Contact Info</h3>
                            <div className="space-y-8">
                                <div className="flex items-start gap-4">
                                    <Mail className="shrink-0 mt-1" />
                                    <div>
                                        <p className="text-sky-100 text-sm">Email us at</p>
                                        <p className="font-bold">contact@epsilon-technology.com</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <Phone className="shrink-0 mt-1" />
                                    <div>
                                        <p className="text-sky-100 text-sm">Call us at</p>
                                        <p className="font-bold">+91 81608 81461</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4">
                                    <MessageSquare className="shrink-0 mt-1" />
                                    <div>
                                        <p className="text-sky-100 text-sm">WhatsApp</p>
                                        <p className="font-bold">+91 91066 98776</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="md:w-2/3 p-8 md:p-12">
                            <h3 className="text-2xl font-bold text-slate-900 mb-6">Send us a Message</h3>
                            <form className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">First Name</label>
                                    <input type="text" placeholder="John" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all" />
                                </div>
                                <div className="space-y-2">
                                    <label className="text-sm font-medium text-slate-700">Last Name</label>
                                    <input type="text" placeholder="Doe" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all" />
                                </div>
                                <div className="space-y-2 sm:col-span-2">
                                    <label className="text-sm font-medium text-slate-700">Email Address</label>
                                    <input type="email" placeholder="john@example.com" className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all" />
                                </div>
                                <div className="space-y-2 sm:col-span-2">
                                    <label className="text-sm font-medium text-slate-700">What can we help you with?</label>
                                    <textarea rows={4} placeholder="Tell us about your project or inquiry..." className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all"></textarea>
                                </div>
                                <div className="sm:col-span-2">
                                    <Button size="lg" className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 rounded-xl text-lg font-bold">
                                        Send Message
                                    </Button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
}
