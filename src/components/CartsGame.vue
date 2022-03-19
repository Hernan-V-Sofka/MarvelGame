<template>
  <div class="card-grup">
    <div class="row d-flex justify-content-center">
      <div class="col-md-5 col-lg-2">
        <div class="card">
          <img :src="imgUrl" class="card-img-top" alt="ImgCarts" />
          <div class="card-body">
            <h5 class="card-title fw-bolder">{{ title }}</h5>
            <p class="card-text fst-italic">{{ description }}</p>
            <hr class="my-4" />
            <p class="card-text fst-italic">-{{ caracteristicas }}</p>
          </div>
          <div class="card-footer d-flex justify-content-around">
            <div class="d-flex justify-content-center">
              <small class="text-danger fs-6">Power: {{ xp }}</small>
            </div>
            <button type="button" class="btn btn-dark fs-6">
              Colocar Carta
            </button>
          </div>
        </div>
      </div>

      <div class="col-md-5 col-lg-2">
        <div class="card">
          <img :src="imgUrl" class="card-img-top" alt="ImgCarts" />
          <div class="card-body">
            <h5 class="card-title fw-bolder">{{ title }}</h5>
            <p class="card-text fst-italic">{{ description }}</p>
            <hr class="my-4" />
            <p class="card-text fst-italic">-{{ caracteristicas }}</p>
          </div>
          <div class="card-footer d-flex justify-content-around">
            <div class="d-flex justify-content-center">
              <small class="text-danger fs-6">Power: {{ xp }}</small>
            </div>
            <button type="button" class="btn btn-dark fs-6">
              Colocar Carta
            </button>
          </div>
        </div>
      </div>

      <div class="col-md-5 col-lg-2">
        <div class="card">
          <img :src="imgUrl" class="card-img-top" alt="ImgCarts" />
          <div class="card-body">
            <h5 class="card-title fw-bolder">{{ title }}</h5>
            <p class="card-text fst-italic">{{ description }}</p>
            <hr class="my-4" />
            <p class="card-text fst-italic">-{{ caracteristicas }}</p>
          </div>
          <div class="card-footer d-flex justify-content-around">
            <div class="d-flex justify-content-center">
              <small class="text-danger fs-6">Power: {{ xp }}</small>
            </div>
            <button type="button" class="btn btn-dark fs-6">
              Colocar Carta
            </button>
          </div>
        </div>
      </div>


      <div class="col-md-5 col-lg-2">
        <div class="card">
          <img :src="imgUrl" class="card-img-top" alt="ImgCarts" />
          <div class="card-body">
            <h5 class="card-title fw-bolder">{{ title }}</h5>
            <p class="card-text fst-italic">{{ description }}</p>
            <hr class="my-4" />
            <p class="card-text fst-italic">-{{ caracteristicas }}</p>
          </div>
          <div class="card-footer d-flex justify-content-around">
            <div class="d-flex justify-content-center">
              <small class="text-danger fs-6">Power: {{ xp }}</small>
            </div>
            <button type="button" class="btn btn-dark fs-6">
              Colocar Carta
            </button>
          </div>
        </div>
      </div>

      <div class="col-md-5 col-lg-2">
        <div class="card">
          <img :src="imgUrl" class="card-img-top" alt="ImgCarts" />
          <div class="card-body">
            <h5 class="card-title fw-bolder">{{ title }}</h5>
            <p class="card-text fst-italic">{{ description }}</p>
            <hr class="my-4" />
            <p class="card-text fst-italic">-{{ caracteristicas }}</p>
          </div>
          <div class="card-footer d-flex justify-content-around">
            <div class="d-flex justify-content-center">
              <small class="text-danger fs-6">Power: {{ xp }}</small>
            </div>
            <button type="button" class="btn btn-dark fs-6">
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
// import { collection, getDocs } from "firebase/firestore/lite";
// // import { db } from "@/main";

export default defineComponent({
  name: "CartGame",
  data() {
    return {
      imgUrl: "",
      title: "",
      description: "",
      xp: 0,
      caracteristicas: "",
    };
  },
  mounted() {
    // this.getDats();
  },
  // methods: {
  //   async getDats() {
  //     try {
  //       const coll = collection(db, "img");
  //       const urlItem = await (
  //         await getDocs(coll)
  //       ).docs.map((docs) => docs.data());
  //       this.imgUrl = urlItem[1].url;
  //       this.title = urlItem[1].Title;
  //       this.caracteristicas = urlItem[1].Caracteristicas;
  //       this.xp = urlItem[1].XP;
  //       this.description = urlItem[1].Descripcion;
  //     } catch (error) {
  //       console.log("Error");
  //     }
  //   },
  // },
});
</script>