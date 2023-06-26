import { Text } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import apiClient from '../../services/api-client';

type Game = {
  readonly id: number;
  readonly name: string;
};

type FetchGamesResponse = {
  readonly count: number;
  readonly results: Game[];
};

function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState<string>('');

  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>('/games')
      .then((response) => {
        setGames(response.data.results);
      })
      .catch((error) => {
        setError(error.message);
      });
  }, []);

  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
}

export default GameGrid;
