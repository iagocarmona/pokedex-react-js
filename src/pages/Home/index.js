import React, { useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import Background from '../../components/Background'
import { CardContainer, HomeContainer } from './styles'
import { useTheme } from 'styled-components'
import PokemonCard from '../../components/PokemonCard'
import useAxios from '../../hooks/useAxios'

const Home = () => {
  const [pokemons, setPokemons] = useState([])
  const theme = useTheme()
  const axios = useAxios()
  const [badges] = useState([
    {
      id: 1,
      name: 'Grass',
      color: theme.color.type.grass,
    },
    {
      id: 2,
      name: 'Poison',
      color: theme.color.type.poison,
    },
  ])

  useEffect(() => {
    const featch = async () => {
      setPokemons(await axios.useGet('pokemon'))
    }
    featch()
    console.log(pokemons)
  }, [])

  return (
    <>
      <Background />
      <HomeContainer>
        <Navbar />
        <CardContainer>
          {pokemons.map((pokemon) => (
            <PokemonCard
              code="#1"
              name={pokemon.name}
              badges={badges}
              image={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png`}
            />
          ))}
        </CardContainer>
      </HomeContainer>
    </>
  )
}

export default Home
