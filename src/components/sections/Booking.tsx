'use client';

import { useState } from 'react';

import { Button } from '@/components/ui/button';
import { MessageCircle, Calendar } from 'lucide-react';
import { trackMetaCapiEvent } from '@/lib/meta-capi';

export function Booking() {
    const [formData, setFormData] = useState({
        whatsapp: '',
        specialty: '',
        city: '',
    });
    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            trackMetaCapiEvent({
                eventName: 'Lead',
                user: {
                    phone: formData.whatsapp,
                    city: formData.city,
                },
                customData: {
                    content_name: 'Book Strategy Call Lead',
                    lead_type: 'Booking Section Form',
                    specialty: formData.specialty,
                },
            });

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    mobile: formData.whatsapp,
                    specialty: formData.specialty,
                    city: formData.city,
                    name: '',
                    clinic: '',
                }),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ whatsapp: '', specialty: '', city: '' });
                window.location.href = 'https://calendly.com/jaydeepkataria/30min';
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="py-24 bg-white relative">
            <div id="booking" className="absolute top-0 left-0 -mt-24 pointer-events-none opacity-0" />
            <div className="container mx-auto px-4 md:px-6">
                <div className="bg-slate-900 rounded-[2.5rem] p-8 md:p-16 overflow-hidden relative">
                    {/* Background Effects */}
                    <div className="absolute top-0 right-0 w-1/2 h-full bg-primary/10 blur-3xl rounded-full" />
                    <div className="absolute bottom-0 left-0 w-1/2 h-full bg-blue-600/10 blur-3xl rounded-full" />

                    <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                                Ready to Grow Your Clinic?
                            </h2>
                            <p className="text-slate-400 text-lg mb-8">
                                Book a free strategy call to see how we can help you get more patients. No obligation.
                            </p>

                            <div className="space-y-4">
                                <div className="flex items-center gap-4 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <Calendar size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">Free Growth Consultation</p>
                                        <p className="text-sm">30-minute strategy session via Zoom/Meet</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 text-slate-300">
                                    <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
                                        <MessageCircle size={20} />
                                    </div>
                                    <div>
                                        <p className="font-bold text-white">Direct WhatsApp Support</p>
                                        <p className="text-sm">Get instant answers to your questions</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl">
                            <form className="space-y-4" onSubmit={handleSubmit}>
                                <input
                                    type="tel"
                                    name="whatsapp"
                                    placeholder="Your WhatsApp Number *"
                                    required
                                    value={formData.whatsapp}
                                    onChange={handleChange}
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                />

                                <input
                                    type="text"
                                    name="specialty"
                                    placeholder="Your Specialty (e.g. Orthopedic, Pediatric)"
                                    required
                                    value={formData.specialty}
                                    onChange={handleChange}
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                />

                                <input
                                    type="text"
                                    name="city"
                                    placeholder="Your City & Country"
                                    required
                                    value={formData.city}
                                    onChange={handleChange}
                                    className="w-full border border-slate-200 rounded-xl px-4 py-3 text-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-500/20 outline-none transition-all"
                                />

                                <Button
                                    className="w-full text-lg h-14 rounded-xl font-bold"
                                    size="lg"
                                    disabled={status === 'loading' || status === 'success'}
                                >
                                    {status === 'loading' ? 'Sending...' : status === 'success' ? '✅ Request Sent!' : 'Book My Free Growth Call →'}
                                </Button>

                                {status === 'error' && (
                                    <p className="text-xs text-center text-red-500 mt-2">
                                        Something went wrong. Please try again or WhatsApp us directly.
                                    </p>
                                )}

                                <p className="text-center text-xs text-slate-400 mt-3">
                                    No spam. We reply on WhatsApp within 4 hours. Available for doctors worldwide.
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
