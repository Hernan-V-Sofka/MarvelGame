<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, onBeforeMount } from "vue";
import { useRouter, useRoute } from "vue-router";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default defineComponent({
  name: "App",
  setup() {
    const router = useRouter();
    const route = useRoute();

    onBeforeMount(() => {
      firebase.auth().onAuthStateChanged((user) => {
        if (!user) {
          router.replace("/login");
        } else if (route.path == "/login" || route.path == "/register") {
          router.replace("/");
        }
      });
    });
  },
});
</script>

<style>
.decoration{
  text-decoration: none;
  color: #fff;
}
</style>
