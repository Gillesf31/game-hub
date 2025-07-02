import { Group, Input } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import useGameStore from '../store';

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameStore((s) => s.setSearchText);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current) {
          setSearchText(inputRef.current.value);
          navigate('/');
        }
      }}
    >
      <Group width={'100%'}>
        <BsSearch />
        <Input ref={inputRef} borderRadius={20} placeholder="Search games..." />
      </Group>
    </form>
  );
};

export default SearchInput;
