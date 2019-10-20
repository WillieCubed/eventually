<template>
<div class = calender>
  <div class = header><h1>October 20,2019</h1></div>
  <div class = timeColumn>
    <div class = timeBlock><p>12:00 am</p></div>
    <div class = timeBlock><p>1:00 am</p></div>
    <div class = timeBlock><p>2:00 am</p></div>
    <div class = timeBlock><p>3:00 am</p></div>
    <div class = timeBlock><p>4:00 am</p></div>
    <div class = timeBlock><p>5:00 am</p></div>
    <div class = timeBlock><p>6:00 am</p></div>
    <div class = timeBlock><p>7:00 am</p></div>
    <div class = timeBlock><p>8:00 am</p></div>
    <div class = timeBlock><p>9:00 am</p></div>
    <div class = timeBlock><p>10:00 am</p></div>
    <div class = timeBlock><p>11:00 am</p></div>
    <div class = timeBlock><p>12:00 pm</p></div>
    <div class = timeBlock><p>1:00 pm</p></div>
    <div class = timeBlock><p>2:00 pm</p></div>
    <div class = timeBlock><p>3:00 pm</p></div>
    <div class = timeBlock><p>4:00 pm</p></div>
    <div class = timeBlock><p>5:00 pm</p></div>
    <div class = timeBlock><p>6:00 pm</p></div>
    <div class = timeBlock><p>7:00 pm</p></div>
    <div class = timeBlock><p>8:00 pm</p></div>
    <div class = timeBlock><p>9:00 pm</p></div>
    <div class = timeBlock><p>10:00 pm</p></div>
    <div class = timeBlock><p>11:00 pm</p></div>
  </div>
  <dayColumn></dayColumn>
  <seriesContainer v-for='series in seriescontainer' :key = 'series.id'
  :name = "series.title" :end ="series.endTime" :start ="series.startTime"
  :tasks = "series.tasks"></seriesContainer>
  <tasklessSeriesContainer v-for='taskless in tasklessSeriesContainer' :key = 'taskless.id'
  :name = "taskless.title"
  :end = "taskless.endTime" :start = "taskless.startTime"></tasklessSeriesContainer>
</div>
</template>
<script>
import DayColumn from './DayColumn.vue';
import SeriesContainer from './SeriesContainer.vue';
import TasklessSeriesContainer from './TasklessSeriesContainer.vue';

export default {
  props: {
    seriescontainer: Array,
    tasklessSeriesContainer: Array,
  },
  components: {
    dayColumn: DayColumn,
    seriesContainer: SeriesContainer,
    tasklessSeriesContainer: TasklessSeriesContainer,
  },
};
</script>
<style>
  div.timeColumn{
      display: block;
      position:absolute;
      padding:4px;
      width:70px;
      border-right: 1px;
      border-right-color:dimgray;
      border-style: solid;
      border-left: none;
      border-top:none;
      border-bottom:none;
  }
  div.timeBlock{
    display: block;
    border-bottom:1px;
    border-bottom-color:dimgray;
    border-style:solid;
    border-left: none;
    border-top:none;
    border-right:none;
    height:50px;
    width: 876px;
    padding:2px;
    padding-right:4px;
    text-align:left;
  }
  div.calender{
      display: block;
      position:absolute;
      padding:2px;
      overflow:auto;
      height:590px;
      width:900px;
      left:150px;
  }
  div.header{
    display:block;
    position:relative;
    padding:2px;
    padding-bottom: 10px;
    height: 50px;
    width: 880px;
    border:1px;
    border-style: solid;
    border-color:dimgray;
  }
  </style>"
