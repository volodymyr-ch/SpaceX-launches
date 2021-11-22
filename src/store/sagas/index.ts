import { all, fork } from 'redux-saga/effects';

import launchesSaga from './launches.saga';

export default function* rootSaga() {
  yield all([fork(launchesSaga)]);
}
