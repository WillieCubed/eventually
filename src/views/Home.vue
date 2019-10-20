<template>
  <main>
    <div class="container">
      <task-buffet-sheet class="funcy" :tasks="tasks"></task-buffet-sheet>
      <!-- <tasks></tasks> -->
      <calender class="the-calendar" :seriescontainer="series"></calender>
    </div>
  </main>
</template>

<script>
import TaskBuffetSheet from '../components/TaskBuffetSheet.vue';
import Calender from '../components/Calender.vue';
// import Tasks from '../components/Tasks.vue';

export default {
  name: 'home',
  components: {
    'task-buffet-sheet': TaskBuffetSheet,
    calender: Calender,
  },
  async mounted() {
    const tasks = await this.$store.dispatch('loadTasks');
    console.log(tasks);
    const series = await this.$store.dispatch('loadSeries');
    console.log(series);
  },
  data() {
    return {
      series: [],
      tasks: [],
    };
  },
};
</script>

<style scoped>
.the-calendar {

}

.funcy {
}

.container {
  display: flex;
  padding: 16px;
  height: 100%;
}
</style>
