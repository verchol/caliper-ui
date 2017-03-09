import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import _ from 'lodash';

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
            changes[`${basename}_comparator`] = comparator.comparator;
        }
        this.props.onChange(changes);
    }

    render () {
        let txtfilters = _.filter(APP_CONFIG.columnMetadata, { columnType: 'txtfilter' });
        let textHandler = this.handleTextChange;

        let comparators = _.filter(APP_CONFIG.columnMetadata, { columnType: 'comparator' });
        let comparatorHandler = this.handleComparatorChange;

        let params = this.props.params;

        return (
            <section>
                <h2>Filters</h2>
                <fieldset>
                    {
                        txtfilters.map(function(filter) {
                            let value = params[filter.columnName] || '';

                            return (
                                <AisTextInput key={filter.columnName}
                                    id={filter.columnName}
                                    name={filter.columnName}
                                    label={filter.displayName}
                                    onChange={textHandler}
                                    value={value} />
                            );
                        })
                    }
                </fieldset>
                <fieldset>
                    {
                        comparators.map(function(comparator) {
                            let comparatorType = params[`${comparator.columnName}_comparator`] || 'equal to';
                            let comparatorSuffix = comparatorType === 'greater than' ? '_gt' : comparatorType === 'less than' ? '_lt' : '';
                            let value = params[comparator.columnName + comparatorSuffix] || 0;
                            let enabled = typeof params[comparator.columnName + comparatorSuffix] !== 'undefined';

                            return (
                                <AisComparator key={comparator.columnName}
                                    id={comparator.columnName}
                                    name={comparator.columnName}
                                    label={comparator.displayName}
                                    comparator={comparatorType}
                                    defaultValue={value}
                                    enabled={enabled}
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
})(FilterSection);
