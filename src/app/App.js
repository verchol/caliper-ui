import React, { PropTypes } from 'react';

const App = (props) => {
    return (
        <div className="application">
            <section>
                {props.children}
            </section>
        </div>
    );
};

App.propTypes = {
    children: PropTypes.element
};

export default App;
