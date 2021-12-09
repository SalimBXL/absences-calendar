import React from "react";
import "./Grid.css";
import { DAYLENGTH } from "./helpers.js";
import Jour from "./Jour";


const Semaine = ({week, mois, annee, events}) => {
    
    const jours = [];
    
    for (let i = 0; i < 7; i++) {
        const _date = week + (i * DAYLENGTH);
        jours.push(<Jour key={_date} 
            currentDay={_date} 
            mois={mois} 
            events={events}
        />);
    }

    return (<tr key={"week-" + week}>{jours}</tr>);
}

export default Semaine;