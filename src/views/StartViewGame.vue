<template>
  <StartGame msg="Welcome to the Marvel Card Game"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StartGame from '@/components/StartGame.vue';

export default defineComponent({
    name: 'StartView',
    components: {
      StartGame
    }
});
</script>