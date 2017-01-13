import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import results from './reducers/reportReducer';
import selection from './reducers/selectionReducer';


const rootReducer = combineReducers({
  routing: routerReducer,
  results,
  selection
});

export default rootReducer;
