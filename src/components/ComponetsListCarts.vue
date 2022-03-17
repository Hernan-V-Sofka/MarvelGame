<template>
  <div class="container">
    <div class="border">
      <button class="m-2 btn btn-md btn-outline-primary">
        <i class="fa fa-address-card-o" aria-hidden="true"></i>Ingresar Carta
      </button>
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
          <span>{{ id }}</span>
        </td>
        <td class="text-size">
          <span>{{ title }}</span>
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
          <button
            class="m-1 btn btn-sm btn-primary"
            style="background-color: #0d6efd">
            <i class="fa fa-pencil" aria-hidden="true"></i>
          </button>
          <button
            class="m-1 btn btn-sm btn-danger"
            style="background-color: #dc3545">
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
      title: "Combate Hulk y Hombre Roca",
      caracteristicas: "Choque de poderes de inmenso poder",
      descripcion:
        "Un combate que deja destrozos a tu paso sin contemplar las victimas",
      xp: 150,
      url: "https://firebasestorage.googleapis.com/v0/b/marvelgame-c0296.appspot.com/o/063.jpg?alt=media&token=b5697647-df69-4717-a1da-6dc559fab53b",
    };
  },
});
</script>

<style scoped>
.text-size {
  font-size: 0.8rem;
}
</style>
