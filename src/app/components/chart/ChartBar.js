import React, { PropTypes } from 'react';
import Faux from 'react-faux-dom';
import moment from 'moment';
import _ from 'lodash';
// D3 Components
import { select, event } from 'd3-selection';
import { stack, stackOrderNone, stackOffsetNone } from 'd3-shape';
import 'd3-selection-multi'; // attrs() function to d3 selections


class ChartBar extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    componentDidMount() {
    }

    componentWillUnmount() {
    }

    render() {
        const context = this.props.context;
        const data = this.props.data;
        const criteriaFields = _.map(_.filter(APP_CONFIG.columnMetadata, { columnType: 'criteria' }), 'columnName');

        // need both data and context
        if (typeof data === 'undefined' || typeof context === 'undefined') {
            return null;
        }

        let svg = select('svg.chart');

        // Draw the stack
        let keys = _.remove(_.keys(data[0]), (key) => {
            return _.indexOf(criteriaFields, key) > -1;
        });
        // if no keys are found, then show total
        if (keys.length === 0) {
            keys.push('total');
        }

        // Draw stacked bars
        let layerStack = select(Faux.createElement('g'))
            .attr('clip-path', 'url(#chart__mask)')
            .attr('transform', 'translate(' + (context.margin.left + ((context.size.width / data.length) / 8)) + ', ' + context.margin.top + ')');

        let dataStack = stack()
            .keys(keys)
            .order(stackOrderNone)
            .offset(stackOffsetNone);

        let series = dataStack(data);

        let groups = layerStack.selectAll('g')
            .data(series)
            .enter().append('g')
            .attr('fill', (d) => { return context.scales.z(d.index); });

        groups.selectAll('rect')
            .data((d) => {
                _.forEach(d, (arr) => {
                    arr.key = d.key;
                });
                return d;
            })
            .enter().append('rect')
            .attr('class', 'bar')
            .attr('x', (d) => { return context.scales.x(moment.utc(d.data.date, APP_CONFIG.resultsFormat).toDate()) - (context.size.width / data.length) / 2; })
            .attr('y', (d) => { return context.scales.y(d[1]); })
            .attr('height', (d) => { return context.scales.y(d[0]) - context.scales.y(d[1]); })
            .attr('width', () => { return context.size.width / data.length - ((context.size.width / data.length) / 4); })
            .on('mousemove', (d) => {
                let xPosition = event.pageX - 40;
                let yPosition = event.pageY - 70;
                tooltip
                    .style('left', xPosition + 'px')
                    .style('top', yPosition + 'px')
                    .style('display', 'inline-block')
                    .html(() => {
                        let total = d[1] - d[0];
                        let type = d.key;
                        //let type = _.split(d.key, '_');
                        //type = type.length > 1 ? _.startCase(type[1]) : _.startCase(d.key);
                        return '<b>' + moment.utc(d.data.date, APP_CONFIG.resultsFormat).format(APP_CONFIG.dateFormat) +
                               ' ' + moment.utc(d.data.date, APP_CONFIG.resultsFormat).format(APP_CONFIG.timeFormat) + '</b><br />' + type + ': ' + total;
                    });
            })
            .on('mouseout', () => { tooltip.style('display', 'none'); });

        let legend = svg.append('g')
            .attr('font-family', 'sans-serif')
            .attr('font-size', 12)
            .attr('text-anchor', 'end')
            .selectAll('g')
            .data(keys.slice().reverse())
            .enter().append('g')
            .attr('transform', (d, i) => { return 'translate(0,' + i * 20 + ')'; });

        legend.append('rect')
            .attr('x', context.size.width - 50)
            .attr('y', 15)
            .attr('width', 19)
            .attr('height', 19)
            .attr('fill', (d) => { return context.scales.z(_.indexOf(keys, d)); });

        legend.append('text')
            .attr('x', context.size.width - 55)
            .attr('y', 25)
            .attr('dy', '0.32em')
            .attr('fill', '#fff')
            .text((d) => { return d; });

        let tooltip = select('body').append('div').attr('class', 'chart__tooltip');

        return layerStack.node().toReact();
    }
}

ChartBar.propTypes = {
    context: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
};

export default ChartBar;
