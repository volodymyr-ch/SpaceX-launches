import {
  GET_LAUNCH_DATA_FAILED,
  GET_LAUNCH_DATA_REQUEST,
  GET_LAUNCH_DATA_SUCCESS,
  LaunchesActionTypes,
  LaunchDataType,
} from 'store/types';

type LaunchesState = {
  data: LaunchDataType;
  loading: boolean;
  loaded: boolean;
};

const initialState: LaunchesState = {
  data: {
    flight_number: 0,
    mission_name: '',
    launch_year: 0,
    links: { flickr_images: [] },
  },
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
