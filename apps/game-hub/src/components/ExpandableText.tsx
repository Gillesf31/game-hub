import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

type ExpandableTextProps = {
  children: string;
  maxCharacter?: number;
};

const ExpandableText = ({
  children,
  maxCharacter = 150,
}: ExpandableTextProps) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <Text>
      {showMore ? children : children.slice(0, maxCharacter)}...{' '}
      <Button
        size="sm"
        colorScheme="yellow"
        fontWeight="bold"
        onClick={() => setShowMore(!showMore)}
      >
        {showMore ? 'Show less' : 'Show more'}
      </Button>
    </Text>
  );
};

export default ExpandableText;
