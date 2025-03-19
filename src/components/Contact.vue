<template>
    <div class="contact">
      <h1>Contactez-nous</h1>
      <p>Pour toute question, vous pouvez nous contacter aux coordonnées suivantes :</p>
      <ul>
        <li>Email : contact@ressources-educatives.fr</li>
        <li>Téléphone : +33 1 23 45 67 89</li>
        <li>Adresse : 12 Rue des Écoles, 75005 Paris</li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
  };
  </script>
  
  <style scoped>
  .contact {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
  }
  
  ul {
    list-style-type: none;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
  }
  </style>