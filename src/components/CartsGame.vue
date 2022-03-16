<template>
<div class="card-group" >
  <div class="card">
    <img :src="imgUrl" class="card-img-top" alt="Carts">
    <div class="card-body">
      <h5 class="card-title">Doctor Dom</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Power: 3000s</small>
    </div>
  </div>

  <div class="card">
    <img :src="imgUrl" class="card-img-top" alt="Carts">
    <div class="card-body">
      <h5 class="card-title">Doctor Dom</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Power: 3000s</small>
    </div>
  </div>
  <div class="card">
    <img :src="imgUrl" class="card-img-top" alt="Carts">
    <div class="card-body">
      <h5 class="card-title">Doctor Dom</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Power: 3000s</small>
    </div>
  </div>
</div>
</template>

<script lang= "ts">
import { defineComponent } from 'vue';
import { collection, getDocs } from 'firebase/firestore/lite';
import { db } from '@/main';

export default defineComponent({
    name: 'CartGame',
    data(){ 
      return {
        imgUrl:''
      }
    },
    mounted(){
      this.getDats();
    },  
    methods:{
      async getDats(){
        try {
          const coll = collection(db,'img');
          const urlItem = await (await getDocs(coll)).docs.map(docs => docs.data().url);
          this.imgUrl = urlItem[0];    
        } catch (error) {
          console.log('Error'); 
        }
      }
    }
});
</script>