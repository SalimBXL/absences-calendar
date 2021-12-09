import React from "react";
import "./Grid.css";
import { weeksInMonth } from "./helpers.js";
import Semaine from "./Semaine";


const Mois = ({annee, mois, indexFirstWweekOfTheMonth, events}) => {

    const semaines = [];
    const indexLastWeek = (indexFirstWweekOfTheMonth + weeksInMonth(annee, mois));
    
    for (let i = indexFirstWweekOfTheMonth; i < indexLastWeek; i++) {
        const indexDay = i * 7;
        const key = "month-" + mois + "_week-" + indexFirstWweekOfTheMonth;
        semaines.push(
            <Semaine key={key} week={(i)} mois={mois} annee={annee} events={events}/>
        );
    }

    return (
        <table className="oneMonth" key={"month-" + mois} id={"month-" + mois + "-" + indexFirstWweekOfTheMonth}>
            <tbody>{semaines}</tbody>
        </table>);
}

export default Mois;