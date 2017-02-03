import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import results from './reducers/resultsReducer';
import resultsByHour from './reducers/resultsByHourReducer';
import resultsByDay from './reducers/resultsByDayReducer';
import params from './reducers/paramsReducer';
import report from './reducers/reportReducer';


const rootReducer = combineReducers({
  routing: routerReducer,
  results,
  resultsByHour,
  resultsByDay,
  params,
  report
});

export default rootReducer;
