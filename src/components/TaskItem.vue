<template>
  <div class="task-item">
    <div>
      <div class="name">{{title}}</div>
      <div class="progress">
        <!-- TODO:  -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    goalProgress: Number,
  },
};
</script>

<style>
.task-item {
}
</style>
