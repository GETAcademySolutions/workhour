<template>
  <div class="Login">
    <div class="containerDiv row">
      <div class="containerPart col-3"></div>
      <div class="containerPart col-6 visiblePart">
      <h1>Log in</h1>
      </div>
      <div class="containerPart col-3"></div>
    </div>
    <div class="containerDiv row"> 
      <div class="containerPart col-3"></div>
      <div class="containerPart col-6 visiblePart">
       <input type="text" placeholder="Username / E-mail">
      </div>
      <div class="containerPart col-3"></div>
    </div>
    <div class="containerDiv row"> 
      <div class="containerPart col-3"></div>
      <div class="containerPart col-6 visiblePart">
       <input type="password" placeholder="Password">
      </div>
      <div class="containerPart col-3"></div>
    </div>
    <div class="containerDiv row"> 
      <div class="containerPart col-3"></div>
      <div class="containerPart col-6 visiblePart">
      <div class="initButton" @click="timeTracker" style="width: 37.5%; margin: auto;">Log in</div>
      </div>
      <div class="containerPart col-3"></div>
    </div>
    <div class="containerDiv row"> 
      <div class="containerPart col-3"></div>
      <div class="containerPart col-6 visiblePart">
      <div class="initButton" @click="index" style="width: 37.5%; margin: auto;">Back</div>
      </div>
      <div class="containerPart col-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {};
  },
  methods: {
    index() {
      this.$router.push({ name: "Index" });
    },
    timeTracker() {
      this.$router.push({ name: "TimeTracker" });
    }
  }
}
</script>
<style scoped>
.containerDiv {
  margin-top: 2%;
}
</style>