import React from "react";
import PropTypes from 'prop-types';
import Table from "./components/Table/Table";

const Calendar = ({monthToShow, eventsInMonth}) => (

    <>

    <div id="FilterableTable">

        <div className="d-flex justify-content-between mb-3">

            <div className="p-2">

                <span className="badge rounded-pill bg-secondary">{monthToShow.indexMonth}</span>

            </div>

            <div className="p-2 department"><h4><kbd>department</kbd></h4></div>

        </div>

        {/* <OptionsContainer /> */}

        <Table eventsInMonth={eventsInMonth} monthToShow={monthToShow}/>
    </div>
    </>
);

Calendar.prototype = {
    monthToShow: PropTypes.object.isRequired,
    eventsInMonth: PropTypes.array.isRequired,
}


export default Calendar;