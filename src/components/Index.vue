<template>
  <div class="index">
    <h1>Work Hour</h1>
    <div id="signupLoginDiv" class="row">
    <div id="signupDiv" class="col-5">
      <p>Sign up</p>
      <div class="initButton" @click="signup">Sign up</div>
    </div>
    <div class="col-2"></div>
    <div id="loginDiv" class="col-5">
      <p>Log in</p>
      <div class="initButton" @click="login">Log in</div>
    </div>
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
  padding: 2%;
  border: 1px solid black;
  background-color: #FF8500;
  color: rgb(0, 0, 0);
}
</style>
