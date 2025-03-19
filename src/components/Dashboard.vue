<script setup>
import { useHead } from '@vueuse/head';
import { ref, onMounted } from 'vue';

useHead({
  title: 'Analytic',
  script: [
    {
      // Injection du script GTM dans le head
      children: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-NTTJ3VZ6');`
    }
  ]
});

// Variable réactive pour stocker les données de dataLayer
const dataLayerItems = ref([]);

// Au montage, attendre quelques secondes pour récupérer dataLayer, puis le stocker dans dataLayerItems
onMounted(() => {
  setTimeout(() => {
    // Affiche dans la console pour vérification
    console.log('dataLayer:', window.dataLayer);
    dataLayerItems.value = window.dataLayer || [];
  }, 3000);
});
</script>

<template>
  <h1>Analytic DataLayer</h1>
  <div v-if="dataLayerItems.length === 0">
    <p>Chargement des données...</p>
  </div>
  <div v-else>
    <table class="data-table">
      <thead>
        <tr>
          <th>#</th>
          <th>Item (JSON)</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in dataLayerItems" :key="index">
          <td>{{ index + 1 }}</td>
          <td>{{ JSON.stringify(item) }}</td>
        </tr>
      </tbody>
    </table>
  </div>
  <!-- Bloc noscript pour les navigateurs sans JS -->
  <noscript>
    <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-NTTJ3VZ6"
            height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
</template>

<style scoped>
.data-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: Arial, sans-serif;
}

.data-table th,
.data-table td {
  border: 1px solid #ddd;
  padding: 8px;
  text-align: left;
}

.data-table th {
  background-color: #f4f4f4;
  color: #333;
}

.data-table tr:nth-child(even) {
  background-color: #fafafa;
}

.data-table tr:hover {
  background-color: #f1f1f1;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}
</style>
