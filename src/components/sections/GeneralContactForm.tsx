'use client';

import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle } from "lucide-react";

export function GeneralContactForm() {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        mobile: '',
        email: '',
        message: ''
    });

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('loading');

        try {
            const response = await fetch('/api/contact-general', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                setStatus('success');
                setFormData({ firstName: '', lastName: '', mobile: '', email: '', message: '' });

            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error(error);
            setStatus('error');
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-emerald-50 border border-emerald-100 rounded-3xl p-8 text-center">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="text-emerald-600" size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">Message Sent!</h4>
                <p className="text-slate-600 mb-6">Thank you for reaching out. We&apos;ll get back to you within 24 hours.</p>
                <Button 
                    onClick={() => setStatus('idle')}
                    className="bg-slate-900 text-white px-8 rounded-xl"
                >
                    Send Another Message
                </Button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">First Name *</label>
                <input 
                    type="text" 
                    name="firstName"
                    placeholder="John" 
                    required
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all" 
                />
            </div>
            <div className="space-y-2">
                <label className="text-sm font-medium text-slate-700">Last Name</label>
                <input 
                    type="text" 
                    name="lastName"
                    placeholder="Doe" 
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all" 
                />
            </div>
            <div className="space-y-2 sm:col-span-1">
                <label className="text-sm font-medium text-slate-700">Email Address *</label>
                <input 
                    type="email" 
                    name="email"
                    placeholder="john@example.com" 
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all" 
                />
            </div>
            <div className="space-y-2 sm:col-span-1">
                <label className="text-sm font-medium text-slate-700">WhatsApp Number *</label>
                <input 
                    type="tel" 
                    name="mobile"
                    placeholder="+91 81608 81461" 
                    required
                    value={formData.mobile}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all" 
                />
            </div>

            <div className="space-y-2 sm:col-span-2">
                <label className="text-sm font-medium text-slate-700">What can we help you with? *</label>
                <textarea 
                    name="message"
                    rows={4} 
                    placeholder="Tell us about your project or inquiry..." 
                    required
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:ring-2 focus:ring-sky-500 outline-none transition-all"
                ></textarea>
            </div>
            
            {status === 'error' && (
                <div className="sm:col-span-2 flex items-center gap-2 text-red-600 text-sm bg-red-50 p-4 rounded-xl border border-red-100">
                    <AlertCircle size={16} />
                    Something went wrong. Please try again or email us directly.
                </div>
            )}

            <div className="sm:col-span-2">
                <Button 
                    type="submit"
                    disabled={status === 'loading'}
                    size="lg" 
                    className="w-full bg-slate-900 hover:bg-slate-800 text-white py-6 rounded-xl text-lg font-bold disabled:opacity-70"
                >
                    {status === 'loading' ? 'Sending...' : 'Send Message'}
                </Button>
            </div>
        </form>
    );
}
