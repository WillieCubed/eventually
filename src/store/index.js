import Vue from 'vue';
import Vuex from 'vuex';
import {
  addTask, editTask, getTasks, getSeries,
} from '../api';
import { validateTask } from '../api/task-utils';
// import {
//   ADD_TASK_MUTATION,
//   EDIT_TASK_MUTATION,
//   SET_TASKS_MUTATION,
//   DELETE_TASK_MUTATION,
// } from './mutation-types';

Vue.use(Vuex);

const ADD_TASK_MUTATION = 'addTask';
const EDIT_TASK_MUTATION = 'editTask';
const SET_TASKS_MUTATION = 'setTasks';
const SET_SERIES_MUTATION = 'setSeries';
// const UPDATE_TASK_MUTATION = 'updateTask';
const DELETE_TASK_MUTATION = 'deleteTask';

// const FETCH_SERIES = 'fetchSeries';
// const ADD_SERIES = 'addSeries';
// const EDIT_SERIES = 'editSeries';
// const DELETE_SERIES = 'deleteSeries';

export default new Vuex.Store({
  state: {
    tasks: [], // All tasks from the user
    series: [],
  },
  getters: {
    taskById(state, taskId) {
      const filtered = state.tasks.filter(task => task.id === taskId);
      if (filtered.length !== 0) {
        return null;
      }
      return filtered[0];
    },
    tasksBeforeDeadline(state, deadline) {
      return state.tasks.filter(task => task.deadline <= deadline);
    },
  },
  mutations: {
    [ADD_TASK_MUTATION](state, payload) {
      validateTask(payload);
      state.tasks.push(payload);
    },
    [EDIT_TASK_MUTATION](state, { id, newTask }) {
      state.tasks[id] = newTask;
    },
    [DELETE_TASK_MUTATION](state, taskId) {
      const tasks = state.tasks.filter(task => task.id === taskId);
      Object.assign(state.tasks, tasks);
    },
    [SET_TASKS_MUTATION](state, tasks) {
      // TODO: Update differences
      Object.assign(state.tasks, tasks);
    },
    [SET_SERIES_MUTATION](state, series) {
      Object.assign(state.series, series);
    },
  },
  actions: {
    async addTask({ commit }, task) {
      try {
        await addTask(task);
        commit(ADD_TASK_MUTATION, task);
      } catch (e) {
        console.error('Error when adding task', e);
      }
    },
    async loadTasks({ commit }) {
      try {
        const tasks = await getTasks();
        commit(SET_TASKS_MUTATION, tasks);
      } catch (e) {
        console.error('Error when loading tasks', e);
      }
    },
    async editTask({ commit }, { id, newTask }) {
      try {
        const updatedTask = await editTask(id, newTask);
        commit(EDIT_TASK_MUTATION, { id, updatedTask });
      } catch (e) {
        console.error('Error when editing task', e);
      }
    },
    async removeTask({ commit }, taskId) {
      try {
        commit(DELETE_TASK_MUTATION, taskId);
      } catch (e) {
        console.error(e);
      }
    },
    async loadSeries({ commit }) {
      try {
        const series = await getSeries();
        commit(SET_SERIES_MUTATION, series);
      } catch (e) {
        console.error('Error when loading series', e);
      }
    },
  },
});
