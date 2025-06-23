import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import usePlatforms from '../hooks/usePlatforms';

type PlatformSelectorProps = {
  selectedPlatformId: number | undefined;
  onSelectedPlatform: (platform: number | undefined) => void;
};

const PlatformSelector = ({
  selectedPlatformId,
  onSelectedPlatform,
}: PlatformSelectorProps) => {
  const { data, error } = usePlatforms();
  const platform = data?.results.find(
    (platform) => platform.id === selectedPlatformId
  );

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {platform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {data?.results.map((platform) => (
          <MenuItem
            key={platform.id}
            onClick={() => onSelectedPlatform(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
