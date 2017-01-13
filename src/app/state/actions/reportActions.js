
import * as types from './reportActionTypes';
import api from '../../api/reportApi';

export function reportLoadReportsSuccess(results) {
    return {
        type: types.REPORT__LOAD_REPORTS_SUCCESS,
        results
    };
}

export function fetchAllReports() {
    return function(dispatch) {
        return api.getAllReports().then(results => {
            dispatch(reportLoadReportsSuccess(results));
        }).catch(error => {
            throw(error);
        });
    };
}
