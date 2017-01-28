import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import DataApi from '../../api/dataApi';
import LineChart from './LineChart';
import Spinner from '../Spinner';


class CaliperChart extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            data: null
        };

        this.loadData = this.loadData.bind(this);
    }

    loadData(reportId, chartType) {
        let caliperChart = this;
        if (chartType === 'hist') {
            DataApi.getHist(reportId).then(function(data) {
                caliperChart.setState({
                    data: data
                });
            });
        }
        else {
            DataApi.getLine(reportId).then(function(data) {
                caliperChart.setState({
                    data: data
                });
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.report && nextProps.report.pk) {
            this.setState({
                data: null
            }, function() {
                this.loadData(nextProps.report.pk);
            })
        }
    }

    render() {
        // See if we even have a report
        if (!this.props.report|| !this.props.report.pk) {
            return (
                <div className="caliper-chart">
                    <p>Please select a report.</p>
                </div>
            );
        }

        // See if we have data loaded
        if (!this.state.data) {
            return (
                <Spinner />
            );
        }

        // We have data for a report, render the chart
        return (
            <div className="caliper-chart">
                <LineChart data={this.state.data} />
            </div>
        );
    }

}

CaliperChart.propTypes = {
    chartType: PropTypes.string
};

const mapStateToProps = (state) => { //optional arg is ownProps
    return {
        report: state.report
    };
};

export { mapStateToProps };
export default connect(mapStateToProps, {
    // actions here
})(CaliperChart);
