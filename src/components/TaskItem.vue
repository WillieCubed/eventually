<template>
  <div class="task-item">
    <div class="container">
      <div class="name">{{title}}</div>
      <div class="progress">
        {{ goalProgress }}
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

<style scoped>
.task-item {
  height: 72px;
  width: 100%;
  display: flex;
  justify-content: center;
}

.container  {
  width: 100%;
}

.name {
  font-size: 14px;
}
</style>
