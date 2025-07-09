import { Game } from '@game-hub-monorepo/game-util';
import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

const apiClient = new APIClient<Game>('/games');

const useGameDetail = (slug: string) => {
  return useQuery<Game>({
    queryKey: ['gameDetail', slug],
    queryFn: () => apiClient.getGameDetails(slug),
  });
};

export default useGameDetail;
