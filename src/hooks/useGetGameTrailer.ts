import { useQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/api-client';

type GameTrailer = {
  id: number;
  name: string;
  preview: string;
  data: { 480: string; max: string };
};

const apiClient = new APIClient<GameTrailer>('/games');

const useGetGameTrailer = (slug: string) => {
  return useQuery<FetchResponse<GameTrailer>>({
    queryKey: ['gameTrailer', slug],
    queryFn: () => apiClient.getGameTrailer(slug),
  });
};

export default useGetGameTrailer;
