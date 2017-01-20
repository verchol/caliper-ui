import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import DatagridPagerTemplate from './DatagridPagerTemplate';
import * as resultsActions from '../../state/actions/resultsActions';
import * as paramsActions from '../../state/actions/paramsActions';

class DatagridPager extends React.Component {
    constructor (props, context) {
        super(props, context);
    }

    render () {
        return DatagridPagerTemplate(this.props);
    }
}

DatagridPager.propTypes = {
    results: PropTypes.object,
    params: PropTypes.object,
    setPage: PropTypes.func,
    pages: PropTypes.array
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        results: state.results,
        params: state.params
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        setPage: (index, params) => {
            dispatch(resultsActions.fetchAllResultsPending());
            // use config value for key
            let updatedParams = {};
            updatedParams[APP_CONFIG.params.page] = index;
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
        results: stateProps.results,
        params: stateProps.params,
        setPage: (index) => dispatchProps.setPage(index, stateProps.params),
        pages: stateProps.results.headers ? Array.from({length: stateProps.results.headers.pages}, (v, i) => i + 1) : [1]
    });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(DatagridPager);
