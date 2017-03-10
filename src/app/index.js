/* eslint-disable import/default */ // - This lets us do the configureStore.dev/prod trick
import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import api from './api/stateApi';
import moment from 'moment';
import GlobalStore from './globalStore';
import routes from './routes';
import configureStore from './state/store/configureStore';
import * as resultsActions from './state/actions/resultsActions';
import * as resultsAggregateActions from './state/actions/resultsAggregateActions';
import { updateParams } from './state/actions/paramsActions';
import { DATE_FORMAT, TIME_FORMAT } from './components/sidebar/form/AisDateTimePicker';

// Import application assets so webpack can process them
//require('../favicon.ico');
//import '../sass/main.scss';

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

const init = () => {
    store = configureStore();
    GlobalStore.setStore(store);
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

    // Create an enhanced history that syncs navigation events with the store
    const history = syncHistoryWithStore(browserHistory, store);

    ReactDom.render(
        <Provider store={store}>
            <Router history={history} routes={routes} />
        </Provider>, document.getElementById('app')
    );
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
            // store.dispatch(updateParams(initialState.params));
            // store.dispatch(resultsActions.fetchAllResults(initialState.params));
            // store.dispatch(resultsAggregateActions.fetchResultsAggregate(initialState.params));

            // Create an enhanced history that syncs navigation events with the store
            const history = syncHistoryWithStore(browserHistory, store);

            ReactDom.render(
                <Provider store={store}>
                    <Router history={history} routes={routes} />
                </Provider>, document.getElementById('app')
            );
        } catch (err) {
            console.log(err);
            init();
        }
    }).catch((err) => {
        console.log(err);
        init();
    });
} else {
    init();
}
