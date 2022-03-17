<template>
<section class="vh-100" style="background-color: #F0131E;" v-if="oculeteLogin">
    <div class="container py-5 h-100">
        <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-8 col-lg-6 col-xl-5">
                <div class="card shadow-2-strong" style="border-radius: 1rem;">
                    <div class="card-body p-5 text-center">
                        <h3 class="mb-5">{{ msg }}</h3>
                            
                        <div class="form-outline mb-4">
                            <label class="form-label" for="typeEmailX-2">Email</label>
                            <input type="email" id="typeEmailX-2" class="form-control form-control-lg" />
                        </div>

                        <div class="form-outline mb-4">
                            <label class="form-label" for="typePasswordX-2">Password</label>
                            <input type="password" id="typePasswordX-2" class="form-control form-control-lg" />
                        </div>

                        <button class="btn btn-primary btn-lg btn-block" type="submit" @click="changeVicible">Login</button>

                        <hr class="my-4">

                        <button class="btn btn-lg btn-block btn-primary mb-2" style="background-color: #dd4b39;" type="submit"><i class="fab fa-google me-2"></i> Sign in with google</button>
                        <button class="btn btn-lg btn-block btn-primary mb-2" style="background-color: #3b5998;" type="submit"><i class="fab fa-facebook-f me-2"></i>Sign in with facebook</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>


<div class="text-center" v-if="notVisicible">
    <CampoGame />
    <Carts />
</div>

<div class="container py-5 h-50 d-flex justify-content-center" v-if="isVicible">
    <!-- <ComponentAdmin /> -->
    <ListCartas />
</div>

</template>

<script lang= "ts">
import { defineComponent } from 'vue';
import CampoGame from '@/components/CampoGame.vue';
import Carts from '@/components/CartsGame.vue';
import ListCartas from '@/components/ComponetsListCarts.vue';

export default defineComponent({   
   name: 'StartGame',
   components: {
    CampoGame,
    Carts,
    ListCartas
   },
   props: {
       msg: String,
   },
   data(){
       return { 
        isVicible: false,
        oculeteLogin: true,
        notVisicible: false
       }
    },
   methods:{
    changeVicible(){
      this.isVicible = true;
      this.oculeteLogin = false;
    }
  }
});
</script>

