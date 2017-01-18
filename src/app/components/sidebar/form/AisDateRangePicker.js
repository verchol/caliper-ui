import React, {PropTypes} from 'react';
import moment from 'moment';

import { DATE_FORMAT, TIME_FORMAT } from '../form/AisDateTimePicker';
import AisDateRangePickerTemplate from './AisDateRangePickerTemplate';

const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;


class AisDateRangePicker extends React.Component {

    constructor(props) {
        super(props);

        this.defaultStartTime = moment().startOf('day');
        this.defaultEndTime = moment().endOf('day');

        this.state = {
            error: null,
            startDateTime: this.defaultStartTime.format(DATE_TIME_FORMAT),
            endDateTime: this.defaultEndTime.format(DATE_TIME_FORMAT)
        };

        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
    }

    handleStartChange(newDate, newTime) {
        console.log(`Updating start to ${newDate} ${newTime}`);
        let newDateTime = `${newDate} ${newTime}`;
        this.handleDateChange(newDateTime, this.state.endDateTime);
    }

    handleEndChange(newDate, newTime) {
        console.log(`Updating end to ${newDate} ${newTime}`);
        let newDateTime = `${newDate} ${newTime}`;
        this.handleDateChange(this.state.startDateTime, newDateTime);
    }

    handleDateChange(startStr, endStr) {
        this.setState({
            error: null
        });

        let start = moment(startStr, DATE_TIME_FORMAT);
        let end = moment(endStr, DATE_TIME_FORMAT);

        if (start.isAfter(end)) {
            this.setState({
                error: 'Start Date should be before End Date'
            });
        }
        else {
            this.setState({
                startDateTime: start.format(DATE_TIME_FORMAT),
                endDateTime: end.format(DATE_TIME_FORMAT)
            }, function() {
                this.props.onChange(this.state.startDateTime, this.state.endDateTime);
                console.log(`New Date Range ${this.state.startDateTime} - ${this.state.endDateTime}`);
            });
        }
    }

    render() {
        return AisDateRangePickerTemplate({
            error: this.state.error,
            defaultStartTime: this.defaultStartTime.toDate(),
            defaultEndTime: this.defaultEndTime.toDate(),
            onStartChange: this.handleStartChange,
            onEndChange: this.handleEndChange
        });
    }
}

AisDateRangePicker.propTypes = {
    onChange: PropTypes.func
};

export default AisDateRangePicker;
