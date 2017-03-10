import React from 'react';

const ShareToast = (props) => {
    return (
        <div className="toast-content">
            <h3>Application state saved</h3>
            <a href={props.href}>{props.href}</a>
        </div>
    );
};

export default ShareToast;
