import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

const STABLE_DATE = new Date('2026-03-01');

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: 'https://epsilon-technology.com/',
            lastModified: STABLE_DATE,
            changeFrequency: 'weekly',
            priority: 1,
        },
        {
            url: 'https://epsilon-technology.com/it-services/',
            lastModified: STABLE_DATE,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://epsilon-technology.com/about/',
            lastModified: STABLE_DATE,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/portfolio/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://epsilon-technology.com/services/mobile-app-development/',
            lastModified: STABLE_DATE,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://epsilon-technology.com/services/web-development/',
            lastModified: STABLE_DATE,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://epsilon-technology.com/services/ecommerce-development/',
            lastModified: STABLE_DATE,
            changeFrequency: 'weekly',
            priority: 0.9,
        },


        {
            url: 'https://epsilon-technology.com/digital-marketing-for-general-surgeons/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/digital-marketing-for-spine-specialists/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/digital-marketing-for-ayurvedic-doctors/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/digital-marketing-for-dermatologists/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/digital-marketing-for-surgeon-doctors/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/digital-marketing-for-pediatric-doctors/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/digital-marketing-for-gynecologist-doctors/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/digital-marketing-for-dental-doctors/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/digital-marketing-for-ivf-doctors/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/digital-marketing-for-orthopedic-doctors/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/digital-marketing-for-doctors-in-junagadh/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/digital-marketing-for-doctors/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/doctor-marketing-in-junagadh/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/doctor-marketing-in-rajkot/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/doctor-marketing-in-morbi/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/digital-marketing-in-junagadh/',
            lastModified: STABLE_DATE,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://epsilon-technology.com/blog/',
            lastModified: STABLE_DATE,
            changeFrequency: 'weekly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/blog/doctor-marketing-ideas-junagadh/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.7,
        },
        {
            url: 'https://epsilon-technology.com/blog/mobile-app-development-guide-2026/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: 'https://epsilon-technology.com/blog/top-affordable-app-developers-2026/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/blog/the-real-cost-of-custom-application-development-2026/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/blog/5-signs-you-need-professional-website-development-services/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/blog/mobile-app-creation-services-native-vs-cross-platform/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/blog/business-solutions-through-technology/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/blog/digital-transformation-guide/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/blog/ecommerce-growth-strategies-2026/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/blog/junagadh-police-bandobast-app-case-study/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/blog/web-app-development-trends-usa-2026/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/contacts/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/digital-marketing/',
            lastModified: STABLE_DATE,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://epsilon-technology.com/faqs/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: 'https://epsilon-technology.com/product/whatsapp-business-api/',
            lastModified: STABLE_DATE,
            changeFrequency: 'weekly',
            priority: 0.9,
        },
        {
            url: 'https://epsilon-technology.com/blog/why-nextjs-is-best-for-ecommerce-website-development/',
            lastModified: STABLE_DATE,
            changeFrequency: 'monthly',
            priority: 0.8,
        },
    ];
}
