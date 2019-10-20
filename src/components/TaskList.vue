<template>
  <div class="list">
    <div v-for="task in tasks" :key="task.id">
      <task-item :task="task"></task-item>
    </div>
  </div>
</template>

<script>
import TaskItem from './TaskItem.vue';

export default {
  components: {
    'task-item': TaskItem,
  },
  props: {
    tasks: Array,
  },
};
</script>

<style>
/* TODO(Thais): Style this thing */
</style>
