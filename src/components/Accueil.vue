<template>
  <div class="accueil">
    <h1>Bienvenue sur notre plateforme éducative</h1>
    <p>Découvrez des ressources pédagogiques pour approfondir vos connaissances.</p>
    <section>
      <h2>À propos</h2>
      <p>Ce site propose des cours, des références théoriques et un glossaire spécialisé.</p>
    </section>
  </div>
</template>

<script>
import { useHead } from '@vueuse/head'
import { onMounted } from 'vue'

const GA_ID = 'G-0GXEPP1BKR'

useHead({
  title: 'Accueil',
  script: [
    {
      async: true,
      src: `https://www.googletagmanager.com/gtag/js?id=${GA_ID}`
    }
  ],
  meta: [
    { name: 'description', content: 'Plateforme éducative proposant des ressources pédagogiques' }
  ]
})

onMounted(() => {
  window.dataLayer = window.dataLayer || []
  function gtag() {
    window.dataLayer.push(arguments)
  }
  gtag('js', new Date())
  gtag('config', GA_ID)
})

export default {
  name: 'AccueilPage'
}
</script>

<style scoped>
.accueil {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}
</style>