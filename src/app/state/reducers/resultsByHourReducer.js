import * as types from '../actions/resultsByHourActionTypes';

export default function resultsByHourReducer(state = {}, action) {
    switch (action.type) {
        case types.RESULTS__LOAD_RESULTS_BY_HOUR_PENDING:
            return Object.assign({}, action.resultsByHour, {pending: true});
        case types.RESULTS__LOAD_RESULTS_BY_HOUR_SUCCESS:
            return Object.assign({}, action.resultsByHour, {pending: false});
        default:
            return state;
    }
}
