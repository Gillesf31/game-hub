import { Button, Menu } from '@chakra-ui/react';
import useGameStore from '../store';

const SortSelector = () => {
  const sortOrder = useGameStore((s) => s.gameQuery.sortOrder);
  const setSelectedSortOrder = useGameStore((s) => s.setSortOrder);
  const sortOrders = [
    { value: '', label: 'Relevance' },
    { value: '-added', label: 'Date added' },
    { value: 'name', label: 'Name' },
    { value: '-released', label: 'Release date' },
    { value: '-metacritic', label: 'Popularity' },
    { value: '-rating', label: 'Average rating' },
  ];

  return (
    <Menu.Root>
      <Menu.Trigger as={Button}>
        Order by :{' '}
        {sortOrders.find((order) => order.value === sortOrder)?.label ||
          'Relevance'}
      </Menu.Trigger>
      <Menu.Content>
        {sortOrders.map((order) => (
          <Menu.Item
            value={order.value}
            key={order.value}
            onClick={() => setSelectedSortOrder(order.value)}
          >
            {order.label}
          </Menu.Item>
        ))}
      </Menu.Content>
    </Menu.Root>
  );
};

export default SortSelector;
