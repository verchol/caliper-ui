import React, {PropTypes} from 'react';

class AisCheckbox extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            checked: props.checked
        };

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange() {
        this.setState({
            checked: !this.props.checked
        }, function() {
            this.props.onChange(this.props.name, !this.props.checked);
        });
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
