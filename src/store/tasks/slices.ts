import { v4 as uuidv4 } from 'uuid';
import { createSlice } from '@reduxjs/toolkit';
import { Task, NewTask } from './types';

type TasksState = Task[];

const initialState: TasksState = [];

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    /**
     * Adds a task to the data store.
     * 
     * If the given task has an ID that overlaps an existing task, this will
     * fail silently.
     */
    addTask(state, action: { payload: NewTask }) {
      console.log(action);
      // TODO: Automate process of assigning task IDs
      const task = {
        ...action.payload,
        id: uuidv4(),
      };
      state.push(task);
    },
    /**
     * Updates a task with the given ID.
     *
     * If no task with the given ID is found, this fails silently.
     */
    updateTask(state, action: { payload: { id: string, task: Task } }) {
      const { id, task } = action.payload;
      const taskIndex = state.findIndex(task => task.id === id);
      if (taskIndex === -1) {
        return;
      }
      state[taskIndex] = task;
    },
    removeTask(state, action: { payload: string }) {
      console.log(action);
      const removedId = action.payload;
      return state.filter(task => task.id !== removedId);
    },
  },
});

const { actions, reducer } = tasksSlice;

export const { addTask, updateTask, removeTask } = actions;

export default reducer;