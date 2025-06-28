import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { useRef } from 'react';
import { BsSearch } from 'react-icons/bs';
import useGameStore from '../store';

const SearchInput = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const setSearchText = useGameStore((s) => s.setSearchText);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (inputRef.current) {
          setSearchText(inputRef.current.value);
        }
      }}
    >
      <InputGroup>
        <InputLeftElement children={<BsSearch />} />
        <Input
          ref={inputRef}
          borderRadius={20}
          placeholder='Search games...'
          variant='filled'
        />
      </InputGroup>
    </form>
  );
};

export default SearchInput;
