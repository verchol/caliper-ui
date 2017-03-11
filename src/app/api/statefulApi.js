import 'whatwg-fetch';


class StatefulApi {
    static getVersion() {
        return new Promise((resolve, reject) => {
            fetch(new URL(APP_CONFIG.urls.stateful + '/version')).then((response) => {
                return response.json();
            }).then((results) => {
                resolve(results);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    static getState(id) {
        return new Promise((resolve, reject) => {
            fetch(new URL(APP_CONFIG.urls.stateful + '/states/state/' + id)).then((response) => {
                return response.json();
            }).then((results) => {
                resolve(results);
            }).catch((error) => {
                reject(error);
            });
        });
    }

    static setState(data) {
        return new Promise((resolve, reject) => {
            fetch(new URL(APP_CONFIG.urls.stateful + '/states'), {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then((response) => {
                return response.json();
            }).then((results) => {
                resolve(results);
            }).catch((error) => {
                reject(error);
            });
        });
    }
}
export default StatefulApi;
