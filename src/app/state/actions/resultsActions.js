
import * as types from './resultsActionTypes';
import api from '../../api/resultsApi';

export function reportLoadResultsSuccess(results) {
    return {
        type: types.RESULTS__LOAD_RESULTS_SUCCESS,
        results
    };
}

export function fetchAllResults() {
    return function(dispatch) {
        return api.getAllResults().then(results => {
            dispatch(reportLoadResultsSuccess(results));
        }).catch(error => {
            throw(error);
        });
    };
}
