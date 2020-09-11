const HTTP_NO_CONNECTION = 0
const HTTP_200_OK = 200
const HTTP_422_VALIDATION = 422
const HTTP_401_UNAUTHORIZED = 401
const HTTP_404_NOT_EXIST = 404
const HTTP_500_INTERNAL_ERROR = 500
const TIMEOUT_ERROR_CODE = 1
const NO_CONNECTION_ERROR_CODE = 2
const UNEXPECTED_ERROR_CODE = 3
export {
    HTTP_NO_CONNECTION,
    HTTP_200_OK,
    HTTP_422_VALIDATION,
    HTTP_401_UNAUTHORIZED,
    HTTP_500_INTERNAL_ERROR,
    TIMEOUT_ERROR_CODE,
    NO_CONNECTION_ERROR_CODE,
    UNEXPECTED_ERROR_CODE,
    HTTP_404_NOT_EXIST
}

import { translate } from '~/locales'



export default class Exception {
  code: number
  source: string

  constructor(code: number, source: string) {
    this.code = code
    this.source = source
  }

  getCode = () => {
    return this.code
  }

  getLocalizedText = (): string => {
    switch (this.code) {
      case UNEXPECTED_ERROR_CODE: {
        return translate('unexpected_error')
      }
      case HTTP_NO_CONNECTION: {
        return translate('verify_connection')
      }
      case HTTP_200_OK: {
        return translate('unexpected_error')
      }
      case HTTP_422_VALIDATION: {
        return translate('unexpected_error')
      }
      case HTTP_401_UNAUTHORIZED: {
        return translate('unauthorized')
      }
      case HTTP_404_NOT_EXIST: {
        return translate('not_found')
      }
      case HTTP_500_INTERNAL_ERROR: {
        return translate('unexpected_error')
      }
      case NO_CONNECTION_ERROR_CODE: {
        return translate('unexpected_error')
      }
      case TIMEOUT_ERROR_CODE: {
        return translate('timeout_error')
      }
      default:
        return translate('unexpected_error')
    }
  }
}