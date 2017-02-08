import React, { PropTypes } from 'react';
import Faux from 'react-faux-dom';
import moment from 'moment';
import _ from 'lodash';
// D3 Components
import { select } from 'd3-selection';
import { stack } from 'd3-shape';
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

        // need both data and context
        if (typeof data === 'undefined' || typeof context === 'undefined') {
            return null;
        }

        // Draw the stack
        let keys = _.remove(_.keys(data[0]), (key) => {
            return key !== 'date';
        });

        let layerStack = select(Faux.createElement('g'));
        layerStack
            .selectAll('g')
            .data(stack().keys(keys)(data))
            .enter().append('g')
                .attr('fill', (d) => { return context.scales.z(d.key); })
            .selectAll('rect')
            .data((d) => { return d; })
            .enter().append('rect')
                .attr('x', (d) => { return context.scales.x(moment.utc(d.data.date).toDate()) - (context.size.width / data.length) / 2; })
                .attr('y', (d) => { return context.scales.y(d[1]); })
                .attr('height', (d) => { return context.scales.y(d[0]) - context.scales.y(d[1]); })
                .attr('width', () => { return context.size.width / data.length - ((context.size.width / data.length) / 4); })
            .attr('transform', 'translate(' + (context.margin.left + ((context.size.width / data.length) / 8)) + ', ' + context.margin.top + ')');

        let legend = layerStack.append('g')
            .attr('font-family', 'sans-serif')
            .attr('font-size', 12)
            .attr('text-anchor', 'end')
            .selectAll('g')
            .data(keys.slice().reverse())
            .enter().append('g')
            .attr('transform', (d, i) => { return 'translate(0,' + i * 20 + ')'; });

        legend.append('rect')
            .attr('x', context.size.width - 40)
            .attr('width', 19)
            .attr('height', 19)
            .attr('fill', context.scales.z);

        legend.append('text')
            .attr('x', context.size.width - 45)
            .attr('y', 9.5)
            .attr('dy', '0.32em')
            .attr('fill', '#fff')
            .text((d) => { return d; });

        return layerStack.node().toReact();
    }
}

ChartBar.propTypes = {
    context: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
};

export default ChartBar;
