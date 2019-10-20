<template>
  <div class="task-buffet-sheet">
    <div class="create-fab">Add task</div>
    <div class="toolbar">
      <div class="close-button"></div>
      <div class="title">
        Your tasks
      </div>
    </div>
    <div class="task-container">
      <task-list :tasks="tasks"></task-list>
    </div>
  </div>
</template>

<script>
import TaskList from './TaskList.vue';

export default {
  components: {
    'task-list': TaskList,
  },
  props: {
    tasks: Array,
  },
};
</script>

<style>
.task-buffet-sheet {
  position: fixed;
  bottom: 0;
  width: 100%;
  background-color: #fff;
  padding: 8px 24px 16px;
  box-sizing: border-box;
  box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.22), 0px 14px 56px rgba(0, 0, 0, 0.25);
  transform: translate(0,100%);
  transition: all 450ms cubic-bezier(0.32,1,0.23,1) 100ms;
}
</style>
