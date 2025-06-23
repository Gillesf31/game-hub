import { Heading } from '@chakra-ui/react';
import { GameQuery } from '../App';
import useGetGenre from '../hooks/useGetGenre';
import useGetPlatform from '../hooks/useGetPlatform';

type Props = {
  gameQuery: GameQuery;
};

const GameHeading = ({ gameQuery }: Props) => {
  const selectedPlatform = useGetPlatform(gameQuery.platformId);
  const selectedGenre = useGetGenre(gameQuery.genreId);

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
