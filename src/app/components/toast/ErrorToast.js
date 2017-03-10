import React from 'react';

const ErrorToast = (props) => {
    return (
        <div className="toast-content">
            <h3>{props.title}</h3>
            {props.error}
        </div>
    );
};

export default ErrorToast;
