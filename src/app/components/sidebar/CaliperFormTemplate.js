import React from 'react';

import DateRangeSection from './sections/DateRangeSection';
import ErrorCriteriaSection from './sections/ErrorCriteriaSection';
import FilterSection from './sections/FilterSection';


const CaliperFormTemplate = () => {
    return (
        <div className="caliper-form">
            <DateRangeSection />
            <FilterSection />
            <ErrorCriteriaSection />
        </div>
    );
};

export default CaliperFormTemplate;
