import Config from "react-native-config";
import { call, delay, race } from "redux-saga/effects";
import { TIME_OUT } from "~/Globals";
import Exception, { HTTP_401_UNAUTHORIZED, HTTP_404_NOT_EXIST, HTTP_500_INTERNAL_ERROR, HTTP_NO_CONNECTION, UNEXPECTED_ERROR_CODE } from "~/helpers/Exception";
import { getToken } from "~/redux/auth/Worker";

export function* getAPICall(path:string, method: 'GET'|'POST'|'PUT'|'DELETE', description:string, data?:any){
    try{
        const REQUEST_URL = Config.API_URL + path
        const {result, timeout} = yield race({
            result: yield call(Service, REQUEST_URL, method, description ,data, yield call(getToken)),
            timeout: delay(TIME_OUT)
        })
    
        if (result)
            console.log("SUCESSO")
        else
            console.log("TIMEOUT")
    }catch(e){
        console.log("getAPICALL " + JSON.stringify(e))
    }
}

export const Service = async (
    REQUEST_URL: string,
    method: string,
    description: string,
    data?: any,
    token?: string
    ): Promise<any> => {
    try {
      return fetch(REQUEST_URL, {
        method,
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(data)
      })
        .then(async (response) => {
          return await HttpResponseHandleAPI(response)
        })
        .catch((e) => {
          if (e instanceof Exception) {
            throw e
          }
          throw new Exception(HTTP_NO_CONNECTION, `${description}/1` + " ROTA " + REQUEST_URL)
        })
    } catch (e) {
      throw e instanceof Exception ? e : new Exception(UNEXPECTED_ERROR_CODE, `${description}/2`)
    }
  }

  export const HttpResponseHandleAPI = (response: any) => {
    try {
      if (response.status < 400) {
        return response
          .json()
          .then((json: any) => {
            console.log("JSON " + json)
            return json
          })
          .catch((e: any) => {
            console.log("STATUS OK " + JSON.stringify(response))
          })
      } else if (response.status == HTTP_401_UNAUTHORIZED) {
        return response
          .json()
          .then((json: any) => {
            throw new Exception(HTTP_401_UNAUTHORIZED, 'helpers/HttpResponseHandleAPI/4')
          })
          .catch((e: any) => {
            if (e instanceof Exception) {
              throw e
            }
            throw new Exception(HTTP_500_INTERNAL_ERROR, 'helpers/HttpResponseHandleAPI/5')
          })
      } else {
        throw new Exception(response.status, 'helpers/HttpResponseHandleAPI/6')
      }
    } catch (error) {
      if (response.status == HTTP_404_NOT_EXIST) {
        throw new Exception(HTTP_404_NOT_EXIST, 'helpers/HttpResponseHandleAPI/6')
      }
      if (error instanceof Exception) {
        throw error
      } else {
        throw new Exception(UNEXPECTED_ERROR_CODE, 'helpers/HttpResponseHandleAPI/7')
      }
    }
  }