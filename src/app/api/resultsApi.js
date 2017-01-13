import 'whatwg-fetch';


class ResultsApi {

    static getAllResults() {
        return new Promise((resolve, reject) => {
            fetch(APP_CONFIG.urls.allResults).then(function(response) {
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
