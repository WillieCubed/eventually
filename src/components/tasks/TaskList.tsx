import React, { SyntheticEvent } from 'react';
import { connect, ConnectedProps, AnyIfEmpty } from 'react-redux';
import { IconButton, Toolbar, Typography, Dialog, TextField, Paper, InputBase } from '@material-ui/core';
import { Add as AddIcon, Delete as DeleteIcon } from '@material-ui/icons';
import { RootState } from '../../store';
import { Task, NewTask } from '../../store/tasks/types';
import { addTask, updateTask, removeTask } from '../../store/tasks/actions';
import './TaskList.css';

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
  handleDelete?: TaskCallback,

  /**
   * Called when a TaskCard is moved.
   */
  handleMove?: TaskMoveCallback,
}

function TaskCard(props: TaskCardProps) {
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
  }
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
        {/* TODO: Inline block */}
      </div>
    </div>
  )
}

type HandleTaskCreatedCallback = (task: NewTask) => void;

interface TaskListFormProps {
  onTaskCreated: HandleTaskCreatedCallback;
}

class TaskListForm extends React.Component<TaskListFormProps, { title: string }> {

  constructor(props: TaskListFormProps) {
    super(props);
    this.state = {
      title: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  private handleChange(event: any) {
    this.setState({
      title: event.target.value,
    })
  }

  private handleSubmit(event: SyntheticEvent) {
    event.preventDefault();
    const newTask: NewTask = {
      title: this.state.title,
      completed: false,
      createdDate: new Date(),
    };
    this.props.onTaskCreated(newTask);
    this.setState({
      ...this.state,
      title: '',
    })
  }

  public render() {
    return (
      <Paper component="form">
        <InputBase
          placeholder="Create a task"
          inputProps={{ 'aria-label': 'Create a task' }}
          value={this.state.title}
          onChange={this.handleChange}
        />
        <IconButton type="submit" aria-label="Create Task" onClick={this.handleSubmit}>
          <AddIcon />
        </IconButton>
      </Paper>
    );
  }
}


interface TaskListProps extends PropsFromRedux {

  /**
   * The tasks to display in a {@link TaskList}
   */
  tasks: Task[];

  /**
   * True if items can be modifed in this list.
   */
  enabled: boolean;
}

/**
 * A sidebar that renders all the user's tasks.
 */
class EventuallyTaskList extends React.Component<TaskListProps> {
  public render() {
    const tasks = this.props.tasks.map(task => (
      <TaskCard key={task.id} task={task} handleDelete={this.props.removeTask}></TaskCard>
    ));
    return (
      <section className="task-list-container">
        <Toolbar className="task-list-toolbar">
          {/* <Typography variant="h6" noWrap>Your tasks</Typography> */}
          <TaskListForm onTaskCreated={this.props.addTask}></TaskListForm>
        </Toolbar>
        <div>
          {tasks}
        </div>
      </section>
    )
  }
}

const mapStateToProps = (state: RootState) => {
  console.log(state);
  return {
    tasks: state.tasksReducer.tasks,
    enabled: true, // TODO: Change to component-specific prop
  };
};

const mapDispatch = {
  addTask,
  updateTask,
  removeTask,
};

const connector = connect(mapStateToProps, mapDispatch);

type PropsFromRedux = ConnectedProps<typeof connector>;

const ConnectedTaskList = connector(EventuallyTaskList);

export default ConnectedTaskList;
