import React from "react"
import PropTypes from 'prop-types';
import Day from "../Day/Day"


const Week = ({week, eventsInMonth}) => {
    const days = [
        { e: "", a: "", t:""}, 
        { e: "", a: "", t:""}, 
        { e: "", a: "", t:""}, 
        { e: "", a: "", t:""}, 
        { e: "", a: "", t:""}, 
        { e: "", a: "", t:""}, 
        { e: "", a: "", t:""}
    ]

    eventsInMonth.forEach((e) => {
        console.log(e);
    });

    /*
    jobs.map((job) => {
        const d = new Date(job.date)
        const numeroJour = d.getDay()
        days[numeroJour].j = job.jobs
        return null;
    })

    absences.map((absence) => {
        const d = new Date(absence.date)
        const numeroJour = d.getDay()
        days[numeroJour].a = {
            absence: absence.absence, 
            confirmed: absence.confirmed
        }
        return null;
    })

    tasks.map((task) => {
        const d = new Date(task.date)
        const numeroJour = d.getDay()
        days[numeroJour].t = {
            code: task.code,
            description: task.description
        }
        return null;
    })
    */
    const ReturnDay = ({index, day}) => (index !== 6)
            ? <Day id={index} sunday={false} 
                    key={"user_id_"+ week +"_day_" + index.toString()} 
                    jobs={day.j} absence={day.a} />
            : <Day id={index} sunday={true} 
                    key={"user_id_"+ week +"day_" + index.toString()} 
                    jobs={day.j} absence={day.a} />

    const task = days[1].t;
    return (
        <tr>
            <td><strong>{week}</strong><br />
                <small><span className = "badge bg-warning text-primary"
                        data-bs-toggle="tooltip" title={task.description}>
                        {task.code}
                </span></small>
            </td>
            {days.map((day, index) => (index !== 0) && <ReturnDay key={week + "-" + index} index={index} day={day} />)}
        </tr>
    )
}

Week.prototype = {
    week: PropTypes.number.isRequired,
    events: PropTypes.array
}

export default Week