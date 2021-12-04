import React from "react";
import PropTypes from 'prop-types';

const Navbar = ({handleDay, handleWeek, handleMonth}) => {
    return (
        
        <div className="container p-1">
            <div className="d-flex justify-content-between mb-3">

                <div className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-primary"
                            onClick={handleDay}>Day</button>
                    <button type="button" className="btn btn-primary"
                            onClick={handleWeek}>Week</button>
                    <button type="button" className="btn btn-primary"
                            onClick={handleMonth}>Month</button>
                </div>
                
                <div className="btn-group btn-group-sm">
                    <button type="button" className="btn btn-success">L</button>
                    <button type="button" className="btn btn-success">*</button>
                    <button type="button" className="btn btn-success">R</button>
                </div>
            </div>
        </div>
    );
}

Navbar.prototype = {
    handleDay: PropTypes.func.isRequired,
    handleWeek: PropTypes.func.isRequired,
    handleMonth: PropTypes.func.isRequired
}


export default Navbar;