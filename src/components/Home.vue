<template>
  <h1>Welcome</h1>
  <button @click="CloseSession">Salir</button>
  <router-link class="btn btn-dark fs-6" type="submit" to="/game">Start</router-link>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAuth, signOut } from "firebase/auth";
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
  },
});
</script>