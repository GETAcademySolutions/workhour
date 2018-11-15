<template>
  <div class="team">
      <div class="col-10 pageHeader">Team</div>
  </div>
</template>

<script>
export default {
  name: "Team",
  data() {
    return {};
  },
  methods: {
    home() {
      this.$router.push({
        name: "Home"
      });
    }
  }
};
</script>

<style scoped>
</style>
