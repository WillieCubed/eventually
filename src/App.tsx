import React from 'react';
import EventuallyAppBar from './components/EventuallyAppBar';
import EventuallyCalendar from './components/Calendar'; 
import TaskList from './components/tasks/TaskList'; 
import './App.css';

function App() {
  return (
    <React.Fragment>
      <EventuallyAppBar></EventuallyAppBar>
      <div className="content-container">
        <EventuallyCalendar></EventuallyCalendar>
        <TaskList enabled={true} />
      </div>
    </React.Fragment>
  );
}

export default App;
