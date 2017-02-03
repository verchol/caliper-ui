import * as types from '../actions/resultsActionTypes';

export default function resultsReducer(state = {}, action) {
    switch (action.type) {
        case types.RESULTS__LOAD_RESULTS_PENDING:
            return Object.assign({}, action.results, {pending: true});
        case types.RESULTS__LOAD_RESULTS_SUCCESS:
            return Object.assign({}, action.results, {pending: false});
        default:
            return state;
    }
}
