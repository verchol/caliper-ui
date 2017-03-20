import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import results from './reducers/resultsReducer';
import resultsAggregate from './reducers/resultsAggregateReducer';
import resultsAggregateByHour from './reducers/resultsAggregateByHourReducer';
import params from './reducers/paramsReducer';
import report from './reducers/reportReducer';
import statefulStatus from './reducers/statefulReducer';


const rootReducer = combineReducers({
  routing: routerReducer,
  results,
  resultsAggregate,
  resultsAggregateByHour,
  params,
  report,
  statefulStatus
});

export default rootReducer;
