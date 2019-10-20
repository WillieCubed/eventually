<template>
  <div class = taskBlock>
    <p>{{name}}</p>
  </div>
</template>
<script>
export default {
  components: {},
  props: {
    name: String,
    estimated: String,
  },
};
</script>
<style>
  div.taskBlock{
      position:absolute;
      display:block;
      width:130px;
      height:54px;
      font-size: 8pt;
      text-align: left;
      padding-left:2px;
  }
  </style>"
