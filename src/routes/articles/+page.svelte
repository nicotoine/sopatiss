<script>
	import { base } from '$app/paths';

	export let data;
</script>

<svelte:head>
	<title>Articles et Astuces Pâtisserie - So' Patiss Fécamp</title>
	<meta
		name="description"
		content="Découvrez les conseils, astuces et recettes de votre pâtissière à Fécamp. Tout pour réussir vos gâteaux et organiser vos événements gourmands."
	/>
</svelte:head>

<div class="articles-page">
	<div class="container">
		<h1 class="page-title">Nos Articles & Astuces</h1>
		<p class="page-subtitle">
			Conseils de pro, recettes gourmandes et inspirations pour tous vos événements.
		</p>

		<div class="articles-grid">
			{#each data.posts as post}
				<a
					href={`${base}/articles/${post.slug}`}
					class="article-card"
					aria-label={post.title}
					title={post.title}
				>
					<div class="card-content">
						<h2 class="article-title">{post.title}</h2>
						<p class="article-description">{post.description}</p>
						<span class="read-more">Lire la suite &rarr;</span>
					</div>
				</a>
			{/each}
		</div>
	</div>
</div>

<style>
	.articles-page {
		padding: 4rem 0;
		background-color: #f9fafb;
	}
	.container {
		max-width: 900px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}
	.page-title {
		font-family: 'Playfair Display', serif;
		font-size: 2.5rem;
		font-weight: 700;
		text-align: center;
		color: #581c87;
		margin-bottom: 1rem;
	}
	.page-subtitle {
		text-align: center;
		color: #4b5563;
		font-size: 1.125rem;
		margin-bottom: 3rem;
	}
	.articles-grid {
		display: grid;
		gap: 1.5rem;
	}
	.article-card {
		display: block;
		background-color: white;
		border-radius: 0.5rem;
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
		text-decoration: none;
		color: inherit;
		transition:
			transform 0.2s ease-in-out,
			box-shadow 0.2s ease-in-out;
	}
	.article-card:hover {
		transform: translateY(-5px);
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}
	.card-content {
		padding: 1.5rem;
	}
	.article-title {
		font-family: 'Playfair Display', serif;
		font-size: 1.5rem;
		color: #7e22ce;
		margin-bottom: 0.5rem;
	}
	.article-description {
		color: #4b5563;
		margin-bottom: 1rem;
		line-height: 1.6;
	}
	.read-more {
		font-weight: 600;
		color: #ec4899;
	}
</style>
