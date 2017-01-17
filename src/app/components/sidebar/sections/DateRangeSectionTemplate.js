import React from 'react';

import AisDateTimePicker from '../form/AisDateTimePicker';


const DateRangeSectionTemplate = (props) => {
    return (
        <section>
            <h2>Date Range</h2>

            <AisDateTimePicker
                label="Start Time"
                defaultValue={props.defaultStartTime}
                onChange={props.onStartChange} />

            <AisDateTimePicker
                label="End Time"
                defaultValue={props.defaultEndTime}
                onChange={props.onEndChange}
                />

            <fieldset>
                <div className="caliper-form__btnrow">
                    <button className="aisbtn aisbtn__small">Last Two Days</button>
                    <button className="aisbtn aisbtn__small">Last Week</button>
                    <button className="aisbtn aisbtn__small">Last Month</button>
                </div>
            </fieldset>
        </section>
    );
};

export default DateRangeSectionTemplate;
