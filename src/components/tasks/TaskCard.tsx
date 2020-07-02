import React from 'react';
import { IconButton } from '@material-ui/core';
import { Delete as DeleteIcon } from '@material-ui/icons';
import { Task } from '../../store/tasks/types';
/**
 * A generic callback for peforming an action for a Task.
 */
type TaskCallback = (id: string) => void;
/**
 * A callback to handle changes in TaskCard position.
 */
type TaskMoveCallback = (oldIndex: number, newIndex: number) => void & TaskCallback;

interface TaskCardProps {

  /**
   * The task to display information.
   */
  task: Task;

  /**
   * Called when a TaskCard deletion button is clicked.
   */
  handleDelete?: TaskCallback;

  /**
   * Called when a TaskCard is moved.
   */
  handleMove?: TaskMoveCallback;
}

/**
 * A card that displays information for a single {@link Task}.
 */
export default function TaskCard(props: TaskCardProps) {
  const attachments = props.task.attachments?.map(attachment => (
    <div className="task-attachment">
      {attachment}
    </div>
  ));
  const handleDeleteClick = (event: any) => {
    event.preventDefault();
    const taskId = props.task.id;
    if (props.handleDelete) {
      props.handleDelete(taskId);
    }
  };
  return (
    <div className="task-card">
      <div>
        <div>
          <h1>{props.task.title}</h1>
          <p>{props.task.description}</p>
        </div>
        <IconButton type="submit" aria-label="Remove Task" onClick={handleDeleteClick}>
          <DeleteIcon />
        </IconButton>
      </div>
      <div className="task-attachments">
        {attachments}
      </div>
    </div>
  );
}
