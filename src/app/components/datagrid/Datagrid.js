import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import isEqual from 'lodash/isEqual';
import DatagridTemplate from './DatagridTemplate';
import * as resultsActions from '../../state/actions/resultsActions';
import * as paramsActions from '../../state/actions/paramsActions';
import * as reportActions from '../../state/actions/reportActions';

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
    report: PropTypes.object,
    setPage: PropTypes.func,
    sortData: PropTypes.func,
    changeSort: PropTypes.func,
    setFilter: PropTypes.func,
    setPageSize: PropTypes.func,
    onRowClick: PropTypes.func,
    rowMetadata: PropTypes.object
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        results: state.results,
        params: state.params,
        report: state.report
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
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
        },
        onRowClick: (gridRow, event, report) => {
            if (isEqual(report, gridRow.props.data)) {
                // deselect report
                dispatch(reportActions.selectReport({}));
            } else {
                // deselect old report if necessary
                let oldRow = document.getElementsByClassName('selected');
                if (oldRow.length > 0) {
                    oldRow[0].classList.remove('selected');
                }
                event.target.parentElement.classList.add('selected');
                // select new report
                dispatch(reportActions.selectReport(gridRow.props.data));
            }
        }
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return Object.assign({}, ownProps, {
        results: stateProps.results,
        params: stateProps.params,
        report: stateProps.report,
        setPage: (index) => {
            // just a stub function to suppress a griddle warning
        },
        changeSort: (sort, sortAscending) => dispatchProps.changeSort(sort, sortAscending, stateProps.params),
        setFilter: (filter) => dispatchProps.setFilter(filter, stateProps.params),
        setPageSize: (size) => dispatchProps.setPageSize(size, stateProps.params),
        onRowClick: (gridRow, event) => dispatchProps.onRowClick(gridRow, event, stateProps.report),
        rowMetadata: {
            bodyCssClassName: (rowData) => {
                return rowData.requirementId === stateProps.report.requirementId ? 'standard-row selected' : 'standard-row';
            }
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Datagrid);
