<template>
  <div class="vh-100">
    <div class="container py-5 h-100">
      <h3 class="text-center">Actualizar Cartas</h3>
      <form>
        <div class="input-group input-group-sm mb-3">
          <span class="input-group-text" id="inputGroup-sizing-sm">Id: </span>
          <input
            type="text"
            class="form-control"
            aria-label="Sizing example input"
            aria-describedby="inputGroup-sizing-sm"
            v-model="idCart"
          />
        </div>
        <div class="sm-2">
          <label for="Title" class="form-label">Title</label>
          <input type="text" class="form-control" id="titulo" v-model="title" />
        </div>
        <div class="sm-2">
          <label for="Xp" class="form-label">XP</label>
          <input type="text" class="form-control" id="Xp" v-model="xp" />
        </div>
        <div class="sm-2">
          <label for="url" class="form-label">URL Imagen</label>
          <input
            type="text"
            class="form-control"
            id="urlImagen"
            v-model="urlImg"
          />
        </div>

        <div class="sm-2">
          <label for="descripcion" class="form-label">Descripcion</label>
          <textarea
            class="form-control"
            aria-label="Descripcio"
            v-model="description"
          ></textarea>
        </div>

        <div class="sm-2">
          <label for="Caracteristica" class="form-label">Caracteristica</label>
          <textarea
            class="form-control"
            aria-label="Caracteristicas"
            v-model="caracteristicas"
          ></textarea>
        </div>

        <hr />
        <div class="d-flex justify-content-evenly">
          <button type="submit" class="btn btn-primary" value="obtener">
            Actualizar Carta
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({});
</script>

