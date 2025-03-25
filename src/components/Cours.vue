<template>
  <Navigation></Navigation>
  <div class="cours">
    <h1>Liste des modules</h1>
    <ul>
      <li>📐 Mathématiques</li>
      <li>🔬 Physique</li>
      <li>💻 Informatique</li>
      <li>📜 Histoire</li>
    </ul>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import Navigation from './Navigation.vue';

useHead({
  title: 'Cours',
});
</script>

<style scoped>
.cours {
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

ul {
  list-style: none;
  padding: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

li {
  background: white;
  padding: 15px 20px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  font-size: 18px;
  font-weight: bold;
  color: #222;
  width: 100%;
  max-width: 400px;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

li:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.15);
}
</style>
