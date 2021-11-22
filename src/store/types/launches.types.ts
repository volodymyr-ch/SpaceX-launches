export const GET_LAUNCH_DATA_REQUEST = '[Launch] Get launch data REQUEST';
export const GET_LAUNCH_DATA_SUCCESS = '[Launch] Get launch data SUCCESS';
export const GET_LAUNCH_DATA_FAILED = '[Launch] Get launch data FAILED';

export interface GetLaunchDataRequest {
  type: typeof GET_LAUNCH_DATA_REQUEST;
  payload: number;
}

export interface GetLaunchDataSuccess {
  type: typeof GET_LAUNCH_DATA_SUCCESS;
  payload: any;
}

export interface GetLaunchDataFailed {
  type: typeof GET_LAUNCH_DATA_FAILED;
  payload: string;
}

export type LaunchesActionTypes =
  | GetLaunchDataRequest
  | GetLaunchDataSuccess
  | GetLaunchDataFailed;
