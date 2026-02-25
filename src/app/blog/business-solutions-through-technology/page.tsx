import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { getButtonClasses } from '@/components/ui/button';
import { CalendarDays, Clock, Share2, ArrowLeft, CheckCircle2, XCircle, TrendingUp, Users, Database } from 'lucide-react';

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "Solving Business Pain Points Through Custom Software | Epsilon Technology",
    description: "Learn how custom software solutions can eliminate operational inefficiencies, automate workflows, and increase ROI for growing businesses.",
    keywords: ["custom software benefits", "business process automation", "software ROI", "enterprise software solutions"],
    openGraph: {
        title: "Solving Business Pain Points Through Custom Software",
        url: "https://epsilon-technology.com/blog/business-solutions-through-technology/",
        type: 'article',
        publishedTime: '2026-01-27',
        authors: ['Jaydeep Kataria'],
    },
    alternates: {
        canonical: '/blog/business-solutions-through-technology/',
    }
};

export default function CustomSoftwareBenefits() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section with Gradient */}
            <div className="relative pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-rose-100/50 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute top-20 left-10 w-[200px] h-[200px] bg-blue-100/40 rounded-full blur-[80px] pointer-events-none" />

                <article className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
                    <div className="mb-8 text-center md:text-left">
                        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-rose-600 mb-8 transition-colors group">
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
                        </Link>

                        <div className="flex gap-3 mb-6 justify-center md:justify-start flex-wrap">
                            <Badge variant="secondary" className="bg-rose-100 text-rose-700 hover:bg-rose-200 px-3 py-1 text-sm">Business Strategy</Badge>
                            <Badge variant="outline" className="text-slate-600 border-slate-300 px-3 py-1 text-sm">Digital Transformation</Badge>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.15]">
                            Solving Business Pain Points Through <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-600 to-purple-600">Custom Software Solutions</span>
                        </h1>

                        <div className="flex flex-col md:flex-row items-center justify-between border-t border-b border-slate-200 py-6 gap-6">
                            <div className="flex items-center gap-4">
                                <div className="relative w-14 h-14 rounded-full overflow-hidden bg-slate-100 ring-2 ring-white shadow-md">
                                    <Image
                                        src="/images/jayde.png"
                                        alt="Jaydeep Kataria"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-slate-900 text-base">Jaydeep Kataria</p>
                                    <div className="flex items-center gap-4 text-sm text-slate-500 mt-1">
                                        <span className="flex items-center"><CalendarDays className="mr-1.5 h-3.5 w-3.5" /> Jan 27, 2026</span>
                                        <span className="flex items-center"><Clock className="mr-1.5 h-3.5 w-3.5" /> 6 min read</span>
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-slate-500 hover:text-rose-600 transition-colors font-medium text-sm">
                                <Share2 className="h-4 w-4" /> Share Article
                            </button>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-2xl">
                        <Image
                            src="/blog_mobile_app_dev.png"
                            alt="Custom Software Solutions Visualization"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-rose-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
                        <p className="lead text-xl md:text-2xl text-slate-800 font-medium mb-10 leading-relaxed border-l-4 border-rose-500 pl-6 not-italic">
                            Every growing business eventually hits a wall. Spreadsheets become unmanageable, off-the-shelf software feels restrictive, and manual processes start eating into profits. This is where <span className="font-bold text-rose-600">custom software</span> becomes an investment, not an expense.
                        </p>

                        <h2 className="text-3xl font-bold mt-16 mb-6 flex items-center gap-3">
                            The "Build vs. Buy" Dilemma
                        </h2>
                        <p>
                            Many business owners hesitate to build custom software due to perceived high initial costs. They opt for SaaS subscriptions (buying) instead. While SaaS is great for generic needs (like email or accounting), it often fails to address unique operational bottlenecks.
                        </p>

                        <div className="my-12 grid md:grid-cols-2 gap-6 not-prose">
                            <div className="bg-slate-50 p-6 rounded-2xl border border-slate-200">
                                <h4 className="font-bold text-slate-900 mb-4 flex items-center gap-2">
                                    <XCircle className="w-5 h-5 text-red-500" /> Limitations of Off-the-Shelf
                                </h4>
                                <ul className="space-y-3 text-sm text-slate-600">
                                    <li className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>Recurring monthly subscription costs per user</li>
                                    <li className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>Rigid workflows that force you to adapt</li>
                                    <li className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-slate-400 mt-2 shrink-0"></span>Feature bloat (paying for tools you don't use)</li>
                                </ul>
                            </div>
                            <div className="bg-rose-50 p-6 rounded-2xl border border-rose-100">
                                <h4 className="font-bold text-rose-900 mb-4 flex items-center gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-rose-600" /> Power of Custom Build
                                </h4>
                                <ul className="space-y-3 text-sm text-rose-800">
                                    <li className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0"></span>One-time investment, you own the asset</li>
                                    <li className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0"></span>Tailored exactly to your unique process</li>
                                    <li className="flex gap-2"><span className="w-1.5 h-1.5 rounded-full bg-rose-400 mt-2 shrink-0"></span>Scales unlimitedly without extra fees</li>
                                </ul>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mt-16 mb-8">Common Pain Points We Solve</h2>

                        {/* Pain Point 1 */}
                        <div className="my-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden not-prose group hover:shadow-md transition-shadow">
                            <div className="p-1 bg-gradient-to-r from-orange-400 to-rose-500" />
                            <div className="p-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600 shrink-0">
                                        <Database className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Disconnected Systems (Data Silos)</h3>
                                        <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">The Challenge</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Your sales team uses a CRM, operations uses an ERP, and accounting uses another tool. None of them talk to each other. You spend hours manually copying data.
                                </p>
                                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                                    <p className="text-slate-800 font-medium flex gap-2">
                                        <span className="text-rose-600 font-bold">The Fix:</span>
                                        A custom integrated platform that acts as a single source of truth, automating data flow between departments via APIs.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Pain Point 2 */}
                        <div className="my-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden not-prose group hover:shadow-md transition-shadow">
                            <div className="p-1 bg-gradient-to-r from-blue-400 to-indigo-500" />
                            <div className="p-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600 shrink-0">
                                        <Users className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Inefficient Workflows</h3>
                                        <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">The Challenge</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    "This is how we've always done it." Employees perform repetitive tasks that require low brainpower but high time consumption, leading to burnout and errors.
                                </p>
                                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                                    <p className="text-slate-800 font-medium flex gap-2">
                                        <span className="text-indigo-600 font-bold">The Fix:</span>
                                        Custom automation scripts or dashboards that handle routine processes (like invoice generation or inventory updates) instantly.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Pain Point 3 */}
                        <div className="my-8 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden not-prose group hover:shadow-md transition-shadow">
                            <div className="p-1 bg-gradient-to-r from-emerald-400 to-teal-500" />
                            <div className="p-8">
                                <div className="flex items-start gap-4 mb-4">
                                    <div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
                                        <TrendingUp className="w-6 h-6" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-slate-900 mb-2">Lack of Scalability</h3>
                                        <p className="text-slate-500 text-sm font-medium uppercase tracking-wide">The Challenge</p>
                                    </div>
                                </div>
                                <p className="text-slate-600 mb-6 leading-relaxed">
                                    Your current software crashes when traffic spikes, or it charges you per user, making growth prohibitively expensive.
                                </p>
                                <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                                    <p className="text-slate-800 font-medium flex gap-2">
                                        <span className="text-teal-600 font-bold">The Fix:</span>
                                        Cloud-native custom software designed to scale horizontally. You own the code, so you don't pay "per seat" penalties as you hire.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mt-16 mb-6">Real World ROI</h2>
                        <p>
                            Consider a logistics company that manually routed drivers. By building a custom routing algorithm, they reduced fuel costs by 15% and administrative time by 40%. The software paid for itself in 6 months.
                        </p>

                        <div className="my-16 p-10 bg-gradient-to-br from-rose-50 to-white rounded-3xl border border-rose-100 shadow-lg text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-rose-100 rounded-full blur-[80px] pointer-events-none opacity-50" />
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 relative z-10">Identifying Your Bottlenecks?</h3>
                            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto relative z-10">
                                Let's audit your current processes. We identify where technology can save you money and build exactly what you need.
                            </p>
                            <Link
                                href="/services/custom-software"
                                className={getButtonClasses({ variant: 'primary', size: 'lg', className: 'bg-rose-600 hover:bg-rose-700 shadow-xl shadow-rose-200 hover:shadow-2xl hover:shadow-rose-300 relative z-10' })}
                            >
                                Explore Custom Solutions
                            </Link>
                        </div>

                    </div>
                </article>
            </div>
        </main>
    );
}
