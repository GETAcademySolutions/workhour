<template>
  <div id="app">
    <Navbar />
  <div class="container">
    <router-view/>
  </div>
  </div>
</template>

<script>
import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
Vue.use(BootstrapVue);
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import Navbar from '@/components/layout/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 20px;
}
.initButton {
  padding: 25px;
  border: 1px solid black;
  background-color: rgb(179, 0, 179);
  color: rgb(255, 255, 255);
}
.initButton2 {
  padding: 15px;
  border: 1px solid black;
  background-color: rgb(179, 0, 179);
  color: rgb(255, 255, 255);
}
</style>
