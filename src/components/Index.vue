<template>
  <div class="index">
    <h1>Work Hour</h1>
    <div id="signupLoginDiv" class="row">
    <div class="col-1"></div>
    <div id="signupDiv" class="col-4">
      <p>This is where you sign up</p>
      <div class="initButton" @click="signup">Sign up</div>
    </div>
    <div class="col-2"></div>
    <div id="loginDiv" class="col-4">
      <p>This is where you log in</p>
      <div class="initButton" @click="login">Log in</div>
    </div>
    <div class="col-1"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Index",
  data() {
    return {};
  },
  methods: {
    signup() {
      this.$router.push({ name: "Signup" });
    },
    login() {
      this.$router.push({ name: "Login" });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#signupDiv,
#loginDiv {
  margin-top: 15%;
  padding: 1%;
  background-color: #FF8500;
  color: rgb(0, 0, 0);
}
</style>
