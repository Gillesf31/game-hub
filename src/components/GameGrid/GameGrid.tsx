import {SimpleGrid, Text} from '@chakra-ui/react';
import useGames from '../../hooks/useGames';
import GameCard from "../GameCard/GameCard";
import GameCardSkeleton from "../GameCard/GameCardSkeleton";

function GameGrid() {
    const {games, error, isLoading} = useGames();
    const skeletons = Array(6).fill(0);

    return (
        <>
            {error && <Text>{error}</Text>}
            <SimpleGrid columns={{sm: 1, md: 2, lg: 3, xl: 5}} spacing={10}>
                {isLoading && skeletons.map((skeleton) => <GameCardSkeleton key={skeleton}/>)}
                {games.map((game) => (
                    <GameCard key={game.id} game={game}/>
                ))}
            </SimpleGrid>
        </>
    );
}

export default GameGrid;
