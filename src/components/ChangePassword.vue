<template>
  <div>
    <div>
      <h1>Reset password</h1>
    </div>
    <div class="usernameInputDiv">
      <input class="usernameInput" type="text" placeholder="Enter username">
    </div>
    <div class="passwordInputDiv">
      <input class="passwordInput" type="password" placeholder="Enter password">
    </div>
    <div class="passwordInputDiv">
      <input class="passwordInput" type="password" placeholder="Re-enter password">
    </div>
    <div>
      <button @click="index">Reset password</button>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ChangePassword",
    data() {
      return {};
    },
    methods: {
      index() {
        this.$router.push({
          name: "Index"
        });
      }
    }
  };

</script>

<style scoped>
  h1 {
    margin-top: 5%;
  }

input {
  width: 75%;
  margin-top: 2.5%;
}
  button {
    margin-top: 3.3%;
    padding: 10px;
    font-size: 24px;
  }

</style>
