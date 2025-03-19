<template>
  <RouterView></RouterView>
  <div id="app">
    <nav>
      <router-link to="/accueil">Accueil</router-link> | 
      <router-link to="/cours">Cours</router-link> | 
      <router-link to="/bibliographie">Bibliographie</router-link> | 
      <router-link to="/glossaire">Glossaire</router-link> | 
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>
<script>
import { RouterLink, RouterView } from 'vue-router';
</script>

<style>
nav {
  padding: 20px;
  text-align: center;
  background-color: #f0f0f0;
}
nav a {
  margin: 0 10px;
  text-decoration: none;
  color: #2c3e50;
}
nav a.router-link-exact-active {
  color: #42b983;
  font-weight: bold;
}
</style>