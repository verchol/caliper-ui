import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';

import DateRangeSection from './sections/DateRangeSection';
import ErrorCriteriaSection from './sections/ErrorCriteriaSection';
import FilterSection from './sections/FilterSection';

import {fetchAllResults} from '../../state/actions/resultsActions';
import {updateParams} from '../../state/actions/paramsActions';


class Sidebar extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(changes) {
        // store current params
        let params = this.props.params;

        // revert back to page 1 for changes
        changes[APP_CONFIG.params.page] = 1;

        // update params on state
        this.props.updateParams(changes);

        // format params for fetchAllResults call
        let updatedParams = Object.assign({}, params, changes);

        // remove any params with values of null
        for (let key in updatedParams) {
            if (updatedParams[key] === null ||
                updatedParams[key] === undefined ||
                updatedParams[key] === '') {
                delete updatedParams[key];
            }
        }
        // update datagrid
        this.props.fetchAllResults(updatedParams);
    }

    render() {
        return (
            <div className="sidebar">
                <div className="sidebar__logo">
                    <Link to="/"><img src="/images/caliper.svg" alt="Caliper"/></Link>
                </div>

                <div className="caliper-form">
                    <DateRangeSection onChange={this.handleChange} />
                    <FilterSection onChange={this.handleChange} />
                    <ErrorCriteriaSection onChange={this.handleChange} />
                </div>
            </div>
        );
    }

}

Sidebar.propTypes = {
    params: PropTypes.object
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        params: state.params
    };
};

export default connect(mapStateToProps, {
    fetchAllResults,
    updateParams
})(Sidebar);
