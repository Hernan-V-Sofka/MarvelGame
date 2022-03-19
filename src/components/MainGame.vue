<template>
  <CampoGame />
  <Carts />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CampoGame from "@/components/CampoGame.vue";
import Carts from "@/components/CartsGame.vue";
export default defineComponent({
  name: "MainGame",
  components: {
    CampoGame,
    Carts,
  },
});
</script>

<style>
</style>