import { createRouter, createWebHistory } from 'vue-router';
import Accueil from './components/Accueil.vue';
import Cours from './components/Cours.vue';
import Bibliographie from './components/Bibliographie.vue';
import Glossaire from './components/Glossaire.vue';
import Contact from './components/Contact.vue';
import Login from './components/Login.vue';
import Dashboard from './components/Dashboard.vue';

const routes = [
  { path: '/', component: Accueil },
  { path: '/cours', component: Cours },
  { path: '/bibliographie', component: Bibliographie },
  { path: '/glossaire', component: Glossaire },
  { path: '/contact', component: Contact },
  { path: '/login', component: Login },
  { path: '/dashboard', component: Dashboard },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;