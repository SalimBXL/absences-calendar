import React from "react";
import PropTypes from 'prop-types';

const Options = ({showTasks, handleTasks, showJobs, handleJobs, showAbsences, handleAbsences, showAllUsers, handleAllUsers}) => {

    return (
    <div className="container-sm p-3 my-2">
        <form className="row form-inline">

            <div className="col">
                <div className="row">
                    <div className="col form-check form-switch" id="jobs" 
                        data-bs-toggle="tooltip" title="Show/Hide jobs">
                        <input id="jobsCheck" type="checkbox" checked={showJobs} 
                                className="form-check-input" onChange={handleJobs} />
                        <label className="form-check-label" >Jobs</label>
                    </div>

                    <div className="col form-check form-switch" id="absences" 
                        data-bs-toggle="tooltip" title="Show/Hide absences">
                        <input id="absencesCheck" type="checkbox" checked={showAbsences} 
                                className="form-check-input" onChange={handleAbsences} />
                        <label className="form-check-label" >Absences</label>
                    </div>
                </div>
            </div>
            
            <div className="col">
                <div className="row">

                    <div className="col form-check form-switch" id="tasks"
                        data-bs-toggle="tooltip" title="Show/Hide tasks">
                        <input id="tasksRadio" type="checkbox" 
                            className="form-check-input" checked={showTasks ? true : false}
                            onChange={handleTasks} />
                        <label className="custom-control-label" >Tasks</label>
                    </div>

                    <div className="col form-check form-switch" id="allusers"
                        data-bs-toggle="tooltip" title="Show all users or planned users only">
                        <input id="allUsersRadio" type="checkbox" 
                            className="form-check-input" checked={showAllUsers ? true : false}
                            onChange={handleAllUsers} />
                        <label className="custom-control-label" >Show all users</label>
                    </div>
                </div>
            </div>
        </form>
    </div>
)}

Options.prototype = {
    showTasks: PropTypes.bool.isRequired,
    handleTasks: PropTypes.func.isRequired,
    showJobs: PropTypes.bool.isRequired,
    handleJobs: PropTypes.func.isRequired,
    showAbsences: PropTypes.bool.isRequired,
    handleAbsences: PropTypes.func.isRequired,
    showAllUsers: PropTypes.bool.isRequired,
    handleAllUsers: PropTypes.func.isRequired
}

export default Options