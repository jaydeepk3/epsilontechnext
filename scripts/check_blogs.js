import prisma from '../src/lib/prisma'

async function checkBlogs() {
    try {
        const blogs = await prisma.blog.findMany({
            orderBy: { createdAt: 'desc' },
            take: 5
        });
        blogs.forEach((b, i) => {
            console.log(`[${i}] Title: ${b.title}`);
            console.log(`    Slug: ${b.slug}`);
            console.log(`    Image: ${b.imageUrl}`);
            console.log(`    Published: ${b.published}`);
            console.log('---');
        });
    } catch (error) {
        console.error(error);
    } finally {
        await prisma.$disconnect();
    }
}

checkBlogs();
