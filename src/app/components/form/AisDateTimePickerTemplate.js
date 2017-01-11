import React from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';


const AisDateTimePickerTemplate = (props) => {
    return (
        <fieldset>
            <div className="ais-dtpicker">
                <div className="ais-dtpicker__label">
                    <label>{props.label}</label>
                </div>
                <div className="ais-dtpicker__date">
                    <DateTimePicker time={false} format={'MM-DD-YYYY'} defaultValue={props.default} />
                </div>
                <div className="ais-dtpicker__time">
                    <DateTimePicker calendar={false} timeFormat={'HH:mm [Z]'} format={'HH:mm [Z]'} defaultValue={props.default} />
                </div>
            </div>
        </fieldset>
    );
};

export default AisDateTimePickerTemplate;
