import React, {PropTypes} from 'react';

import AisDateTimePicker from '../form/AisDateTimePicker';


const AisDateRangePickerTemplate = (props) => {
    return (
        <div>
            { props.error && <div className="aisform__error">{props.error}</div> }
            <AisDateTimePicker
                label="Start Time"
                defaultValue={props.start}
                onChange={props.onStartChange} />

            <AisDateTimePicker
                label="End Time"
                defaultValue={props.end}
                onChange={props.onEndChange}
                />

            <fieldset>
                <div className="caliper-form__btnrow">
                    <button className="aisbtn aisbtn__small" onClick={() => props.setRange(2, 'days')}>Last Two Days</button>
                    <button className="aisbtn aisbtn__small" onClick={() => props.setRange(1, 'week')}>Last Week</button>
                    <button className="aisbtn aisbtn__small" onClick={() => props.setRange(1, 'month')}>Last Month</button>
                </div>
            </fieldset>
        </div>
    );
};

AisDateRangePickerTemplate.propTypes = {
    start: PropTypes.instanceOf(Date),
    end: PropTypes.instanceOf(Date),
    error: PropTypes.string,
    onStartChange: PropTypes.func,
    onEndChange: PropTypes.func,
    setRange: PropTypes.func
};

export default AisDateRangePickerTemplate;
