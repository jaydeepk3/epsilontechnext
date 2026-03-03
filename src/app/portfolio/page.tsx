import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { ExternalLink, Smartphone, Globe, ShieldCheck, Heart, CheckCircle2, ArrowRight, Star } from 'lucide-react';

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: 'Portfolio & Case Studies | Real Projects by Epsilon Technology',
    description: 'Explore real-world projects built by Epsilon Technology — from pet grooming platforms and Canadian eCommerce to government police apps and community matrimonial apps. See our work.',
    keywords: ['Portfolio', 'Case Studies', 'DearPet', 'Ontapp', 'Police Bandobast App', 'Prabhav Lagnam', 'Mobile App Development', 'eCommerce Development', 'Epsilon Technology'],
    openGraph: {
        title: 'Portfolio & Case Studies | Real Projects by Epsilon Technology',
        description: 'Explore real-world digital products built by Epsilon Technology — websites, mobile apps, eCommerce platforms, and government solutions.',
        images: ['/portfolio/junagadh-police.png'],
        type: 'website',
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/portfolio/',
    },
};

const projects = [
    {
        id: 'dearpet',
        title: 'DearPet.in',
        tagline: 'India\'s Premium Pet Grooming Booking Platform',
        category: 'Web Application',
        categoryIcon: Globe,
        categoryColor: 'text-teal-600',
        categoryBg: 'bg-teal-50',
        accent: 'from-teal-500 to-cyan-400',
        accentLight: 'bg-teal-50',
        accentBorder: 'border-teal-200',
        accentText: 'text-teal-700',
        url: 'https://dearpet.in/',
        image: '/portfolio/dearpet.png',
        imageAlt: 'DearPet.in — Real screenshot of the live pet grooming website',
        emoji: '🐾',
        overview: 'DearPet.in is a full-stack pet grooming booking platform built for the Indian market. Pet owners can discover certified groomers, browse services, book appointments online, and track their pet\'s grooming history — all from a single, beautifully designed platform.',
        challenge: 'Pet grooming in India was entirely offline and unorganized. Owners had no way to find reliable groomers, compare services, or book appointments digitally. Groomers had no system to manage bookings or assignments.',
        solution: 'We built a dual-sided platform: a consumer-facing booking interface and a powerful admin panel for groomers. The admin can assign staff, manage schedules, view booking calendars, and send appointment confirmations in real time.',
        techStack: ['Next.js', 'Node.js', 'MongoDB', 'Razorpay', 'Tailwind CSS', 'SMS/Email Notifications'],
        features: [
            'Online pet service booking with date & time slot selection',
            'Admin dashboard to assign groomers and manage bookings',
            'Real-time booking confirmation & reminder notifications',
            'Pet profile management (breed, age, grooming history)',
            'Service catalog with pricing for dogs & cats',
            'Mobile-first responsive design for on-the-go booking',
        ],
        results: [
            'Fully operational booking system handling 50+ bookings',
            'Admin saves 3+ hours/day vs. manual management',
            'Zero double-bookings since launch',
        ],
        type: 'web',
    },
    {
        id: 'ontapp',
        title: 'Ontapp.ca',
        tagline: 'Canada\'s Doorstep Liquor Delivery Platform',
        category: 'eCommerce',
        categoryIcon: Globe,
        categoryColor: 'text-amber-600',
        categoryBg: 'bg-amber-50',
        accent: 'from-amber-500 to-yellow-400',
        accentLight: 'bg-amber-50',
        accentBorder: 'border-amber-200',
        accentText: 'text-amber-700',
        url: 'https://ontapp.ca/',
        image: '/portfolio/ontapp.png',
        imageAlt: 'Ontapp.ca — Real screenshot of the Canadian liquor delivery eCommerce brand',
        emoji: '🍺',
        overview: 'Ontapp.ca is a full-featured eCommerce brand built for the Canadian alcohol delivery market. It allows Ontario-based customers to browse a curated catalog of whiskeys, beers, wines, and spirits — and get them delivered right to their doorstep.',
        challenge: 'The Canadian liquor delivery market had strict regulatory requirements around age verification, licensed delivery zones, and product labeling compliance. Building a user-friendly shopping experience while respecting all these constraints was the core challenge.',
        solution: 'We designed and developed a premium dark-themed eCommerce platform with built-in age verification, zone-based delivery logic, and a clean product browsing experience. The admin panel supports full inventory management, order tracking, and delivery assignment.',
        techStack: ['Next.js', 'Stripe Payments', 'Shopify API', 'MongoDB', 'Tailwind CSS', 'Geolocation Delivery Zones'],
        features: [
            'Full eCommerce catalog with category filtering (Whiskey, Beer, Wine, Spirits)',
            'Secure age verification gate before browsing',
            'Real-time inventory management with admin panel',
            'Stripe-powered secure checkout with CAD pricing',
            'Delivery zone validation — only available in licensed areas',
            'Order tracking and automated email/SMS updates',
        ],
        results: [
            'Live eCommerce brand serving Ontario, Canada',
            'Fully compliant with Canadian liquor regulations',
            'Premium dark brand identity built from scratch',
        ],
        type: 'web',
    },
    {
        id: 'police-bandobast',
        title: 'Junagadh Police Bandobast App',
        tagline: 'Technology Serving Those Who Serve Us',
        category: 'Android App',
        categoryIcon: Smartphone,
        categoryColor: 'text-blue-700',
        categoryBg: 'bg-blue-50',
        accent: 'from-blue-700 to-indigo-600',
        accentLight: 'bg-blue-50',
        accentBorder: 'border-blue-200',
        accentText: 'text-blue-700',
        url: 'https://play.google.com/store/apps/details?id=com.jnd.police.bandobast',
        image: '/portfolio/junagadh-police.png',
        imageAlt: 'Junagadh Police Bandobast — Real Google Play Store screenshot by Epsilon Technology',
        emoji: '🛡️',
        overview: 'During large public events like the Maha Shivratri Mela in Junagadh, managing thousands of officers across multiple zones, shifts, and locations is a massive responsibility. Epsilon Technology was honored to develop a dedicated Mobile Application for the Junagadh Police Department — built to simplify coordination, improve communication, and strengthen on-ground efficiency during bandobast operations.',
        challenge: 'During peak events, the Junagadh Police had to coordinate thousands of personnel across multiple zones manually — using WhatsApp groups, paper registers, and phone calls. This caused delays in attendance tracking, duty confusion, and poor visibility for senior officials.',
        solution: 'We built a purpose-made Android application that digitizes the entire bandobast workflow — from selfie-based attendance with live location to admin-side shift management and real-time broadcast notifications to field officers.',
        techStack: ['React Native (Android)', 'Node.js API', 'Firebase Cloud Messaging', 'GPS / Location Services', 'MongoDB', 'Camera & Selfie Verification'],
        features: [
            'Attendance with live location, timestamp, and selfie verification',
            'Clear duty allocation — where to report, stand, and stay',
            'Zone-wise and shift-wise assignment visibility',
            'Instant Push Notifications for important updates from command',
            'Easy complaint submission directly from the field',
            'Real-time attendance reports with timing insights for admin',
            'Shift planning, broadcasting, and complaint tracking',
        ],
        results: [
            '1000+ officers managed seamlessly during Maha Shivratri Mela',
            'Eliminated manual attendance & paper-based coordination',
            'Real-time visibility for senior officials across all zones',
        ],
        govtNote: 'This project is more than just an app — it\'s about using technology to support real people working in high-pressure situations to keep society safe. We are grateful for the opportunity to contribute to a smarter, more connected policing system.',
        type: 'app',
        isGovernment: true,
    },
    {
        id: 'prabhav-lagnam',
        title: 'Prabhav Lagnam',
        tagline: 'Junagadh\'s Trusted Lohana Community Matrimonial App',
        category: 'Android App',
        categoryIcon: Heart,
        categoryColor: 'text-rose-600',
        categoryBg: 'bg-rose-50',
        accent: 'from-rose-600 to-pink-500',
        accentLight: 'bg-rose-50',
        accentBorder: 'border-rose-200',
        accentText: 'text-rose-700',
        url: 'https://play.google.com/store/apps/details?id=com.prabhavlagnam',
        image: '/portfolio/prabhav-lagnam.png',
        imageAlt: 'Prabhav Lagnam — Real Google Play Store screenshot of Lohana matrimonial app',
        emoji: '💍',
        overview: 'Prabhav Lagnam is a community-focused matrimonial mobile application designed exclusively for the Lohana community in Junagadh and across Gujarat. It provides a trusted, private, and culturally-sensitive platform where families can find compatible matches with confidence — honoring tradition while embracing modern technology.',
        challenge: 'Generic matrimonial apps like Shaadi.com or BharatMatrimony don\'t cater to the specific values, filters, and trust requirements of a close-knit community like the Lohana samaj. Families needed a verified, community-specific platform where privacy and cultural sensitivity come first.',
        solution: 'We built a beautifully designed matrimonial app with traditional Indian aesthetics, community-specific filters (sub-caste, gotra, occupation, city), verified profile systems, and in-app secure messaging. Admins can verify and moderate profiles to maintain community trust.',
        techStack: ['React Native', 'Node.js', 'MongoDB', 'Firebase Auth', 'Firebase Storage', 'In-App Messaging', 'Admin Panel'],
        features: [
            'Community-specific filters: Lohana sub-caste, gotra, city, education',
            'Verified profile badges for trusted members',
            'Traditional wedding aesthetic UI tailored for Gujarati families',
            'Secure, private in-app messaging system',
            'Profile photo gallery with privacy controls',
            'Admin-moderated profiles for authenticity',
            'Shortlist, like, and express interest features',
        ],
        results: [
            'Active matrimonial platform for the Junagadh Lohana community',
            'Hundreds of verified profiles from Gujarat',
            'Multiple families connected through the platform',
        ],
        type: 'app',
    },
];

