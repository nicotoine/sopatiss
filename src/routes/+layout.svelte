<script>
	import Footer from '../components/Footer.svelte';
	import Header from '../components/Header.svelte';
	import { onMount } from 'svelte';

	import '@fontsource/poppins';
	import '@fontsource/playfair-display';
	import { base } from '$app/paths';
	let { data, children } = $props();

	const absenceExpiry = new Date('2026-04-21');
	let visible = $state(false);

	onMount(() => {
		if (new Date() < absenceExpiry && !localStorage.getItem('absence-dismissed')) {
			visible = true;
		}
	});

	function dismiss() {
		visible = false;
		localStorage.setItem('absence-dismissed', 'true');
	}
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
	{#if visible}
		<div class="popup-overlay" onclick={dismiss} role="presentation">
			<div class="popup-content" onclick={(e) => e.stopPropagation()} role="dialog" aria-modal="true">
				<img src="{base}/absence_temporaire.jpg" alt="Fermeture temporaire - Pas de commandes du 30 mars au 20 avril" />
				<button class="close-btn" onclick={dismiss} aria-label="Fermer">✕</button>
			</div>
		</div>
	{/if}
	<main>
		{@render children()}
	</main>
	<Footer />
</div>

<style>
	.popup-overlay {
		position: fixed;
		inset: 0;
		background: rgba(0, 0, 0, 0.5);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		padding: 1rem;
	}

	.popup-content {
		position: relative;
		max-width: 700px;
		width: 100%;
	}

	.popup-content img {
		width: 100%;
		border-radius: 16px;
		box-shadow: 0 8px 32px rgba(0, 0, 0, 0.25);
		display: block;
	}

	.close-btn {
		position: absolute;
		top: 10px;
		right: 10px;
		background: rgba(0, 0, 0, 0.5);
		color: white;
		border: none;
		border-radius: 50%;
		width: 32px;
		height: 32px;
		font-size: 16px;
		cursor: pointer;
		display: flex;
		align-items: center;
		justify-content: center;
	}

	.close-btn:hover {
		background: rgba(0, 0, 0, 0.75);
	}

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
