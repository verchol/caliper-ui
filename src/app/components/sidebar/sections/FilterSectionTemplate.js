import React from 'react';

import AisComparator from '../form/AisComparator';
import AisTextInput from '../form/AisTextInput';


const FilterSectionTemplate = (props) => {
    return (
        <section>
            <h2>Filters</h2>
            <fieldset>
                <AisTextInput name="reqid" showLabel={false} label="Requirement ID" />
                <AisTextInput name="reqid" showLabel={false} label="Product ID" />
                <AisTextInput name="reqid" showLabel={false} label="Task Name" />
            </fieldset>
            <fieldset>
                <AisComparator name="numFrames" label="Frame Count" />
                <AisComparator name="numBiscuits" label="Biscuit Count" />
            </fieldset>
        </section>
    );
};

export default FilterSectionTemplate;
