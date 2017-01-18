import React from 'react';
import Griddle from 'griddle-react';
import Spinner from '../Spinner';

const DatagridTemplate = (props) => {
    return (
        <Griddle results={props.results.reports || []}
                 showFilter={false}
                 showSettings={false}
                 useExternal={true}
                 useGriddleStyles={false}
                 externalSortColumn={props.params[APP_CONFIG.params.sort]}
                 externalSortAscending={props.params[APP_CONFIG.params.order] === 'ASC'}
                 externalMaxPage={props.results.headers ? props.results.headers.pages : 1}
                 externalCurrentPage={props.results.headers ? props.results.headers.page : 1}
                 externalSetPage={props.setPage}
                 externalChangeSort={props.changeSort}
                 externalSetFilter={props.setFilter}
                 externalSetPageSize={props.setPageSize}/>
    );

    // return (
    //     <div className="spinner-container">
    //         <Spinner/>
    //     </div>
    // );
};

export default DatagridTemplate;
