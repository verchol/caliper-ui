import React from 'react';

import AisDateRangePicker from '../form/AisDateRangePicker';

class DateRangeSection extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    handleRangeChange(startDate, endDate) {
        console.log(`DateRangeSection Range Change: ${startDate} - ${endDate}`);
    }

    render() {
        return (
            <section>
                <h2>Date Range</h2>
                <AisDateRangePicker onChange={this.handleRangeChange} />
            </section>
        );
    }
}

export default DateRangeSection;
