<template>
  <div class="about">
    <button @click="fetchAccessToken">Fetch Access Token</button>
    <div v-if="accessToken">
      <h2>Access Token:</h2>
      <p>{{ accessToken }}</p>
    </div>
  </div>
</template>

<script>
import { fetchAccessToken } from '../services/igdbService.js'

export default {
  data() {
    return {
      accessToken: ''
    }
  },
  methods: {
    async fetchAccessToken() {
      try {
        // Call the fetchAccessToken function
        this.accessToken = await fetchAccessToken()
      } catch (error) {
        console.error('Error fetching access token:', error)
      }
    }
  }
}
</script>

<style>
.about {
  display: flex;
  padding: 1em;
  text-align: center;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 25vh;
}
</style>
