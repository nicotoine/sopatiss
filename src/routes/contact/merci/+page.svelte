<script>
	import { base } from '$app/paths';
</script>

<svelte:head>
	<title>Merci ! - So' Patiss</title>
</svelte:head>

<div class="thank-you-page">
	<div class="container">
		<h1 class="page-title">Message envoyé !</h1>
		<p class="page-subtitle">
			Merci beaucoup pour votre message. Nous avons bien reçu votre demande et nous vous
			recontacterons dans les plus brefs délais.
		</p>
		<a href="{base}/" aria-label="Retour à l'accueil" class="home-link">Retour à l'accueil</a>
	</div>
</div>

<style>
	.thank-you-page {
		display: flex;
		align-items: center;
		justify-content: center;
		min-height: 60vh;
		text-align: center;
		padding: 2rem;
	}
	.container {
		max-width: 600px;
	}
	.page-title {
		font-family: 'Playfair Display', serif;
		font-size: 2.5rem;
		font-weight: 700;
		color: #581c87;
		margin-bottom: 1rem;
	}
	.page-subtitle {
		color: #4b5563;
		font-size: 1.125rem;
		margin-bottom: 2rem;
	}
	.home-link {
		display: inline-block;
		padding: 0.75rem 1.5rem;
		border-radius: 9999px;
		background-color: #ec4899;
		color: white;
		font-weight: 600;
		text-decoration: none;
		transition: background-color 0.3s;
	}
	.home-link:hover {
		background-color: #db2777;
	}
</style>
