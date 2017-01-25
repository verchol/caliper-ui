import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import DateRangeSection from './sections/DateRangeSection';
import ErrorCriteriaSection from './sections/ErrorCriteriaSection';
import FilterSection from './sections/FilterSection';

import {fetchAllResults} from '../../state/actions/resultsActions';
import {updateParams} from '../../state/actions/paramsActions';


class CaliperForm extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(changes) {
        console.log('Updating changes: ' + JSON.stringify(changes));

        let updatedParams = Object.assign({}, this.props.params, changes);
        updatedParams[APP_CONFIG.params.page] = 1;

        console.log('New params: ' + JSON.stringify(updatedParams));

        this.props.updateParams(updatedParams);
        this.props.fetchAllResults(updatedParams);
    }

    render() {
        return (
            <div className="caliper-form">
                <DateRangeSection onChange={this.handleChange} />
                <FilterSection onChange={this.handleChange} />
                <ErrorCriteriaSection onChange={this.handleChange} />
            </div>
        );
    }

}

CaliperForm.propTypes = {
    params: PropTypes.object
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        params: state.params
    };
};

// const mapDispatchToProps = (dispatch) => {
//     return {
//         filter: (params, changes) => {
//             console.log('Params: ' + JSON.stringify(params));
//             console.log('Changes: ' + JSON.stringify(changes));
//             // use config value for key
//             let updatedParams = Object.assign({}, params, changes);
//             updatedParams[APP_CONFIG.params.page] = 1;
//
//             console.log('Dispatching events with params: ' + JSON.stringify(updatedParams));
//
//             // update params state
//             dispatch(paramsActions.updateParams(params));
//
//             // update grid
//             // TODO get updated params from above dispatch call somehow instead
//             //updatedParams = Object.assign({}, params, updatedParams);
//             dispatch(resultsActions.fetchAllResults(params));
//         }
//     };
// };
//
// const mergeProps = (stateProps, dispatchProps, ownProps) => {
//     console.log('CaliperForm.mergeProps');
//     console.log('    stateProps: ' + JSON.stringify(stateProps));
//     console.log('    dispatchProps: ' + JSON.stringify(dispatchProps));
//     console.log('    ownProps: ' + JSON.stringify(ownProps));
//
//     return Object.assign({}, ownProps, {
//         filter: (params, changes) => dispatchProps.filter(stateProps.params, ownProps.params)
//     });
// };

export default connect(mapStateToProps, {
    fetchAllResults,
    updateParams
})(CaliperForm);
