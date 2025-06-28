import { Box } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
type GameCardContainerProps = {
  children: React.ReactNode;
  borderRadius: number;
  gameId?: number;
};

const GameCardContainer = ({
  children,
  borderRadius,
  gameId,
}: GameCardContainerProps) => {
  const navigate = useNavigate();

  return (
    <Box
      onClick={() => navigate(`/games/${gameId}`)}
      cursor='pointer'
      borderRadius={borderRadius}
      overflow='hidden'
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
