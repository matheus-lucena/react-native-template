import { call } from "redux-saga/effects";
import Config from "react-native-config";

export function* getAPICall(path:string, method: 'GET'|'POST'|'PUT'|'DELETE'){
    console.log(Config.API_URL)
    fetch(Config.API_URL + path, {
        method
    })
    .then((response) => {
        response.json()
        .then((responseJson) => {
            //Success 
            console.log(responseJson);
        })
    })
    //If response is not in json then in error
    .catch((error) => {
        //Error 
        console.error(error);
    });
}