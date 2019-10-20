<template>
  <div>
    <nav>
      <title>Task 1</title>
    </nav>
    <div>
      <h5>
        Description
      </h5>
      <h5>
        {{description}}
      </h5>
    </div>
    <div>
      <h5>icon</h5>
      <h5>Due Date</h5>
      <h5>{{timeConverter(dueDate)}}</h5>
    </div>
    <div>
      <h5>icon</h5>
      <h5>Amount Left To Complete</h5>
      <h5>{{calcAmountTimeLeft(estimatedTime, dueDate)}}</h5>
    </div>
    <div>
      <h5>icon</h5>
      <h5>Status</h5>
      <h5>{{priority}}</h5>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    description: String,
    dueDate: Object,
    estimatedTime: Object,
    priority: String,
  },
  // {{timeConverter(this.dueDate)}}
  // {{estimatedTime}}
  // {{priority}}
  methods: {
    timeConverter(unixTimestamp) {
      console.log(unixTimestamp);
      const a = new Date(unixTimestamp * 1000);
      console.log(a);
      const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
      const year = a.getFullYear();
      const month = months[a.getMonth()];
      const date = a.getDate();
      const hour = a.getUTCHours();
      const min = a.getUTCMinutes();
      const sec = a.getUTCSeconds();
      const time = `${month}/${date}/${year} ${hour}:${min}:${sec}`;
      console.log(time);
      // const time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
      return time;
    },

    calcAmountTimeLeft(currentTime, dueTime) {
      const timeLeft = (dueTime - currentTime) / 60;
      console.log(timeLeft);
      return timeLeft;
    },
  },
};
</script>

<style>
</style>
