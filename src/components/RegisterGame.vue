<template>
  <section class="vh-100" style="background-color: #f0131e">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <h3 class="mb-5">Register User</h3>
              <form @submit.prevent="Register">
                <div class="form-outline mb-4">
                  <label class="form-label" for="Email">Email</label>
                  <input
                    type="email"
                    id="Email"
                    class="form-control form-control-lg"
                    v-model="email"
                  />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="Password">Password</label>
                  <input
                    type="password"
                    id="Password"
                    class="form-control form-control-lg"
                    v-model="password"
                  />
                </div>

                <button
                  class="btn btn-primary btn-lg btn-block"
                  type="submit"
                  value="Register"
                >
                  Register
                </button>

                <hr class="my-4" />
                <button
                  class="btn btn-lg btn-block btn-primary mb-2"
                  style="background-color: #3b5998"
                  type="submit"
                >
                  <i class="fa fa-sign-in" aria-hidden="true"></i>
                  <router-link to="/login" class="decoration">
                    Iniciar Session
                  </router-link>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script lang= "ts">
import { defineComponent, ref } from "vue";
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default defineComponent({
  name: "RegisterUser",
  setup() {
    const email = ref("");
    const password = ref("");

    const Register = async() => {
      await firebase
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value)
        .then((user) => {
          alert("El usuario fue guardado con exito");
        })
        .catch((error) => alert("Error al guardar al usuario"));
    };

    return {
      Register,
      email,
      password,
    };
  },
});
</script>