import React from 'react';

import AisDateTimePicker from '../form/AisDateTimePicker';


const CaliperFormTemplate = (props) => {
    return (
        <div className="caliper-form">

            <section>
                <h2>Date Range</h2>

                <AisDateTimePicker label="Start Time" default={props.defaultStartTime} />

                <AisDateTimePicker label="End Time" default={props.defaultEndTime} />

                <fieldset>
                    <div className="caliper-form__btnrow">
                        <button className="aisbtn aisbtn__small">Last Two Days</button>
                        <button className="aisbtn aisbtn__small">Last Week</button>
                        <button className="aisbtn aisbtn__small">Last Month</button>
                    </div>
                </fieldset>
            </section>


        </div>
    );
};

export default CaliperFormTemplate;
