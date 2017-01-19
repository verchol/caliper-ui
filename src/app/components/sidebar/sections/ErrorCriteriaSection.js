import React from 'react';

import AisCheckbox from '../form/AisCheckbox';


class ErrorCriteriaSection extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        let name = evt.target.name;
        let value = evt.target.checked;
        console.log(`Error Criteria setting ${name} to ${value}`);
    }

    render() {

        let criteria = APP_CONFIG.form.criteria;
        let changeHandler = this.handleChange;

        return (
            <section>
                <h2>Error Criteria</h2>
                <fieldset>
                {
                    criteria.map(function(criterion){
                        return (
                            <AisCheckbox key={criterion.name}
                                name={criterion.name}
                                label={criterion.label}
                                onChange={changeHandler} />
                        )
                    })
                }
                </fieldset>
            </section>
        );
    }
}

export default ErrorCriteriaSection;
