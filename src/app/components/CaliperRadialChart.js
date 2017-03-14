import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import _ from 'lodash';

class CaliperRadialChart extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.chart = null;
        this.initChart = this.initChart.bind(this);
    }

    componentDidMount() {
        if (this.props.resultsAggregateByHour.results) {
            this.initChart();
        }
    }

    componentDidUpdate() {
        if (this.props.resultsAggregateByHour.results) {
            this.initChart();
        }
    }

    initChart() {
        if (this.props.resultsAggregateByHour.results.length > 0) {
            console.log('init radial');
        }
    }

    render() {
        return (
            <div className="radial-chart">
                <h2>Radial Chart</h2>
                <div id="radial"/>
            </div>
        );
    }
}

CaliperRadialChart.propTypes = {
    resultsAggregateByHour: PropTypes.object
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        resultsAggregateByHour: state.resultsAggregateByHour
    };
};

export default connect(mapStateToProps, {
    // actions here
})(CaliperRadialChart);
