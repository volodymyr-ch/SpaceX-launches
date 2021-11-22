import {
  GET_LAUNCH_DATA_FAILED,
  GET_LAUNCH_DATA_REQUEST,
  GET_LAUNCH_DATA_SUCCESS,
  LaunchesActionTypes,
} from 'store/types';

type LaunchesState = {
  data: any; // for now
  loading: boolean;
  loaded: boolean;
};

const initialState: LaunchesState = {
  data: {},
  loading: false,
  loaded: false,
};

export function launchesReducer(
  state: LaunchesState = initialState,
  action: LaunchesActionTypes,
): LaunchesState {
  switch (action.type) {
    case GET_LAUNCH_DATA_REQUEST:
      return {
        ...state,
        loading: true,
        loaded: false,
      };

    case GET_LAUNCH_DATA_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        loaded: true,
      };

    case GET_LAUNCH_DATA_FAILED:
      return {
        ...state,
        loading: true,
        loaded: false,
      };

    default:
      return state;
  }
}

export default launchesReducer;
