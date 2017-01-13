import * as types from '../actions/reportActionTypes';

export default function reportReducer(state = {}, action) {
    switch (action.type) {
        case types.REPORT__LOAD_REPORTS_SUCCESS:
            return action.results;
        default:
            return state;
    }
}
