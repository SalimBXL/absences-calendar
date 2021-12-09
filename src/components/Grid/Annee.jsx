import React from "react";
import "./Grid.css";
import Mois from "./Mois";
import {    weeksInMonth, 
            DAYLENGTH, 
            findFirstDayOfTheYear, 
            WEEKLENGTH } from "./helpers.js";


const Annee = ({annee, events}) => {

    const mois = [];
    let nWeeks = 0;
    
    const lastDayOfMonthIsFromTheNextOne = (monthNumber) => {
        const firstDayOfYear=findFirstDayOfTheYear(annee);
        const dateLastDayOfMonth = (new Date((firstDayOfYear + ( (nWeeks + weeksInMonth(monthNumber) ) * WEEKLENGTH ) - DAYLENGTH)))
        const monthOfLastDay = dateLastDayOfMonth.getMonth() + 1;
        return (monthOfLastDay > monthNumber) ? true : false; 
    }

    const styleIfIsCurrentMonth = (month, year) => {
        const date = new Date();
        const currMonth = date.getMonth();
        const currYear = date.getFullYear();
        return (currMonth+1 === month && currYear === year) 
            ? {backgroundColor: "lemonchiffon"} 
            : null;
    }

    for (let i = 1; i <= 12; i++) {

        const key = "month-" + i;
        const _weekNumber = (new Date(annee + "-" + i + "-01").getDay() < 1) || (new Date(annee + "-" + i + "-01").getDay() > 5)
            ? nWeeks + 1 
            : nWeeks;
        
        mois.push(
            <div key={key} id={"obj-"+key} className="clearfix" style={styleIfIsCurrentMonth(i, annee)} >

                <span className="float-start">
                    &nbsp;&nbsp;&nbsp;
                    <strong>{i}</strong>
                </span> <br />

                <Mois   key={"month-" + i} 
                        annee={annee}
                        mois={i} 
                        indexFirstWweekOfTheMonth={_weekNumber}
                        events={events}
                        className={"float-start"}
                />

            </div>
        );
        
        nWeeks += weeksInMonth(annee, i);
        if (lastDayOfMonthIsFromTheNextOne === true) nWeeks -= 1;
    }
    return (<div className="mois d-flex justify-content-center">{mois}</div>);
   }

   export default Annee;