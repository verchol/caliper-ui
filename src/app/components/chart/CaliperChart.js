import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import BarChart from './BarChart';
import Spinner from '../Spinner';


class CaliperChart extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        if (this.props.resultsAggregate.pending) {
            return (
                <Spinner/>
            );
        }
        return (
            <div className="caliper-chart">
                <BarChart data={this.props.resultsAggregate.results} {...this.props} />
            </div>
        );
    }
}

CaliperChart.propTypes = {
    resultsAggregate: PropTypes.object
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        resultsAggregate: state.resultsAggregate
    };
};

export default connect(mapStateToProps, {
    // actions here
})(CaliperChart);
