"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import { AvailabilityBanner } from "@/components/ui/AvailabilityBanner";
import {
  ArrowRight,
  Check,
  CheckCircle2,
  ChevronDown,
  Clock,
  Globe,
  Loader2,
  MessageCircle,
  Phone,
  Sparkles,
  Star,
  X,
  MessageSquare,
  Award,
  Code2,
  Users,
  Smartphone,
  TrendingUp,
  ShoppingCart,
  Shield,
  Zap,
  AlertCircle,
  Lock,
  Calendar,
  FileText,
  Headphones,
  DollarSign,
  Target,
  BarChart3,
  Rocket,
  Search,
  Layers,
} from "lucide-react";

const WA = "918160881461";
const WA_MSG = (msg: string) =>
  `https://wa.me/${WA}?text=${encodeURIComponent(msg)}`;
const CALENDLY = "https://calendly.com/jaydeep-epsilontechnology/30min";

// ─── SERVICES DATA ────────────────────────────────────────────────────────────
const services = [
  {
    id: "web",
    icon: Globe,
    emoji: "🌐",
    title: "Website Development",
    href: "/services/web-development/",
    tagline: "Fast, mobile-first, SEO-ready websites",
    description:
      "We build high-performance websites using Next.js & React that rank on Google, look stunning on every device, and convert visitors into customers.",
    highlights: [
      "Google PageSpeed 95+",
      "Mobile-First Design",
      "SEO-Ready Structure",
      "Delivered in 2–8 weeks",
    ],
    color: "from-blue-600 to-indigo-700",
    tabColor: "bg-blue-600",
    lightBg: "bg-blue-50",
    lightText: "text-blue-600",
    ringColor: "ring-blue-500",
    packages: [
      {
        name: "Starter",
        duration: "2–3 weeks",
        highlight: false,
        features: [
          "3–5 Page Responsive Website",
          "Mobile-First Design",
          "Basic SEO Setup",
          "Contact Form Integration",
          "Domain & Hosting Guidance",
          "1 Month Free Support",
        ],
      },
      {
        name: "Professional",
        duration: "3–5 weeks",
        highlight: true,
        features: [
          "Up to 15 Pages",
          "Premium Custom UI/UX",
          "CMS Integration (Next.js/WP)",
          "Advanced SEO Optimization",
          "WhatsApp Chat Integration",
          "Lead Capture Forms",
          "3 Months Free Support",
        ],
      },
      {
        name: "Enterprise",
        duration: "6–8 weeks",
        highlight: false,
        features: [
          "Unlimited Pages",
          "Custom Next.js Architecture",
          "E-commerce / Payment Integration",
          "Database & API Development",
          "Premium Animations & UI",
          "Priority 6 Months Support",
        ],
      },
    ],
  },
  {
    id: "mobile",
    icon: Smartphone,
    emoji: "📱",
    title: "Mobile App Development",
    href: "/services/mobile-app-development/",
    tagline: "iOS & Android apps that users love",
    description:
      "From idea to App Store — we build fast, feature-rich mobile apps in React Native and Flutter that scale with your business.",
    highlights: [
      "iOS + Android",
      "React Native / Flutter",
      "App Store Submission",
      "4–16 week delivery",
    ],
    color: "from-violet-600 to-purple-700",
    tabColor: "bg-violet-600",
    lightBg: "bg-violet-50",
    lightText: "text-violet-600",
    ringColor: "ring-violet-500",
    packages: [
      {
        name: "Starter",
        duration: "4–6 weeks",
        highlight: false,
        features: [
          "Single Platform (iOS or Android)",
          "Basic UI/UX Design",
          "User Authentication",
          "Push Notifications",
          "App Store Submission",
          "1 Month Bug Support",
        ],
      },
      {
        name: "Professional",
        duration: "6–10 weeks",
        highlight: true,
        features: [
          "Cross-Platform (React Native)",
          "Custom UI/UX Design",
          "Social Login",
          "Payment Gateway",
          "In-App Analytics",
          "Real-Time Notifications",
          "3 Months Support",
        ],
      },
      {
        name: "Enterprise",
        duration: "10–16 weeks",
        highlight: false,
        features: [
          "High-Performance Cross-Platform",
          "Custom Node.js Backend",
          "Real-Time Chat & Sockets",
          "Complex Database Architecture",
          "Offline Mode Capability",
          "6 Months Priority Support",
        ],
      },
    ],
  },
  {
    id: "doctor",
    icon: TrendingUp,
    emoji: "🏥",
    title: "Digital Marketing",
    href: "/digital-marketing/",
    tagline: "More patients. More appointments. Guaranteed.",
    description:
      "Specialized digital marketing for doctors and clinics — Google Ads, Meta Ads, SEO, and social media management that brings you real patients.",
    highlights: [
      "Patient-Focused Strategy",
      "Google & Meta Ads",
      "SEO + Social Media",
      "Monthly Reports",
    ],
    color: "from-emerald-600 to-teal-700",
    tabColor: "bg-emerald-600",
    lightBg: "bg-emerald-50",
    lightText: "text-emerald-600",
    ringColor: "ring-emerald-500",
    packages: [
      {
        name: "Starter",
        duration: "per month",
        highlight: false,
        features: [
          "Google My Business Optimization",
          "8 Social Media Posts/Month",
          "Basic SEO Setup",
          "Monthly Performance Report",
          "Dedicated Account Manager",
        ],
      },
      {
        name: "Growth",
        duration: "per month",
        highlight: true,
        features: [
          "15 Posts/Month (Reels + Static)",
          "Meta & Google Ad Campaigns",
          "Patient Review Management",
          "2 Blogs/Month for SEO",
          "Bi-Weekly Strategy Calls",
          "Conversion Tracking Setup",
        ],
      },
      {
        name: "Premium",
        duration: "per month",
        highlight: false,
        features: [
          "Omnichannel Marketing Strategy",
          "Advanced Ad Budget Management",
          "Video Reels Production",
          "Premium SEO Campaign",
          "Content Calendar (4 Blogs/Month)",
          "Real-Time Analytics Dashboard",
        ],
      },
    ],
  },
  {
    id: "ecommerce",
    icon: ShoppingCart,
    emoji: "🛒",
    title: "eCommerce Development",
    href: "/services/ecommerce-development/",
    tagline: "Online stores that sell 24/7",
    description:
      "We build fast, conversion-optimized eCommerce stores on Shopify, WooCommerce, or custom platforms that turn browsers into buyers.",
    highlights: [
      "Shopify / WooCommerce",
      "Payment Gateway Setup",
      "Mobile-Optimized",
      "3–10 week delivery",
    ],
    color: "from-orange-500 to-rose-600",
    tabColor: "bg-orange-500",
    lightBg: "bg-orange-50",
    lightText: "text-orange-600",
    ringColor: "ring-orange-500",
    packages: [
      {
        name: "Starter",
        duration: "3–4 weeks",
        highlight: false,
        features: [
          "Shopify / WooCommerce Setup",
          "Up to 50 Products",
          "Payment Gateway Integration",
          "Essential Shipping Config",
          "Mobile-Optimized Design",
          "1 Month Support",
        ],
      },
      {
        name: "Professional",
        duration: "4–6 weeks",
        highlight: true,
        features: [
          "Custom Theme Design",
          "Up to 500 Products",
          "CRM Integration",
          "Abandoned Cart Recovery",
          "Advanced Inventory Management",
          "3 Months Support",
        ],
      },
      {
        name: "Enterprise",
        duration: "6–10 weeks",
        highlight: false,
        features: [
          "Headless Commerce Architecture",
          "Unlimited Products",
          "Multi-Vendor / Marketplace",
          "Custom Checkout Flows",
          "Subscription Models",
          "Priority 6 Months SLA",
        ],
      },
    ],
  },
  {
    id: "whatsapp",
    icon: MessageCircle,
    emoji: "💬",
    title: "WhatsApp Business API",
    href: "/product/whatsapp-business-api/",
    tagline: "Automate conversations. Convert more leads.",
    description:
      "Our WhatsApp Business API platform helps you automate customer conversations, send bulk campaigns, and manage leads — all from one dashboard.",
    highlights: [
      "Bulk Broadcasts",
      "Chatbot Builder",
      "CRM Integration",
      "Green Tick Assistance",
    ],
    color: "from-green-500 to-emerald-600",
    tabColor: "bg-green-500",
    lightBg: "bg-green-50",
    lightText: "text-green-600",
    ringColor: "ring-green-500",
    packages: [
      {
        name: "Basic",
        duration: "per month",
        highlight: false,
        features: [
          "1,000 Conversations/Month",
          "Chatbot Flow Builder",
          "Bulk Message Broadcasts",
          "Basic Analytics Dashboard",
          "WhatsApp Green Tick Assistance",
        ],
      },
      {
        name: "Business",
        duration: "per month",
        highlight: true,
        features: [
          "5,000 Conversations/Month",
          "Advanced Chatbot Flows",
          "CRM Integration",
          "Multi-Agent Team Inbox",
          "Campaign Scheduling",
          "Priority Support",
        ],
      },
      {
        name: "Enterprise",
        duration: "per month",
        highlight: false,
        features: [
          "Unlimited Conversations",
          "AI-Powered Smart Replies",
          "Custom API Integrations",
          "Dedicated Account Manager",
          "White-Label Option",
          "24/7 Priority Support",
        ],
      },
    ],
  },
];

