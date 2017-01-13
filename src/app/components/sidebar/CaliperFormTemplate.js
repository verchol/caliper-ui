import React from 'react';

import AisCheckbox from '../form/AisCheckbox';
import AisComparator from '../form/AisComparator';
import AisDateTimePicker from '../form/AisDateTimePicker';
import AisTextInput from '../form/AisTextInput';


const CaliperFormTemplate = (props) => {
    return (
        <div className="caliper-form">

            <section>
                <h2>Date Range</h2>

                <AisDateTimePicker label="Start Time" default={props.defaultStartTime} />

                <AisDateTimePicker label="End Time" default={props.defaultEndTime} />

                <fieldset>
                    <div className="caliper-form__btnrow">
                        <button className="aisbtn aisbtn__small">Last Two Days</button>
                        <button className="aisbtn aisbtn__small">Last Week</button>
                        <button className="aisbtn aisbtn__small">Last Month</button>
                    </div>
                </fieldset>
            </section>

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

            <section>
                <h2>Error Criteria</h2>
                <fieldset>
                    <AisCheckbox name="a" label="Is Aaaa" />
                    <AisCheckbox name="b" label="Is Bbbb" />
                    <AisCheckbox name="c" label="Is Cc" />
                    <AisCheckbox name="d" label="Is Ddd" />
                    <AisCheckbox name="e" label="Is Eeeee" />
                    <AisCheckbox name="f" label="Is Ffff" />
                    <AisCheckbox name="g" label="Is Ggggg ggg" />
                    <AisCheckbox name="h" label="Is Hhh hhhh hhh" />
                    <AisCheckbox name="i" label="Is Iiii" />
                </fieldset>
            </section>

        </div>
    );
};

export default CaliperFormTemplate;
