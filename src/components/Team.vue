<template>
  <div class="team">
    <div>Team</div>
    <div>6</div>
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
