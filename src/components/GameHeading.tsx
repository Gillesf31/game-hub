import { Heading } from '@chakra-ui/react';
import useGetGenre from '../hooks/useGetGenre';
import useGetPlatform from '../hooks/useGetPlatform';
import useGameStore from '../store';

const GameHeading = () => {
  const selectedGenreId = useGameStore((s) => s.gameQuery.genreId);
  const selectedGenre = useGetGenre(selectedGenreId);

  const selectedPlatformId = useGameStore((s) => s.gameQuery.platformId);
  const selectedPlatform = useGetPlatform(selectedPlatformId);

  const heading = `${selectedGenre?.name || ''} ${
    selectedPlatform?.name || ''
  } Games`;

  return (
    <Heading as='h1' marginY={5} fontSize={'5xl'}>
      {heading}
    </Heading>
  );
};

export default GameHeading;
