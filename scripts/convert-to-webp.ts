import fs from 'fs';
import path from 'path';
import { execFileSync } from 'child_process';
import { PrismaClient } from '@prisma/client';

const PUBLIC_DIR = path.resolve(__dirname, '../public');
const SRC_DIR = path.resolve(__dirname, '../src');
const SCRIPTS_DIR = path.resolve(__dirname, '../scripts');
const CWEBP_PATH = '/opt/homebrew/bin/cwebp';

interface ImageAsset {
    absolutePath: string;
    relativePath: string; // relative to public dir, e.g., 'images/doctors/rainbow-pedia.jpg'
    basename: string;     // e.g., 'rainbow-pedia.jpg'
    newRelativePath: string; // e.g., 'images/doctors/rainbow-pedia.webp'
    newBasename: string;     // e.g., 'rainbow-pedia.webp'
}

function findImages(dir: string, fileList: string[] = []): string[] {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            findImages(filePath, fileList);
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.png', '.jpg', '.jpeg'].includes(ext)) {
                fileList.push(filePath);
            }
        }
    }
    return fileList;
}

function findTextFiles(dir: string, fileList: string[] = []): string[] {
    const files = fs.readdirSync(dir);
    for (const file of files) {
        const filePath = path.join(dir, file);
        const stat = fs.statSync(filePath);
        if (stat.isDirectory()) {
            if (file !== 'node_modules' && file !== '.next' && file !== '.git') {
                findTextFiles(filePath, fileList);
            }
        } else {
            const ext = path.extname(file).toLowerCase();
            if (['.ts', '.tsx', '.js', '.jsx', '.css', '.json', '.md'].includes(ext)) {
                fileList.push(filePath);
            }
        }
    }
    return fileList;
}

