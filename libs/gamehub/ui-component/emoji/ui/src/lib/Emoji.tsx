import { Image, ImageProps } from '@chakra-ui/react';

type Props = {
  rating: number;
  minRatingImage: string;
  averageRatingImage: string;
  maxRatingImage: string;
};

const Emoji = ({
  rating,
  minRatingImage,
  averageRatingImage,
  maxRatingImage,
}: Props) => {
  const MIN_RATING = 3;

  if (rating < MIN_RATING) return null;

  const emojiMap: Record<number, ImageProps> = {
    3: { src: minRatingImage, alt: 'meh', boxSize: '25px' },
    4: { src: averageRatingImage, alt: 'thumb-up', boxSize: '25px' },
    5: { src: maxRatingImage, alt: 'bulls-eye', boxSize: '35px' },
  };

  return <Image {...emojiMap[rating]} marginTop={1} />;
};

export default Emoji;
