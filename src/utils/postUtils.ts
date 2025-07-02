  export const getPosts = async () => {
        /** @type {App.Post[]} */
        let posts = [];

        // import.meta.glob est une fonctionnalité de Vite qui permet d'importer
        // plusieurs modules en même temps. C'est parfait pour les blogs.
        const paths = import.meta.glob('/src/lib/articles/*.md', { eager: true });

        for (const path in paths) {
            const file = paths[path];
            const slug = path.split('/').at(-1)?.replace('.md', '');

            if (file && typeof file === 'object' && 'metadata' in file && slug) {
                const metadata = /** @type {App.Post} */ (file.metadata);
                const post = { ...metadata, slug };
                posts.push(post);
            }
        }

        // On trie les articles du plus récent au plus ancien
        posts = posts.sort((first, second) =>
            new Date(second.date).getTime() - new Date(first.date).getTime()
        );

        return posts;
    }
