import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import results from './reducers/resultsReducer';
import params from './reducers/paramsReducer';
import selection from './reducers/selectionReducer';


const rootReducer = combineReducers({
  routing: routerReducer,
  results,
  params,
  selection
});

export default rootReducer;
