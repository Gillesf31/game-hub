import { useQuery } from '@tanstack/react-query';
import { genres } from '../data/genres';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Genre>('/genres');

export type Genre = {
  id: number;
  name: string;
  image_background: string;
};

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: 24 * 60 * 60 * 1000, // 24 hours
    initialData: {
      count: genres.length,
      results: genres,
      next: null,
      previous: null,
    },
  });

export default useGenres;
