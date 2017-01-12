import React from 'react';
import Griddle from 'griddle-react';

const DatagridTemplate = (props, setPage, changeSort, setFilter, setPageSize) => {
    return (
        <Griddle results={props.reports}
                 showFilter={true}
                 showSettings={true}
                 useExternal={true}
                 externalMaxPage={1}
                 externalCurrentPage={0}
                 externalSetPage={setPage}
                 externalChangeSort={changeSort}
                 externalSetFilter={setFilter}
                 externalSetPageSize={setPageSize}/>
    );
};

export default DatagridTemplate;
