import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "../globals.css";
import { GoogleAnalytics } from '@next/third-parties/google';
import { SpeedInsights } from '@vercel/speed-insights/next';

const outfit = Outfit({
    variable: "--font-outfit",
    subsets: ["latin"],
    display: "swap",
});

const inter = Inter({
    variable: "--font-inter",
    subsets: ["latin"],
    display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "Get 30–50 New Patient Inquiries/Month | Doctor Marketing | Epsilon Technology",
    description: "Done-for-you Instagram & Facebook marketing for doctors — wherever your clinic is. 50+ doctors served. No contracts. Real patient inquiries in 30 days. Book your free strategy call.",
    keywords: ["Doctor Marketing", "Medical Social Media", "Clinic Growth", "Patient Acquisition", "Healthcare Marketing Agency India"],
    openGraph: {
        title: "Get 30–50 New Patient Inquiries/Month | Epsilon Technology",
        description: "Done-for-you social media marketing for doctors. Results in 30 days. No contracts.",
        url: "https://epsilon-technology.com/digital-marketing/",
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/digital-marketing/',
    },
};

export default function DigitalMarketingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${outfit.variable} ${inter.variable} antialiased font-sans bg-white text-slate-900`}>
                {/* No site Header/Nav — dedicated ad landing page for maximum conversion */}
                <main className="min-h-screen">{children}</main>
                {/* Minimal footer */}
                <footer className="bg-slate-900 text-slate-400 text-center py-5 text-sm">
                    <p>© {new Date().getFullYear()} Epsilon Technology · Doctor Marketing Specialists</p>
                    <p className="mt-1 text-xs text-slate-600">India 🇮🇳 · UAE 🇦🇪 · UK 🇬🇧 · USA 🇺🇸</p>
                </footer>
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
                <SpeedInsights />
            </body>
        </html>
    );
}
