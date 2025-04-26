import { CircularProgress, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';

const GameGrid = () => {
  const { games, error, isLoading } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      {isLoading && <CircularProgress isIndeterminate />}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
