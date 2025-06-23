import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url/image-url';

type GenreListProps = {
  onSelectedGenre: (genreId: number) => void;
  selectedGenreId: number | undefined;
};

const GenreList = ({ onSelectedGenre, selectedGenreId }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background, 600, 400)}
                boxSize='32px'
                borderRadius={8}
                objectFit='cover'
              />
              <Button
                onClick={() => onSelectedGenre(genre.id)}
                fontSize='lg'
                whiteSpace='normal'
                textAlign='left'
                variant='link'
                fontWeight={selectedGenreId === genre.id ? 'bold' : 'normal'}
                textDecoration={
                  selectedGenreId === genre.id ? 'underline' : 'none'
                }
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
