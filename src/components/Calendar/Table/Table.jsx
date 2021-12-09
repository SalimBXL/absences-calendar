import React from "react"
import PropTypes from 'prop-types';
import Week from "../../Grid/Week/Week"


const Table = ({monthToShow, eventsInMonth}) => {

    /*
    const formatUsersList = () => {
        const _users = [];
        if (allUsers && allUsers.length > 0) _users.push(...allUsers);
        jobs.map(({user}) => (!_users.includes(user)) && _users.push(user))
        tasks.map(({user}) => (!_users.includes(user)) && _users.push(user))
        absences.map(({user}) => (!_users.includes(user)) && _users.push(user))
        return _users;
    }
    const users = formatUsersList();
    */
    
    
    const buildTable = () => {
        const rows = []
        
        const nWeeks = monthToShow.numberOfWeeksInTheMonth;
        for (let i = 1; i <= nWeeks; i++) {
            /*
            const jbs = jobs.filter((j) => j.user.id === user.id)
            const tsks = tasks.filter((t) => t.user.id === user.id)
            const abs = absences.filter((a) => a.user.id === user.id)            
            */
            const key = "calendar_week_" + i
            rows.push(
                <Week key={key} week={i} eventsInMonth={eventsInMonth} />
            )
        }
        
        return rows;
    }
    
    return (
        <div className="table-responsive">
            <table className="table  table-bordered">
                <thead>
                    <tr className="table-light">
                        <th>Weeks</th>
                        <th>Monday</th>
                        <th>Tuesday</th>
                        <th>Wednesday</th>
                        <th>Thursday</th>
                        <th>Friday</th>
                        <th>WE</th>
                    </tr>
                </thead>
                <tbody>{buildTable()}</tbody>
            </table>
        </div>
    )
}

Table.prototype = {
    monthToShow: PropTypes.object.isRequired, 
    eventsInMonth: PropTypes.array.isRequired
}

export default Table