<template>
  <div class="workspaces">
        <table class="col-12">
            <tr style="background-color: #016872;">
                <th><span style="float: left; padding-left: 10px;">Workspaces</span></th>
                <th></th>
            </tr>
            <tr v-for="workspace in workspaces">
                <td>{{ workspace.place }}</td>
                <td>{{ workspace.active }}</td>
            </tr>
        </table>
  </div>
</template>

<script>
  export default {
    name: "app",
    data() {
      return {
          workspaces: [{
              place: "Home",
              active: false
          },
          {
              place: "Colab",
              active: true
          },
          {
              place: "GetAcademy",
              active: false
          }]
      };
    }
  };

</script>

<style scoped>
</style>
