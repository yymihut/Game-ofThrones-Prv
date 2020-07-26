export class FetchApi {
    constructor(apiURL) {
        this.apiURL = apiURL;
    }
    fetchData() {
        return fetch(this.apiURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json; charset=utf-8"
            }
        }).then(response => {
            if (response.status >= 200 && response.status < 300) {
                console.log(response);
                return response.json();
                
            }
            else {
                return response.json().then(errData => {
                    console.log(errData);
                });
            }
        })
            .catch(err => {
                console.log(err);
            });
    }
}

