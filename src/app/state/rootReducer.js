import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import results from './reducers/resultsReducer';
import resultsAggregate from './reducers/resultsAggregateReducer';
import params from './reducers/paramsReducer';
import report from './reducers/reportReducer';


const rootReducer = combineReducers({
  routing: routerReducer,
  results,
  resultsAggregate,
  params,
  report
});

export default rootReducer;
