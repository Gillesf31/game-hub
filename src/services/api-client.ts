import axios from 'axios';

export type FetchResponse<T> = {
  count: number;
  results: T[];
};

export default axios.create({
  baseURL: 'https://api.rawg.io/api',
  params: {
    key: import.meta.env.VITE_REACT_APP_API_KEY,
  },
});
