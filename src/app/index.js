/* eslint-disable import/default */ // - This lets us do the configureStore.dev/prod trick
import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import configureStore from './state/store/configureStore';
import { fetchAllResults } from './state/actions/resultsActions';

// Import application assets so webpack can process them
//require('../favicon.ico');
//import '../sass/main.scss';

const store = configureStore();
const urlParams = {};
urlParams[APP_CONFIG.urlParams.page] = 1;
urlParams[APP_CONFIG.urlParams.count] = 20;
store.dispatch(fetchAllResults(urlParams));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>, document.getElementById('app')
);
