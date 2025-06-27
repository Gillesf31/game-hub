import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { BsChevronDown } from 'react-icons/bs';
import useGetPlatform from '../hooks/useGetPlatform';
import usePlatforms from '../hooks/usePlatforms';
import gameState from '../store';

const PlatformSelector = () => {
  const selectedPlatformId = gameState((s) => s.gameQuery.platformId);
  const selectedPlatform = useGetPlatform(selectedPlatformId);

  const setSelectedPlatformId = gameState((s) => s.setPlatformId);
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
            onClick={() => setSelectedPlatformId(platform.id)}
          >
            {platform.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default PlatformSelector;
