<template>
  <div class="calender">
    <div class="header">
      <h1>{{currentDate}}</h1>
    </div>
    <div class="timeColumn">
      <div class="timeBlock" v-for="time of times" :key="time">{{ time }}</div>
    </div>
    <dayColumn v-for="i in 7" :key="i"></dayColumn>
    <seriesContainer
      v-for="series in seriescontainer"
      :key="series.id"
      :name="series.title"
      :end="series.endTime"
      :start="series.startTime"
      :tasks="series.tasks"
    ></seriesContainer>
    <tasklessSeriesContainer
      v-for="taskless in tasklessSeriesContainer"
      :key="taskless.id"
      :name="taskless.title"
      :end="taskless.endTime"
      :start="taskless.startTime"
    ></tasklessSeriesContainer>
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
  computed: {
    currentDate() {
      return 'October 20, 2019';
    },
    times() {
      const results = [];
      for (let i = 1; i <= 24; i += 1) {
        const time = `${(i % 12) + 1} ${(i % 24) + 1 > 12 ? 'AM' : 'PM'}`;
        results.push(time);
      }
      return results;
    },
  },
};
</script>
<style>
div.timeColumn {
  display: block;
  position: absolute;
  padding: 8px;
  width: 72px;
  border-right: 1px;
  border-right-color: dimgray;
  border-style: solid;
  border-left: none;
  border-top: none;
  border-bottom: none;
}
div.timeBlock {
  display: block;
  border-bottom: 1px;
  border-bottom-color: dimgray;
  border-style: solid;
  border-left: none;
  border-top: none;
  border-right: none;
  height: 50px;
  width: 876px;
  padding: 2px;
  padding-right: 4px;
  text-align: left;
}
div.calender {
  display: block;
  /* position: absolute; */
  padding: 4px;
  overflow: auto;
  height: 100%;
  width: 100%;
}
div.header {
  display: block;
  position: relative;
  padding: 2px;
  padding-bottom: 10px;
  height: 64px;
  width: 100%;
  border: 1px;
  border-style: solid;
  border-color: dimgray;
}
</style>"
