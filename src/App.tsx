import { Box, Grid, GridItem, HStack, Show } from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';
import GameGrid from './components/GameGrid';
import GameHeading from './components/GameHeading';
import GenreList from './components/GenreList';
import NavBar from './components/NavBar';
import PlatformSelector from './components/PlatformSelector';
import SortSelector from './components/SortSelector';
import { Genre } from './hooks/useGenres';
import { Platform } from './hooks/usePlatforms';

export type GameQuery = {
  genre: Genre | null;
  platform: Platform | null;
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
              selectedGenre={gameQuery.genre}
              onSelectedGenre={(genre) => setGameQuery({ ...gameQuery, genre })}
            />
          </GridItem>
        </Show>
        <GridItem area='main'>
          <Box paddingLeft={2}>
            <GameHeading gameQuery={gameQuery} />
            <HStack spacing={5} marginBottom={5}>
              <PlatformSelector
                selectedPlatform={gameQuery.platform}
                onSelectedPlatform={(platform) =>
                  setGameQuery({ ...gameQuery, platform })
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
