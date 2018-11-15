<template>
  <div>
    <img src="../assets/GET HELKS.png" alt="">
    <div>
      <input class="aLittlePadding" placeholder="Username" />
    <div>
    </div>
      <input class="aLittlePadding" placeholder="E-mail" />
    </div>
      <button class="aLittlePadding">Edit password</button>
  </div>
</template>

<script>
export default {
name: "Settings",
  data() {
    return {};
  },
};
</script>
<style scoped>
* {
  text-align: left;
  margin-top: 1%;
}
.aLittlePadding {
  padding: 10px;
}
img {
  border: 1px solid rgba(166, 166, 166, 1);
}
</style>
