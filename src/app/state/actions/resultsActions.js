
import * as types from './resultsActionTypes';
import api from '../../api/resultsApi';

export function reportLoadResultsSuccess(results) {
    return {
        type: types.RESULTS__LOAD_RESULTS_SUCCESS,
        results
    };
}

export function fetchAllResults(params) {
    params = params || {};
    return function(dispatch) {
        return api.getAllResults(params).then(results => {
            dispatch(reportLoadResultsSuccess(results));
        }).catch(error => {
            throw(error);
        });
    };
}
