import React from 'react';

import AisCheckbox from '../form/AisCheckbox';


const ErrorCriteriaSectionTemplate = () => {
    return (
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
    );
};

export default ErrorCriteriaSectionTemplate;
