import { Metadata } from "next";
import { Hero } from "@/components/sections/it/Hero";
import { Services } from "@/components/sections/it/Services";
import { WhyChooseUs } from "@/components/sections/it/WhyChooseUs";
import { Portfolio } from "@/components/sections/it/Portfolio";
import { Industries } from "@/components/sections/it/Industries";
import { Testimonials } from "@/components/sections/it/Testimonials";
import { CTA } from "@/components/sections/it/CTA";
import { TechStack } from "@/components/sections/it/TechStack";
import { Process } from "@/components/sections/it/Process";
import { FAQ } from "@/components/sections/it/FAQ";

export const metadata: Metadata = {
  title: "Top App Developers & Website Development Services | Epsilon Technology",
  description: "Affordable custom application development and mobile app creation services. We build high-performance websites and apps for businesses worldwide.",
  keywords: [
    "website development services",
    "custom application development",
    "ecommerce website development",
    "mobile app development",
    "affordable app developers",
    "mobile app creation services",
    "top app developers",
    "Web Development Company USA",
    "React Native Development"
  ],
  openGraph: {
    title: "Epsilon Technology | Premium IT Services Globally",
    description: "Building scalable digital products for businesses in USA, UK, UAE & Canada.",
    images: ["/logo.png"],
  }
};

import { PainPoints } from "@/components/sections/it/PainPoints";

export default function Home() {
  return (
    <>
      <Hero />
      <PainPoints />
      <TechStack />
      <Services />
      <Process />
      <WhyChooseUs />
      <Industries />
      <Portfolio />
      <Testimonials />
      <FAQ />
      <CTA />
    </>
  );
}
