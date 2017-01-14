import React, {PropTypes} from 'react';


const AisCheckbox = ({name, label}) => {

    return (
        <div className="aisform__checkbox">
            <input id={name} name={name} type="checkbox" />
            <label htmlFor={name}>{ label }</label>
        </div>
    );
};

AisCheckbox.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
//    onChange: PropTypes.func
};

export default AisCheckbox;
