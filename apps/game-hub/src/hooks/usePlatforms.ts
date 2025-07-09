import { Platform } from '@game-hub-monorepo/game-util';
import { useQuery } from '@tanstack/react-query';
import ms from 'ms';
import { platforms } from '../data/platforms';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () =>
  useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.getAll,
    staleTime: ms('24h'),
    initialData: {
      count: platforms.length,
      results: platforms,
      next: null,
      previous: null,
    },
  });

export default usePlatforms;
