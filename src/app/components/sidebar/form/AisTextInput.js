import React, {PropTypes} from 'react';


const AisTextInput = ({name, label, showLabel, error, onChange, value}) => {

    return (
        <div className="aisform__text">
            { showLabel && <label htmlFor={name}>{label}</label> }
            <input type="text"
                name={name}
                placeholder={label}
                onChange={onChange}
                value={value}
                />
            { error && <div className="error">{error}</div> }
        </div>
    );
};

AisTextInput.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    showLabel: PropTypes.bool,
    error: PropTypes.string,
    onChange: PropTypes.func,
    value: PropTypes.string
};

export default AisTextInput;
