import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
// D3 Components
import { extent, max } from 'd3-array';
import { scaleLinear } from 'd3-scale';

import ChartAxis from './ChartAxis';
import ChartLine from './ChartLine';


const MARGIN = {
    top: 0,
    right: 30,
    bottom: 20,
    left: 30
};
const AXIS_COLOR = '#9b9b9b';

class LineChart extends React.Component {

    constructor(props, context) {
        super(props, context);

        this.state = {
            componentSize: {
                height: 0,
                width: 0
            }
        };

        this.setState = this.setState.bind(this);
        this.updateDimensions = this.updateDimensions.bind(this);
    }

    componentDidMount() {
        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    initScales(size, data) {
        const xSize =  size.width - (MARGIN.right + MARGIN.left);
        const x = scaleLinear()
            .range([0, xSize])
            .domain(extent(data, d => {
                return d.x;
            }));

        const ySize = size.height - MARGIN.top - MARGIN.bottom;
        const y = scaleLinear()
            .range([ySize, 0])
            .domain([0, max(data, d => {
                return d.y;
            })]);

        return {
            x: x,
            y: y
        };
    }

    updateDimensions() {
        let el = ReactDOM.findDOMNode(this).parentNode;
        this.setState({
            componentSize: Object.assign({}, {
                height: el.offsetHeight,
                width: el.offsetWidth
            })
        });
    }

    render() {
        const size = {
            height: this.props.chartHeight,
            width: this.state.componentSize.width
        };

        let context = {};
        context.axisColor = AXIS_COLOR;
        context.margin = MARGIN;
        context.scales = this.initScales(size, this.props.data);
        context.size = size;

        return (
            <svg className="chart chart__line" height={size.height + 10} width={size.width}>
                <ChartLine data={this.props.data} context={context} />
                <ChartAxis context={context} showTicks={this.props.showTicks} />
            </svg>
        );
    }

}

LineChart.propTypes = {
    data: PropTypes.array.isRequired,
    showTicks: PropTypes.bool,
    chartHeight: PropTypes.number
};

LineChart.defaultProps = {
    showTicks: true,
    chartHeight: 250
};

export default LineChart;
