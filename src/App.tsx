import React from 'react';
import EventuallyAppBar from './components/EventuallyAppBar';
import EventuallyCalendar from './components/Calendar'; 
import './App.css';

function App() {
  return (
    <React.Fragment>
      <EventuallyAppBar></EventuallyAppBar>
      <EventuallyCalendar></EventuallyCalendar>
    </React.Fragment>
  );
}

export default App;
