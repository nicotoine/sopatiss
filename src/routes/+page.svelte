
<script>
	import About from "../components/About.svelte";
	import ArticlesCarousel from "../components/ArticlesCarousel.svelte";
	import Contact from "../components/Contact.svelte";
	import Gallery from "../components/Gallery.svelte";
	import Hero from "../components/Hero.svelte";
	import Services from "../components/Services.svelte";

  export let data;
</script>



<Hero />
<About />
<Services />
<Gallery />
<ArticlesCarousel posts={data.posts} />
<Contact />
