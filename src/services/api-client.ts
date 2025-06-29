import axios, { AxiosRequestConfig } from 'axios';

export type FetchResponse<T> = {
  count: number;
  results: T[];
  next: string | null;
  previous: string | null;
};

const axiosInstance = axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: import.meta.env.VITE_REACT_APP_API_KEY,
  },
});

class APIClient<T> {
  constructor(public endpoint: string) {}

  getAll = (config: AxiosRequestConfig) => {
    return axiosInstance
      .get<FetchResponse<T>>(this.endpoint, config)
      .then((res) => res.data);
  };

  getGameDetails = (slug: string) => {
    return axiosInstance
      .get<T>(`${this.endpoint}/${slug}`)
      .then((res) => res.data);
  };
}

export default APIClient;
