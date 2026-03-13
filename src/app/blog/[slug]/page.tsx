import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, Clock, Share2, ArrowLeft, ChevronRight, MessageSquare, Linkedin, Twitter, Facebook, ExternalLink, Sparkles, ArrowRight } from 'lucide-react'
import prisma from '@/lib/prisma'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

interface PageProps {
    params: { slug: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params
    const blog = await prisma.blog.findUnique({ where: { slug } })

    if (!blog) return {}

    return {
        title: blog.metaTitle || `${blog.title} | Epsilon Technology`,
        description: blog.metaDescription || blog.title,
        keywords: blog.keywords?.split(','),
        openGraph: {
            title: blog.title,
            description: blog.metaDescription || blog.title,
            type: 'article',
            publishedTime: blog.createdAt.toISOString(),
            authors: [blog.author || 'Epsilon Team'],
        },
        alternates: {
            canonical: `https://epsilon-technology.com/blog/${slug}`,
        }
    }
}

export default async function DynamicBlogPage({ params }: PageProps) {
    const { slug } = await params
    const blog = await prisma.blog.findUnique({
        where: { slug, published: true }
    })

    if (!blog) {
        notFound()
    }

    // Fetch related blogs
    const relatedBlogs = await prisma.blog.findMany({
        where: { 
            published: true, 
            NOT: { slug: slug },
            category: blog.category
        },
        take: 3
    })

    // Extract headings for Table of Contents
    const headingRegex = /^## (.*$)/gim;
    const headings = Array.from(blog.content.matchAll(headingRegex)).map(match => ({
        text: match[1],
        id: match[1].toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-')
    }));

    return (
        <main className="bg-white min-h-screen">
            {/* Progress Bar (Client-side would be better but keeping it simple) */}
            <div className="fixed top-0 left-0 w-full h-1 bg-slate-100 z-50">
                <div className="h-full bg-sky-600 animate-scroll-progress origin-left" />
            </div>

            <div className="relative pt-32 pb-20 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-sky-100/30 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
                <div className="absolute top-40 left-0 w-[300px] h-[300px] bg-indigo-100/20 rounded-full blur-[100px] pointer-events-none -translate-x-1/2" />

                <article className="container mx-auto px-4 md:px-6 relative z-10">
                    {/* Header Section */}
                    <div className="max-w-4xl mx-auto mb-12">
                        <Link href="/blog" className="inline-flex items-center text-sm font-semibold text-slate-500 hover:text-sky-600 mb-8 transition-all group px-3 py-1 bg-white rounded-full border border-slate-200 shadow-sm hover:shadow-md">
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Insights
                        </Link>

                        <div className="flex gap-3 mb-6 flex-wrap">
                            <Badge variant="secondary" className="bg-sky-50 text-sky-700 hover:bg-sky-100 px-4 py-1.5 text-xs font-bold uppercase tracking-wider border border-sky-100 rounded-full">
                                {blog.category || 'Insight'}
                            </Badge>
                            <Badge variant="outline" className="text-slate-500 px-3 py-1.5 text-xs border-slate-200 rounded-full">
                                5 Min Read
                            </Badge>
                        </div>

                        <h1 className="text-4xl md:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.1] animate-in fade-in slide-in-from-bottom-4 duration-700">
                            {blog.title}
                        </h1>

                        <div className="flex flex-col md:flex-row items-center justify-between border-y border-slate-100 py-8 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-gradient-to-br from-sky-500 to-indigo-600 p-0.5 shadow-lg group">
                                    <div className="w-full h-full rounded-full bg-white flex items-center justify-center text-xl font-bold text-sky-600 group-hover:bg-sky-50 transition-colors">
                                        {blog.author?.[0] || 'E'}
                                    </div>
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-lg">{blog.author || 'Epsilon Team'}</p>
                                    <div className="flex items-center gap-4 text-sm text-slate-500 mt-0.5">
                                        <span className="flex items-center"><CalendarDays className="mr-1.5 h-4 w-4 text-sky-500" /> {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex items-center gap-3">
                                <span className="text-sm font-semibold text-slate-400 mr-2">Share:</span>
                                {[Twitter, Linkedin, Facebook].map((Icon, i) => (
                                    <button key={i} className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-slate-400 hover:text-sky-600 hover:border-sky-300 hover:shadow-md transition-all">
                                        <Icon className="h-4 w-4" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Featured Image */}
                    {blog.imageUrl && (
                        <div className="max-w-5xl mx-auto mb-16 px-0 md:px-4">
                            <div className="relative w-full aspect-[21/9] rounded-3xl overflow-hidden shadow-2xl ring-1 ring-slate-900/5 transition-all duration-700">
                                <Image
                                    src={blog.imageUrl}
                                    alt={blog.title}
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-1000"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                            </div>
                        </div>
                    )}

                    {/* Content Section with Sidebar */}
                    <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">
                        {/* Sidebar: Table of Contents */}
                        <aside className="lg:w-72 shrink-0 hidden lg:block">
                            <div className="sticky top-32 space-y-8">
                                <div className="p-6 rounded-2xl bg-slate-50/50 border border-slate-100">
                                    <h4 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-6">Table of Contents</h4>
                                    <nav className="space-y-4">
                                        {headings.map((h, i) => (
                                            <a 
                                                key={i} 
                                                href={`#${h.id}`}
                                                className="block text-sm font-medium text-slate-600 hover:text-sky-600 transition-colors border-l-2 border-transparent hover:border-sky-500 pl-4 py-0.5"
                                            >
                                                {h.text}
                                            </a>
                                        ))}
                                    </nav>
                                </div>

                                <div className="p-6 rounded-2xl bg-gradient-to-br from-sky-600 to-indigo-700 text-white shadow-xl shadow-sky-200 overflow-hidden relative group">
                                    <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:scale-110 transition-transform">
                                        <Sparkles size={64} />
                                    </div>
                                    <h4 className="text-lg font-bold mb-3 relative z-10">Need a Project?</h4>
                                    <p className="text-sky-100 text-sm mb-6 relative z-10 leading-relaxed">Let's build something amazing together for your business.</p>
                                    <Link href="/contacts" className="inline-flex items-center justify-center w-full py-2.5 bg-white text-sky-600 rounded-xl font-bold text-sm hover:bg-sky-50 transition-colors relative z-10 shadow-lg group/btn">
                                        Get Started <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </aside>

                        {/* Article Body */}
                        <div className="flex-grow max-w-3xl">
                            {/* Intro Highlights */}
                            <div className="mb-12 p-8 bg-sky-50/50 rounded-3xl border border-sky-100/50 relative overflow-hidden group">
                                <div className="absolute -top-6 -right-6 w-24 h-24 bg-sky-100 rounded-full blur-2xl group-hover:bg-sky-200 transition-colors" />
                                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <Sparkles className="text-sky-600" size={20} /> Article Highlights
                                </h3>
                                <div className="text-slate-600 text-lg italic leading-relaxed">
                                    {blog.metaDescription || "Expert insights on how to leverage modern technology to scale your business operations and digital presence."}
                                </div>
                            </div>

                            <div className="prose prose-lg prose-slate max-w-none 
                                prose-headings:font-bold prose-headings:text-slate-900 prose-headings:tracking-tight
                                prose-p:text-slate-600 prose-p:leading-relaxed prose-p:text-justify md:prose-p:text-left
                                prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline prose-a:font-semibold
                                prose-blockquote:border-sky-500 prose-blockquote:bg-slate-50 prose-blockquote:py-2 prose-blockquote:px-6 prose-blockquote:rounded-r-xl prose-blockquote:not-italic prose-blockquote:font-medium prose-blockquote:text-slate-700
                                prose-img:rounded-2xl prose-img:shadow-xl
                                prose-strong:text-slate-900 prose-strong:font-bold
                                prose-ul:list-none prose-ul:pl-2
                                prose-li:relative prose-li:pl-8 prose-li:mb-2
                            ">
                                <ReactMarkdown 
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        h2: ({node, ...props}) => {
                                            const id = props.children?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                                            return <h2 id={id} className="text-3xl mt-16 scroll-mt-32 flex items-center gap-3" {...props} />
                                        },
                                        li: ({node, children, ...props}) => (
                                            <li {...props}>
                                                <span className="absolute left-0 top-1.5 text-sky-500 font-bold">•</span>
                                                {children}
                                            </li>
                                        ),
                                    }}
                                >
                                    {blog.content}
                                </ReactMarkdown>
                            </div>

                            {/* Author Footer */}
                            <div className="mt-20 p-8 rounded-3xl border border-slate-100 bg-slate-50 flex flex-col sm:flex-row items-center gap-8">
                                <div className="w-24 h-24 rounded-full bg-white flex items-center justify-center text-3xl font-extrabold text-slate-300 border-2 border-slate-200 shrink-0">
                                    {blog.author?.[0] || 'E'}
                                </div>
                                <div className="text-center sm:text-left">
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">Written by {blog.author || 'Epsilon Team'}</h4>
                                    <p className="text-slate-500 text-sm leading-relaxed mb-4">Dedicated to helping businesses grow through innovative web solutions and data-driven marketing strategies in the digital landscape.</p>
                                    <div className="flex gap-4 justify-center sm:justify-start">
                                        <Link href="/about" className="text-sky-600 text-sm font-bold hover:underline flex items-center gap-1">
                                           About Epsilon <ChevronRight size={14} />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </article>
            </div>

            {/* CTA Section - High Impact */}
            <section className="py-24 bg-slate-950 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-900/20 rounded-full blur-[120px]" />
                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-4xl mx-auto text-center">
                        <Badge variant="outline" className="text-sky-400 border-sky-800 mb-6 px-4 py-1.5">Free Consultation</Badge>
                        <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 leading-tight">
                            Ready to Transform Your <br /><span className="text-sky-400">Digital Presence?</span>
                        </h2>
                        <p className="text-xl text-slate-400 mb-12">
                            Join 50+ businesses that have scaled their revenue with our custom technology and marketing solutions.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
                            <Link href="/contacts" className="px-10 py-5 bg-sky-600 text-white rounded-full font-bold hover:bg-sky-700 transition-all shadow-xl shadow-sky-900/20 flex items-center gap-2 group">
                                Start Your Project <ArrowRight className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                            <Link href="https://wa.me/917567710313" className="px-10 py-5 bg-white/10 text-white border border-white/20 rounded-full font-bold hover:bg-white/20 transition-all flex items-center gap-2">
                                <MessageSquare size={18} className="text-green-400" /> WhatsApp Us
                            </Link>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedBlogs.length > 0 && (
                <section className="py-24 bg-white border-t border-slate-50">
                    <div className="container mx-auto px-4">
                        <div className="flex items-end justify-between mb-12 max-w-6xl mx-auto">
                            <div>
                                <h3 className="text-3xl font-bold text-slate-900 mb-4">Continue Reading</h3>
                                <p className="text-slate-500">Discover more insights about {blog.category}.</p>
                            </div>
                            <Link href="/blog" className="hidden md:flex items-center gap-2 text-sky-600 font-bold hover:underline group">
                                View Blog <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                            {relatedBlogs.map((post) => (
                                <Link key={post.id} href={`/blog/${post.slug}`} className="group h-full">
                                    <div className="bg-slate-50/50 rounded-3xl p-4 border border-slate-100 h-full flex flex-col group-hover:bg-white group-hover:shadow-xl transition-all duration-500">
                                        <div className="relative aspect-[16/10] rounded-2xl overflow-hidden mb-6">
                                            <Image 
                                                src={post.imageUrl || "/blog_medical_marketing.png"} 
                                                alt={post.title} 
                                                fill 
                                                className="object-cover group-hover:scale-105 transition-transform duration-700" 
                                            />
                                        </div>
                                        <div className="flex flex-col flex-grow">
                                            <Badge variant="secondary" className="w-fit mb-4 bg-sky-50 text-sky-600 border-none">{post.category}</Badge>
                                            <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-sky-600 transition-colors line-clamp-2">{post.title}</h4>
                                            <p className="text-slate-500 text-sm line-clamp-2 mb-6">{post.metaDescription}</p>
                                            <div className="mt-auto flex items-center gap-2 text-sky-600 font-bold text-sm">
                                                Read More <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </section>
            )}
        </main>
    )
}

