import * as Keychain from 'react-native-keychain';
import { UserCredentials } from 'react-native-keychain';
import { call } from "redux-saga/effects";
import { ROUTE_LOGIN } from '~/routes';
import { getAPICall } from '../WorkerApi';

export function* getToken(){
    const credentials:UserCredentials = yield call(Keychain.getGenericPassword)
    return credentials.password
}
export function* setToken(token: string){
    try{
        yield call(Keychain.setGenericPassword,'', token,{accessControl:Keychain.ACCESS_CONTROL.APPLICATION_PASSWORD});
        return true
    }catch(e){
        return false
    }
}
export function* WorkerRefreshAuth(){
  
}
