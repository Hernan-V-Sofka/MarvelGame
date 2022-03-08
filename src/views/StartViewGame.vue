<template>
  <StartGame msg="Start game"/>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StartGame from '@/components/StartGame.vue';

export default defineComponent({
    name: 'StartGame',
    components: {
        StartGame
    }
});
</script>