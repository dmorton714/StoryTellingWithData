<template>
  <nav class="nav">
    <div class="container nav-inner">
      <div class="logo">STORY TELLING WITH DATA</div>

      <div class="links" :class="{ open: isOpen }">
        <router-link to="/">Home</router-link>
        <router-link to="/data">Data</router-link>
        <router-link to="/plot">Plot</router-link>
        <router-link to="/dash">Dashboard</router-link>
        <router-link to="/web">Web</router-link>
        <router-link to="/inspo">Inspiration</router-link>
      </div>

      <button class="menu-btn" @click="isOpen = !isOpen">
        ☰
      </button>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
const isOpen = ref(false)
</script>

<style scoped>
.nav {
  background: var(--color-dark);
  color: white;
}

.nav-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.links {
  display: flex;
  text-transform: uppercase;
  gap: 15px;
}

.menu-btn {
  display: none;
}

/* Mobile */
@media (max-width: 768px) {
  .links {
    position: absolute;
    top: 60px;
    right: 0;
    background: var(--color-dark);
    flex-direction: column;
    padding: 20px;
    display: none;
  }

  .links.open {
    display: flex;
  }

  .menu-btn {
    display: block;
    background: none;
    color: white;
    font-size: 20px;
  }
}
</style>
