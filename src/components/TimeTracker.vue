<template>
  <div class="timeTracker">
    <div class="containerDiv row">
      <input class="col-7 containerPart text-left" v-on:keydown.enter="createLog" placeholder="What do you think you are doing?" /> 
      <div class="col-2 containerPart centeredText">+Project</div>
      <div class="col-1 containerPart centeredText timerNumber" id="timer">0:00:00</div>
      <button class="col-2 containerPart initButtonBlue day" id="startTimer" @click="createLog">START</button>
      <button class="col-2 containerPart initButtonBlue day" id="stopTimer" @click="stopLog" style="display: none;">STOP</button>
      <table class="col-12" v-for="day in days" style="margin-top: 20px;">
        <tr style="background-color: #016872; color: white">
          <td colspan="4"><span style="float: left;"> {{ day.dayName }}, {{ day.date }}</span>
          <span style="float: right; margin-right: 5px;">Total: {{ day.total }}</span></td>
          <!-- <span v-model="total" style="float: right;">Total: 
            {{ day.tasks[0].endTime + day.tasks[1].endTime + 
            day.tasks[2].endTime + day.tasks[3].endTime - 
            day.tasks[0].startTime - day.tasks[1].startTime - 
            day.tasks[2].startTime - day.tasks[3].startTime }}</span></td> -->
        </tr>
        <tr v-for="task in day.tasks">
          <td>{{ task.description }}</td>
          <td class="timerNumber">{{ task.startTime }} - {{ task.endTime }}</td>
          <td>{{ task.endTime - task.startTime }}</td>
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
            total: null,
            tasks: [{
                description: "Task1",
                startTime: 8.5,
                endTime: 10,
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
                startTime: 12,
                endTime: 15,
                project: "Proj 1"
              },
              {
                description: "Task4",
                startTime: 15,
                endTime: 17.5,
                project: "Proj 1"
              }
            ]
          },
          {
            date: "02.01.2019",
            dayName: "Wednesday",
            total: null,
            tasks: [{
                description: "Task1",
                startTime: 8.5,
                endTime: 10,
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
                startTime: 12,
                endTime: 15,
                project: "Proj 1"
              },
              {
                description: "Task4",
                startTime: 15,
                endTime: 18.5,
                project: "Proj 1"
              }
            ]
          },
          {
            date: "01.01.2019",
            dayName: "Tuesday",
            total: null,
            tasks: [{
                description: "Task1",
                startTime: 8.5,
                endTime: 10,
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
                startTime: 12,
                endTime: 15,
                project: "Proj 1"
              },
              {
                description: "Task4",
                startTime: 15,
                endTime: 16.5,
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
    },
    mounted() {
      console.log("hello")
      this.days.forEach(element => {
        element.tasks.forEach(task => {
          element.total += (task.endTime - task.startTime)
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
.timerNumber {
  color: #999999;
}
  .containerPart {
    border: 1.5px solid #ff8500;
  }

  .containerDiv {
    border: none;
  }

  .day {
    background-color: #016872;
    color: rgba(255, 255, 255, 0.7);
  }

</style>
