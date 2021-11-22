import axiosInstance from 'apis/axios';
import { LaunchDataType } from 'store/types';

// eslint-disable-next-line import/prefer-default-export
export const getLaunchData = (id: number): Promise<LaunchDataType> =>
  axiosInstance.get(`/launches/${id}`);
