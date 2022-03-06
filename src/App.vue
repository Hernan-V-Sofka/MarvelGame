<template>
  <StartGame msg="Welcome to the Marvel card game"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StartGame from './views/StartViewGame.vue';
import CampGame from './views/CampViewGame.vue';

export default defineComponent({
  name: 'App',
  components: {
    StartGame,
    CampGame
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
