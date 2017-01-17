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
            dispatch(paramsActions.updateParams({ _page: index + 1}));
            //TODO get updated params from above dispatch call somehow instead
            let updatedParams = Object.assign({}, params, {
                _page: index + 1
            });
            dispatch(resultsActions.fetchAllResults(updatedParams));
        },
        sortData: (sort, sortAscending, data) => {
            console.log(sort + ', ' + sortAscending + ', ' + data);
            //     //sorting should generally happen wherever the data is coming from
            //     sortedData = _.sortBy(data, function(item){
            //         return item[sort];
            //     });
            //
            //     if(sortAscending === false){
            //         sortedData.reverse();
            //     }
            //     return {
            //         "currentPage": 0,
            //         "externalSortColumn": sort,
            //         "externalSortAscending": sortAscending,
            //         "pretendServerData": sortedData,
            //         "results": sortedData.slice(0,this.state.externalResultsPerPage)
            //     };
            // }
        },
        changeSort: (sort, sortAscending) => {
            console.log(sort + ', ' + sortAscending);
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
