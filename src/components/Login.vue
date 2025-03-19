<template>
    <div class="login">
      <h1>Connexion</h1>
      <form @submit.prevent="login">
        <div class="form-group">
          <label>Email :</label>
          <input type="email" v-model="email" required />
        </div>
        <div class="form-group">
          <label>Mot de passe :</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Se connecter</button>
        <p v-if="error" class="error">{{ error }}</p>
      </form>
    </div>
  </template>
  
  <script>
  import { useHead } from '@vueuse/head';
  useHead({
  title: 'Login',
});
  export default {
    name: 'LoginPage',
    data() {
      return {
        email: '',
        password: '',
        error: '',
      };
    },
    methods: {
      login() {
        // Utilisateur par défaut
        const defaultUser = {
          email: 'admin@gmail.com',
          password: 'admin',
        };
  
        // Vérifier si les identifiants correspondent à l'utilisateur par défaut
        if (this.email === defaultUser.email && this.password === defaultUser.password) {
          // Stocker l'utilisateur connecté dans localStorage
          localStorage.setItem('loggedInUser', JSON.stringify(defaultUser));
          this.$router.push('/dashboard'); // Rediriger vers le tableau de bord
        } else {
          this.error = 'Email ou mot de passe incorrect.';
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .login {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    margin-bottom: 5px;
  }
  
  input {
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
  
  .error {
    color: red;
    margin-top: 10px;
  }
  </style>