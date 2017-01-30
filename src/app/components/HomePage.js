import React from 'react';
import ReactDOM from 'react-dom';
import GoldenLayout from 'golden-layout';
import GlobalStore from '../globalStore';
import Wrap from './helpers/Wrap';
import Sidebar from './sidebar/Sidebar';
import Datagrid from './datagrid/Datagrid';
import CaliperChart from './chart/CaliperChart';

class HomePage extends React.Component {
    constructor (props, context) {
        super(props, context);
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

            layout.registerComponent('sidebar', Wrap(Sidebar, store));
            layout.registerComponent('datagrid', Wrap(Datagrid, store));
            layout.registerComponent('caliper-chart', Wrap(CaliperChart, store));

            layout.on('stateChanged', () => {
                let state = layout.toConfig();
                localStorage.setItem(LAYOUT_KEY, JSON.stringify(state));
            });

            layout.on('stateChanged', () => {
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

        if (!this.props.location.query.reset) {
            if (localStorage.getItem(LAYOUT_KEY)) {
                try {
                    layoutConfig = JSON.parse(localStorage.getItem(LAYOUT_KEY));
                    initializeLayoutWithConfig(layoutConfig);
                } catch (e) {
                    console.log('Error parsing layout config: ' + e);
                    initializeLayoutWithConfig(DEFAULT_LAYOUT);
                }
            }
        } else {
            initializeLayoutWithConfig(layoutConfig);
        }
    }

    render () {
        return (
            <div className="homepage"/>
        );
    }
}

export default HomePage;
