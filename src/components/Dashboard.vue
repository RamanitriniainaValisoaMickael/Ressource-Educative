<template>
    <Navigation></Navigation>
    <div class="dashboard">
      <h1>Tableau de bord</h1>
      <p>Bienvenue, {{ user.email }} !</p>
      <button @click="logout">Se déconnecter</button>
    </div>
  </template>
  
  <script>
  import { useHead } from '@vueuse/head';
  import Navigation from './Navigation.vue';
  useHead({
  title: 'Dashboard',
});
  export default {
    name: 'DashboardPage',
    data() {
      return {
        user: JSON.parse(localStorage.getItem('loggedInUser')) || {},
      };
    },
    methods: {
      logout() {
        localStorage.removeItem('loggedInUser');
        this.$router.push('/login');
      },
    },
  };
  </script>
  
  <style scoped>
  .dashboard {
    max-width: 800px;
    margin: 0 auto;
    padding: 20px;
    text-align: center;
  }
  
  button {
    background-color: #ff4d4d;
    color: white;
    padding: 10px 20px;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  button:hover {
    background-color: #ff1a1a;
  }
  </style>