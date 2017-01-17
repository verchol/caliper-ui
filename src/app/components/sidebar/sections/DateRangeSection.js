import React from 'react';
import moment from 'moment';

import { DATE_FORMAT, TIME_FORMAT } from '../form/AisDateTimePicker';
import DateRangeSectionTemplate from './DateRangeSectionTemplate';

const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;


class DateRangeSection extends React.Component {

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

    handleStartChange = function(newDate, newTime) {
        console.log(`Updating start to ${newDate} ${newTime}`);
    }

    handleEndChange = function(newValue) {
        console.log('Updating end to: ' + newValue);
    }

    render() {
        return DateRangeSectionTemplate({
            error: this.state.error,
            defaultStartTime: this.defaultStartTime.toDate(),
            defaultEndTime: this.defaultEndTime.toDate(),
            onStartChange: this.handleStartChange,
            onEndChange: this.handleEndChange
        });
    }
}

export default DateRangeSection;
