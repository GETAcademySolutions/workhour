<template>
  <div class="timeTracker">
    <div class="containerDiv row">

    </div>
    <div id="app" class="row">
      <input class="col-8 containerPart text-left" v-on:keydown.enter="stopLog" placeholder="What do you think you are doing?" /> 
      <div class="col-1 containerPart">+Project</div>
      <div class="col-2 containerPart" id="timer">0:00:00</div>
      <button class="col-1 containerPart initButtonBlue day" id="startTimer" @click="createLog">Start</button>
      <button class="col-1 containerPart initButtonBlue day" id="stopTimer" @click="stopLog" style="display: none;">Stop</button>
      <table class="col-12" v-for="day in days" style="margin-top: 20px">
        <tr style="background-color: #016872; color: white">
          <td colspan="4"><span style="float: left;"> {{ day.dayName }}, {{ day.date }}</span><span style="float: right;">Total: {{day.total}}</span></td>
        </tr>
        <tr v-for="task in day.tasks">
          <td>{{ task.description }}</td>
          <td>{{ task.startTime }}</td>
          <td>{{ task.endTime }}</td>
          <td>{{ task.project }}</td>
        </tr>
      </table>

    </div>
  </div>
</template>

<script>
  var count = 0;
  export default {
    name: "app",
    data() {
      return {
        days: [{
            date: "03.01.2019",
            dayName: "Thursday",
            total: 1.5,
            tasks: [{
                description: "Task1",
                startTime: 10,
                endTime: 12,
                project: "Proj 1"
              },
              {
                description: "Task2",
                startTime: 10,
                endTime: 12,
                project: "Proj 1"
              },
              {
                description: "Task3",
                startTime: 10,
                endTime: 12,
                project: "Proj 1"
              },
              {
                description: "Task4",
                startTime: 10,
                endTime: 12,
                project: "Proj 1"
              }
            ]
          },
          {
            date: "02.01.2019",
            dayName: "Wednesday",
            total: 1.5,
            tasks: [{
                description: "Task1",
                startTime: 10,
                endTime: 12,
                project: "Proj 1"
              },
              {
                description: "Task1",
                startTime: 10,
                endTime: 12,
                project: "Proj 1"
              },
              {
                description: "Task1",
                startTime: 10,
                endTime: 12,
                project: "Proj 1"
              },
              {
                description: "Task1",
                startTime: 10,
                endTime: 12,
                project: "Proj 1"
              }
            ]
          },
          {
            date: "01.01.2019",
            dayName: "Tuesday",
            total: 1.5,
            tasks: [{
                description: "Task1",
                startTime: 10,
                endTime: 12,
                project: "Proj 1"
              },
              {
                description: "Task1",
                startTime: 10,
                endTime: 12,
                project: "Proj 1"
              },
              {
                description: "Task1",
                startTime: 10,
                endTime: 12,
                project: "Proj 1"
              },
              {
                description: "Task1",
                startTime: 10,
                endTime: 12,
                project: "Proj 1"
              }
            ]
          }
        ]
      };
    },
    methods: {
      home() {
        this.$router.push({
          name: "Home"
        });
      },
      log() {
        count++;
        var seconds = count % 60;
        var minutes = Math.floor(count / 60);
        var hours = Math.floor(minutes / 60);
        minutes %= 60;
        hours %= 60;
        var adsec = ("0" + seconds).slice(-2);
        var admin = ("0" + minutes).slice(-2);
        var adhr = ("0" + hours).slice(-2);
        timer.innerHTML = hours + ":" + admin + ":" + adsec;
      },
      createLog() {
        this.$options.interval = setInterval(this.log, 1000);
        startTimer.style.display = "none";
        stopTimer.style.display = "block";
      },
      stopLog() {
        clearInterval(this.$options.interval);
        startTimer.style.display = "block";
        stopTimer.style.display = "none";
        //reset
        count = 0;
        timer.innerHTML = "0:00:00";
      }
    }
  };

</script>
<style scoped>
  .containerPart {
    border: 1.5px solid #ff8500;
  }

  .containerDiv {
    margin-top: 3.5%;
    font-size: 100%;
    border: none;
  }

  .noBorder {
    border: none;
  }

  .noBorderLeft {
    border: 1.5px solid #ff8500;
    border-left: none;
  }

  .noBorderRight {
    border: 1.5px solid #ff8500;
    border-right: none;
  }

  .day {
    background-color: #016872;
    color: rgba(255, 255, 255, 0.7);
  }

  table,
  tr,
  td {
    border-collapse: collapse;
    border: 2px solid #ff8500;
  }

</style>
