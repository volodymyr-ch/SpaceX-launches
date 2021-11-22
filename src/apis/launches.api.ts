import axiosInstance from 'apis/axios';

// eslint-disable-next-line import/prefer-default-export
export const getLaunchData = (id: number): Promise<any> =>
  axiosInstance.get(`/launches/${id}`);
