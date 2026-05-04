'use server'

import prisma from '@/lib/prisma'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { put } from '@vercel/blob'
import { verifyToken } from '@/lib/auth'
import { cookies } from 'next/headers'
import fs from 'fs'
import path from 'path'
import * as ftp from 'basic-ftp'
import { Readable } from 'stream'

async function checkAuth() {
    const cookieStore = await cookies()
    const token = cookieStore.get('adminToken')?.value
    if (!token) throw new Error('Unauthorized')
    const payload = await verifyToken(token)
    if (!payload) throw new Error('Unauthorized')
}

export async function uploadImage(formData: FormData) {
    await checkAuth()
    const file = formData.get('imageFile') as File
    if (!file || file.size === 0) return ''

    const client = new ftp.Client()
    client.ftp.verbose = true
    
    const host = process.env.FTP_HOST
    const user = process.env.FTP_USER
    const password = process.env.FTP_PASS
    
    if (!host || !user || !password) {
        throw new Error("FTP configuration is missing in environment variables")
    }

    try {
        console.log(`Connecting to FTP host: ${host} as ${user}`)
        await client.access({
            host,
            user,
            password,
            secure: false
        })

        const filename = `${Date.now()}-${file.name.replace(/[^a-zA-Z0-9.-]/g, '_')}`
        const buffer = Buffer.from(await file.arrayBuffer())
        const source = Readable.from(buffer)

        // Try to cd to blog_images, if fails, create it
        try {
            await client.cd('blog_images')
        } catch (e) {
            console.log("Directory blog_images not found, attempting to create it...")
            await client.ensureDir('blog_images')
            await client.cd('blog_images')
        }
        
        await client.uploadFrom(source, filename)
        
        const baseUrl = process.env.FTP_BASE_URL || ''
        const sanitizedBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl
        
        // Return the full URL including the blog_images path
        const finalUrl = `${sanitizedBaseUrl}/blog_images/${filename}`
        console.log("Image uploaded successfully. URL:", finalUrl)
        return finalUrl
    } catch (err: any) {
        console.error("FTP Upload Error:", err)
        // Fallback to local only if FTP fails AND it's a local development environment
        if (process.env.NODE_ENV === 'development') {
            console.log('Falling back to local upload...')
            try {
                const buffer = Buffer.from(await file.arrayBuffer())
                const filename = `${Date.now()}-${file.name.replace(/\s+/g, '-')}`
                const publicPath = path.join(process.cwd(), 'public', 'uploads')
                
                if (!fs.existsSync(publicPath)) {
                    fs.mkdirSync(publicPath, { recursive: true })
                }
                fs.writeFileSync(path.join(publicPath, filename), buffer)
                return `/uploads/${filename}`
            } catch (localErr) {
                console.error("Local fallback also failed:", localErr)
            }
        }
        throw new Error("Failed to upload image to server: " + (err.message || 'Unknown error'))
    } finally {
        client.close()
    }
}

export async function createBlog(formData: FormData) {
    try {
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

        let imageUrl = formData.get('imageUrl') as string || '';
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
        revalidatePath(`/blog/${slug}`)
        revalidatePath('/blog')
    } catch (error: any) {
        console.error('Create blog error:', error)
        return { error: error.message || 'Failed to create blog' }
    }
    redirect('/admin/blogs')
}

export async function updateBlog(id: string, formData: FormData) {
    try {
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

        let imageUrl = formData.get('imageUrl') as string || '';
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
    } catch (error: any) {
        console.error('Update blog error:', error)
        return { error: error.message || 'Failed to update blog' }
    }
    redirect('/admin/blogs')
}

export async function deleteBlog(id: string) {
    await checkAuth()
    await prisma.blog.delete({ where: { id } })
    revalidatePath('/admin/blogs')
    revalidatePath('/blog')
}
