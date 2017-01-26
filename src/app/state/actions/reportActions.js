
import * as types from './reportActionTypes';

export function selectReport(report) {
    return {
        type: types.REPORT__SELECT_REPORT,
        report
    };
}
