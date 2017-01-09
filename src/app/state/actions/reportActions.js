
import * as types from './reportActionTypes';
import api from '../../api/reportApi';

export function reportLoadReportsSuccess(reports) {
    return {
        type: types.REPORT__LOAD_REPORTS_SUCCESS,
        reports
    };
}

export function fetchAllReports() {
    return function(dispatch) {
        return api.getAllReports().then(reports => {
            dispatch(reportLoadReportsSuccess(reports));
        }).catch(error => {
            throw(error);
        });
    };
}
