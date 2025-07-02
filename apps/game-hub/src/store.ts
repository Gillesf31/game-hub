import { create } from 'zustand';
import { devtools } from 'zustand/middleware';

type GameQuery = {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  search: string;
};

type GameState = {
  gameQuery: GameQuery;
  setSearchText: (searchText: string) => void;
  setSortOrder: (sortOrder: string) => void;
  setGenreId: (genreId: number) => void;
  setPlatformId: (platformId: number) => void;
};

const useGameStore = create<GameState>()(
  devtools((set) => ({
    gameQuery: {
      genreId: undefined,
      platformId: undefined,
      sortOrder: '',
      search: '',
    },
    setSearchText: (searchText: string) =>
      set((state) => ({
        gameQuery: { ...state.gameQuery, search: searchText },
      })),
    setSortOrder: (sortOrder: string) =>
      set((state) => ({ gameQuery: { ...state.gameQuery, sortOrder } })),
    setGenreId: (genreId: number) =>
      set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
    setPlatformId: (platformId: number) =>
      set((state) => ({ gameQuery: { ...state.gameQuery, platformId } })),
  }))
);

export default useGameStore;
