/* eslint-disable import/default */ // - This lets us do the configureStore.dev/prod trick
import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import moment from 'moment';

import api from './api/statefulApi';
import GlobalStore from './globalStore';
import routes from './routes';
import configureStore from './state/store/configureStore';
import * as resultsActions from './state/actions/resultsActions';
import * as resultsAggregateActions from './state/actions/resultsAggregateActions';
import { updateParams } from './state/actions/paramsActions';
import { updateStatefulStatus } from './state/actions/statefulActions';
import { DATE_FORMAT, TIME_FORMAT } from './components/sidebar/form/AisDateTimePicker';

let statefulStatus = {
    value: false,
    error: null
};

const getStateId = () => {
    let query = window.location.search.substring(1);
    let vars = query.split('&');
    for (let i = 0; i < vars.length; i++) {
        let pair = vars[i].split('=');
        if (decodeURIComponent(pair[0]) === 'id') {
            return decodeURIComponent(pair[1]);
        }
    }
};

const init = (checkStateful) => {
    store = configureStore();
    GlobalStore.setStore(store);

    const render = () => {
        const DATE_TIME_FORMAT = `${DATE_FORMAT} ${TIME_FORMAT}`;
        const initialParams = {
            _page: 1,
            _limit: 20,
            _sort: APP_CONFIG.sort.column,
            _order: APP_CONFIG.sort.direction,
            start_date: moment.utc().startOf('d').format(DATE_TIME_FORMAT),
            end_date: moment.utc().add(1, 'd').startOf('d').format(DATE_TIME_FORMAT)
        };

        store.dispatch(updateParams(initialParams));
        store.dispatch(resultsActions.fetchAllResults(initialParams));
        store.dispatch(resultsAggregateActions.fetchResultsAggregate(initialParams));
        store.dispatch(updateStatefulStatus(statefulStatus));

        // Create an enhanced history that syncs navigation events with the store
        const history = syncHistoryWithStore(browserHistory, store);

        ReactDom.render(
            <Provider store={store}>
                <Router history={history} routes={routes} />
            </Provider>, document.getElementById('app')
        );
    };

    if (!statefulStatus.value && checkStateful) {
        api.getVersion().then(() => {
            statefulStatus = {
                value: true,
                error: null
            };
            render();
        }).catch((err) => {
            statefulStatus = {
                value: false,
                error: err.message
            };
            render();
        })
    } else {
        render();
    }
};

let store = null;
let stateId = getStateId();

if (stateId) {
    api.getState(stateId).then((result) => {
        let initialState = {};
        try {
            initialState = JSON.parse(result.user_state);
            store = configureStore(initialState);
            GlobalStore.setStore(store);

            statefulStatus = {
                value: true,
                error: null
            };
            store.dispatch(updateStatefulStatus(statefulStatus));

            // Create an enhanced history that syncs navigation events with the store
            const history = syncHistoryWithStore(browserHistory, store);

            ReactDom.render(
                <Provider store={store}>
                    <Router history={history} routes={routes} />
                </Provider>, document.getElementById('app')
            );
        } catch (err) {
            statefulStatus = {
                value: true,
                error: null
            };
            init(false);
        }
    }).catch((err) => {
        statefulStatus = {
            value: false,
            error: err.message
        };
        init(false);
    });
} else {
    init(true);
}
