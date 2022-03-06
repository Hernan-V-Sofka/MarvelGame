<template>
    <div class="bg-dark"></div>
       <div class="container">
            <img id="imgMarvel" src="../assets/marvelLogo.png" alt="Logo de Marvel" width="100" height="300">
        </div>

        <div class="menu-Start">
                <h1>{{ msg }} </h1>
                <button class="btn-Start"> 
                    <router-link to='/camp'> Start Game</router-link>    
                </button>    
        </div>

        <router-view></router-view>
</template>

<script lang= "ts">
import { defineComponent } from 'vue';
export default defineComponent({   
   name: 'StartGame',
   props: {
       msg: String,
   }
});
</script>

<style scoped>
    .bg-dark{
        height: 100vh;
        left: 0px;
        max-height: 100%;
        max-width: 100%;
        position: fixed;
        top: 0px;
        width: 100vw;
        background-color: rgba(0, 0, 0, 0.9);
    }

    .marvel{
       position: relative;
    }

    #imgMarvel{
       position: absolute;
       left: 0%;
       right: 60%;
       width: 100%;
       margin: auto;
       text-align: center;
       font-size: 18px;
    }
     
    img{ 
        width: 100%;
        height: 50%;
    }

    .menu-Start{
        position: relative;
        top: 380px;
    }

    .btn-Start{
        background-color: #f44336;
        border: none;
        color: white;
        padding: 15px 32px;
        text-align: center;
        text-decoration: none;
        display: inline-block;
        font-size: 15px;
    }
</style>