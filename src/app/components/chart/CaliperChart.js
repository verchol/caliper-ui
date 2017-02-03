import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import LineChart from './LineChart';
import Spinner from '../Spinner';


class CaliperChart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.type = '';
    }

    render() {
        if (this.props.resultsByDay.pending) {
            return (
                <Spinner/>
            );
        }
        return (
            <div className="caliper-chart">
                <LineChart data={this.props.resultsByDay.results} />
            </div>
        );
    }
}

CaliperChart.propTypes = {
    resultsByDay: PropTypes.object
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        resultsByDay: state.resultsByDay
    };
};

export default connect(mapStateToProps, {
    // actions here
})(CaliperChart);
