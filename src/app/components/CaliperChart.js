import React, {PropTypes} from 'react';
import {connect} from 'react-redux';
import c3 from 'c3';
import _ from 'lodash';

import Spinner from './Spinner';


class CaliperChart extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.initChart = this.initChart.bind(this);
    }

    componentDidUpdate() {
        let chart = this.initChart();

        this.props.glContainer.on('resize', () => {
            if (chart) {
                chart.resize({
                    height: this.props.glContainer.height - 10,
                    width: this.props.glContainer.width
                });
            }
        });
    }

    initChart() {
        if (this.props.resultsAggregate.results) {
            const criteriaFields = _.map(_.filter(APP_CONFIG.columnMetadata, {columnType: 'criteria'}), 'columnName');
            let keys = _.filter(_.keys(this.props.resultsAggregate.results[0]), (key) => {
                return _.indexOf(criteriaFields, key) > -1;
            });

            let names = {};

            _.forEach(keys, (key) => {
                names[key] = _.find(APP_CONFIG.columnMetadata, { columnName: key }).displayName;
            });

            // if no keys are found, then show total
            if (keys.length === 0) {
                keys.push('total');
                names.total = 'Total';
            }

            return c3.generate({
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
                            text: 'Errors',
                            position: 'outer-middle'
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
    }

    render() {
        if (this.props.resultsAggregate.pending) {
            return (
                <Spinner/>
            );
        }

        return (
            <div className="caliper-chart">
                <div id="chart"></div>
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
