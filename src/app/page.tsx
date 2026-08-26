import { Metadata } from "next";
import HomeLandingClient from "./HomeLandingClient";

export const metadata: Metadata = {
  title: "Epsilon Technology — Web, App & Digital Marketing Agency | UAE · UK · USA · India",
  description: "Epsilon Technology provides high-performance custom web development, mobile apps, eCommerce solutions, and high-ROI Digital Marketing & Meta Ads performance campaigns. 100+ projects. 4.9★ rated.",
  keywords: [
    "digital marketing agency",
    "web development agency UAE",
    "mobile app development UK",
    "performance marketing agency",
    "social media growth agency",
    "eCommerce development USA",
    "WhatsApp Business API agency",
    "doctor marketing agency",
    "Next.js development India",
    "Meta ads certified agency",
  ],
  openGraph: {
    title: "Epsilon Technology — Web, App & Digital Marketing Agency | UAE · UK · USA · India",
    description: "Trusted by businesses globally. We build custom websites & apps and drive revenue with high-ROI digital marketing, Meta ads, and social growth. 100+ projects. 4.9★ rated.",
    url: "https://epsilon-technology.com/",
    type: "website",
    images: ["/logo.webp"],
  },
  alternates: {
    canonical: "https://epsilon-technology.com/",
  },
};

export default function Home() {
  return <HomeLandingClient />;
}
