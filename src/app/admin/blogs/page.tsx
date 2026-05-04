import Link from 'next/link'
import { Plus, Edit3, Trash2, ImageIcon } from 'lucide-react'
import Image from 'next/image'
import prisma from '@/lib/prisma'
import { deleteBlog } from '../actions'

export default async function AdminBlogsPage() {
    const blogs = await prisma.blog.findMany({
        orderBy: { createdAt: 'desc' }
    })

    return (
        <div>
            <div className="flex justify-between items-center mb-6">
                <h1 className="text-2xl font-bold text-slate-800">Manage Blogs</h1>
                <Link
                    href="/admin/blogs/new"
                    className="bg-sky-600 hover:bg-sky-700 text-white px-4 py-2 rounded-lg font-medium shadow-sm transition flex items-center gap-2"
                >
                    <Plus className="h-5 w-5" />
                    Add New Blog
                </Link>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden">
                <div className="overflow-x-auto">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 border-b border-slate-200 text-slate-600 font-medium text-sm">
                            <tr>
                                <th className="px-6 py-4 w-16">Image</th>
                                <th className="px-6 py-4">Title</th>
                                <th className="px-6 py-4">URL Slug</th>
                                <th className="px-6 py-4">Status</th>
                                <th className="px-6 py-4 text-right">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                            {blogs.map((blog: any) => (
                                <tr key={blog.id} className="hover:bg-slate-50/50 transition-colors">
                                    <td className="px-6 py-4">
                                        <div className="w-12 h-12 rounded-lg bg-slate-100 overflow-hidden relative border border-slate-200">
                                            {blog.imageUrl && (blog.imageUrl.startsWith('http') || blog.imageUrl.startsWith('/')) ? (
                                                <Image 
                                                    src={blog.imageUrl} 
                                                    alt="" 
                                                    fill 
                                                    className="object-cover"
                                                    unoptimized
                                                />
                                            ) : (
                                                <div className="w-full h-full flex items-center justify-center text-slate-300">
                                                    <ImageIcon className="h-5 w-5" />
                                                </div>
                                            )}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 font-medium text-slate-800">
                                        <div className="line-clamp-2">{blog.title}</div>
                                    </td>
                                    <td className="px-6 py-4 text-slate-500 text-sm">/blog/{blog.slug}</td>
                                    <td className="px-6 py-4">
                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${blog.published ? 'bg-green-100 text-green-800' : 'bg-amber-100 text-amber-800'}`}>
                                            {blog.published ? 'Published' : 'Draft'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 text-right">
                                        <div className="flex justify-end gap-3">
                                            <Link
                                                href={`/admin/blogs/${blog.id}/edit`}
                                                className="text-sky-600 hover:text-sky-800 flex items-center gap-1 text-sm font-medium transition"
                                            >
                                                <Edit3 className="h-4 w-4" /> Edit
                                            </Link>
                                            <form action={deleteBlog.bind(null, blog.id)}>

                                                <button type="submit" className="text-red-500 hover:text-red-700 flex items-center gap-1 text-sm font-medium transition">
                                                    <Trash2 className="h-4 w-4" /> Delete
                                                </button>
                                            </form>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {blogs.length === 0 && (
                                <tr>
                                    <td colSpan={5} className="px-6 py-8 text-center text-slate-500">
                                        No blogs found. Create your first blog post!
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
