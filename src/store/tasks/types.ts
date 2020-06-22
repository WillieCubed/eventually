
/**
 * An attachment for a task.
 */
export interface TaskAttachment {
  
  /**
   * A title for this attachment.
   */
  label: string;

  /**
   * A link to another resource.
   */
  uri: string;
}

export interface NewTask {

  /**
   * The name of this task.
   */
  title: string;

  /**
   * An optional description for this task.
   */
  description?: string;

  /**
   * True if this task is finished.
   */
  completed: boolean;

  /**
   * Tasks that are related to this task.
   */
  linkedTasks?: Task[];

  /**
   * When this task should be completed.
   */
  dueDate?: Date;

  /**
   * When this task was added.
   */
  createdDate: Date;

  /**
   * Links to relevant data objects.
   */
  attachments?: TaskAttachment[];

  /**
   * Tags to categorize this task.
   */
  labels?: string[];

  /**
   * A user-defined task group.
   */
  category?: string;
}

/**
 * A to-do item.
 */
export interface Task extends NewTask {
  
  /**
   * A unique identifier for this task.
   */
  id: string;
}

export const CREATE_TASK = 'CREATE_TASK';

export const UPDATE_TASK = 'UPDATE_TASK';

export const REMOVE_TASK = 'REMOVE_TASK';
