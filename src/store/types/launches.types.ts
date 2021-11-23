/* eslint-disable camelcase */
export const GET_LAUNCH_DATA_REQUEST = '[Launch] Get launch data REQUEST';
export const GET_LAUNCH_DATA_SUCCESS = '[Launch] Get launch data SUCCESS';
export const GET_LAUNCH_DATA_FAILED = '[Launch] Get launch data FAILED';

export interface GetLaunchDataRequest {
  type: typeof GET_LAUNCH_DATA_REQUEST;
  payload: number;
}

export type LaunchDataType = {
  flight_number: number;
  mission_name: string;
  launch_year: number;
  details: string;
  links: { flickr_images: string[] };
};

export interface GetLaunchDataSuccess {
  type: typeof GET_LAUNCH_DATA_SUCCESS;
  payload: LaunchDataType;
}

export interface GetLaunchDataFailed {
  type: typeof GET_LAUNCH_DATA_FAILED;
  payload: string;
}

export type LaunchesActionTypes =
  | GetLaunchDataRequest
  | GetLaunchDataSuccess
  | GetLaunchDataFailed;
