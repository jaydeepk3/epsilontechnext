import { Metadata } from "next";
import MetaPartnerClient from "./MetaPartnerClient";

export const metadata: Metadata = {
  title: "Meta Ads Partner Excellence Impact Leader",
  description: "Epsilon Technology is recognized as an Ads Partner Excellence Impact Leader in the Meta ads partner excellence program. We drive campaign success and growth.",
  keywords: [
    "Meta Ads Partner",
    "Meta Partner Excellence Impact Leader",
    "Facebook Ads Partner",
    "Meta Certified Company",
    "Instagram Ads Agency",
    "Epsilon Technology Recognition",
    "Digital Marketing Agency Gujarat"
  ],
  openGraph: {
    title: "Meta Ads Partner Excellence Impact Leader | Epsilon Technology",
    description: "Epsilon Technology has successfully achieved Ads Partner Excellence Impact Leader status in the Meta ads partner excellence program.",
    url: "https://epsilon-technology.com/meta-certified-partner/",
    type: "website",
    images: [
      {
        url: "/meta-partner-certificate.png",
        width: 1200,
        height: 630,
        alt: "Meta Ads Partner Excellence Impact Leader Certificate - Epsilon Technology",
      }
    ],
  },
  alternates: {
    canonical: "https://epsilon-technology.com/meta-certified-partner/",
  },
};

export default function Page() {
  return <MetaPartnerClient />;
}
