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
      <tr v-for="person in persons">{{ person.name }}</tr>
      </td>
      <td>
      <th>Email</th>
      <tr v-for="person in persons">{{ person.email }}</tr>
      </td>
      <td>
      <th>Access</th>
      <tr v-for="person in persons">{{ person.access }}</tr>
      </td>
    </table>
  </div>
</template>

<script>
  export default {
    name: "Team",
    data() {
      return {
        persons: [
          {
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
table, td, tr {
  margin-top: 1%;
  padding: 0;
  border: 1px solid #ff8500;
}
th {
  padding: 1vh 6vw;
  background-color: gray;
}
</style>
