import React from "react";
import PropTypes from 'prop-types';

import "./Grid.css";

import "./data.json";

const DAYLENGTH = (1000*60*60*24);

const Grid = ({annee, absences, jobs}) => {



    const adjustFirstDayOfTheYear = () => 
    {
        let _currentDate = Date.parse(annee + "-01-01")
        const day = new Date(_currentDate).getDay();
        let daysBefore = (day > 1) 
            ? (DAYLENGTH * (day-1)) 
            : (day < 1) 
                ? (DAYLENGTH * (day+1)) 
                : 0;
        _currentDate -= daysBefore;
        return [_currentDate, daysBefore];
    }

    let [currentDate] = adjustFirstDayOfTheYear(annee);

    const weeksInMonth = (m) => 
    {
        const date = new Date(annee, m, 0);
        return Math.floor((date.getDate() - 1) / 7) + 1;
    }


    /*
    *   JOUR
    */
    const Jour = ({currentDay, indexMois}) => 
    {
        const date = new Date(currentDay); 
        const day = (date.getDay());
        //const jsonDate = date.toJSON();
        const nDay = date.getDate();
        const nMonth = (date.getMonth() + 1);
        const nYear = date.getFullYear();
        
        const key = nYear + "-" + (nMonth < 10 ? "0" + nMonth : nMonth) + "-" + (nDay < 10 ? "0" + nDay : nDay)

        const style = (day < 1 || day > 5) 
            ? {backgroundColor: "grey"}
            : jobs.get(key)
                ? {backgroundColor: "cornflowerblue"}
                : absences.get(key) && absences.get(key).code === "Co" && absences.get(key).confirmed === true
                    ? {backgroundColor: "green"}
                    : absences.get(key) && absences.get(key).code === "Co" && absences.get(key).confirmed === false
                        ? {backgroundColor: "lightgreen"}
                        : absences.get(key) && absences.get(key).code === "Mi"
                            ? {backgroundColor: "orange"}
                            : null;

        return indexMois === nMonth
            ? (<td  key={key} 
                    className="tdDay"
                    style={style} 
                    data-bs-toggle="tooltip" 
                    title={key} 
                    id={key}>
                </td>)
            : (<td></td>);
    }


    /*
    *   SEMAINE
    */
    const Semaine = ({indexDay, indexMois}) =>
    {
        const jours = [];
        const indexLastDay = (indexDay + 7);

        for (let i = indexDay; i < indexLastDay; i++) {
            const _date = currentDate + (i * DAYLENGTH);
            jours.push(<Jour key={_date} currentDay={_date} indexMois={indexMois}/>);
        }

        return (<tr key={"week-" + indexDay}>{jours}</tr>);
    }


    /*
    *   MOIS
    */
    const Mois = ({indexMois, indexWeek}) => 
    {
        const semaines = [];
        const indexLastWeek = (indexWeek + weeksInMonth(indexMois));
        
        for (let i = indexWeek; i < indexLastWeek; i++) {
            const indexDay = i * 7;
            semaines.push(<Semaine key={i} indexDay={(indexDay)} indexMois={indexMois}/>);

        }

        return (<table key={"month-" + indexMois} id={"month-" + indexMois}><tbody>{semaines}</tbody></table>);
    }

    /*
    *   ANNEE
    */
   const Annee = () => 
   {
        const mois = [];
        let nWeeks = 0;

        for (let i = 1; i <= 12; i++) {
            const wim = weeksInMonth(i);
            const lastDayOfMonth = (currentDate + ((nWeeks+wim) * 7 * DAYLENGTH) - DAYLENGTH );
            const dateLastDayOfMonth = (new Date(lastDayOfMonth))
            const monthOfLastDay = dateLastDayOfMonth.getMonth() + 1;
            const lastDayOfMonthIsFromTheNextOne = (monthOfLastDay > i) ? true : false;
            const key = "month-" + i;
            const _nWeeks = (new Date(annee + "-" + i + "-01").getDay() < 1) || (new Date(annee + "-" + i + "-01").getDay() > 5)
                ? nWeeks + 1 
                : nWeeks;
            mois.push(
                <div key={key} className="clearfix">
                    <span className="float-start">
                        &nbsp;&nbsp;&nbsp;
                        <strong>{i}</strong>
                    </span> <br />
                    <Mois   key={i} 
                            indexMois={i} 
                            indexWeek={_nWeeks}
                            className="float-start"
                    />
                    
                </div>);
            
            nWeeks += wim;
            if (lastDayOfMonthIsFromTheNextOne === true) nWeeks -= 1;
        }

       return (<div className="d-flex justify-content-center ">{mois}</div>);
   }



   
    return (
        <div id="grille" className="">
            Annee : <h3>{annee}</h3>
            
            <Annee />
        </div>
        
    );
}

Grid.prototype = {
    annee: PropTypes.number.isRequired,
    absences: PropTypes.array,
    jobs: PropTypes.array
}

Grid.defaultProps = {
    annee: (new Date()).getFullYear(),
    absences: (new Map()),
    jobs: (new Map())
}

export default Grid;