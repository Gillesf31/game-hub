import { AspectRatio } from '@chakra-ui/react';
import useGetGameTrailer from '../hooks/useGetGameTrailer';

type GameTrailerProps = {
  slug: string;
};

const GameTrailer = ({ slug }: GameTrailerProps) => {
  const { data: trailer, isLoading, error } = useGetGameTrailer(slug);

  if (isLoading) return null;

  if (error || !trailer) throw error;

  const firstTrailer = trailer?.results[0];

  return firstTrailer ? (
    <AspectRatio maxW='560px'>
      <video
        key={firstTrailer.id}
        src={firstTrailer.data['480']}
        poster={firstTrailer.preview}
        controls
      />
    </AspectRatio>
  ) : null;
};

export default GameTrailer;
