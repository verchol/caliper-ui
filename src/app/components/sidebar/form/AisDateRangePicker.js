import React, {PropTypes} from 'react';
import moment from 'moment';

import { DATE_FORMAT, TIME_FORMAT } from '../form/AisDateTimePicker';
import AisDateRangePickerTemplate from './AisDateRangePickerTemplate';

const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;


class AisDateRangePicker extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            error: null,
            startDateTime: moment.utc().startOf('day').format(DATE_TIME_FORMAT),
            endDateTime: moment.utc().add(1, 'd').startOf('day').format(DATE_TIME_FORMAT)
        };

        this.handleStartChange = this.handleStartChange.bind(this);
        this.handleEndChange = this.handleEndChange.bind(this);
        this.setRange = this.setRange.bind(this);
        this.stepRange = this.stepRange.bind(this);
    }

    setRange(amount, units) {
        let e = moment.utc().add(1, 'd').startOf('day');
        let s = moment.utc(e, DATE_TIME_FORMAT);
        s.subtract(amount, units).startOf('day');

        this.setState({
            startDateTime: s.format(DATE_TIME_FORMAT),
            endDateTime: e.format(DATE_TIME_FORMAT)
        }, () => {
            this.props.onChange(this.state.startDateTime, this.state.endDateTime);
        });
    }

    stepRange(direction) {
        let s = moment.utc(this.state.startDateTime, DATE_TIME_FORMAT);
        let e = moment.utc(this.state.endDateTime, DATE_TIME_FORMAT);
        let diff = e.diff(s);

        if (direction === 'forward') {
            s.add(diff);
            e.add(diff);
        } else {
            s.subtract(diff);
            e.subtract(diff);
        }

        this.setState({
            startDateTime: s.format(DATE_TIME_FORMAT),
            endDateTime: e.format(DATE_TIME_FORMAT)
        }, () => {
            this.props.onChange(this.state.startDateTime, this.state.endDateTime);
        });
    }

    handleStartChange(newDate, newTime) {
        let newDateTime = `${newDate} ${newTime}`;
        this.handleDateChange(newDateTime, this.state.endDateTime);
    }

    handleEndChange(newDate, newTime) {
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
            });
        }
    }

    render() {
        let s = moment(this.state.startDateTime, DATE_TIME_FORMAT).toDate();
        let e = moment(this.state.endDateTime, DATE_TIME_FORMAT).toDate();

        return AisDateRangePickerTemplate({
            error: this.state.error,
            start: s,
            end: e,
            onStartChange: this.handleStartChange,
            onEndChange: this.handleEndChange,
            setRange: this.setRange,
            stepRange: this.stepRange
        });
    }
}

AisDateRangePicker.propTypes = {
    onChange: PropTypes.func
};

export default AisDateRangePicker;
