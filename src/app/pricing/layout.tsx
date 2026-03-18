import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Pricing & Packages | Epsilon Technology',
    description: 'Explore our web development, mobile app, and digital marketing pricing packages. Transparent, upfront, and flexible plans tailored to your business needs.',
    alternates: {
        canonical: 'https://epsilon-technology.com/pricing/',
    }
};

export default function PricingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
