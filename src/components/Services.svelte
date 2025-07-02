<script>
	import { base } from '$app/paths';
</script>

<section id="services" class="services-section">
	<div class="container">
		<h2 class="title">Nos Prestations</h2>
		<div class="grid">
			<div class="card">
				<h3 class="card-title">Ateliers de Pâtisserie</h3>
				<p class="card-text">
					Envie de mettre la main à la pâte ? Participez à un <strong>atelier de pâtisserie</strong>
					convivial en petit groupe (de 5 à 10 personnes). Que vous soyez débutant ou amateur éclairé,
					je vous guide pas à pas dans la réalisation d'un <strong>gâteau</strong> ou de mignardises
					que vous emporterez fièrement chez vous.
				</p>
				<a
					aria-label="Reserver un atelier"
					href="{base}/#contact"
					class="card-link"
					title="Reserver un atelier">Réserver un atelier &rarr;</a
				>
			</div>
			<div class="card">
				<h3 class="card-title">Commande de Gâteaux & Traiteur</h3>
				<p class="card-text">
					Pour tout <strong>événement</strong> (anniversaire, mariage, baptême...), je réalise sur
					<strong>commande</strong>
					la <strong>pâtisserie</strong> qui marquera les esprits. Nous proposons également un
					service de <strong>traiteur</strong> froid (verrines, mignardises salées) pour compléter
					vos réceptions à <strong>Fécamp</strong> et ses alentours.
				</p>
				<a
					aria-label="Demander un devis"
					href="{base}/contact"
					class="card-link"
					title="Demander un devis">Demander un devis &rarr;</a
				>
			</div>
		</div>
	</div>
</section>

<style>
	.services-section {
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
		gap: 2.5rem;
	}
	.card {
		background-color: white;
		padding: 2rem;
		border-radius: 0.75rem;
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
		transition: box-shadow 0.3s ease-in-out;
	}
	.card:hover {
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}
	.card-title {
		font-family: 'Playfair Display', serif;
		font-size: 1.5rem;
		font-weight: 700;
		color: #7e22ce;
		margin-bottom: 1rem;
	}
	.card-text {
		color: #4b5563;
		margin-bottom: 1rem;
		text-align: justify;
	}
	.card-link {
		font-weight: 600;
		color: #ec4899;
		text-decoration: none;
	}
	.card-link:hover {
		color: #db2777;
	}
	@media (min-width: 768px) {
		.grid {
			grid-template-columns: repeat(2, minmax(0, 1fr));
		}
	}
</style>
