<script lang="ts">
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

	let currentUri = $state('');
	onMount(() => {
		if (!browser) return;
		currentUri = window.location.href;
	});

	let emailToSend = 'contact@sopatiss.fr';
	// State pour les champs du formulaire
	let name = $state('');
	let email = $state('');
	let message = $state('');

	// Fonctions de validation
	function isNameValid(name: string) {
		return name.trim().length > 0;
	}
	function isEmailValid(email: string) {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	}
	function isMessageValid(message: string) {
		return message.trim().length > 0;
	}

	let isFormValid = $derived(
		() => isNameValid(name) && isEmailValid(email) && isMessageValid(message)
	);
</script>

<svelte:head>
	<title>Contact - So' Patiss Fécamp</title>
	<meta
		name="description"
		content="Découvrez So' Patiss à Fécamp. Sophie Delaporte, pâtissière diplômée, vous propose des ateliers de pâtisserie créatifs et des gâteaux sur commande pour tous vos événements."
	/>
	<meta
		name="keywords"
		content="Patisserie, Atelier, So'Patiss, Fécamp, Gâteau, Evénement, Commande, Traiteur, Sophie Delaporte"
	/>
</svelte:head>

<div class="contact-page">
	<div class="container">
		<h1 class="page-title">Contactez-nous</h1>
		<p class="page-subtitle">
			Une question, une demande de devis pour un événement ou une commande spéciale ? Remplissez le
			formulaire ci-dessous et nous vous répondrons au plus vite.
		</p>

		<form action="https://formsubmit.co/{emailToSend}" method="POST" class="contact-form">
			<input type="hidden" name="_next" value="{currentUri}/contact/merci" />
			<input type="hidden" name="_captcha" value="false" />
			<input type="hidden" name="_subject" value="Nouveau message depuis le site So' Patiss !" />

			<div class="form-group">
				<label for="name" class="form-label">Votre nom</label>
				<input type="text" id="name" name="name" class="form-input" required bind:value={name} />
			</div>
			<div class="form-group">
				<label for="email" class="form-label">Votre e-mail</label>
				<input
					type="email"
					id="email"
					name="email"
					class="form-input"
					required
					bind:value={email}
				/>
			</div>
			<div class="form-group">
				<label for="message" class="form-label">Votre message</label>
				<textarea
					id="message"
					name="message"
					rows="6"
					class="form-input"
					required
					bind:value={message}
				></textarea>
			</div>
			<button type="submit" class="submit-button" disabled={!isFormValid}>
				Envoyer le message
			</button>
		</form>
	</div>
</div>

<style>
	.contact-page {
		padding: 4rem 0;
		background-color: #f9fafb;
	}
	.container {
		margin: 0 auto;
		padding: 0 1.5rem;
		@media screen and (min-width: 768px) {
			max-width: 700px;
		}
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

	.contact-form {
		background-color: white;
		padding: 2rem;
		border-radius: 0.5rem;
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);

		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;

		max-width: 80vw;
		@media screen and (min-width: 768px) {
			max-width: 700px;
			margin: 0 auto;
		}
	}
	.form-group {
		margin-bottom: 1.5rem;
		width: 100%;
		display: flex;
		flex-direction: column;
	}
	.form-label {
		display: block;
		margin-bottom: 0.5rem;
		font-weight: 600;
		color: #374151;
	}
	.form-input {
		padding: 0.75rem;
		width: 100% - 0.75rem;
		border: 1px solid #d1d5db;
		border-radius: 0.375rem;
		font-size: 1rem;
		transition:
			border-color 0.2s,
			box-shadow 0.2s;
	}
	.form-input:focus {
		outline: none;
		border-color: #9333ea;
		box-shadow: 0 0 0 3px rgb(147 51 234 / 20%);
	}
	#message {
		resize: vertical;
	}
	.submit-button {
		display: block;
		width: 100%;
		padding: 0.75rem;
		border: none;
		border-radius: 0.375rem;
		background-color: #9333ea;
		color: white;
		font-size: 1.125rem;
		font-weight: 600;
		cursor: pointer;
		transition:
			background-color 0.3s,
			opacity 0.3s;
	}
	.submit-button:hover {
		background-color: #7e22ce;
	}
	.submit-button:disabled {
		background-color: #c084fc;
		cursor: not-allowed;
		opacity: 0.7;
	}
</style>
