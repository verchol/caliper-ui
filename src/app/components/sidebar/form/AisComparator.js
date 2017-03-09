import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import AisCheckbox from './AisCheckbox';
import AisNumberInput from './AisNumberInput';
import DropdownList from 'react-widgets/lib/DropdownList';


class AisComparator extends React.Component {

    constructor(props) {
        super(props);

        const defaultComparator = 'equal to';

        this.state = {
            name: props.name,
            enabled: typeof props.params[props.name] !== 'undefined' || false,
            comparator: defaultComparator,
            value: props.params[props.name] || props.defaultValue
        };

        this.updateEnabled = this.updateEnabled.bind(this);
        this.updateComparator = this.updateComparator.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }

    updateEnabled(name, checked) {
        this.setState({
            enabled: checked
        }, function() {
            this.props.onChange(this.state);
        });
    }

    updateComparator(comp) {
        this.setState({
            comparator: comp
        }, function() {
            this.props.onChange(this.state);
        });
    }

    updateValue(evt) {
        let value = evt.target.value;
        if (isNaN(value)) {
            value = 0;
        }
        else {
            value = parseInt(value);
        }
        this.setState({
            value: value
        }, function() {
            this.props.onChange(this.state);
        });
    }

    render() {
        const comparators = ['equal to', 'less than', 'greater than'];
        let comparatorLabel = this.props.label;
        if (!this.state.enabled) {
            comparatorLabel += '...';
        }

        return (
            <div className="aisform__comparator">
                <AisCheckbox name={this.props.name} label={comparatorLabel} onChange={this.updateEnabled} checked={this.state.enabled} />
                {
                    <div className={this.state.enabled ? 'aisform__comparator-operators' : 'aisform__comparator-operators aisform__comparator-operators-closed'}>
                        <div className="aisform__comparator-dropdown">
                            <DropdownList defaultValue={this.state.comparator} data={comparators} onChange={this.updateComparator} />
                        </div>
                        <AisNumberInput name={'val'} defaultValue={this.state.value} onChange={this.updateValue} />
                    </div>
                }
            </div>
        );
    }
}

AisComparator.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    defaultValue: PropTypes.number,
    onChange: PropTypes.func,
    params: PropTypes.object
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        params: state.params
    };
};

export default connect(mapStateToProps, {
    // actions here
})(AisComparator);
