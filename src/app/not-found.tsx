import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
    title: "404 – Page Not Found | Epsilon Technology",
    description: "Oops! The page you're looking for doesn't exist. Let us guide you back to Epsilon Technology.",
    robots: { index: false, follow: true },
};

export default function NotFound() {
    return (
        <main className="min-h-screen bg-slate-900 flex items-center justify-center overflow-hidden relative pt-20">

            {/* Animated background blobs */}
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-0 overflow-hidden"
            >
                {/* Top-right glow */}
                <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-sky-600/20 blur-[120px] animate-pulse" />
                {/* Bottom-left glow */}
                <div className="absolute -bottom-32 -left-32 w-[500px] h-[500px] rounded-full bg-emerald-500/15 blur-[100px] animate-pulse [animation-delay:1.5s]" />
                {/* Center subtle glow */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full bg-sky-900/20 blur-[80px]" />

                {/* Floating dots grid */}
                <svg
                    className="absolute inset-0 w-full h-full opacity-[0.04]"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <defs>
                        <pattern id="dots" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                            <circle cx="2" cy="2" r="1.5" fill="#94a3b8" />
                        </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
            </div>

            <div className="relative z-10 text-center px-6 py-16 max-w-2xl mx-auto">

                {/* Glowing 404 number */}
                <div className="relative inline-block mb-4 select-none">
                    <span
                        className="text-[9rem] sm:text-[12rem] font-black leading-none tracking-tight text-transparent bg-clip-text"
                        style={{
                            backgroundImage: "linear-gradient(135deg, #38bdf8 0%, #0ea5e9 40%, #10b981 100%)",
                        }}
                    >
                        404
                    </span>
                    {/* Drop shadow glow */}
                    <span
                        aria-hidden="true"
                        className="absolute inset-0 text-[9rem] sm:text-[12rem] font-black leading-none tracking-tight text-sky-400/20 blur-2xl select-none"
                    >
                        404
                    </span>
                </div>

                {/* Divider line */}
                <div className="w-24 h-[2px] mx-auto mb-8 rounded-full bg-gradient-to-r from-sky-500 via-sky-400 to-emerald-400" />

                {/* Heading */}
                <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4 font-heading leading-tight">
                    Oops! Page{" "}
                    <span className="text-sky-400">Not Found</span>
                </h1>

                {/* Subtitle */}
                <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md mx-auto">
                    The page you're looking for seems to have drifted into the digital void.
                    Don't worry — we'll help you find your way back.
                </p>

                {/* Quick links */}
                <div className="flex flex-wrap justify-center gap-3 mb-10">
                    {[
                        { label: "Home", href: "/" },
                        { label: "Services", href: "/services" },
                        { label: "About Us", href: "/about" },
                        { label: "Contact", href: "/contacts" },
                    ].map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-5 py-2 rounded-full text-sm font-medium text-slate-300 border border-white/10 bg-white/5 hover:bg-white/10 hover:text-white hover:border-sky-500/50 transition-all duration-200"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                {/* Primary CTA */}
                <Link
                    href="/"
                    id="back-to-home-btn"
                    className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold text-white text-lg shadow-lg shadow-sky-500/25 transition-all duration-300 hover:scale-105 hover:shadow-sky-500/40"
                    style={{
                        background: "linear-gradient(135deg, #0284c7 0%, #0ea5e9 60%, #10b981 100%)",
                    }}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0h6" />
                    </svg>
                    Back to Home
                </Link>

                {/* Bottom hint */}
                <p className="mt-8 text-xs text-slate-600 tracking-wide uppercase">
                    Epsilon Technology &mdash; Building tomorrow&apos;s digital experiences
                </p>
            </div>
        </main>
    );
}
