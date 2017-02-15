import * as types from '../actions/resultsAggregateActionTypes';

export default function resultsAggregateReducer(state = {}, action) {
    switch (action.type) {
        case types.RESULTS__LOAD_RESULTS_AGGREGATE_PENDING:
            return Object.assign({}, action.resultsAggregate, {pending: true});
        case types.RESULTS__LOAD_RESULTS_AGGREGATE_SUCCESS:
            return Object.assign({}, action.resultsAggregate, {pending: false});
        default:
            return state;
    }
}
