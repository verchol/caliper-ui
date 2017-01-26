import React from 'react';
import Griddle from 'griddle-react';
import Spinner from '../Spinner';

const DatagridTemplate = (props) => {
    return (
        <Griddle results={props.results.reports || []}
                 columns={APP_CONFIG.columns}
                 columnMetadata={APP_CONFIG.columnMetadata}
                 showFilter={false}
                 showSettings={false}
                 showPager={false}
                 onRowClick={props.onRowClick}
                 useGriddleStyles={false}
                 rowMetadata={props.rowMetadata}
                 key={props.report.requirementId}
                 useExternal={true}
                 externalIsLoading={props.results.pending || false}
                 externalLoadingComponent={Spinner}
                 externalSortColumn={props.params[APP_CONFIG.params.sort]}
                 externalSortAscending={props.params[APP_CONFIG.params.order] === 'ASC'}
                 externalMaxPage={props.results.headers ? props.results.headers.pages : 1}
                 externalCurrentPage={props.results.headers ? props.results.headers.page : 1}
                 externalSetPage={props.setPage}
                 externalChangeSort={props.changeSort}
                 externalSetFilter={props.setFilter}
                 externalSetPageSize={props.setPageSize}/>
    );
};

export default DatagridTemplate;
