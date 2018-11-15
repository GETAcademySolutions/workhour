<template>
  <div class="timeTracker">
    <div class="containerDiv row">      
      <div class="col-8 containerPart text-left">What do you think you are doing?</div>
      <div class="col-1 containerPart">+Project</div>
      <div class="col-2 containerPart">1:23:45</div>
      <div class="col-1 containerPart">Start</div>
    </div>
    <div class="containerDiv row"> 
      <div class="col-10 text-left noBorderRight day">Thur, 8th Nov</div>
      <div class="col-2 noBorderLeft day">Total: 1:23:45</div> 

      <div class="col-8 containerPart text-left">Task1</div>
      <div class="col-1 containerPart">+Project</div>
      <div class="col-2 containerPart">00:00 - 01:00</div>
      <div class="col-1 containerPart">1:00:00</div>   

      <div class="col-8 containerPart text-left">Task2</div>
      <div class="col-1 containerPart">+Project</div>
      <div class="col-2 containerPart">01:00 - 01:23</div>
      <div class="col-1 containerPart">0:23:45</div>   
    </div>
    <div class="containerDiv row"> 
      <div class="col-10 text-left noBorderRight day">Wed, 7th Nov</div>
      <div class="col-2 noBorderLeft day">Total: 1:23:45</div>  

      <div class="col-8 containerPart text-left">Task1</div>
      <div class="col-1 containerPart">+Project</div>
      <div class="col-2 containerPart">00:00 - 01:00</div>
      <div class="col-1 containerPart">1:00:00</div>   

      <div class="col-8 containerPart text-left">Task2</div>
      <div class="col-1 containerPart">+Project</div>
      <div class="col-2 containerPart">01:00 - 01:23</div>
      <div class="col-1 containerPart">0:23:45</div> 
    </div>
    <div class="containerDiv row">
      <div class="col-10 text-left noBorderRight day">Tue, 6th Nov</div>
      <div class="col-2 noBorderLeft day">Total: 1:23:45</div>  

      <div class="col-8 containerPart text-left">Task1</div>
      <div class="col-1 containerPart">+Project</div>
      <div class="col-2 containerPart">00:00 - 01:00</div>
      <div class="col-1 containerPart">1:00:00</div>   

      <div class="col-8 containerPart text-left">Task2</div>
      <div class="col-1 containerPart">+Project</div>
      <div class="col-2 containerPart">01:00 - 01:23</div>
      <div class="col-1 containerPart">0:23:45</div> 
    </div>
    <div class="containerDiv row">      
    </div>
  </div>
</template>

<script>
export default {
  name: "TimeTracker",
  data() {
    return {};
  },
  methods: {
    home() {
      this.$router.push({ name: "Home" });
    }
  }
};
</script>
<style scoped>
.containerPart {
  border: 1.5px solid #FF8500;
}
.containerDiv {
  margin-top: 3.5%;
  font-size: 100%;
}
.noBorder {
  border: none;
}
.noBorderLeft {
  border: 1.5px solid #FF8500;
  border-left: none;
}
.noBorderRight {
  border: 1.5px solid #FF8500;
  border-right: none;
}
.day {
  background-color: #016872;
  color: rgba(255, 255, 255, 0.7);
}
</style>