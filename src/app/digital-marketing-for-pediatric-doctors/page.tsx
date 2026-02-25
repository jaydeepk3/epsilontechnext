import { Metadata } from 'next';
import Link from 'next/link';
import { Baby, Search, MapPin, Smartphone, ClipboardCheck, Info, UserCheck, HeartPulse } from 'lucide-react';
import { FAQ } from '@/components/sections/FAQ';

export const metadata: Metadata = {
    metadataBase: new URL('https://epsilon-technology.com'),
    title: "Digital Marketing for Pediatric Doctors: Building Trust with Parents",
    description: "Learn how digital marketing for pediatric doctors can grow your clinic. A deep dive into pediatric SEO, local visibility, and trust-building for child healthcare.",
    keywords: ["digital marketing for pediatric doctors", "pediatric marketing agency", "SEO for pediatricians", "pediatric clinic marketing", "trust building in pediatrics"],
    openGraph: {
        title: "Digital Marketing for Pediatric Doctors | Professional Growth Guide",
        description: "Helping pediatricians build a reliable, visible, and trusted digital presence for parents.",
        url: "https://epsilon-technology.com/digital-marketing-for-pediatric-doctors/",
        images: ["/logo.png"]
    },
    alternates: {
        canonical: '/digital-marketing-for-pediatric-doctors/',
    }
};

const pediatricFaqs = [
    {
        question: "How do parents search for a pediatrician online today?",
        answer: "Parents prioritize proximity and trust. They often search for a 'pediatrician near me' or 'best child doctor in [City]' during times of minor illness or for routine vaccinations. They look at Google Map ratings, the doctor's age, and comments about the wait-time and bedside manner with the child."
    },
    {
        question: "Is social media effective for pediatric marketing?",
        answer: "Yes. Parents are highly active on social media looking for health advice. Sharing short, educational videos on topics like 'Common myths about childhood fever' or 'Vaccination schedules' builds immense trust and authority before a parent even visits the clinic."
    },
    {
        question: "What is the role of Local SEO in digital marketing for pediatric doctors?",
        answer: "Critical. In pediatrics, emergencies and quick consultations are common. A strong Local SEO presence ensures that during an urgent need, your clinic is the most visible and easiest to navigate to on Google Maps."
    },
    {
        question: "How can pediatricians manage their online reputation?",
        answer: "Systematically ask happy parents for reviews. Pay attention to feedback regarding clinic cleanliness and staff behavior. Responding to both positive and negative reviews shows that you care about the patient experience, which is vital for building parental trust."
    },
    {
        question: "Should I offer WhatsApp booking for my pediatric clinic?",
        answer: "Yes. For modern parents, convenience is a major factor. Integrated WhatsApp systems for booking or simple queries can significantly reduce friction and improve the clinic's local 'rating' in the eyes of parents."
    },
    {
        question: "What's the best content strategy for a child's doctor?",
        answer: "A combination of educational tips (safety first) and community engagement. Content that focuses on 'Prevention' and 'Wellness' builds a long-term authoritative brand rather than just targeting sick visits."
    }
];

