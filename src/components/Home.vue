<template>
  <h1>Welcome</h1>
  <button @click="CloseSession">Salir</button>
  <router-link class="btn btn-dark fs-6" type="submit" to="/game"
    @click="getCarts()"
    >Start</router-link
  >
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAuth, signOut } from "firebase/auth";
import { getDeckCarts } from "@/services/CartsService";

export default defineComponent({
  name: "HomeGame",
  methods: {
    async CloseSession() {
      const auth = getAuth();
      signOut(auth)
        .then()
        .catch((error) => {
          console.log(error);
          alert("Problemas al cerrar su session");
        });
    },

    async getCarts(){
      const res = await getDeckCarts()
      this.carts = res.data;
      localStorage.setItem("Cartas", JSON.stringify(this.carts));
    },
  },
});
</script>