import React, { PropTypes } from 'react';
import Faux from 'react-faux-dom';
// D3 Components
import { select } from 'd3-selection';
import { arc } from 'd3-shape';
import 'd3-selection-multi'; // attrs() function to d3 selections


class RadialBars extends React.Component {

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
        const numBars = 24;

        // need both data and context
        if (typeof data === 'undefined' || typeof context === 'undefined') {
            return null;
        }

        console.log('Rendering radial bars...');
        let layerBars = select(Faux.createElement('g'));

        let arcPainter = arc()
            .startAngle((d, i) => { return (i * 2 * Math.PI) / numBars; })
            .endAngle((d, i) => { return ((i + 1) * 2 * Math.PI) / numBars; })
            .innerRadius(0);

        let segments = layerBars.selectAll('path')
            .data(data)
            .enter().append('path')
            .each(d => { d.outerRadius = 0; })
            .style('fill', '#0f0')
            .attr('d', arcPainter);

        return layerBars.node().toReact();
        // // Paint the Signature Line
        // const linePainter = line()
        //     .x(d => {
        //         return context.scales.x(d.x);
        //     })
        //     .y(d => {
        //         return context.scales.y(d.y);
        //     });
        //
        // let layerLine = select(Faux.createElement('g'));
        // layerLine.attr('transform', 'translate(' + context.margin.left + ',' + context.margin.top + ')');
        //
        // let path = layerLine.append('path');
        // path.datum(data);
        // path.attrs({
        //     d: linePainter,
        //     class: 'chart__line-signature'
        // });
        //
        // return layerLine.node().toReact();
    }
}

RadialBars.propTypes = {
    context: PropTypes.object.isRequired,
    data: PropTypes.array.isRequired
};

export default RadialBars;
