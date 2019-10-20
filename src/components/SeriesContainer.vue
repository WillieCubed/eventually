<template>
<div v-bind:style="{ height: length + 'px', top: time + 'px' }"  class= seriesContainer>
  <p>{{name}}</p>
  <ul>
    <li v-for='task in tasks' v-bind:key="task">{{task}}</li>
  </ul>
</div>
</template>
<script>
export default {
  data() {
    return {
      begin: parseInt(this.start, 10),
      complete: parseInt(this.end, 10),
      length: ((((this.complete - this.begin) / 60) / 15) * 13.625),
      time: 0,
    };
  },
  props: {
    name: String,
    start: String,
    end: String,
    tasks: Array,
  },
  methods: {
    setDuration() {
      this.length = ((((this.complete - this.begin) / 60) / 15.0) * 13.625);
      console.log(this.tasks);
    },
    timeConverter(unixTimestamp) {
      console.log(unixTimestamp);
      const a = new Date(unixTimestamp * 1000);
      console.log(a);
      //  const months =
      //  ['Jan', 'Feb', 'Mar', 'Apr', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      //  const year = a.getFullYear();
      //  const month = months[a.getMonth()];
      //  const date = a.getDate();
      const hour = a.getUTCHours();
      const min = a.getUTCMinutes();
      //  const sec = a.getSeconds();
      //  const out = `${month}/${date}/${year} ${hour}:${min}:${sec}`;
      console.log(hour);
      console.log(min);
      this.time = ((((hour * 60) + min) / 15.0) * 13.625) + 81.75;
    },
  },
  beforeMount() {
    this.setDuration();
    this.timeConverter(this.start);
  },
};
</script>
<style>
  div.seriesContainer{
    display: block;
      position:absolute;
      padding:2px;
      width:80px;
      background-color:dodgerblue;
      left:82px;
      font-size: 8pt;
      text-align:left;
  }
</style>"
