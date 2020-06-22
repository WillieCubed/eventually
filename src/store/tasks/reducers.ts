import { v4 as uuidv4 } from 'uuid';
import { Task, CREATE_TASK, UPDATE_TASK, REMOVE_TASK } from './types';
import { createReducer } from '@reduxjs/toolkit';
import { addTask, updateTask, removeTask } from './actions';



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

export interface TaskListState {
  tasks: Task[];
}

const initialState: TaskListState = {
  tasks: [],
};

export const tasksReducer = createReducer(initialState, (builder) => {
  builder.addCase(addTask, (state, action) => {
    console.log(action);
    const task = {
      ...action.payload,
      id: uuidv4(),
    };
    state.tasks.push(task);
  })
  .addCase(updateTask, (state, action) => {
    const taskIndex = state.tasks.findIndex(task => task.id === action.payload.id);
    state.tasks[taskIndex] = action.payload;
  })
  .addCase(removeTask, (state, action) => {
    console.log(action);
    const removedId = action.payload;
    state.tasks = state.tasks.filter(task => task.id !== removedId);
  });
});
