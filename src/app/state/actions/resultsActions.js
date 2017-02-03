
import * as types from './resultsActionTypes';
import api from '../../api/resultsApi';

function resultLoadResultsPending(results) {
    return {
        type: types.RESULTS__LOAD_RESULTS_PENDING,
        results
    };
}

function resultLoadResultsSuccess(results) {
    return {
        type: types.RESULTS__LOAD_RESULTS_SUCCESS,
        results
    };
}

export function fetchAllResults(params) {
    params = params || {};
    return (dispatch) => {
        dispatch(resultLoadResultsPending({}));
        return api.getAllResults(params).then(results => {
            dispatch(resultLoadResultsSuccess(results));
        }).catch(error => {
            throw(error);
        });
    };
}
