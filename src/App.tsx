import React from 'react';
import EventuallyAppBar from './components/EventuallyAppBar';
import EventuallyCalendar from './components/Calendar'; 
import './App.css';

function App() {
  return (
    <div id="app">
      <EventuallyAppBar></EventuallyAppBar>
      <EventuallyCalendar></EventuallyCalendar>
    </div>
  );
}

export default App;
