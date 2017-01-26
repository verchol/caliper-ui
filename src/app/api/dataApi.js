import 'whatwg-fetch';


class DataApi {

    static getHist(reportId) {
        let url = new URL(APP_CONFIG.urls.dataHist);
        url.searchParams.append('report', reportId);
        return DataApi.makeCall(url);
    }

    static getLine(reportId) {
        let url = new URL(APP_CONFIG.urls.dataLine);
        url.searchParams.append('report', reportId);
        return DataApi.makeCall(url);
    }

    static makeCall(url) {
        return new Promise((resolve, reject) => {
            fetch(url).then(function(response) {
                return response.json();
            }).then(function(result) {
                resolve(result.reports);
            }).catch(function(error) {
                reject(error);
            });
        });
    }
}
export default DataApi;
