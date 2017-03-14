import * as types from '../actions/resultsAggregateByHourActionTypes';

export default function resultsAggregateByHourReducer(state = {}, action) {
    switch (action.type) {
        case types.RESULTS__LOAD_RESULTS_AGGREGATE_HOUR_PENDING:
            return Object.assign({}, action.resultsAggregateByHour, {pending: true});
        case types.RESULTS__LOAD_RESULTS_AGGREGATE_HOUR_SUCCESS:
            return Object.assign({}, action.resultsAggregateByHour, {pending: false});
        default:
            return state;
    }
}
