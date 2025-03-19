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
  <div class="accueil">
    <h1>Bienvenue sur notre plateforme éducative</h1>
    <p>Découvrez des ressources pédagogiques pour approfondir vos connaissances.</p>
    <section>
      <h2>À propos</h2>
      <p>Ce site propose des cours, des références théoriques et un glossaire spécialisé.</p>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AccueilPage',
};
</script>

<style scoped>
.accueil {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>