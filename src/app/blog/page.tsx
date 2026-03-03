import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User } from 'lucide-react';

export const metadata: Metadata = {
    title: "Blog | Web, App Development & Doctor Marketing Insights | Epsilon",
    description: "Expert insights on mobile app development trends, custom software solutions, eCommerce growth, and specific digital marketing strategies for doctors.",
    keywords: ["web development trends 2026", "mobile app development guide", "ecommerce growth strategies", "doctor marketing blog", "tech industry insights"],
    openGraph: {
        title: "Epsilon Technology Blog | Tech & Marketing Insights",
        description: "Stay ahead with expert articles on technology and healthcare marketing.",
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/blog/',
    }
};

const posts = [
    {
        title: "Technology Serving Those Who Serve Us: Junagadh Police App Case Study",
        excerpt: "Epsilon Technology developed a dedicated Mobile Application for the Junagadh Police Department to simplify coordination during Maha Shivratri Mela.",
        date: "Feb 16, 2026",
        author: "Jaydeep Kataria",
        slug: "junagadh-police-bandobast-app-case-study",
        category: "Case Study",
        image: "/blog_mobile_app_dev.png",
        isExternal: false
    },
    {
        title: "Web and App Development Trends in 2026: USA tech Industry",
        excerpt: "Explore the latest technologies shaping the web and mobile app landscape in the US market, from AI integration to PWA dominance.",
        date: "Jan 28, 2026",
        author: "Jaydeep Kataria",
        slug: "web-app-development-trends-usa-2026",
        category: "Tech Trends",
        image: "/blog_mobile_app_dev.png",
        isExternal: false
    },
    {
        title: "Solving Business Pain Points Through Custom Software Solutions",
        excerpt: "How tailored software can eliminate inefficiencies, automate workflows, and drive ROI for your business.",
        date: "Jan 27, 2026",
        author: "Jaydeep Kataria",
        slug: "business-solutions-through-technology",
        category: "Business Growth",
        image: "/blog_mobile_app_dev.png",
        isExternal: false
    },
    {
        title: "How to Build a Scalable Mobile App in 2026: A Startup Founder's Guide",
        excerpt: "A comprehensive guide for startups on building successful mobile apps. Learn about tech stacks, React Native vs Native, and costs.",
        date: "Jan 26, 2026",
        author: "Jaydeep Kataria",
        slug: "mobile-app-development-guide-2026",
        category: "App Development",
        image: "/blog_mobile_app_dev.png",
        isExternal: false
    },
    {
        title: "eCommerce Growth Strategies for 2026: Beyond Basic Stores",
        excerpt: "Maximize your online sales with advanced eCommerce strategies, including personalized shopping experiences and omnichannel retail.",
        date: "Jan 25, 2026",
        author: "Jaydeep Kataria",
        slug: "ecommerce-growth-strategies-2026",
        category: "eCommerce",
        image: "/blog_mobile_app_dev.png",
        isExternal: false
    },
    {
        title: "The Ultimate Guide to Digital Transformation",
        excerpt: "A step-by-step guide to digitizing your business operations and staying competitive in a digital-first world.",
        date: "Jan 25, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-transformation-guide",
        category: "Digital Transformation",
        image: "/blog_mobile_app_dev.png",
        isExternal: false
    },
    {
        title: "Digital Marketing for General Surgeons: The Authority Guide",
        excerpt: "Learn how general surgeons can build deep clinical authority, dominate high-intent search, and provide digital reassurance.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-general-surgeons",
        category: "Surgical",
        image: "/blog_medical_marketing.png",
        isExternal: true
    },
    {
        title: "Digital Marketing for Spine Specialists: The Pillar Guide",
        excerpt: "Learn how spine surgeons and back pain clinics can build deep digital authority and attract complex surgical cases.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-spine-specialists",
        category: "Spine Care",
        image: "/blog_medical_marketing.png",
        isExternal: true
    },
    {
        title: "Digital Marketing for Ayurvedic Doctors: Bridging Traditions",
        excerpt: "Learn how Ayurvedic practitioners can translate ancient health wisdom into a dominant and trusted modern digital presence.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-ayurvedic-doctors",
        category: "Holistic",
        image: "/blog_medical_marketing.png",
        isExternal: true
    },
    {
        title: "Digital Marketing for Dermatologists: The Aesthetic Growth Guide",
        excerpt: "Deep dive into visual excellence, aesthetic SEO, and premium branding for modern skin clinics and dermatologists.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-dermatologists",
        category: "Aesthetic",
        image: "/blog_medical_marketing.png",
        isExternal: true
    },
    {
        title: "Digital Marketing for Surgeon Doctors: Building Clinical Authority",
        excerpt: "Learn how surgeons can leverage digital authority and high-intent search to reach more complicated cases.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-surgeon-doctors",
        category: "Surgical",
        image: "/blog_medical_marketing.png",
        isExternal: true
    },
    {
        title: "Digital Marketing for Pediatric Doctors: Building Parental Trust",
        excerpt: "A guide for child healthcare providers on building a reliable, visible, and trusted presence for modern parents.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-pediatric-doctors",
        category: "Pediatric",
        image: "/blog_medical_marketing.png",
        isExternal: true
    },
    {
        title: "Digital Marketing for Gynecologist Doctors: Compassionate Growth",
        excerpt: "Understanding how to build an authoritative and empathetic digital presence for women's healthcare specialists.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-gynecologist-doctors",
        category: "Women's Health",
        image: "/blog_medical_marketing.png",
        isExternal: true
    },
    {
        title: "Digital Marketing for Dental Doctors: Building a Bright Practice",
        excerpt: "Deep dive into dental SEO, local search dominance, and trust-building visuals for modern dental clinics.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-dental-doctors",
        category: "Dental",
        image: "/blog_medical_marketing.png",
        isExternal: true
    },
    {
        title: "Digital Marketing for IVF Doctors: The Fertility Journey",
        excerpt: "Helping fertility specialists build trust and provide educational clarity to couples in the digital sphere.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-ivf-doctors",
        category: "Fertility",
        image: "/blog_medical_marketing.png",
        isExternal: true
    },
    {
        title: "Digital Marketing for Orthopedic Doctors: A Surgeon's Guide",
        excerpt: "Discover specialized strategies for orthopedic surgeons to build trust, attract surgical cases, and dominate local search.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-orthopedic-doctors",
        category: "Specialized",
        image: "/blog_medical_marketing.png",
        isExternal: true
    },
    {
        title: "Digital Marketing for Doctors in Junagadh: A Local Guide",
        excerpt: "Learn how Junagadh-based doctors can leverage local SEO, Google Maps, and reviews to grow their practice in our city.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-doctors-in-junagadh",
        category: "Local Guide",
        image: "/blog_medical_marketing.png",
        isExternal: true
    },
    {
        title: "The Ultimate Guide to Digital Marketing for Doctors (2025)",
        excerpt: "A comprehensive informational guide for healthcare professionals looking to build a trusted digital reputation and grow their practice.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-doctors",
        category: "Educational",
        image: "/blog_medical_marketing.png",
        isExternal: true
    },
    {
        title: "7 Proven Marketing Ideas for Doctors in Junagadh (2025 Guide)",
        excerpt: "Are you a doctor in Junagadh looking to increase your patient footfall? Here are 7 actionable strategies to grow your clinic... ",
        date: "Jan 15, 2026",
        author: "Jaydeep Kataria",
        slug: "doctor-marketing-ideas-junagadh",
        category: "Local SEO",
        image: "/blog_medical_marketing.png"
    },
];

