<template>
  <!-- <div class="d-grid gap-2 max-auto">
    <StartGame msg="Start Game"/>
  </div> -->
  <!-- <div class="text-center">
    <CampoGame />
  </div> -->
  <div class="text-center">
    <Carts />
  </div>
</template>



<script lang="ts">
import { defineComponent, onMounted } from 'vue';
// import StartGame from '@/components/StartGame.vue';
// import CampoGame from '@/components/CampoGame.vue';
import Carts from '@/components/CartsGame.vue';

export default defineComponent({
  name: 'App',
  components:{Carts},
  setup() {
      return { 

      }
  },
})
</script>

