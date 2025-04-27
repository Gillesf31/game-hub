import { Box } from '@chakra-ui/react';

type GameCardContainerProps = {
  children: React.ReactNode;
  width: number;
  borderRadius: number;
};

const GameCardContainer = ({
  children,
  width,
  borderRadius,
}: GameCardContainerProps) => {
  return (
    <Box width={width} borderRadius={borderRadius} overflow='hidden'>
      {children}
    </Box>
  );
};

export default GameCardContainer;
