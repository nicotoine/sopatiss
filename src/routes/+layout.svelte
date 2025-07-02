<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';

	import '@fontsource/poppins';
	import '@fontsource/playfair-display';
	import { base } from '$app/paths';
	export let data;
	export let children;
</script>

<svelte:head>
	<title>So' Patiss - Ateliers Pâtisserie et Gâteaux sur Commande à Fécamp</title>
	<meta property="og:site_name" content="So' Patiss - Ateliers et Gourmandises" />
	<meta property="og:url" content={data.url} />
	<meta property="og:locale" content="fr_FR" />
	<meta property="og:type" content="website" />
	<meta property="og:image" content={new URL(`${base}/og-image.png`, data.url).href} />
	<meta property="og:image:width" content="1200" />
	<meta property="og:image:height" content="630" />
	<link rel="canonical" href={data.url} />

	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Organization",
			"name": "So' Patiss - Ateliers et Gourmandises",
			"url": "{new URL(base, data.url).href}",
			"logo": "{new URL(`${base}/sopatiss.jpg`, data.url).href}",
			"sameAs": [
				"https://www.facebook.com/61574198966568",
				"https://www.instagram.com/so_patiss76/"
			]
		}
	</script>
</svelte:head>

<div>
	<Header />
	<main>
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	:global(body) {
		margin: 0;
		font-family: 'Poppins', sans-serif;
		background-color: #f9fafb;
		color: #1f2937;
	}
	:global(a) {
		text-decoration: none;
	}
	:global(h1, h2, h3, h4, h5, h6) {
		font-family: 'Playfair Display', serif;
	}
</style>
