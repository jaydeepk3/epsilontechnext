import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'
import { signToken } from '@/lib/auth'

export default async function LoginPage() {
    async function loginAction(formData: FormData) {
        'use server'
        const username = formData.get('username')
        const password = formData.get('password')

        if (
            username === process.env.ADMIN_USERNAME &&
            password === process.env.ADMIN_PASSWORD
        ) {
            const token = await signToken({ user: 'admin' })
            const cookieStore = await cookies()
            cookieStore.set('adminToken', token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'lax',
                maxAge: 60 * 60 * 24, // 24 hours
                path: '/',
            })
            redirect('/admin/blogs')
        } else {
            redirect('/admin/login?error=Invalid Credentials')
        }
    }

    return (
        <div className="flex min-h-[80vh] items-center justify-center">
            <div className="w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-slate-100">
                <div className="text-center mb-8">
                    <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight mb-2">Admin Panel</h1>
                    <p className="text-sm text-slate-500">Sign in to manage blogs</p>
                </div>

                <form action={loginAction} className="space-y-5">
                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="username">
                            Username
                        </label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            required
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-slate-50 focus:bg-white"
                            placeholder="Enter username"
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-medium text-slate-700 mb-1" htmlFor="password">
                            Password
                        </label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            required
                            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-sky-500 focus:border-sky-500 transition-colors bg-slate-50 focus:bg-white"
                            placeholder="Enter password"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-sky-600 hover:bg-sky-700 text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                    >
                        Sign In
                    </button>
                </form>
            </div>
        </div>
    )
}
