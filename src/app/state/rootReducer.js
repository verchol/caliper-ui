import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import reports from './reducers/reportReducer';
import selection from './reducers/selectionReducer';


const rootReducer = combineReducers({
  routing: routerReducer,
  reports,
  selection
});

export default rootReducer;
