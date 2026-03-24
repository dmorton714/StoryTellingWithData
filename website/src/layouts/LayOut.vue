<script setup>
import NavBar from '../components/NavBar.vue'

</script>


<template>
  <div class="app">
    <NavBar />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>


<style scoped>
.app {
  min-height: 100vh;
  background: var(--color-bg);
}

.main {
  padding-top: 20px;
}
</style>
