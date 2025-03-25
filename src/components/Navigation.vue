<template>
  <div id="app">
    <nav>
      <router-link to="/">Accueil</router-link>
      <router-link to="/cours">Cours</router-link>
      <router-link to="/bibliographie">Bibliographie</router-link>
      <router-link to="/glossaire">Glossaire</router-link>
      <router-link to="/contact">Contact</router-link>
    </nav>
    <router-view></router-view>
  </div>
</template>

<style scoped>
nav {
  display: flex;
  justify-content: center;
  background: #ffffff;
  padding: 15px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  border-bottom: 2px solid #e0e0e0;
}

nav a {
  color: #2c3e50;
  text-decoration: none;
  font-weight: 500;
  padding: 10px 15px;
  transition: color 0.3s ease, background 0.3s ease;
  border-radius: 5px;
}

nav a:hover {
  color: #ffffff;
  background: #42b983;
}

nav a.router-link-exact-active {
  color: #ffffff;
  background: #42b983;
  font-weight: bold;
}
</style>
