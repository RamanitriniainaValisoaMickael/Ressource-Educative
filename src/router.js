import { createRouter, createWebHistory } from 'vue-router';
import Accueil from './components/Accueil.vue';
import Cours from './components/Cours.vue';
import Bibliographie from './components/Bibliographie.vue';
import Glossaire from './components/Glossaire.vue';
import Contact from './components/Contact.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';

const routes = [
  { path: '/', name:Accueil,component: Accueil },
  { path: '/cours', name:Cours,component: Cours },
  { path: '/bibliographie', name:Bibliographie,component: Bibliographie },
  { path: '/glossaire', name:Glossaire,component: Glossaire },
  { path: '/contact', name:Contact,component: Contact },
  { path: '/login', name:Login,component: Login },
  { path: '/dashboard', name:Dashboard,component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;