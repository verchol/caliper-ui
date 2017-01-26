/* eslint-disable import/default */ // - This lets us do the configureStore.dev/prod trick
import React from 'react';
import ReactDom from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { Provider } from 'react-redux';
import { syncHistoryWithStore } from 'react-router-redux';

import routes from './routes';
import configureStore from './state/store/configureStore';
import * as resultsActions from './state/actions/resultsActions';
import { updateParams } from './state/actions/paramsActions';

// Import application assets so webpack can process them
//require('../favicon.ico');
//import '../sass/main.scss';

const store = configureStore();
const initialParams = {};
initialParams[APP_CONFIG.params.page] = 1;
initialParams[APP_CONFIG.params.count] = 20;
initialParams[APP_CONFIG.params.sort] = 'requirementId';
initialParams[APP_CONFIG.params.order] = 'ASC';
store.dispatch(updateParams(initialParams));
store.dispatch(resultsActions.fetchAllResults(initialParams));

// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store);

ReactDom.render(
    <Provider store={store}>
        <Router history={history} routes={routes} />
    </Provider>, document.getElementById('app')
);
