import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Grid from './components/Grid/Grid';
import * as json from "./test-data-user7.json";


function App() {


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
      <Grid annee= {2021} events={events} />
    </div>
  );
}

export default App;
