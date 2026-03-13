import type { Metadata } from "next";
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
        <>
            {/* No site Header/Nav — dedicated ad landing page for maximum conversion */}
            <main className="min-h-screen">{children}</main>
            {/* Minimal footer */}
            <footer className="bg-slate-900 text-slate-400 text-center py-5 text-sm">
                <p>© {new Date().getFullYear()} Epsilon Technology · Doctor Marketing Specialists</p>
                <p className="mt-1 text-xs text-slate-600">India 🇮🇳 · UAE 🇦🇪 · UK 🇬🇧 · USA 🇺🇸</p>
            </footer>
        </>
    );
}


