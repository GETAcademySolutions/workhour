<template>
  <div class="projects">
    <div>Projects</div>
    <div>5</div>
  </div>
</template>

<script>
export default {
  name: 'Projects',
  data () {
    return {};
  },
  methods: {
    home() {
      this.$router.push({ name: "Home" });
    },
  }
}
</script>
