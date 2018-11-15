<template>
    <div>
        <div>
            <h1>Reset password</h1>
        </div>
        <div></div>
        <div class="passwordInputDiv">
            <input class="passwordInput" type="password" placeholder="Enter password" style="margin-top: 5.5%;">
        </div>
        <div class="passwordInputDiv">
            <input class="passwordInput" type="password" placeholder="Re-enter password">
        </div>
        <div>
            <button @click="settings">Reset password</button>
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
    settings() {
      this.$router.push({ name: "Settings" });
    }
  }
};
</script>

<style scoped>
h1 {
    margin-top: 5%;
}
.passwordInputDiv {
margin-bottom: 2.2%;
}
.passwordInput {
width: 40%;
padding: 10px;
}
button {
    margin-top: 3.3%;
    padding: 10px;
    font-size: 24px;
}
</style>