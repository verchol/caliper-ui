import React from 'react';

import AisDateTimePicker from '../form/AisDateTimePicker';
import AisTextInput from '../form/AisTextInput';


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

            <section>
                <h2>Filters</h2>
                <fieldset>
                    <AisTextInput name="reqid" showLabel={false} label="Requirement ID" />
                    <AisTextInput name="reqid" showLabel={false} label="Product ID" />
                    <AisTextInput name="reqid" showLabel={false} label="Task Name" />
                </fieldset>
            </section>

            <section>
                <h2>Error Criteria</h2>

            </section>

        </div>
    );
};

export default CaliperFormTemplate;
