import { MetadataRoute } from 'next';
import prisma from '@/lib/prisma';

export const dynamic = 'force-dynamic';
export const revalidate = 3600; // Revalidate every hour

const STABLE_DATE = new Date('2026-03-01');

const STATIC_ROUTES: MetadataRoute.Sitemap = [
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
        url: 'https://epsilon-technology.com/about-us/',
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
        url: 'https://epsilon-technology.com/uae/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/blog/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
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
        url: 'https://epsilon-technology.com/lead-generation/',
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
        url: 'https://epsilon-technology.com/website-development-company-in-junagadh/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/mobile-app-development-company-in-junagadh/',
        lastModified: STABLE_DATE,
        changeFrequency: 'weekly',
        priority: 0.9,
    },
    {
        url: 'https://epsilon-technology.com/how-doctors-in-gujarat-get-patient-inquiries-from-instagram/',
        lastModified: new Date('2026-04-10'),
        changeFrequency: 'monthly',
        priority: 0.8,
    },
    {
        url: 'https://epsilon-technology.com/blog/digital-marketing-cost-in-junagadh/',
        lastModified: new Date('2026-04-30'),
        changeFrequency: 'weekly',
        priority: 0.9,
    },
];


export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    try {
        const blogs = await prisma.blog.findMany({
            where: { published: true, isExternal: false },
            select: { slug: true, updatedAt: true },
        });

        const dynamicRoutes = blogs.map((blog) => ({
            url: `https://epsilon-technology.com/blog/${blog.slug}/`,
            lastModified: blog.updatedAt,
            changeFrequency: 'monthly' as const,
            priority: 0.7,
        }));

        return [...STATIC_ROUTES, ...dynamicRoutes];
    } catch (error) {
        console.error('Sitemap generation error:', error);
        return STATIC_ROUTES;
    }
}

