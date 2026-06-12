import { Metadata } from 'next';
import Link from 'next/link';
import { Smile, Search, MapPin, Camera, ClipboardCheck, Info, MousePointer2, Star } from 'lucide-react';
import { FAQ } from '@/components/sections/FAQ';

export const metadata: Metadata = {
    title: "Digital Marketing for Dental Doctors: Building a Bright Practice",
    description: "Learn how digital marketing for dental doctors can increase clinic footfall and build trust. A comprehensive guide on dental SEO, GMB, and social media for dentists.",
    keywords: ["digital marketing for dental doctors", "dental marketing agency", "SEO for dentists", "dental clinic marketing", "dentist social media marketing"],
    openGraph: {
        title: "Digital Marketing for Dental Doctors | Healthcare Growth Guide",
        description: "Helping dentists dominate local search and showcase their clinical excellence online.",
        url: "https://epsilon-technology.com/digital-marketing-for-dental-doctors/",
        images: ["/logo.webp"]
    },
    alternates: {
        canonical: 'https://epsilon-technology.com/digital-marketing-for-dental-doctors/',
    }
};

const dentalFaqs = [
    {
        question: "How does digital marketing for dental doctors help in getting more patients?",
        answer: "Most dental patients search locally using terms like 'dentist near me'. Digital marketing ensures your clinic is in the 'Top 3' of the Map Pack, provides visible proof of your work (Before/After photos), and builds trust through patient reviews. It turns a local search into an actual appointment."
    },
    {
        question: "Is 'Before and After' content effective for dental marketing?",
        answer: "It is one of the most powerful tools. Whether it is teeth whitening, braces, or implants, patients want to see the quality of your work. High-quality visual proof is a major conversion factor in digital marketing for dental doctors."
    },
    {
        question: "Should I focus on SEO or Instagram for my dental clinic?",
        answer: "Both. SEO is essential for capturing patients with immediate needs (like a toothache). Instagram is better for 'Aesthetic' dentistry (like smile makeovers) where patients are influenced by visual results over a longer period. A balanced approach works best."
    },
    {
        question: "What is the importance of Google Reviews for dentists?",
        answer: "Dentistry involves a high level of physical contact and trust. Potential patients will almost always read reviews to check for 'painless' treatment, hygiene, and the doctor's behavior before booking their first visit."
    },
    {
        question: "Can dental marketing help with high-value treatments like Implants?",
        answer: "Yes. High-value treatments require deeper education. Digital marketing allows you to create detailed guides and videos explaining the procedure, the benefits, and the long-term value, helping patients choose quality over the cheapest price."
    },
    {
        question: "How often should a dental clinic post on social media?",
        answer: "Consistency is more important than frequency. 2-3 high-quality, educational posts per week (including one patient testimonial or transformation) is better than daily generic posts."
    }
];

