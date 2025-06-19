import { Box, Button, SimpleGrid, Text } from '@chakra-ui/react';
import React from 'react';
import { GameQuery } from '../App';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardContainer from './GameCardContainer';
import GameCardSkeleton from './GameCardSkeleton';

type GameGridProps = {
  gameQuery: GameQuery;
};

const GameGrid = ({ gameQuery }: GameGridProps) => {
  const {
    data: games,
    error,
    isLoading,
    isFetchingNextPage,
    fetchNextPage,
    hasNextPage,
  } = useGames(gameQuery);
  const skeletons = Array(20)
    .fill(0)
    .map((_, i) => i);

  if (error) return <Text>{error.message}</Text>;

  return (
    <Box padding={'10px'}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={6}>
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton} borderRadius={10}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games?.pages.map((page, index) => (
          <React.Fragment key={index}>
            {page.results.map((game) => (
              <GameCardContainer key={game.id} borderRadius={10}>
                <GameCard game={game} />
              </GameCardContainer>
            ))}
          </React.Fragment>
        ))}
      </SimpleGrid>
      {hasNextPage && (
        <Button
          marginY={5}
          isLoading={isFetchingNextPage}
          onClick={() => fetchNextPage()}
        >
          Load More
        </Button>
      )}
    </Box>
  );
};

export default GameGrid;
