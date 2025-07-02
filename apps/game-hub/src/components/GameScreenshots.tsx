import { Image, SimpleGrid, Spinner } from '@chakra-ui/react';
import useScreenshots from '../hooks/useScreenshots';

type GameScreenshotsProps = {
  gameId: number;
};

const GameScreenshots = ({ gameId }: GameScreenshotsProps) => {
  const { data: screenshots, isLoading, error } = useScreenshots(gameId);

  if (isLoading) return <Spinner />;

  if (error || !screenshots) throw error;

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2}>
      {screenshots?.results.map((screenshot) => (
        <Image key={screenshot.id} src={screenshot.image} />
      ))}
    </SimpleGrid>
  );
};

export default GameScreenshots;
