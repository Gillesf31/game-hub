import { CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { FetchGamesResponse, Game } from './models/game.type';

const useGames = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    const controller = new AbortController();

    apiClient
      .get<FetchGamesResponse>('/games', {
        signal: controller.signal,
      })
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        if (error instanceof CanceledError) return;
        setError(error.message);
      });

    return () => controller.abort();
  }, []);

  return { games, error };
};

export default useGames;