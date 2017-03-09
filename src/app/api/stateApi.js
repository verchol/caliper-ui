import 'whatwg-fetch';


class StateApi {
    static getState(id) {
        return new Promise((resolve, reject) => {
            fetch(new URL(APP_CONFIG.urls.getState + '/' + id)).then((response) => {
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
            fetch(new URL(APP_CONFIG.urls.setState), {
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
export default StateApi;