// ─── TESTIMONIALS ─────────────────────────────────────────────────────────────
const testimonials = [
  {
    name: "Thariq H.",
    role: "Product Manager",
    company: "FieldR",
    country: "🇺🇸 USA",
    result: "Sports Tech App — Launched on Time",
    text: "Jaydeep's team delivered an exceptional app for our sports tech startup. Passionate leadership and deep understanding of our business goals. The founder is personally involved — that's rare.",
    stars: 5,
  },
  {
    name: "Restaurant Owner",
    role: "Founder",
    company: "Brundhavan",
    country: "🇺🇸 USA",
    result: "Restaurant App — Delivered in 3 Weeks",
    text: "One heck of an amazing guy — understands and delivers so fast. Created an app for our restaurant seamlessly. Communication was flawless across time zones.",
    stars: 5,
  },
  {
    name: "CTO",
    role: "Chief Technology Officer",
    company: "Tech Client",
    country: "🇺🇸 USA",
    result: "Custom SaaS Platform — Exceeded Expectations",
    text: "Professional approach with an enthusiastic work ethic. The code quality was high and the team proactively flagged issues before they became problems. Looking forward to working together again!",
    stars: 5,
  },
  {
    name: "Palak Sheth",
    role: "Founder",
    company: "Long-term Client",
    country: "🇮🇳 India",
    result: "3-Year Partnership — 12+ Projects",
    text: "Three years of working with Epsilon Technology. Not only skilled but also exceptionally patient. They treat your business like their own. I highly recommend them to anyone serious about digital growth.",
    stars: 5,
  },
  {
    name: "Deep Karia",
    role: "Business Owner",
    company: "Local Guide",
    country: "🇮🇳 India",
    result: "Digital Marketing — Strong ROI",
    text: "One of the best companies I have worked with. The perfect blend of tech expertise & honesty. No hidden costs, no surprises — they deliver what they promise.",
    stars: 5,
  },
  {
    name: "Harsh Patel",
    role: "Owner",
    company: "ShubhCeramics",
    country: "🇮🇳 India",
    result: "eCommerce Store — Selling in Week 1",
    text: "Hard working individuals, who give creative opinions and respond in no time to all queries. Our online store was live in under 4 weeks and we made our first sale on day 3.",
    stars: 5,
  },
];

// ─── FAQS ─────────────────────────────────────────────────────────────────────
const faqs = [
  {
    q: "Are you based in India? Will there be communication issues?",
    a: "Yes, our core team is based in India — which is exactly why our clients get senior-level development at 40–60% less than US/UK agency rates. Our founder Jaydeep personally manages every project and is available on Zoom, WhatsApp, and email. We schedule calls during your business hours (EST, GMT, GST). Over 40% of our clients are from the USA, UK, and UAE with zero communication complaints.",
  },
  {
    q: "Do I pay the full amount upfront?",
    a: "Never. We work on milestone-based payments: 50% at project start, 50% at delivery. For larger projects, we offer 3-milestone structures (30% / 40% / 30%). You never pay for work you haven't approved.",
  },
  {
    q: "Who owns the code and IP when the project is done?",
    a: "You do. 100%. We transfer full ownership of all code, designs, and assets to you on final delivery. We also sign an NDA before any work begins if you require it. You're never locked into us.",
  },
  {
    q: "Can I see a demo or mockup before committing?",
    a: "Yes. After your free 30-minute strategy call, we often share a design mockup or wireframe before any payment. You can evaluate our thinking before you decide to proceed.",
  },
  {
    q: "What if I'm not happy with the work?",
    a: "We include unlimited revisions during the build phase until you're satisfied. Post-launch, every project includes a free support period (1–6 months depending on package). In 7 years, we have never had a client dispute that wasn't resolved.",
  },
  {
    q: "How long will my project take?",
    a: "Website projects: 2–8 weeks. Mobile apps: 4–16 weeks. eCommerce: 3–10 weeks. We give you a fixed delivery date at the start and we honour it. Weekly progress updates are included — you're never left guessing.",
  },
  {
    q: "Do you work with international clients?",
    a: "Yes — this is our specialty. We accept payments via Stripe, Wise, and PayPal in USD ($), GBP (£), and AED (د.إ). We sign US/UK-style contracts, provide invoices for your accounting, and are fully set up for remote international partnerships.",
  },
  {
    q: "Can I speak to a past client before I commit?",
    a: "Absolutely. We can connect you with clients who have agreed to be references. You can also watch video testimonials from our clients on our portfolio and social media pages.",
  },
  {
    q: "What happens after my project goes live?",
    a: "Every project includes a post-launch support period. We fix any bugs, monitor performance, and train you on how to manage your product. Long-term maintenance retainers are available for clients who want ongoing development.",
  },
  {
    q: "How do I get started?",
    a: "Click 'Book a Free Strategy Call' anywhere on this page. We'll spend 30 minutes understanding your goals and give you an honest assessment of what's needed — even if it means telling you Epsilon isn't the right fit. No hard sell, no obligation.",
  },
];

// ─── CASE STUDIES ─────────────────────────────────────────────────────────────
const successVideos = [
  {
    title: "Divine Interior",
    industry: "Interior Design & Furniture",
    result: "Interior Branding",
    platform: "Instagram",
    embedUrl: "https://www.instagram.com/p/DZxITQLzYDj/embed",
    avatar: "DI",
    color: "from-amber-500 to-orange-600",
    bgLight: "bg-amber-50 text-amber-600",
    description:
      "Owner Heet Parekh shares how Epsilon Technology's lead generation strategies delivered high-value interior project enquiries.",
  },
  {
    title: "Rainbow Pediatric Clinic",
    industry: "Pediatric Physiotherapy",
    result: "Daily OPD Patient Visit",
    platform: "Instagram",
    embedUrl: "https://www.instagram.com/p/DZ65VRWxQbZ/embed",
    avatar: "RP",
    color: "from-blue-500 to-indigo-600",
    bgLight: "bg-blue-50 text-blue-600",
    description:
      "Rainbow Pediatric Physiotherapy Clinic explains their massive jump in patient bookings and social media engagement.",
  },
  {
    title: "Piyu Gruh Udhyog",
    industry: "Food",
    result: "Daily Bulk Orders",
    platform: "Instagram",
    embedUrl: "https://www.instagram.com/p/DaQbftaoOVC/embed",
    avatar: "ET",
    color: "from-purple-500 to-violet-600",
    bgLight: "bg-purple-50 text-purple-600",
    description:
      "Founder Jaydeep Kataria breaks down the exact digital marketing & lead generation funnel we build for clients.",
  },
  {
    title: "Ontapp",
    industry: "eCommerce Project (Canada)",
    result: "📈 Successful Launch",
    platform: "LinkedIn",
    embedUrl:
      "https://www.linkedin.com/embed/feed/update/urn:li:ugcPost:7310298732124606464?compact=1",
    avatar: "ON",
    color: "from-emerald-500 to-teal-600",
    bgLight: "bg-emerald-50 text-emerald-600",
    description:
      "Detailed video case study of how we built and scaled the Ontapp eCommerce platform for our Canadian client.",
  },
];

// ─── TECH STACK ───────────────────────────────────────────────────────────────
const techStack = [
  { name: "Next.js", category: "Web", icon: "▲", why: "3× faster than WordPress" },
  { name: "React Native", category: "Mobile", icon: "⚛", why: "iOS + Android in one codebase" },
  { name: "Flutter", category: "Mobile", icon: "◆", why: "Premium native performance" },
  { name: "Node.js", category: "Backend", icon: "⬡", why: "Handles 10,000+ requests/sec" },
  { name: "PostgreSQL", category: "Database", icon: "🐘", why: "Reliable, scalable data" },
  { name: "Shopify", category: "eCommerce", icon: "🛍", why: "Best conversion rate platform" },
  { name: "Stripe", category: "Payments", icon: "💳", why: "Trusted by 4M+ businesses" },
  { name: "AWS / Vercel", category: "Cloud", icon: "☁", why: "99.99% uptime guarantee" },
];

