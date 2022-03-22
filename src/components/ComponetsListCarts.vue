<template>
  <div class="container">
    <div class="border">
      <router-link class="m-2 btn btn-md btn-outline-primary" to="/admin">
        <i class="fa fa-address-card-o" aria-hidden="true"></i>Ingresar Carta
      </router-link>
    </div>
    <table class="table table-bordered table-striped">
      <ul class="w-auto p-3 text-start list-group">
        <li
          v-for="cart in carts"
          :key="cart.id"
          class="
            list-group-item
            d-flex
            justify-content-center
            align-items-center
          "
        >
          {{
            cart.title +
            "  |  " +
            cart.xp +
            "  |  " +
            cart.description +
            "  |  "
          }}
          <router-link
            class="p-2 m-3 btn btn-sm btn-primary"
            style="background-color: #0d6efd"
            :to="{ path: `/editcarts/${cart.id}` }"
          >
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </router-link>
          <button
            class="p-2 m-2 btn btn-sm btn-danger"
            style="background-color: #dc3545"
            @click="deleteCart(cart.id)"
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </li>
      </ul>
    </table>
  </div>
</template>

<script lang= "ts">
import Swal from "sweetalert2";
import { defineComponent } from "vue";
import { getDocs, doc, deleteDoc } from "firebase/firestore";
import cartsCollRef from "@/main";
export default defineComponent({
  name: "listCarts",
  data() {
    return {
      carts: [],
      selectDocId: null,
    };
  },
  methods: {
    async getCartsList() {
      let cartesSnapShot = await getDocs(cartsCollRef);
      let carts = [];
      cartesSnapShot.forEach((cart) => {
        let cartData = cart.data();
        cartData.id = cart.id;
        carts.push(cartData);
      });
      console.log(carts);
      this.carts = carts;
    },

    async deleteCart(cartId: string) {
      let cartRef = doc(cartsCollRef, cartId);
      await deleteDoc(cartRef).then(() => {
        Swal.fire({
          title: "Elimiado",
          text: "La carta se elimino correctamente",
          icon: "success",
        });
        this.$router.go();
      });
    },
  },
  created() {
    this.getCartsList();
  },
});
</script>

<style scoped>
.text-size {
  font-size: 0.8rem;
}
</style>
