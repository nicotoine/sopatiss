<script lang="ts">
	import { base } from '$app/paths';
</script>

<section id="propos" class="about-section">
	<div class="container">
		<div class="text-content">
			<h2 class="title">Bienvenue chez So' Patiss</h2>
			<p class="paragraph">
				Passionnée de pâtisserie basée à <strong>Fécamp</strong>. Titulaire d'un CAP Pâtissier
				depuis décembre 2024, après avoir suivi les cours à l'INBP de Rouen suivi d'un stage très
				enrichissant chez la pâtisserie HAUTOT à AUZEBOSC , je souhaitais réaliser un projet qui me
				tient à cœur depuis longtemps.
			</p>
			<p class="paragraph">
				"<strong>So' Patiss</strong>" est né d'une passion pour la pâtisserie depuis «presque»
				toujours, avec la volonté de faire plaisir aux gourmands, gourmets, sans oublier les
				personnes diabétiques car je souhaite également développer les pâtisseries sans sucre ou
				remplacer le sucre par le stévia «feuille» (produit naturel remplaçant efficacement le sucre
				blanc).
			</p>
			<p class="paragraph">
				Ma philosophie est simple : des produits locaux et de qualité, une touche de créativité, et
				beaucoup de gourmandise. Chaque <strong>commande</strong> est une nouvelle histoire à raconter.
			</p>
		</div>
		<div class="image-container">
			<img
				src="{base}/soso.png"
				alt="Pâtissière souriante décorant un gâteau"
				class="about-image"
			/>
		</div>
	</div>
</section>

<style>
	.about-section {
		background-color: white;
		padding: 5rem 0;
	}
	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1.5rem;
		display: grid;
		gap: 3rem;
		align-items: center;
		justify-content: space-between;
	}
	.title {
		font-family: 'Playfair Display', serif;
		font-size: 1.875rem;
		font-weight: 700;
		color: #1f2937;
		margin-bottom: 1rem;
	}
	.paragraph {
		color: #4b5563;
		line-height: 1.75;
		margin-bottom: 1rem;
	}
	.about-image {
		border-radius: 0.5rem;
		margin: 0 auto;
		max-height: 500px;
	}

	.image-container {
		display: flex;
		justify-content: flex-end;
	}
	.text-content {
		text-align: justify;
	}
	@media (min-width: 768px) {
		.container {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
