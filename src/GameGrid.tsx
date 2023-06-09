import { SimpleGrid, Text } from '@chakra-ui/react'
import GameCard from './components/GameCard'
import useGames from './hooks/useGames'

const GameGrid = () => {
  const { games, error } = useGames()

  return (
    <>
      {games && <Text>{error}</Text>}
      <SimpleGrid
        columns={{
          sm: 1,
          md: 2,
          lg: 3,
          xl: 5,
        }}
        spacing={10}
        padding={10}
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  )
}

export default GameGrid
