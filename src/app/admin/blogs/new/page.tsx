import BlogForm from '../../components/BlogForm'
import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'

export default function NewBlogPage() {
    return (
        <div>
            <div className="mb-8">
                <Link href="/admin/blogs" className="text-sm font-medium text-slate-500 hover:text-sky-600 flex items-center gap-1 transition">
                    <ArrowLeft className="h-4 w-4" /> Back to blogs
                </Link>
                <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mt-4">Create New Blog</h1>
            </div>

            <BlogForm />
        </div>
    )
}
