<template>
  <nav class="nav-container">
    <router-link class="item" to="/"> Home </router-link> | 
    <router-link class="item" to="/camp"> StartGame </router-link>
  </nav>
  <router-view />
</template>

<style>
@import './assets/styles/normalice.css';
.nav-container{
  background-color: #df2757;
  height: 5vh;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
}

.item{
  color: #ed7d2a;
  text-decoration: none;
  text-align: center;
  width: 40%;
  font-family: fantasy;
  font-size: 25px;
}


</style>
