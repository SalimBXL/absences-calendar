import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Grid from './components/Grid/Grid';

import * as json from "./test-data-user7.json";

//const json = require("../public/test-data.json");

function App() {

  const toShow = new Map(); // { key: {color, tooltip} }
  
  /*
  const test_absences = [
    { "date": "2021-06-16", "code": "Co", "confirmed": true},
    { "date": "2021-06-17", "code": "Co", "confirmed": false},
    { "date": "2021-07-05", "code": "Mi", "confirmed": false}
  ];

  const test_jobs = [
    { "date": "2021-06-14", "codes": ["5", "L"]},
    { "date": "2021-07-15", "codes": ["M", "QC"]},
    { "date": "2021-07-01", "codes": ["FDG2"]}
  ]

  const test_events = [
    { "date": "2021-07-21", "event": "Fête nationale"},
    { "date": "2021-01-01", "event": "Saint Sylvestre"},
    { "date": "2021-12-25", "event": "Noël"},
    { "date": "2021-11-11", "event": "Toussaints"}
  ]
  */

  const test_absences = json.absences;
  const test_jobs = json.jobs;
  const test_events = json.events;

  test_jobs.forEach((o) => toShow.set(o.date, {color: "cornflowerblue", tooltip: o.content.toString()}));
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
  test_events.forEach((o) => toShow.set(o.date, {color: "grey", tooltip: o.content}));

  return (
    <div className="App">
      <Grid events={toShow} />
    </div>
  );
}

export default App;
