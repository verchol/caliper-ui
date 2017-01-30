import React, {PropTypes} from 'react';

import AisComparator from '../form/AisComparator';
import AisTextInput from '../form/AisTextInput';


class FilterSection extends React.Component {

    constructor (props, context) {
        super(props, context);

        this.handleTextChange = this.handleTextChange.bind(this);
        this.handleComparatorChange = this.handleComparatorChange.bind(this);
    }

    handleTextChange(evt) {
        let name = evt.target.name;
        let change = {};
        change[name] = evt.target.value;
        this.props.onChange(change);
    }

    handleComparatorChange(comparator) {
        let basename = comparator.name;
        let changes = {};

        // Always send values for name, name_lt, and name_gt - initialize all to null
        const names = [basename, `${basename}_lt`, `${basename}_gt`];
        for (let i = 0; i < names.length; i++) {
            changes[names[i]] = null;
        }

        if (comparator.enabled) {
            switch(comparator.comparator) {
                case 'less than':
                    changes[`${basename}_lt`] = comparator.value;
                    break;
                case 'greater than':
                    changes[`${basename}_gt`] = comparator.value;
                    break;
                default:
                    changes[basename] = comparator.value;
            }
        }
        this.props.onChange(changes);
    }

    render () {
        let txtfilters = APP_CONFIG.form.txtfilters;
        let textHandler = this.handleTextChange;

        let comparators = APP_CONFIG.form.comparators;
        let comparatorHandler = this.handleComparatorChange;

        return (
            <section>
                <h2>Filters</h2>
                <fieldset>
                    {
                        txtfilters.map(function(filter) {
                            return (
                                <AisTextInput key={filter.name}
                                    id={filter.name}
                                    name={filter.name}
                                    label={filter.label}
                                    onChange={textHandler} />
                            );
                        })
                    }
                </fieldset>
                <fieldset>
                    {
                        comparators.map(function(comparator) {
                            return (
                                <AisComparator key={comparator.name}
                                    id={comparator.name}
                                    name={comparator.name}
                                    label={comparator.label}
                                    defaultValue={comparator.defaultValue}
                                    onChange={comparatorHandler} />
                            );
                        })
                    }
                </fieldset>
            </section>
        );
    }
}

FilterSection.propTypes = {
    onChange: PropTypes.func
};

export default FilterSection;
