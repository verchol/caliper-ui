import React from 'react';
import Griddle from 'griddle-react';
import Spinner from '../Spinner';

const DatagridTemplate = (props, changeSort, setFilter, setPageSize) => {
    if (props.results.headers && props.results.reports) {
        return (
            <Griddle results={props.results.reports}
                     showFilter={false}
                     showSettings={false}
                     useExternal={true}
                     useGriddleStyles={false}
                     externalMaxPage={props.results.headers.pages}
                     externalCurrentPage={props.results.headers.page}
                     externalSetPage={props.setPage}
                     externalChangeSort={props.changeSort}
                     externalSetFilter={props.setFilter}
                     externalSetPageSize={props.setPageSize}/>
        );
    }
    return (
        <div className="spinner-container">
            <Spinner/>
        </div>
    );
};

export default DatagridTemplate;
