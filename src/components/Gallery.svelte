<script lang="ts">
	import { base } from '$app/paths';
	import { lazy } from '../actions/lazy';
	let rootMargin = '100px';
</script>

<section id="galerie" class="gallery-section">
	<div class="container">
		<h2 class="title">Nos Créations Gourmandes</h2>
		<div class="grid">
			<div class="gallery-item">
				<img
					use:lazy={{ rootMargin }}
					src=""
					data-src="{base}/patisserie/macarons.jpg"
					alt="Macarons colorés"
					class="gallery-image"
				/>
			</div>
			<div class="gallery-item">
				<img
					use:lazy={{ rootMargin }}
					src=""
					data-src="{base}/patisserie/gateau1.jpg"
					alt="Gâteau d'anniversaire décoré"
					class="gallery-image"
				/>
			</div>
			<div class="gallery-item">
				<img
					use:lazy={{ rootMargin }}
					src=""
					data-src="{base}/patisserie/gateau2.jpg"
					alt="Tarte aux fruits frais"
					class="gallery-image"
				/>
			</div>
			<div class="gallery-item">
				<img
					use:lazy={{ rootMargin }}
					src=""
					data-src="{base}/patisserie/gateau3.jpg"
					alt="Verrines pour un service traiteur"
					class="gallery-image"
				/>
			</div>
		</div>
	</div>
</section>

<style>
	.gallery-section {
		background-color: white;
		padding: 5rem 0;
	}
	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1.5rem;
	}
	.title {
		font-family: 'Playfair Display', serif;
		font-size: 1.875rem;
		font-weight: 700;
		text-align: center;
		color: #1f2937;
		margin-bottom: 3rem;
	}
	.grid {
		display: grid;
		grid-template-columns: 1fr;
		gap: 1rem;
	}
	.gallery-item {
		overflow: hidden;
		border-radius: 0.5rem;
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
	}
	.gallery-image {
		height: 100%;
		width: 100%;
		object-fit: cover;
		transition: transform 0.3s ease-in-out;
	}
	.gallery-image:hover {
		transform: scale(1.1);
	}
	@media (min-width: 768px) {
		.grid {
			grid-template-columns: repeat(4, minmax(0, 1fr));
		}
	}
</style>
