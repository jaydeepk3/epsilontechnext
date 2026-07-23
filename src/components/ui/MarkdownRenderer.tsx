export function MarkdownRenderer({ content }: { content: string }) {
  // Simple, safe fallback markdown parser to prevent SSR createContext Next.js 16 issues
  const paragraphs = content.split('\n\n');
  return (
    <div className="space-y-6">
      {paragraphs.map((p, idx) => {
        if (p.startsWith('## ')) {
          return (
            <h2 key={idx} className="text-3xl md:text-5xl mt-12 mb-6 font-extrabold text-slate-900">
              {p.replace('## ', '')}
            </h2>
          );
        }
        if (p.startsWith('### ')) {
          return (
            <h3 key={idx} className="text-2xl md:text-3xl mt-8 mb-4 font-bold text-slate-900">
              {p.replace('### ', '')}
            </h3>
          );
        }
        return (
          <p key={idx} className="text-slate-700 text-lg leading-relaxed">
            {p}
          </p>
        );
      })}
    </div>
  );
}
