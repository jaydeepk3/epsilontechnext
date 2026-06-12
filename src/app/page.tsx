import { Metadata } from "next";
import HomeLandingClient from "./HomeLandingClient";

export const metadata: Metadata = {
  title: "Epsilon Technology — Web, App & eCommerce Agency | UAE · UK · USA",
  description: "Epsilon Technology builds high-performance websites, mobile apps, eCommerce stores and WhatsApp Business solutions for businesses in UAE, UK, USA and globally. 100+ projects. 4.9★ rated.",
  keywords: [
    "web development agency UAE",
    "mobile app development UK",
    "eCommerce development USA",
    "WhatsApp Business API agency",
    "doctor marketing agency",
    "Next.js development India",
    "offshore web development agency",
  ],
  openGraph: {
    title: "Epsilon Technology — Web, App & eCommerce Agency | UAE · UK · USA",
    description: "Trusted by businesses in UAE, UK, and USA. We build websites, apps, eCommerce stores and WhatsApp automation. 100+ projects. 4.9★ rated. Get a free quote.",
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
