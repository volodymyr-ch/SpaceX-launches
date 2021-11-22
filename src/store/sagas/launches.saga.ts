import { call, put, takeEvery } from 'redux-saga/effects';

import {
  GetLaunchDataRequest,
  GET_LAUNCH_DATA_REQUEST,
  LaunchDataType,
} from 'store/types';
import { getLaunchDataSuccess, getLaunchDataFailure } from 'store/actions';
import { getLaunchData as getLaunchDataRequest } from 'apis';

function* getLaunchData(action: GetLaunchDataRequest) {
  try {
    const { data: res } = yield call(getLaunchDataRequest, action.payload);

    yield put(getLaunchDataSuccess(res as LaunchDataType));
  } catch (error: any) {
    yield put(getLaunchDataFailure(error?.response?.data?.message));
  }
}

export default function* launchesSaga() {
  yield takeEvery<GetLaunchDataRequest>(GET_LAUNCH_DATA_REQUEST, getLaunchData);
}
