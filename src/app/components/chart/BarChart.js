import React, { PropTypes } from 'react';
import moment from 'moment';
import _ from 'lodash';
// D3 Components
import { extent, max } from 'd3-array';
import { scaleLinear, scaleUtc } from 'd3-scale';
import { rgb } from 'd3-color';
import { interpolateRgb } from 'd3-interpolate';

import ChartAxis from './ChartAxis';
import ChartBar from './ChartBar';

const MARGIN = {
    top: 10,
    right: 150,
    bottom: 40,
    left: 30
};

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
        // listen for golden layout resize and fire resize event
        this.props.glContainer.on('resize', () => {
            window.dispatchEvent(new Event('resize'));
        });

        window.addEventListener('resize', this.updateDimensions);
        this.updateDimensions();
    }

    componentWillUnmount() {
        window.removeEventListener('resize', this.updateDimensions);
    }

    initScales(size, data) {
        const criteriaFields = _.map(_.filter(APP_CONFIG.columnMetadata, { columnType: 'criteria' }), 'columnName');
        const xSize =  size.width - ((size.width / data.length) / 2) - (MARGIN.right + MARGIN.left);
        const x = scaleUtc()
            .range([((size.width / data.length) / 2), xSize])
            .domain(extent(data, d => {
                return moment.utc(d.date, APP_CONFIG.resultsFormat).toDate();
            }));

        let keys = _.remove(_.keys(data[0]), (key) => {
            return _.indexOf(criteriaFields, key) > -1;
        });
        // if no keys are found, then show total
        if (keys.length === 0) {
            keys.push('total');
        }

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

        const comparatorColumns = _.map(_.filter(APP_CONFIG.columnMetadata, { columnType: 'comparator' }), 'columnName');
        const criteriaColumns = _.map(_.filter(APP_CONFIG.columnMetadata, { columnType: 'criteria' }), 'columnName');
        let columnArr = [];
        columnArr = columnArr.concat(comparatorColumns, criteriaColumns);

        const z = scaleLinear().domain([1, columnArr.length])
            .interpolate(interpolateRgb)
            .range([rgb('#068894'), rgb('#F1EB1A')]);

        return {
            x: x,
            y: y,
            z: z
        };
    }

    updateDimensions() {
        this.setState({
            componentSize: Object.assign({}, {
                height: this.props.glContainer.height - 20,
                width: this.props.glContainer.width
            })
        });
    }

    render() {
        if (this.props.data && this.props.data.length > 0) {
            const size = {
                height: this.props.glContainer.height - 20,
                width: this.props.glContainer.width
            };

            let context = {};
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
        );
    }

}

BarChart.propTypes = {
    data: PropTypes.array.isRequired,
    showTicks: PropTypes.bool,
    chartHeight: PropTypes.number
};

BarChart.defaultProps = {
    showTicks: true,
    chartHeight: 350
};

export default BarChart;
