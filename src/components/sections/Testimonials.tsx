'use client';

import { Quote, Star } from 'lucide-react';
import { motion } from 'framer-motion';

const testimonials = [
    {
        quote: "Working with Epsilon for 2 years. Patient inquiries went up significantly after they started managing our reels. Jaydeep bhai understands healthcare marketing like no other.",
        author: "Dr. D.P. Vora",
        role: "Orthopaedic Surgeon, Gujarat",
        initials: "DV",
        color: "bg-orange-100 text-orange-600",
        result: "📈 Result: 40+ monthly inquiries from Instagram"
    },
    {
        quote: "Mr Jaydeep is well experienced in Digital marketing. Shreeji Multispecialty Hospital tied up with Epsilon for last couple of years. He helped us in patient's footfall. Highly recommend for social media & Website development.",
        author: "Devam Dave",
        role: "Shreeji Multispecialty Hospital, Gujarat",
        initials: "DD",
        color: "bg-blue-100 text-blue-600",
        result: "📈 Result: OPD visits increased 3x in 60 days"
    },
    {
        quote: "Epsilon Technology is a one-stop solution for all digital marketing needs... they've helped our business scale like never before. Highly recommend them for businesses of any size!",
        author: "Dr. Hiral",
        role: "Cosmetologist, Gujarat",
        initials: "DH",
        color: "bg-purple-100 text-purple-600",
        result: "📈 Result: 30–50 monthly inquiries from social media"
    },
    {
        quote: "Our pediatric physiotherapy clinic saw a significant rise in patient inquiries and daily bookings after Epsilon started managing our Instagram reels and local marketing campaigns.",
        author: "Rainbow Pediatric Clinic",
        role: "Pediatric Physiotherapy, Gujarat",
        initials: "RP",
        color: "bg-teal-100 text-teal-600",
        result: "📈 Result: 3x OPD Patient Inquiries via Instagram"
    },
    {
        quote: "I received a very great experience with the services provided by Epsilon's team. They provided very accurate approach and also gave good ideas. Thank you so much jaydeepbhai and team.",
        author: "Healthcare Physiotherapy Clinic",
        role: "Physiotherapy Clinic, Gujarat",
        initials: "HP",
        color: "bg-green-100 text-green-600",
        result: "📈 Result: Direct WhatsApp inquiries daily within 45 days"
    },
    {
        quote: "Expert and easy to work with. Thoroughly enjoyed working with Mr Jaydeep and team. They know exactly what content doctors need.",
        author: "Dr. Dharmesh",
        role: "Medical Professional, Gujarat",
        initials: "DD",
        color: "bg-pink-100 text-pink-600",
        result: "📈 Result: Reel views went from 500 to 100k+ in 3 months"
    }
];

export function Testimonials() {
    // Creating 4 sets to ensure there is enough content to scroll seamlessly on even large screens
    const marqueeList = [...testimonials, ...testimonials, ...testimonials, ...testimonials];

    return (
        <section className="py-24 bg-slate-50 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-primary/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-[0%] left-[0%] w-[30%] h-[30%] bg-blue-400/5 rounded-full blur-3xl"></div>
            </div>

            <div className="w-full relative z-10 overflow-hidden">
                <div className="container mx-auto px-4 md:px-6 mb-16">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                        className="text-center max-w-3xl mx-auto"
                    >
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-6">
                            Trusted by Leading <span className="text-primary">Medical Professionals</span>
                        </h2>
                        <p className="text-lg text-slate-600">
                            Don't just take our word for it. Here's what doctors and clinics have to say about our growth strategies.
                        </p>
                    </motion.div>
                </div>

                {/* Marquee Row */}
                <div className="relative w-full flex overflow-hidden mask-gradient-sides">
                    {/* Gradient Fade Masks */}
                    <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none"></div>
                    <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none"></div>

                    <motion.div
                        className="flex gap-6 md:gap-8 px-4"
                        animate={{ x: ["0%", "-25%"] }}
                        transition={{
                            duration: 40,
                            repeat: Infinity,
                            ease: "linear",
                            repeatType: "loop"
                        }}
                        style={{ width: "max-content" }}
                    >
                        {marqueeList.map((t, i) => (
                            <div
                                key={i}
                                className="flex-shrink-0 w-[85vw] sm:w-[350px] md:w-[420px] bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300 group flex flex-col"
                            >
                                <div className="flex items-center gap-1 mb-6">
                                    {[...Array(5)].map((_, starIndex) => (
                                        <Star key={starIndex} size={16} className="fill-orange-400 text-orange-400" />
                                    ))}
                                </div>

                                <div className="relative mb-6 flex-1">
                                    <Quote className="absolute -top-2 -left-2 text-slate-100 w-12 h-12 transform -scale-x-100" />
                                    <p className="text-slate-700 text-base leading-relaxed relative z-10 italic line-clamp-5">
                                        &quot;{t.quote}&quot;
                                    </p>
                                </div>

                                {/* Result Badge — Fix 3 */}
                                <div className="bg-green-500 text-white text-sm font-semibold px-4 py-2 rounded-full mb-5 inline-block w-fit max-w-full">
                                    {t.result}
                                </div>

                                <div className="flex items-center gap-4 pt-4 border-t border-slate-50">
                                    <div className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shrink-0 ${t.color}`}>
                                        {t.initials}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-slate-900 leading-tight">{t.author}</h4>
                                        <p className="text-slate-500 text-sm">{t.role}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
