<template>
  <main>
    <task-buffet-sheet :tasks="tasks"></task-buffet-sheet>
  </main>
</template>

<script>
import TaskBuffetSheet from '../components/TaskBuffetSheet.vue';

export default {
  name: 'home',
  components: {
    'task-buffet-sheet': TaskBuffetSheet,
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
