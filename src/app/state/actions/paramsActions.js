
import * as types from './paramsActionTypes';

function paramsUpdateParams(params) {
    return {
        type: types.PARAMS__UPDATE_PARAMS,
        params
    };
}

export function updateParams(params) {
    return function (dispatch) {
        return dispatch(paramsUpdateParams(params));
    };
}
