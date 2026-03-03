import fs from 'fs';
import path from 'path';
import { PrismaClient } from '@prisma/client';
import TurndownService from 'turndown';
import * as cheerio from 'cheerio';

const prisma = new PrismaClient();
const turndownService = new TurndownService();

// Ignore react components mostly
turndownService.addRule('removeComponents', {
    filter: (node) => {
        return node.nodeName && node.nodeName.match(/^[A-Z]/) !== null;
    },
    replacement: () => ''
});

async function main() {
    const slugs = [
        "business-solutions-through-technology",
        "digital-transformation-guide",
        "doctor-marketing-ideas-junagadh",
        "ecommerce-growth-strategies-2026",
        "junagadh-police-bandobast-app-case-study",
        "mobile-app-development-guide-2026",
        "web-app-development-trends-usa-2026"
    ];

    for (const slug of slugs) {
        const filePath = path.join(process.cwd(), 'src/app/blog', slug, 'page.tsx');
        if (!fs.existsSync(filePath)) {
            console.log(`Not found: ${filePath}`);
            continue;
        }

        const content = fs.readFileSync(filePath, 'utf-8');

        // Remove import statements and export default function and just focus on the return () part
        // To make it valid HTML-ish for cheerio, we find the first <main or <div in the return
        let returnMatch = content.indexOf('<main');
        if (returnMatch === -1) returnMatch = content.indexOf('<div');

        if (returnMatch !== -1) {
            let jsxContent = content.slice(returnMatch);
            // Basic cleanup to help cheerio parse it
            jsxContent = jsxContent.replace(/<Image[^>]*>/g, '');
            jsxContent = jsxContent.replace(/<Image[^>]*\/>/g, '');
            jsxContent = jsxContent.replace(/<Link[^>]*>/g, '<a>');
            jsxContent = jsxContent.replace(/<\/Link>/g, '</a>');
            jsxContent = jsxContent.replace(/<script[\s\S]*?<\/script>/g, '');
            jsxContent = jsxContent.replace(/className=[{"](.*?)["}]/g, 'class="$1"');

            const $ = cheerio.load(jsxContent);
            const proseHtml = $('.prose').html();

            if (proseHtml) {
                let cleanHtml = proseHtml.replace(/<[A-Z][a-zA-Z]*[^>]*>.*?<\/[A-Z][a-zA-Z]*>/g, '');
                cleanHtml = cleanHtml.replace(/\{[^\}]*\}/g, '');

                const markdown = turndownService.turndown(cleanHtml);
                await prisma.blog.update({
                    where: { slug },
                    data: { content: markdown.trim() }
                });
                console.log(`[SUCCESS] Migrated DB content for ${slug}`);

                // Now delete the folder
                const dirPath = path.dirname(filePath);
                if (markdown.trim().length > 0) {
                    fs.rmSync(dirPath, { recursive: true, force: true });
                    console.log(`[DELETED] static folder ` + dirPath);
                }
            } else {
                console.log(`[WARN] No .prose found in ${slug}`);
            }
        }
    }
}

main().catch(console.error).finally(() => prisma.$disconnect());
