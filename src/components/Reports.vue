<template>
  <div class="reports">
    <div>Reports</div>
    <div>4</div>
  </div>
</template>

<script>
export default {
  name: 'Reports',
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
