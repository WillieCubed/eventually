<template>
  <main>
    <task-buffet-sheet :tasks="tasks"></task-buffet-sheet>
    <tasks></tasks>
    <calender></calender>
    <tasks></tasks>
    <calender></calender>
  </main>
</template>

<script>
import TaskBuffetSheet from '../components/TaskBuffetSheet.vue';
import Calender from '../components/Calender.vue';
import Tasks from '../components/Tasks.vue';
import Calender from '../components/Calender.vue';
import Tasks from '../components/Tasks.vue';

export default {
  name: 'home',
  components: {
    calender: Calender,
    tasks: Tasks,
    'task-buffet-sheet': TaskBuffetSheet,
    calender: Calender,
    tasks: Tasks,
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
