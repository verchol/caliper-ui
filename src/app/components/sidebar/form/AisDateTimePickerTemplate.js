import React from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';
import {DATE_FORMAT, TIME_FORMAT} from './AisDateTimePicker';


const AisDateTimePickerTemplate = (context) => {
    return (
        <fieldset>
            <div className="ais-dtpicker">
                <div className="ais-dtpicker__label">
                    <label>{context.label}</label>
                </div>
                { context.error && <div className="aisform__error">{context.error}</div> }
                <div className="ais-dtpicker__inputs">
                    <div className="ais-dtpicker__date">
                        <DateTimePicker
                            time={false}
                            format={DATE_FORMAT}
                            onChange={context.onDateChange}
                            value={context.defaultValue}
                            defaultValue={context.defaultValue} />
                    </div>
                    <div className="ais-dtpicker__time">
                        <DateTimePicker
                            calendar={false}
                            timeFormat={TIME_FORMAT}
                            format={TIME_FORMAT}
                            onChange={context.onTimeChange}
                            value={context.defaultValue}
                            defaultValue={context.defaultValue} />
                    </div>
                </div>
            </div>
        </fieldset>
    );
};

export default AisDateTimePickerTemplate;
