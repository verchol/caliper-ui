import 'whatwg-fetch';


class ResultsApi {

    static getAllResults(params) {
        params = params || {};
        let url = new URL(APP_CONFIG.urls.allResults);
        Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
        return new Promise((resolve, reject) => {
            fetch(url).then(function(response) {
                return response.json();
            }).then(function(results) {
                resolve(Object.assign({}, results));
            }).catch(function(error) {
                reject(error);
            });
        });
    }

}
export default ResultsApi;
