import * as types from './paramsActionTypes';

export function updateParams(params) {
    return {
        type: types.PARAMS__UPDATE_PARAMS,
        params
    };
}
