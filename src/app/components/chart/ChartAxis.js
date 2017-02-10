import React, { PropTypes } from 'react';
import Faux from 'react-faux-dom';
// D3 Components
import { axisBottom, axisLeft } from 'd3-axis';
import { select, event } from 'd3-selection';
import { utcFormat } from 'd3-time-format';
import { zoom } from 'd3-zoom';


class ChartAxis extends React.Component {

    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const context = this.props.context;

        if (typeof context === 'undefined') {
            return null;
        }

        let zoomChart = zoom()
            .scaleExtent([1, 40])
            .translateExtent([[0, 0], [context.size.width, context.size.height]])
            .on('zoom', zoomed);

        // Create clip mask to constrain chart when zoomed
        let svg = select('svg.chart');

        svg.append('defs')
            .append('clipPath')
            .attr('id', 'chart__mask')
            .style('pointer-events', 'none')
            .append('rect')
            .attrs({
                x: 0,
                y: 0,
                width: context.size.width - (context.margin.left + context.margin.right),
                height: context.size.height - (context.margin.top + context.margin.bottom)
            });

        let layerAxis = select(Faux.createElement('g'));
        layerAxis.attr('class', 'chart__axis');
        let layerAxisX = layerAxis.append('g').attr('class', 'chart__xAxis');
        let layerAxisY = layerAxis.append('g').attr('class', 'chart__yAxis');

        // X Axis
        const axisX = axisBottom(context.scales.x);
        axisX.tickFormat(utcFormat('%Y-%m-%d %H00'));
        if (!this.props.showTicks) {
            axisX.tickValues(context.scales.x.domain());
        }

        layerAxisX.call(axisX);
        layerAxisX.attr('transform', 'translate(' + context.margin.left + ', ' + (context.size.height - context.margin.bottom) + ')');

        // Y Axis
        const axisY = axisLeft(context.scales.y);
        if (!this.props.showTicks) {
            axisY.tickValues(context.scales.y.domain());
        }

        layerAxisY.call(axisY);
        layerAxisY.attr('transform', 'translate(' + context.margin.left + ', ' + context.margin.top + ')');

        svg.call(zoomChart);

        function zoomed() {
            console.log('zoom');
            svg.selectAll('rect.bar').attr('transform', event.transform);
            svg.select('g.chart__xAxis')
                .call(axisX.scale(event.transform.rescaleX(context.scales.x)));
            svg.select('g.chart__yAxis')
                .call(axisY.scale(event.transform.rescaleY(context.scales.y)));
        }

        return layerAxis.node().toReact();
    }
}

ChartAxis.propTypes = {
    context: PropTypes.object.isRequired,
    showTicks: PropTypes.bool
};

ChartAxis.defaultProps = {
    showTicks: true
};

export default ChartAxis;
