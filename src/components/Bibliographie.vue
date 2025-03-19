<template>
    <div class="bibliographie">
      <h1>Références théoriques</h1>
      <div v-for="(reference, index) in references" :key="index">
        <h3>{{ reference.titre }}</h3>
        <p>Auteur: {{ reference.auteur }} ({{ reference.annee }})</p>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'BibliographiePage',
    data() {
      return {
        references: [
          { 
            titre: 'Théorie générale des systèmes', 
            auteur: 'Ludwig von Bertalanffy', 
            annee: 1968 
          }
        ]
      }
    }
  }
  </script>