// ─── TYPES ────────────────────────────────────────────────────────────────────
type Service = (typeof services)[0];

// ─── APPLY MODAL ──────────────────────────────────────────────────────────────
function ApplyModal({ svc, onClose }: { svc: Service; onClose: () => void }) {
  const [form, setForm] = useState({
    name: "",
    mobile: "",
    email: "",
    business: "",
    message: "",
    budget: "",
    package: `${svc.title} — Custom Project`,
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [err, setErr] = useState("");

  async function submit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.mobile || !form.budget) {
      setErr("Please enter your name, mobile number, and budget.");
      return;
    }
    setStatus("loading");
    setErr("");
    try {
      const res = await fetch("/api/web-dev-lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const d = await res.json();
      if (d.status === "success") setStatus("success");
      else {
        setStatus("error");
        setErr(d.message || "Something went wrong.");
      }
    } catch {
      setStatus("error");
      setErr("Network error. Please call us directly.");
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-md overflow-hidden max-h-[95vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className={`bg-gradient-to-r ${svc.color} p-5 text-white`}>
          <button onClick={onClose} className="absolute top-4 right-4 text-white/70 hover:text-white">
            <X size={20} />
          </button>
          <div className="flex items-center gap-3">
            <span className="text-3xl">{svc.emoji}</span>
            <div>
              <p className="text-white/60 text-xs uppercase tracking-widest">Applying for</p>
              <h3 className="font-bold text-lg leading-tight">{svc.title}</h3>
              <p className="text-white/80 text-sm font-semibold italic">Custom Project Quote</p>
            </div>
          </div>
          <p className="text-white/60 text-xs mt-3">
            We&apos;ll call you within 24 hours with your free custom quote.
          </p>
        </div>

        <div className="p-5">
          {status === "success" ? (
            <div className="text-center py-6">
              <div className="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Check size={28} className="text-green-600" />
              </div>
              <h4 className="text-lg font-bold text-slate-900 mb-1">Application Received! 🎉</h4>
              <p className="text-slate-500 text-sm mb-1">
                Thank you, <strong>{form.name}</strong>!
              </p>
              <p className="text-slate-500 text-sm mb-5">
                We&apos;ll call <strong>{form.mobile}</strong> within{" "}
                <strong>24 hours</strong>.
              </p>
              <div className="flex gap-3 justify-center">
                <a
                  href={WA_MSG(`Hi, I applied for ${svc.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-green-500 text-white px-4 py-2.5 rounded-xl font-semibold text-sm hover:bg-green-600 transition-colors"
                >
                  <MessageSquare size={15} /> WhatsApp
                </a>
                <button
                  onClick={onClose}
                  className="px-4 py-2.5 rounded-xl font-semibold bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors text-sm"
                >
                  Close
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={submit} className="space-y-3">
              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">
                    Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    value={form.name}
                    onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
                    required
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900"
                  />
                </div>
                <div>
                  <label className="text-xs font-semibold text-slate-600 block mb-1">
                    Mobile <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    placeholder="+1 555 000..."
                    value={form.mobile}
                    onChange={(e) => setForm((p) => ({ ...p, mobile: e.target.value }))}
                    required
                    className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900"
                  />
                </div>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1">Email</label>
                <input
                  type="email"
                  placeholder="you@company.com"
                  value={form.email}
                  onChange={(e) => setForm((p) => ({ ...p, email: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1">
                  Business Name
                </label>
                <input
                  type="text"
                  placeholder="e.g. My Store"
                  value={form.business}
                  onChange={(e) => setForm((p) => ({ ...p, business: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900"
                />
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1">
                  Project Budget <span className="text-red-500">*</span>
                </label>
                <select
                  value={form.budget}
                  onChange={(e) => setForm((p) => ({ ...p, budget: e.target.value }))}
                  required
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900 bg-white"
                >
                  <option value="" disabled>
                    Select approximate budget
                  </option>
                  <option value="Under $1,500 (Starter)">
                    Under $1,500 (Starter)
                  </option>
                  <option value="$1,500 – $5,000 (Professional)">
                    $1,500 – $5,000 (Professional)
                  </option>
                  <option value="$5,000 – $15,000 (Business)">
                    $5,000 – $15,000 (Business)
                  </option>
                  <option value="$15,000+ (Enterprise / Custom)">
                    $15,000+ (Enterprise / Custom)
                  </option>
                </select>
              </div>
              <div>
                <label className="text-xs font-semibold text-slate-600 block mb-1">
                  Additional details
                </label>
                <textarea
                  rows={2}
                  placeholder="Any specific requirements..."
                  value={form.message}
                  onChange={(e) => setForm((p) => ({ ...p, message: e.target.value }))}
                  className="w-full px-3 py-2.5 rounded-xl border border-slate-200 focus:ring-2 focus:ring-blue-500 outline-none text-sm text-slate-900 resize-none"
                />
              </div>
              {err && (
                <div className="flex items-center gap-2 text-red-600 bg-red-50 border border-red-200 rounded-xl px-3 py-2.5 text-xs">
                  <AlertCircle size={14} />
                  {err}
                </div>
              )}
              <button
                type="submit"
                disabled={status === "loading"}
                className={`w-full py-3.5 rounded-xl font-bold text-white flex items-center justify-center gap-2 transition-all bg-gradient-to-r ${svc.color} hover:opacity-90 disabled:opacity-60 text-sm`}
              >
                {status === "loading" ? (
                  <>
                    <Loader2 size={16} className="animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Sparkles size={16} />
                    Get My Free Quote
                  </>
                )}
              </button>
              <p className="text-center text-xs text-slate-400">
                🔒 Confidential. NDA available on request. No spam.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

// ─── FAQ ITEM ─────────────────────────────────────────────────────────────────
function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
      <button
        className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors text-sm"
        onClick={() => setOpen(!open)}
      >
        <span>{q}</span>
        <ChevronDown
          size={18}
          className={`text-slate-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>
      {open && (
        <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
          {a}
        </div>
      )}
    </div>
  );
}

// ─── CLIENT LOGOS ─────────────────────────────────────────────────────────────
const clientLogos = [
  { src: "/clientlogo/FieldR Icon-(BLACK) 1.webp", name: "FieldR", pad: "p-4" },
  { src: "/clientlogo/Sangani-Hospital-Logo-Gujarati 2 copy.webp", name: "Sangani Hospital", pad: "p-3" },
  { src: "/clientlogo/aiow.webp", name: "Aiow", pad: "p-2" },
  { src: "/clientlogo/dhartiagro.webp", name: "Dharti Agro", pad: "p-3" },
  { src: "/clientlogo/trimurti_hospital.webp", name: "Trimurti Hospitals", pad: "p-0 scale-125" },
  { src: "/clientlogo/aan_group.webp", name: "AAN Group", pad: "p-2" },
  { src: "/clientlogo/bhadja_sir_logo_2.webp", name: "Bhadja Sir", pad: "p-2" },
  { src: "/clientlogo/bovican_logo.webp", name: "Bovican", pad: "p-2" },
  { src: "/clientlogo/cibos.webp", name: "Cibos", pad: "p-2" },
  { src: "/clientlogo/cvm.webp", name: "CVM", pad: "p-2" },
  { src: "/clientlogo/d_narayanji.webp", name: "D Narayanji", pad: "p-2" },
  { src: "/clientlogo/enicet.webp", name: "Enicet", pad: "p-2" },
  { src: "/clientlogo/gujarat_police.webp", name: "Gujarat Police", pad: "p-2" },
  { src: "/clientlogo/healthcare.webp", name: "Healthcare", pad: "p-2" },
  { src: "/clientlogo/lalkrupa_casting.webp", name: "Lalkrupa Casting", pad: "p-2" },
  { src: "/clientlogo/medicos_foundation.webp", name: "Medicos Foundation", pad: "p-2" },
  { src: "/clientlogo/motexo.webp", name: "Motexo", pad: "p-2" },
  { src: "/clientlogo/piyu_gruh_udhyog.webp", name: "Piyu Gruh Udhyog", pad: "p-2" },
  { src: "/clientlogo/rainbow_logo_3-02_-_copy-removebg-preview.webp", name: "Rainbow", pad: "p-2" },
  { src: "/clientlogo/swami_temple.webp", name: "Swami Temple", pad: "p-2" },
  { src: "/clientlogo/windson_solar.webp", name: "Windson Solar", pad: "p-2" },
];

// ─── MAIN ─────────────────────────────────────────────────────────────────────
export default function HomeLandingClient() {
  const [activeTab, setActiveTab] = useState(0);
  const [activePkgIndex, setActivePkgIndex] = useState(1);
  const [modal, setModal] = useState<{ svc: Service } | null>(null);
  const [activeVideo, setActiveVideo] = useState(0);
  const servicesRef = useRef<HTMLElement>(null);
  const activeSvc = services[activeTab];

  const scrollToServices = () =>
    servicesRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <>
      {modal && <ApplyModal svc={modal.svc} onClose={() => setModal(null)} />}

      <main className="bg-white overflow-x-hidden">

        {/* ══════════════════════════════ HERO ══════════════════════════════ */}
        <section className="relative min-h-screen flex items-center bg-gradient-to-br from-slate-950 via-blue-950 to-indigo-950 overflow-hidden pt-20">
          {/* Grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] bg-[size:60px_60px] pointer-events-none" />
          {/* Glow orbs */}
          <div className="absolute top-20 right-0 w-[700px] h-[700px] bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[300px] bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="container mx-auto px-4 py-24 relative z-10">
            <div className="max-w-5xl mx-auto text-center">

              {/* Trust badges */}
              <div className="flex flex-wrap justify-center items-center gap-3 mb-10">
                <div className="inline-flex items-center gap-2 bg-emerald-500/15 border border-emerald-400/30 text-emerald-300 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm">
                  <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
                  Accepting New Clients — 2 Spots Left This Month
                </div>
                <Link
                  href="/meta-certified-partner/"
                  className="inline-flex items-center gap-2 bg-blue-500/15 hover:bg-blue-500/25 border border-blue-400/30 text-blue-300 px-4 py-2 rounded-full text-xs font-semibold backdrop-blur-sm transition-all"
                >
                  <svg className="w-3.5 h-3.5 text-blue-400 shrink-0" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M16.92 5c-1.4 0-2.67.6-3.6 1.6C12.38 5.6 11.11 5 9.7 5c-3.13 0-5.69 2.5-5.69 5.6 0 3.1 2.56 5.6 5.69 5.6 1.4 0 2.67-.6 3.6-1.6.93 1 2.2 1.6 3.61 1.6 3.14 0 5.7-2.5 5.7-5.6 0-3.1-2.56-5.6-5.7-5.6zm.01 9.2c-1.99 0-3.6-1.6-3.6-3.6 0-2 1.61-3.6 3.6-3.6 1.98 0 3.59 1.6 3.59 3.6 0 2-1.61 3.6-3.59 3.6zM9.7 14.2c-1.99 0-3.6-1.6-3.6-3.6 0-2 1.61-3.6 3.6-3.6 1.98 0 3.6 1.6 3.6 3.6 0 2-1.61 3.6-3.6 3.6z" />
                  </svg>
                  Meta Ads Excellence Impact Leader →
                </Link>
              </div>

              {/* H1 — Outcome-first, curiosity-driven */}
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-[1.1] tracking-tight">
                Your Business Deserves a{" "}
                <span className="bg-gradient-to-r from-blue-400 via-cyan-300 to-emerald-400 bg-clip-text text-transparent">
                  Website That Works
                </span>{" "}
                as Hard as You Do
              </h1>

              {/* Sub-headline — addresses the real fear */}
              <p className="text-lg md:text-xl text-slate-300 mb-10 max-w-3xl mx-auto leading-relaxed">
                We build high-performance websites, mobile apps, and eCommerce stores for businesses in the{" "}
                <strong className="text-white">USA, UK, UAE, and Canada</strong> that generate leads, drive revenue,
                and make your brand look like a market leader — not a startup.
              </p>

              {/* Social proof bar */}
              <div className="flex flex-wrap justify-center items-center gap-x-6 gap-y-3 mb-12 text-slate-400 text-sm">
                <div className="flex items-center gap-1.5">
                  <div className="flex">{[1, 2, 3, 4, 5].map((i) => (<Star key={i} size={13} className="text-yellow-400 fill-yellow-400" />))}</div>
                  <span className="text-white font-semibold">4.9/5</span>
                  <span>on Google & Upwork</span>
                </div>
                <span className="w-px h-4 bg-slate-700 hidden sm:block" />
                <div className="flex items-center gap-1.5">
                  <CheckCircle2 size={13} className="text-emerald-400" />
                  <strong className="text-white">100+</strong>&nbsp;Projects Delivered
                </div>
                <span className="w-px h-4 bg-slate-700 hidden sm:block" />
                <div className="flex items-center gap-1.5">
                  <Globe size={13} className="text-blue-400" />
                  Clients in <strong className="text-white ml-1">🇺🇸 🇬🇧 🇦🇪 🇨🇦</strong>
                </div>
                <span className="w-px h-4 bg-slate-700 hidden sm:block" />
                <div className="flex items-center gap-1.5">
                  <Zap size={13} className="text-yellow-400" />
                  Reply within <strong className="text-white ml-1">4 Hours</strong>
                </div>
              </div>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                <a
                  href={CALENDLY}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white font-bold px-9 py-4 rounded-2xl text-lg transition-all hover:shadow-2xl hover:shadow-blue-500/40 hover:-translate-y-0.5"
                >
                  <Calendar size={20} />
                  Book a Free Strategy Call
                </a>
                <button
                  onClick={scrollToServices}
                  className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold px-9 py-4 rounded-2xl text-lg transition-all hover:-translate-y-0.5 backdrop-blur-sm"
                >
                  <Sparkles size={20} />
                  Explore Our Services
                </button>
              </div>

              {/* Service quick-chips */}
              <div className="flex flex-wrap justify-center gap-3">
                {services.map((s, i) => {
                  const Icon = s.icon;
                  return (
                    <button
                      key={s.id}
                      onClick={() => { setActiveTab(i); setActivePkgIndex(1); scrollToServices(); }}
                      className="flex items-center gap-2 bg-white/5 hover:bg-white/15 border border-white/10 hover:border-white/30 text-slate-300 hover:text-white px-4 py-2.5 rounded-full text-sm font-medium transition-all"
                    >
                      <Icon size={15} /> {s.title}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
            <ChevronDown size={24} className="text-slate-500" />
          </div>
        </section>

        {/* ══════════════════════════════ OUTCOME STATS ══════════════════════════════ */}
        <section className="bg-gradient-to-r from-blue-700 via-indigo-600 to-blue-700 py-12 relative overflow-hidden">
          <div className="absolute inset-0 bg-white/5 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:20px_20px] opacity-20" />
          <div className="container mx-auto px-4 relative z-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
              {[
                { icon: Award, value: "7+", label: "Years Building Products", color: "text-amber-400" },
                { icon: BarChart3, value: "100+", label: "Projects Shipped", color: "text-emerald-400" },
                { icon: Users, value: "97%", label: "On-Time Delivery Rate", color: "text-fuchsia-400" },
                { icon: Star, value: "4.9★", label: "Client Satisfaction", color: "text-yellow-400" },
              ].map(({ icon: Icon, value, label, color }) => (
                <div key={label} className="text-center group flex flex-col items-center">
                  <div className="mb-4 p-4 rounded-2xl bg-white/10 backdrop-blur-md shadow-lg border border-white/20 group-hover:-translate-y-1 transition-transform duration-300">
                    <Icon size={32} className={`${color} drop-shadow-[0_0_15px_rgba(255,255,255,0.4)]`} />
                  </div>
                  <div className="text-4xl md:text-5xl font-extrabold text-white mb-2 drop-shadow-md tracking-tight">{value}</div>
                  <div className="text-blue-100 text-sm md:text-base font-medium uppercase tracking-wider">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ TRUSTED BY ══════════════════════════════ */}
        <section className="py-16 bg-slate-50 border-y border-slate-200 overflow-hidden relative">
          <div className="container mx-auto px-4 mb-10 text-center relative z-10">
            <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">Social Proof</p>
            <h2 className="text-slate-800 text-2xl md:text-3xl font-bold mb-3">
              Trusted by Businesses in <span className="text-blue-600">🇺🇸 🇬🇧 🇦🇪 🇨🇦</span>
            </h2>
            <div className="w-16 h-1 bg-blue-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-500 text-sm max-w-xl mx-auto">
              From funded startups in California to clinics in Dubai — 100+ businesses trust us to deliver.
            </p>
          </div>

          <div className="relative">
            <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-slate-50 to-transparent z-10 pointer-events-none" />
            <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-slate-50 to-transparent z-10 pointer-events-none" />
            <div
              className="flex gap-10 items-center"
              style={{ animation: "marqueeScroll 30s linear infinite", width: "max-content" }}
            >
              {[...Array(2)].map((_, pass) => (
                <div key={pass} className="flex gap-10 items-center shrink-0">
                  {clientLogos.map((logo) => (
                    <div
                      key={logo.name + pass}
                      className={`flex items-center justify-center h-20 w-48 rounded-2xl bg-white shadow-sm border border-slate-200 ${logo.pad} shrink-0 hover:shadow-xl hover:-translate-y-1 transition-all duration-300`}
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={logo.src} alt={logo.name} className="max-h-full max-w-full object-contain" />
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          <style>{`
            @keyframes marqueeScroll {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
          `}</style>
        </section>

        {/* ══════════════════════════════ PAIN POINTS ══════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <p className="text-red-500 font-bold text-xs uppercase tracking-widest mb-3">Sound Familiar?</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                The 3 Problems Silently Killing Your Business Growth
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                Every month you operate without the right digital infrastructure, your competitors are capturing the leads that should be yours.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {[
                {
                  icon: Target,
                  num: "01",
                  color: "text-red-500",
                  bg: "bg-red-50 border-red-100",
                  title: "Your website isn't generating leads",
                  desc: "You have a site — but it's not ranking on Google, it loads slowly, and visitors leave within seconds. Your competitors are capturing the leads that should be yours.",
                  loss: "Avg. lost revenue: $3,000–$15,000/month",
                },
                {
                  icon: Smartphone,
                  num: "02",
                  color: "text-orange-500",
                  bg: "bg-orange-50 border-orange-100",
                  title: "You have no mobile app presence",
                  desc: "78% of users prefer mobile. If you don't have an app — or your app feels outdated — you're losing customers to competitors who invested in the experience.",
                  loss: "Avg. retention drop: 2.3× vs app users",
                },
                {
                  icon: DollarSign,
                  num: "03",
                  color: "text-purple-500",
                  bg: "bg-purple-50 border-purple-100",
                  title: "You've been burned by a cheap dev agency",
                  desc: "Late deliveries, poor quality, zero communication. You invested time, money, and trust — and got nothing. Now you're cautious about trying again.",
                  loss: "Avg. sunk cost: $2,000–$8,000 per failed project",
                },
              ].map(({ icon: Icon, num, color, bg, title, desc, loss }) => (
                <div key={num} className={`rounded-3xl p-7 border-2 ${bg}`}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`w-10 h-10 rounded-2xl bg-white flex items-center justify-center shadow-sm`}>
                      <Icon size={22} className={color} />
                    </div>
                    <span className={`text-xs font-bold uppercase tracking-widest ${color}`}>Problem {num}</span>
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed mb-4">{desc}</p>
                  <div className={`text-xs font-semibold ${color} bg-white/80 border border-current/20 rounded-xl px-3 py-2 inline-block`}>
                    📉 {loss}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ HOW WE SOLVE THEM ══════════════════════════════ */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="text-center mb-14">
              <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-3">The Solution</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                How Epsilon Turns Your Digital Gaps Into Growth Engines
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We&apos;ve solved these exact problems for 100+ businesses. Here&apos;s our precise approach.
              </p>
            </div>

            <div className="space-y-6">
              {[
                {
                  problem: "Invisible online → Competitor captures your leads",
                  solution: "High-performance website with Google PageSpeed 95+ and SEO-ready architecture",
                  outcome: "Rank higher. Load faster. Convert better.",
                  icon: Search,
                  gradient: "from-blue-500/20 to-indigo-500/10",
                  accent: "border-blue-500/30",
                },
                {
                  problem: "No mobile presence → Losing 78% of potential customers",
                  solution: "Cross-platform iOS + Android app built in React Native or Flutter",
                  outcome: "Be on every device your customers use.",
                  icon: Smartphone,
                  gradient: "from-violet-500/20 to-purple-500/10",
                  accent: "border-violet-500/30",
                },
                {
                  problem: "Past bad experience → Fear of investing again",
                  solution: "Milestone-based payments, weekly updates, NDA, and founder-direct communication",
                  outcome: "Zero risk. Full transparency. Delivered on time.",
                  icon: Shield,
                  gradient: "from-emerald-500/20 to-teal-500/10",
                  accent: "border-emerald-500/30",
                },
              ].map(({ problem, solution, outcome, icon: Icon, gradient, accent }) => (
                <div key={problem} className={`rounded-2xl bg-gradient-to-r ${gradient} border ${accent} p-6 md:p-8 flex flex-col md:flex-row items-start gap-6`}>
                  <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                    <Icon size={24} className="text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="text-xs text-red-400 font-semibold bg-red-500/10 border border-red-500/20 px-2.5 py-1 rounded-full">❌ {problem}</span>
                    </div>
                    <h3 className="text-white font-bold text-lg mb-1">✅ {solution}</h3>
                    <p className="text-emerald-400 font-semibold text-sm">{outcome}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-10">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl text-base hover:bg-blue-50 transition-all hover:-translate-y-0.5 shadow-xl"
              >
                <Calendar size={18} />
                Get a Free Strategy Call — No Obligation
              </a>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ TABBED SERVICES ══════════════════════════════ */}
        <section ref={servicesRef} id="services" className="py-16 bg-slate-50">
          <div className="container mx-auto px-4">
            <div className="text-center mb-10">
              <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2">Our Services</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-2">
                What Would You Like to Build?
              </h2>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                All projects include a{" "}
                <strong>free 30-min strategy call</strong>, milestone payments, and NDA on request.
              </p>
            </div>

            {/* Tab bar */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {services.map((s, i) => {
                const Icon = s.icon;
                const isActive = activeTab === i;
                return (
                  <button
                    key={s.id}
                    onClick={() => { setActiveTab(i); setActivePkgIndex(1); }}
                    className={`flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold transition-all duration-300 border ${isActive
                      ? `${s.tabColor} text-white shadow-lg border-transparent scale-105`
                      : "bg-white text-slate-600 hover:text-slate-900 border-slate-200 hover:border-slate-300 hover:shadow-md"
                      }`}
                  >
                    <Icon size={16} />
                    <span className="hidden sm:inline">{s.title}</span>
                    <span className="sm:hidden">{s.emoji}</span>
                  </button>
                );
              })}
            </div>

            <div className="bg-white rounded-3xl shadow-xl border border-slate-100 overflow-hidden">
              {services.map((svc, sIdx) => {
                const isActive = activeTab === sIdx;
                return (
                  <div key={svc.id} className={isActive ? "block" : "hidden"}>
                    {/* Service header */}
                    <div className={`bg-gradient-to-r ${svc.color} p-6 md:p-8 text-white`}>
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                        <div className="flex items-start gap-4">
                          <div className="w-14 h-14 bg-white/15 rounded-2xl flex items-center justify-center shrink-0">
                            <span className="text-3xl">{svc.emoji}</span>
                          </div>
                          <div>
                            <h3 className="text-2xl md:text-3xl font-bold mb-1">{svc.title}</h3>
                            <p className="text-white/80 text-sm md:text-base max-w-lg">{svc.description}</p>
                          </div>
                        </div>
                        <div className="flex flex-wrap gap-2 md:shrink-0">
                          {svc.highlights.map((h) => (
                            <span key={h} className="flex items-center gap-1.5 bg-white/10 border border-white/20 text-white/90 text-xs font-medium px-3 py-1.5 rounded-full">
                              <Check size={11} className="text-white" /> {h}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Service details */}
                    <div className="p-6 md:p-8">
                      <div className="max-w-3xl mx-auto text-center">
                        <h4 className="text-2xl font-bold text-slate-900 mb-1">
                          Choose your {svc.title} package
                        </h4>
                        <p className="text-slate-500 text-sm mb-6">
                          Not sure? Book a free call — we&apos;ll recommend the right fit for your budget and goals.
                        </p>

                        <div className="inline-flex p-1 bg-slate-100 rounded-xl mb-6 border border-slate-200">
                          {svc.packages.map((pkg, pIdx) => {
                            const isPkgActive = activePkgIndex === pIdx;
                            return (
                              <button
                                key={pkg.name}
                                type="button"
                                onClick={() => setActivePkgIndex(pIdx)}
                                className={`px-4 py-2 rounded-lg text-xs font-bold transition-all duration-200 ${isPkgActive
                                  ? `${svc.tabColor} text-white shadow-sm`
                                  : "text-slate-600 hover:text-slate-900 hover:bg-white/50"
                                  }`}
                              >
                                {pkg.name}
                              </button>
                            );
                          })}
                        </div>

                        <div className="grid sm:grid-cols-2 gap-3 mb-6 text-left">
                          {svc.packages[activePkgIndex].features.map((f, i) => (
                            <div key={i} className="flex items-start gap-2.5 p-3.5 bg-slate-50 rounded-2xl border border-slate-100">
                              <CheckCircle2 size={18} className={`${svc.lightText} shrink-0 mt-0.5`} />
                              <span className="text-slate-700 font-medium text-xs sm:text-sm">{f}</span>
                            </div>
                          ))}
                        </div>

                        <div className="flex flex-col sm:flex-row gap-3 justify-center">
                          <button
                            onClick={() => setModal({ svc })}
                            className={`inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-white text-base transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 bg-gradient-to-r ${svc.color}`}
                          >
                            <Sparkles size={18} /> Get a Custom Quote
                          </button>
                          <a
                            href={WA_MSG(`Hi, I'm interested in ${svc.title} (${svc.packages[activePkgIndex].name} Package)`)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-2xl font-bold text-slate-900 bg-white border-2 border-slate-200 text-base hover:bg-slate-50 transition-all hover:border-slate-300"
                          >
                            <MessageSquare size={18} /> Chat on WhatsApp
                          </a>
                        </div>

                        <div className="mt-6 flex flex-wrap justify-center gap-4 text-xs sm:text-sm text-slate-500">
                          <div className="flex items-center gap-1.5">
                            <Clock size={14} className="text-blue-500" />
                            {svc.packages[activePkgIndex].duration} Average Delivery
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Shield size={14} className="text-green-500" />
                            Milestone Payments — Never Pay Upfront in Full
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Lock size={14} className="text-purple-500" />
                            NDA Available on Request
                          </div>
                        </div>

                        <div className="mt-6 pt-5 border-t border-slate-100">
                          <Link
                            href={svc.href}
                            className={`text-center text-sm font-semibold flex items-center justify-center gap-1.5 transition-colors ${svc.lightText} hover:underline`}
                          >
                            View Full Service Details <ArrowRight size={14} />
                          </Link>
                        </div>
                      </div>
                    </div>

                    <div className="mt-0 flex flex-col sm:flex-row items-center justify-between gap-4 bg-slate-50 rounded-b-3xl px-5 py-4 border-t border-slate-100">
                      <div className="flex items-center gap-3 text-sm text-slate-600">
                        <Phone size={16} className="text-slate-400 shrink-0" />
                        <span>Not sure where to start? <strong className="text-slate-900">Book a free call:</strong></span>
                        <a href="tel:+918160881461" className="font-bold text-blue-600 hover:underline">+91 81608 81461</a>
                      </div>
                      <a
                        href={WA_MSG(`Hi, I want to know more about ${svc.title}.`)}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-xl text-sm transition-colors shrink-0"
                      >
                        <MessageSquare size={15} /> WhatsApp Us
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ WHY CHOOSE EPSILON ══════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">Why Epsilon</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
                We&apos;re Not Just Another Dev Agency
              </h2>
              <p className="text-slate-500 max-w-2xl mx-auto">
                We built every policy below because of a real client experience. These aren&apos;t promises — they&apos;re our standard operating procedures.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: Layers,
                  color: "bg-blue-600",
                  title: "Milestone Payments. Always.",
                  desc: "50% to start, 50% on delivery. You never pay for work you haven't seen and approved. No exceptions.",
                },
                {
                  icon: FileText,
                  color: "bg-violet-600",
                  title: "NDA Signed Before We Begin",
                  desc: "Your idea stays yours. We sign a mutual NDA on request — before any discovery call if needed. You own all IP.",
                },
                {
                  icon: Users,
                  color: "bg-emerald-600",
                  title: "Founder-Direct Communication",
                  desc: "Jaydeep, our founder, is personally involved in every project. You're not handed off to a junior PM.",
                },
                {
                  icon: Clock,
                  color: "bg-amber-500",
                  title: "4-Hour Response SLA",
                  desc: "During business hours, your messages are answered within 4 hours. We schedule weekly update calls at your timezone.",
                },
                {
                  icon: Headphones,
                  color: "bg-rose-600",
                  title: "6-Month Post-Launch Support",
                  desc: "Our Enterprise projects include 6 months of free bug fixes and support. We don't disappear after delivery.",
                },
                {
                  icon: Globe,
                  color: "bg-indigo-600",
                  title: "US/UK-Style Contracts",
                  desc: "We issue formal contracts with clear scope, timelines, and deliverables. Accepted payment: USD, GBP, AED via Stripe/Wise.",
                },
              ].map(({ icon: Icon, color, title, desc }) => (
                <div key={title} className="bg-slate-50 rounded-2xl p-6 border border-slate-100 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 group">
                  <div className={`w-12 h-12 ${color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 text-base mb-2">{title}</h3>
                  <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ CASE STUDIES ══════════════════════════════ */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">Real Results</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                Client Success Stories — In Their Own Words
              </h2>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                Watch video proof from real clients across India, USA, UK & UAE.
              </p>
            </div>

            {/* Google Rating Badge */}
            <div className="flex justify-center mb-12">
              <a
                href="https://www.google.com/search?q=epsilon+technology+junagadh#mpd=~8897672357773143821/customers/reviews"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-5 bg-white border-2 border-yellow-200 rounded-3xl px-8 py-5 shadow-lg hover:shadow-2xl hover:border-yellow-300 transition-all duration-300 hover:-translate-y-1"
              >
                <svg className="w-10 h-10 shrink-0" viewBox="0 0 48 48" fill="none">
                  <path d="M43.6 20.5H24v7.6h11.3C33.9 33.3 29.5 36 24 36c-6.6 0-12-5.4-12-12s5.4-12 12-12c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.3 29.3 4 24 4 12.9 4 4 12.9 4 24s8.9 20 20 20c11 0 19.6-7.7 19.6-20 0-1.2-.1-2.4-.4-3.5z" fill="#FFC107" />
                  <path d="M6.3 14.7l6.6 4.8C14.5 16 18.9 13 24 13c3 0 5.7 1.1 7.8 2.9l5.7-5.7C34.1 6.3 29.3 4 24 4 16.3 4 9.6 8.3 6.3 14.7z" fill="#FF3D00" />
                  <path d="M24 44c5.2 0 9.9-1.9 13.5-5l-6.2-5.2C29.5 35.3 26.9 36 24 36c-5.5 0-9.8-3.6-11.3-8.6L6 32.3C9.3 39 16 44 24 44z" fill="#4CAF50" />
                  <path d="M43.6 20.5H24v7.6h11.3C34.5 31 31.8 33.1 29.3 34.8l6.2 5.2C40.5 36.5 44 30.8 44 24c0-1.2-.1-2.4-.4-3.5z" fill="#1565C0" />
                </svg>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-3xl font-extrabold text-slate-900 leading-none">4.9</span>
                    <div className="flex gap-0.5">{[1,2,3,4,5].map(s => <Star key={s} size={20} className="text-yellow-400 fill-yellow-400" />)}</div>
                  </div>
                  <p className="text-slate-500 text-sm font-medium">on <strong className="text-slate-800">Google Reviews</strong> · 35+ verified reviews</p>
                </div>
                <div className="hidden sm:flex items-center gap-1.5 bg-blue-600 text-white text-xs font-bold px-4 py-2 rounded-full group-hover:bg-blue-700 transition-colors ml-2">
                  See All Reviews <ArrowRight size={12} />
                </div>
              </a>
            </div>

            {/* Video Case Studies */}
            <div className="grid lg:grid-cols-12 gap-8 items-stretch">
              <div className="lg:col-span-7 bg-slate-900 rounded-3xl overflow-hidden shadow-xl border border-slate-800 flex flex-col pt-5">
                <div className="px-6 mb-4 flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm shrink-0 bg-gradient-to-br ${successVideos[activeVideo].color} text-white`}>
                      {successVideos[activeVideo].avatar}
                    </div>
                    <div className="text-left">
                      <h3 className="text-white font-bold text-base leading-tight">{successVideos[activeVideo].title}</h3>
                      <p className="text-slate-400 text-xs">{successVideos[activeVideo].industry}</p>
                    </div>
                  </div>
                  <span className={`text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider ${
                    successVideos[activeVideo].platform === "Instagram"
                      ? "bg-pink-500/10 text-pink-400 border border-pink-500/20"
                      : "bg-blue-500/10 text-blue-400 border border-blue-500/20"
                  }`}>
                    {successVideos[activeVideo].platform}
                  </span>
                </div>
                <div className="flex-1 bg-black flex items-center justify-center relative min-h-[500px] sm:min-h-[650px] py-6">
                  <iframe
                    key={activeVideo}
                    src={successVideos[activeVideo].embedUrl}
                    className="w-full max-w-[350px] h-[550px] sm:h-[620px] border-none rounded-xl bg-white shadow-2xl mx-auto"
                    allowFullScreen
                    scrolling="no"
                    allow="encrypted-media"
                  />
                </div>
              </div>

              <div className="lg:col-span-5 flex flex-col justify-between gap-5">
                <div className="space-y-3">
                  <h3 className="text-slate-900 font-bold text-lg mb-3">Watch Client Success Stories</h3>
                  {successVideos.map((video, idx) => {
                    const isActive = activeVideo === idx;
                    return (
                      <button
                        key={idx}
                        onClick={() => setActiveVideo(idx)}
                        className={`w-full text-left p-4 rounded-2xl border transition-all duration-300 flex items-center gap-3 ${isActive
                          ? "bg-blue-50 border-blue-500 shadow-md shadow-blue-500/5 ring-1 ring-blue-500/30"
                          : "bg-white hover:bg-slate-50 border-slate-200 hover:border-slate-300"
                          }`}
                      >
                        <div className={`w-10 h-10 rounded-full shrink-0 flex items-center justify-center font-bold text-sm bg-gradient-to-br ${video.color} text-white`}>
                          {video.avatar}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex justify-between items-start gap-1">
                            <p className="font-bold text-slate-900 text-sm leading-tight truncate">{video.title}</p>
                            <span className="text-[10px] text-slate-400 shrink-0">{video.platform}</span>
                          </div>
                          <p className="text-slate-500 text-xs truncate mt-0.5">{video.industry}</p>
                          <span className={`inline-block text-[10px] font-bold px-2 py-0.5 rounded-full mt-2 ${video.bgLight}`}>
                            {video.result}
                          </span>
                        </div>
                      </button>
                    );
                  })}
                </div>

                <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-5 flex flex-col items-center justify-center text-center">
                  <div className="flex gap-1 mb-2">{[1,2,3,4,5].map(s => <Star key={s} size={20} className="text-yellow-400 fill-yellow-400" />)}</div>
                  <h4 className="text-slate-900 font-bold text-sm mb-1">Happy with our work?</h4>
                  <p className="text-slate-500 text-xs mb-3 max-w-xs">Your Google review helps other businesses find and trust us. Under 60 seconds!</p>
                  <a
                    href="https://g.page/r/CbetrSe6znc4EAI/review"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white font-bold px-5 py-2.5 rounded-xl transition-all text-xs hover:scale-[1.02] shadow-sm"
                  >
                    Write a Google Review
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ DEVELOPMENT PROCESS ══════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-5xl">
            <div className="text-center mb-14">
              <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">How It Works</p>
              <h2 className="text-3xl font-bold text-slate-900">
                From First Call to Live Product — Here&apos;s Exactly What Happens
              </h2>
              <p className="text-slate-500 text-sm mt-3 max-w-2xl mx-auto">
                No ambiguity. No surprises. You know exactly what&apos;s happening at every stage.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 lg:grid-cols-6">
              {[
                {
                  step: "01",
                  icon: Calendar,
                  color: "bg-blue-600",
                  title: "Free Strategy Call",
                  when: "Day 1",
                  desc: "30-min call where we understand your goals, budget, and timeline. You get an honest recommendation — even if we're not the right fit.",
                },
                {
                  step: "02",
                  icon: FileText,
                  color: "bg-indigo-600",
                  title: "Proposal & NDA",
                  when: "Day 2–3",
                  desc: "We send a detailed scope document with fixed price, timeline, and deliverables. NDA signed before any sensitive info is shared.",
                },
                {
                  step: "03",
                  icon: Sparkles,
                  color: "bg-violet-600",
                  title: "Design & Approval",
                  when: "Week 1–2",
                  desc: "We create wireframes and mockups. You see exactly how your product will look before a single line of code is written.",
                },
                {
                  step: "04",
                  icon: Code2,
                  color: "bg-purple-600",
                  title: "Development",
                  when: "Week 2–N",
                  desc: "Weekly progress updates via Zoom or WhatsApp. You approve each milestone before we move to the next phase.",
                },
                {
                  step: "05",
                  icon: Search,
                  color: "bg-rose-600",
                  title: "QA & Testing",
                  when: "Final Week",
                  desc: "We test on all devices and browsers. You review on a live staging environment and request final tweaks.",
                },
                {
                  step: "06",
                  icon: Rocket,
                  color: "bg-emerald-600",
                  title: "Launch & Support",
                  when: "Go Live",
                  desc: "We deploy, monitor performance, and train your team. Post-launch support included for 1–6 months.",
                },
              ].map(({ step, icon: Icon, color, title, when, desc }, i) => (
                <div key={step} className="md:col-span-1 lg:col-span-2 relative">
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100 h-full hover:shadow-md transition-all hover:-translate-y-0.5">
                    <div className="flex items-center gap-3 mb-3">
                      <div className={`w-10 h-10 ${color} rounded-xl flex items-center justify-center shrink-0 shadow-md`}>
                        <Icon size={18} className="text-white" />
                      </div>
                      <div>
                        <span className="text-xs font-bold text-slate-400 uppercase tracking-widest block">{step}</span>
                        <span className="text-xs font-semibold text-blue-600">{when}</span>
                      </div>
                    </div>
                    <h3 className="font-bold text-slate-900 text-base mb-2">{title}</h3>
                    <p className="text-slate-500 text-xs leading-relaxed">{desc}</p>
                  </div>
                  {i < 5 && (
                    <div className="hidden lg:block absolute top-5 -right-3 z-10 text-slate-300">
                      <ArrowRight size={20} />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ TECH STACK ══════════════════════════════ */}
        <section className="py-16 bg-slate-50 border-y border-slate-200">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="text-center mb-10">
              <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">Built With</p>
              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-3">
                Enterprise-Grade Tech Stack
              </h2>
              <p className="text-slate-500 text-sm max-w-xl mx-auto">
                We use the same technologies as Airbnb, Notion, and Shopify — battle-tested for scale, speed, and security. Written for your non-technical reference.
              </p>
            </div>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {techStack.map(({ name, category, icon, why }) => (
                <div key={name} className="bg-white rounded-2xl p-4 border border-slate-200 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group text-center">
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">{icon}</div>
                  <div className="font-bold text-slate-900 text-sm">{name}</div>
                  <div className="text-xs text-blue-600 font-semibold mt-0.5 mb-2">{category}</div>
                  <div className="text-xs text-slate-500 leading-relaxed">{why}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ TESTIMONIALS ══════════════════════════════ */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-14">
              <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">Verified Reviews</p>
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-3">
                What Our Clients Say — With Names, Countries & Results
              </h2>
              <p className="text-slate-500 text-sm max-w-md mx-auto">
                These are real clients. Real reviews. With real outcomes.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {testimonials.map((t, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  {/* Stars */}
                  <div className="flex gap-0.5 mb-4">
                    {[1,2,3,4,5].map(s => <Star key={s} size={14} className="text-yellow-400 fill-yellow-400" />)}
                  </div>
                  {/* Quote */}
                  <p className="text-slate-700 text-sm leading-relaxed italic flex-1 mb-5">
                    &ldquo;{t.text}&rdquo;
                  </p>
                  {/* Result pill */}
                  <div className="mb-4">
                    <span className="inline-flex items-center gap-1.5 text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-100 px-3 py-1.5 rounded-full">
                      <Check size={11} className="text-emerald-500" /> {t.result}
                    </span>
                  </div>
                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-slate-100">
                    <div
                      className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0"
                      style={{ background: `hsl(${i * 55 + 200}, 65%, 50%)` }}
                    >
                      {t.name[0]}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900 text-sm leading-tight">{t.name}</p>
                      <p className="text-slate-500 text-xs">{t.role}, {t.company}</p>
                      <p className="text-xs text-slate-400">{t.country}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ RISK REVERSAL ══════════════════════════════ */}
        <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-950 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
          <div className="container mx-auto px-4 max-w-5xl relative z-10">
            <div className="text-center mb-14">
              <p className="text-emerald-400 font-bold text-xs uppercase tracking-widest mb-3">Zero Risk</p>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                We Remove Every Reason Not to Start
              </h2>
              <p className="text-slate-400 max-w-2xl mx-auto">
                We know what holds businesses back. We&apos;ve built every one of these guarantees because a real client told us they needed it.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-5">
              {[
                {
                  icon: DollarSign,
                  color: "bg-emerald-500/20 border-emerald-500/30",
                  iconBg: "bg-emerald-500",
                  title: "Milestone-Based Payments",
                  desc: "50% at kickoff. 50% at delivery. For larger projects: 30% / 40% / 30%. You never pay for unapproved work.",
                },
                {
                  icon: FileText,
                  color: "bg-blue-500/20 border-blue-500/30",
                  iconBg: "bg-blue-500",
                  title: "NDA & Full IP Ownership",
                  desc: "We sign an NDA before any discovery call if you need it. 100% of the code, designs, and assets transfer to you on delivery. No lock-in.",
                },
                {
                  icon: Users,
                  color: "bg-violet-500/20 border-violet-500/30",
                  iconBg: "bg-violet-500",
                  title: "Founder-Led, Not Outsourced",
                  desc: "Jaydeep Kataria — our founder — personally reviews and manages every project. You get senior attention, not a junior developer.",
                },
                {
                  icon: Headphones,
                  color: "bg-amber-500/20 border-amber-500/30",
                  iconBg: "bg-amber-500",
                  title: "1–6 Months Post-Launch Support",
                  desc: "Every package includes free bug fixes and monitoring after launch. We don't take your money and disappear.",
                },
                {
                  icon: Calendar,
                  color: "bg-rose-500/20 border-rose-500/30",
                  iconBg: "bg-rose-500",
                  title: "Free 30-Min Strategy Call First",
                  desc: "Before you commit a single dollar, we spend 30 minutes understanding your goals — and we'll be honest if we think you need something different.",
                },
                {
                  icon: Globe,
                  color: "bg-indigo-500/20 border-indigo-500/30",
                  iconBg: "bg-indigo-600",
                  title: "International Payment & Contracts",
                  desc: "USD, GBP, AED accepted via Stripe, Wise, and PayPal. Formal contracts with clear deliverables, written in plain English.",
                },
              ].map(({ icon: Icon, color, iconBg, title, desc }) => (
                <div key={title} className={`rounded-2xl bg-gradient-to-br ${color} border p-6 flex items-start gap-4`}>
                  <div className={`w-12 h-12 ${iconBg} rounded-2xl flex items-center justify-center shrink-0`}>
                    <Icon size={22} className="text-white" />
                  </div>
                  <div>
                    <h3 className="font-bold text-white text-base mb-2">{title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-8 py-4 rounded-2xl text-base hover:bg-blue-50 transition-all hover:-translate-y-0.5 shadow-xl"
              >
                <Calendar size={18} />
                Book Your Free 30-Min Call — Zero Obligation
              </a>
              <p className="text-slate-500 text-xs mt-4">No hard sell. No spam. Just an honest conversation about your project.</p>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ WHO WE WORK WITH ══════════════════════════════ */}
        <section className="py-16 bg-white border-t border-slate-100">
          <div className="container mx-auto px-4 max-w-4xl">
            <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
              <div className="bg-white rounded-3xl p-8 border-2 border-emerald-100 shadow-xl shadow-emerald-900/5 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-emerald-100 rounded-2xl flex items-center justify-center mb-6">
                  <CheckCircle2 size={24} className="text-emerald-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">We&apos;re the right fit if you are…</h3>
                <ul className="space-y-4">
                  {[
                    "A business owner ready to invest $1,500+ in professional digital infrastructure",
                    "A funded startup looking for a reliable, communicative tech partner",
                    "A healthcare provider who wants measurable patient growth",
                    "An international business wanting US/UK-quality work at a fair price",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <CheckCircle2 size={18} className="text-emerald-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 font-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white rounded-3xl p-8 border-2 border-red-50 shadow-xl shadow-red-900/5 hover:-translate-y-1 transition-transform">
                <div className="w-12 h-12 bg-red-100 rounded-2xl flex items-center justify-center mb-6">
                  <X size={24} className="text-red-600" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4">We&apos;re probably not the right fit if…</h3>
                <ul className="space-y-4">
                  {[
                    "You need a $50 website or are comparing us only on price",
                    "You want an equity swap instead of paying for development",
                    "You&apos;re building a hobby project with no go-to-market plan",
                    "You need someone to build something unethical or illegal",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <X size={18} className="text-red-500 shrink-0 mt-0.5" />
                      <span className="text-slate-600 font-medium text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* ══════════════════════════════ FAQ ══════════════════════════════ */}
        <section className="py-20 bg-slate-50">
          <div className="container mx-auto px-4 max-w-2xl">
            <div className="text-center mb-12">
              <p className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-3">FAQs</p>
              <h2 className="text-3xl font-bold text-slate-900 mb-3">
                Questions Every Smart Business Owner Asks Before Hiring Us
              </h2>
              <p className="text-slate-500 text-sm">
                Real objections. Honest answers.
              </p>
            </div>
            <div className="space-y-3">
              {faqs.map((f) => <FAQItem key={f.q} q={f.q} a={f.a} />)}
            </div>
          </div>

          {/* FAQ Schema */}
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((f) => ({
                  "@type": "Question",
                  name: f.q,
                  acceptedAnswer: { "@type": "Answer", text: f.a },
                })),
              }),
            }}
          />
        </section>

        {/* ══════════════════════════════ AVAILABILITY BANNER ══════════════════════════════ */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <AvailabilityBanner variant="full" />
          </div>
        </section>

        {/* ══════════════════════════════ FINAL CTA ══════════════════════════════ */}
        <section className="py-24 bg-gradient-to-br from-blue-700 via-blue-600 to-indigo-700 relative overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]" />
          {/* Glow */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-white/5 rounded-full blur-3xl" />

          <div className="container mx-auto px-4 text-center relative z-10 max-w-4xl">
            {/* Scarcity pill */}
            <div className="inline-flex items-center gap-2 bg-white/15 border border-white/25 text-white px-5 py-2 rounded-full text-sm font-semibold mb-8">
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              We Take On 4 New Projects Per Month — 2 Spots Remaining
            </div>

            <h2 className="text-3xl md:text-5xl font-bold text-white mb-5 leading-tight">
              Ready to Build Something That Actually Grows Your Business?
            </h2>
            <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto leading-relaxed">
              Whether you&apos;re in Dubai, London, New York, or Toronto — book a free 30-minute strategy call. No sales pitch. Just an honest conversation about what you need.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
              <a
                href={CALENDLY}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-white text-blue-700 font-bold px-10 py-4 rounded-2xl text-lg hover:bg-blue-50 transition-all hover:-translate-y-0.5 shadow-xl"
              >
                <Calendar size={20} />
                Book My Free Strategy Call
              </a>
              <a
                href={WA_MSG("Hi, I'd like to discuss a project with Epsilon Technology.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 text-white font-bold px-10 py-4 rounded-2xl text-lg transition-all hover:-translate-y-0.5"
              >
                <MessageSquare size={20} /> WhatsApp Us Now
              </a>
            </div>

            <div className="flex flex-wrap justify-center gap-4 text-blue-200 text-sm">
              {[
                "🇺🇸 US Clients Welcome",
                "🇬🇧 UK Clients Welcome",
                "🇦🇪 UAE Clients Welcome",
                "🇨🇦 Canada Clients Welcome",
              ].map((i) => (
                <span key={i} className="flex items-center gap-1 bg-white/10 px-3 py-1.5 rounded-full">
                  {i}
                </span>
              ))}
            </div>

            <p className="text-blue-300/70 text-xs mt-8">
              30-min call · No obligation · Honest advice · We respond within 4 hours
            </p>
          </div>
        </section>

        {/* ══════════════════════════════ MOBILE STICKY BAR ══════════════════════════════ */}
        <div className="fixed bottom-0 left-0 right-0 z-40 md:hidden bg-white border-t border-slate-200 shadow-2xl px-4 py-3 flex gap-3">
          <a
            href={CALENDLY}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-blue-600 text-white font-bold py-3 rounded-xl text-sm"
          >
            <Calendar size={14} /> Book Free Call
          </a>
          <a
            href={`https://wa.me/${WA}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1.5 bg-green-500 text-white font-bold py-3 rounded-xl text-sm"
          >
            <MessageSquare size={14} /> WhatsApp
          </a>
        </div>
        <div className="h-16 md:hidden" />

      </main>
    </>
  );
}
