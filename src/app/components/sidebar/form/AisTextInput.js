import React, {PropTypes} from 'react';


const AisTextInput = ({name, label, showLabel, error}) => {

    return (
        <div className="aisform__text">
            { showLabel && <label htmlFor={name}>{label}</label> }
            <input type="text"
                name={name}
                placeholder={label}
                />
            { error && <div className="error">{error}</div> }
        </div>
    );
};

AisTextInput.propTypes = {
    name: PropTypes.string,
//    label: PropTypes.string,
//    onChange: PropTypes.func,
    placeholder: PropTypes.string,
//    value: PropTypes.string,
//    error: PropTypes.string
};

export default AisTextInput;
