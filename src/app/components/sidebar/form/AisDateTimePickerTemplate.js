import React from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';


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
                            format={'MM-DD-YYYY'}
                            onChange={context.onDateChange}
                            defaultValue={context.defaultValue} />
                    </div>
                    <div className="ais-dtpicker__time">
                        <DateTimePicker
                            calendar={false}
                            timeFormat={'HH:mm[Z]'}
                            format={'HH:mm[Z]'}
                            onChange={context.onTimeChange}
                            defaultValue={context.defaultValue} />
                    </div>
                </div>
            </div>
        </fieldset>
    );
};

export default AisDateTimePickerTemplate;
