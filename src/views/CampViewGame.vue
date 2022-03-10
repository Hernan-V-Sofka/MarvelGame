<template>
  <CampoGame />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CampoGame from '@/components/CampoGame.vue';
export default defineComponent({
    name:'CampView',
    components: {
        CampoGame
    }
});
</script>

<style>

</style>