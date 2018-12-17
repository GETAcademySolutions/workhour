<template>
  <div class="projects">
    <div class="row" style="margin-bottom: 1%;">
      <div class="pageHeader" style="margin-right: auto;">Projects</div>
      <!-- Hidden \/ -->
      <div class="col-1 noRightBorder containerDiv miniContainerDiv" style="visibility: hidden;">


        <b-dropdown class="dropdownDiv" variant="link" left>
          <template slot="button-content">
            <em class="dropdownButton">Today</em>
          </template>
          <b-dropdown-item href="#">Something</b-dropdown-item>
          <b-dropdown-divider style="border-color: #FF8500;"></b-dropdown-divider>
          <b-dropdown-item href="#">Something else</b-dropdown-item>
        </b-dropdown>


      </div>
      <!-- /\ Hidden \/ -->
      <div class="col-1 containerDiv miniContainerDiv" style="visibility: hidden;">
        <button class="initButton3" style="width: 47%;">&lt;</button>
        <button class="initButton3" style="width: 47%;">></button>
      </div>
      <!-- /\ Hidden -->

    </div>
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


        <div class="searchDiv"><input class="searchBar" type="text" style="text-align: left;" placeholder="Search by description..."></div>
        <div class="filterDiv"><button class="initButton3">Filter</button></div>


    </div>
        <table class="col-12">
          <th>Project</th>
          <th>Client</th>
          <th>Status</th>
          <th>Team</th>
          <tr v-for="object in objects">
            <td>{{ object.project }}</td>
            <td>{{ object.client }}</td>
            <td>{{ object.status }}</td>
            <td>{{ object.team }}</td>
          </tr>
        </table>
  </div>
</template>

<script>
  export default {
    name: "Projects",
    data() {
      return {
        objects: [{
          project: "Project1",
          client: "Client1",
          status: false,
          team: "GetStarted"
        },
        {
          project: "Project2",
          client: "Client2",
          status: false,
          team: "GetAcademy"
        },
        {
          project: "Project3",
          client: "Client3",
          status: true,
          team: "GetSolutions"
        }]
      };
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
