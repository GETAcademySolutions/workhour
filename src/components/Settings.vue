<template>
  <div>    
    <div class="spaceGeneratorDiv">
    <img src="../assets/GET HELKS.png" alt="">
    </div>
    <div class="spaceGeneratorDiv">
      <input class="aLittlePadding" placeholder="Username" />
    </div>
    <div class="spaceGeneratorDiv">
      <input class="aLittlePadding" placeholder="E-mail" />
    </div>
    <div class="spaceGeneratorDiv">
      <button class="aLittlePadding initButton" @click="changePassword">Edit password</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Settings",
  data() {
    return {};
  },
  methods: {
    changePassword() {
      this.$router.push({ name: "ChangePassword" });
    }
  }
};
</script>
<style scoped>
* {
  text-align: left;
}

.spaceGeneratorDiv{
  margin-top: 2%;
}

.aLittlePadding {
  padding: 10px;
}

input {
  border: 1px solid #FF8500;
}

img {
  border: 2px solid #FF8500;
}
</style>
