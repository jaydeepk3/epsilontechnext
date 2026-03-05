import type { Metadata } from "next";
import { Outfit, Inter } from "next/font/google";
import "../../globals.css";
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
    title: "Get 30–50 New Patient Inquiries/Month | Epsilon Technology",
    description: "Done-for-you Instagram & Facebook marketing for doctors — wherever your clinic is. No contracts. Results in 30 days. Book your free strategy call now.",
    robots: { index: false, follow: false }, // No-index landing page (ad traffic only)
};

export default function LandingPageLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" className="scroll-smooth">
            <body className={`${outfit.variable} ${inter.variable} antialiased font-sans bg-white text-slate-900`}>
                {/* No Header/Nav — dedicated ad landing page */}
                <main className="min-h-screen">{children}</main>
                {/* Minimal footer — copyright only */}
                <footer className="bg-slate-900 text-slate-400 text-center py-4 text-sm">
                    © {new Date().getFullYear()} Epsilon Technology. All rights reserved.
                </footer>
                <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_ID || ''} />
                <SpeedInsights />
            </body>
        </html>
    );
}
