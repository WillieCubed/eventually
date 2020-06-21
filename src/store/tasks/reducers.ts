import { Task, CREATE_TASK, UPDATE_TASK, REMOVE_TASK } from './types';
import { createReducer, createAction } from '@reduxjs/toolkit';



// export function tasksReducer(tasks: Task[] = [], action: any) {
//   switch (action.type) {
//     case CREATE_TASK:
//       return tasks.concat(action.payload);
//     case UPDATE_TASK:
//       return tasks;
//     case REMOVE_TASK:
//       return tasks.filter(task => task.id === action.payload.id);
//     default:
//       return tasks;
//   }
// }

const addTask = createAction<Task, 'addTask'>('addTask');
const updateTask = createAction<Task, 'updateTask'>('updateTask');
const removeTask = createAction<Task, 'removeTask'>('removeTask');

export const tasksReducer = createReducer([], (builder) => {
  builder.addCase(addTask, (state, action) => {

  })
  .addCase(updateTask, (state, action) => {

  })
  .addCase(removeTask, (state, action) => {

  });
});
