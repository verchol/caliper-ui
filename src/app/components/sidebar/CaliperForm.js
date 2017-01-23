import React from 'react';

import DateRangeSection from './sections/DateRangeSection';
import ErrorCriteriaSection from './sections/ErrorCriteriaSection';
import FilterSection from './sections/FilterSection';


class CaliperForm extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(changes) {
        console.log('Updating changes: ' + JSON.stringify(changes));
    }

    render() {
        return (
            <div className="caliper-form">
                <DateRangeSection onChange={this.handleChange} />
                <FilterSection onChange={this.handleChange} />
                <ErrorCriteriaSection onChange={this.handleChange} />
            </div>
        );
    }

};

export default CaliperForm;
