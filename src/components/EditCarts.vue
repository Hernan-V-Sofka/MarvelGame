<template>
  <div class="vh-100">
    <div class="container py-5 h-100">
      <h3 class="text-center">Actualizar Cartas</h3>
      <form @submit.prevent="updateCart()">
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">Id: </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            disabled
            v-model="cartInfo.idCart"
          />
        </div>
        <div class="sm-2">
          <label for="Title" class="form-label">Title</label>
          <input
            type="text"
            class="form-control"
            id="titulo"
            v-model="cartInfo.title"
          />
        </div>
        <div class="sm-2">
          <label for="Xp" class="form-label">XP</label>
          <input
            type="text"
            class="form-control"
            id="Xp"
            v-model="cartInfo.xp"
          />
        </div>
        <div class="sm-2">
          <label for="url" class="form-label">URL Imagen</label>
          <input
            type="text"
            class="form-control"
            id="urlImagen"
            disabled
            v-model="cartInfo.urlImg"
          />
        </div>

        <div class="sm-2">
          <label for="descripcion" class="form-label">Descripcion</label>
          <textarea
            class="form-control"
            aria-label="Descripcio"
            v-model="cartInfo.description"
          ></textarea>
        </div>

        <div class="sm-2">
          <label for="Caracteristica" class="form-label">Caracteristica</label>
          <textarea
            class="form-control"
            aria-label="Caracteristicas"
            v-model="cartInfo.caracteristicas"
          ></textarea>
        </div>

        <hr />
        <div class="d-flex justify-content-evenly">
          <button type="submit" class="btn btn-primary" value="updateCart">
            Actualizar Carta
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import cartsCollRef from "@/main";
import Swal from "sweetalert2";
import { getDoc, doc, setDoc } from "firebase/firestore";
import { defineComponent } from "vue";

export default defineComponent({
  data() {
    return {
      selectedCart: {},
      cartId: null,
      docRef: null,
      cartInfo: {
        idCart: null,
        title: null,
        xp: null,
        urlImg: null,
        description: null,
        caracteristicas: null,
      },
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
    async getCart() {
      this.docRef = doc(cartsCollRef, this.cartId);
      let cart = await getDoc(this.docRef);
      this.cartInfo.idCart = cart.data()["idCart"];
      this.cartInfo.title = cart.data()["title"];
      this.cartInfo.xp = cart.data()["xp"];
      this.cartInfo.urlImg = cart.data()["urlImg"];
      this.cartInfo.description = cart.data()["description"];
      this.cartInfo.caracteristicas = cart.data()["caracteristicas"];
    },
    async updateCart() {
      await setDoc(this.docRef, this.cartInfo)
        .then(() => {
          this.okSave();
          this.$router.push("/listCarts");
        })
        .catch(() => this.notSave());
    },
  },
  created() {
    let cartId = this.$route.params.cartId;
    this.cartId = cartId;
    this.getCart();
  },
});
</script>

