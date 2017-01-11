import React, {PropTypes} from 'react';
import DatagridTemplate from './DatagridTemplate';


const Datagrid = (props) => {
    return DatagridTemplate(props);
};

Datagrid.propTypes = {
    results: PropTypes.object,
    showFilter: PropTypes.boolean,
    showSettings: PropTypes.boolean
};

export default Datagrid;
