import React, {PropTypes} from 'react';

import AisDateRangePicker from '../form/AisDateRangePicker';


class DateRangeSection extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleRangeChange = this.handleRangeChange.bind(this);
    }

    handleRangeChange(startDate, endDate) {
        this.props.onChange({
            'start_date': startDate,
            'end_date': endDate
        });
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

DateRangeSection.propTypes = {
    onChange: PropTypes.func
};

export default DateRangeSection;