import prisma from '@/lib/prisma';

export default async function BlogIndex() {
    // Fetch dynamic blogs from the database
    const dbBlogs = await prisma.blog.findMany({
        where: { published: true },
        orderBy: { createdAt: 'desc' }
    });

    // Map dynamic blogs to match the static posts structure
    const formattedDbBlogs = dbBlogs.map((blog: any) => ({
        title: blog.title,
        excerpt: blog.metaDescription || "Click to read more about this insight.",
        date: new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
        author: "Admin",
        slug: blog.slug,
        category: "Latest Insight",
        image: blog.imageUrl || "/blog_medical_marketing.png",
        isExternal: false
    }));

    // Combine db blogs with static blogs (db blogs first)
    const allPosts = [...formattedDbBlogs, ...posts];

    return (
        <main className="min-h-screen bg-slate-50 pt-32 pb-20">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                        Latest Insights
                    </h1>
                    <p className="text-lg text-slate-600">
                        Expert tips on digital marketing for doctors and healthcare professionals.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {allPosts.map((post, i) => (
                        <Link
                            href={post.isExternal ? `/${post.slug}` : `/blog/${post.slug}`}
                            key={i}
                            className="group cursor-pointer flex flex-col h-full"
                        >
                            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 h-full flex flex-col">
                                <div className="h-48 bg-blue-100 relative overflow-hidden">
                                    <Image
                                        src={post.image || "/blog_medical_marketing.png"}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">{post.category}</span>
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {post.date}
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                        {post.excerpt}
                                    </p>
                                    <div className="flex items-center text-blue-600 font-medium text-sm mt-auto">
                                        Read Article <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
    );
}
