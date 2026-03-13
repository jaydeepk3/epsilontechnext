import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { 
    CalendarDays, Clock, Share2, ArrowLeft, ChevronRight, MessageSquare, 
    Linkedin, Twitter, Facebook, ExternalLink, Sparkles, ArrowRight,
    Bookmark, ThumbsUp, Eye, Send, Home, Info, HelpCircle
} from 'lucide-react'
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
        <main className="bg-white min-h-screen selection:bg-sky-100 selection:text-sky-900">
            {/* Progress Bar */}
            <div className="fixed top-0 left-0 w-full h-1.5 bg-slate-100/50 backdrop-blur-sm z-[100]">
                <div className="h-full bg-gradient-to-r from-sky-400 via-sky-600 to-indigo-600 animate-scroll-progress origin-left" />
            </div>

            {/* Breadcrumbs */}
            <div className="bg-slate-50 border-b border-slate-100 pt-32 pb-4">
                <div className="container mx-auto px-4 md:px-6 max-w-6xl">
                    <nav className="flex items-center gap-2 text-xs font-semibold text-slate-400 uppercase tracking-widest">
                        <Link href="/" className="hover:text-sky-600 transition-colors flex items-center gap-1"><Home size={12} /> Home</Link>
                        <ChevronRight size={10} />
                        <Link href="/blog" className="hover:text-sky-600 transition-colors">Blog</Link>
                        <ChevronRight size={10} />
                        <span className="text-slate-600 truncate max-w-[200px]">{blog.title}</span>
                    </nav>
                </div>
            </div>

            <div className="relative pb-24 bg-white overflow-hidden">
                {/* Decorative Elements */}
                <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-sky-50/50 rounded-full blur-[120px] pointer-events-none -translate-y-1/2 translate-x-1/4" />
                <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-indigo-50/30 rounded-full blur-[100px] pointer-events-none -translate-x-1/2" />

                <article className="container mx-auto px-4 md:px-6 relative z-10 pt-16">
                    {/* Header Section */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="flex flex-wrap items-center gap-3 mb-8">
                            <Badge className="bg-sky-600 text-white hover:bg-sky-700 px-4 py-1.5 text-xs font-bold uppercase tracking-widest border-none shadow-lg shadow-sky-200">
                                {blog.category || 'Insight'}
                            </Badge>
                            <div className="flex items-center gap-2 text-slate-400 text-sm font-medium">
                                <Clock size={16} className="text-sky-500" /> 5 Min Read
                                <span className="w-1 h-1 bg-slate-300 rounded-full" />
                                <Eye size={16} className="text-slate-400" /> 1.2k views
                            </div>
                        </div>

                        <h1 className="text-4xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-10 leading-[1.05] animate-in fade-in slide-in-from-bottom-8 duration-1000">
                            {blog.title}
                        </h1>

                        <div className="flex flex-col md:flex-row items-center justify-between py-10 border-y border-slate-100 gap-8">
                            <div className="flex items-center gap-5">
                                <div className="relative w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-br from-sky-500 to-indigo-600 p-0.5 shadow-xl rotate-3 hover:rotate-0 transition-transform duration-500 group">
                                    <div className="w-full h-full rounded-2xl bg-white flex items-center justify-center text-2xl font-black text-sky-600 group-hover:bg-sky-50 transition-colors">
                                        {blog.author?.[0] || 'E'}
                                    </div>
                                </div>
                                <div>
                                    <p className="font-black text-slate-900 text-xl tracking-tight">{blog.author || 'Epsilon Team'}</p>
                                    <div className="flex items-center gap-4 text-slate-500 mt-1 font-medium">
                                        <span className="flex items-center gap-1.5"><CalendarDays size={16} className="text-sky-500" /> {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="flex flex-wrap items-center gap-3 justify-center">
                                <span className="text-xs font-black text-slate-400 uppercase tracking-widest mr-2">Spread the Word:</span>
                                {[
                                    { Icon: Twitter, color: 'hover:text-sky-400 hover:bg-sky-50' },
                                    { Icon: Linkedin, color: 'hover:text-blue-700 hover:bg-blue-50' },
                                    { Icon: Facebook, color: 'hover:text-blue-600 hover:bg-blue-50' },
                                    { Icon: Send, color: 'hover:text-sky-500 hover:bg-sky-50' }
                                ].map((item, i) => (
                                    <button key={i} className={`w-12 h-12 rounded-2xl bg-white border border-slate-100 flex items-center justify-center text-slate-400 shadow-sm transition-all duration-300 ${item.color} hover:scale-110 hover:-translate-y-1`}>
                                        <item.Icon className="h-5 w-5" />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Featured Image - Ultra Premium */}
                    {blog.imageUrl && (
                        <div className="max-w-6xl mx-auto mb-20">
                            <div className="relative w-full aspect-[21/9] rounded-[48px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.1)] group">
                                <Image
                                    src={blog.imageUrl}
                                    alt={blog.title}
                                    fill
                                    className="object-cover scale-100 group-hover:scale-105 transition-transform duration-[2000ms]"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/10 opacity-60" />
                                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                                   <div className="bg-white/20 backdrop-blur-md px-6 py-3 rounded-2xl border border-white/30 text-white text-xs font-bold uppercase tracking-widest">
                                        Verified Expertise
                                   </div>
                                   <button className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-sky-600 shadow-2xl hover:bg-sky-50 transition-colors">
                                        <Bookmark size={24} />
                                   </button>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Main Content Area */}
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-20 items-start">
                        {/* Left Side: Floating Social / Status */}
                        <aside className="hidden xl:flex flex-col gap-6 sticky top-40 items-center w-20 shrink-0">
                            <div className="flex flex-col gap-4 p-2 bg-slate-50 border border-slate-100 rounded-full shadow-sm">
                                {[
                                    { Icon: ThumbsUp, label: 'Like' },
                                    { Icon: MessageSquare, label: 'Comment' },
                                    { Icon: Bookmark, label: 'Save' },
                                    { Icon: Share2, label: 'Share' }
                                ].map((item, i) => (
                                    <button key={i} className="w-14 h-14 rounded-full bg-white flex items-center justify-center text-slate-400 hover:text-sky-600 hover:shadow-md transition-all group relative">
                                        <item.Icon size={20} />
                                        <span className="absolute left-full ml-4 px-3 py-1 bg-slate-900 text-white text-[10px] font-bold rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none uppercase tracking-tighter">
                                            {item.label}
                                        </span>
                                    </button>
                                ))}
                            </div>
                            <div className="w-px h-24 bg-gradient-to-b from-slate-200 to-transparent" />
                        </aside>

                        {/* Article Body */}
                        <div className="flex-grow max-w-3xl mx-auto lg:mx-0">
                            {/* Summary / Lead Paragraph */}
                            <div className="mb-16 p-10 lg:p-12 rounded-[40px] bg-gradient-to-br from-slate-50 to-white border border-slate-100 shadow-sm relative overflow-hidden group">
                                <div className="absolute top-0 right-0 p-8 text-sky-100 -rotate-12 transform scale-150 group-hover:scale-175 transition-transform duration-1000">
                                    <Sparkles size={80} strokeWidth={1} />
                                </div>
                                <h3 className="text-2xl font-black text-slate-900 mb-6 flex items-center gap-3">
                                    <Info className="text-sky-600" size={24} /> Why this matters
                                </h3>
                                <div className="text-slate-600 text-xl font-medium leading-relaxed italic">
                                    {blog.metaDescription || "Gain a competitive edge by mastering the latest industry strategies to transform your digital infrastructure."}
                                </div>
                            </div>

                            <div className="prose prose-xl prose-slate max-w-none 
                                prose-headings:font-black prose-headings:text-slate-900 prose-headings:tracking-tight
                                prose-p:text-slate-700 prose-p:leading-[1.9] prose-p:mb-10
                                prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline prose-a:font-bold prose-a:border-b-2 prose-a:border-sky-100 hover:prose-a:border-sky-500 prose-a:transition-all
                                prose-blockquote:my-16
                                prose-img:rounded-[32px] prose-img:shadow-2xl prose-img:my-16
                                prose-hr:border-slate-100 prose-hr:my-24
                                prose-strong:text-slate-900 prose-strong:font-black
                            ">
                                <ReactMarkdown 
                                    remarkPlugins={[remarkGfm]}
                                    components={{
                                        h2: ({node, ...props}) => {
                                            const id = props.children?.toString().toLowerCase().replace(/[^\w\s-]/g, '').replace(/\s+/g, '-');
                                            return (
                                                <h2 id={id} className="text-3xl md:text-5xl mt-32 mb-12 scroll-mt-32 flex items-start gap-5 group font-black" {...props}>
                                                    <span className="flex items-center justify-center w-12 h-12 rounded-2xl bg-sky-50 text-sky-600 text-sm font-black shadow-sm group-hover:bg-sky-600 group-hover:text-white transition-all mt-1 shrink-0 rotate-3 group-hover:rotate-0">
                                                        #
                                                    </span>
                                                    {props.children}
                                                </h2>
                                            )
                                        },
                                        h3: ({node, ...props}) => (
                                            <h3 className="text-2xl md:text-3xl mt-20 mb-8 text-slate-900 font-extrabold flex items-center gap-3" {...props}>
                                                <div className="w-2 h-8 bg-sky-500 rounded-full" />
                                                {props.children}
                                            </h3>
                                        ),
                                        ul: ({node, ...props}) => (
                                            <ul className="grid gap-5 my-14" {...props} />
                                        ),
                                        li: ({node, children, ...props}) => (
                                            <li className="flex gap-5 p-6 md:p-8 rounded-[32px] bg-slate-50/50 border border-slate-100 hover:border-sky-200 hover:bg-white hover:shadow-xl hover:shadow-sky-100/50 transition-all duration-500 group" {...props}>
                                                <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-sky-500 shrink-0 group-hover:bg-sky-600 group-hover:text-white group-hover:border-sky-600 transition-all">
                                                    <ArrowRight size={20} className="group-hover:translate-x-0.5 transition-transform" />
                                                </div>
                                                <div className="text-slate-800 font-semibold text-lg md:text-xl leading-relaxed">{children}</div>
                                            </li>
                                        ),
                                        blockquote: ({node, ...props}) => (
                                            <blockquote className="border-l-0 bg-gradient-to-br from-slate-950 to-slate-900 p-10 md:p-14 rounded-[48px] my-20 relative overflow-hidden group text-white shadow-2xl shadow-sky-900/20" {...props}>
                                                <div className="absolute top-0 right-0 p-10 opacity-10 text-sky-400 group-hover:rotate-12 transition-transform duration-1000">
                                                    <Sparkles size={120} />
                                                </div>
                                                <div className="relative z-10 text-2xl md:text-3xl font-black leading-tight italic tracking-tight">
                                                    {props.children}
                                                </div>
                                                <div className="mt-8 flex items-center gap-4 relative z-10">
                                                    <div className="w-10 h-1 bg-sky-500 rounded-full" />
                                                    <span className="text-sky-400 text-xs font-black uppercase tracking-[0.2em]">Industry Standard Insight</span>
                                                </div>
                                            </blockquote>
                                        ),
                                        img: ({node, ...props}) => (
                                            <div className="my-20 flex flex-col items-center">
                                                <img {...props} className="rounded-[40px] shadow-2xl border border-slate-100 max-h-[700px] object-cover hover:scale-[1.02] transition-transform duration-700" />
                                                {props.alt && (
                                                    <div className="mt-6 flex items-center gap-2 text-slate-400 font-bold text-xs uppercase tracking-widest bg-slate-50 px-4 py-2 rounded-full">
                                                        <Info size={14} /> Caption: {props.alt}
                                                    </div>
                                                )}
                                            </div>
                                        ),
                                        p: ({node, ...props}) => {
                                            // Enhanced CTA component
                                            if (props.children?.toString().includes('Audit')) {
                                                return (
                                                    <div className="my-24 p-1 rounded-[48px] bg-gradient-to-tr from-sky-400 via-indigo-500 to-purple-600 shadow-2xl shadow-sky-200 animate-gradient-shift">
                                                        <div className="bg-white rounded-[46px] p-12 md:p-20 text-center relative overflow-hidden">
                                                            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_top_right,rgba(2,132,199,0.05),transparent)]" />
                                                            <h2 className="text-3xl md:text-5xl font-black text-slate-900 mb-8 relative z-10 tracking-tight leading-tight">
                                                                Ready to stop<br /><span className="text-sky-600 underline decoration-sky-100 underline-offset-8">DIY struggles?</span>
                                                            </h2>
                                                            <p className="text-slate-500 text-lg mb-12 max-w-lg mx-auto relative z-10">Join 50+ partners who scaled their revenue by moving to professional, high-performance web development.</p>
                                                            <Link href="/contacts" className="inline-flex items-center gap-3 px-10 py-5 bg-slate-900 text-white rounded-full font-black uppercase tracking-widest text-sm hover:bg-sky-600 transition-all shadow-xl hover:shadow-sky-200">
                                                                Claim Your Free Audit <ArrowRight size={20} />
                                                            </Link>
                                                        </div>
                                                    </div>
                                                )
                                            }
                                            return <p {...props} />
                                        }
                                    }}
                                >
                                    {blog.content}
                                </ReactMarkdown>
                            </div>

                            {/* Author Card - Enhanced */}
                            <div className="mt-32 p-10 md:p-14 rounded-[48px] border border-slate-100 bg-slate-50 relative overflow-hidden flex flex-col items-center text-center group">
                                <div className="absolute top-0 right-0 w-48 h-48 bg-sky-100 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2 opacity-50" />
                                <div className="w-28 h-28 rounded-[32px] bg-white shadow-2xl flex items-center justify-center text-4xl font-black text-slate-200 border-2 border-white mb-8 group-hover:rotate-6 transition-transform">
                                    {blog.author?.[0] || 'E'}
                                </div>
                                <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight uppercase">Thought Leadership by {blog.author || 'Epsilon Team'}</h4>
                                <p className="text-slate-500 text-lg leading-relaxed mb-10 max-w-xl">
                                    Crafting future-ready digital solutions for enterprise and healthcare sectors. Dedicated to bridging the gap between complex technology and business growth.
                                </p>
                                <div className="flex gap-6">
                                    <Link href="/contacts" className="px-8 py-3 bg-sky-600 text-white rounded-2xl font-bold hover:bg-sky-700 transition-all shadow-lg shadow-sky-200 flex items-center gap-2">
                                        Partner with Us <Send size={16} />
                                    </Link>
                                    <Link href="/about" className="px-8 py-3 bg-white border border-slate-200 text-slate-600 rounded-2xl font-bold hover:bg-slate-100 transition-all">
                                        View Bio
                                    </Link>
                                </div>
                            </div>
                        </div>

                        {/* Right Sidebar: Contextual */}
                        <aside className="lg:w-80 shrink-0 hidden lg:block sticky top-40 space-y-10 mb-20 px-4">
                            {/* Table of Contents */}
                            <div className="p-8 rounded-[32px] bg-slate-50 border border-slate-100">
                                <h4 className="text-xs font-black text-slate-400 uppercase tracking-[0.2em] mb-8">Navigation</h4>
                                <nav className="space-y-5">
                                    {headings.map((h, i) => (
                                        <a 
                                            key={i} 
                                            href={`#${h.id}`}
                                            className="group flex gap-3 text-sm font-bold text-slate-500 hover:text-sky-600 transition-all items-start"
                                        >
                                            <span className="text-sky-300 group-hover:text-sky-600 transition-colors">0{i+1}</span>
                                            <span className="line-clamp-2 leading-snug">{h.text}</span>
                                        </a>
                                    ))}
                                </nav>
                                {headings.length === 0 && (
                                    <div className="text-slate-400 text-xs italic">Read this comprehensive guide below.</div>
                                )}
                            </div>

                            {/* Dynamic CTA Case Study */}
                            <div className="p-8 rounded-[32px] bg-slate-900 text-white relative overflow-hidden group shadow-2xl shadow-sky-900/20">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-sky-500/20 blur-[60px] group-hover:bg-sky-500/30 transition-colors" />
                                <HelpCircle className="text-sky-400 mb-6" size={40} />
                                <h4 className="text-xl font-bold mb-4 relative z-10">Growing your practice?</h4>
                                <p className="text-slate-400 text-sm mb-10 relative z-10 leading-relaxed">We helped local clinics increase patient inquiries by 40% through custom SEO strategies.</p>
                                <Link href="/contacts" className="inline-flex items-center justify-center w-full py-4 bg-sky-600 text-white rounded-2xl font-bold text-sm hover:bg-sky-500 transition-all relative z-10">
                                    Claim Free Audit <ExternalLink className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </aside>
                    </div>
                </article>
            </div>

            {/* Sticky Mobile Share Bar */}
                <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-[90%] max-w-sm bg-slate-900/90 backdrop-blur-xl rounded-2xl p-4 flex items-center justify-between z-50 shadow-2xl border border-white/10 lg:hidden">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-lg bg-sky-600 flex items-center justify-center text-white font-black text-xs">E</div>
                        <div className="text-white text-[10px] font-bold uppercase tracking-widest leading-tight">Reading:<br /><span className="text-sky-400 truncate w-32 inline-block">{blog.title}</span></div>
                    </div>
                    <Link href="/contacts" className="px-5 py-2.5 bg-sky-600 text-white rounded-xl text-xs font-black uppercase tracking-widest hover:bg-sky-500 transition-colors">Contact</Link>
                </div>

            {/* Related Posts: High Contrast Finish */}
            {relatedBlogs.length > 0 && (
                <section className="py-32 bg-slate-950 relative overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-slate-800 to-transparent" />
                    <div className="container mx-auto px-4 relative z-10">
                        <div className="flex flex-col md:flex-row items-center justify-between mb-16 gap-8 max-w-6xl mx-auto">
                            <div className="text-center md:text-left">
                                <Badge variant="outline" className="border-sky-800 text-sky-400 mb-4 px-4 py-1.5 uppercase tracking-widest font-bold">Deep Dive</Badge>
                                <h3 className="text-3xl md:text-5xl font-black text-white tracking-tight">Expand your knowledge</h3>
                            </div>
                            <Link href="/blog" className="px-8 py-3 border border-slate-800 text-slate-400 rounded-2xl font-bold hover:bg-slate-900 hover:text-white transition-all group flex items-center gap-2">
                                Explorer Hub <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                            </Link>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
                            {relatedBlogs.map((post) => (
                                <Link key={post.id} href={`/blog/${post.slug}`} className="group h-full">
                                    <div className="bg-slate-900/50 rounded-[40px] p-2 border border-slate-900 h-full flex flex-col group-hover:bg-slate-800/50 group-hover:border-slate-700 transition-all duration-500 group-hover:-translate-y-2">
                                        <div className="relative aspect-[16/10] rounded-[32px] overflow-hidden mb-8">
                                            <Image 
                                                src={post.imageUrl || "/blog_medical_marketing.png"} 
                                                alt={post.title} 
                                                fill 
                                                className="object-cover group-hover:scale-110 transition-transform duration-1000 grayscale group-hover:grayscale-0 opacity-40 group-hover:opacity-100" 
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                                        </div>
                                        <div className="flex flex-col flex-grow px-6 pb-8">
                                            <Badge className="w-fit mb-6 bg-slate-800 text-sky-400 border-none">{post.category}</Badge>
                                            <h4 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors line-clamp-2 leading-tight tracking-tight">{post.title}</h4>
                                            <p className="text-slate-500 text-sm line-clamp-2 mb-8 font-medium">{post.metaDescription}</p>
                                            <div className="mt-auto flex items-center gap-2 text-sky-500 font-bold text-sm tracking-widest uppercase">
                                                Read Entry <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
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


