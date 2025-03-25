<template>
  <Navigation></Navigation>
  <div class="bibliographie">
    <h1>Références théoriques</h1>
    <div class="reference">
      <h3>Théorie générale des systèmes</h3>
      <p>Ludwig von Bertalanffy, <span>1968</span></p>
    </div>
    <div class="reference">
      <h3>Pédagogie des opprimés</h3>
      <p>Paulo Freire, <span>1970</span></p>
    </div>
  </div>
</template>

<script setup>
import Navigation from './Navigation.vue';
import { useHead } from '@vueuse/head';

useHead({
  title: 'Bibliographie',
});
</script>

<style scoped>
.bibliographie {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 10px;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  text-align: center;
  font-size: 28px;
  margin-bottom: 30px;
  color: #333;
}

.reference {
  background: white;
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
}

.reference h3 {
  font-size: 20px;
  margin-bottom: 5px;
  color: #0077b6;
}

.reference p {
  font-size: 16px;
  color: #555;
}

.reference span {
  font-weight: bold;
  color: #222;
}
</style>
