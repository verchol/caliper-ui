import React from 'react';
import moment from 'moment';
import DateRangeSectionTemplate from './DateRangeSectionTemplate';


class DateRangeSection extends React.Component {

    constructor(props) {
        super(props);

        this.defaultStartTime = moment().startOf('day').toDate();
        this.defaultEndTime = moment().endOf('day').toDate();

        this.state = {
            error: null,
            startDateTime: null,
            endDateTime: null
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
            defaultStartTime: this.defaultStartTime,
            defaultEndTime: this.defaultEndTime,
            onStartChange: this.handleStartChange,
            onEndChange: this.handleEndChange
        });
    }
}
export default DateRangeSection;
