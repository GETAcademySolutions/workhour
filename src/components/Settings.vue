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
  align-content: left;
  align-items: left;
  align-self: left;
  text-align: left;
}
.aLittlePadding {
  padding: 10px;
}
img {
  border: 5px solid gray;
}
</style>
