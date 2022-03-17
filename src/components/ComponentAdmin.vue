<template>
  <form>
    <div class="input-group input-group-sm mb-3">
      <span class="input-group-text" id="inputGroup-sizing-sm">Id: </span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
    <div class="sm-2">
      <label for="Title" class="form-label">Title</label>
      <input type="text" class="form-control" id="titulo" />
    </div>
    <div class="sm-2">
      <label for="Xp" class="form-label">XP</label>
      <input type="text" class="form-control" id="Xp" />
    </div>
    <div class="sm-2">
      <label for="url" class="form-label">URL Imagen</label>
      <input type="text" class="form-control" id="urlImagen" />
    </div>

    <div class="sm-2">
      <label for="descripcion" class="form-label">Descripcion</label>
      <textarea class="form-control" aria-label="Descripcio"></textarea>
    </div>

    <div class="sm-2">
      <label for="Caracteristica" class="form-label">Caracteristica</label>
      <textarea class="form-control" aria-label="Caracteristicas"></textarea>
    </div>

    <hr />
    <div class="d-flex justify-content-evenly">
      <button type="submit" class="btn btn-primary">Ingresar Carta</button>
      <button type="submit" class="btn btn-secondary">Listar Cartas</button>
    </div>
  </form>
</template>

<script lang= "ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "ComponentAdmin",
  components: {},
  data() {
    return {};
  },
  methods: {},
});
</script>