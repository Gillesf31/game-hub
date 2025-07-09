import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { Game } from '@game-hub-monorepo/game-util';
import { getCroppedImageUrl } from '@game-hub-monorepo/image-util';
import { CriticScore } from '@game-hub-monorepo/ui-components-critic-score-ui';
import { Emoji } from '@game-hub-monorepo/ui-components-emoji-ui';
import { PlatformIconList } from '@game-hub-monorepo/ui-components-platform-icon-ui';
import { useNavigate } from 'react-router-dom';
import bullsEye from '../assets/bulls-eye.webp';
import meh from '../assets/meh.webp';
import noImagePlaceholder from '../assets/no-image-placeholder.webp';
import thumbUp from '../assets/thumbs-up.webp';

type GameCardProps = {
  game: Game;
};

const GameCard = ({ game }: GameCardProps) => {
  const navigate = useNavigate();

  return (
    <Card.Root
      cursor="pointer"
      width={'250px'}
      borderRadius={10}
      overflow="hidden"
      onClick={() => navigate(`/games/${game.slug}`)}
    >
      <Image
        src={getCroppedImageUrl(
          game.background_image,
          noImagePlaceholder,
          600,
          400
        )}
      />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji
            rating={game.rating_top}
            minRatingImage={meh}
            averageRatingImage={thumbUp}
            maxRatingImage={bullsEye}
          />
        </Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
