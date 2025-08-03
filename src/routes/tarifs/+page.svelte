<script lang="ts">
	import { base } from '$app/paths';

	interface Derive {
		nom: string;
		prix: string;
	}

	interface Produit {
		nom: string;
		description: string;
		image?: string;
		derives: Derive[];
	}

	interface Categorie {
		id?: string;
		nom: string;
		produits: Produit[];
	}

	interface PageData {
		categories: Categorie[];
	}

	// Schema.org JSON-LD interfaces
	interface OfferSchema {
		'@type': 'Offer';
		name: string;
		price: number;
		priceCurrency: 'EUR';
	}

	interface AggregateOfferSchema {
		'@type': 'AggregateOffer';
		priceCurrency: 'EUR';
		lowPrice: number;
		highPrice: number;
		offers: OfferSchema[];
	}

	interface ProductSchema {
		'@type': 'Product';
		name: string;
		description: string;
		image?: string;
		offers: AggregateOfferSchema;
	}

	interface ListItemSchema {
		'@type': 'ListItem';
		position: number;
		item: ProductSchema;
	}

	interface ItemListSchema {
		'@context': 'https://schema.org';
		'@type': 'ItemList';
		itemListElement: ListItemSchema[];
	}

	export let data: PageData;

	let fullScreenImage: string | undefined;
	let structuredData: ItemListSchema | {} = {};

	$: {
		const productsWithOffers: ProductSchema[] = data.categories.flatMap((category: Categorie) =>
			category.produits.map(
				(product: Produit): ProductSchema => ({
					'@type': 'Product',
					name: product.nom,
					description: product.description,
					image: product.image ? `${base}/${product.image}` : undefined,
					offers: {
						'@type': 'AggregateOffer',
						priceCurrency: 'EUR',
						lowPrice: Math.min(...product.derives.map((d: Derive) => parseFloat(d.prix))),
						highPrice: Math.max(...product.derives.map((d: Derive) => parseFloat(d.prix))),
						offers: product.derives.map(
							(derive: Derive): OfferSchema => ({
								'@type': 'Offer',
								name: derive.nom,
								price: parseFloat(derive.prix),
								priceCurrency: 'EUR'
							})
						)
					}
				})
			)
		);

		structuredData = {
			'@context': 'https://schema.org',
			'@type': 'ItemList',
			itemListElement: productsWithOffers.map(
				(product: ProductSchema, index: number): ListItemSchema => ({
					'@type': 'ListItem',
					position: index + 1,
					item: product
				})
			)
		};
	}
</script>

<svelte:head>
	<title>Tarifs des Pâtisseries sur Commande - So' Patiss Fécamp</title>
	<meta
		name="description"
		content="Consultez les prix de nos gâteaux, entremets et pâtisseries artisanales. Commande personnalisée à Fécamp pour tous vos événements."
	/>
	<script type="application/ld+json">
		{@html JSON.stringify(structuredData)}
	</script>
</svelte:head>

<main class="tarifs-page">
	<div class="container">
		<h1 class="page-title">Nos Tarifs</h1>
		<p class="page-subtitle">
			Découvrez nos créations gourmandes. Tous nos produits sont réalisés avec des ingrédients de
			qualité.
		</p>

		{#each data.categories as category}
			<section
				class="category-section"
				aria-labelledby="category-title-{category.id || category.nom}"
			>
				<h2 class="category-title" id="category-title-{category.id || category.nom}">
					{category.nom}
				</h2>
				<div class="products-grid">
					{#each category.produits as product}
						<article class="product-card">
							{#if product.image}
								<button
									class="product-image-button"
									on:click={() => (fullScreenImage = product.image)}
									aria-label="Agrandir l'image de {product.nom}"
								>
									<img
										src="{base}/{product.image}"
										alt="Photo de notre {product.nom} réalisé par So' Patiss Fécamp"
										class="product-image"
										loading="lazy"
										decoding="async"
										width="300"
										height="250"
									/>
								</button>
							{/if}
							<div class="product-content">
								<h3 class="product-name">{product.nom}</h3>
								<p class="product-description">{product.description}</p>

								{#if product.derives && product.derives.length > 0}
									<ul class="derives-list">
										{#each product.derives as derive}
											<li class="derive-item">
												<span>{derive.nom}</span>
												<span class="price" aria-label="Prix : {derive.prix} euros"
													>{derive.prix} €</span
												>
											</li>
										{/each}
									</ul>
								{/if}
							</div>
						</article>
					{/each}
				</div>
			</section>
		{/each}
	</div>

	{#if fullScreenImage}
		<button
			class="close-button"
			on:click={() => (fullScreenImage = undefined)}
			aria-label="Fermer l'image en plein écran"
		>
			<span aria-hidden="true">&times;</span>
		</button>
		<button
			class="full-sreen-image-display"
			on:click={() => (fullScreenImage = undefined)}
			tabindex="0"
			aria-label="Fermer l'image en plein écran"
		>
			<div class="full-screen-image">
				<img
					src="{base}/{fullScreenImage}"
					alt="So' Patiss Fécamp pâtisserie"
					class="product-image"
					loading="lazy"
					decoding="async"
				/>
			</div>
		</button>
	{/if}
</main>

<style>
	.tarifs-page {
		padding: 4rem 0;
		background-color: #fff9f9;
	}
	.container {
		max-width: 1200px;
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

	.category-section {
		margin-bottom: 4rem;
	}
	.category-title {
		font-family: 'Playfair Display', serif;
		font-size: 2rem;
		color: #7e22ce;
		border-bottom: 2px solid #ec4899;
		padding-bottom: 0.5rem;
		margin-bottom: 2rem;
	}

	.products-grid {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
		gap: 2rem;
	}

	.product-card {
		background-color: white;
		border-radius: 0.75rem;
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
		overflow: hidden;
		display: flex;
		flex-direction: column;
	}
	.product-image {
		width: 100%;
		height: 250px;
		object-fit: cover;
	}
	.product-content {
		padding: 1.5rem;
		flex-grow: 1;
		display: flex;
		flex-direction: column;
	}
	.product-name {
		font-family: 'Playfair Display', serif;
		font-size: 1.5rem;
		color: #581c87;
		margin-bottom: 0.75rem;
	}
	.product-description {
		color: #4b5563;
		margin-bottom: 1rem;
		flex-grow: 1;
	}

	.derives-list {
		list-style: none;
		padding: 0;
		margin: 0;
	}
	.derive-item {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0.5rem 0;
		border-bottom: 1px solid #f3f4f6;
	}
	.derive-item:last-child {
		border-bottom: none;
	}
	.price {
		font-weight: 600;
		color: #ec4899;
		text-wrap: nowrap;
	}
	.product-image-button {
		border: none;
		background: none;
		padding: 0;
		cursor: pointer;
	}

	.full-sreen-image-display {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.8);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
		border: none;
		outline: none;
		cursor: pointer;
	}

	.full-sreen-image-display .full-screen-image {
		max-width: 90%;
		max-height: 90%;
		border-radius: 0.5rem;
		overflow: hidden;
		box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	}

	.full-sreen-image-display .full-screen-image img {
		width: 100%;
		height: auto;
		object-fit: contain;
		border-radius: 0.5rem;
		aspect-ratio: 16 / 9;
	}
	.close-button {
		position: fixed;
		top: 1rem;
		right: 1rem;
		background-color: transparent;
		border: none;
		color: white;
		font-size: 2rem;
		cursor: pointer;
		z-index: 1100;
	}
</style>
