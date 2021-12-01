import React from "react";

import "./Grid.css";


const Grid = () => {

    const Semaine = ({nMonth, nWeek}) => {
        const week = [];
        for (let d = 1; d < 7; d++) {
            const key = "month-" + nMonth + "_week-" + nWeek + "_day-" + d;
            week.push( <td key={key} className="tdDay"></td> );
        }
        return week;
    }

    const Mois = ({nMonth}) => {
        const mois = [];
        for (let s = 1; s <= 5; s++) {
            const key = "month-" + nMonth + "_week-" + s;
            mois.push(<tr key={key}>
                <Semaine nMonth={nMonth} nWeek={s} />
            </tr>);
        }
        return <table><tbody>{mois}</tbody></table>;
    }

    const Annee = () => {
        const annee = [];
        for (let m = 1; m <= 12; m++) {
            annee.push(<div key={"month-" + m} className="">
                <Mois nMonth={m} />
            </div>);
        }
        return <div className="d-flex justify-content-center">
            {annee}
        </div>
    }
    
    return (

        <div id="grille" className="">
            <Annee />
        </div>
        
    );
}

export default Grid;