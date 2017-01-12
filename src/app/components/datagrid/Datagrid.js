import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import DatagridTemplate from './DatagridTemplate';

class Datagrid extends React.Component {
    constructor (props, context) {
        super(props, context);
    }

    //what page is currently viewed
    setPage (index) {
        console.log('setPage');
    }
    // //this will handle how the data is sorted
    // sortData (sort, sortAscending, data) {
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
    //this changes whether data is sorted in ascending or descending order
    changeSort (sort, sortAscending) {
        console.log('changeSort');
        // this.setState(this.sortData(sort, sortAscending, this.state.pretendServerData));
    }
    //this method handles the filtering of the data
    setFilter (filter) {
        console.log('setFilter');
    }
    //this method handles determining the page size
    setPageSize (size) {
        console.log('setPageSize');
    }

    render () {
        return DatagridTemplate(this.props, this.setPage, this.changeSort, this.setFilter, this.setPageSize);
    }
}


Datagrid.propTypes = {
    reports: PropTypes.array
};

function mapStateToProps(state) { //optional arg is ownProps
    return {reports: state.reports};
}

export default connect(mapStateToProps)(Datagrid);
