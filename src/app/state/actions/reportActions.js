
import * as types from './reportActionTypes';

function reportSelectReport(report) {
    return {
        type: types.REPORT__SELECT_REPORT,
        report
    };
}

export function selectReport(report) {
    return function (dispatch) {
        return dispatch(reportSelectReport(report));
    };
}
