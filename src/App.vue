<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/games">Games</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  display: flex;
  position: fixed;
  width: 100%;
  opacity: 0.95;
  justify-content: center;
  background-color: #2e333e;
  padding: 1rem;
}

nav {
  width: 100%;
  font-size: 16px;
  text-align: center;
}

nav a.router-link-exact-active {
  color: #38a1ec;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
}

nav a:first-of-type {
  border: 0;
}
</style>
