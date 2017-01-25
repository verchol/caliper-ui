import React from 'react';

import CaliperChart from './chart/CaliperChart';
import Datagrid from './datagrid/Datagrid';
import DatagridPager from './datagrid/DatagridPager';


const HomePage = () => {
    return (
        <div className="homepage">
            <div className="homepage__datagrid">
                <Datagrid/>
            </div>
            <div className="homepage__datagrid-pager">
                <DatagridPager/>
            </div>
            <div className="homepage__charts">
                <CaliperChart type="line" />
                <CaliperChart type="hist" />
            </div>
        </div>
    );
};

export default HomePage;
