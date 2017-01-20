import React, {PropTypes} from 'react';


const AisNumberInput = ({name, defaultValue, error, onChange}) => {

    return (
        <div className="aisform__text">
            <input type="numeric"
                name={name}
                value={defaultValue}
                onChange={onChange}
                />
            { error && <div className="error">{error}</div> }
        </div>
    );
};

AisNumberInput.propTypes = {
    name: PropTypes.string,
    defaultValue: PropTypes.number,
    error: PropTypes.string,
    onChange: PropTypes.func
};

export default AisNumberInput;
