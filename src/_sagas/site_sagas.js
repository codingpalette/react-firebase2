import { all, fork, call, put, takeLatest } from 'redux-saga/effects';

import {
  SITE_LOAD_REQUEST,
  SITE_LOAD_SUCCESS,
  SITE_LOAD_FAILURE,
} from '../_reducers/site_reducer';

import * as firebase from 'firebase/app';

/// **************** ////

function userLoadAPI(userphone) {
  // return axios.post('/api/user/check', { userphone });
}

function* siteLoad(action) {
  try {
    const res = yield call(userLoadAPI);
    yield put({
      type: SITE_LOAD_SUCCESS,
    });
  } catch (e) {
    yield put({
      type: SITE_LOAD_FAILURE,
      error: e,
    });
  }
}

function* watchSiteLoad() {
  yield takeLatest(SITE_LOAD_REQUEST, siteLoad);
}

/// **************** ////

export default function* siteSaga() {
  yield all([fork(watchSiteLoad)]);
}
