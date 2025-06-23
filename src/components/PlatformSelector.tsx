import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGetPlatform from '../hooks/useGetPlatform';
import usePlatforms from '../hooks/usePlatforms';

type PlatformSelectorProps = {
  selectedPlatformId: number | undefined;
  onSelectedPlatform: (platform: number | undefined) => void;
};

const PlatformSelector = ({
  selectedPlatformId,
  onSelectedPlatform,
}: PlatformSelectorProps) => {
  const selectedPlatform = useGetPlatform(selectedPlatformId);
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronDown />}>
        {selectedPlatform?.name || 'Platforms'}
      </MenuButton>
      <MenuList>
        {platforms?.results.map((platform) => (
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
