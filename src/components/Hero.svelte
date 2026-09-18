<script lang="ts">
	import { base } from '$app/paths';
</script>

<section class="hero-section">
	<div class="container">
		<img
			src="{base}/sopatiss.jpg"
			alt="Logo So' Patiss, Ateliers et gourmandises"
			class="hero-logo"
			width="192"
			height="192"
			fetchpriority="high"
		/>
		<h1 class="hero-title">So' Patiss : Ateliers & Gourmandises</h1>
		<p class="hero-subtitle">
			Votre artisane pâtissière à <span class="gradient-text">Fécamp</span> pour des ateliers créatifs
			et des gâteaux d'exception pour chaque événement.
		</p>
		<div class="button-group">
			<a
				aria-label="Section nos services de So' Patiss"
				href="{base}/#services"
				class="button primary">Découvrir nos services</a
			>
			<a aria-label="Page contact de So' Patiss" href="{base}/contact" class="button secondary"
				>Passer une commande</a
			>
		</div>
	</div>
</section>

<style>
	.hero-section {
		background-color: #fdf6f0;
		padding: 5rem 0;
	}
	.container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0 1.5rem;
		text-align: center;
	}
	.hero-logo {
		width: 12rem;
		height: 12rem;
		margin: 0 auto 1.5rem auto;
		border-radius: 9999px;
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}
	.hero-title {
		font-family: 'Playfair Display', serif;
		font-size: 2.25rem;
		font-weight: 700;
		color: #763440;
		margin-bottom: 1rem;
	}
	.hero-subtitle {
		font-size: 1.125rem;
		color: #374151;
		max-width: 48rem;
		margin: 0 auto 2rem auto;
	}
	.gradient-text {
		font-weight: 600;
		background: linear-gradient(to right, #c48387, #9a4856);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
	.button-group {
		display: flex;
		justify-content: center;
		gap: 1rem;
		flex-wrap: wrap;
	}
	.button {
		color: #5e2a34;
		padding: 0.75rem 1.5rem;
		border-radius: 9999px;
		font-size: 1.125rem;
		text-decoration: none;
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
		transition: background-color 0.3s;
	}
	.primary {
		background-color: #eba1a5;
	}
	.primary:hover {
		background-color: #e59aa0;
	}
	.secondary {
		background-color: #fae0dc;
	}
	.secondary:hover {
		background-color: #f2cfca;
	}
	@media (min-width: 768px) {
		.hero-title {
			font-size: 3.75rem;
		}
		.hero-subtitle {
			font-size: 1.25rem;
		}
	}
</style>
