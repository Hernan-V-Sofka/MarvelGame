<template>
  <div class="card-grup row h-20 w-100 p-0 w-0">
    <div class="row d-flex justify-content-center">
      <div
        class="col-md-2 col-lg-2"
        v-for="(cart, index) in carts.slice(0, 5)"
        :key="index"
      >
        <div class="card">
          <img :src="cart.urlImg" class="card-img-top" alt="ImgCarts" />
          <div class="card-body">
            <h5 class="card-title fw-bolder">{{ cart.title }}</h5>
            <p class="card-text fst-italic">{{ cart.description }}</p>
            <!-- <p class="card-text fst-italic">-{{ cart.caracteristicas }}</p> -->
          </div>
          <div class="card-footer d-flex justify-content-around">
            <div class="d-flex justify-content-center">
              <small class="text-danger fs-6">Power: {{ cart.xp }}</small>
            </div>
            <button
              type="button"
              class="btn btn-dark fs-6"
              @:click="validateCart()"
            >
              Colocar Carta
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card-img-top {
  width: 100%;
  height: 11vw;
  object-fit: cover;
}
</style>

<script lang= "ts">
import { defineComponent } from "vue";
import { Data } from "@/interfaces/dataInterface";

export default defineComponent({
  name: "CartGame",
  data() {
    return {
      imgUrl: null,
      title: null,
      description: null,
      xp: null,
      caracteristicas: null,
      carts: [] as Data[],
    };
  },
  methods: {
    async validateCart() {
      console.log("Hola mundo");
    },
  },
  mounted() {
    let data = localStorage.getItem("Cartas");
    if (data != null) {
      this.carts = JSON.parse(data);
      console.log(this.carts);
    }
  },
});
</script>