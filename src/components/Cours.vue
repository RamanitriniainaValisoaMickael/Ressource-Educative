<template>
  <div class="cours">
    <h1>Liste des modules</h1>
    <ul>
      <li>Mathématiques</li>
      <li>Physique</li>
      <li>Informatique</li>
      <li>Histoire</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'CoursPage',
};
</script>

<style scoped>
.cours {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  background-color: #f8f9fa;
  margin: 10px 0;
  padding: 10px;
  border-radius: 4px;
}
</style>