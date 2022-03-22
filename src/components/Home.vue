<template>
  <h1>Welcome</h1>
  <button @click="CloseSession">Salir</button>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { getAuth, signOut } from "firebase/auth";
export default defineComponent({
  name: "HomeGame",
  methods: {
    CloseSession() {
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