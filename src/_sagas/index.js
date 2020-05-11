import { all, call } from 'redux-saga/effects';
import site from './site_sagas';

import axios from 'axios';

// axios.defaults.baseURL = 'http://localhost:5000/api';

export default function* rootSaga() {
  yield all([call(site)]);
}
