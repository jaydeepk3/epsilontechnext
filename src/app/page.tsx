import { Metadata } from "next";
import HomeLandingClient from "./HomeLandingClient";

export const metadata: Metadata = {
  title: "Epsilon Technology — Web, Mobile App, eCommerce & Doctor Marketing Agency India",
  description: "Grow your business digitally with Epsilon Technology. We build websites, mobile apps, eCommerce stores, manage doctor digital marketing & provide WhatsApp Business API. 50+ clients globally. Get a free consultation.",
  keywords: [
    "web development company india",
    "mobile app development india",
    "ecommerce website development",
    "digital marketing for doctors",
    "whatsapp business api india",
    "IT company india",
    "website development packages",
    "affordable app development",
    "doctor marketing agency",
    "epsilon technology",
  ],
  openGraph: {
    title: "Epsilon Technology — Web, Apps, eCommerce & Doctor Marketing Agency",
    description: "Websites, Mobile Apps, eCommerce, Doctor Marketing & WhatsApp API. Packages starting ₹9,999. Trusted by 50+ clients in India, USA, UK & UAE.",
    url: "https://epsilon-technology.com/",
    type: "website",
    images: ["/logo.png"],
  },
  alternates: {
    canonical: "https://epsilon-technology.com/",
  },
};

export default function Home() {
  return <HomeLandingClient />;
}
