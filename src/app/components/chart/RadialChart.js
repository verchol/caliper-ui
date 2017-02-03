import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import moment from 'moment';
// D3 Components
import { extent, max } from 'd3-array';
import { scaleLinear } from 'd3-scale';

import RadialBars from './RadialBars';


const MARGIN = {
    top: 10,
    right: 10,
    bottom: 10,
    left: 10
};

const AXIS_COLOR = '#9b9b9b';

class RadialChart extends React.Component {

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

    updateDimensions() {
        let el = ReactDOM.findDOMNode(this).parentNode;
        this.setState({
            componentSize: Object.assign({}, {
                height: el.offsetHeight,
                width: el.offsetWidth
            })
        });
    }

    initScales(size, data) {

        const ySize = size.height - MARGIN.top - MARGIN.bottom;
        console.log('ySize: ' + ySize);

        const y = scaleLinear()
            .range([0, ySize])
            .domain([0, max(data, d => {
                return d.y;
            })]);

        return {
            y: y
        };
    }

    render() {
        const size = {
            //height: this.state.componentSize.height,
            //width: this.state.componentSize.width
            height: 150,
            width: 150
        };

        // Data might not have values for all 24 hours. Normalize it and make
        // sure we have integers for values
        let cleanedData = [];
        for (var i = 0; i < 24; i++) {
            cleanedData.push({
                x: i, y: 0
            });
        }
        this.props.data.map(d => {
            let key = parseInt(d.x);
            let val = parseInt(d.y);
            let datum = cleanedData.find(row => {
                if (row.x === key) return row;
            });
            if (datum) {
                datum.y = val;
            }
        });

        console.log('Rendering data: ' + JSON.stringify(cleanedData));

        let context = {};
        context.axisColor = AXIS_COLOR;
        context.margin = MARGIN;
        context.scales = this.initScales(size, this.props.data);
        context.size = size;

        return (
            <svg className="chart chart__radial" height={size.height} width={size.width}>
                <RadialBars data={this.props.data} context={context} />
            </svg>
        );
    }

}

RadialChart.propTypes = {
    data: PropTypes.array.isRequired
};

export default RadialChart;
