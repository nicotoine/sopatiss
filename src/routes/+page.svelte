<script>
	import About from '../components/About.svelte';
	import ArticlesCarousel from '../components/ArticlesCarousel.svelte';
	import Contact from '../components/Contact.svelte';
	import Gallery from '../components/Gallery.svelte';
	import Hero from '../components/Hero.svelte';
	import Services from '../components/Services.svelte';

	export let data;
</script>

<svelte:head>
	<meta
		name="description"
		content="Artisane pâtissière à Fécamp, Sophie Delaporte vous propose des ateliers créatifs et des gâteaux sur commande pour tous vos événements. Découvrez nos créations gourmandes."
	/>
	<meta property="og:title" content="So' Patiss - Ateliers Pâtisserie à Fécamp" />
	<meta
		property="og:description"
		content="Découvrez So' Patiss : ateliers de pâtisserie conviviaux et gâteaux sur commande pour vos événements à Fécamp. Créativité et gourmandise au rendez-vous."
	/>
	<script type="application/ld+json">
		{
			"@context": "https://schema.org",
			"@type": "Bakery",
			"name": "So' Patiss - Ateliers et Gourmandises",
			"image": "{new URL(`${base}/sopatiss.jpg`, data.url).href}",
			"@id": "{new URL(base, data.url).href}",
			"url": "{new URL(base, data.url).href}",
			"telephone": "+3368458764 03",
			"priceRange": "€€",
			"servesCuisine": "Pâtisserie Française",
			"description": "Sophie Delaporte, pâtissière diplômée, propose des ateliers de pâtisserie pour adultes et enfants, ainsi que des gâteaux sur commande et un service traiteur pour tous types d'événements à Fécamp."
		}
	</script>
</svelte:head>
<Hero />
<About />
<Services />
<Gallery />
<ArticlesCarousel posts={data.posts} />
<Contact />
