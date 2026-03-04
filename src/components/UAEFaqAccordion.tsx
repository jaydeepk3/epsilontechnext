"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";

export function UAEFaqAccordion({ faqs }: { faqs: { q: string; a: string }[] }) {
    return (
        <div className="space-y-3">
            {faqs.map((f, i) => (
                <FAQItem key={i} q={f.q} a={f.a} />
            ))}
        </div>
    );
}

function FAQItem({ q, a }: { q: string; a: string }) {
    const [open, setOpen] = useState(false);
    return (
        <div className="border border-slate-200 rounded-2xl overflow-hidden bg-white">
            <button className="w-full flex items-center justify-between px-5 py-4 text-left font-semibold text-slate-900 hover:bg-slate-50 transition-colors text-sm"
                onClick={() => setOpen(!open)}>
                <span>{q}</span>
                <ChevronDown size={18} className={`text-slate-400 shrink-0 transition-transform ${open ? "rotate-180" : ""}`} />
            </button>
            {open && <div className="px-5 pb-4 text-slate-600 text-sm leading-relaxed border-t border-slate-100">{a}</div>}
        </div>
    );
}
