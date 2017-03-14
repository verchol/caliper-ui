import * as types from './resultsAggregateByHourActionTypes';
import api from '../../api/resultsApi';

function resultLoadResultsAggregateByHourPending(resultsAggregateByHour) {
    return {
        type: types.RESULTS__LOAD_RESULTS_AGGREGATE_HOUR_PENDING,
        resultsAggregateByHour
    };
}

function resultLoadResultsAggregateByHourSuccess(resultsAggregateByHour) {
    return {
        type: types.RESULTS__LOAD_RESULTS_AGGREGATE_HOUR_SUCCESS,
        resultsAggregateByHour
    };
}

export function fetchResultsAggregateByHour(params) {
    params = params || {};
    return (dispatch) => {
        dispatch(resultLoadResultsAggregateByHourPending({}));
        return api.getResultsAggregateByHour(params).then(results => {
            dispatch(resultLoadResultsAggregateByHourSuccess(results));
        }).catch(error => {
            throw(error);
        });
    };
}
