import React from 'react';
import Datagrid from './datagrid/Datagrid';

const fakeData = [{
    'id': 0,
    'name': 'Mayer Leonard',
    'city': 'Kapowsin',
    'state': 'Hawaii',
    'country': 'United Kingdom',
    'company': 'Ovolo',
    'favoriteNumber': 7
},{
    'id': 1,
    'name': 'Mayer Sheldon',
    'city': 'Pasadena',
    'state': 'California',
    'country': 'United States',
    'company': 'Initech',
    'favoriteNumber': 11
}];

const HomePage = () => {
    return (
        <div className="page">

            <h1>Caliper Home Page</h1>
            <p>
                Caliper is an error metric tracking application
                developed for NGA Research.
            </p>

            <Datagrid results={fakeData} showFilter={true} showSettings={true}/>

        </div>
    );
};

export default HomePage;
