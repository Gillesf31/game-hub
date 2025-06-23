import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';

export type GameQuery = {
  genreId?: number;
  platformId?: number;
  sortOrder: string;
  search: string;
};

function App() {
  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <>
      <Grid
        templateAreas={{
          base: `"nav" "main"`,
          lg: `"nav nav" "aside main"`,
        }}
        templateColumns={{
          base: '1fr',
          lg: '200px 1fr',
        }}
      >
        <GridItem area='nav'>
          <NavBar
            onSearch={(searchTerm) =>
              setGameQuery({ ...gameQuery, search: searchTerm })
            }
          />
        </GridItem>
        <Show above='lg'>
          <GridItem area='aside' paddingX={2}>
            <GenreList
              selectedGenreId={gameQuery.genreId}
              onSelectedGenre={(genreId) =>
                setGameQuery({ ...gameQuery, genreId })
              }
            />
          </GridItem>
        </Show>
        <GridItem area='main'>
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector
                selectedPlatformId={gameQuery.platformId}
                onSelectedPlatform={(platformId) =>
                  setGameQuery({ ...gameQuery, platformId })
                }
              />
              <SortSelector
                sortOrder={gameQuery.sortOrder}
                onSortChange={(sortOrder) =>
                  setGameQuery({ ...gameQuery, sortOrder })
                }
              />
            </HStack>
          </Box>
          <GameGrid gameQuery={gameQuery} />
        </GridItem>
      </Grid>
    </>
  );
}

export default App;
