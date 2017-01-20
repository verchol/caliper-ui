import React from 'react';
import DropdownList from 'react-widgets/lib/DropdownList';

const DatagridPagerTemplate = (props) => {
    return (
        <div className="datagrid__pager">
            <button className="aisbtn aisbtn__small" onClick={() => props.setPage(props.params[APP_CONFIG.params.page] - 1)} disabled={props.params[APP_CONFIG.params.page] === 1}>Previous</button>
            <DropdownList className="dropdownList__pages" value={props.params[APP_CONFIG.params.page]} data={props.pages} onChange={props.setPage.bind(this)} />
            <button className="aisbtn aisbtn__small" onClick={() => props.setPage(props.params[APP_CONFIG.params.page] + 1)} disabled={props.results.headers ? props.params[APP_CONFIG.params.page] === props.results.headers.pages : true}>Next</button>
        </div>
    );
};

export default DatagridPagerTemplate;
