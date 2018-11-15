<template>
  <div class="projects">
    <div class="col-10 pageHeader">Projects</div>
    <div class="containerDiv row">
      
      
      <b-dropdown class="dropdownDiv rightBorder" variant="link" left>
        <template slot="button-content">
          <em class="dropdownButton">Active</em>
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
          <em class="dropdownButton">Team</em>
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


      <div class="col-7"><input class="searchBar" type="text" placeholder="Search by description..."></div>
      <div class="col-1"><button class="initButton3">Filter</button></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Projects",
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
