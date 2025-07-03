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
    <Box
      _hover={{
        transform: 'scale(1.05)',
        transition: 'transform 0.3s ease',
      }}
      borderRadius={borderRadius}
      overflow="hidden"
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
