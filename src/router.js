import { createRouter, createWebHistory } from 'vue-router'
import Accueil from './components/Accueil.vue'
import Cours from './components/Cours.vue'
import Bibliographie from './components/Bibliographie.vue'
import Glossaire from './components/Glossaire.vue'
import Contact from './components/Contact.vue'

const routes = [
  { path: '/accueil', component: Accueil },
  { path: '/cours', component: Cours },
  { path: '/bibliographie', component: Bibliographie },
  { path: '/glossaire', component: Glossaire },
  { path: '/contact', component: Contact },
  { path: '/', redirect: '/accueil' }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router