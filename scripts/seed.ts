import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const posts = [
    {
        title: "Technology Serving Those Who Serve Us: Junagadh Police App Case Study",
        excerpt: "Epsilon Technology developed a dedicated Mobile Application for the Junagadh Police Department to simplify coordination during Maha Shivratri Mela.",
        date: "Feb 16, 2026",
        author: "Jaydeep Kataria",
        slug: "junagadh-police-bandobast-app-case-study",
        category: "Case Study",
        image: "/blog_mobile_app_dev.webp",
        isExternal: false
    },
    {
        title: "Web and App Development Trends in 2026: USA tech Industry",
        excerpt: "Explore the latest technologies shaping the web and mobile app landscape in the US market, from AI integration to PWA dominance.",
        date: "Jan 28, 2026",
        author: "Jaydeep Kataria",
        slug: "web-app-development-trends-usa-2026",
        category: "Tech Trends",
        image: "/blog_mobile_app_dev.webp",
        isExternal: false
    },
    {
        title: "Solving Business Pain Points Through Custom Software Solutions",
        excerpt: "How tailored software can eliminate inefficiencies, automate workflows, and drive ROI for your business.",
        date: "Jan 27, 2026",
        author: "Jaydeep Kataria",
        slug: "business-solutions-through-technology",
        category: "Business Growth",
        image: "/blog_mobile_app_dev.webp",
        isExternal: false
    },
    {
        title: "How to Build a Scalable Mobile App in 2026: A Startup Founder's Guide",
        excerpt: "A comprehensive guide for startups on building successful mobile apps. Learn about tech stacks, React Native vs Native, and costs.",
        date: "Jan 26, 2026",
        author: "Jaydeep Kataria",
        slug: "mobile-app-development-guide-2026",
        category: "App Development",
        image: "/blog_mobile_app_dev.webp",
        isExternal: false
    },
    {
        title: "eCommerce Growth Strategies for 2026: Beyond Basic Stores",
        excerpt: "Maximize your online sales with advanced eCommerce strategies, including personalized shopping experiences and omnichannel retail.",
        date: "Jan 25, 2026",
        author: "Jaydeep Kataria",
        slug: "ecommerce-growth-strategies-2026",
        category: "eCommerce",
        image: "/blog_mobile_app_dev.webp",
        isExternal: false
    },
    {
        title: "The Ultimate Guide to Digital Transformation",
        excerpt: "A step-by-step guide to digitizing your business operations and staying competitive in a digital-first world.",
        date: "Jan 25, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-transformation-guide",
        category: "Digital Transformation",
        image: "/blog_mobile_app_dev.webp",
        isExternal: false
    },
    {
        title: "Digital Marketing for General Surgeons: The Authority Guide",
        excerpt: "Learn how general surgeons can build deep clinical authority, dominate high-intent search, and provide digital reassurance.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-general-surgeons",
        category: "Surgical",
        image: "/blog_medical_marketing.webp",
        isExternal: true
    },
    {
        title: "Digital Marketing for Spine Specialists: The Pillar Guide",
        excerpt: "Learn how spine surgeons and back pain clinics can build deep digital authority and attract complex surgical cases.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-spine-specialists",
        category: "Spine Care",
        image: "/blog_medical_marketing.webp",
        isExternal: true
    },
    {
        title: "Digital Marketing for Ayurvedic Doctors: Bridging Traditions",
        excerpt: "Learn how Ayurvedic practitioners can translate ancient health wisdom into a dominant and trusted modern digital presence.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-ayurvedic-doctors",
        category: "Holistic",
        image: "/blog_medical_marketing.webp",
        isExternal: true
    },
    {
        title: "Digital Marketing for Dermatologists: The Aesthetic Growth Guide",
        excerpt: "Deep dive into visual excellence, aesthetic SEO, and premium branding for modern skin clinics and dermatologists.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-dermatologists",
        category: "Aesthetic",
        image: "/blog_medical_marketing.webp",
        isExternal: true
    },
    {
        title: "Digital Marketing for Surgeon Doctors: Building Clinical Authority",
        excerpt: "Learn how surgeons can leverage digital authority and high-intent search to reach more complicated cases.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-surgeon-doctors",
        category: "Surgical",
        image: "/blog_medical_marketing.webp",
        isExternal: true
    },
    {
        title: "Digital Marketing for Pediatric Doctors: Building Parental Trust",
        excerpt: "A guide for child healthcare providers on building a reliable, visible, and trusted presence for modern parents.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-pediatric-doctors",
        category: "Pediatric",
        image: "/blog_medical_marketing.webp",
        isExternal: true
    },
    {
        title: "Digital Marketing for Gynecologist Doctors: Compassionate Growth",
        excerpt: "Understanding how to build an authoritative and empathetic digital presence for women's healthcare specialists.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-gynecologist-doctors",
        category: "Women's Health",
        image: "/blog_medical_marketing.webp",
        isExternal: true
    },
    {
        title: "Digital Marketing for Dental Doctors: Building a Bright Practice",
        excerpt: "Deep dive into dental SEO, local search dominance, and trust-building visuals for modern dental clinics.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-dental-doctors",
        category: "Dental",
        image: "/blog_medical_marketing.webp",
        isExternal: true
    },
    {
        title: "Digital Marketing for IVF Doctors: The Fertility Journey",
        excerpt: "Helping fertility specialists build trust and provide educational clarity to couples in the digital sphere.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-ivf-doctors",
        category: "Fertility",
        image: "/blog_medical_marketing.webp",
        isExternal: true
    },
    {
        title: "Digital Marketing for Orthopedic Doctors: A Surgeon's Guide",
        excerpt: "Discover specialized strategies for orthopedic surgeons to build trust, attract surgical cases, and dominate local search.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-orthopedic-doctors",
        category: "Specialized",
        image: "/blog_medical_marketing.webp",
        isExternal: true
    },
    {
        title: "Digital Marketing for Doctors in Junagadh: A Local Guide",
        excerpt: "Learn how Junagadh-based doctors can leverage local SEO, Google Maps, and reviews to grow their practice in our city.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-doctors-in-junagadh",
        category: "Local Guide",
        image: "/blog_medical_marketing.webp",
        isExternal: true
    },
    {
        title: "The Ultimate Guide to Digital Marketing for Doctors (2025)",
        excerpt: "A comprehensive informational guide for healthcare professionals looking to build a trusted digital reputation and grow their practice.",
        date: "Jan 23, 2026",
        author: "Jaydeep Kataria",
        slug: "digital-marketing-for-doctors",
        category: "Educational",
        image: "/blog_medical_marketing.webp",
        isExternal: true
    },
    {
        title: "7 Proven Marketing Ideas for Doctors in Junagadh (2025 Guide)",
        excerpt: "Are you a doctor in Junagadh looking to increase your patient footfall? Here are 7 actionable strategies to grow your clinic... ",
        date: "Jan 15, 2026",
        author: "Jaydeep Kataria",
        slug: "doctor-marketing-ideas-junagadh",
        category: "Local SEO",
        image: "/blog_medical_marketing.webp",
        isExternal: false
    },
];

async function main() {
    console.log(`Start seeding ${posts.length} static blogs into PostgreSQL DB...`);
    for (const post of posts) {
        // Parse date
        const parsedDate = new Date(`${post.date} 12:00:00`);

        // Upsert to avoid uniqueness errors on multiple runs
        const blog = await prisma.blog.upsert({
            where: { slug: post.slug },
            update: {
                title: post.title,
                metaDescription: post.excerpt, // Syncing excerpt with meta description
                category: post.category,
                author: post.author,
                imageUrl: post.image,
                isExternal: post.isExternal || false,
                published: true, // We want these to appear right away
            },
            create: {
                title: post.title,
                slug: post.slug,
                content: `This is a static or externally built post originally from ` + post.slug,
                metaDescription: post.excerpt,
                category: post.category,
                author: post.author,
                imageUrl: post.image,
                isExternal: post.isExternal || false,
                published: true,
                createdAt: parsedDate,
                updatedAt: new Date(),
            }
        });
        console.log(`Created/updated blog with id: ${blog.id}, slug: ${blog.slug}`);
    }
    console.log(`Seeding finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
