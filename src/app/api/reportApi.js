import 'whatwg-fetch';


class ReportApi {

    static getAllReports() {
        return new Promise((resolve, reject) => {
            fetch(APP_CONFIG.urls.allReports).then(function(response) {
                return response.json();
            }).then(function(results) {
                resolve(Object.assign({}, results));
            }).catch(function(error) {
                reject(error);
            });
        });
    }

}
export default ReportApi;
