import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Grid from './components/Grid';
import Calendar from "./components/Calendar"

import * as json from "./test-data-user7.json";


const weeksInMonth = (year, month) => 
{
  const date = new Date(year, month, 0);
  return Math.floor((date.getDate() - 1) / 7) + 1;
}

function App() {

  const [monthToShow, setMonthToShow] = useState(() => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();
    return { month: month, numberOfWeeksInTheMonth: weeksInMonth(year, month) }
  });

  const handleMonthToShow = (m, y) => {
    setMonthToShow({month: m, numberOfWeeksInTheMonth: weeksInMonth(y, m)});
  }

  
  const parseJsonData = () => {
    
    const toShow = new Map();
    const test_absences = json.absences;
    const test_jobs = json.jobs;
    const test_events = json.events;

    test_jobs.forEach((o) => toShow.set(o.date, {color: "cornflowerblue", tooltip: o.content.toString()}));
    test_events.forEach((o) => toShow.set(o.date, {color: "grey", tooltip: o.content}));
    test_absences.forEach((o) => {
      if (toShow.get(o.date)) {
        toShow.set(o.date, {color: "red", tooltip: "ERROR"});
      } else {
        (o.content === "Co" && o.confirmed === true) && toShow.set(o.date, {color: "green", tooltip: o.content});
        (o.content === "Co" && o.confirmed !== true) && toShow.set(o.date, {color: "lightgreen", tooltip: o.content});
        (o.content === "Mi") && toShow.set(o.date, {color: "orange", tooltip: o.content});
        (o.content === "Ma") && toShow.set(o.date, {color: "green", tooltip: o.content});
      }
    });

    return toShow;
  }
  
  const events = parseJsonData();

  return (
    <div className="App">
      {/*<Grid events={events} handleMonthToShow={handleMonthToShow}/>*/}
      <Calendar monthToShow={monthToShow} eventsInMonth={events} />
    </div>
  );
}

export default App;
