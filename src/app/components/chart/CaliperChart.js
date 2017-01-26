import React, {PropTypes} from 'react';
import {connect} from 'react-redux';


class CaliperChart extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            data: null
        };
    }


    render() {
        console.log('Rendering report: ' + JSON.stringify(this.props.report));
        if (!this.props.report|| !this.props.report.pk) {
            return (
                <div className="caliper-chart">
                    <p>Please select a report.</p>
                </div>
            );
        }

        return (
            <div className="caliper-chart">
                <p>Chart for report {this.props.report.pk}</p>
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

export default connect(mapStateToProps, {
    // actions here
})(CaliperChart);
