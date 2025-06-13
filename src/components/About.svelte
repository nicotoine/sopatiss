<script lang="ts">
    import { base } from '$app/paths';
</script>

<section id="propos" class="about-section">
    <div class="container">
        <div class="text-content">
            <h2 class="title">Bienvenue chez So' Patiss</h2>
            <p class="paragraph">
                Bonjour, je suis Sophie Delaporte, une passionnée de pâtisserie basée à Fécamp. Titulaire d'un <strong>CAP Pâtissier</strong>, j'ai créé "So' Patiss" pour partager ma passion avec vous de deux manières : en vous apprenant à créer vos propres merveilles lors d'un <strong>atelier de pâtisserie</strong>, ou en réalisant le <strong>gâteau</strong> de vos rêves pour un <strong>événement</strong> spécial.
            </p>
            <p class="paragraph">
                Ma philosophie est simple : des ingrédients de qualité, une touche de créativité, et beaucoup de gourmandise. Chaque <strong>commande</strong> est une nouvelle histoire à raconter.
            </p>
        </div>
        <div class="image-container">
            <img src="{base}/soso.png" alt="[Image d'une pâtissière souriante décorant un gâteau]" class="about-image" >
        </div>
    </div>
</section>

<style>
    .about-section {
        background-color: white;
        padding: 5rem 0;
    }
    .container {
        max-width: 1280px;
        margin: 0 auto;
        padding: 0 1.5rem;
        display: grid;
        gap: 3rem;
        align-items: center;
        justify-content: space-between;
    }
    .title {
        font-family: 'Playfair Display', serif;
        font-size: 1.875rem;
        font-weight: 700;
        color: #1f2937;
        margin-bottom: 1rem;
    }
    .paragraph {
        color: #4b5563;
        line-height: 1.75;
        margin-bottom: 1rem;
    }
    .about-image {
        border-radius: 0.5rem;
        margin: 0 auto;
        max-height: 500px;
    }
    
    .image-container {
        display: flex;
        justify-content: flex-end;
    }
    .text-content {
        text-align: justify;
    }
    @media (min-width: 768px) {
        .container {
            grid-template-columns: repeat(2, minmax(0, 1fr));
        }
    }
</style>
