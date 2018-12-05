<template>
  <div class="Signup">
    <div class="containerDiv row">
      <div class="containerPart col-3"></div>
      <div class="containerPart col-6 visiblePart">
      <h1 style="font-size: 375%;">Sign up</h1>
      </div>
      <div class="containerPart col-3"></div>
    </div>
    <div class="containerDiv row"> 
      <div class="containerPart col-3"></div>
      <div class="containerPart col-6 visiblePart">
       <input type="text" placeholder="Username">
      </div>
      <div class="containerPart col-3"></div>
    </div>
    <div class="containerDiv row"> 
      <div class="containerPart col-3"></div>
      <div class="containerPart col-6 visiblePart">
       <input type="text" placeholder="E-mail">
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
       <input type="password" placeholder="Re-enter Password">
      </div>
      <div class="containerPart col-3"></div>
    </div>
    <div class="containerDiv row"> 
      <div class="containerPart col-3"></div>
      <div class="containerPart col-6 visiblePart">
      <div class="initButton initButton2" @click="timeTracker" style="margin: auto;">Sign up</div>
      </div>
      <div class="containerPart col-3"></div>
    </div>
    <div class="containerDiv row"> 
      <div class="containerPart col-3"></div>
      <div class="containerPart col-6 visiblePart">
      <div class="initButton initButton2" @click="index" style="margin: auto;">Back</div>
      </div>
      <div class="containerPart col-3"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
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
  margin-top: 1%;
  border: none;
}
input {
  width: 75%;
}
</style>