import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import NavBar from '../components/NavBar';

const ErrorPage = () => {
  const error = useRouteError();

  return (
    <>
      <NavBar />
      <Box padding={5}>
        <Heading>Oops...</Heading>
        {isRouteErrorResponse(error) ? (
          <Text>{error.status} Invalid page</Text>
        ) : (
          <Text>Sorry, an unexpected error has occurred.</Text>
        )}
      </Box>
    </>
  );
};

export default ErrorPage;
