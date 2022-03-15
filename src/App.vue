<template>
  <div class="text-cener">
    <StartGame msg="Marvel Game"/>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import StartGame from '@/components/StartGame.vue';

export default defineComponent({
  name: 'App',
  components:{ 
      StartGame, 
  }
});
</script>

