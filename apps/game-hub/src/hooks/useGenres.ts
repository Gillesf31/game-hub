import { Genre } from '@game-hub-monorepo/game-util';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { genres } from '../data/genres';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Genre>('/genres');

const useGenres = () =>
  useQuery({
    queryKey: ['genres'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: {
      count: genres.length,
      results: genres,
      next: null,
      previous: null,
    },
  });

export default useGenres;
