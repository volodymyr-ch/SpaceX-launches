import { call, put, takeEvery } from 'redux-saga/effects';

import {
  GetLaunchDataRequest,
  GET_LAUNCH_DATA_REQUEST,
  LaunchDataType,
} from 'store/types';
import { getLaunchDataSuccess, getLaunchDataFailure } from 'store/actions';
import { getLaunchData as getLaunchDataRequest } from 'apis';

const cacheImages = async (images: string[]) => {
  const promises = await images.map((imageUrl) => new Promise((resolve, reject) => {
    const img = new Image();

    img.src = imageUrl;
    img.onload = () => resolve(null);
    img.onerror = () => reject();
  }));

  await Promise.all(promises);
};

function* getLaunchData(action: GetLaunchDataRequest) {
  try {
    const { data: res } = yield call(getLaunchDataRequest, action.payload);

    const { links: { flickr_images: images } } = res;
    yield cacheImages(images);

    yield put(getLaunchDataSuccess(res as LaunchDataType));
  } catch (error: any) {
    yield put(getLaunchDataFailure(error?.response?.data?.message));
  }
}

export default function* launchesSaga() {
  yield takeEvery<GetLaunchDataRequest>(GET_LAUNCH_DATA_REQUEST, getLaunchData);
}
