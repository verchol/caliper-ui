
import * as types from './resultsActionTypes';
import api from '../../api/resultsApi';

function resultLoadResultsSuccess(results) {
    return {
        type: types.RESULTS__LOAD_RESULTS_SUCCESS,
        results
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
