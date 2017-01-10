import React, { PropTypes } from 'react';

import Sidebar from './components/sidebar';


const App = (props) => {
    return (
        <div className="application">
            <Sidebar />
            <section className="content">
                {props.children}
            </section>
        </div>
    );
};

App.propTypes = {
    children: PropTypes.element
};

export default App;
