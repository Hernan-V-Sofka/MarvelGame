<template>
    <div class="container bg-dark">
        <h1> {{ msg }} </h1>

        <div class="contaner-img">
            <img src="../assets/marvelLogo.png" alt="Logo de marvel" class="img">
        </div>
    </div>
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
        top: 0px;
        width: 100vw;
        text-align: center;
        background-color: #e11a29;
    }

    .container-img{
        width: 10%;
        display: flex;
        
    }

    .img{ 
        width: 80%;
        border-radius: 10px;
        height: 60%;
    }


    /* .marvel{
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
    } */
</style>