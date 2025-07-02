import { Box, GridItem } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';

const Layout = () => {
  return (
    <>
      <GridItem area="nav">
        <NavBar />
      </GridItem>
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};

export default Layout;
