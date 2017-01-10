import React from 'react';
import DateTimePicker from '../form/DateTimePicker';


const CaliperFormTemplate = () => {
    return (
        <div className="caliper-form">

            <DateTimePicker label="Start Time"/>

            <DateTimePicker label="End Time" />

        </div>
    );
};

export default CaliperFormTemplate;
