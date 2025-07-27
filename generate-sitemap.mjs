import fs from 'fs';
import path from 'path';

const siteURL = 'https://sopatiss.fr';
const articlesDir = path.join(process.cwd(), 'src/lib/articles');
const sitemapPath = path.join(process.cwd(), 'static/sitemap.xml');

function getFrontmatter(filePath) {
	const content = fs.readFileSync(filePath, 'utf-8');
	const match = content.match(/---([\s\S]*?)---/);
	if (!match) return null;

	const frontmatter = match[1];
	const metadata = {};
	frontmatter.split('\n').forEach((line) => {
		const [key, ...valueParts] = line.split(':');
		if (key && valueParts.length > 0) {
			metadata[key.trim()] = valueParts.join(':').trim().replace(/"/g, '');
		}
	});
	return metadata;
}

async function getPosts() {
	const posts = [];
	const files = fs.readdirSync(articlesDir).filter((file) => file.endsWith('.md'));

	for (const file of files) {
		const filePath = path.join(articlesDir, file);
		const metadata = getFrontmatter(filePath);
		if (metadata) {
			posts.push({
				slug: file.replace('.md', ''),
				...metadata
			});
		}
	}
	return posts.sort((a, b) => new Date(b.date) - new Date(a.date));
}

async function generateSitemap() {
	console.log('Generating sitemap...');

	const posts = await getPosts();
	const staticPages = ['/', '/articles', '/contact', '/contact/merci'];

	const sitemap = `<?xml version="1.0" encoding="UTF-8" ?>
<urlset
  xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
>
  <!-- Pages statiques -->
  ${staticPages
		.map(
			(p) => `
  <url>
    <loc>${siteURL}${p}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>0.8</priority>
  </url>`
		)
		.join('')}

  <!-- Articles de blog -->
  ${posts
		.map(
			(post) => `
  <url>
    <loc>${siteURL}/articles/${post.slug}</loc>
    <lastmod>${new Date(post.date).toISOString()}</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.6</priority>
  </url>`
		)
		.join('')}
</urlset>`;

	fs.writeFileSync(sitemapPath, sitemap);

	console.log(`Sitemap generated successfully at ${sitemapPath}`);
}

generateSitemap();
