import React, {PropTypes} from 'react';
import AisDateTimePickerTemplate from './AisDateTimePickerTemplate';

import moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';

// Required by react-widgets: https://jquense.github.io/react-widgets/docs/#/datetime-picker
momentLocalizer(moment);

export const DATE_FORMAT = 'MM-DD-YYYY';
export const TIME_FORMAT = 'HH:mm[Z]';

class AisDateTimePicker extends React.Component {

    constructor(props) {
        super(props);

        let dateStr = moment(props.defaultValue).format(DATE_FORMAT);
        let timeStr = moment(props.defaultValue).format(TIME_FORMAT);

        this.state = {
            error: null,
            date: dateStr,
            time: timeStr
        };
        console.log('AisDateTimePicker State: ' + JSON.stringify(this.state));

        this.handleDateChange = this.handleDateChange.bind(this);
        this.handleTimeChange = this.handleTimeChange.bind(this);
    }

    handleDateChange(dateObj, dateValue) {
        this.setState({
            error: null
        });

        if (!dateValue) {
            this.setState({
                error: 'Please enter a date.'
            });
        }
        else {
            this.setState({
                date: dateValue
            }, function() {
                console.log('AisDateTimePicker State: ' + JSON.stringify(this.state));
                if (this.state.date && this.state.time) {
                    this.props.onChange(this.state.date, this.state.time);
                }
            });
        }
    }

    handleTimeChange(dateObj, timeValue) {
        this.setState({
            error: null
        });

        if (!timeValue) {
            this.setState({
                error: 'Please enter a time.'
            });
        }
        else {
            this.setState({
                time: timeValue
            }, function() {
                console.log('AisDateTimePicker State: ' + JSON.stringify(this.state));
                if (this.state.date && this.state.time) {
                    this.props.onChange(this.state.date, this.state.time);
                }
            });
        }
    }

    render() {
        return AisDateTimePickerTemplate({
            label: this.props.label,
            defaultValue: this.props.defaultValue,
            error: this.state.error,
            onDateChange: this.handleDateChange,
            onTimeChange: this.handleTimeChange
        });
    }
}

AisDateTimePicker.propTypes = {
    label: PropTypes.string,
    defaultValue: PropTypes.instanceOf(Date),
    onChange: PropTypes.func
};

export default AisDateTimePicker;
