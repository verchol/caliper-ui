import React from 'react';
import DateTimePicker from 'react-widgets/lib/DateTimePicker';


const CaliperFormTemplate = () => {
    return (
        <div className="caliper-form">
            <div className="ais-dtpicker">
                <div className="ais-dtpicker__label">
                    <label>Start Time</label>
                </div>
                <div className="ais-dtpicker__date">
                    <DateTimePicker time={false} format={'MM-DD-YYYY'} />
                </div>
                <div className="ais-dtpicker__time">
                    <DateTimePicker calendar={false} timeFormat={'HH:mm [Z]'} format={'HH:mm [Z]'} />
                </div>
            </div>
        </div>
    );
};

export default CaliperFormTemplate;
