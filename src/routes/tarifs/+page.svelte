<script>
	import { base } from '$app/paths';

	/** @type {import('./$types').PageData} */
	export let data;
</script>

<svelte:head>
	<title>Tarifs - So' Patiss Fécamp</title>
	<meta
		name="description"
		content="Découvrez les tarifs de nos gâteaux, entremets, et autres pâtisseries sur commande à Fécamp."
	/>
</svelte:head>

<div class="tarifs-page">
	<div class="container">
		<h1 class="page-title">Nos Tarifs</h1>
		<p class="page-subtitle">
			Découvrez nos créations gourmandes. Tous nos produits sont réalisés avec des ingrédients de
			qualité.
		</p>

		{#each data.categories as category}
			<section class="category-section">
				<h2 class="category-title">{category.nom}</h2>
				<div class="products-grid">
					{#each category.produits as product}
						<div class="product-card">
							{#if product.image}
								<img
									src="{base}/{product.image}"
									alt="Image de {product.nom}"
									class="product-image"
								/>
							{/if}
							<div class="product-content">
								<h3 class="product-name">{product.nom}</h3>
								<p class="product-description">{product.description}</p>

								{#if product.derives && product.derives.length > 0}
									<ul class="derives-list">
										{#each product.derives as derive}
											<li class="derive-item">
												<span>{derive.nom}</span>
												<span class="price">{derive.prix}</span>
											</li>
										{/each}
									</ul>
								{/if}
							</div>
						</div>
					{/each}
				</div>
			</section>
		{/each}
	</div>
</div>

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
</style>
