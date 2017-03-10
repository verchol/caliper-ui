import React, { PropTypes } from 'react';
import { ToastContainer } from 'react-toastify';

const App = (props) => {
    return (
        <div className="application">
            <section>
                {props.children}
            </section>
            <ToastContainer autoClose={5000} position="top-right"/>
        </div>
    );
};

App.propTypes = {
    children: PropTypes.element
};

export default App;
