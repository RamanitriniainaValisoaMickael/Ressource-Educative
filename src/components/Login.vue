<template>
  <div class="login-container">
    <div class="login-card">
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
      const defaultUser = {
        email: 'admin@gmail.com',
        password: 'admin',
      };

      if (this.email === defaultUser.email && this.password === defaultUser.password) {
        localStorage.setItem('loggedInUser', JSON.stringify(defaultUser));
        this.$router.push('/dashboard');
      } else {
        this.error = 'Email ou mot de passe incorrect.';
      }
    },
  },
};
</script>

<style scoped>
/* 📌 Contexte global */
.login-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #d3e3fc, #8eb5f0);
  padding: 20px;
}

/* 📌 Carte de connexion */
.login-card {
  background: white;
  padding: 35px;
  border-radius: 12px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  text-align: center;
  max-width: 400px;
  width: 100%;
  animation: fadeIn 0.5s ease-in-out;
}

h1 {
  font-size: 26px;
  color: #2c3e50;
  margin-bottom: 20px;
  font-weight: bold;
}

/* 📌 Champs de formulaire */
.form-group {
  margin-bottom: 20px;
  text-align: left;
}

label {
  display: block;
  font-weight: 600;
  color: #444;
  margin-bottom: 5px;
}

input {
  width: 100%;
  padding: 12px;
  border: 1px solid #ccc;
  border-radius: 6px;
  font-size: 16px;
  transition: all 0.3s ease;
}

input:focus {
  border-color: #42b983;
  outline: none;
  box-shadow: 0 0 8px rgba(66, 185, 131, 0.2);
}

/* 📌 Bouton de connexion */
button {
  width: 100%;
  background: #42b983;
  color: white;
  padding: 12px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background 0.3s ease;
}

button:hover {
  background: #36a176;
}

/* 📌 Message d'erreur */
.error {
  color: red;
  font-size: 14px;
  margin-top: 15px;
}

/* 📌 Animation fadeIn */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
