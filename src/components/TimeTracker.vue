<template>
  <div class="timeTracker">
    <div class="containerDiv row">      
      <div class="col-8 containerPart text-left">What do you think you are doing?</div>
      <div class="col-1 containerPart">+Project</div>
      <div class="col-2 containerPart">1:23:45</div>
      <div class="col-1 containerPart">Start</div>
    </div>
    <div class="containerDiv row"> 
      <div class="col-10 containerPart text-left">Thur, 8th Nov</div>
      <div class="col-2 containerPart">Total: 1:23:45</div> 

      <div class="col-1 containerPart noBorder">|________</div>
      <div class="col-7 containerPart text-left">Task1</div>
      <div class="col-1 containerPart">+Project</div>
      <div class="col-2 containerPart">00:00 - 01:00</div>
      <div class="col-1 containerPart">1:00:00</div>   

      <div class="col-1 containerPart noBorder">|________</div>
      <div class="col-7 containerPart text-left">Task2</div>
      <div class="col-1 containerPart">+Project</div>
      <div class="col-2 containerPart">01:00 - 01:23</div>
      <div class="col-1 containerPart">0:23:45</div>   
    </div>
    <div class="containerDiv row"> 
      <div class="col-10 containerPart text-left">Wed, 7th Nov</div>
      <div class="col-2 containerPart">Total: 1:23:45</div>  

      <div class="col-1 containerPart noBorder">|________</div>
      <div class="col-7 containerPart text-left">Task1</div>
      <div class="col-1 containerPart">+Project</div>
      <div class="col-2 containerPart">00:00 - 01:00</div>
      <div class="col-1 containerPart">1:00:00</div>   

      <div class="col-1 containerPart noBorder">|________</div>
      <div class="col-7 containerPart text-left">Task2</div>
      <div class="col-1 containerPart">+Project</div>
      <div class="col-2 containerPart">01:00 - 01:23</div>
      <div class="col-1 containerPart">0:23:45</div> 
    </div>
    <div class="containerDiv row">
      <div class="col-10 containerPart text-left">Tue, 6th Nov</div>
      <div class="col-2 containerPart">Total: 1:23:45</div> 

      <div class="col-1 containerPart noBorder">|________</div>
      <div class="col-7 containerPart text-left">Task1</div>
      <div class="col-1 containerPart">+Project</div>
      <div class="col-2 containerPart">00:00 - 01:00</div>
      <div class="col-1 containerPart">1:00:00</div>   

      <div class="col-1 containerPart noBorder">|________</div>
      <div class="col-7 containerPart text-left">Task2</div>
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
  name: 'TimeTracker',
  data () {
    return {};
  },
  methods: {
    home() {
      this.$router.push({ name: "Home" });
    },
  }
}
</script>
<style scoped>
.containerPart {
  border: 1.5px solid rgb(255, 166, 50);
}
.containerDiv {
  margin-top: 3.5%;
}
.noBorder {
  border: none;
}
</style>