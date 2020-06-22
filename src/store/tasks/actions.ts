import { Task, NewTask } from './types';
import { createAction } from '@reduxjs/toolkit';

const ACTION_ADD_TASK = 'ADD_TASK';

const ACTION_REMOVE_TASK = 'REMOVE_TASK';

export interface TaskListState {
  tasks: Task[];
}

/**
 * An action to create a Task.
 */
export const addTask = createAction<NewTask, 'addTask'>('addTask');

/**
 * An action to modify existing Task data.
 */
export const updateTask = createAction<Task, 'updateTask'>('updateTask');

/**
 * An action to delete a Task.
 */
export const removeTask = createAction<string, 'removeTask'>('removeTask');