export default function DentalDoctorGuide() {
    return (
        <main className="min-h-screen bg-white">
            <section className="pt-32 pb-16 bg-blue-50/20 border-b border-blue-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                        <Smile size={14} /> Specialized Dentistry Resource
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        Education Pillar: <span className="text-blue-600">Digital Marketing for Dental Doctors</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                        A deep dive into how modern dentists can build a trusted brand, dominate local search, and showcase clinical excellence through digital channels.
                    </p>
                </div>
            </section>

            <article className="py-20 lg:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <div className="prose prose-lg prose-slate max-w-none text-slate-700">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-primary">What is Digital Marketing for Dental Doctors?</h2>
                        <p className="mb-6">
                            In an era where every second person has a smartphone, <strong>digital marketing for dental doctors</strong> is the heartbeat of a modern dental practice. It is the combination of search visibility, social media engagement, and reputation management that ensures a clinic is found when a patient is in need.
                        </p>
                        <p className="mb-6">
                            For a dental professional, this goes beyond simple flyers or nameplates. It involves creating a digital front door that is as clean, professional, and welcoming as their actual clinic. It is about educating the patient on oral health and positioning the doctor as a friendly, painless, and expert local provider.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">How Patients Search for Dental Treatments</h2>
                        <p className="mb-6">
                            Dental searches are predominantly local and often urgent. A patient with a sudden toothache will search for a "dentist near me" or a "24-hour dental clinic." However, for planned treatments like Invisalign, Smile Design, or Dental Implants, the patient's search journey is much longer.
                        </p>
                        <p className="mb-6">
                            These "aesthetic" patients spend a significant amount of time on Instagram and Google Maps looking at 'Before and After' photos. They check the doctor's specialization, the clinic's hygiene level through photos, and the specific feedback on treatment comfort.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">Common Marketing Challenges Faced by Dental Clinics</h2>
                        <p className="mb-6">
                            Dentists often face a 'commodity' trap where patients choose based on the lowest price rather than the quality of care.
                        </p>
                        <ul className="list-disc pl-6 space-y-4 mb-10 text-slate-600">
                            <li><strong>Fear Filter:</strong> Many people avoid dentists due to fear of pain. Marketing must actively combat this by showing 'painless' techniques and patient comfort.</li>
                            <li><strong>High Local Competition:</strong> In cities like Junagadh or Rajkot, there might be 5 dental clinics in the same square kilometer. Standing out requires a unique digital voice.</li>
                            <li><strong>Follow-up Dropouts:</strong> Dentistry often requires multiple visits (like Root Canals or Braces). Digital systems are needed to keep patients engaged throughout their treatment.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">How Digital Marketing Helps Dental Practice Growth</h2>
                        <p className="mb-6">
                            A strategic approach to <strong>digital marketing for dental doctors</strong> builds a self-sustaining referral engine. It moves the conversation from "price" to "value".
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 my-10 not-prose">
                            <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                                <Camera className="text-blue-600 mb-4" size={32} />
                                <h4 className="font-bold text-slate-900 mb-2">Visual Trust</h4>
                                <p className="text-sm text-slate-600">Showcasing real transformation photos and clinic hygiene standards.</p>
                            </div>
                            <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                                <MapPin className="text-blue-600 mb-4" size={32} />
                                <h4 className="font-bold text-slate-900 mb-2">Local Dominance</h4>
                                <p className="text-sm text-slate-600">Ranking #1 for local 'near me' searches to capture immediate intent.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">Key Services for Dentists</h2>
                        <div className="space-y-8">
                            <div className="flex gap-4">
                                <Search className="text-blue-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Dental SEO</h4>
                                    <p className="text-sm">Ranking for keywords like 'Root Canal Specialist' or 'Invisible Braces cost in Junction'. SEO provides steady, high-quality inquiries.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <MousePointer2 className="text-blue-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Google My Business</h4>
                                    <p className="text-sm">Managing reviews and clinic photos to dominate the local Map Pack.</p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <Star className="text-blue-500 shrink-0" />
                                <div>
                                    <h4 className="font-bold text-slate-900 mb-2">Reputation Management</h4>
                                    <p className="text-sm">Systematically gathering and showcasing 5-star patient reviews to build clinical authority.</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">Common Mistakes in Dental Marketing</h2>
                        <ul className="list-disc pl-6 space-y-4 mb-10 text-slate-600">
                            <li><strong>Using Stock Images:</strong> Patients want to see YOUR clinic and YOUR results, not model photos from a library.</li>
                            <li><strong>Ignoring Video content:</strong> Dental anxiety is best cured by seeing a video of the doctor explaining the treatment in a calm, friendly way.</li>
                            <li><strong>No Clear OPD Timings:</strong> Making it hard for patients to know when you are available.</li>
                        </ul>

                        <div className="my-16 p-8 bg-slate-950 rounded-3xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Summary for Professional Dentists</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Modern dentistry is as much about digital visibility as it is about clinical skill. By building a dominant local presence and showcasing your transformations, you can build a practice that thrives in the digital age.
                            </p>
                            <div className="flex gap-4">
                                <Link href="/doctor-marketing-in-junagadh" className="text-blue-400 font-bold hover:underline">Junagadh Dental Marketing</Link>
                                <Link href="/doctor-marketing-in-rajkot" className="text-blue-400 font-bold hover:underline">Rajkot Dental Marketing</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <FAQ customFaqs={dentalFaqs} />

            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Scaling Your Dental Practice</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-12">
                        Digital marketing for dental doctors is the bridge between a brilliant clinician and a patient in need of a smile. At Epsilon Technology, we specialize in helping dental clinics across Saurashtra build premium, visible, and trusted brands. We handle the complex digital landscape so you can focus on creating perfect smiles.
                    </p>
                    <div className="flex justify-center gap-8 text-sm font-bold opacity-60">
                        <span className="flex items-center gap-2"><Smile size={16} /> Patient-Focused</span>
                        <span className="flex items-center gap-2"><MapPin size={16} /> Locally Optimized</span>
                        <span className="flex items-center gap-2"><ClipboardCheck size={16} /> Results Driven</span>
                    </div>
                </div>
            </section>
        </main>
    );
}
