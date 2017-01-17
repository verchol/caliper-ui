import React, {PropTypes} from 'react';
import AisDateTimePickerTemplate from './AisDateTimePickerTemplate';

import moment from 'moment';
import momentLocalizer from 'react-widgets/lib/localizers/moment';

// Required by react-widgets: https://jquense.github.io/react-widgets/docs/#/datetime-picker
momentLocalizer(moment);

class AisDateTimePicker extends React.Component {

    constructor(props) {
        super(props);

        let date = moment(props.defaultValue).format('MM-DD-YYYY');
        let time = moment(props.defaultValue).format('HH:mm[Z]');

        this.state = {
            error: null,
            date: date,
            time: time
        };

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
