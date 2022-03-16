<template>
<div class="card-grup">
  <div class="row d-flex justify-content-center">
    <div class="col-md-5 col-lg-2">
      <div class="card">
        <img :src="imgUrl" class="card-img-top" alt="ImgCarts" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>

    <div class="col-md-5 col-lg-2">
      <div class="card">
        <img :src="imgUrl" class="card-img-top" alt="ImgCarts" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>


    <div class="col-md-5 col-lg-2">
      <div class="card">
        <img :src="imgUrl" class="card-img-top" alt="ImgCarts" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>


    <div class="col-md-5 col-lg-2">
      <div class="card">
        <img :src="imgUrl" class="card-img-top" alt="ImgCarts" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>



    <div class="col-md-5 col-lg-2">
      <div class="card">
        <img :src="imgUrl" class="card-img-top" alt="ImgCarts" />
        <div class="card-body">
          <h5 class="card-title">Card title</h5>
          <p class="card-text">
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </p>
        </div>
        <div class="card-footer">
          <small class="text-muted">Last updated 3 mins ago</small>
        </div>
      </div>
    </div>
  </div>
  </div>
</template>

<style scoped>
.card-img-top {
  width: 100%;
  height: 12vw;
  object-fit: cover;
}
</style>

<script lang= "ts">
import { defineComponent } from "vue";
import { collection, getDocs } from "firebase/firestore/lite";
import { db } from "@/main";

export default defineComponent({
  name: "CartGame",
  data() {
    return {
      imgUrl: "",
    };
  },
  mounted() {
    this.getDats();
  },
  methods: {
    async getDats() {
      try {
        const coll = collection(db, "img");
        const urlItem = await (
          await getDocs(coll)
        ).docs.map((docs) => docs.data().url);
        this.imgUrl = urlItem[0];
      } catch (error) {
        console.log("Error");
      }
    },
  },
});
</script>