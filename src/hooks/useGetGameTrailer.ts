import { useQuery } from '@tanstack/react-query';
import { GameTrailer } from '../entities/GameTrailer';
import APIClient, { FetchResponse } from '../services/api-client';

const apiClient = new APIClient<GameTrailer>('/games');

const useGetGameTrailer = (slug: string) => {
  return useQuery<FetchResponse<GameTrailer>>({
    queryKey: ['gameTrailer', slug],
    queryFn: () => apiClient.getGameTrailer(slug),
  });
};

export default useGetGameTrailer;
