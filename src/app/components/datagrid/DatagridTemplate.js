import React from 'react';
import Griddle from 'griddle-react';
import Spinner from '../Spinner';

const DatagridTemplate = (props, setPage, changeSort, setFilter, setPageSize) => {
    if (props.results.reports) {
        return (
            <Griddle results={props.results.reports}
                     showFilter={false}
                     showSettings={false}
                     useExternal={true}
                     useGriddleStyles={false}
                     externalMaxPage={props.results.headers.pages}
                     externalCurrentPage={props.results.headers.page}
                     externalSetPage={setPage}
                     externalChangeSort={changeSort}
                     externalSetFilter={setFilter}
                     externalSetPageSize={setPageSize}/>
        );
    }
    return (
        <div className="spinner-container">
            <Spinner/>
        </div>
    );
};

export default DatagridTemplate;
