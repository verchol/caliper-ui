
import * as types from './resultsByDayActionTypes';
import api from '../../api/resultsApi';

function resultLoadResultsByDayPending(resultsByDay) {
    return {
        type: types.RESULTS__LOAD_RESULTS_BY_DAY_PENDING,
        resultsByDay
    };
}

function resultLoadResultsByDaySuccess(resultsByDay) {
    return {
        type: types.RESULTS__LOAD_RESULTS_BY_DAY_SUCCESS,
        resultsByDay
    };
}

export function fetchResultsByDay(params) {
    params = params || {};
    return (dispatch) => {
        dispatch(resultLoadResultsByDayPending({}));
        return api.getResultsByDay(params).then(results => {
            dispatch(resultLoadResultsByDaySuccess(results));
        }).catch(error => {
            throw(error);
        });
    };
}
