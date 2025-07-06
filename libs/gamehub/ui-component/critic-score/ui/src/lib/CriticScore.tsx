import { Badge } from '@chakra-ui/react';

type CriticScoreProps = {
  score: number | null;
};

const SCORE_THRESHOLDS = {
  EXCELLENT: 75,
  GOOD: 60,
} as const;

export const CriticScore = ({ score }: CriticScoreProps) => {
  if (!score) return;

  const color = score > SCORE_THRESHOLDS.EXCELLENT ? 'green' : score > SCORE_THRESHOLDS.GOOD ? 'yellow' : 'red';

  return (
    <Badge fontSize="14px" paddingX={2} borderRadius={8} colorPalette={color}>
      {score}
    </Badge>
  );
};

export default CriticScore;
