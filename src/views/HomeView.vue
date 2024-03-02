<script setup lang="ts"></script>

<template>
  <main>
    <section class="banner">
      <div class="container">
        <div class="home">
          <h1>Game Boxed</h1>
          <h4>A platform to connect all your games across all services into one library</h4>
        </div>
      </div>
    </section>

    <section class="games">
      <div class="title-bar">
        <h2>[PlaceHolder]</h2>
        <p>Something you can put here. This is a cool feature to test.</p>
      </div>

      <div class="game-library">
        <div class="library-img"></div>
      </div>
    </section>

    <section class="games">
      <div class="title-bar">
        <h2>[Placeholder]</h2>
        <h6>
          <p>Something you can put here. This is a cool feature to test.</p>
        </h6>
      </div>
      <div class="game-library">
        <div class="library-img"></div>
      </div>
    </section>

    <section class="friend">
      <div class="title-bar">
        <h2>[Placeholder]</h2>
        <h6>Something you can put here. This is a cool feature to test</h6>
      </div>
    </section>

    <section class="lists">
      <div class="row landing-feature-showcase">
        <div class="col my-auto">
          <h2>[Placeholder]</h2>
          <p>Something you can put here. This is a cool feature to test.</p>
        </div>
        <div class="col background-img">
          <img src="../assets/Elden Ring Banner.jpg" alt="List" class="bg-image" />
        </div>
      </div>
    </section>

    <section class="lists">
      <div class="row landing-feature-showcase">
        <div class="col background-img">
          <img src="../assets/Elden Ring Banner.jpg" alt="List" class="bg-image" />
        </div>

        <div class="col my-auto">
          <h2>[Placeholder]</h2>
          <p>Something you can put here. This is a cool feature to test.</p>
        </div>
      </div>
    </section>

    <section class="friend">
      <div class="title-bar">
        <h2>Frequently Asked Questions</h2>
        <h6>And we have answers</h6>
      </div>
    </section>
  </main>
</template>

<style scoped>
/* First Section */
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

  opacity: 0.65;
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
  color: rgb(255, 255, 255);

  h1 {
    font-size: 2.5rem;
  }

  h6 {
    font-size: 1rem;
  }
}

/* Second Section */

.title-bar {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 60px 15px;
  align-items: center;
  text-align: center;
  color: white;

  h2 {
    font-size: 2rem;
    font-weight: 600;
  }

  h6 {
    font-size: 1rem;
    font-weight: 300;
    color: rgb(195, 214, 255);
    max-width: 768px;
  }
}

.game-library {
  position: relative;
  height: 300px;
}

.game-library::before {
  content: '';
  background-image: url('src/assets/Elden Ring Banner.jpg');
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.35;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
}

.game-library::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 100%;
}

/* Feature Showcase */
.lists {
  display: flex;
  align-items: center;
  justify-content: center;
}

@media (max-width: 768px) {
  .col {
    flex-direction: column;
    order: 1;
  }

  .my-auto {
    order: 1;
  }

  .background-img {
    order: 2;
  }
}

.row {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  color: white;
  padding: 0 24px;
}

.col {
  flex-grow: 1;
  max-width: 600px;
  margin-bottom: 16px;
  padding: 0 16px;

  p {
    color: rgb(195, 214, 255);
  }
}
.bg-image {
  max-width: 100%;
  border-radius: 8px;
  border-style: solid;
  border-width: 0.15px;
  border-color: rgb(46, 46, 46);
}
</style>
