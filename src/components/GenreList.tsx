import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url/image-url';

type GenreListProps = {
  onSelectedGenre: (genre: Genre) => void;
  selectedGenre: Genre | null;
};

const GenreList = ({ onSelectedGenre, selectedGenre }: GenreListProps) => {
  const { data, isLoading, error } = useGenres();

  if (error) return null;

  if (isLoading) return <Spinner />;

  return (
    <>
      <Heading fontSize='2xl' marginBottom={3}>
        Genres
      </Heading>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={1}>
            <HStack>
              <Image
                src={getCroppedImageUrl(genre.image_background, 600, 400)}
                boxSize='32px'
                borderRadius={8}
                objectFit='cover'
              />
              <Button
                onClick={() => onSelectedGenre(genre)}
                fontSize='lg'
                whiteSpace='normal'
                textAlign='left'
                variant='link'
                fontWeight={selectedGenre?.id === genre.id ? 'bold' : 'normal'}
                textDecoration={
                  selectedGenre?.id === genre.id ? 'underline' : 'none'
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
