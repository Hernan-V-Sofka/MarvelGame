<template>
  <!-- <div class="d-grid gap-2 max-auto">
    <StartGame msg="Start Game"/>
  </div> -->
  <div class="text-center">
    <CampoGame />
  </div>
</template>



<script lang="ts">
import { defineComponent, onMounted } from 'vue';
// import StartGame from '@/components/StartGame.vue';
import CampoGame from '@/components/CampoGame.vue';

export default defineComponent({
  name: 'App',
  components:{CampoGame},
  setup() {
      return { 

      }
  },
})
</script>

