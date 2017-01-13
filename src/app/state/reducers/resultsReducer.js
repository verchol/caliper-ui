import * as types from '../actions/resultsActionTypes';

export default function resultsReducer(state = {}, action) {
    switch (action.type) {
        case types.RESULTS__LOAD_RESULTS_SUCCESS:
            return action.results;
        default:
            return state;
    }
}
