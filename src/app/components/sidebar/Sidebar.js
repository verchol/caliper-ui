import React, {PropTypes} from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {debounce} from 'throttle-debounce';

import DateRangeSection from './sections/DateRangeSection';
import ErrorCriteriaSection from './sections/ErrorCriteriaSection';
import FilterSection from './sections/FilterSection';
import ShareSection from './sections/ShareSection';

import {fetchAllResults} from '../../state/actions/resultsActions';
import {fetchResultsAggregate} from '../../state/actions/resultsAggregateActions';
import {fetchResultsAggregateByHour} from '../../state/actions/resultsAggregateByHourActions';
import {updateParams} from '../../state/actions/paramsActions';


class Sidebar extends React.Component {
    constructor(props, context) {
        super(props, context);

        const DBTIME = 1.25 * 1000; // in ms

        this.handleChange = this.handleChange.bind(this);
        this.fetchResults = debounce(DBTIME, this.fetchResults);
    }

    fetchResults(params) {
        console.log('Fetching results...');
        // update datagrid
        this.props.fetchAllResults(params);
        // update line chart
        this.props.fetchResultsAggregate(params);
        // update radial chart
        this.props.fetchResultsAggregateByHour(params);
    }

    handleChange(changes) {
        // store current params
        let params = this.props.params;

        // revert back to page 1 for changes
        changes._page = 1;

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

        this.fetchResults(updatedParams);
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

                <div className="sidebar__share">
                    <ShareSection/>
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
    fetchResultsAggregate,
    fetchResultsAggregateByHour,
    updateParams
})(Sidebar);
