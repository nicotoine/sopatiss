import adapter from '@sveltejs/adapter-static';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://kit.svelte.dev/docs/integrations#preprocessors
	// for more information about preprocessors
	preprocess: [
		vitePreprocess(),
		// Utilisez mdsvex() pour traiter les fichiers avec les extensions spécifiées
		mdsvex({
			extensions: ['.md']
		})
	],

	extensions: ['.svelte', '.md'],

	kit: {
		adapter: adapter(),

		paths: {
			relative: false
		},

		prerender: {
			// Sans cette option, `url.origin` vaut `http://sveltekit-prerender` au
			// prérendu. Ce placeholder se retrouvait tel quel dans les balises
			// og:url, og:image, canonical et dans les données structurées du site
			// déployé, qui pointaient donc vers un hôte inexistant.
			origin: 'https://sopatiss.fr'
		}
	}
};

export default config;
