import { GameQuery } from '../App';
import useData from './useData';
import { Platform } from './usePlatforms';

export type Game = {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
};

const useGames = (gameQuery: GameQuery) => {
  return useData<Game>(
    '/games',
    {
      params: {
        genres: gameQuery.genre?.id,
        parent_platforms: gameQuery.platform?.id,
        ordering: gameQuery.sortOrder,
        search: gameQuery.search,
      },
    },
    [gameQuery]
  );
};

export default useGames;
