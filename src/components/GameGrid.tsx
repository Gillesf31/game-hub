import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import { Genre } from '../hooks/useGenres';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

type GameGridProps = {
  selectedGenre: Genre | null;
};

const GameGrid = ({ selectedGenre }: GameGridProps) => {
  const { data: games, error, isLoading } = useGames(selectedGenre);
  const skeletons = Array(20)
    .fill(0)
    .map((_, i) => i);
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding={'10px'}
        spacing={5}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton} borderRadius={10}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id} borderRadius={10}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
