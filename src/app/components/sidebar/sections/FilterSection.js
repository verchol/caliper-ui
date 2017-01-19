import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import AisComparator from '../form/AisComparator';
import AisTextInput from '../form/AisTextInput';

import * as resultsActions from '../../../state/actions/resultsActions';
import * as paramsActions from '../../../state/actions/paramsActions';


class FilterSection extends React.Component {

    constructor (props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(evt) {
        console.log(`FilterSection filter ${evt.target.name} has changed!`);
    }

    render () {
        let txtfilters = APP_CONFIG.form.txtfilters;
        let changeHandler = this.handleChange;
        return (
            <section>
                <h2>Filters</h2>
                <fieldset>
                    {
                        txtfilters.map(function(filter){
                            return (
                                <AisTextInput key={filter.name}
                                    id={filter.name}
                                    name={filter.name}
                                    label={filter.label}
                                    onChange={changeHandler} />
                            )
                        })
                    }
                </fieldset>
                <fieldset>
                    <AisComparator name="numFrames" label="Frame Count" />
                    <AisComparator name="numBiscuits" label="Biscuit Count" />
                </fieldset>
            </section>
        );
    }
}

FilterSection.propTypes = {
    params: PropTypes.object,
    filter: PropTypes.func
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        params: state.params
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        filter: (type, event, params) => {
            // use config value for key
            let updatedParams = {};
            updatedParams[APP_CONFIG.params[type]] = event.target.value;
            updatedParams[APP_CONFIG.params.page] = 1;
            // update params state
            dispatch(paramsActions.updateParams(updatedParams));
            // update grid
            // TODO get updated params from above dispatch call somehow instead
            updatedParams = Object.assign({}, params, updatedParams);
            dispatch(resultsActions.fetchAllResults(updatedParams));
        }
    };
};

const mergeProps = (stateProps, dispatchProps, ownProps) => {
    return Object.assign({}, ownProps, {
        filter: (type, event) => dispatchProps.filter(type, event, stateProps.params)
    });
};

export default connect(mapStateToProps, mapDispatchToProps, mergeProps)(FilterSection);
