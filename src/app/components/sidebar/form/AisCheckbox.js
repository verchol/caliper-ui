import React, {PropTypes} from 'react';

class AisCheckbox extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            checked: this.props.checked
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        const { onChange, name, checked } = this.props;

        this.setState(({ checked }) => (
            {
                checked: !checked,
            }
        ));

        onChange(name, !checked);
    }

    render() {
        const { label, name } = this.props;
        const { checked } = this.state;

        return (
            <div className="aisform__checkbox">
                <input id={name} name={name} type="checkbox" onChange={this.handleChange} checked={checked} />
                <label htmlFor={name}>{ label }</label>
            </div>
        );
    }
}

AisCheckbox.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func,
    checked: PropTypes.bool
};

export default AisCheckbox;
