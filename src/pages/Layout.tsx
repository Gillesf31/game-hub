import { GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <>
      <GridItem area='nav'>
        <NavBar />
      </GridItem>
      <div id='main'>
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
