import { Card, CardBody, Heading, HStack, Image } from '@chakra-ui/react';
import { CriticScore } from '@game-hub-monorepo/ui-components-critic-score-ui';
import { useNavigate } from 'react-router-dom';
import { Game } from '../entities/Game';
import getCroppedImageUrl from '../services/image-url/image-url';
import Emoji from './Emoji';
import PlatformIconList from './PlatformIconList';

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
      <Image src={getCroppedImageUrl(game.background_image, 600, 400)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="2xl">
          {game.name}
          <Emoji rating={game.rating_top} />
        </Heading>
      </CardBody>
    </Card.Root>
  );
};

export default GameCard;
