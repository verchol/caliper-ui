import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import RadialChart from './RadialChart';
import Spinner from '../Spinner';


class CaliperRadialChart extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    render() {
        if (this.props.resultsByHour.pending) {
            return (
                <Spinner/>
            )
        }
        return (
            <div className="caliper-chart">
                <RadialChart data={this.props.resultsByHour.results} />
            </div>
        );
    }
}

CaliperRadialChart.propTypes = {
    resultsByHour: PropTypes.object
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        resultsByHour: state.resultsByHour
    };
};

export default connect(mapStateToProps, {
    // actions here
})(CaliperRadialChart);
