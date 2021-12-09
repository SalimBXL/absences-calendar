import React from "react";
import PropTypes from 'prop-types';
import "./Grid.css";
import Annee from "./Annee";

/*
  * MAP FORMAT : 
  * Key: Date (STRING YYYY-MM-DD)
  * Value: Object => { color: STRING, tooltip: STRING }
  */

const Grid = ({annee, events}) => (        
    <div id="grille">
        Annee : <h1>{annee}</h1>
        <Annee annee={annee} events={events} />
    </div>
);

Grid.prototype = {
    annee: PropTypes.number.isRequired,
    events: PropTypes.array,
}

Grid.defaultProps = {
    events: (new Map())
}

export default Grid;