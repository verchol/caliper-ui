import * as types from '../actions/paramsActionTypes';

export default function paramsReducer(state = {}, action) {
    switch (action.type) {
        case types.PARAMS__UPDATE_PARAMS:
            console.log(Object.assign({}, state, action.params));
            return Object.assign({}, state, action.params);
        default:
            return state;
    }
}
