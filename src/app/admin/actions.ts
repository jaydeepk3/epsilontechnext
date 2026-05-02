'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { put } from '@vercel/blob'
import { verifyToken } from '@/lib/auth'
import { cookies } from 'next/headers'

async function checkAuth() {
    const cookieStore = await cookies()
    const token = cookieStore.get('adminToken')?.value
    if (!token) throw new Error('Unauthorized')
    const payload = await verifyToken(token)
    if (!payload) throw new Error('Unauthorized')
}

export async function uploadImage(formData: FormData) {
    try {
        await checkAuth()
        const file = formData.get('imageFile') as File
        if (!file) throw new Error('No file provided')

        // In a real Vercel app, this uses @vercel/blob
        // For local dev without token, we might need a fallback, but we'll stick to Vercel Blob as requested
        const blob = await put(file.name, file, { access: 'public' })
        return blob.url
    } catch (error: any) {
        if (error.message.includes('missing BLOB_READ_WRITE_TOKEN')) {
            console.log('Falling back to local upload since Vercel Blob is not configured.')
            const fs = require('fs')
            const path = require('path')
            const file = formData.get('imageFile') as File
            if (!file || file.size === 0) return ''
            
            const buffer = Buffer.from(await file.arrayBuffer())
            const filename = Date.now() + '-' + file.name.replace(/\s+/g, '-')
            const publicPath = path.join(process.cwd(), 'public', 'uploads')
            
            try {
                if (!fs.existsSync(publicPath)) {
                    fs.mkdirSync(publicPath, { recursive: true })
                }
                fs.writeFileSync(path.join(publicPath, filename), buffer)
                return `/uploads/${filename}`
            } catch (fsError) {
                console.error('Local upload failed:', fsError)
                throw new Error('Failed to upload image locally')
            }
        }
        throw error
    }
}

export async function createBlog(formData: FormData) {
    await checkAuth()

    const title = formData.get('title') as string
    const slug = formData.get('slug') as string
    const content = formData.get('content') as string
    const metaTitle = formData.get('metaTitle') as string
    const metaDescription = formData.get('metaDescription') as string
    const keywords = formData.get('keywords') as string
    const category = formData.get('category') as string
    const author = formData.get('author') as string
    const isExternal = formData.get('isExternal') === 'true'
    const published = formData.get('published') === 'true'

    let imageUrl = formData.get('imageUrl') as string;
    const imageFile = formData.get('imageFile') as File;

    if (imageFile && imageFile.size > 0) {
        imageUrl = await uploadImage(formData)
    }

    await prisma.blog.create({
        data: {
            title,
            slug,
            content,
            metaTitle,
            metaDescription,
            keywords,
            category,
            author,
            isExternal,
            imageUrl,
            published,
        },
    })

    revalidatePath('/admin/blogs')
    revalidatePath(`/${slug}`)
    revalidatePath('/blog')
    redirect('/admin/blogs')
}

export async function updateBlog(id: string, formData: FormData) {
    await checkAuth()

    const title = formData.get('title') as string
    const slug = formData.get('slug') as string
    const content = formData.get('content') as string
    const metaTitle = formData.get('metaTitle') as string
    const metaDescription = formData.get('metaDescription') as string
    const keywords = formData.get('keywords') as string
    const category = formData.get('category') as string
    const author = formData.get('author') as string
    const isExternal = formData.get('isExternal') === 'true'
    const published = formData.get('published') === 'true'

    let imageUrl = formData.get('imageUrl') as string;
    const imageFile = formData.get('imageFile') as File;

    if (imageFile && imageFile.size > 0) {
        imageUrl = await uploadImage(formData)
    }

    await prisma.blog.update({
        where: { id },
        data: {
            title,
            slug,
            content,
            metaTitle,
            metaDescription,
            keywords,
            category,
            author,
            isExternal,
            imageUrl,
            published,
        },
    })

    revalidatePath('/admin/blogs')
    revalidatePath(`/${slug}`)
    revalidatePath(`/blog/${slug}`)
    revalidatePath('/blog')
    redirect('/admin/blogs')
}

export async function deleteBlog(id: string) {
    await checkAuth()
    await prisma.blog.delete({ where: { id } })
    revalidatePath('/admin/blogs')
    revalidatePath('/blog')
}
