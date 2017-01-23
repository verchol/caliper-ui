import React from 'react';
import Datagrid from './datagrid/Datagrid';
import DatagridPager from './datagrid/DatagridPager';
import LineChart from './chart/LineChart';

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
                <div className="line">
                </div>
                <div className="histogram">
                </div>
            </div>
        </div>
    );
};

export default HomePage;
