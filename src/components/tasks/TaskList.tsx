import React, { SyntheticEvent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import { IconButton, Toolbar, Paper, InputBase } from '@material-ui/core';
import { Add as AddIcon } from '@material-ui/icons';
import { RootState } from '../../store';
import { Task, NewTask } from '../../store/tasks/types';
import { addTask, updateTask, removeTask } from '../../store/tasks/slices';
import { refreshTasks } from '../../store/tasks/thunks';
import TaskCard  from './TaskCard';
import './TaskList.css';

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
    });
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


interface TaskListProps extends TaskListReduxProps {

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
  
  private refreshTasks = () => {
    // TODO: Show loading 
    this.props.refreshTasks();
  }
  
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
    tasks: state.tasks,
  };
};

const mapDispatch = {
  addTask,
  updateTask,
  removeTask,
  refreshTasks,
};

const connector = connect(mapStateToProps, mapDispatch);

type TaskListReduxProps = ConnectedProps<typeof connector>;

const ConnectedTaskList = connector(EventuallyTaskList);

export default ConnectedTaskList;
