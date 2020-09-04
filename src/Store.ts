import { createStore, applyMiddleware, combineReducers } from 'redux'
import createSagaMiddleware from 'redux-saga'

import mainReducer from '~/redux/main/Reducer'
import authReducer from '~/redux/auth/Reducer'

const reducers = combineReducers({
  main: mainReducer,
  auth: authReducer
})

import mainRootSaga from '~/redux/main/Watcher'
import authRootSaga from '~/redux/auth/Watcher'

const sagaMiddleware = createSagaMiddleware()
const Store = createStore(reducers, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mainRootSaga)
sagaMiddleware.run(authRootSaga)

export default Store