import React, { useState, useEffect, useCallback } from 'react'
import Navbar from '../../components/Navbar'
import Background from '../../components/Background'
import { CardContainer, HomeContainer } from './styles'
import PokemonCard from '../../components/PokemonCard'
import api from '../../services/api'
import InfiniteScroll from 'react-infinite-scroll-component'
import Loading from '../../components/Loading'

const Home = () => {
  const [pokemonName, setPokemonName] = useState([])
  const [pokemonInfo, setPokemonInfo] = useState([])
  const [pokemonLimit] = useState(20)
  const [pokemonOffSet, setPokemonOffSet] = useState(pokemonLimit)
  const [isLoading, setIsLoading] = useState(false)

  const handleGetPokemonStats = useCallback((pokemons) => {
    try {
      pokemons.map((pokemon) =>
        api.get(`/pokemon/${pokemon.name}`).then((response) => {
          const result = response.data
          setPokemonInfo((prevState) =>
            [...prevState, result].sort((a, b) => {
              return a.id - b.id
            })
          )
        })
      )
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [])

  const handleGetPokemonName = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get('pokemon', {
        params: {
          limit: pokemonLimit,
        },
      })
      if (response) {
        setPokemonName(response.data.results)
        handleGetPokemonStats(response.data.results)
      }
    } catch (error) {
      console.log(error)
    }
  }, [handleGetPokemonStats, pokemonLimit])

  const handleLoadNewPokemons = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await api.get('pokemon', {
        params: {
          limit: pokemonLimit,
          offset: pokemonOffSet,
        },
      })
      if (response) {
        setPokemonName((prevState) => [...prevState, ...response.data.results])
        handleGetPokemonStats(response.data.results)
        setPokemonOffSet((prevState) => prevState + pokemonLimit)
      }
    } catch (error) {
      console.log(error)
    } finally {
      setIsLoading(false)
    }
  }, [handleGetPokemonStats, pokemonLimit, pokemonOffSet])

  useEffect(() => {
    handleGetPokemonName()
  }, [])

  return (
    <>
      <InfiniteScroll
        dataLength={pokemonInfo.length}
        next={handleLoadNewPokemons}
        hasMore={isLoading ? false : true}
        scrollThreshold={0.9}
      >
        <Background />
        <HomeContainer>
          <Navbar />
          <CardContainer>
            {isLoading ? <Loading /> : <></>}
            {pokemonInfo ? (
              pokemonName.map((pokemon, index) => (
                <PokemonCard
                  color={pokemonInfo[index]?.types}
                  key={index}
                  code={`#${pokemonInfo[index]?.id}`}
                  name={pokemon.name}
                  badges={pokemonInfo[index]?.types}
                  image={
                    pokemonInfo[index]?.sprites.other['official-artwork']
                      .front_default
                  }
                />
              ))
            ) : (
              <h1>Loading...</h1>
            )}
          </CardContainer>
        </HomeContainer>
      </InfiniteScroll>
    </>
  )
}

export default Home
