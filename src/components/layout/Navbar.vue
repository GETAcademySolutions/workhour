<template>
  <div ref="myNavBar" class="navbar">
    <b-navbar toggleable="md" type="dark" variant="dark">
      <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>
      <b-navbar-brand @click="index" href="#"><img src="../../assets/GET HELKS.png" class="" style="width:30%; float: left;" /></b-navbar-brand>
      <b-collapse is-nav id="nav_collapse">

      <b-navbar-nav>
        <b-nav-item @click="index" id="home">Home</b-nav-item>
        <b-nav-item @click="timeTracker">Time tracker</b-nav-item>
        <b-nav-item @click="reports">Reports</b-nav-item>
        <b-nav-item @click="projects">Projects</b-nav-item>
      </b-navbar-nav>

      <!-- Right aligned nav items -->
      <b-navbar-nav class="ml-auto">

        <b-nav-form>
          <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
          <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
        </b-nav-form>

        <b-nav-item-dropdown right>
          <!-- Using button-content slot -->
          <template slot="button-content">
            <em>User</em>
          </template>
          <b-dropdown-item href="#">Profile</b-dropdown-item>
          <b-dropdown-item href="#" @click="index">Signout</b-dropdown-item>
        </b-nav-item-dropdown>
      </b-navbar-nav>

    </b-collapse>
  </b-navbar>

  </div>
</template>

    <!--Import jQuery before materialize.js-->
    <script type="text/javascript" src="https://code.jquery.com/jquery-2.1.1.min.js"></script>
    <script type="text/javascript" src="js/materialize.min.js"></script>
<script>
export default {
  name: "Navbar",
  data() {
    return {};
  },
  methods: {
    index() {
      this.$router.push({ name: "Index" });
    },
    timeTracker() {
      this.$router.push({ name: "TimeTracker" });
    },
    reports() {
      this.$router.push({ name: "Reports" });
    },
    projects() {
      this.$router.push({ name: "Projects" });
    }
  }
};
</script>

<style scoped>
.navbar{
  width:100%;
}
</style>
