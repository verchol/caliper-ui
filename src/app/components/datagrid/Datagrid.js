import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import isEqual from 'lodash/isEqual';
import DatagridTemplate from './DatagridTemplate';
import {fetchAllResultsPending, fetchAllResults} from '../../state/actions/resultsActions';
import {updateParams} from '../../state/actions/paramsActions';
import {selectReport} from '../../state/actions/reportActions';

class Datagrid extends React.Component {
    constructor (props, context) {
        super(props, context);

        rowMetadata: {
            const self = this;
            bodyCssClassName: (rowData) => {
                return rowData.requirementId === self.props.report.requirementId ? 'standard-row selected' : 'standard-row';
            }
        }
    }

    changeSort (sort, sortAscending) {
        this.props.fetchAllResultsPending();
        // use config value for key
        let updatedParams = {};
        updatedParams[APP_CONFIG.params.sort] = sort;
        updatedParams[APP_CONFIG.params.order] = sortAscending ? 'ASC' : 'DESC';
        updatedParams[APP_CONFIG.params.page] = 1;
        // update params state
        this.props.updateParams(updatedParams);
        // update grid
        // TODO get updated params from above dispatch call somehow instead
        updatedParams = Object.assign({}, params, updatedParams);
        this.props.fetchAllResults(updatedParams);
    }

    onRowClick (gridRow, event, report) {
        if (isEqual(report, gridRow.props.data)) {
            // deselect report
            this.props.selectReport({});
        } else {
            // deselect old report if necessary
            let oldRow = document.getElementsByClassName('selected');
            if (oldRow.length > 0) {
                oldRow[0].classList.remove('selected');
            }
            event.target.parentElement.classList.add('selected');
            // select new report
            this.props.selectReport(gridRow.props.data);
        }
    }

    render () {
        return DatagridTemplate(this.props);
    }
}

Datagrid.propTypes = {
    results: PropTypes.object,
    params: PropTypes.object,
    report: PropTypes.object,
    rowMetadata: PropTypes.object
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        results: state.results,
        params: state.params,
        report: state.report
    };
};

export default connect(mapStateToProps, {
    updateParams,
    fetchAllResultsPending,
    fetchAllResults,
    selectReport
})(Datagrid);
