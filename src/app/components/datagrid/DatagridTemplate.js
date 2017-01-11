import React from 'react';
import Griddle from 'griddle-react';

const DatagridTemplate = (props) => {
    return (
        <Griddle results={props.results} showFilter={props.showFilter} showSettings={props.showSettings}/>
    );
};

export default DatagridTemplate;
