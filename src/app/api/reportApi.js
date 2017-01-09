import 'whatwg-fetch';


class ReportApi {

    static getAllReports() {
        return new Promise((resolve, reject) => {
            fetch(APP_CONFIG.urls.allReports).then(function(response) {
                return response.json();
            }).then(function(reports) {
                resolve(Object.assign([], reports));
            }).catch(function(error) {
                reject(error);
            });
        });
    }

}
export default ReportApi;
