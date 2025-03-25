<template>
  <Navigation></Navigation>
  <div class="glossaire">
    <h1>Lexique des termes spécialisés</h1>
    <div class="term">
      <h3>📚 Pédagogie différenciée</h3>
      <p>Approche adaptant les méthodes d'enseignement aux besoins individuels.</p>
    </div>
    <div class="term">
      <h3>🧠 Socioconstructivisme</h3>
      <p>Théorie d'apprentissage basée sur la construction sociale des connaissances.</p>
    </div>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import Navigation from './Navigation.vue';

useHead({
  title: 'Glossaire',
});
</script>

<style scoped>
.glossaire {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  text-align: center;
}

h1 {
  font-size: 28px;
  color: #333;
  margin-bottom: 20px;
}

.term {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.term:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}

.term h3 {
  font-size: 20px;
  margin-bottom: 5px;
  color: #0077b6;
}

.term p {
  font-size: 16px;
  color: #555;
}
</style>
