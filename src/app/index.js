/* eslint-disable import/default */ // - This lets us do the configureStore.dev/prod trick
import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';
import GlobalStore from './globalStore';
import routes from './routes';
import configureStore from './state/store/configureStore';
import * as resultsActions from './state/actions/resultsActions';
import { updateParams } from './state/actions/paramsActions';

// Import application assets so webpack can process them
//require('../favicon.ico');
//import '../sass/main.scss';

const store = configureStore();
GlobalStore.setStore(store);
const initialParams = {
    _page: 1,
    _limit: 20,
    _sort: 'requirements_id',
    _order: 'ASC'
};
store.dispatch(updateParams(initialParams));
store.dispatch(resultsActions.fetchAllResults(initialParams));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>, document.getElementById('app')
);
