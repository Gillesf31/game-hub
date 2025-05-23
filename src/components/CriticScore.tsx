import { Badge } from '@chakra-ui/react';

export type CriticScoreProps = {
  score: number;
};

const CriticScore = ({ score }: CriticScoreProps) => {
  const color = score > 75 ? 'green' : score > 60 ? 'yellow' : 'red';

  return (
    <Badge fontSize='14px' paddingX={2} borderRadius={8} colorScheme={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
