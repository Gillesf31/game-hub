import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  Spinner,
} from '@chakra-ui/react';
import { getCroppedImageUrl } from '@game-hub-monorepo/image-util';
import noImagePlaceholder from '../assets/no-image-placeholder.webp';
import useGenres from '../hooks/useGenres';
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
                src={getCroppedImageUrl(
                  genre.image_background,
                  noImagePlaceholder,
                  600,
                  400
                )}
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
                {genre.name.length < 15
                  ? genre.name
                  : `${genre.name.substring(0, 15)}...`}
              </Button>
            </HStack>
          </List.Item>
        ))}
      </List.Root>
    </>
  );
};

export default GenreList;
