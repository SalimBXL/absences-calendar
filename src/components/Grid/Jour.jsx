import React from "react";
import "./Grid.css";

const Jour = ({currentDay, mois, events}) => {
    const date = new Date(currentDay); 
    const day = (date.getDay());
    const nDay = date.getDate();
    const nMonth = (date.getMonth() + 1);
    const nYear = date.getFullYear();
    
    const key = nYear + "-" + (nMonth < 10 ? "0" + nMonth : nMonth) + "-" + (nDay < 10 ? "0" + nDay : nDay)

    const style = !(day < 1 || day > 5) && events.get(key) 
        ? {backgroundColor: events.get(key).color}
        : null;

    const cls = (day < 1 || day > 5)
        ? "tdDay weekend"
        : "tdDay";

    const tooltip = events
        ? key + " : " + events.tooltip
        : key;

    return mois === nMonth
        ? (<td  key={key} 
                className={cls}
                style={style} 
                data-bs-toggle="tooltip" 
                title={tooltip} 
                id={key}>
            </td>)
        : (<td></td>);
}

export default Jour;