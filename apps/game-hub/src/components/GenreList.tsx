import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url/image-url';
import useGameStore from '../store';

const GenreList = () => {
  const { data: genres, isLoading, error } = useGenres();
  const setSelectedGenreId = useGameStore((s) => s.setGenreId);
  const selectedGenreId = useGameStore((s) => s.gameQuery.genreId);

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize="2xl" marginBottom={3}>
        Genres
      </Heading>
      <List.Root listStyleType={'none'}>
        {genres?.results.map((genre) => (
          <List.Item key={genre.id} paddingY={1}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background, 600, 400)}
                boxSize="32px"
                borderRadius={8}
                objectFit="cover"
              />
              <Button
                onClick={() => setSelectedGenreId(genre.id)}
                fontSize="lg"
                whiteSpace="normal"
                textAlign="left"
                variant="ghost"
                fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}
                textDecoration={
                  selectedGenreId === genre.id ? 'underline' : 'none'
                }
              >
                {genre.name}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
