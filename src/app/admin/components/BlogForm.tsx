'use client'

import { useState, useRef, useTransition } from 'react'
import { createBlog, updateBlog } from '../actions'
import { Save, AlertCircle, Upload } from 'lucide-react'

export default function BlogForm({ blog }: { blog?: any }) {
    const [isPending, startTransition] = useTransition()
    const [error, setError] = useState('')
    const [imagePreview, setImagePreview] = useState(blog?.imageUrl || '')
    const [isDragging, setIsDragging] = useState(false)
    const fileInputRef = useRef<HTMLInputElement>(null)

    const handleDragOver = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(true)
    }

    const handleDragLeave = () => {
        setIsDragging(false)
    }

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault()
        setIsDragging(false)
        
        const file = e.dataTransfer.files?.[0]
        if (file && file.type.startsWith('image/')) {
            const url = URL.createObjectURL(file)
            setImagePreview(url)
            
            if (fileInputRef.current) {
                const dataTransfer = new DataTransfer()
                dataTransfer.items.add(file)
                fileInputRef.current.files = dataTransfer.files
            }
        }
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        
        startTransition(async () => {
            setError('')
            const result = blog ? await updateBlog(blog.id, formData) : await createBlog(formData)
            if (result && result.error) {
                setError(result.error)
            }
        })
    }

    const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if (file) {
            const url = URL.createObjectURL(file)
            setImagePreview(url)
        }
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
            {error && (
                <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg flex items-center gap-2 text-red-700">
                    <AlertCircle className="h-5 w-5" />
                    <p>{error}</p>
                </div>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2 space-y-6">
                    <div className="space-y-1">
                        <label htmlFor="title" className="block text-sm font-semibold text-slate-700">Blog Title</label>
                        <input
                            type="text"
                            name="title"
                            id="title"
                            required
                            defaultValue={blog?.title}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition shadow-sm bg-slate-50 focus:bg-white"
                        />
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="slug" className="block text-sm font-semibold text-slate-700">URL Slug</label>
                        <input
                            type="text"
                            name="slug"
                            id="slug"
                            required
                            defaultValue={blog?.slug}
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition shadow-sm bg-slate-50 focus:bg-white"
                            placeholder="e.g. top-app-developers-2026"
                        />
                        <p className="text-xs text-slate-500">This will be the URL: /blog/{"{slug}"}</p>
                    </div>

                    <div className="space-y-1">
                        <label htmlFor="content" className="block text-sm font-semibold text-slate-700">Blog Content (Markdown supported)</label>
                        <textarea
                            name="content"
                            id="content"
                            required
                            rows={15}
                            defaultValue={blog?.content}
                            className="w-full px-4 py-3 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition shadow-sm bg-slate-50 focus:bg-white"
                            placeholder="Write your blog post here..."
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <div className="space-y-4 border border-slate-200 p-5 rounded-xl bg-slate-50">
                        <h3 className="font-semibold text-slate-800 border-b border-slate-200 pb-2">Properties</h3>
                        <div className="space-y-1">
                            <label htmlFor="category" className="block text-sm text-slate-600 font-medium">Category</label>
                            <input
                                type="text"
                                name="category"
                                id="category"
                                defaultValue={blog?.category || 'Latest Insight'}
                                className="w-full px-3 py-1.5 text-sm border border-slate-300 rounded focus:ring-1 focus:ring-sky-500"
                            />
                        </div>
                        <div className="space-y-1">
                            <label htmlFor="author" className="block text-sm text-slate-600 font-medium">Author</label>
                            <input
                                type="text"
                                name="author"
                                id="author"
                                defaultValue={blog?.author || 'Epsilon Admin'}
                                className="w-full px-3 py-1.5 text-sm border border-slate-300 rounded focus:ring-1 focus:ring-sky-500"
                            />
                        </div>
                    </div>

                    <div className="space-y-1 border border-slate-200 p-5 rounded-xl bg-slate-50">
                        <label className="block text-sm font-semibold text-slate-700 mb-3">Featured Image</label>

                        <div 
                            onDragOver={handleDragOver}
                            onDragLeave={handleDragLeave}
                            onDrop={handleDrop}
                            onClick={() => fileInputRef.current?.click()}
                            className={`
                                relative border-2 border-dashed rounded-xl transition-all cursor-pointer overflow-hidden
                                ${isDragging ? 'border-sky-500 bg-sky-50' : 'border-slate-300 hover:border-slate-400 bg-white'}
                                ${imagePreview ? 'aspect-video' : 'py-10'}
                            `}
                        >
                            {imagePreview ? (
                                <div className="group relative w-full h-full">
                                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2">
                                        <div className="bg-white/20 p-2 rounded-full backdrop-blur-sm">
                                            <Upload className="h-6 w-6 text-white" />
                                        </div>
                                        <p className="text-white text-sm font-medium">Click or drag to change</p>
                                    </div>
                                </div>
                            ) : (
                                <div className="flex flex-col items-center justify-center gap-3 text-slate-500">
                                    <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm">
                                        <Upload className="h-8 w-8 text-sky-500" />
                                    </div>
                                    <div className="text-center">
                                        <p className="text-sm font-semibold text-slate-700">Click to upload or drag & drop</p>
                                        <p className="text-xs text-slate-400 mt-1">PNG, JPG or WebP (max. 5MB)</p>
                                    </div>
                                </div>
                            )}
                            
                            <input
                                type="file"
                                name="imageFile"
                                id="imageFile"
                                ref={fileInputRef}
                                accept="image/*"
                                onChange={handleImageChange}
                                className="hidden"
                            />
                        </div>

                        {blog?.imageUrl && (
                            <input type="hidden" name="imageUrl" value={blog.imageUrl} />
                        )}
                    </div>

                    <div className="space-y-4 border border-slate-200 p-5 rounded-xl bg-slate-50">
                        <h3 className="font-semibold text-slate-800 border-b border-slate-200 pb-2">SEO Variables</h3>
                        <div className="space-y-1">
                            <label htmlFor="metaTitle" className="block text-sm text-slate-600 font-medium">Meta Title</label>
                            <input
                                type="text"
                                name="metaTitle"
                                id="metaTitle"
                                defaultValue={blog?.metaTitle || ''}
                                className="w-full px-3 py-1.5 text-sm border border-slate-300 rounded focus:ring-1 focus:ring-sky-500"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="metaDescription" className="block text-sm text-slate-600 font-medium">Meta Description</label>
                            <textarea
                                name="metaDescription"
                                id="metaDescription"
                                rows={3}
                                defaultValue={blog?.metaDescription || ''}
                                className="w-full px-3 py-1.5 text-sm border border-slate-300 rounded focus:ring-1 focus:ring-sky-500"
                            />
                        </div>

                        <div className="space-y-1">
                            <label htmlFor="keywords" className="block text-sm text-slate-600 font-medium">Keywords</label>
                            <input
                                type="text"
                                name="keywords"
                                id="keywords"
                                defaultValue={blog?.keywords || ''}
                                className="w-full px-3 py-1.5 text-sm border border-slate-300 rounded focus:ring-1 focus:ring-sky-500"
                                placeholder="Comma separated"
                            />
                        </div>
                    </div>

                    <div className="border border-slate-200 p-5 rounded-xl bg-slate-50 space-y-4">
                        <label className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                name="isExternal"
                                value="true"
                                defaultChecked={blog?.isExternal}
                                className="w-5 h-5 text-sky-600 rounded border-slate-300 focus:ring-sky-500"
                            />
                            <span className="font-semibold text-slate-800 text-sm">Is External standalone link</span>
                        </label>
                        <label className="flex items-center gap-3">
                            <input
                                type="checkbox"
                                name="published"
                                value="true"
                                defaultChecked={blog?.published}
                                className="w-5 h-5 text-sky-600 rounded border-slate-300 focus:ring-sky-500"
                            />
                            <span className="font-semibold text-slate-800">Publish immediately</span>
                        </label>

                        <button
                            type="submit"
                            disabled={isPending}
                            className="w-full flex items-center justify-center gap-2 bg-sky-600 hover:bg-sky-700 text-white font-semibold py-3 px-4 rounded-xl shadow-md transition disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isPending ? (
                                <span className="animate-pulse">Saving...</span>
                            ) : (
                                <>
                                    <Save className="h-5 w-5" />
                                    {blog ? 'Update Blog' : 'Publish Blog'}
                                </>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </form>
    )
}
