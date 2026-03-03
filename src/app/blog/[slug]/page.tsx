import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { CalendarDays, Clock, Share2, ArrowLeft } from 'lucide-react'
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
            authors: ['Epsilon Admin'],
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

    return (
        <main className="bg-white min-h-screen">
            <div className="relative pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-sky-100/50 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute top-20 left-10 w-[200px] h-[200px] bg-indigo-100/40 rounded-full blur-[80px] pointer-events-none" />

                <article className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
                    <div className="mb-8 text-center md:text-left">
                        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-sky-600 mb-8 transition-colors group">
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
                        </Link>

                        <div className="flex gap-3 mb-6 justify-center md:justify-start flex-wrap">
                            <Badge variant="secondary" className="bg-sky-100 text-sky-700 hover:bg-sky-200 px-3 py-1 text-sm">Insight</Badge>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.15]">
                            {blog.title}
                        </h1>

                        <div className="flex flex-col md:flex-row items-center justify-between border-t border-b border-slate-200 py-6 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-100 ring-2 ring-white shadow-md flex items-center justify-center text-xl font-bold text-slate-500">
                                    E
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-base">Epsilon Team</p>
                                    <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                                        <span className="flex items-center"><CalendarDays className="mr-1.5 h-3.5 w-3.5" /> {new Date(blog.createdAt).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
                                        <span className="flex items-center"><Clock className="mr-1.5 h-3.5 w-3.5" /> 5 min read</span>
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-slate-500 hover:text-sky-600 transition-colors font-medium text-sm">
                                <Share2 className="h-4 w-4" /> Share
                            </button>
                        </div>
                    </div>

                    {blog.imageUrl && (
                        <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-2xl">
                            <Image
                                src={blog.imageUrl}
                                alt={blog.title}
                                fill
                                className="object-cover hover:scale-105 transition-transform duration-700"
                                priority
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                        </div>
                    )}

                    <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-sky-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {blog.content}
                        </ReactMarkdown>
                    </div>
                </article>
            </div>
        </main>
    )
}
