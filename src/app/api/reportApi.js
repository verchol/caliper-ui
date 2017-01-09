import 'whatwg-fetch';

import urls from './urls';


class ReportApi {

    static getAllProfiles() {
        return new Promise((resolve, reject) => {
            fetch(urls.search.all).then(function(response) {
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
