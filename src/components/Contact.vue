<template>
  <Navigation></Navigation>
  <div class="contact">
    <h1>Contactez-nous</h1>
    <p>Pour toute question, vous pouvez nous contacter aux coordonnées suivantes :</p>
    <ul>
      <li>
        <span class="icon">📧</span> 
        <strong>Email :</strong> contact@ressources-educatives.fr
      </li>
      <li>
        <span class="icon">📞</span> 
        <strong>Téléphone :</strong> +33 1 23 45 67 89
      </li>
      <li>
        <span class="icon">📍</span> 
        <strong>Adresse :</strong> 12 Rue des Écoles, 75005 Paris
      </li>
    </ul>
  </div>
</template>

<script setup>
import { useHead } from '@vueuse/head';
import Navigation from './Navigation.vue';

useHead({
  title: 'Contact',
});
</script>

<style scoped>
.contact {
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

p {
  font-size: 16px;
  color: #555;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

li {
  background: white;
  padding: 12px;
  margin-bottom: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: start;
  font-size: 16px;
  color: #222;
}

.icon {
  font-size: 20px;
  margin-right: 10px;
}
</style>
