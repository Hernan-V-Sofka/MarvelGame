<template>
  <section class="vh-100" style="background-color: #f0131e">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <h3 class="mb-5">Register User</h3>
              <form @submit.prevent="register(this.email, this.password)">
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
import { defineComponent } from "vue";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

export default defineComponent({
  name: "RegisterUser",
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    register(email: string, password:string) {
      const auth = getAuth();
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          alert("Sea registrado de manera correcta");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          alert(error.message);
        });
    },
  },
});
</script>