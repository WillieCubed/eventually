<template>
  <main>
    <task-buffet-sheet :tasks="tasks"></task-buffet-sheet>
    <tasks></tasks>
    <calender></calender>
  </main>
</template>

<script>
import TaskBuffetSheet from '../components/TaskBuffetSheet.vue';
import Calender from '../components/Calender.vue';
import Tasks from '../components/Tasks.vue';

export default {
  name: 'home',
  components: {
    'task-buffet-sheet': TaskBuffetSheet,
    calender: Calender,
    tasks: Tasks,
  },
  mounted() {
    this.$store.dispatch('loadSeries');
  },
  data() {
    return {
      tasks: [
        // TODO: Load data from store
      ],
    };
  },
};
</script>
