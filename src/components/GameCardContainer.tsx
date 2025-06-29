import { Box } from '@chakra-ui/react';

type GameCardContainerProps = {
  children: React.ReactNode;
  borderRadius: number;
};

const GameCardContainer = ({
  children,
  borderRadius,
}: GameCardContainerProps) => {
  return (
    <Box borderRadius={borderRadius} overflow='hidden'>
      {children}
    </Box>
  );
};

export default GameCardContainer;
