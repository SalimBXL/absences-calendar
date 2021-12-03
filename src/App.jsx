import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Grid from './components/Grid/Grid';

function App() {


  
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

  const absences = new Map();
  test_absences.map((o) => absences.set(o.date, o) );

  const jobs = new Map();
  test_jobs.map((o) => jobs.set(o.date, o) );


  
  return (
    <div className="App">
      <Grid absences={absences} jobs={jobs} />
    </div>
  );
}

export default App;