export default function PediatricDoctorGuide() {
    return (
        <main className="min-h-screen bg-white">
            <section className="pt-32 pb-16 bg-blue-50/20 border-b border-blue-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-700 text-sm font-bold mb-6">
                        <Baby size={14} /> Child Healthcare Resource
                    </div>
                    <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                        Pillar Guide: <span className="text-blue-600">Digital Marketing for Pediatric Doctors</span>
                    </h1>
                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                        Understanding how child healthcare providers can build trust with modern parents, dominate local search, and provide digital value.
                    </p>
                </div>
            </section>

            <article className="py-20 lg:py-24">
                <div className="container mx-auto px-4 md:px-6 max-w-3xl">
                    <div className="prose prose-lg prose-slate max-w-none text-slate-700">
                        <h2 className="text-3xl font-bold text-slate-900 mb-6 font-primary">What is Digital Marketing for Pediatric Doctors?</h2>
                        <p className="mb-6">
                            In the digital age, a pediatrician is more than a doctor; they are a trusted partner to parents who are often overwhelmed with information. <strong>Digital marketing for pediatric doctors</strong> is the strategic practice of making that expertise discoverable, accessible, and trusted by families in the local community.
                        </p>
                        <p className="mb-6">
                            For a pediatric professional, digital marketing is the bridge that connects their clinical care to the frantic midnight search of a worried parent. It is about creating a digital environment that feels supportive, educational, and professionally authoritative.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">How Parents Search for Child Healthcare</h2>
                        <p className="mb-6">
                            Parental search behavior is unique because it is often time-sensitive and highly detailed. A parent might search for "treating childhood cough at home" before eventually searching for "top pediatrician on Zanzarda Road."
                        </p>
                        <p className="mb-6">
                            Trust in pediatrics is 'Trust by Expertise' and 'Trust by Reviews'. Parents look for doctors who have a stable, positive reputation and those who provide clear, simple health educational content. They value the ability to find a doctor’s clinic easily on Google Maps and check wait timings or OPD availability with a single click.
                        </p>

                        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">Marketing Challenges in Pediatrics</h2>
                        <p className="mb-6">
                            Building a successful pediatric practice through digital channels involves unique hurdles:
                        </p>
                        <ul className="list-disc pl-6 space-y-4 mb-10 text-slate-600">
                            <li><strong>The Trust Hurdle:</strong> Parents are incredibly protective. Building enough trust digitally for them to bring their child to you requires consistent, high-quality engagement.</li>
                            <li><strong>High Local Density:</strong> Most cities have many child doctors. Standing out requires more than just clinical skill; it requires a superior digital presence.</li>
                            <li><strong>Urgency:</strong> Pediatrics often involves urgent visits. Keeping your digital information (OPD times, location) 100% accurate is critical.</li>
                        </ul>

                        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">How Digital Marketing Helps Pediatric Practice Growth</h2>
                        <p className="mb-6">
                            The core goal of <strong>digital marketing for pediatric doctors</strong> is to build a community-centric brand. It moves the practice from being 'one of many' to being the 'preferred' voice for child health in the locality.
                        </p>
                        <div className="grid sm:grid-cols-2 gap-6 my-10 not-prose">
                            <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                                <UserCheck className="text-blue-600 mb-4" size={32} />
                                <h4 className="font-bold text-slate-900 mb-2">Authority First</h4>
                                <p className="text-sm text-slate-600">Providing medically-backed content that sets you apart as a local expert.</p>
                            </div>
                            <div className="p-6 bg-blue-50 border border-blue-100 rounded-2xl">
                                <MapPin className="text-blue-600 mb-4" size={32} />
                                <h4 className="font-bold text-slate-900 mb-2">Map Dominance</h4>
                                <p className="text-sm text-slate-600">Ensuring your clinic is the first result for local neighborhood searches.</p>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">Key Digital Services for Pediatricians</h2>
                        <div className="space-y-10">
                            <div className="flex gap-6 items-start">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Search /></div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">Pediatric Specific SEO</h4>
                                    <p className="text-slate-600">Ranking for symptoms and specialty cures (e.g., 'Newborn jaundice treatment in [City]'). SEO builds long-term organic traffic.</p>
                                </div>
                            </div>
                            <div className="flex gap-6 items-start">
                                <div className="bg-blue-100 p-3 rounded-full text-blue-600"><Smartphone /></div>
                                <div>
                                    <h4 className="text-xl font-bold text-slate-900 mb-2">Mobile Optimization</h4>
                                    <p className="text-slate-600">Ensuring your website works perfectly on mobile phones, where 90% of parental searches happen.</p>
                                </div>
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-slate-900 mt-16 mb-6">Common Mistakes Parents Notice</h2>
                        <ul className="list-disc pl-6 space-y-4 mb-10 text-slate-600">
                            <li><strong>Old or Incorrect Timings:</strong> A parent who visits your clinic during 'posted' hours to find it closed will never return.</li>
                            <li><strong>Cold Digital Persona:</strong> Overly dry, medical content. Parents look for warmth and empathy as much as skill.</li>
                            <li><strong>No Clear Contact Action:</strong> Making it hard to call the clinic or book an appointment on the go.</li>
                        </ul>

                        <div className="my-16 p-8 bg-slate-950 rounded-3xl text-white">
                            <h3 className="text-2xl font-bold mb-4">Summary for Leading Pediatricians</h3>
                            <p className="text-slate-400 mb-8 leading-relaxed">
                                Build a practice that stays 'top of mind' for parents. By provides value before the visit through education and ease of access, you build a sustainable, trusted practice.
                            </p>
                            <div className="flex gap-4">
                                <Link href="/doctor-marketing-in-junagadh" className="text-blue-400 font-bold hover:underline">Junagadh Pediatric Marketing</Link>
                                <Link href="/doctor-marketing-in-rajkot" className="text-blue-400 font-bold hover:underline">Rajkot Pediatric Marketing</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </article>

            <FAQ customFaqs={pediatricFaqs} />

            <section className="py-24 bg-slate-50 border-t border-slate-100">
                <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
                    <HeartPulse className="text-red-500 mx-auto mb-6" size={48} />
                    <h2 className="text-3xl font-bold text-slate-900 mb-6">Advancing Child Health Digitally</h2>
                    <p className="text-lg text-slate-600 leading-relaxed mb-12">
                        Digital marketing for pediatric doctors is about supporting family health in the digital sphere. At Epsilon Technology, we specialize in helping pediatric practices across Gujarat build visible, trusted, and community-centric brands. We handle the digital tools so you can focus on the health of the next generation.
                    </p>
                    <div className="flex justify-center gap-8 text-sm font-bold opacity-60">
                        <span className="flex items-center gap-2"><Baby size={16} /> Child-Centric</span>
                        <span className="flex items-center gap-2"><MapPin size={16} /> Locally Driven</span>
                        <span className="flex items-center gap-2"><ClipboardCheck size={16} /> Growth Focused</span>
                    </div>
                </div>
            </section>
        </main>
    );
}
