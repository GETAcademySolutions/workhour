<template>
  <div class="team">
    <div class="pageHeader">Team</div>
    <div class="row">
      <div class="col-4"><input class="searchBar" type="text" placeholder="Search by description..."></div>
      <div><button class="initButton3">Filter</button></div>
    </div>
    <table>
      <td>
      <th>Name</th>
      <tr>asd</tr>
      <tr>asd</tr>
      <tr>asd</tr>
      </td>
      <td>
      <th>Email</th>
      <tr>asd</tr>
      <tr>asd</tr>
      <tr>asd</tr>
      </td>
      <td>
      <th>Access</th>
      <tr>asd</tr>
      <tr>asd</tr>
      <tr>asd</tr>
      </td>
    </table>
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
table, td, tr {
  padding: 0;
  margin-top: 1%;
  border: 1px solid black;
}
th {
  padding: 1vh 6vw;
  border-bottom: 1px solid black;
  background-color: gray;
}
</style>
