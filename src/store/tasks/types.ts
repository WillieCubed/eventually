import { createAction } from "@reduxjs/toolkit";

/**
 * A to-do item.
 */
export interface Task {
  
  /**
   * A unique identifier for this task.
   */
  id: string;

  /**
   * The name of this task.
   */
  title: string;

  /**
   * An optional description for this task.
   */
  description?: string;

  /**
   * Tasks that are related to this task.
   */
  linkedTasks?: Task[];

  dueDate: Date;

  /**
   * When this task was added.
   */
  createdDate: Date;

  attachments: object[];

  /**
   * Tags to categorize this task.
   */
  labels?: string[];

  /**
   * A user-defined task group.
   */
  category?: string;
}

export const CREATE_TASK = 'CREATE_TASK';

export const UPDATE_TASK = 'UPDATE_TASK';

export const REMOVE_TASK = 'REMOVE_TASK';

// export const createTask = createAction<Task>('createTask');
