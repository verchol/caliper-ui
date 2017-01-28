import React, { PropTypes } from 'react';
import ReactDOM from 'react-dom';
import { Provider, connect } from 'react-redux';
import GoldenLayout from 'golden-layout';
import GlobalStore from '../globalStore';
import Sidebar, { mapStateToProps as sbStateToProps } from './sidebar/Sidebar';
import Datagrid, { mapStateToProps as dgStateToProps } from './datagrid/Datagrid';
import CaliperChart, { mapStateToProps as ccStateToProps } from './chart/CaliperChart';

const wrapComponent = (Component, store) => {
    class Wrapped extends React.Component {
        render () {
            if (this.props.title) {
                this.props.glContainer.setTitle(this.props.title);
            }
            return (
                <Provider store={store}>
                    <Component {...this.props} />
                </Provider>
            )
        }
    }
    return Wrapped;
};

class HomePage extends React.Component {
    constructor (props, context) {
        super(props, context);
    }

    render () {
        return (
            <div className="homepage"></div>
        );
    }

    componentWillMount () {
        const LAYOUT_KEY = 'caliperLayoutConfig';
        const DEFAULT_LAYOUT = {
            settings: {
                hasHeaders: true,
                showPopoutIcon: false,
                showMaximiseIcon: true,
                showCloseIcon: false
            },
            labels: {
                maximise: 'maximize',
                minimise: 'minimize'
            },
            content: [{
                type: 'row',
                content: [{
                    type: 'row',
                    width: 20,
                    content: [{
                        type: 'react-component',
                        component: 'sidebar',
                        props: {
                            title: 'Filters'
                        }
                    }]
                },{
                    type: 'column',
                    width: 80,
                    content: [{
                        type: 'row',
                        height: 50,
                        content: [{
                            type: 'react-component',
                            component: 'datagrid',
                            props: {
                                title: 'Reports'
                            }
                        }]
                    },{
                        type: 'row',
                        height: 50,
                        content: [{
                            type: 'column',
                            width: 50,
                            content: [{
                                type: 'react-component',
                                component: 'caliper-chart',
                                props: {
                                    type: 'line',
                                    title: 'Line'
                                }
                            }]
                        },{
                            type: 'column',
                            width: 50,
                            content: [{
                                type: 'react-component',
                                component: 'caliper-chart',
                                props: {
                                    type: 'hist',
                                    title: 'Histogram'
                                }
                            }]
                        }]
                    }]
                }]
            }]
        };

        const initializeLayoutWithConfig = (layoutConfig) => {
            // workaround for react + webpack
            // https://github.com/deepstreamIO/golden-layout/issues/88
            window.React = React;
            window.ReactDOM = ReactDOM;

            let layout = new GoldenLayout(layoutConfig);
            let store = GlobalStore.getStore();

            const sidebarView = connect(sbStateToProps)(Sidebar);
            layout.registerComponent('sidebar', wrapComponent(sidebarView, store));

            const datagridView = connect(dgStateToProps)(Datagrid);
            layout.registerComponent('datagrid', wrapComponent(datagridView, store));

            const caliperChartView = connect(ccStateToProps)(CaliperChart);
            layout.registerComponent('caliper-chart', wrapComponent(caliperChartView, store));

            layout.on('stateChanged', () => {
                let state = layout.toConfig();
                localStorage.setItem(LAYOUT_KEY, JSON.stringify(state));
            });

            layout.container = ReactDOM.findDOMNode(this);
            layout.init();

            layout.on('stateChanged', function() {
                let state = layout.toConfig();
                try {
                    localStorage.setItem(LAYOUT_KEY, JSON.stringify(state));
                } catch (e) {
                    console.log('error serializing layout config: ' + e);
                }
            });

            layout.init();
        };

        // golden layout config - eventually use stateService for this...
        let layoutConfig = DEFAULT_LAYOUT;

        if (localStorage.getItem(LAYOUT_KEY)) {
            try {
                layoutConfig = JSON.parse(localStorage.getItem(LAYOUT_KEY));
            } catch (e) {
                console.log('Error parsing layout config: ' + e);
            }
        }

        // Try to use the layout configuration from local storage, but if
        // for whatever reason that fails, fallback to the default
        try {
            initializeLayoutWithConfig(layoutConfig);
        }
        catch (e) {
            initializeLayoutWithConfig(DEFAULT_LAYOUT);
        }
    }
}

export default HomePage;
