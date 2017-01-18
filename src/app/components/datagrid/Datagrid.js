import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import DatagridTemplate from './DatagridTemplate';
import * as resultsActions from '../../state/actions/resultsActions';
import * as paramsActions from '../../state/actions/paramsActions';

class Datagrid extends React.Component {
    constructor (props, context) {
        super(props, context);
    }

    render () {
        return DatagridTemplate(this.props);
    }
}

Datagrid.propTypes = {
    results: PropTypes.object,
    params: PropTypes.object,
    setPage: PropTypes.func,
    sortData: PropTypes.func,
    changeSort: PropTypes.func,
    setFilter: PropTypes.func,
    setPageSize: PropTypes.func
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
            // use config value for key
            let updatedParams = {};
            updatedParams[APP_CONFIG.params.page] = index + 1;
            // update params state
            dispatch(paramsActions.updateParams(updatedParams));
            // update grid
            // TODO get updated params from above dispatch call somehow instead
            updatedParams = Object.assign({}, params, updatedParams);
            dispatch(resultsActions.fetchAllResults(updatedParams));
        },
        changeSort: (sort, sortAscending, params) => {
            dispatch(resultsActions.fetchAllResultsPending());
            // use config value for key
            let updatedParams = {};
            updatedParams[APP_CONFIG.params.sort] = sort;
            updatedParams[APP_CONFIG.params.order] = sortAscending ? 'ASC' : 'DESC';
            updatedParams[APP_CONFIG.params.page] = 1;
            // update params state
            dispatch(paramsActions.updateParams(updatedParams));
            // update grid
            // TODO get updated params from above dispatch call somehow instead
            updatedParams = Object.assign({}, params, updatedParams);
            dispatch(resultsActions.fetchAllResults(updatedParams));
        },
        setFilter: (filter) => {
            console.log(filter);
        },
        setPageSize: (size) => {
            console.log(size);
        }
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return Object.assign({}, ownProps, {
        results: stateProps.results,
        params: stateProps.params,
        setPage: (index) => dispatchProps.setPage(index, stateProps.params),
        changeSort: (sort, sortAscending) => dispatchProps.changeSort(sort, sortAscending, stateProps.params),
        setFilter: (filter) => dispatchProps.setFilter(filter, stateProps.params),
        setPageSize: (size) => dispatchProps.setPageSize(size, stateProps.params)
    });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Datagrid);
