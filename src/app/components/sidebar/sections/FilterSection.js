import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

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
        let value = evt.target.value;
        this.props.onChange({
            name: value
        });
    }

    handleComparatorChange(comparator) {
        let name = comparator.name;
        let change = {};

        if (!comparator.enabled) {
            change[name] = null;
        }
        else {
            if (comparator.comparator === 'less than') {
                name += '_lt';
            }
            else if (comparator.comparator === 'greater than') {
                name += '_gt';
            }
            change[name] = comparator.value;
        }

        this.props.onChange(change);
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
