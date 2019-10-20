<template>
  <div class = "tasks">
    <h1>Tasks</h1>
    <taskBlock v-for='task in tasks' v-bind:key="task" :name = "task.title"  draggable="true"></taskBlock>
  </div>
</template>
<script>
import TaskBlock from './TaskBlock.vue';

export default {
  props: {
    tasks: Array,
  },
  components: {
    taskBlock: TaskBlock,
  },
};
</script>
<style>
  div.tasks{
      display:block;
      position:absolute;
      width:140px;
      height:590px;
      overflow: auto;
      border-style:dashed;
      border-color:dimgray;
  }
  </style>"
