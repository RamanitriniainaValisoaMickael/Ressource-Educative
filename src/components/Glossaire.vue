<template>
     <div id="app">
    <nav>
      <router-link to="/">Accueil</router-link> |
      <router-link to="/cours">Cours</router-link> |
      <router-link to="/bibliographie">Bibliographie</router-link> |
      <router-link to="/glossaire">Glossaire</router-link> |
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
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
  
  <script>
  export default {
    name: 'GlossairePage',
  };
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