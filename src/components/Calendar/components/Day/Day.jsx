import React from "react"
import PropTypes from 'prop-types';

const Day = ({id, sunday, jobs, absence}) => {

    const formatDayBox = () => {
        const style = absence 
            ? (absence.absence === "Co" && absence.confirmed)
                ? { backgroundColor: "green" , color: "white"}
                : (absence.absence === "Co" && !absence.confirmed)
                    ? { backgroundColor: "lightgreen" , color: "green"}
                    : (absence.absence === "Ma") 
                        ? { backgroundColor: "green" , color: "white"}
                        : {}
            : {};
        const clsName = sunday 
            ? "table-secondary"
            : absence.absence ==="Mi" 
                ? "table-warning" 
                : absence.absence 
                    ? "table-success"
                    : "";
        return [style, clsName];
    }

    const ShowAbsenceCode = () => (
        (absence.absence !== "Co" ) && <span className = "absence">
        <sup><small>{absence.absence}</small></sup>
        </span>);

    const ShowJobsCodes = () => (
        <div className = "job">
            <span className = "badge bg-primary">{jobs && jobs.am.join(" ")}</span><br />
            <span className = "badge bg-info">{jobs && jobs.pm.join(" ")}</span>
        </div>)

    const [style, clsName] = formatDayBox();

    return (
        <td style={style} className={clsName}>
            <ShowAbsenceCode />
            <ShowJobsCodes />
        </td>
    )
}

Day.prototype = {
    id: PropTypes.any,
    sunday: PropTypes.bool,
    jobs: PropTypes.array,
    absence: PropTypes.object
}

export default Day