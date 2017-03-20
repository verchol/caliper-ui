import React, {PropTypes} from 'react';
import {connect} from 'react-redux';

import d3 from 'd3';
import _ from 'lodash';
import moment from 'moment';

class CaliperRadialChart extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.initRadialChart = this.initRadialChart.bind(this);
        this.renderRadialChart = this.renderRadialChart.bind(this);
    }

    componentDidMount() {
        if (this.props.resultsAggregateByHour.results && this.props.resultsAggregateByHour.results.length > 0) {
            this.renderRadialChart();

            this.props.glContainer.on('resize', () => {
                this.renderRadialChart();
            });
        }
    }

    componentDidUpdate() {
        if (this.props.resultsAggregateByHour.results && this.props.resultsAggregateByHour.results.length > 0) {
            this.renderRadialChart();

            this.props.glContainer.on('resize', () => {
                this.renderRadialChart();
            });
        }
    }

    initRadialChart() {
        // Configurable letiables
        let margin = {top: 30, right: 20, bottom: 20, left: 20};
        let barHeight = 100;
        let reverseLayerOrder = false;
        let capitalizeLabels = false;
        let domain = [0, 100];
        let tickValues;
        let colorLabels = false;
        let tickCircleValues = [];
        let transitionDuration = 1000;

        // Scales & other useful things
        let numBars = null;
        let barScale = null;
        let keys = [];
        let labelRadius = 0;
        let axis = d3.svg.axis();

        function init(d) {
            barScale = d3.scale.linear().domain(domain).range([0, barHeight]);

            if (Array.isArray(d[0].data)) {
                for (let i = 0; i < d[0].data.length; ++i) {
                    keys.push(d[0].data[i].hour);
                }
            } else {
                keys = d3.map(d[0].data).keys();
            }
            numBars = keys.length;

            // Radius of the key labels
            labelRadius = barHeight * 1.025;
        }

        function svgRotate(a) {
            return 'rotate('+ (+a) +')';
        }

        function svgTranslate(x, y) {
            return 'translate('+ (+x) +','+ (+y) +')';
        }

        function initChart(container) {
            let g = d3.select(container)
                .append('svg')
                .style('width', 2 * barHeight + margin.left + margin.right + 'px')
                .style('height', 2 * barHeight + margin.top + margin.bottom + 'px')
                .append('g')
                .classed('radial-barchart', true)
                .attr('transform', svgTranslate(margin.left + barHeight, margin.top + barHeight));

            // Concentric circles at specified tick values
            g.append('g')
                .classed('tick-circles', true)
                .selectAll('circle')
                .data(tickCircleValues)
                .enter()
                .append('circle')
                .attr('r', function (d) {return barScale(d);})
                .style('fill', 'none');
        }

        function renderOverlays(container) {
            let g = d3.select(container).select('svg g.radial-barchart');

            // Spokes
            g.append('g')
                .classed('spokes', true)
                .selectAll('line')
                .data(keys)
                .enter()
                .append('line')
                .attr('y2', -barHeight)
                .attr('transform', function (d, i) {return svgRotate(i * 360 / numBars);});

            // Axis
            let axisScale = d3.scale.linear().domain(domain).range([0, -barHeight]);
            axis.scale(axisScale).orient('right');
            if (tickValues) {
                axis.tickValues(tickValues);
            }
            g.append('g')
                .classed('axis', true)
                .call(axis);

            // Outer circle
            g.append('circle')
                .attr('r', barHeight)
                .classed('outer', true)
                .style('fill', 'none');

            // Labels
            let labels = g.append('g')
                .classed('labels', true);

            labels.append('def')
                .append('path')
                .attr('id', 'label-path')
                .attr('d', 'm0 ' + -labelRadius + ' a' + labelRadius + ' ' + labelRadius + ' 0 1,1 -0.01 0');

            labels.selectAll('text')
                .data(keys)
                .enter()
                .append('text')
                .style('text-anchor', 'middle')
                .style('fill', function (d) {return d.color;})
                .append('textPath')
                .attr('xlink:href', '#label-path')
                .attr('startOffset', function (d, i) {return i * 100 / numBars + 50 / numBars + '%';})
                .text(function (d) {return capitalizeLabels ? d.toUpperCase() : d;});
        }

        /* Arc functions */
        let or = function (d) {
            return barScale(d.value);
        };
        let sa = function (d, i) {
            return (i * 2 * Math.PI) / numBars;
        };
        let ea = function (d, i) {
            return ((i + 1) * 2 * Math.PI) / numBars;
        };

        function chart(selection) {
            selection.each(function (d) {
                init(d);

                if (reverseLayerOrder) {
                    d.reverse();
                }

                let g = d3.select(this).select('svg g.radial-barchart');

                // check whether chart has already been created
                let update = g[0][0] !== null; // true if data is being updated

                if (!update) {
                    initChart(this);
                }

                g = d3.select(this).select('svg g.radial-barchart');

                // Layer enter/exit/update
                let layers = g.selectAll('g.layer')
                    .data(d);

                layers
                    .enter()
                    .append('g')
                    .attr('class', function (d, i) {
                        return 'layer-' + i;
                    })
                    .classed('layer', true);

                layers.exit().remove();

                // Segment enter/exit/update
                let segments = layers
                    .selectAll('path')
                    .data(function (d) {
                        return d.data;
                    });

                segments
                    .enter()
                    .append('path')
                    .style('fill', function (d) {
                        return d.color;
                    });

                segments.exit().remove();

                segments
                    .transition()
                    .duration(transitionDuration)
                    .attr('d', d3.svg.arc().innerRadius(0).outerRadius(or).startAngle(sa).endAngle(ea))
                    .style('fill', function (d) {
                        return d.color;
                    });

                if (!update) {
                    renderOverlays(this);
                } else {
                    let axisScale = d3.scale.linear().domain(domain).range([0, -barHeight]);
                    axis.scale(axisScale)
                        .orient('right');
                    if (tickValues) {
                        axis.tickValues(tickValues);
                    }

                    // let g = d3.select(this).select('svg g.radial-barchart');

                    // Radius of the key labels
                    labelRadius = barHeight * 1.025;

                    d3.select(this).select('svg')
                        .transition()
                        .duration(transitionDuration)
                        .style('width', 2 * barHeight + margin.left + margin.right + 'px')
                        .style('height', 2 * barHeight + margin.top + margin.bottom + 'px');

                    d3.select('.radial')
                        .transition()
                        .duration(transitionDuration)
                        .style('width', 2 * barHeight + margin.left + margin.right + 'px')
                        .style('height', 2 * barHeight + margin.top + margin.bottom + 'px');

                    d3.select('.radial-barchart')
                        .transition()
                        .duration(transitionDuration)
                        .attr('transform', svgTranslate(margin.left + barHeight, margin.top + barHeight));

                    d3.select('.radial .axis')
                        .transition()
                        .duration(transitionDuration)
                        .call(axis);

                    d3.select('.outer')
                        .transition()
                        .duration(transitionDuration)
                        .attr('r', barHeight);

                    d3.select('.radial .spokes')
                        .transition()
                        .duration(transitionDuration)
                        .selectAll('line')
                        .attr('y2', -barHeight);

                    d3.select('#label-path')
                        .transition()
                        .duration(transitionDuration)
                        .attr('d', 'm0 ' + -labelRadius + ' a' + labelRadius + ' ' + labelRadius + ' 0 1,1 -0.01 0');
                }
            });

        }

        /* Configuration getters/setters */
        chart.margin = function (_) {
            if (!arguments.length) { return margin; }
            margin = _;
            return chart;
        };

        chart.barHeight = function (_) {
            if (!arguments.length) { return barHeight; }
            barHeight = _;
            return chart;
        };

        chart.reverseLayerOrder = function (_) {
            if (!arguments.length) { return reverseLayerOrder; }
            reverseLayerOrder = _;
            return chart;
        };

        chart.capitalizeLabels = function (_) {
            if (!arguments.length) { return capitalizeLabels; }
            capitalizeLabels = _;
            return chart;
        };

        chart.domain = function (_) {
            if (!arguments.length) { return domain; }
            domain = _;
            return chart;
        };

        chart.tickValues = function (_) {
            if (!arguments.length) { return tickValues; }
            tickValues = _;
            return chart;
        };

        chart.colorLabels = function (_) {
            if (!arguments.length) { return colorLabels; }
            colorLabels = _;
            return chart;
        };

        chart.tickCircleValues = function (_) {
            if (!arguments.length) { return tickCircleValues; }
            tickCircleValues = _;
            return chart;
        };

        chart.transitionDuration = function (_) {
            if (!arguments.length) { return transitionDuration; }
            transitionDuration = _;
            return chart;
        };

        return chart;
    }

    renderRadialChart() {
        // format data to work with radialBarChart
        let chartDataValues = [],
            chartData = [{
                data: []
            }];

        let criteriaFields = _.map(_.filter(APP_CONFIG.columnMetadata, {columnType: 'criteria'}), 'columnName');

        let keys = _.filter(_.keys(this.props.resultsAggregateByHour.results[0]), (key) => {
            return _.indexOf(criteriaFields, key) > -1;
        });

        if (keys.length === 0) {
            keys = ['total'];
        }

        let findResult = (hour) => {
            return _.find(this.props.resultsAggregateByHour.results, { hour: hour });
        };

        for (let hour = 0; hour < 24; hour++) {
            let result = findResult(hour);
            _.forEach(_.keys(result), function (key) {
                if (_.indexOf(keys, key) > -1) {
                    let column = _.find(APP_CONFIG.columnMetadata, { columnName: key });
                    chartDataValues.push(result ? result[key] : 0);
                    chartData[0].data.push({
                        hour: moment.utc(hour, 'h').format('HH:mm'),
                        value: result ? result[key] : 0,
                        key: key,
                        color: column ? column.color : APP_CONFIG.defaultColor
                    });
                }
            });
        }

        // array of values for determining domain and average number of collects
        //let chartTicks = Math.floor(d3.mean(chartDataValues) / 3);
        let chartTicks = Math.floor(d3.max(chartDataValues) / 3);

        // instantiate radialBarChart
        let chart = this.initRadialChart(keys);
        chart.barHeight((this.props.glContainer.width / 2) - 20)
            .reverseLayerOrder(true)
            .capitalizeLabels(true)
            .domain([0, d3.max(chartDataValues)])
            .tickValues([chartTicks, chartTicks * 2, chartTicks * 3])
            .tickCircleValues(chartDataValues);

        d3.select('.radial')
            .datum(chartData)
            .call(chart);
    }

    render() {
        return (
            <div className="caliper-radial-chart">
                <div className="radial"/>
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
