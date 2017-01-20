import React, {PropTypes} from 'react';
import AisCheckbox from './AisCheckbox';
import AisTextInput from './AisTextInput';
import DropdownList from 'react-widgets/lib/DropdownList';


class AisComparator extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            enabled: false
        };

        this.toggleEnabled = this.toggleEnabled.bind(this);
    }

    toggleEnabled(evt) {
        let value = evt.target.checked;
        this.setState({
            enabled: value
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
                <AisCheckbox name={this.props.name} label={comparatorLabel} onChange={this.toggleEnabled} />
                {
                    <div className={this.state.enabled ? 'aisform__comparator-operators' : 'aisform__comparator-operators aisform__comparator-operators-closed'}>
                        <DropdownList defaultValue={'equal to'} data={comparators} />
                        <AisTextInput name={'val'} label={'Value'} />
                    </div>
                }
            </div>
        );
    }
}

AisComparator.propTypes = {
    name: PropTypes.string,
    label: PropTypes.string,
    onChange: PropTypes.func
};

export default AisComparator;
