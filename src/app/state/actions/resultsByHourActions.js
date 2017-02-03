
import * as types from './resultsByHourActionTypes';
import api from '../../api/resultsApi';

function resultLoadResultsByHourPending(resultsByHour) {
    return {
        type: types.RESULTS__LOAD_RESULTS_BY_HOUR_PENDING,
        resultsByHour
    };
}

function resultLoadResultsByHourSuccess(resultsByHour) {
    return {
        type: types.RESULTS__LOAD_RESULTS_BY_HOUR_SUCCESS,
        resultsByHour
    };
}

export function fetchResultsByHour(params) {
    params = params || {};
    return (dispatch) => {
        dispatch(resultLoadResultsByHourPending({}));
        return api.getResultsByHour(params).then(results => {
            dispatch(resultLoadResultsByHourSuccess(results));
        }).catch(error => {
            throw(error);
        });
    };
}
