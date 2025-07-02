<script>
	import { base } from '$app/paths';

	export let data;

	// On récupère directement le composant et les métadonnées.
	const { content, metadata } = data;
</script>

<svelte:head>
	<title>{metadata.title} - So' Patiss</title>
	<meta name="description" content={metadata.description} />

	<!-- Open Graph spécifique à l'article -->
	<meta property="og:type" content="article" />
	<meta property="og:title" content={metadata.title} />
	<meta property="og:description" content={metadata.description} />
	<meta property="og:image" content={metadata.coverImage} />
	<meta property="article:published_time" content={new Date(metadata.date).toISOString()} />
	<meta property="article:author" content="Sophie Delaporte" />

	<!-- Microdonnées JSON-LD pour un Article -->
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Article",
			"headline": "{metadata.title}",
			"image": ["{metadata.coverImage}"],
			"datePublished": "{new Date(metadata.date).toISOString()}",
			"author": [
				{
					"@type": "Person",
					"name": "Sophie Delaporte",
					"url": "{new URL(base, data.url).href}"
				}
			],
			"publisher": {
				"@type": "Organization",
				"name": "So' Patiss",
				"logo": {
					"@type": "ImageObject",
					"url": "{new URL(`${base}/sopatiss.jpg`, data.url).href}"
				}
			},
			"description": "{metadata.description}"
		}
	</script>
</svelte:head>

<article class="article-layout">
	<div class="container">
		<h1 class="article-title">{metadata.title}</h1>
		<p class="article-meta">Publié le {new Date(metadata.date).toLocaleDateString('fr-FR')}</p>

		<img class="cover-image" src={metadata.coverImage} alt={`Image pour ${metadata.title}`} />

		<div class="prose">
			<svelte:component this={content} />
		</div>

		<a href="{base}/articles" class="back-link" aria-label="Retour à la liste des articles"
			>&larr; Retour à la liste des articles</a
		>
	</div>
</article>

<style>
	.article-layout {
		padding: 4rem 0;
	}
	.container {
		max-width: 800px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}
	.article-title {
		font-family: 'Playfair Display', serif;
		font-size: 2.5rem;
		font-weight: 700;
		color: #581c87;
		margin-bottom: 0.5rem;
		line-height: 1.2;
	}
	.article-meta {
		color: #6b7280;
		margin-bottom: 2rem;
	}
	.cover-image {
		width: 100%;
		max-height: 400px;
		object-fit: cover;
		border-radius: 0.5rem;
		margin-bottom: 2rem;
	}
	.prose {
		color: #374151;
		line-height: 1.75;
	}
	.prose :global(h2) {
		font-family: 'Playfair Display', serif;
		font-size: 1.75rem;
		margin-top: 2em;
		margin-bottom: 1em;
		color: #7e22ce;
	}
	.prose :global(p) {
		margin-bottom: 1em;
	}
	.prose :global(ul) {
		list-style-position: inside;
		padding-left: 1em;
		margin-bottom: 1em;
	}
	.prose :global(strong) {
		color: #1f2937;
	}
	.back-link {
		display: inline-block;
		margin-top: 3rem;
		color: #ec4899;
		font-weight: 600;
		text-decoration: none;
	}
</style>
