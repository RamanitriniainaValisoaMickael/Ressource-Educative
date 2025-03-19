<template>
    <div class="contact">
      <h1>Nous contacter</h1>
      
      <div class="contact-container">
        <div class="contact-info">
          <h2>Informations de contact</h2>
          <p>📍 12 Rue des Écoles, 75005 Paris</p>
          <p>📞 +33 1 23 45 67 89</p>
          <p>📧 contact@ressources-educatives.fr</p>
          <div class="horaires">
            <h3>Horaires d'ouverture :</h3>
            <p>Lundi-Vendredi : 9h-18h</p>
            <p>Samedi : 10h-15h</p>
          </div>
        </div>
  
        <form @submit.prevent="submitForm" class="contact-form">
          <div class="form-group">
            <label>Nom complet :</label>
            <input type="text" v-model="formData.nom" required>
          </div>
  
          <div class="form-group">
            <label>Email :</label>
            <input type="email" v-model="formData.email" required>
          </div>
  
          <div class="form-group">
            <label>Sujet :</label>
            <select v-model="formData.sujet" required>
              <option value="">Choisir un sujet</option>
              <option>Question pédagogique</option>
              <option>Support technique</option>
              <option>Partenariat</option>
              <option>Autre</option>
            </select>
          </div>
  
          <div class="form-group">
            <label>Message :</label>
            <textarea v-model="formData.message" rows="5" required></textarea>
          </div>
  
          <button type="submit">Envoyer</button>
  
          <div v-if="submitStatus" class="status-message">
            {{ submitStatus }}
          </div>
        </form>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'ContactPage',
    data() {
      return {
        formData: {
          nom: '',
          email: '',
          sujet: '',
          message: ''
        },
        submitStatus: null
      }
    },
    methods: {
      submitForm() {
        // Simulation d'envoi de formulaire
        console.log('Données du formulaire :', this.formData)
        this.submitStatus = 'Message envoyé avec succès !'
        this.formData = {
          nom: '',
          email: '',
          sujet: '',
          message: ''
        }
        setTimeout(() => {
          this.submitStatus = null
        }, 3000)
      }
    }
  }
  </script>
  
  <!-- <style scoped>
  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
    max-width: 1000px;
    margin: 30px auto;
  }
  
  .contact-info {
    background-color: #f8f9fa;
    padding: 20px;
    border-radius: 8px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  .form-group label {
    display: block;
    margin-bottom: 5px;
  }
  
  .form-group input,
  .form-group select,
  .form-group textarea {
    width: 100%;
    padding: 8px;
    border: 1px solid #ddd;
    border-radius: 4px;
  }
  
  button {
    background-color: #42b983;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #3aa876;
  }
  
  .status-message {
    margin-top: 15px;
    color: #42b983;
    font-weight: bold;
  }
  
  @media (max-width: 768px) {
    .contact-container {
      grid-template-columns: 1fr;
    }
  }
  </style> -->