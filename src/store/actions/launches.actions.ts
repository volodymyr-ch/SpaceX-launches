import {
  LaunchesActionTypes,
  GET_LAUNCH_DATA_REQUEST,
  GET_LAUNCH_DATA_SUCCESS,
  GET_LAUNCH_DATA_FAILED,
  LaunchDataType,
} from 'store/types';

export const getLaunchDataRequest = (id: number): LaunchesActionTypes => ({
  type: GET_LAUNCH_DATA_REQUEST,
  payload: id,
});

export const getLaunchDataSuccess = (
  res: LaunchDataType,
): LaunchesActionTypes => ({
  type: GET_LAUNCH_DATA_SUCCESS,
  payload: res,
});

export const getLaunchDataFailure = (err: string): LaunchesActionTypes => ({
  type: GET_LAUNCH_DATA_FAILED,
  payload: err,
});
