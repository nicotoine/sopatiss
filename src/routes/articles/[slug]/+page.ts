import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export async function load({ params }: { params: { slug: string } }) {
	try {
		// On importe dynamiquement le module Markdown.
		// Cela fonctionne parfaitement dans un contexte statique.
		const post = await import(`../../../lib/articles/${params.slug}.md`);
		const content = post.default;
		const metadata = post.metadata;

		return {
			content,
			metadata
		};
	} catch {
		throw error(404, `L'article "${params.slug}" n'a pas été trouvé.`);
	}
}
