export const getPosts: () => Promise<Record<string, string>[]> = async () => {
	let posts = [];

	const paths = import.meta.glob('/src/lib/articles/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Record<string, string>;
			const post = { ...metadata, slug } as Record<string, string>;
			posts.push(post);
		}
	}

	posts = posts.sort(
		(first, second) => new Date(second.date).getTime() - new Date(first.date).getTime()
	);

	return posts;
};
