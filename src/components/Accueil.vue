<script setup>
import { ref, onMounted } from "vue";
import { useHead } from '@vueuse/head';
import Navigation from './Navigation.vue';

const GA_ID = 'G-0GXEPP1BKR';
const successMessage = ref("");

useHead({
  title: 'Accueil',
  script: [
    {
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    }
  ],
  meta: [
    { name: 'description', content: 'Plateforme éducative proposant des ressources pédagogiques' }
  ]
});

onMounted(() => {
  console.log("coucou");

  try {
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    gtag('js', new Date());
    gtag('config', GA_ID);
    
    console.log("Succès : Google Analytics configuré.");
    successMessage.value = "Succès : Google Analytics configuré.";

    // Effacer le message après 3 secondes
    setTimeout(() => {
      successMessage.value = "";
    }, 3000);
  } catch (error) {
    console.error("Échec : Erreur lors de la configuration de Google Analytics", error);
  }
});
</script>

<template>
  <Navigation />
  <div class="accueil">
    <h1>Bienvenue sur notre plateforme éducative</h1>
    <p>Découvrez des ressources pédagogiques pour approfondir vos connaissances.</p>
    <section>
      <h2>À propos</h2>
      <p>Ce site propose des cours, des références théoriques et un glossaire spécialisé.</p>
    </section>

    <!-- Affichage du message de succès -->
    <div v-if="successMessage" class="alert">
      {{ successMessage }}
    </div>
  </div>
</template>

<style scoped>
.accueil {
  max-width: 800px;
  margin: 50px auto;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.accueil h1 {
  font-size: 2rem;
  color: #333;
  margin-bottom: 15px;
}

.accueil p {
  font-size: 1.1rem;
  color: #555;
  line-height: 1.6;
}

/* Section À propos */
.accueil section {
  margin-top: 30px;
  padding: 20px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.accueil h2 {
  font-size: 1.5rem;
  color: #222;
  margin-bottom: 10px;
}

/* Style du message de succès */
.alert {
  background-color: #d4edda;
  color: #155724;
  padding: 15px;
  border-radius: 5px;
  margin-top: 20px;
  text-align: center;
  font-weight: bold;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}
</style>
