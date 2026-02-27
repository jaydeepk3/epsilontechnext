import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { getButtonClasses } from '@/components/ui/button';
import { CalendarDays, Clock, Share2, ArrowLeft, Users, Repeat, Cog, Box, AlertTriangle, ArrowRight } from 'lucide-react';

export const metadata: Metadata = {
    metadataBase: new URL('https://www.epsilon-technology.com'),
    title: "The Ultimate Guide to Digital Transformation | Epsilon Technology",
    description: "A comprehensive guide for businesses looking to digitize operations, adopt cloud technologies, and stay competitive in the digital age.",
    keywords: ["digital transformation guide", "business digitization", "cloud migration strategies", "legacy modernization"],
    openGraph: {
        title: "The Ultimate Guide to Digital Transformation",
        url: "https://www.epsilon-technology.com/blog/digital-transformation-guide/",
        type: 'article',
        publishedTime: '2026-01-25',
        authors: ['Jaydeep Kataria'],
    },
    alternates: {
        canonical: 'https://www.epsilon-technology.com/blog/digital-transformation-guide/',
    }
};

export default function DigitalTransformationSupport() {
    return (
        <main className="bg-white min-h-screen">
            {/* Hero Section with Gradient */}
            <div className="relative pt-32 pb-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
                <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-100/50 rounded-full blur-[100px] pointer-events-none" />
                <div className="absolute top-20 left-10 w-[200px] h-[200px] bg-fuchsia-100/40 rounded-full blur-[80px] pointer-events-none" />

                <article className="container mx-auto px-4 md:px-6 max-w-4xl relative z-10">
                    <div className="mb-8 text-center md:text-left">
                        <Link href="/blog" className="inline-flex items-center text-sm font-medium text-slate-500 hover:text-purple-600 mb-8 transition-colors group">
                            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" /> Back to Blog
                        </Link>

                        <div className="flex gap-3 mb-6 justify-center md:justify-start flex-wrap">
                            <Badge variant="secondary" className="bg-purple-100 text-purple-700 hover:bg-purple-200 px-3 py-1 text-sm">Guide</Badge>
                            <Badge variant="outline" className="text-slate-600 border-slate-300 px-3 py-1 text-sm">Enterprise Strategy</Badge>
                        </div>

                        <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight mb-8 leading-[1.15]">
                            The Ultimate Guide to <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">Digital Transformation</span>
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
                                        <span className="flex items-center"><CalendarDays className="mr-1.5 h-3.5 w-3.5" /> Jan 25, 2026</span>
                                        <span className="flex items-center"><Clock className="mr-1.5 h-3.5 w-3.5" /> 10 min read</span>
                                    </div>
                                </div>
                            </div>
                            <button className="flex items-center gap-2 text-slate-500 hover:text-purple-600 transition-colors font-medium text-sm">
                                <Share2 className="h-4 w-4" /> Share Guide
                            </button>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative w-full aspect-[21/9] rounded-2xl overflow-hidden mb-16 shadow-2xl">
                        <Image
                            src="/blog_mobile_app_dev.png"
                            alt="Digital Transformation Concept"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            priority
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                    </div>

                    {/* Content */}
                    <div className="prose prose-lg prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-p:text-slate-600 prose-p:leading-relaxed prose-a:text-purple-600 prose-a:no-underline hover:prose-a:underline prose-img:rounded-xl">
                        <p className="lead text-xl md:text-2xl text-slate-800 font-medium mb-10 leading-relaxed border-l-4 border-purple-500 pl-6 not-italic">
                            Digital transformation is not just about moving to the cloud; it's about fundamentally changing how you operate. It's a <span className="font-bold text-purple-600">cultural shift</span> that requires organizations to continually challenge the status quo.
                        </p>

                        <h2 className="text-3xl font-bold mt-16 mb-8">What is Digital Transformation?</h2>
                        <p>
                            It is the integration of digital technology into all areas of a business. It changes how you operate and how you deliver value to customers. It's also a cultural change that requires organizations to get comfortable with experimentation, getting comfortable with failure, and sometimes walking away from long-standing business processes that they were built upon in favor of relatively new practices that are still being defined.
                        </p>

                        <h2 className="text-3xl font-bold mt-16 mb-8 text-center md:text-left">The 4 Pillars of Transformation</h2>

                        <div className="grid md:grid-cols-2 gap-6 my-10 not-prose">
                            {/* Pillar 1 */}
                            <div className="bg-white p-6 rounded-2xl border border-dotted border-slate-300 hover:border-solid hover:border-purple-400 hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center text-purple-600 mb-4 group-hover:scale-110 transition-transform">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">1. Empowering Employees</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Tools like Slack, Teams, and custom internal dashboards allow your workforce to collaborate seamlessly, regardless of location.
                                </p>
                            </div>

                            {/* Pillar 2 */}
                            <div className="bg-white p-6 rounded-2xl border border-dotted border-slate-300 hover:border-solid hover:border-pink-400 hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 bg-pink-100 rounded-xl flex items-center justify-center text-pink-600 mb-4 group-hover:scale-110 transition-transform">
                                    <Repeat className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">2. Engaging Customers</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Using data analytics to understand customer behaviors and predicting what they need before they ask for it.
                                </p>
                            </div>

                            {/* Pillar 3 */}
                            <div className="bg-white p-6 rounded-2xl border border-dotted border-slate-300 hover:border-solid hover:border-indigo-400 hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center text-indigo-600 mb-4 group-hover:scale-110 transition-transform">
                                    <Cog className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">3. Optimizing Operations</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Automating routine tasks using IoT and AI to reduce overhead and improve reliability.
                                </p>
                            </div>

                            {/* Pillar 4 */}
                            <div className="bg-white p-6 rounded-2xl border border-dotted border-slate-300 hover:border-solid hover:border-fuchsia-400 hover:shadow-lg transition-all group">
                                <div className="w-12 h-12 bg-fuchsia-100 rounded-xl flex items-center justify-center text-fuchsia-600 mb-4 group-hover:scale-110 transition-transform">
                                    <Box className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-2">4. Transforming Products</h3>
                                <p className="text-slate-600 text-sm leading-relaxed">
                                    Moving from physical products to digital services, or enhancing physical products with digital capabilities.
                                </p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold mt-16 mb-8 flex items-center gap-3">
                            <AlertTriangle className="w-8 h-8 text-amber-500" />
                            Challenges to Anticipate
                        </h2>

                        <div className="bg-amber-50 p-6 rounded-2xl border border-amber-100 not-prose space-y-4">
                            <div className="flex gap-3">
                                <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                                <p className="text-amber-900"><strong>Resistance to Change:</strong> The "human" element is often the hardest to upgrade. Culture consumes strategy for breakfast.</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                                <p className="text-amber-900"><strong>Legacy Systems:</strong> Old tech stacks that are too risky to replace overnight require a phased migration.</p>
                            </div>
                            <div className="flex gap-3">
                                <div className="w-2 h-2 rounded-full bg-amber-500 mt-2 shrink-0" />
                                <p className="text-amber-900"><strong>Budget Constraints:</strong> Digital transformation is an investment that takes time to show ROI.</p>
                            </div>
                        </div>


                        <div className="my-16 p-10 bg-gradient-to-br from-purple-50 to-white rounded-3xl border border-purple-100 shadow-lg text-center relative overflow-hidden not-prose">
                            <div className="absolute top-0 right-0 w-[200px] h-[200px] bg-purple-100 rounded-full blur-[80px] pointer-events-none opacity-50" />
                            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4 relative z-10">Start Your Transformation Journey</h3>
                            <p className="text-lg text-slate-600 mb-8 max-w-2xl mx-auto relative z-10">
                                We help traditional businesses modernize their technology stack with secure, scalable software solutions.
                            </p>
                            <Link
                                href="/services/custom-software"
                                className={getButtonClasses({ variant: 'primary', size: 'lg', className: 'bg-purple-600 hover:bg-purple-700 shadow-xl shadow-purple-200 hover:shadow-2xl hover:shadow-purple-300 relative z-10' })}
                            >
                                Consult Our Architects <ArrowRight className="ml-2 w-5 h-5 inline" />
                            </Link>
                        </div>
                    </div>
                </article>
            </div>
        </main>
    );
}
