import React from 'react';
import Datagrid from './datagrid/Datagrid';

const HomePage = () => {
    return (
        <div className="page">

            <h1>Caliper Home Page</h1>
            <p>
                Caliper is an error metric tracking application
                developed for NGA Research.
            </p>

            <Datagrid/>

        </div>
    );
};

export default HomePage;
