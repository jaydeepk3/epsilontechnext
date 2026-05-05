import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar, User, Clock, Sparkles, TrendingUp } from 'lucide-react';
import prisma from '@/lib/prisma';
import { Badge } from '@/components/ui/badge';

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

export const dynamic = 'force-dynamic';

export default async function BlogIndex() {
    // Fetch dynamic blogs from the database
    const dbBlogs = await prisma.blog.findMany({
        where: { published: true },
        orderBy: { updatedAt: 'desc' }
    });

    const featuredPost = dbBlogs[0];
    const regularPosts = dbBlogs.slice(1);

    return (
        <main className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative pt-32 pb-20 bg-slate-50 overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-100/30 rounded-full blur-[100px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-indigo-100/20 rounded-full blur-[80px] pointer-events-none -translate-x-1/4 translate-y-1/2" />
                
                <div className="container mx-auto px-4 relative z-10 text-center">
                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-sky-50 text-sky-600 rounded-full text-sm font-bold mb-8 border border-sky-100 uppercase tracking-widest">
                        <Sparkles size={16} /> Knowledge Hub
                    </div>
                    <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 mb-8 tracking-tight leading-[1.1]">
                        Insights to <span className="text-sky-600">Scale</span> <br />Your Business
                    </h1>
                    <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                        Expert perspectives on digital transformation, healthcare marketing, and high-performance software engineering.
                    </p>
                </div>
            </section>

            <div className="container mx-auto px-4 pb-24">
                {/* Featured Post */}
                {featuredPost && (
                    <div className="max-w-6xl mx-auto -mt-10 mb-20">
                        <Link href={featuredPost.isExternal ? `/${featuredPost.slug}` : `/blog/${featuredPost.slug}`} className="group">
                            <div className="bg-white rounded-[40px] overflow-hidden shadow-2xl shadow-slate-200/50 border border-slate-100 flex flex-col group-hover:shadow-sky-100/50 transition-all duration-700">
                                <div className="relative overflow-hidden aspect-[21/9]">
                                    <Image
                                        src={featuredPost.imageUrl || "/blog_medical_marketing.png"}
                                        alt={featuredPost.title}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-[2000ms]"
                                    />
                                    <div className="absolute top-8 left-8 z-20">
                                        <Badge className="bg-sky-600 text-white border-none px-6 py-2 font-black text-xs uppercase tracking-[0.2em] shadow-2xl">Featured Insight</Badge>
                                    </div>
                                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                                    <div className="absolute bottom-8 left-8 hidden md:flex items-center gap-4 text-white/80 text-xs font-bold uppercase tracking-widest">
                                        <Clock size={16} className="text-sky-400" /> 5 Min Read
                                    </div>
                                </div>
                                <div className="p-8 lg:p-12 flex flex-col">
                                    <div className="flex items-center gap-4 text-sm font-black text-sky-600 mb-6 uppercase tracking-[0.2em]">
                                       <TrendingUp size={18} /> {featuredPost.category}
                                    </div>
                                    <h2 className="text-3xl lg:text-5xl font-black text-slate-900 mb-6 group-hover:text-sky-600 transition-colors leading-tight tracking-tight">
                                        {featuredPost.title}
                                    </h2>
                                    <p className="text-slate-500 text-lg lg:text-xl leading-relaxed mb-10 line-clamp-2 max-w-4xl">
                                        {featuredPost.metaDescription}
                                    </p>
                                    <div className="flex items-center justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-sky-500 to-indigo-600 flex items-center justify-center font-black text-white shadow-lg shadow-sky-200 uppercase rotate-3 group-hover:rotate-0 transition-transform">
                                                {featuredPost.author?.[0] || 'E'}
                                            </div>
                                            <div>
                                                <p className="font-black text-slate-900 text-base">{featuredPost.author || 'Epsilon Team'}</p>
                                                <p className="text-slate-400 text-xs font-bold uppercase tracking-widest">{new Date(featuredPost.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</p>
                                            </div>
                                        </div>
                                        <div className="flex items-center gap-3 px-6 py-3 bg-slate-50 group-hover:bg-sky-600 group-hover:text-white rounded-2xl transition-all duration-300 font-black text-sm uppercase tracking-widest">
                                            Read Full Article <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                )}

                {/* Regular Posts Grid */}
                <div className="max-w-6xl mx-auto">
                    <div className="flex items-center justify-between mb-12">
                        <h3 className="text-2xl font-bold text-slate-900">Recent Articles</h3>
                        <div className="h-px bg-slate-100 flex-grow mx-8 hidden sm:block"></div>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
                        {regularPosts.map((post: any) => (
                            <Link
                                href={post.isExternal ? `/${post.slug}` : `/blog/${post.slug}`}
                                key={post.id}
                                className="group h-full flex flex-col"
                            >
                                <article className="bg-white rounded-[32px] overflow-hidden border border-slate-100 h-full flex flex-col hover:shadow-2xl hover:shadow-sky-100/40 transition-all duration-500 group-hover:-translate-y-2 border-b-4 hover:border-b-sky-500">
                                    <div className="aspect-[21/9] relative overflow-hidden">
                                        <Image
                                            src={post.imageUrl || "/blog_medical_marketing.png"}
                                            alt={post.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-1000"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                                        <div className="absolute bottom-4 left-4 z-10">
                                            <Badge className="bg-white/95 backdrop-blur-sm text-sky-600 border-none px-3 py-1 font-black text-[10px] uppercase tracking-widest shadow-lg">
                                                {post.category || 'Insight'}
                                            </Badge>
                                        </div>
                                    </div>
                                    <div className="p-8 flex flex-col flex-grow">
                                        <div className="flex items-center gap-4 text-xs font-bold text-slate-400 mb-4 uppercase tracking-widest">
                                            <Calendar size={14} className="text-sky-500" />
                                            {new Date(post.updatedAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                        </div>
                                        <h2 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-sky-600 transition-colors leading-snug line-clamp-2">
                                            {post.title}
                                        </h2>
                                        <p className="text-slate-500 text-sm leading-relaxed mb-8 flex-grow line-clamp-3">
                                            {post.metaDescription || "Click to read more about this insight."}
                                        </p>
                                        <div className="flex items-center gap-2 text-sky-600 font-bold text-sm group-hover:gap-4 transition-all duration-300">
                                            Explore Article <ArrowRight size={16} />
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Newsletter Box */}
                <div className="max-w-6xl mx-auto mt-32">
                    <div className="bg-slate-900 rounded-[40px] p-8 md:p-16 relative overflow-hidden text-center">
                        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5" />
                        <div className="relative z-10">
                            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Stay Ahead of the Curve</h2>
                            <p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">
                                Get our monthly digest of technology trends and digital marketing strategies delivered to your inbox.
                            </p>
                            <form className="max-w-md mx-auto flex flex-col sm:flex-row gap-4">
                                <input 
                                    type="email" 
                                    placeholder="Enter your email" 
                                    className="flex-grow bg-white/10 border border-white/20 rounded-full px-6 py-4 text-white focus:outline-none focus:ring-2 focus:ring-sky-500 transition-all"
                                    required
                                />
                                <button className="bg-sky-600 text-white font-bold px-8 py-4 rounded-full hover:bg-sky-700 transition-all shadow-lg shadow-sky-900/50">
                                    Subscribe
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}

