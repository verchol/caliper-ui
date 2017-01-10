import React from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';


const DateTimePickerTemplate = (props) => {
    return (
        <fieldset>
            <div className="ais-dtpicker">
                <div className="ais-dtpicker__label">
                    <label>{props.label}</label>
                </div>
                <div className="ais-dtpicker__date">
                    <DateTimePicker time={false} format={'MM-DD-YYYY'} />
                </div>
                <div className="ais-dtpicker__time">
                    <DateTimePicker calendar={false} timeFormat={'HH:mm [Z]'} format={'HH:mm [Z]'} />
                </div>
            </div>
        </fieldset>
    );
};

export default DateTimePickerTemplate;
