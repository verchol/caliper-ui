import * as types from '../actions/paramsActionTypes';

export default function paramsReducer(state = {}, action) {
    switch (action.type) {
        case types.PARAMS__UPDATE_PARAMS:
            let updatedParams = Object.assign({}, state, action.params);
            // remove any params with values of null
            for (let key in updatedParams) {
                if (updatedParams[key] === null ||
                    updatedParams[key] === undefined ||
                    updatedParams[key] === '') {
                    delete updatedParams[key];
                }
            }
            return updatedParams;
        default:
            return state;
    }
}
