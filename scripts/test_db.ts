import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    const item = await prisma.blog.findUnique({
        where: { slug: "junagadh-police-bandobast-app-case-study" }
    });
    console.log("DB Content length:", item?.content?.length);
    console.log("Content:", item?.content?.slice(0, 50));
}

main().catch(console.error).finally(() => prisma.$disconnect());
