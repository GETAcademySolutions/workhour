<template>
  <div class="reports">

    <div class="row" style="margin-bottom: 1%;">
      <div class="pageHeader" style="margin-right: auto;">Summary reports</div>
      <div class="noRightBorder containerDiv miniContainerDiv">


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


      <div class="searchDiv"><input class="searchBar" type="text" style="text-align: left;" placeholder="Search by description..."></div>
      <div class="filterDiv"><button class="initButton3">Filter</button></div>
    </div>

    <table class="col-12" v-for="week in weeks">
        <th style="text-align: left; padding: 1% 2%;">Total: {{week.total}}:00:00</th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <th></th>
        <tr>
          <th>Week:</th>
          <th>Monday:</th>
          <th>Tuesday:</th>
          <th>Wednesday:</th>
          <th>Thursday:</th>
          <th>Friday:</th>
          <th>Saturday:</th>
          <th>Sunday:</th>
        </tr>

        <tr v-for="day in week.days">
          <td>{{ day.week }}</td>
          <td>{{ day.monday }}:00:00</td>
          <td>{{ day.tuesday }}:00:00</td>
          <td>{{ day.wednesday }}:00:00</td>
          <td>{{ day.thursday }}:00:00</td>
          <td>{{ day.friday }}:00:00</td>
          <td>{{ day.saturday }}:00:00</td>
          <td>{{ day.sunday }}:00:00</td>
        </tr>
    </table>

  </div>
</template>

<script>
  export default {
    name: "Reports",
    data() {
      return {
        weeks:[{ 
          total: null,
          days: [{
            week: 50,  
            monday: 7,
            tuesday: 7,
            wednesday: 7,
            thursday: 7,
            friday: 7,
            saturday: 0,
            sunday: 0
          },
          {
            week: 49,  
            monday: 7,
            tuesday: 7,
            wednesday: 7,
            thursday: 7,
            friday: 7,
            saturday: 0,
            sunday: 0
          },
          {
            week: 48,  
            monday: 7,
            tuesday: 7,
            wednesday: 7,
            thursday: 7,
            friday: 7,
            saturday: 0,
            sunday: 0
          },
          {
            week: 47,  
            monday: 7,
            tuesday: 7,
            wednesday: 7,
            thursday: 7,
            friday: 7,
            saturday: 0,
            sunday: 0
          }]
        }]
      };
    },
    methods: {
      home() {
        this.$router.push({
          name: "Home"
        });
      }
    },
    mounted() {
      console.log("hello")
      this.weeks.forEach(element => {
        element.days.forEach(day => {
          element.total += (day.monday + day.tuesday + day.wednesday + day.thursday + day.friday + day.saturday + day.sunday)
        console.log(element.total)
        });
      });
      // for (e = 0; e < this.days.count; e++) {
      //   for (t = 0; t < this.days[e].tasks.count; t++) {
      //     this.days[e].total += (this.days[e].tasks[t].endTime - this.days[e].tasks[t].startTime)
      //   }
      //   console.log(this.days[e].total)
      // }
    }
  };

</script>

<style scoped>

</style>
