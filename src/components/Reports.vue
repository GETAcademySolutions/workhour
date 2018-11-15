<template>
  <div class="reports">
    <div class="containerDiv row">
      <div class="col-1 rightBorder">Teams</div>
      <div class="col-1 rightBorder">Active</div>
      <div class="col-1 rightBorder">Client</div>
      <div class="col-1 rightBorder">Project</div>
      <div class="col-1 rightBorder">Task</div>
      <div class="col-1 rightBorder">Tag</div>
      <div class="col-1 rightBorder">Billable</div>
      <div class="col-4"><input type="text" placeholder="Search by description..."></div>
      <div class="col-1"><button class="initButton">Filter</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Reports",
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
.containerDiv {
  border: 1.5px solid #FF8500;
  padding: 1% 0;
}
.rightBorder {
  border-right: 1.5px solid #FF8500;
}
input {
  border: none;
}
.initButton {
  padding: 1px 5px;
}
</style>
