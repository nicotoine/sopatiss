<script>
	import { base } from '$app/paths';

	let mobileMenuOpen = false;

	function toggleMobileMenu() {
		mobileMenuOpen = !mobileMenuOpen;
	}

	function closeMenu() {
		mobileMenuOpen = false;
	}
</script>

<header class="header">
	<nav class="nav-container">
		<a
			href="{base}/"
			class="logo-container"
			aria-label="Page d'accueil de So' Patiss"
			title="Page d'accueil de So' Patiss"
		>
			<img src="{base}/sopatiss.jpg" alt="Logo So' Patiss" class="logo-img" />
			<span class="logo-text">So' Patiss</span>
		</a>
		<div class="desktop-nav">
			<a
				aria-label="Page d'accueil de So' Patiss"
				title="Page d'accueil de So' Patiss"
				href="{base}/"
				class="nav-link">Accueil</a
			>
			<a
				aria-label="Section à propos de So' Patiss"
				title="Section à propos de So' Patiss"
				href="{base}/#propos"
				class="nav-link">À propos</a
			>
			<a
				aria-label="Section nos services de So' Patiss"
				title="Section nos services de So' Patiss"
				href="{base}/#services"
				class="nav-link">Nos Services</a
			>
			<a
				aria-label="Page articles de So' Patiss"
				title="Page articles de So' Patiss"
				href="{base}/articles"
				class="nav-link">Articles</a
			>
			<a
				aria-label="Page contact et commande de So' Patiss"
				title="Page contact et commande de So' Patiss"
				href="{base}/contact"
				class="nav-button">Contact & Commande</a
			>
		</div>
		<div class="mobile-menu-button-container">
			<button on:click={toggleMobileMenu} class="mobile-menu-button" aria-label="Afficher le menu">
				<svg
					class="icon"
					fill="none"
					stroke="currentColor"
					viewBox="0 0 24 24"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M4 6h16M4 12h16m-7 6h7"
					></path>
				</svg>
			</button>
		</div>
	</nav>
	{#if mobileMenuOpen}
		<div class="mobile-menu">
			<a
				aria-label="Page d'accueil de So' Patiss"
				title="Page d'accueil de So' Patiss"
				href="{base}/"
				on:click={closeMenu}
				class="mobile-nav-link">Accueil</a
			>
			<a
				aria-label="Section à propos de So' Patiss"
				title="Section à propos de So' Patiss"
				href="{base}/#propos"
				on:click={closeMenu}
				class="mobile-nav-link">À propos</a
			>
			<a
				aria-label="Section nos services de So' Patiss"
				title="Section nos services de So' Patiss"
				href="{base}/#services"
				on:click={closeMenu}
				class="mobile-nav-link">Nos Services</a
			>
			<a
				aria-label="Page articles de So' Patiss"
				title="Page articles de So' Patiss"
				href="{base}/articles"
				on:click={closeMenu}
				class="mobile-nav-link">Articles</a
			>
			<a
				aria-label="Page contact et commande de So' Patiss"
				title="Page contact et commande de So' Patiss"
				href="{base}/contact"
				on:click={closeMenu}
				class="mobile-nav-link">Contact & Commande</a
			>
		</div>
	{/if}
</header>

<style>
	/* Le CSS reste le même, seules les modifications ci-dessus sont nécessaires */
	.header {
		background-color: white;
		box-shadow:
			0 4px 6px -1px rgb(0 0 0 / 0.1),
			0 2px 4px -2px rgb(0 0 0 / 0.1);
		position: sticky;
		top: 0;
		z-index: 50;
	}
	.nav-container {
		max-width: 1280px;
		margin: 0 auto;
		padding: 0.75rem 1.5rem;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.logo-container {
		display: flex;
		align-items: center;
	}
	.logo-img {
		height: 3rem;
		width: 3rem;
		margin-right: 0.75rem;
		border-radius: 9999px;
		box-shadow:
			0 10px 15px -3px rgb(0 0 0 / 0.1),
			0 4px 6px -4px rgb(0 0 0 / 0.1);
	}
	.logo-text {
		font-weight: 700;
		font-size: 1.25rem;
		color: #7e22ce;
	}
	.desktop-nav {
		display: none;
	}
	.nav-link {
		color: #4b5563;
		transition: color 0.3s;
	}
	.nav-link:hover {
		color: #9333ea;
	}
	.nav-button {
		background-color: #9333ea;
		color: white;
		padding: 0.5rem 1rem;
		border-radius: 9999px;
		transition: background-color 0.3s;
	}
	.nav-button:hover {
		background-color: #7e22ce;
	}
	.mobile-menu-button-container {
		display: block;
	}
	.mobile-menu-button {
		background: none;
		border: none;
		color: #4b5563;
		cursor: pointer;
	}
	.mobile-menu-button:hover {
		color: #9333ea;
	}
	.icon {
		height: 1.5rem;
		width: 1.5rem;
	}
	.mobile-menu {
		background-color: white;
		padding-top: 0.5rem;
		padding-bottom: 0.5rem;
	}
	.mobile-nav-link {
		display: block;
		padding: 0.5rem 1.5rem;
		color: #4b5563;
		text-decoration: none;
	}
	.mobile-nav-link:hover {
		background-color: #f3e8ff;
	}

	@media (min-width: 768px) {
		.desktop-nav {
			display: flex;
			align-items: center;
			gap: 1.5rem;
		}
		.mobile-menu-button-container,
		.mobile-menu {
			display: none;
		}
	}
</style>
