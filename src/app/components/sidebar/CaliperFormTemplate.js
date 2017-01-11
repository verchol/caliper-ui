import React from 'react';
import AisDateTimePicker from '../form/AisDateTimePicker';


const CaliperFormTemplate = (props) => {
    return (
        <div className="caliper-form">

            <AisDateTimePicker label="Start Time" default={props.defaultStartTime} />

            <AisDateTimePicker label="End Time" default={props.defaultEndTime} />

        </div>
    );
};

export default CaliperFormTemplate;
