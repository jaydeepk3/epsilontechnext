import { Metadata } from "next";
import WebDevelopmentClient from "./WebDevelopmentClient";

export const metadata: Metadata = {
    title: "Website Development Services — Custom, Fast & Affordable | Epsilon Technology",
    description: "Get a professional website built by experts. Choose from Starter, Professional, or Enterprise packages. Next.js & React development. Trusted by 50+ businesses globally. Apply now for a free quote.",
    keywords: [
        "website development service india",
        "custom website development",
        "web development company india",
        "Next.js developer india",
        "affordable web development",
        "professional website design",
        "React developer",
        "web development packages",
    ],
    openGraph: {
        title: "Professional Website Development — Packages Starting ₹19,999 | Epsilon Technology",
        description: "Get a fast, mobile-friendly, SEO-ready website. 3 packages to choose from. 50+ happy clients globally. Apply for your free consultation today.",
        url: "https://epsilon-technology.com/services/web-development/",
        type: "website",
    },
    alternates: {
        canonical: "https://epsilon-technology.com/services/web-development/",
    },
};

export default function WebDevelopmentPage() {
    return <WebDevelopmentClient />;
}
