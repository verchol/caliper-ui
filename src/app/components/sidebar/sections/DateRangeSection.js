import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import { DATE_FORMAT, TIME_FORMAT } from '../form/AisDateTimePicker';
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
        const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;

        let start = this.props.params.start_date || moment.utc().startOf('day').format(DATE_TIME_FORMAT);
        let end = this.props.params.end_date || moment.utc().add(1, 'd').startOf('day').format(DATE_TIME_FORMAT);
        return (
            <section>
                <h2>Date Range</h2>
                <AisDateRangePicker start={start} end={end} onChange={this.handleRangeChange} />
            </section>
        );
    }
}

DateRangeSection.propTypes = {
    onChange: PropTypes.func,
    params: PropTypes.object
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        params: state.params
    };
};

export default connect(mapStateToProps, {
    // actions here
})(DateRangeSection);
