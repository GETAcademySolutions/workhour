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
.pageHeader {
  text-align: left; 
  font-size: 30px; 
  color: rgba(150, 150, 150, 1);
}
.initButton {
  padding: 25px;
  border: 1px solid black;
  background-color: #016872;
  color: rgb(255, 255, 255);
}
.initButton2 {
  padding: 15px;
  background-color: #016872;
}

.initButton3 {
  margin-top: 6%;
  padding: 1px 5px;
  background-color: #016872;
}

.initButtonBlue {
  background-color: #016872;
  padding: 1%;
  font-weight: BOLD;
}

.containerDiv {
  border: 1.5px solid #ff8500;
  padding: 1% 0;
}

.miniContainerDiv {
  padding: 0.3%;
}

.rightBorder {
  border-right: 1px solid #ff8500;
}

.noRightBorder {
  border-right: none;
}

.dropdownButton {
  font-size: 100%;
  margin: 2px;
  text-decoration: underline white;
  color: #000000;
}

.searchBar {
  width: 100%;
  padding-top: 6px;
  text-align: center;
  border: none;
  outline: none;
}

.searchDiv {
  margin-left: auto;
}
.filterDiv {
  margin-right: 1%;
}
.centeredText {
  padding: 1%;
}
  table,
  tr,
  td {
    border-collapse: collapse;
    border: 2px solid #ff8500;
  }
  th {
    background-color: #dddddd;
  }
</style>
