import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

import AisCheckbox from '../form/AisCheckbox';


class ErrorCriteriaSection extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(name, checked) {
        let changeObj = {};
        changeObj[name] = checked === true ? checked : null;
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
                    criteria.map((criterion) => {
                        let checked = this.props.params[criterion.columnName] || false;
                        return (
                            <AisCheckbox key={criterion.columnName}
                                name={criterion.columnName}
                                label={criterion.displayName}
                                onChange={changeHandler}
                                checked={checked} />
                        );
                    })
                }
                </fieldset>
            </section>
        );
    }
}

ErrorCriteriaSection.propTypes = {
    params: PropTypes.object,
    onChange: PropTypes.func
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        params: state.params
    };
};

export default connect(mapStateToProps, {
    // actions here
})(ErrorCriteriaSection);
