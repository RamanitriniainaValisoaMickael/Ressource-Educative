<template>
    <div class="cours">
      <h1>Modules disponibles</h1>
      <ul>
        <li v-for="(module, index) in modules" :key="index">
          {{ module.titre }} - {{ module.description }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CoursPage',
    data() {
      return {
        modules: [
          { titre: 'Mathématiques', description: 'Algèbre et géométrie' },
          { titre: 'Physique', description: 'Mécanique classique' },
          { titre: 'Informatique', description: 'Algorithmique' }
        ]
      }
    }
  }
  </script>