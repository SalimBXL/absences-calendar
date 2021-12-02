import React from "react";
import PropTypes from 'prop-types';

import "./Grid.css";

import "./data.json";

const DAYNAME = { 0: "Di", 1: "Lu", 2: "Ma", 3: "Me", 4: "Je", 5: "Ve", 6: "Sa"}
const DAYLENGTH = (1000*60*60*24);

const Grid = ({annee}) => {

    const adjustFirstDayOfTheYear = (_currentDate) => {
        const day = new Date(_currentDate).getDay();
        if (day > 1) _currentDate -= (DAYLENGTH * (day-1));
        if (day < 1) _currentDate -= (DAYLENGTH * (day+1));
        return _currentDate;
    }

    const Jour = ({_currentDate}) => {
        const date = new Date(_currentDate); 
        const day = (date.getDay());
        const jsonDate = date.toJSON();
        const nDay = date.getDate();
        const nMonth = (date.getMonth() + 1);
        const style = (day < 1 || day > 5) 
            ? {backgroundColor: "grey"}
            : null;
        return (
            <td key={_currentDate} className="tdDay"
                style={style} data-bs-toggle="tooltip" 
                title={jsonDate}>

                {DAYNAME[day]} <br/>
                ({day}) <br />
                {nDay} <br />
                {nMonth}

            </td>);
    }

    const Semaine = ({curr}) => {
        let _currentDate = curr;
        const jours = [];
        for (let i = 0; i < 7; i++) {
            jours.push(<Jour key={i} _currentDate={_currentDate} />);
            _currentDate += (DAYLENGTH);
        }
        return (<tr>{jours}</tr>);
    }

    const Mois = ({curr}) => {
        let _currentDate = curr;
        
        const semaines = [];
        for (let i = 0; i < 4; i++) {
            const date = new Date(_currentDate);
            const jsonDate = date.toJSON();
            console.log(jsonDate);
            semaines.push(<Semaine key={i} _currentDate={_currentDate} />);
            _currentDate += (DAYLENGTH * 7);
        }
        return (<tr><td><table><tbody>{semaines}</tbody></table></td></tr>);
    }



    let currentDate = adjustFirstDayOfTheYear(Date.parse(annee + "-01-01"));

    return (
        <div id="grille" className="">
            Annee : <h3>{annee}</h3>
            <table>
                <tbody>
                    
                        <Mois curr={currentDate} />
                    
                </tbody>
            </table>
        </div>
        
    );
}

Grid.prototype = {
    annee: PropTypes.number.isRequired
}

Grid.defaultProps = {
    annee: (new Date()).getFullYear()
}

export default Grid;