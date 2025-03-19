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
  <div class="cours">
    <h1>Liste des modules</h1>
    <ul>
      <li>Mathématiques</li>
      <li>Physique</li>
      <li>Informatique</li>
      <li>Histoire</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CoursPage',
};
</script>

<style scoped>
.cours {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f8f9fa;
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
}
</style>