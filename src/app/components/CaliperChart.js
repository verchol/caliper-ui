import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import c3 from 'c3';
import _ from 'lodash';

class CaliperChart extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.chart = null;
        this.criteriaFields = _.map(_.filter(APP_CONFIG.columnMetadata, {columnType: 'criteria'}), 'columnName');
        this.initChart = this.initChart.bind(this);
    }

    componentDidMount() {
        if (this.props.resultsAggregate.results) {
            this.initChart();
        }
    }

    componentDidUpdate() {
        if (this.props.resultsAggregate.results) {
            this.initChart();

            this.props.glContainer.on('resize', () => {
                if (this.chart) {
                    this.chart.resize({
                        height: this.props.glContainer.height - 10,
                        width: this.props.glContainer.width
                    });
                }
            });
        }
    }

    initChart() {
        let keys = _.filter(_.keys(this.props.resultsAggregate.results[0]), (key) => {
            return _.indexOf(this.criteriaFields, key) > -1;
        });

        let names = {};
        _.forEach(keys, (key) => {
            names[key] = _.find(APP_CONFIG.columnMetadata, { columnName: key }).displayName;
        });

        // if no keys are found, then show total
        if (keys.length === 0) {
            keys = ['total'];
            names.total = 'Total';
        }

        if (this.chart) {
            this.chart = this.chart.destroy();
        }

        this.chart = c3.generate({
            data: {
                json: this.props.resultsAggregate.results,
                keys: {
                    x: 'date',
                    value: keys
                },
                xFormat: '%Y-%m-%dT%H:%M:%LZ',
                type: 'bar',
                groups: [keys],
                names: names,
                empty: {
                    label: {
                        text: 'There is no data to display.'
                    }
                }
            },
            axis: {
                x: {
                    type: 'timeseries',
                    format: '%Y-%m-%dT%H:%M:%LZ',
                    localtime: false,
                    tick: {
                        format: '%Y-%m-%d %H:%MZ'
                    }
                },
                y: {
                    label: {
                        text: 'Errors'
                    }
                }
            },
            size: {
                height: this.props.glContainer.height - 10,
                width: this.props.glContainer.width
            },
            padding: {
                top: 10,
                left: 40,
                right: 20
            },
            color: {
                pattern: APP_CONFIG.chartcolors
            }
        });
    }

    render() {
        return (
            <div className="caliper-chart">
                <div id="chart"/>
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
