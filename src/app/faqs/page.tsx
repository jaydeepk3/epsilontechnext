import { Metadata } from 'next';
import { FAQ } from '@/components/sections/it/FAQ';
import { CTA } from '@/components/sections/it/CTA';

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "Frequently Asked Questions | Epsilon Technology",
    description: "Find answers to common questions about our web development, mobile app development, and digital marketing services.",
    keywords: ["FAQ", "Epsilon Technology FAQ", "web development questions", "mobile app development FAQ", "digital marketing questions"],
    openGraph: {
        title: "Frequently Asked Questions | Epsilon Technology",
        description: "Find answers to common questions about our services.",
        url: "https://epsilon-technology.com/faqs/",
    },
    alternates: {
        canonical: '/faqs/',
    }
};

export default function FAQPage() {
    return (
        <main className="pt-20">
            <section className="bg-slate-900 py-20 text-white">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Frequently Asked Questions</h1>
                    <p className="text-xl text-slate-400 max-w-2xl mx-auto">
                        Everything you need to know about working with Epsilon Technology.
                    </p>
                </div>
            </section>

            <FAQ />

            <CTA />
        </main>
    );
}
