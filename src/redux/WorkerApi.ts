import { server } from "~/Globals";

export function* getAPICall(path:string,method: 'GET'|'POST'){

    fetch(server.url + path, {
        method
    })
    .then((response) => response.json())
    //If response is in json then in success
    .then((responseJson) => {
        //Success 
        console.log(responseJson);
    })
    //If response is not in json then in error
    .catch((error) => {
        //Error 
        console.error(error);
    });
}