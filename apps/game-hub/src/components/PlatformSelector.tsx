import { Button, Menu } from '@chakra-ui/react';
import useGetPlatform from '../hooks/useGetPlatform';
import usePlatforms from '../hooks/usePlatforms';
import useGameStore from '../store';

const PlatformSelector = () => {
  const selectedPlatformId = useGameStore((s) => s.gameQuery.platformId);
  const selectedPlatform = useGetPlatform(selectedPlatformId);

  const setSelectedPlatformId = useGameStore((s) => s.setPlatformId);
  const { data: platforms, error } = usePlatforms();

  if (error) return null;

  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline" size="sm">
          {selectedPlatform?.name || 'Platforms'}
        </Button>
      </Menu.Trigger>
      <Menu.Positioner>
        <Menu.Content>
          {platforms?.results.map((platform) => (
            <Menu.Item
              key={platform.id}
              value={platform.id.toString()}
              onClick={() => setSelectedPlatformId(platform.id)}
            >
              {platform.name}
            </Menu.Item>
          ))}
        </Menu.Content>
      </Menu.Positioner>
    </Menu.Root>
  );
};

export default PlatformSelector;