async function main() {
    console.log('--- Starting WebP Image Conversion & Codebase Migration ---');

    // 1. Find all PNG, JPG, JPEG files in public/
    console.log(`Scanning public directory: ${PUBLIC_DIR}...`);
    const imagePaths = findImages(PUBLIC_DIR);
    console.log(`Found ${imagePaths.length} images.`);

    const assets: ImageAsset[] = imagePaths.map(img => {
        const relative = path.relative(PUBLIC_DIR, img);
        const ext = path.extname(img);
        const base = path.basename(img);
        const newRelative = relative.substring(0, relative.length - ext.length) + '.webp';
        const newBase = base.substring(0, base.length - ext.length) + '.webp';
        return {
            absolutePath: img,
            relativePath: relative,
            basename: base,
            newRelativePath: newRelative,
            newBasename: newBase
        };
    });

    // 2. Convert each image to WebP using cwebp
    console.log('\n--- Converting Images to WebP ---');
    let convertedCount = 0;
    for (const asset of assets) {
        const outputAbsPath = asset.absolutePath.substring(0, asset.absolutePath.length - path.extname(asset.absolutePath).length) + '.webp';
        
        try {
            console.log(`Converting: ${asset.relativePath} -> ${asset.newRelativePath}`);
            // Use quality 85
            execFileSync(CWEBP_PATH, ['-q', '85', asset.absolutePath, '-o', outputAbsPath]);
            convertedCount++;

            // Delete original file unless it's public/logo.png (keep for legacy/manifest compatibility)
            const isLogoPng = asset.relativePath.toLowerCase() === 'logo.png';
            if (!isLogoPng) {
                fs.unlinkSync(asset.absolutePath);
                console.log(`Deleted original: ${asset.relativePath}`);
            } else {
                console.log(`Kept original logo.png for manifest/compatibility.`);
            }
        } catch (error) {
            console.error(`Failed to convert ${asset.relativePath}:`, error);
        }
    }
    console.log(`Successfully converted ${convertedCount}/${assets.length} images.`);

    // 3. Update references in code files (src/ and scripts/)
    console.log('\n--- Updating Codebase References ---');
    const textFiles = [
        ...findTextFiles(SRC_DIR),
        ...findTextFiles(SCRIPTS_DIR)
    ];
    console.log(`Found ${textFiles.length} source/script files to scan.`);

    let filesModified = 0;

    for (const file of textFiles) {
        // Skip this script file to avoid self-modifications
        if (file === __filename) continue;

        let content = fs.readFileSync(file, 'utf8');
        let fileChanged = false;

        for (const asset of assets) {
            // We want to replace references. Let's do:
            // 1. Relative path starting with / (Next.js public assets)
            // 2. Just the basename
            // We construct targeted replacements to be safe.
            const searchPath1 = '/' + asset.relativePath;
            const replacePath1 = '/' + asset.newRelativePath;
            
            const searchPath2 = asset.relativePath;
            const replacePath2 = asset.newRelativePath;

            const searchBase = asset.basename;
            const replaceBase = asset.newBasename;

            // Perform replacements in order of specificity
            if (content.includes(searchPath1)) {
                // Escape special characters for regex
                const regex1 = new RegExp(searchPath1.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
                content = content.replace(regex1, replacePath1);
                fileChanged = true;
            }
            if (content.includes(searchPath2)) {
                const regex2 = new RegExp(searchPath2.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
                content = content.replace(regex2, replacePath2);
                fileChanged = true;
            }
            // For basename, we want to make sure it matches either inside a string or path.
            // Be extra careful to only replace it if it actually exists in content.
            if (content.includes(searchBase)) {
                // Ensure we don't double replace if searchPath1 or searchPath2 already handled it
                const regexBase = new RegExp(searchBase.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
                content = content.replace(regexBase, replaceBase);
                fileChanged = true;
            }
        }

        if (fileChanged) {
            fs.writeFileSync(file, content, 'utf8');
            console.log(`Updated references in: ${path.relative(path.resolve(__dirname, '..'), file)}`);
            filesModified++;
        }
    }
    console.log(`Updated references in ${filesModified} code/script files.`);

    // 4. Update existing Database Records via Prisma
    console.log('\n--- Migrating Database Records (Prisma) ---');
    const prisma = new PrismaClient();
    try {
        await prisma.$connect();
        const blogs = await prisma.blog.findMany();
        console.log(`Retrieved ${blogs.length} blog records from DB.`);
        
        let dbBlogsUpdated = 0;
        for (const blog of blogs) {
            let blogChanged = false;
            let updatedImageUrl = blog.imageUrl;
            let updatedContent = blog.content;

            // Replace imageUrl extension
            if (updatedImageUrl) {
                for (const asset of assets) {
                    const searchPath1 = '/' + asset.relativePath;
                    const replacePath1 = '/' + asset.newRelativePath;
                    const searchPath2 = asset.relativePath;
                    const replacePath2 = asset.newRelativePath;

                    if (updatedImageUrl === searchPath1 || updatedImageUrl === replacePath1) {
                        updatedImageUrl = replacePath1;
                        blogChanged = true;
                    } else if (updatedImageUrl === searchPath2 || updatedImageUrl === replacePath2) {
                        updatedImageUrl = replacePath2;
                        blogChanged = true;
                    } else if (updatedImageUrl.endsWith(asset.basename)) {
                        updatedImageUrl = updatedImageUrl.replace(asset.basename, asset.newBasename);
                        blogChanged = true;
                    }
                }
            }

            // Replace occurrences in HTML/markdown content
            if (updatedContent) {
                for (const asset of assets) {
                    const searchPath1 = '/' + asset.relativePath;
                    const replacePath1 = '/' + asset.newRelativePath;
                    const searchPath2 = asset.relativePath;
                    const replacePath2 = asset.newRelativePath;
                    const searchBase = asset.basename;
                    const replaceBase = asset.newBasename;

                    if (updatedContent.includes(searchPath1)) {
                        const regex = new RegExp(searchPath1.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
                        updatedContent = updatedContent.replace(regex, replacePath1);
                        blogChanged = true;
                    }
                    if (updatedContent.includes(searchPath2)) {
                        const regex = new RegExp(searchPath2.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
                        updatedContent = updatedContent.replace(regex, replacePath2);
                        blogChanged = true;
                    }
                    if (updatedContent.includes(searchBase)) {
                        const regex = new RegExp(searchBase.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&'), 'g');
                        updatedContent = updatedContent.replace(regex, replaceBase);
                        blogChanged = true;
                    }
                }
            }

            if (blogChanged) {
                await prisma.blog.update({
                    where: { id: blog.id },
                    data: {
                        imageUrl: updatedImageUrl,
                        content: updatedContent
                    }
                });
                console.log(`Updated database Blog record: "${blog.title}" (ID: ${blog.id})`);
                dbBlogsUpdated++;
            }
        }
        console.log(`Successfully updated ${dbBlogsUpdated} blog records in DB.`);
    } catch (dbError) {
        console.error('Database migration error:', dbError);
    } finally {
        await prisma.$disconnect();
    }

    console.log('\n--- Migration Finished! ---');
}

main().catch(console.error);
