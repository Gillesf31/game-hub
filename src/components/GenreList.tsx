import { Text, VStack } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { genres, isLoading, error } = useGenres();
  return (
    <VStack>
      {error && <Text>{error}</Text>}
      {isLoading && <Text>Loading...</Text>}
      {genres.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </VStack>
  );
};

export default GenreList;
