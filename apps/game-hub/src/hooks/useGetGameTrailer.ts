import { GameTrailer } from '@game-hub-monorepo/game-util';
import { useQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/api-client';

const apiClient = new APIClient<GameTrailer>('/games');

const useGetGameTrailer = (slug: string) => {
  return useQuery<FetchResponse<GameTrailer>>({
    queryKey: ['gameTrailer', slug],
    queryFn: () => apiClient.getGameTrailer(slug),
  });
};

export default useGetGameTrailer;
