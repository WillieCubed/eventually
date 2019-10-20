<template>
<main>
  <div>
    <task-details :description="task.description"
    :dateDue="task.deadline"
    :estimatedTime="task.deadline"
    :priority="task.urgent">
    </task-details>
  </div>
</main>
</template>

<script>
import TaskDetails from '../components/TaskDetails.vue';

export default {
  name: 'task-detail',
  components: { 'task-details': TaskDetails },
  props: ['id'],
  data() {
    return {
      task: null,
    };
  },
  methods: {
    async mounted() {
      console.log(this.id);
      const task = this.$store.getters.taskById(this.id);
      console.log(task);
      this.task = task;
    },
  // Write method to load data with taskId using Firestore
  // Store each attribute in data
  // display each attribute in the template
  },
};
</script>

<style>

</style>
