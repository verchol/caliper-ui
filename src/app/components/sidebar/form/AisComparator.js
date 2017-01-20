import React, {PropTypes} from 'react';
import AisCheckbox from './AisCheckbox';
import AisNumberInput from './AisNumberInput';
import DropdownList from 'react-widgets/lib/DropdownList';


class AisComparator extends React.Component {

    constructor(props) {
        super(props);

        const defaultComparator = 'equal to';

        this.state = {
            name: props.name,
            enabled: false,
            comparator: defaultComparator,
            value: props.defaultValue
        };

        this.updateEnabled = this.updateEnabled.bind(this);
        this.updateComparator = this.updateComparator.bind(this);
        this.updateValue = this.updateValue.bind(this);
    }

    updateEnabled(evt) {
        let value = evt.target.checked;
        this.setState({
            enabled: value
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
                <AisCheckbox name={this.props.name} label={comparatorLabel} onChange={this.updateEnabled} />
                {
                    <div className={this.state.enabled ? 'aisform__comparator-operators' : 'aisform__comparator-operators aisform__comparator-operators-closed'}>
                        <DropdownList defaultValue={this.state.comparator} data={comparators} onChange={this.updateComparator} />
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
    onChange: PropTypes.func
};

export default AisComparator;
