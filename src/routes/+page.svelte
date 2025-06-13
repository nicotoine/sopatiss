
<script>
	import About from "../components/About.svelte";
	import Contact from "../components/Contact.svelte";
	import Footer from "../components/Footer.svelte";
	import Gallery from "../components/Gallery.svelte";
	import Header from "../components/Header.svelte";
	import Hero from "../components/Hero.svelte";
	import Services from "../components/Services.svelte";

    import '@fontsource/poppins'
    import '@fontsource/playfair-display'
  // Importation des composants que vous avez créés
</script>

<svelte:head>
    <title>So' Patiss - Ateliers Pâtisserie et Gâteaux sur Commande à Fécamp</title>
    <meta name="description" content="Découvrez So' Patiss à Fécamp. Sophie Delaporte, pâtissière diplômée, vous propose des ateliers de pâtisserie créatifs et des gâteaux sur commande pour tous vos événements.">
    <meta name="keywords" content="Patisserie, Atelier, So'Patiss, Fécamp, Gâteau, Evénement, Commande, Traiteur, Sophie Delaporte">
  <!--   <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" >
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&family=Playfair+Display:wght@700&display=swap" rel="stylesheet"> -->
</svelte:head>

<div>
  <Header />
  <main>
    <Hero />
    <About />
    <Services />
    <Gallery />
    <Contact />
  </main>
  <Footer />
</div>

<style>
  :global(body) {
    margin: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #f9fafb;
    color: #1f2937;
  }
  :global(a) {
    text-decoration: none;
  }
  :global(h1, h2, h3, h4, h5, h6) {
    font-family: 'Playfair Display', serif;
  }
</style>
