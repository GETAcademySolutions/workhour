<template>
  <div class="team">
    <div class="pageHeader" style="margin-bottom: 1.25%;">Team</div>
    <div class="containerDiv row">
        <div class="searchDiv"><input class="searchBar" type="text" style="text-align: left;" placeholder="Search by description..."></div>
        <div class="filterDiv"><button class="initButton3">Filter</button></div>
    </div>
    <table class="col-12">
      <th>Name</th>
      <th>Email</th>
      <th>Access</th>
      <tr v-for="person in persons">
        <td>{{ person.name }}</td>
        <td>{{ person.email }}</td>
        <td>{{ person.access }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Team",
    data() {
      return {
        persons: [{
            name: "Emil",
            email: "Emil@getacademy.no",
            access: true
          },
          {
            name: "Lill June",
            email: "@getacademy.no",
            access: false
          },
          {
            name: "Sondre",
            email: "@getacademy.no",
            access: false
          },
          {
            name: "Kvamme",
            email: "@getacademy.no",
            access: false
          },
          {
            name: "Hellenes",
            email: "@getacademy.no",
            access: false
          }
        ]
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
  table,
  th,
  td,
  tr {
    border: 1px solid #ff8500;
  }

</style>
