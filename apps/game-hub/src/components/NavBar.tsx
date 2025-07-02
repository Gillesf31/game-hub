import { HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import SearchInput from './SearchInput';
import { ColorModeButton } from './color-mode';

const NavBar = () => {
  return (
    <HStack padding="10px">
      <Link to="/">
        <Image src={logo} boxSize="50px" objectFit="cover" />
      </Link>
      <SearchInput />
      <ColorModeButton />
    </HStack>
  );
};

export default NavBar;
