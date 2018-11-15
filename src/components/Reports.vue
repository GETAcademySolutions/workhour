<template>
  <div class="reports">
    <div class="row" style="margin-bottom: 1%;">
      <div class="col-10"></div>
      <div class="col-1 noRightBorder containerDiv miniContainerDiv">Today
        <!-- <b-nav-item-dropdown right>
          <template slot="button-content">
            <em>Today</em>
          </template>
        </b-nav-item-dropdown> -->
      </div>
      <div class="col-1 containerDiv miniContainerDiv">
        <button class="initButton" style="width: 47%;">&lt;</button>
        <button class="initButton" style="width: 47%;">></button>
      </div>
    </div>
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
  border: 1.5px solid #ff8500;
  padding: 1% 0;
}

.miniContainerDiv {
  padding: 0.3%;
}

.rightBorder {
  border-right: 1.5px solid #ff8500;
}

.noRightBorder {
  border-right: none;
}

input {
  border: none;
}

.initButton {
  padding: 1px 5px;
}
</style>
