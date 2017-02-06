import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
// D3 Components
import { extent, max } from 'd3-array';
import { scaleLinear, scaleUtc, scaleOrdinal } from 'd3-scale';

import ChartAxis from './ChartAxis';
import ChartBar from './ChartBar';

const MARGIN = {
    top: 0,
    right: 30,
    bottom: 20,
    left: 30
};
const AXIS_COLOR = '#9b9b9b';

class BarChart extends React.Component {
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
        const x = scaleUtc()
            .range([0, xSize])
            .domain(extent(data, d => {
                return moment.utc(d.date);
            }));

        let keys = _.remove(_.keys(data[0]), (key) => {
            return key !== 'date';
        });

        const ySize = size.height - MARGIN.top - MARGIN.bottom;
        const y = scaleLinear()
            .range([ySize, 0])
            .domain([0, max(data, d => {
                let total = 0;
                _.forEach(keys, (key) => {
                    total = total + d[key];
                });
                return total;
            })]);

        const z = scaleOrdinal()
            .range(['#98abc5', '#8a89a6', '#7b6888', '#6b486b', '#a05d56', '#d0743c', '#ff8c00']);

        return {
            x: x,
            y: y,
            z: z
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
        if (this.props.data.length > 0) {
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
                <svg className="chart chart__bar" height={size.height + 10} width={size.width}>
                    <ChartBar data={this.props.data} context={context} />
                    <ChartAxis context={context} showTicks={this.props.showTicks} />
                </svg>
            );
        }
        return (
            <div className="absolute-center">There is no data to display.</div>
        )
    }

}

BarChart.propTypes = {
    data: PropTypes.array.isRequired,
    showTicks: PropTypes.bool,
    chartHeight: PropTypes.number
};

BarChart.defaultProps = {
    showTicks: true,
    chartHeight: 250
};

export default BarChart;