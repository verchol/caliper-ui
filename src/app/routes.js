import React from 'react';
import {Route, IndexRoute} from 'react-router';

import App from './App';
// Pages
import AboutPage from './components/AboutPage';
import Error404Page from './components/Error404Page';
import HomePage from './components/HomePage';


export default(
    <Route path="/" component={App}>
        <IndexRoute component={HomePage}/>
        <Route path="about" component={AboutPage}/>
        <Route path="*" component={Error404Page}/>
    </Route>
);
