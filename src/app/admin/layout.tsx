import { Inter } from 'next/font/google'
import Link from 'next/link'
import { Newspaper, LogOut } from 'lucide-react'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const cookieStore = await cookies()
    const token = cookieStore.get('adminToken')

    const handleLogout = async () => {
        'use server'
        const cookieStore = await cookies()
        cookieStore.delete('adminToken')
        redirect('/admin/login')
    }

    return (
        <div className={`min-h-screen bg-slate-50 ${inter.className}`}>
            {token && (
                <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
                    <div className="container mx-auto px-4 h-16 flex items-center justify-between">
                        <Link href="/admin/blogs" className="flex items-center gap-2 font-bold text-xl text-slate-800">
                            <Newspaper className="h-6 w-6 text-sky-600" />
                            Epsilon Admin
                        </Link>
                        <div className="flex items-center gap-4">
                            <Link href="/admin/blogs" className="text-sm font-medium text-slate-600 hover:text-sky-600">
                                Blogs
                            </Link>
                            <form action={handleLogout}>
                                <button type="submit" className="flex items-center gap-2 text-sm font-medium text-red-600 hover:text-red-700 bg-red-50 hover:bg-red-100 px-3 py-1.5 rounded-md transition-colors">
                                    <LogOut className="h-4 w-4" />
                                    Logout
                                </button>
                            </form>
                        </div>
                    </div>
                </nav>
            )}
            <main className="container mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    )
}
