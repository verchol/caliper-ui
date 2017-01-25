import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import DateRangeSection from './sections/DateRangeSection';
import ErrorCriteriaSection from './sections/ErrorCriteriaSection';
import FilterSection from './sections/FilterSection';

import {fetchAllResults} from '../../state/actions/resultsActions';
import {updateParams} from '../../state/actions/paramsActions';


class CaliperForm extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(changes) {
        console.log('Updating changes: ' + JSON.stringify(changes));

        let updatedParams = Object.assign({}, this.props.params, changes);
        updatedParams[APP_CONFIG.params.page] = 1;

        // remove any params with values of null
        for (var key in updatedParams) {
            if (updatedParams[key] === null ||
                updatedParams[key] === undefined ||
                updatedParams[key] === '') {
                delete updatedParams[key];
            }
        }

        console.log('New params: ' + JSON.stringify(updatedParams));

        this.props.updateParams(updatedParams);
        this.props.fetchAllResults(updatedParams);
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

}

CaliperForm.propTypes = {
    params: PropTypes.object
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        params: state.params
    };
};

export default connect(mapStateToProps, {
    fetchAllResults,
    updateParams
})(CaliperForm);
