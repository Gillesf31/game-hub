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
    <video
      key={firstTrailer.id}
      src={firstTrailer.data['480']}
      poster={firstTrailer.preview}
      controls
    />
  ) : null;
};

export default GameTrailer;
