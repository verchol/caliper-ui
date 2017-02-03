import * as types from '../actions/resultsByDayActionTypes';

export default function resultsByDayReducer(state = {}, action) {
    switch (action.type) {
        case types.RESULTS__LOAD_RESULTS_BY_DAY_PENDING:
            return Object.assign({}, action.resultsByDay, {pending: true});
        case types.RESULTS__LOAD_RESULTS_BY_DAY_SUCCESS:
            return Object.assign({}, action.resultsByDay, {pending: false});
        default:
            return state;
    }
}
