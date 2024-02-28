<script setup lang="ts"></script>

<template>
  <main>
    <section class="banner">
      <div class="container">
        <div class="home">
          <h1>All your games packed into one nice library</h1>
          <h4>
            Connect to your gaming platforms and unite all your games scattered across them in one
            powerful app
          </h4>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
.banner::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url('src/assets/Elden Ring Banner.jpg');
  background-position: center;
  background-size: cover;

  opacity: 0.5;
  background-repeat: no-repeat;
  z-index: -1;
}
.home {
  display: flex;
  padding: 1em;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
}
</style>
