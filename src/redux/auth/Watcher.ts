import { all, takeLatest } from 'redux-saga/effects';
import { WorkerRefreshAuth } from '~/redux/auth/Worker';
import { ACTION_REFRESH_AUTH } from './Constants';

export function* watcherRefreshAuth(){
  yield takeLatest(ACTION_REFRESH_AUTH, WorkerRefreshAuth)
}

export default function* authRootSaga() {
  yield all([watcherRefreshAuth()]);
}
