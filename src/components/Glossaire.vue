<template>
     <Navigation></Navigation>
    <div class="glossaire">
      <h1>Lexique des termes spécialisés</h1>
      <div>
        <h3>Pédagogie différenciée</h3>
        <p>Approche adaptant les méthodes d'enseignement aux besoins individuels.</p>
      </div>
      <div>
        <h3>Socioconstructivisme</h3>
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
    margin: 0 auto;
    padding: 20px;
  }
  
  div {
    margin-bottom: 20px;
  }
  </style>