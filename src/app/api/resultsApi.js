import 'whatwg-fetch';


class ResultsApi {
    static makeCall(params, url) {
        params = params || {};
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        return new Promise((resolve, reject) => {
            fetch(url).then((response) => {
                return response.json();
            }).then((results) => {
                resolve(results);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    static getAllResults(params) {
        let url = new URL(APP_CONFIG.urls.allResults);
        return this.makeCall(params, url);
    }

    static getResultsByHour(params) {
        let url = new URL(APP_CONFIG.urls.resultsByHour);
        return this.makeCall(params, url);
    }

    static getResultsByDay(params) {
        let url = new URL(APP_CONFIG.urls.resultsByDay);
        return this.makeCall(params, url);
    }

}
export default ResultsApi;