function TechBadge({ tech }: { tech: string }) {
    return (
        <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-600 border border-slate-200">
            {tech}
        </span>
    );
}

export default function PortfolioPage() {
    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="pt-32 pb-20 bg-gradient-to-b from-slate-900 to-slate-800 relative overflow-hidden">
                {/* Background grid */}
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
                <div className="container mx-auto px-4 md:px-6 max-w-5xl relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-4 py-2 rounded-full text-sm font-semibold mb-6 backdrop-blur-sm">
                        <Star size={14} className="text-yellow-400 fill-yellow-400" />
                        Real Projects. Real Results. Real Clients.
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                        Our Portfolio &{' '}
                        <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                            Case Studies
                        </span>
                    </h1>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed">
                        From pet grooming platforms in India to government police apps and Canadian eCommerce —
                        here are real products we have designed, built, and launched for our clients.
                    </p>
                    <div className="flex flex-wrap justify-center gap-8 text-center">
                        {[
                            { value: '13+', label: 'Projects Delivered' },
                            { value: '2', label: 'Countries Served' },
                            { value: '100%', label: 'Delivered on Time' },
                            { value: '5000+', label: 'End Users Impacted' },
                        ].map((stat) => (
                            <div key={stat.label} className="text-white">
                                <div className="text-3xl font-bold text-sky-400">{stat.value}</div>
                                <div className="text-sm text-slate-400 mt-1">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Category Filter Pills */}
            <section className="py-8 bg-white border-b border-slate-100 sticky top-16 z-30 shadow-sm">
                <div className="container mx-auto px-4 md:px-6">
                    <div className="flex flex-wrap gap-3 justify-center">
                        {['All Projects', 'Web Apps', 'Mobile Apps', 'eCommerce', 'Government'].map((cat) => (
                            <span
                                key={cat}
                                className={`px-5 py-2 rounded-full text-sm font-semibold cursor-pointer transition-all border ${cat === 'All Projects'
                                    ? 'bg-slate-900 text-white border-slate-900'
                                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-400'
                                    }`}
                            >
                                {cat}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* Projects */}
            <section className="py-20">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="flex flex-col gap-32">
                        {projects.map((project, index) => {
                            const CategoryIcon = project.categoryIcon;
                            const isEven = index % 2 === 0;
                            return (
                                <article key={project.id} id={project.id} className="scroll-mt-24">
                                    {/* Project Header */}
                                    <div className="flex flex-wrap items-center gap-3 mb-8">
                                        <span className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold ${project.categoryBg} ${project.categoryColor} border ${project.accentBorder}`}>
                                            <CategoryIcon size={14} />
                                            {project.category}
                                        </span>
                                        {project.isGovernment && (
                                            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-indigo-50 text-indigo-700 border border-indigo-200">
                                                <ShieldCheck size={14} />
                                                Government Project
                                            </span>
                                        )}
                                    </div>

                                    <div className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? 'lg:[direction:rtl]' : ''}`}>
                                        {/* Image Side */}
                                        <div className={`${!isEven ? '[direction:ltr]' : ''} relative`}>
                                            <div className={`relative rounded-2xl overflow-hidden shadow-2xl border ${project.accentBorder} group`}>
                                                <div className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-5 group-hover:opacity-10 transition-opacity duration-500`} />
                                                <Image
                                                    src={project.image}
                                                    alt={project.imageAlt}
                                                    width={900}
                                                    height={600}
                                                    className="w-full h-auto object-cover"
                                                    priority={index < 2}
                                                />
                                            </div>
                                            {/* Floating badge */}
                                            <div className="absolute -bottom-4 -right-4 bg-white rounded-2xl shadow-xl border border-slate-100 px-5 py-3 flex items-center gap-3">
                                                <span className="text-3xl">{project.emoji}</span>
                                                <div>
                                                    <div className="text-xs text-slate-500 font-medium">Project</div>
                                                    <div className="text-sm font-bold text-slate-800">{project.title}</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Content Side */}
                                        <div className={`${!isEven ? '[direction:ltr]' : ''}`}>
                                            <span className={`text-4xl mb-4 block`}>{project.emoji}</span>
                                            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                                                {project.title}
                                            </h2>
                                            <p className={`text-lg font-semibold mb-6 ${project.categoryColor}`}>
                                                {project.tagline}
                                            </p>
                                            <p className="text-slate-600 leading-relaxed mb-8">
                                                {project.overview}
                                            </p>

                                            {/* Results */}
                                            <div className={`rounded-xl p-5 mb-6 ${project.accentLight} border ${project.accentBorder}`}>
                                                <div className={`text-sm font-bold uppercase tracking-wider mb-3 ${project.categoryColor}`}>
                                                    Results Delivered
                                                </div>
                                                <ul className="space-y-2">
                                                    {project.results.map((result, i) => (
                                                        <li key={i} className="flex items-start gap-2">
                                                            <CheckCircle2 size={16} className={`mt-0.5 shrink-0 ${project.categoryColor}`} />
                                                            <span className="text-sm font-medium text-slate-700">{result}</span>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>

                                            {/* Tech Stack */}
                                            <div className="mb-8">
                                                <div className="text-sm font-bold text-slate-500 uppercase tracking-wider mb-3">Tech Stack</div>
                                                <div className="flex flex-wrap gap-2">
                                                    {project.techStack.map((tech) => (
                                                        <TechBadge key={tech} tech={tech} />
                                                    ))}
                                                </div>
                                            </div>

                                            {/* CTA */}
                                            <Link
                                                href={project.url}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className={`inline-flex items-center gap-2 px-6 py-3 rounded-full font-semibold text-white bg-gradient-to-r ${project.accent} shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300`}
                                            >
                                                {project.type === 'app' ? (
                                                    <>
                                                        <Smartphone size={16} />
                                                        View on Play Store
                                                    </>
                                                ) : (
                                                    <>
                                                        <ExternalLink size={16} />
                                                        Visit Live Website
                                                    </>
                                                )}
                                            </Link>
                                        </div>
                                    </div>

                                    {/* Expanded Details */}
                                    <div className="mt-12 grid md:grid-cols-3 gap-6">
                                        {/* Challenge */}
                                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                            <div className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">🔴 The Challenge</div>
                                            <p className="text-sm text-slate-600 leading-relaxed">{project.challenge}</p>
                                        </div>
                                        {/* Solution */}
                                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                            <div className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">🟢 Our Solution</div>
                                            <p className="text-sm text-slate-600 leading-relaxed">{project.solution}</p>
                                        </div>
                                        {/* Features */}
                                        <div className="bg-slate-50 rounded-xl p-6 border border-slate-200">
                                            <div className="text-sm font-bold uppercase tracking-wider text-slate-400 mb-3">⚡ Key Features</div>
                                            <ul className="space-y-1.5">
                                                {project.features.slice(0, 5).map((feature, i) => (
                                                    <li key={i} className="flex items-start gap-2">
                                                        <CheckCircle2 size={13} className="text-green-500 mt-0.5 shrink-0" />
                                                        <span className="text-xs text-slate-600">{feature}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Special govt note */}
                                    {project.govtNote && (
                                        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-xl p-6">
                                            <div className="flex gap-3">
                                                <ShieldCheck size={20} className="text-blue-600 shrink-0 mt-0.5" />
                                                <p className="text-sm text-blue-800 italic leading-relaxed">
                                                    "{project.govtNote}"
                                                    <br />
                                                    <span className="font-bold not-italic mt-2 block">— Epsilon Technology Team 🙏</span>
                                                </p>
                                            </div>
                                        </div>
                                    )}

                                    {/* Divider */}
                                    {index < projects.length - 1 && (
                                        <div className="mt-20 border-t border-dashed border-slate-200" />
                                    )}
                                </article>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* ── More Projects Grid ─────────────────────────────────────── */}
            <section className="py-24 bg-slate-50 border-t border-slate-200">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <div className="text-center mb-14">
                        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                            More Work We've Done
                        </h2>
                        <p className="text-slate-600 text-lg max-w-2xl mx-auto">
                            Websites, mobile apps, branding, and eCommerce — across multiple industries and countries.
                        </p>
                    </div>
                    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {([
                            {
                                title: 'Feilder — Cricket Management App',
                                image: '/portfolio/feilder-app.jpeg',
                                category: 'Android & iOS App',
                                description: 'Flutter-based cricket app for Android & iOS. Create matches, track live scores, view player stats, manage teams, and follow top news.',
                                tags: ['Flutter', 'Android', 'iOS'],
                                emoji: '🏏',
                                border: 'border-sky-200',
                                bg: 'bg-sky-50',
                                tagCls: 'bg-sky-100 text-sky-700',
                            },
                            {
                                title: 'eBike Rental App',
                                image: '/portfolio/ebike-app.webp',
                                category: 'Mobile App (UI/UX)',
                                description: 'Sleek eBike rental platform — browse and rent electric scooters, view bikes on a live map, check battery & speed specs, and start rides instantly.',
                                tags: ['React Native', 'Maps API', 'EV Mobility'],
                                emoji: '⚡',
                                border: 'border-green-200',
                                bg: 'bg-green-50',
                                tagCls: 'bg-green-100 text-green-700',
                            },
                            {
                                title: 'Travel Planning App',
                                image: '/portfolio/travel-app.jpg',
                                category: 'Mobile App (UI/UX)',
                                description: 'Beautiful travel planning app UI — discover recommended places, book adventures like boat camping & mountain climbing, plan vacations with stunning visuals.',
                                tags: ['React Native', 'Travel', 'UI Design'],
                                emoji: '✈️',
                                border: 'border-cyan-200',
                                bg: 'bg-cyan-50',
                                tagCls: 'bg-cyan-100 text-cyan-700',
                            },
                            {
                                title: 'Jewellery eCommerce Website',
                                image: '/portfolio/jewellery-website.webp',
                                category: 'eCommerce Website',
                                description: 'Premium Indian jewellery eCommerce — full catalog of Rings, Earrings, Necklaces, Kadas with filters, product pages, and seasonal gift sections.',
                                tags: ['Next.js', 'eCommerce', 'Jewellery'],
                                emoji: '💎',
                                border: 'border-amber-200',
                                bg: 'bg-amber-50',
                                tagCls: 'bg-amber-100 text-amber-700',
                            },
                            {
                                title: 'Yoga Studio Website',
                                image: '/portfolio/yoga-website.webp',
                                category: 'Service Website',
                                description: 'Serene yoga studio website with class scheduling, gallery, yoga type pages (Bikrama, Anusara, Hatha), blog, testimonials, and contact.',
                                tags: ['Next.js', 'Yoga', 'Service'],
                                emoji: '🧘',
                                border: 'border-purple-200',
                                bg: 'bg-purple-50',
                                tagCls: 'bg-purple-100 text-purple-700',
                            },
                            {
                                title: 'Speevo Industries',
                                image: '/portfolio/speevo.png',
                                category: 'Business Website',
                                description: 'Corporate website for Speevo Industries — ceiling fan manufacturer. Full product catalog, dealer registration, careers section, and downloadable PDFs.',
                                tags: ['Next.js', 'B2B', 'Manufacturing'],
                                emoji: '🏭',
                                border: 'border-blue-200',
                                bg: 'bg-blue-50',
                                tagCls: 'bg-blue-100 text-blue-700',
                            },
                            {
                                title: 'Tisnix Logistics',
                                image: '/portfolio/tisnix-website.webp',
                                category: 'Business Website',
                                description: '"Get Your Load To Market Faster" — bold dark/pink logistics platform with service listings, enterprise login portal, and freight management.',
                                tags: ['Website', 'Logistics', 'Dark Theme'],
                                emoji: '🚛',
                                border: 'border-pink-200',
                                bg: 'bg-pink-50',
                                tagCls: 'bg-pink-100 text-pink-700',
                            },
                            {
                                title: 'Rhodium Master',
                                image: '/portfolio/rhodium-website.webp',
                                category: 'Business Website',
                                description: 'Website for Rhodium Master — PGMS assayer, scrap buyer, refiner & recycler since 1996. Full product catalog, services, and trade fair listings.',
                                tags: ['Website', 'B2B', 'Metals'],
                                emoji: '⚗️',
                                border: 'border-orange-200',
                                bg: 'bg-orange-50',
                                tagCls: 'bg-orange-100 text-orange-700',
                            },
                            {
                                title: 'Shreeram Clinic',
                                image: '/portfolio/shreeram-clinic.png',
                                category: 'Doctor Marketing & Branding',
                                description: '"Reviving Health, Restoring Life." — Logo design, brand identity, social media setup, and digital marketing for Shreeram Clinic, Gujarat.',
                                tags: ['Doctor Marketing', 'Branding', 'Healthcare'],
                                emoji: '🏥',
                                border: 'border-teal-200',
                                bg: 'bg-teal-50',
                                tagCls: 'bg-teal-100 text-teal-700',
                            },
                        ] as const).map((p) => (
                            <div key={p.title} className={`bg-white rounded-2xl border-2 ${p.border} overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group`}>
                                <div className="relative h-52 overflow-hidden bg-slate-100">
                                    <Image src={p.image} alt={p.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                                </div>
                                <div className="p-5">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="text-2xl">{p.emoji}</span>
                                        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${p.tagCls}`}>{p.category}</span>
                                    </div>
                                    <h3 className="text-lg font-bold text-slate-900 mb-2">{p.title}</h3>
                                    <p className="text-sm text-slate-600 leading-relaxed mb-4">{p.description}</p>
                                    <div className="flex flex-wrap gap-1.5">
                                        {p.tags.map((tag) => (
                                            <span key={tag} className="text-xs px-2.5 py-1 bg-slate-100 text-slate-500 rounded-full font-medium border border-slate-200">{tag}</span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-950 to-slate-900 relative overflow-hidden">
                <div className="absolute inset-0 opacity-10" style={{
                    backgroundImage: 'radial-gradient(circle at 30% 50%, rgba(14,165,233,0.4) 0%, transparent 60%), radial-gradient(circle at 70% 50%, rgba(99,102,241,0.3) 0%, transparent 60%)'
                }} />
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center relative z-10">
                    <div className="text-5xl mb-6">🚀</div>
                    <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        Ready to Build Your{' '}
                        <span className="bg-gradient-to-r from-sky-400 to-blue-400 bg-clip-text text-transparent">
                            Next Big Product?
                        </span>
                    </h2>
                    <p className="text-xl text-slate-300 mb-10 leading-relaxed">
                        Whether it's a booking platform, eCommerce store, government app, or community solution —
                        we have the experience to bring your vision to life with world-class engineering.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="/contacts"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30 hover:shadow-xl hover:shadow-sky-500/40 hover:scale-105 transition-all duration-300 text-lg"
                        >
                            Start Your Project
                            <ArrowRight size={18} />
                        </Link>
                        <Link
                            href="/services/mobile-app-development"
                            className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full font-bold text-white border border-white/20 bg-white/10 backdrop-blur hover:bg-white/20 transition-all duration-300 text-lg"
                        >
                            View Services
                        </Link>
                    </div>
                </div>
            </section>

            {/* JSON-LD Schema */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@type": "ItemList",
                        "name": "Epsilon Technology Portfolio",
                        "description": "Real projects built and delivered by Epsilon Technology",
                        "url": "https://epsilon-technology.com/portfolio/",
                        "itemListElement": [
                            {
                                "@type": "ListItem",
                                "position": 1,
                                "name": "DearPet.in - Pet Grooming Booking Platform",
                                "url": "https://dearpet.in/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 2,
                                "name": "Ontapp.ca - Canadian Liquor Delivery eCommerce",
                                "url": "https://ontapp.ca/"
                            },
                            {
                                "@type": "ListItem",
                                "position": 3,
                                "name": "Junagadh Police Bandobast App - Government Mobile App",
                                "url": "https://play.google.com/store/apps/details?id=com.jnd.police.bandobast"
                            },
                            {
                                "@type": "ListItem",
                                "position": 4,
                                "name": "Prabhav Lagnam - Lohana Community Matrimonial App",
                                "url": "https://play.google.com/store/apps/details?id=com.prabhavlagnam"
                            }
                        ]
                    })
                }}
            />
        </main>
    );
}
