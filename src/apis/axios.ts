import axios from 'axios';

const spaceXUrl = 'https://api.spacexdata.com';

const axiosInstance = axios.create({
  baseURL: `${spaceXUrl}/v3`,
  responseType: 'json',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosInstance;
