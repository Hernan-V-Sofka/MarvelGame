<template>
  <section class="vh-100" style="background-color: #f0131e">
    <div class="container py-5 h-100">
      <div class="row d-flex justify-content-center align-items-center h-100">
        <div class="col-12 col-md-8 col-lg-6 col-xl-5">
          <div class="card shadow-2-strong" style="border-radius: 1rem">
            <div class="card-body p-5 text-center">
              <h3 class="mb-5">Marvel Game Session</h3>
              <form @submit.prevent="Login(this.email, this.password)">
                <div class="form-outline mb-4">
                  <label class="form-label" for="Email">Email</label>
                  <input
                    type="email"
                    id="Email"
                    class="form-control form-control-lg"
                    required
                    v-model="email"
                  />
                </div>

                <div class="form-outline mb-4">
                  <label class="form-label" for="Password">Password</label>
                  <input
                    type="password"
                    id="Password"
                    class="form-control form-control-lg"
                    required
                    v-model="password"
                  />
                </div>

                <button
                  class="btn btn-primary btn-lg btn-block"
                  type="submit"
                  value="Login"
                >
                  Login
                </button>

                <hr class="my-4" />

                <button
                  class="btn btn-lg btn-block btn-primary mb-2"
                  style="background-color: #dd4b39"
                  value="Login"
                >
                  <i class="fa fa-google" aria-hidden="true"></i> Sign in with
                  google
                </button>
                <button
                  class="btn btn-lg btn-block btn-primary mb-2"
                  style="background-color: #3b5998"
                  type="submit"
                >
                  <i class="fa fa-facebook" aria-hidden="true"></i> Sign in with
                  facebook
                </button>

                <button
                  class="btn btn-lg btn-block btn-Success mb-2"
                  style="background-color: #adb5bd"
                  type="submit"
                >
                  <i class="fa fa-registered" aria-hidden="true"></i>
                  <router-link class="decoration" to="/register"
                    >Registrar</router-link
                  >
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
import { getAuth, signInWithEmailAndPassword, GoogleAuthProvider } from 'firebase/auth';

export default defineComponent({
  name: "FormLogin",
  data(){
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    Login(email: string, password: string) {
      const auth = getAuth();
      signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) =>{
        const user = userCredential;
        console.log(user);
      })
      .catch(error =>{
        alert('La el email o la password estan erradas, vuelvalo a intentar.')
      });
    }
  }
});
</script>

