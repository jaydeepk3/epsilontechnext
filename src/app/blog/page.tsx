import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User } from 'lucide-react';
import prisma from '@/lib/prisma';

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

export default async function BlogIndex() {
    // Fetch dynamic blogs from the database
    const dbBlogs = await prisma.blog.findMany({
        where: { published: true },
        orderBy: { createdAt: 'desc' }
    });

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
                    {dbBlogs.map((post: any, i: number) => (
                        <Link
                            href={post.isExternal ? `/${post.slug}` : `/blog/${post.slug}`}
                            key={i}
                            className="group cursor-pointer flex flex-col h-full"
                        >
                            <article className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all border border-slate-100 h-full flex flex-col">
                                <div className="h-48 bg-blue-100 relative overflow-hidden">
                                    <Image
                                        src={post.imageUrl || "/blog_medical_marketing.png"}
                                        alt={post.title}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                </div>
                                <div className="p-6 flex flex-col flex-grow">
                                    <div className="flex items-center gap-4 text-xs text-slate-500 mb-4">
                                        <span className="bg-blue-50 text-blue-600 px-2 py-1 rounded-full font-medium">{post.category || 'Insight'}</span>
                                        <div className="flex items-center gap-1">
                                            <Calendar size={14} />
                                            {new Date(post.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>
                                    </div>
                                    <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                                        {post.title}
                                    </h2>
                                    <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
                                        {post.metaDescription || "Click to read more about this insight."}
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
