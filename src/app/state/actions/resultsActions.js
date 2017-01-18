
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

export function fetchAllResultsPending() {
    return function(dispatch) {
        return dispatch(resultLoadResultsPending({records: []}));
    };
}

export function fetchAllResults(params) {
    params = params || {};
    return function(dispatch) {
        return api.getAllResults(params).then(results => {
            dispatch(resultLoadResultsSuccess(results));
        }).catch(error => {
            throw(error);
        });
    };
}
