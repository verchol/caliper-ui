import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import FilterSectionTemplate from './FilterSectionTemplate';
import * as resultsActions from '../../../state/actions/resultsActions';
import * as paramsActions from '../../../state/actions/paramsActions';

class FilterSection extends React.Component {
    constructor (props, context) {
        super(props, context);
    }

    render () {
        return FilterSectionTemplate(this.props);
    }
}

FilterSection.propTypes = {
    params: PropTypes.object,
    filter: PropTypes.func
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        params: state.params
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        filter: (type, event, params) => {
            // use config value for key
            let updatedParams = {};
            updatedParams[APP_CONFIG.params[type]] = event.target.value;
            updatedParams[APP_CONFIG.params.page] = 1;
            // update params state
            dispatch(paramsActions.updateParams(updatedParams));
            // update grid
            // TODO get updated params from above dispatch call somehow instead
            updatedParams = Object.assign({}, params, updatedParams);
            dispatch(resultsActions.fetchAllResults(updatedParams));
        }
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return Object.assign({}, ownProps, {
        filter: (type, event) => dispatchProps.filter(type, event, stateProps.params)
    });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(FilterSection);
