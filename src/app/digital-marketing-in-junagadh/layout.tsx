import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Digital Marketing Agency in Junagadh | Epsilon Technology",
    description: "Epsilon Technology is Junagadh's results-driven digital marketing agency. SEO, Google Ads, social media & web development. Free consultation — based in Junagadh.",
    alternates: {
        canonical: 'https://epsilon-technology.com/digital-marketing-in-junagadh/',
    },
    openGraph: {
        title: "Digital Marketing Agency in Junagadh | Epsilon Technology",
        description: "Epsilon Technology is Junagadh's results-driven digital marketing agency. SEO, Google Ads, social media & web development. Free consultation — based in Junagadh.",
        url: 'https://epsilon-technology.com/digital-marketing-in-junagadh/',
        siteName: 'Epsilon Technology',
        locale: 'en_IN',
        type: 'website',
    }
};

export default function Layout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
