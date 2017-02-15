import * as types from './resultsAggregateActionTypes';
import api from '../../api/resultsApi';

function resultLoadResultsAggregatePending(resultsAggregate) {
    return {
        type: types.RESULTS__LOAD_RESULTS_AGGREGATE_PENDING,
        resultsAggregate
    };
}

function resultLoadResultsAggregateSuccess(resultsAggregate) {
    return {
        type: types.RESULTS__LOAD_RESULTS_AGGREGATE_SUCCESS,
        resultsAggregate
    };
}

export function fetchResultsAggregate(params) {
    params = params || {};
    return (dispatch) => {
        dispatch(resultLoadResultsAggregatePending({}));
        return api.getResultsAggregate(params).then(results => {
            dispatch(resultLoadResultsAggregateSuccess(results));
        }).catch(error => {
            throw(error);
        });
    };
}
