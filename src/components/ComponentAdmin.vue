<template>
  <div class="vh-100">
    <div class="container py-5 h-100">
      <h3 class="text-center">Ingreso de Cartas</h3>
      <form @submit.prevent="saveCarts()">
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">Id: </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            v-model="idCart"
            required
          />
        </div>
        <div class="sm-2">
          <label for="Title" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            id="titulo"
            v-model="title"
            required
          />
        </div>
        <div class="sm-2">
          <label for="Xp" class="form-label">XP</label>
          <input
            type="text"
            class="form-control"
            id="Xp"
            v-model="xp"
            required
          />
        </div>
        <div class="sm-2">
          <label for="url" class="form-label">URL Imagen</label>
          <input
            type="text"
            class="form-control"
            id="urlImagen"
            v-model="urlImg"
            required
          />
        </div>

        <div class="sm-2">
          <label for="descripcion" class="form-label">Descripcion</label>
          <textarea
            class="form-control"
            aria-label="Descripcio"
            v-model="description"
            required
          ></textarea>
        </div>

        <div class="sm-2">
          <label for="Caracteristica" class="form-label">Caracteristica</label>
          <textarea
            class="form-control"
            aria-label="Caracteristicas"
            v-model="caracteristicas"
            required
          ></textarea>
        </div>

        <hr />
        <div class="d-flex justify-content-evenly">
          <button type="submit" class="btn btn-primary" value="obtener">
            Ingresar Carta
          </button>
          <router-link type="submit" class="btn btn-secondary" to="/listCarts">
            Listar Cartas</router-link
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script lang= "ts">
import { defineComponent } from "vue";
import Swal from "sweetalert2";
import { addDoc } from "firebase/firestore";
import cartsCollRef from "@/main";

export default defineComponent({
  name: "ComponentAdmin",
  components: {},
  data() {
    return {
      idCart: null,
      title: null,
      caracteristicas: null,
      description: null,
      xp: null,
      urlImg: null,
    };
  },
  methods: {
    okSave() {
      Swal.fire({
        title: "Guardado",
        text: "La informacion de la carta se ha Guardado Correctamente",
        icon: "success",
      });
    },
    notSave() {
      Swal.fire({
        title: "Error",
        text: "La informacion de la carta no se pudo guardar Correctamente",
        icon: "error",
      });
    },
    async saveCarts() {
      await addDoc(cartsCollRef, this.$data)
        .then((result) => {
          this.okSave();
          this.$router.push("/listCarts");
        })
        .catch((error) => this.notSave());
    },
  },
});
</script>