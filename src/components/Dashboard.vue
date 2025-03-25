<script setup>
import { useHead } from '@vueuse/head';
import { ref, onMounted } from 'vue';

const GA_MEASUREMENT_ID = 'G-0GXEPP1BKR';
const GA_API_SECRET = 'YOUR_API_SECRET'; // À générer dans Google Cloud Console
const visitorStats = ref(null);
const error = ref(null);

useHead({
  title: 'Statistiques Visiteurs en Temps Réel',
  meta: [{
    name: 'description',
    content: 'Tableau de bord analytique avec données GA4 en temps réel'
  }]
});

const fetchAnalyticsData = async () => {
  try {
    const response = await fetch('https://analyticsdata.googleapis.com/v1beta/properties/' + GA_MEASUREMENT_ID + ':runReport', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${GA_API_SECRET}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "dateRanges": [{
          "startDate": "today",
          "endDate": "today"
        }],
        "metrics": [{
          "name": "activeUsers"
        }],
        "dimensions": [{
          "name": "country"
        }]
      })
    });

    if (!response.ok) throw new Error('Erreur API Google Analytics');
    
    const data = await response.json();
    
    visitorStats.value = {
      realTime: data.rows?.[0]?.metricValues?.[0]?.value || 0,
      today: data.totals?.[0]?.values?.[0] || 0,
      total: data.totals?.[1]?.values?.[0] || 0
    };

  } catch (err) {
    error.value = err.message;
    console.error('Erreur analytics:', err);
  }
};

onMounted(() => {
  fetchAnalyticsData();
  setInterval(fetchAnalyticsData, 300000); // Actualisation toutes les 5 minutes
});
</script>

<template>
  <div class="analytics-container">
    <h1>Statistiques GA4 en Direct</h1>
    
    <div v-if="error" class="error-message">
      {{ error }}
    </div>

    <div v-else-if="!visitorStats" class="loading">
      <div class="loader"></div>
      <p>Connexion à Google Analytics...</p>
    </div>

    <div v-else class="stats-grid">
      <div class="stat-card realtime">
        <div class="stat-value">{{ visitorStats.realTime }}</div>
        <div class="stat-label">Utilisateurs actifs</div>
      </div>
      
      <div class="stat-card">
        <div class="stat-value">{{ visitorStats.today }}</div>
        <div class="stat-label">Visites aujourd'hui</div>
      </div>
      
      <div class="stat-card total">
        <div class="stat-value">{{ visitorStats.total }}</div>
        <div class="stat-label">Visites totales</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.analytics-container {
  max-width: 1200px;
  margin: 2rem auto;
  padding: 20px;
}

.loading {
  text-align: center;
  padding: 2rem;
}

.loader {
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 1s linear infinite;
  margin: 0 auto 1rem;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

.error-message {
  color: #e74c3c;
  background: #f8d7da;
  padding: 1rem;
  border-radius: 4px;
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-top: 2rem;
}

.stat-card {
  background: #fff;
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s, box-shadow 0.2s;
}

.stat-card:hover {
  transform: translateY(-3px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
}

.stat-card.realtime {
  border-left: 4px solid #2ecc71;
}

.stat-card.total {
  border-left: 4px solid #3498db;
}

.stat-value {
  font-size: 2.8rem;
  font-weight: 700;
  color: #2c3e50;
  margin-bottom: 0.5rem;
}

.stat-label {
  color: #7f8c8d;
  font-size: 1rem;
  font-weight: 500;
}

h1 {
  text-align: center;
  color: #2c3e50;
  margin-bottom: 2rem;
  font-size: 2.2rem;
  font-weight: 600;
}
</style>