import * as Keychain from 'react-native-keychain';
import { UserCredentials } from 'react-native-keychain';
import { call, put } from "redux-saga/effects";
import { translate } from '~/locales';
import { REDUCER_FETCH_MAIN_DATA } from "~/redux/main/Constants";
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
    yield call(getAPICall,'','GET')
    /*console.log(yield call(getToken))
    if(yield call(setToken,"TESTE TOKEN")){

    }else{
        yield put({
            type:REDUCER_FETCH_MAIN_DATA,
            payload:{message:translate('failure_login')}
        })
    }*/
}