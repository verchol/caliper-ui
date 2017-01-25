import React, {PropTypes} from 'react';
import {connect} from 'react-redux';


class CaliperChart extends React.Component {

    constructor(props, context) {
        super(props, context);

    }


    render() {
        console.log('CaliperChart.render()');

        return (
            <div className="caliper-chart">
                Howdy.
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
