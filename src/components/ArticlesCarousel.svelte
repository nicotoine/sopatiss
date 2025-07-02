<script lang="ts">
	import { Splide, SplideSlide } from '@splidejs/svelte-splide';
	import { base } from '$app/paths';
	import '@splidejs/svelte-splide/css';
	import { lazy } from '../actions/lazy';

	export let posts: any[] = [];

	const splideOptions = {
		perPage: 3,
		perMove: 1,
		gap: '1.5rem',
		pagination: false,
		breakpoints: {
			1024: {
				perPage: 2
			},
			640: {
				perPage: 1
			}
		}
	};
</script>

<section class="articles-carousel-section">
	<div class="container">
		<h2 class="section-title">Nos derniers articles</h2>
		{#if posts.length > 0}
			<Splide options={splideOptions} aria-label="Carrousel des derniers articles">
				{#each posts as post}
					<SplideSlide>
						<a
							href="{base}/articles/{post.slug}"
							class="article-card"
							title={post.title}
							aria-label="Lire l'article"
						>
							<img
								class="card-image"
								use:lazy={{ rootMargin: '100px' }}
								src=""
								data-src={post.coverImage}
								alt={`Image pour ${post.title}`}
							/>
							<div class="card-content">
								<h3 class="article-title">{post.title}</h3>
								<span class="read-more">Lire la suite &rarr;</span>
							</div>
						</a>
					</SplideSlide>
				{/each}
			</Splide>
		{/if}
	</div>
</section>

<style>
	.articles-carousel-section {
		padding: 4rem 0;
		background-color: #f9fafb;
	}
	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}
	.section-title {
		font-family: 'Playfair Display', serif;
		font-size: 2.25rem;
		font-weight: 700;
		text-align: center;
		color: #581c87;
		margin-bottom: 3rem;
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
		overflow: hidden;
		height: 100%;
	}
	.article-card:hover {
		transform: translateY(-5px);
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}
	.card-image {
		width: 100%;
		height: 200px;
		object-fit: cover;
	}
	.card-content {
		padding: 1.5rem;
	}
	.article-title {
		font-family: 'Playfair Display', serif;
		font-size: 1.25rem;
		color: #7e22ce;
		margin-bottom: 0.5rem;
		line-height: 1.4;
	}
	.read-more {
		font-weight: 600;
		color: #ec4899;
	}
</style>
