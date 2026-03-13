import type { Metadata } from "next";
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
        <>
            {/* No Header/Nav — dedicated ad landing page */}
            <main className="min-h-screen">{children}</main>
            {/* Minimal footer — copyright only */}
            <footer className="bg-slate-900 text-slate-400 text-center py-4 text-sm">
                © {new Date().getFullYear()} Epsilon Technology. All rights reserved.
            </footer>
        </>
    );
}

