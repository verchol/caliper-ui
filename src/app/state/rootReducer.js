import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import results from './reducers/resultsReducer';
import params from './reducers/paramsReducer';
import report from './reducers/reportReducer';


const rootReducer = combineReducers({
  routing: routerReducer,
  results,
  params,
  report
});

export default rootReducer;
