import React, {PropTypes} from 'react';
import _ from 'lodash';

import AisCheckbox from '../form/AisCheckbox';


class ErrorCriteriaSection extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        let changeObj = {};
        let column = evt.target.id;
        changeObj[column] = evt.target.checked === true ? evt.target.checked : null;
        this.props.onChange(changeObj);
    }

    render() {

        let criteria = _.filter(APP_CONFIG.columnMetadata, { columnType: 'criteria' });
        let changeHandler = this.handleChange;

        return (
            <section>
                <h2>Error Criteria</h2>
                <fieldset>
                {
                    criteria.map(function(criterion){
                        return (
                            <AisCheckbox key={criterion.columnName}
                                name={criterion.columnName}
                                label={criterion.displayName}
                                onChange={changeHandler} />
                        );
                    })
                }
                </fieldset>
            </section>
        );
    }
}

ErrorCriteriaSection.propTypes = {
    onChange: PropTypes.func
};

export default ErrorCriteriaSection;
