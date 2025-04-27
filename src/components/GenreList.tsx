import { Text, VStack } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  return (
    <VStack>
      {error && <Text>{error}</Text>}
      {isLoading && <Text>Loading...</Text>}
      {data.map((genre) => (
        <Text key={genre.id}>{genre.name}</Text>
      ))}
    </VStack>
  );
};

export default GenreList;
