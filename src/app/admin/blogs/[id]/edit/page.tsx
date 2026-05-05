import BlogForm from '@/app/admin/components/BlogForm'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import prisma from '@/lib/prisma'

export default async function EditBlogPage({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params
    console.log('Fetching blog for edit, ID:', id)

    const blog = await prisma.blog.findUnique({
        where: { id }
    })

    if (!blog) {
        console.log('Blog not found for ID:', id)
        return notFound()
    }

    return (
        <div>
            <div className="mb-8">
                <Link href="/admin/blogs" className="text-sm font-medium text-slate-500 hover:text-sky-600 flex items-center gap-1 transition">
                    <ArrowLeft className="h-4 w-4" /> Back to blogs
                </Link>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-4">Edit Blog</h1>
            </div>

            <BlogForm blog={JSON.parse(JSON.stringify(blog))} />
        </div>
    )
}
