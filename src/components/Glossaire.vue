<template>
    <div class="glossaire">
      <h1>Lexique des termes spécialisés</h1>
      
      <div class="search-bar">
        <input 
          type="text" 
          v-model="searchQuery" 
          placeholder="Rechercher un terme..."
        >
      </div>
  
      <div class="termes-list">
        <div v-for="(terme, index) in filteredTermes" :key="index" class="terme-card">
          <h3>{{ terme.nom }}</h3>
          <p>{{ terme.definition }}</p>
          <span class="categorie">{{ terme.categorie }}</span>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'GlossairePage',
    data() {
      return {
        searchQuery: '',
        termes: [
          {
            nom: 'Pédagogie différenciée',
            definition: 'Approche éducative adaptant les méthodes d\'enseignement aux besoins individuels des apprenants',
            categorie: 'Pédagogie'
          },
          {
            nom: 'Socioconstructivisme',
            definition: 'Théorie d\'apprentissage mettant l\'accent sur la construction sociale des connaissances',
            categorie: 'Théories éducatives'
          },
          {
            nom: 'Andragogie',
            definition: 'Méthode d\'enseignement spécifique à l\'éducation des adultes',
            categorie: 'Pédagogie'
          }
        ]
      }
    },
    computed: {
      filteredTermes() {
        return this.termes.filter(terme => 
          terme.nom.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          terme.definition.toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      }
    }
  }
  </script>
  
  <style scoped>
  .search-bar {
    margin: 20px 0;
    text-align: center;
  }
  
  .search-bar input {
    padding: 10px;
    width: 300px;
  }
  
  .termes-list {
    display: grid;
    gap: 15px;
    max-width: 800px;
    margin: 0 auto;
  }
  
  .terme-card {
    border: 1px solid #ddd;
    padding: 15px;
    border-radius: 8px;
  }
  
  .categorie {
    display: inline-block;
    margin-top: 10px;
    padding: 5px 10px;
    background-color: #f0f0f0;
    border-radius: 15px;
    font-size: 0.8em;
  }
  </style>