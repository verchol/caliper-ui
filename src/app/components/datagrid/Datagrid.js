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
    changeSort: PropTypes.func,
    onRowClick: PropTypes.func,
    rowMetadata: PropTypes.object,
    setPage: PropTypes.func,
    setFilter: PropTypes.func,
    setPageSize: PropTypes.func
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
        rowMetadata: {
            bodyCssClassName: (rowData) => {
                return rowData.requirementId === stateProps.report.requirementId ? 'standard-row selected' : 'standard-row';
            }
        },
        changeSort: (sort, sortAscending) => dispatchProps.changeSort(sort, sortAscending, stateProps.params),
        onRowClick: (gridRow, event) => dispatchProps.onRowClick(gridRow, event, stateProps.report),
        setPage: (index) => {
            // just a stub function to suppress a griddle warning
        },
        setFilter: (filter) => {
            // just a stub to suppress griddle warning
        },
        setPageSize: (size) => {
            // just a stub to suppress griddle warning
        }
    });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(Datagrid);
