import * as types from '../actions/reportActionTypes';

export default function reportReducer(state = {}, action) {
    switch (action.type) {
        case types.REPORT__SELECT_REPORT:
            return action.report;
        default:
            return state;
    }
}
