<template>
  <div class="reports">
    <div class="row" style="margin-bottom: 1%;">
      <div class="col-10 pageHeader">Summary reports</div>
      <div class="col-1 noRightBorder containerDiv miniContainerDiv">


        <b-dropdown class="dropdownDiv" variant="link" left>
          <template slot="button-content">
            <em class="dropdownButton">Today</em>
          </template>
          <b-dropdown-item href="#">Something</b-dropdown-item>
          <b-dropdown-divider style="border-color: #FF8500;"></b-dropdown-divider>
          <b-dropdown-item href="#">Something else</b-dropdown-item>
        </b-dropdown>


      </div>
      <div class="col-1 containerDiv miniContainerDiv">
        <button class="initButton3" style="width: 47%;">&lt;</button>
        <button class="initButton3" style="width: 47%;">></button>
      </div>
    </div>
    <div class="containerDiv row">


      <b-dropdown class="dropdownDiv rightBorder" variant="link" left>
        <template slot="button-content">
          <em class="dropdownButton">Team</em>
        </template>
        <b-dropdown-item href="#">Something</b-dropdown-item>
        <b-dropdown-divider style="border-color: #FF8500;"></b-dropdown-divider>
        <b-dropdown-item href="#">Something else</b-dropdown-item>
      </b-dropdown>


      <b-dropdown class="dropdownDiv rightBorder" variant="link" left>
        <template slot="button-content">
          <em class="dropdownButton">Today</em>
        </template>
        <b-dropdown-item href="#">Something</b-dropdown-item>
        <b-dropdown-divider style="border-color: #FF8500;"></b-dropdown-divider>
        <b-dropdown-item href="#">Something else</b-dropdown-item>
      </b-dropdown>


      <b-dropdown class="dropdownDiv rightBorder" variant="link" left>
        <template slot="button-content">
          <em class="dropdownButton">Client</em>
        </template>
        <b-dropdown-item href="#">Something</b-dropdown-item>
        <b-dropdown-divider style="border-color: #FF8500;"></b-dropdown-divider>
        <b-dropdown-item href="#">Something else</b-dropdown-item>
      </b-dropdown>


      <b-dropdown class="dropdownDiv rightBorder" variant="link" left>
        <template slot="button-content">
          <em class="dropdownButton">Project</em>
        </template>
        <b-dropdown-item href="#">Something</b-dropdown-item>
        <b-dropdown-divider style="border-color: #FF8500;"></b-dropdown-divider>
        <b-dropdown-item href="#">Something else</b-dropdown-item>
      </b-dropdown>


      <b-dropdown class="dropdownDiv rightBorder" variant="link" left>
        <template slot="button-content">
          <em class="dropdownButton">Task</em>
        </template>
        <b-dropdown-item href="#">Something</b-dropdown-item>
        <b-dropdown-divider style="border-color: #FF8500;"></b-dropdown-divider>
        <b-dropdown-item href="#">Something else</b-dropdown-item>
      </b-dropdown>


      <b-dropdown class="dropdownDiv rightBorder" variant="link" left>
        <template slot="button-content">
          <em class="dropdownButton">Tag</em>
        </template>
        <b-dropdown-item href="#">Something</b-dropdown-item>
        <b-dropdown-divider style="border-color: #FF8500;"></b-dropdown-divider>
        <b-dropdown-item href="#">Something else</b-dropdown-item>
      </b-dropdown>


      <b-dropdown class="dropdownDiv rightBorder" variant="link" left>
        <template slot="button-content">
          <em class="dropdownButton">Billable</em>
        </template>
        <b-dropdown-item href="#">Something</b-dropdown-item>
        <b-dropdown-divider style="border-color: #FF8500;"></b-dropdown-divider>
        <b-dropdown-item href="#">Something else</b-dropdown-item>
      </b-dropdown>


      <div class="col-4"><input class="searchBar" type="text" placeholder="Search by description..."></div>
      <div class="col-1"><button class="initButton3">Filter</button></div>
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

</style>
