<template>
  <div class="container">
    <div class="border">
      <router-link class="m-2 btn btn-md btn-outline-primary" to="/admin">
        <i class="fa fa-address-card-o" aria-hidden="true"></i>Ingresar Carta
      </router-link>
    </div>
    <table class="table table-bordered table-striped">
      <thead>
        <tr class="text-center">
          <th>Id</th>
          <th>Title</th>
          <th>Caracteristicas</th>
          <th>Descripcion</th>
          <th>XP</th>
          <th>URL</th>
          <th>Options</th>
        </tr>
      </thead>
      <tr class="w-auto p-3 text-start">
        <td class="text-size">
          <span v-for="item in carts" v-bind:key="item.id">{{
            item.data.id
          }}</span>
        </td>
        <td class="text-size">
          <span v-for="item in carts" v-bind:key="item.id">{{
            item.data.title
          }}</span>
        </td>
        <td class="text-size">
          <span>{{ caracteristicas }}</span>
        </td>
        <td class="text-size">
          <span>{{ descripcion }}</span>
        </td>
        <td class="text-size">
          <span>{{ xp }}</span>
        </td>
        <td class="text-size">
          <span>{{ url }}</span>
        </td>
        <td>
          <router-link
            class="m-1 btn btn-sm btn-primary"
            style="background-color: #0d6efd"
            :to="{path: '/editcarts/sdoems12'}"
          >
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </router-link>
          <button
            class="m-1 btn btn-sm btn-danger"
            style="background-color: #dc3545"
          >
            <i class="fa fa-trash" aria-hidden="true"></i>
          </button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script lang= "ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "listCarts",
  data() {
    return {
      id: 1,
      title: null,
      caracteristicas: null,
      descripcion: null,
      xp: null,
      url: null,
      // carts: [],
      // db: getDatabase,
    };
  },
});
</script>

<style scoped>
.text-size {
  font-size: 0.8rem;
}
</style>
